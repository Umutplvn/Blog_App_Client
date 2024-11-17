import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Avatar, Button, Typography, Box, Grid, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CommentBlock from "../components/CommentBlock";
import useDataCall from "../hooks/useDataCall";
import { btnGreen, btnRed, detailPageStyle } from "../styles/globalStyles";
import DeleteModal from "../components/DeleteModal";
import UpdateModal from "../components/UpdateModal";

const DetailPage = () => {
  const { blogs } = useSelector((state) => state?.blogs);
  useEffect(() => {
    getViews(`${id}`)
  }, []);

  const { user } = useSelector((state) => state?.auth);
  const { id } = useParams();
  const { userId } = useSelector((state) => state?.auth);
  const veri = blogs?.filter((data) => data?._id == id)|| null;
  const [comment, setComment] = useState(false);
  const { postData, getData, getViews } = useDataCall();
  const [open, setOpen] = React.useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false);
  const [info, setInfo] = useState();
  const handleUpdateOpen = (item) => {
    setUpdateOpen(true)
    setInfo({
      title: item.title,
      content: item.content,
      image: item.image,
      category_name: item.category_name._id,
      status: item.status,
      slug: "",
      _id:item._id
    })
  };

  const likesN = veri[0]?.likes || [];
  const likeDet = likesN?.map((item) => item?._id);
  const author= veri?.map((item)=>item?.author?._id)
  const heart=likeDet?.includes(userId)


  const currentUser = user?._id

  const handleLikes = (id) => {
    postData(`blogs`, `${id}/like/`, "");
  };


  return (
    <Grid container sx={detailPageStyle}>
      <Grid
        item
        xs={11}
        sm={10}
        md={9}
        lg={7}
        xl={5}
        m={"auto"}
        width={"100%"}
        sx={{ mt: "5rem" }}
      >
        <Box>
          <Box mt={"1rem"}>
            {veri?.map((item) => (
              <Paper
                key={item?._id}
                elevation={3}
                sx={{
                  p: "1.5rem",
                  m: "auto",
                  color: "black",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box height={"200px"} padding={"0.5rem"} textAlign={"center"}>
                  <img
                    src={item?.image}
                    width={"250px"}
                    style={{
                      borderRadius: "1rem",
                      aspectRatio: "4/3",
                      objectFit: "contain",
                    }}
                  />
                </Box>

                <Typography
                  component={"h4"}
                  variant="h5"
                  fontWeight={"600"}
                  sx={{ textAlign: "center" }}
                >
                  {item?.title}
                </Typography>

                {/* Content Text */}
                <Box padding={"0.5rem"}>
                  <Typography m={"2rem 0"}>{item?.content}</Typography>
                  <Typography sx={{ mt: "15px" }}>
                    {item?.publish_date.slice(0, 10)} /{" "}
                    {item?.publish_date.slice(11, 19)}
                  </Typography>
                </Box>
                {/* Content User Info */}
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  padding={"0.5rem"}
                  gap="10px"
                >
                  <Avatar src={item?.author?.image}/>
                  <Typography display={"flex"} alignItems={"center"} color={"#036BDB"} fontWeight={"700"} fontSize={"14px"}>{item?.author?.username?.toLocaleUpperCase()}</Typography>
                </Box>

                {/* Content Buttons and Values Info/ Read More */}
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box display={"flex"} padding={"0.5rem"} gap={"0.5rem"}>
                    <Box display={"flex"}>
                      {heart ? (
                        <FavoriteIcon
                          sx={{ cursor: "pointer", color: "red" }}
                          onClick={() => handleLikes(item?._id)}
                        />
                      ) : (
                        <FavoriteIcon
                          sx={{ cursor: "pointer", color: "black" }}
                          onClick={() => handleLikes(item?._id)}
                        />
                      )}

                      <Typography>{item?.likes.length}</Typography>
                    </Box>

                    <Box display={"flex"}>
                      <ChatBubbleIcon
                        onClick={() => setComment(!comment)}
                        sx={{ cursor: "pointer" }}
                      />
                      <Typography>{item?.comments?.length}</Typography>
                    </Box>
                    <Box display={"flex"}>
                      <RemoveRedEyeIcon sx={{ cursor: "pointer" }} />
                      <Typography>{item?.post_views?.length}</Typography>
                    </Box>
                  </Box>
                </Box>     

                {author==currentUser && (
                  <>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      gap={2}
                      m="1rem"
                    >
                      <Button sx={btnRed} onClick={handleOpen}>
                        Delete
                      </Button>
                      <Button sx={btnGreen} onClick={()=>handleUpdateOpen(item)}>
                        Update
                      </Button>
                    </Box>

                    <DeleteModal
                      open={open}
                      handleClose={handleClose}
                      handleOpen={handleOpen}
                      id={item?._id}
                    />

                  </>
                )}

                {comment && <CommentBlock item={item} />}
                <UpdateModal
                  updateOpen={updateOpen}
                  handleUpdateClose={handleUpdateClose}
                  info={info}
                  setInfo={setInfo}
                />
              </Paper>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default DetailPage;
