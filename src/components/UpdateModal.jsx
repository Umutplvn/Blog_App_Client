import Modal from "@mui/material/Modal";
import { Box, Button, Grid, Input, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import useDataCall from "../hooks/useDataCall";
import { useNavigate } from "react-router";
import { btnGreen, btnRed } from "../styles/globalStyles";

const UpdateModal = ({ updateOpen, handleUpdateClose, info, setInfo }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getData("categories");
  }, []);

  const { categories } = useSelector((state) => state?.blogs);
  // const { categories } =[]
  const { putData, getData } = useDataCall();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (info) => {
    putData("blogs", info._id, info);
    navigate(-1)
  };

  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
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
                
              }}
            >
              <FormControl sx={{ p: "1rem" }}>
                <Input
                  onChange={handleChange}
                  placeholder="Title"
                  sx={{ padding: "1rem", borderRadius: "1rem"}}
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
                    overflow:"scroll"
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
                    // labelId="category"
                    // label="Category"
                    // id="category"
                    onChange={handleChange}
                    value={info?.category_name}
                    name="category_name"
                  >
                   {categories?.map((item, index) => (
                      <MenuItem
                        value={item?._id}
                        // name={item?.name}
                        key={index}
                      >
                        {item?.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box
                  sx={{ m: "auto", display: "flex", gap: "1rem", p: "1rem" }}
                >
                  <Button sx={btnRed} onClick={handleUpdateClose}>
                    Cancel
                  </Button>
                  <Button sx={btnGreen} onClick={() => handleSubmit(info)}>
                    Public
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

export default UpdateModal;
