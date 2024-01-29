import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputEmoji from "react-input-emoji";
import useDataCall from "../hooks/useDataCall";
import { btnGreen, btnRed } from "../styles/globalStyles";
import { useSelector } from "react-redux";

  const CommentBlock = ({ item }) => {

  const [text, setText] = useState();
  const { getData, postData } = useDataCall();
  const info = { author: item.author, comment: text };
  const { user } = useSelector((state) => state?.auth);

  useEffect(() => {
    getData("blogs");
  }, []);

  const handleComment = () => {
if(info.comment.length>=1){
  postData("blogs", `${item._id}/comment`, info);
  setText("");
}     
  };


  return (
    <>
      <Box display={"flex"} alignItems={"center"} p={2}>
        <Box width={"100px"}>
          <Avatar src={user?.image}/>
           
        </Box>

        <Box width={"100%"}>
          <Box type="form">
            <InputEmoji
              value={text}
              onChange={setText}
              cleanOnEnter
              placeholder="Type a message"
            />

            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Box
                display={"flex"}
                width={"100%"}
                gap={1}
                justifyContent={"end"}
                height={"2rem"}
                mt={"0.5rem"}
              >
                <Button sx={btnRed} onClick={() => setText("")}>
                  Clear
                </Button>
                <Button sx={btnGreen} onClick={handleComment}>
                  Comment
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {item?.comments?.map((item) => (
        <>
          <Box
            sx={{ backgroundColor: "#ffffffec", padding: "1rem" }}
            gap={2}
            display={"flex"}
            justifyContent={"s"}
          >
            <Avatar src={item?.userImage}/>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={1}
              width={"100%"}
            >
              <Typography>{item.comment}</Typography>
              <Typography textAlign={"end"} sx={{ textAlign: "end" }}>
                {item.update_date.slice(0, 10)} /{" "}
                {item.update_date.slice(11, 19)}
              </Typography>
            </Box>
          </Box>
          <hr />
        </>
      ))}
    </>
  );
  };

export default CommentBlock;