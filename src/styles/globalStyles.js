import bgImage from "../assets/loginWallpaper.jpeg"



export const flexBox = {
  display: "flex",
 m:"auto",
  flexDirection: "column",
  gap: "1.8rem",
  m: "auto",
  padding: "2rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "1rem",
};

export const flexBoxRow = {
    display: "flex",
    gap: "1rem",
    color:"white",
    width: "250px",
    mt: "1.2rem",
    backgroundColor:"white",
    padding: "2rem 1rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    
  };

export const flexContainer = {
    display: "flex",
    flexDirection: "column",
   alignItems:"center",
    gap: "1rem",
    m: "30px",
    maxWidth:"400px",
    minWidth:"320px",
    justifyContent: "center",
    border:"1px solid black",
    borderRadius: "1rem",
    backgroundColor:"white",
    boxShadow:  "rgba(0, 0, 0, 0.24) 12px 3px 8px",
    padding:"1rem"
    
};


export const loginStyle={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  backgroundPosition:"center",
  backgroundSize:"cover",
  height:"100vh",
  width:"100vw",
  backgroundAttachment:"fixed",
  overflow:"scroll",
}


export const registerContainer= {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  m: "20px",
  maxWidth:"600px",
  minWidth:"300px",
  maxHeight:"85vh",
  padding: "2rem 1rem",
  marginTop:"5rem",
  alignItems: "center",
  border:"1px solid black",
  borderRadius: "1rem",
  backgroundColor: "white",
  boxShadow:  "rgba(0, 0, 0, 0.24) 12px 3px 8px",
  overflow:"scroll",
  
  
};

export const btnStyle = {
  variant: "contained",
  m:"auto",
  mt:"2rem",
  type: "submit",
  backgroundColor: "black",
  color: "white",
  width: "8rem",
  display: "flex",
  "&:hover":{backgroundColor:"#000400",  boxShadow:  "rgba(0, 0, 0, 0.24) 2px 3px 3px"}
  
};

export const btnRed ={
  backgroundColor:"#b71c1c", 
  color:"white", 
  "&:hover":{backgroundColor:"#b71b1d"}
}

export const btnGreen ={
  backgroundColor: "green", 
  color:"white", 
  "&:hover":{backgroundColor:"success.dark"},

}


export const btnLead= {
 variant: "contained",
 m:"1rem 0.5rem",
  type: "submit",
  backgroundColor: "black",
  color: "white",
  width: "8rem",
  display: "flex",
  "&:hover":{backgroundColor:"#000400",  boxShadow:  "rgba(0, 0, 0, 0.24) 2px 3px 3px"}
  
};

export const icon={
    cursor:"pointer",
    color:"white",
    "&:hover": {color:"black", scale:"1.2", transition:"0.4s"}
}




export const registerStyle={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  height:"100vh",
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundAttachment:"fixed"
  
}


    


export const detailPageStyle = {
  backgroundColor:"white",
  m:"auto",
  alignItems:"center",
  height:"130vh",
  display:"flex",
  flexDirection:"column",
  backgroundAttachment:"fixed",
  overflow:"scroll",
  paddingBottom:"5rem"
 
}

export const emojiStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export const profileBox = {
  display:"flex",
   padding:"1rem", 
   gap:"0.5rem", 
   width:"20rem", 
 justifyContent:"center",
   boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius:"1rem",
    position: "fixed",
    transform: "translate(-50%)",
    left:"10rem",
    top:"4rem",
    height:"100vh"
  } 


  export const myBlogs ={
    width: `calc(100vw - 320px)`,
    padding:"2rem",
    mt:"5rem",
    
    
  }
  