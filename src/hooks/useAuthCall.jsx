import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  passwordUpdateSuccess
} from "../features/authSlice";
import { useNavigate } from "react-router";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosWithToken } = useAxios();

  const login = async (userData) => {
    dispatch(fetchStart);
    try {
      const data  = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/auth/login/`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successfull");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("Incorrect login. Double check your details and try again.  ");
    }
  };

  const register = async (userData) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/auth/register/`,
        userData
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register successfull");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Register failed");
    }
  };

  const logout = async () => {
    dispatch(fetchStart);
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}users/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout successfull");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error);
    }
  };

  const passwordUpdate = async (data) => {
    try {
     const res= await axiosWithToken.put(
        `${process.env.REACT_APP_BASE_URL}users/auth/password/change`,
        data
      );
      dispatch(passwordUpdateSuccess(res))
      toastSuccessNotify("Password Changed Successfully");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Failed to change password");
      toastErrorNotify(error);
    }
  };

  return { login, register, logout, passwordUpdate };
};

export default useAuthCall;
