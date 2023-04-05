import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetOneUserByNameQuery, useGetOneUserPostByNameQuery } from "Redux/user";
import "./user.css";

const Userdetails = () => {
  let { id } = useParams();
  // let { Id } = useParams();
  const { data, isLoading } = useGetOneUserByNameQuery(id)
  
  // const posts = useGetOneUserPostByNameQuery(Id)

  console.log(data);
  // console.log(posts);
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress sx={{ mt: "30px" }} />
      </Box>
    );
  }
  // if(posts){
  //   return(
  //     <div>{data.title}</div>
  //   )
  // }
  if (data) {
    return (
      <div className="app">
        <div className="details" key={data._id}>
          <div className="big-img">
            <img src={data.image} alt="" />
          </div>
          <div className="box">
            <div className="row">
              <h2 style={{color:"#EC407A"}}>{data.firstName}</h2>
              <span style={{color:"#EC407A"}}>{data.gender}</span>
            </div>
            <p>{data.birthDate}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.bloodGroup}</p>
            <p>{data.eyeColor}</p>
            
          </div>
        </div>
      </div>
    );
  }
};

export default Userdetails;
