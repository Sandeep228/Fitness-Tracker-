import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [fitnessData,setfitnessData]= useState();
  useEffect(() => {
    //Make the request to fetch data
    axios.get("http://localhost:8000/fetch-data")
      .then(response => {
        // Handle the retrieved data
        setfitnessData(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  if(fitnessData){
    console.log(fitnessData)
  }
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {fitnessData !== undefined && (
        <>
        <p>{fitnessData.userName}.</p>
        <img src={fitnessData.profilePhoto}/>
        </>
      )}
    </div>
  );
};

export default Dashboard;
