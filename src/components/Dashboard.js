import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Flex,
  Button,
  Image,
  Avatar,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "../fitness.png";
import { useNavigate } from "react-router-dom";
import HealthStatsCard from "./HealthStatsCard";
import ActivityCard from "./ActivityCard";

const Dashboard = () => {
  const [fitnessData, setFitnessData] = useState();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    // Make the request to fetch data
    axios
      .get("http://localhost:8000/fetch-data")
      .then((response) => {
        // Handle the retrieved data
        setFitnessData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    navigate("/");
    // Perform logout logic here
  };

  return (
    <>
      <Box
        bg={colorMode === "light" ? "teal.500" : "pink.800"}
        px={4}
        py={2}
        color="white"
      >
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
            <Button
              colorScheme="teal"
              variant="outline"
              size="sm"
              ml={4}
              onClick={toggleColorMode}
            >
              Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
            </Button>
          </Flex>
        </Flex>
      </Box>
      <HealthStatsCard />
      <ActivityCard />
    </>
  );
};

export default Dashboard;
