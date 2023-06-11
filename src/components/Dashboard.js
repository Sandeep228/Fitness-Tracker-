import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, Button, Image, Avatar, Text } from "@chakra-ui/react";
import Logo from "../fitness.png";
import StepCount from "./StepCount";
import HeartRate from "./HeartRateCard";
import WeightCard from "./WeightCard";
import HeightCard from "./HeightCard";
import HeartRateGraph from "./HeartRateGraph";
import SleepHoursGraph from "./Sleep";
import BloodPressureCard from "./BloodPressure";
import GlucoseLevelGraph from "./Glueclose";
import MenstrualLifecycleGraph from "./Menstural";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [fitnessData, setfitnessData] = useState();
  const navigate = useNavigate();

  let result;
  useEffect(() => {
    //Make the request to fetch data
    axios
      .get("http://localhost:8000/fetch-data")
      .then((response) => {
        // Handle the retrieved data
        setfitnessData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (fitnessData) {
    console.log(fitnessData.formattedData);

    result = fitnessData.formattedData.map(({ date, step_count }) => {
      const trimmeddate = date.substr(0, 3);
      return { date: trimmeddate, step_count };
    });
    console.log("sdsd", result);
  }
  const handleLogout = () => {
    navigate("/");
    // Perform logout logic here
  };

  const heartRateData = [
    { day: "Monday", rate: 20 },
    { day: "Tuesday", rate: 45 },
    { day: "Wednesday", rate: 68 },
    { day: "Thursday", rate: 70 },
    { day: "Friday", rate: 34 },
    { day: "Saturday", rate: 27 },
    { day: "Sunday", rate: 4 },
  ];

  const sleepData = [
    { date: "2023-06-01", hours: 7 },
    { date: "2023-06-02", hours: 6 },
    { date: "2023-06-03", hours: 8 },
    { date: "2023-06-04", hours: 7.5 },
    { date: "2023-06-05", hours: 6.5 },
    { date: "2023-06-06", hours: 7 },
    { date: "2023-06-07", hours: 8 },
  ];

  const glucoseData = [
    { date: "2023-06-01", value: 120 },
    { date: "2023-06-02", value: 110 },
    { date: "2023-06-03", value: 115 },
    { date: "2023-06-04", value: 105 },
    { date: "2023-06-05", value: 100 },
    { date: "2023-06-06", value: 95 },
    { date: "2023-06-07", value: 105 },
  ];
  // const menstrual = [
  //   { value: 3 },
  //   { value: 5 },
  //   { value: 6 },
  //   { value: 9 },
  //   { value: 1 },
  //   { value: 7 },
  //   { value: 0 },
  // ];

  const menstrualCycleValues = [6, 5, 7, 8, 6, 4, 7];

  return (
    <>
      <Box bg="teal.500" px={4} py={2} color="white">
        <Flex align="center" justify="space-between">
          <Flex align="center">
            <Image src={Logo} alt="Fitness Tracker Logo" width="40px" mr={3} />
            <Text fontSize="xl" fontWeight="bold">
              Fitness Tracker
            </Text>
          </Flex>
          <Flex align="center">
            <Avatar
              size="sm"
              name="John Doe"
              src={fitnessData?.profilePhoto}
              mr={2}
            />
            <Text fontWeight="bold">{fitnessData?.userName}</Text>
            <Button
              colorScheme="teal"
              variant="outline"
              size="sm"
              ml={4}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Flex>
        </Flex>
      </Box>
      <StepCount result={result} />
      <HeartRateGraph data={heartRateData} />
      <WeightCard />
      <HeartRate />
      <HeightCard />
      <SleepHoursGraph data={sleepData} />
      <BloodPressureCard />
      <GlucoseLevelGraph data={glucoseData} />
      <MenstrualLifecycleGraph values={menstrualCycleValues} />
    </>
  );
};

export default Dashboard;
