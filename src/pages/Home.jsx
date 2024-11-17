import { useSelector } from "react-redux";
import BlogNews from "../components/BlogNews";
// import useDataCall from "../hooks/useDataCall";
// import { useEffect, useState } from "react";
import { homeStyle } from "../styles/globalStyles";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import spinner from "../assets/loading.gif"
import useDataCall from "../hooks/useDataCall";

// import News from "../components/News";
// import axios from "axios";

const Home = () => {
  const { getData } = useDataCall();
  let {loading} =useSelector((state)=>state.blogs)

  useEffect(() => {
    getData("blogs");
    getData("categories");
    //   getNews();
  }, []);


  // const [news, setNews] = useState();

  // const getNews = async () => {
  //   try {
  //     const { data } = await axios(
  //       `http://newsapi.org/v2/top-headlines?pageSize=10&country=ie&apiKey=${process.env.REACT_APP_KEY_NEWS}`
  //     );
  //     setNews(data.articles);
    
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <div style={{backgroundAttachment:"fixed", height:"100vh", overflow:"scroll"}}>
      <Grid container sx={{display:"flex", justifyContent:"center"}}>
        <Grid item xs={11} md={11} mt={"4rem"}>
        {loading ? 
        
        <Box sx={{width:"100wh", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
          <img src={spinner} style={{backgroundColor:"rgb(255, 255, 255)", width:"10rem"}}/> 
        </Box>
: <BlogNews /> } 
        </Grid>
        {/* <BlogNews/> Blognews can be used here with a proper API */}
      </Grid>
    </div>
  );
};

export default Home;
