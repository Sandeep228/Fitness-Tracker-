import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const [fitnessData,setfitnessData]= useState();
  useEffect(() => {
    // Make the request to fetch data
    axios.get("http://localhost:8000/fetch-data")
      .then(response => {
        // Handle the retrieved data
       // console.log(response.data)
        setfitnessData(response.data)
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });
  }, []);
  console.log(fitnessData);

  if(fitnessData){
    fitnessData.map((data)=>{
        const date = new Date(parseInt(data.startTimeMillis));
        console.log("Date:", date.toDateString());
        const datasetMap= data.dataset;
        datasetMap.map((mydataset)=>{
            const point = mydataset.point;
           // console.log(mydataset.dataSourceId)
            if (point && point.length > 0) {
                const value = point[0].value;
            switch(mydataset.dataSourceId){
                case "derived:com.google.step_count.delta:com.google.android.gms:aggregated":
                    console.log("Step count:", value[0]?.intVal);
                    break;
                case "derived:com.google.blood_glucose.summary:com.google.android.gms:aggregated":
                    console.log("Blood glucose:",mydataset.point[0]?.value)
                    break;
                case "derived:com.google.blood_pressure.summary:com.google.android.gms:aggregated":
                    console.log("Blood pressure:",mydataset.point[0]?.value)
                    break;
                case "derived:com.google.heart_rate.summary:com.google.android.gms:aggregated":
                    console.log("Heart rate:",mydataset.point[0]?.value)
                    break;
                case "derived:com.google.weight.summary:com.google.android.gms:aggregated":
                    console.log("Weight:",value[0]?.fpVal)
                    break;
                case "derived:com.google.height.summary:com.google.android.gms:aggregated":
                    console.log("Height:",value[0]?.fpVal)
                    break;
                case "derived:com.google.sleep.segment:com.google.android.gms:merged":
                    console.log("Sleep:",mydataset.point[0]?.value)
                    break;
                case "derived:com.google.body.fat.percentage.summary:com.google.android.gms:aggregated":
                    console.log("Body Fat:",mydataset.point[0]?.value)
                    break;
                case "derived:com.google.menstruation:com.google.android.gms:aggregated":
                    console.log("Menstrual:",mydataset.point[0]?.value)
                    break;
                default:
                    break;
            }
            }else {
                console.log(`No data available`);
              }
        })
        console.log("-----------------------")
      })
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Add your dashboard content here */}
    </div>
  );
};

export default Dashboard;
