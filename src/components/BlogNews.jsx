import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { btnLead } from "../styles/globalStyles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useDataCall from "../hooks/useDataCall";
import { useEffect } from "react";


const BlogNews = () => {  
  
const { blogs } = useSelector((state) => state?.blogs);

  const { userId } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const { postData } = useDataCall();
  
  const handleLikes =(id) => {
    if(userId){
      const data = postData(`blogs`, `${id}/like/`, "");
    }else{
      navigate('/login')
    }
  };

  const handleReturn = (item) => {
    const data = item?.likes?.map((item) => item?._id);
    if (data && data?.includes(userId)) {
      return true;
    } else {
      return false;
    }
  };

  const handleNavigate = (id) => {
    navigate(`detail/${id}`);
  };
  const reverse=[...blogs].reverse()
  const blogPost=reverse?.filter((item)=>item.status=="p") 

return (
    <>
    <Box container marginBottom={"4rem"} >
      <Grid container>
        {blogPost?.map((item) => (
          <Grid
            key={item?._id}
            item
            xs={12}
            sm={4}
            md={3}
            sx={{
              minWidth: "320px",
              height: "500px",
              padding: "1rem",
              m: "1rem auto",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                color: "black",
                "&:hover": { backgroundColor: "#ffffff" },
                transition: "0.3s",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box height={"200px"} padding={"0.5rem"} textAlign={"center"}>
                <img
                  alt={item?.title}
                  src={item?.image}
                  height={"180px"}
                  style={{
                    padding: "1rem",
                    aspectRatio: "4/3",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Typography
                component={"h4"}
                variant="h5"
                fontWeight={"600"}
                sx={{ textAlign: "center",overflow: "hidden", whiteSpace: "pre", padding:"0.5rem" }}
                textOverflow="ellipsis"


              >
                {item?.title}
              </Typography>

              {/* Content Text */}
              <Box padding={"0.5rem"}>
                <Typography
                  height={"80px"}
                  textOverflow="ellipsis"
                  sx={{ overflow: "hidden", whiteSpace: "pre" }}
                >
                  {item?.content}
                </Typography>
                <Typography sx={{ mt: "15px" }}>
                  {item?.publish_date.slice(0, 10)} /{" "}
                  {item?.publish_date.slice(11, 19)}
                </Typography>
              </Box> 
              {/* Content User Info */}
              <Box
                display={"flex"}
                alignitems={"center"}
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
                alignitems={"center"}
              >
                <Box display={"flex"} padding={"0.5rem"} gap={"0.5rem"}>
                  <Box display={"flex"}>
                    {handleReturn(item) ? (
                      <FavoriteIcon
                        sx={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleLikes(item._id)}
                      />
                    ) : (
                      <FavoriteIcon
                        sx={{ cursor: "pointer", color: "black" }}
                        onClick={() => handleLikes(item._id)}
                      />
                    )}

                    <Typography>{item?.likes.length}</Typography>
                  </Box>
                  <Box display={"flex"}>
                    <ChatBubbleIcon sx={{ cursor: "pointer" }} />
                    <Typography>{item?.comments?.length}</Typography>
                  </Box>
                  <Box display={"flex"}>
                    <RemoveRedEyeIcon sx={{ cursor: "pointer" }} />
                    <Typography>{item?.post_views.length}</Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    sx={btnLead}
                    onClick={() => handleNavigate(item?._id)}
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
   
  );
};

export default BlogNews;
