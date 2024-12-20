import Modal from "@mui/material/Modal";
import { Box, Button, Grid, Input, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import useDataCall from "../hooks/useDataCall";
import { btnGreen, btnRed } from "../styles/globalStyles";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router";

const DraftBlogModal = ({ open, handleClose, info, setInfo }) => {
  const { putData } = useDataCall();
  const { categories } = useSelector((state) => state?.blogs);
  const navigate=useNavigate()
  const { getData } = useDataCall();
  useEffect(() => {
    getData("categories");
  }, []);

  const status = [
    { name: "Publish", letter: "p" },
    { name: "Draft", letter: "d" },
  ];

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });

  };

  const handleSubmit = (info) => {
    putData("blogs", info._id, info);
    handleClose();
    if(info.status=="p"){
  navigate("/")
}else{
  navigate("/drafts")
}
  };



  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container mt={4}>
          <Grid item xs={11} md={6} m={"auto"}>
            <Paper
              elevation={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                border: "2px solid, black",
                borderRadius: "1rem",
                p: "1rem",
              }}
            >
              <FormControl>
                <Input
                  onChange={handleChange}
                  placeholder="Title"
                  sx={{ padding: "1rem", borderRadius: "1rem" }}
                  name="title"
                  value={info?.title}
                />

                <TextField
                  onChange={handleChange}
                  placeholder="Content"
                  value={info?.content}
                  sx={{
                    height: "200px",
                    borderRadius: "1rem",
                    "& fieldset": { border: "none" },
                    overflow: "scroll",
                  }}
                  multiline
                  name="content"
                />
                <Input
                  onChange={handleChange}
                  type="text"
                  name="image"
                  variant="standart"
                  placeholder="Image URL"
                  value={info?.image}
                  sx={{
                    padding: "1rem",
                    borderTop: "solid #aaaaaa",
                  }}
                />

                <FormControl fullWidth sx={{ mt: "1rem" }}>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>

                  <Select
                    // labelId="category_name"
                    // label="category_name"
                    // id="category_name"
                    onChange={handleChange}
                    value={info?.category_name}
                    name="category_name"
                  >
                    {categories?.map((item, index) => (
                      <MenuItem
                        value={item?._id}
                        key={index}
                      >
                        {item?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ mt: "0.5rem" }}>
                  <InputLabel id="demo-simple-select-label">
                    Publish/Draft
                  </InputLabel>
                  <Select
                    labelId="Publish/Draft"
                    id="Publish/Draft"
                    label="Publish/Draft"
                    name="status"
                    onChange={handleChange}
                    value={info?.status}
                  >
                    {status?.map((item, index) => (
                      <MenuItem
                        key={index}
                        name={status.name}
                        value={item.letter}
                      >
                        {item?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Box sx={{ display: "flex", m: "1rem auto", gap: "1rem" }}>
                  <Button sx={btnRed} onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button sx={btnGreen} onClick={() => handleSubmit(info)}>
                    SAVE
                  </Button>
                </Box>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default DraftBlogModal;
