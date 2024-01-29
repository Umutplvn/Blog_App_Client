import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}api/`,
    headers: { Authorization: `${token}` },
  });

  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}api/`,
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;
