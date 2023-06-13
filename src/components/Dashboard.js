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
  Stack,
  Link,
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
      <Box>
        <Box
          bg={colorMode === "light" ? "teal.500" : "pink.800"}
          px={4}
          py={2}
          color="white"
        >
          <Flex align="center" justify="space-between">
            <Flex align="center">
              <Image
                src={Logo}
                alt="Fitness Tracker Logo"
                width="40px"
                mr={3}
              />
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
                colorScheme={colorMode === "light" ? "white" : "blue"}
                variant="outline"
                size="sm"
                ml={4}
                onClick={handleLogout}
              >
                Logout
              </Button>
              <Button
                colorScheme={colorMode === "light" ? "white" : "blue"}
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
        <Flex>
          <Box
            w="20%"
            h="100vh"
            p={4}
            bg={colorMode === "light" ? "gray.100" : "gray.700"}
          >
            <Stack spacing={7}>
              <Link
                href="#"
                color={colorMode === "light" ? "teal.500" : "white"}
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                as="a"
                _notLast={{ mb: 2 }}
              >
                Home
              </Link>
              <Link
                href="#"
                color={colorMode === "light" ? "teal.500" : "white"}
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                as="a"
                _notLast={{ mb: 2 }}
              >
                About Us
              </Link>
              <Link
                href="#"
                color={colorMode === "light" ? "teal.500" : "white"}
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                as="a"
                _notLast={{ mb: 2 }}
              >
                Contacts
              </Link>
              <Link
                href="#"
                color={colorMode === "light" ? "teal.500" : "white"}
                fontWeight="bold"
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                as="a"
                _notLast={{ mb: 2 }}
              >
                Services
              </Link>
            </Stack>
          </Box>
          <Flex direction="column" w="80%" p={4}>
            <Stack spacing={4}>
              <HealthStatsCard />
              <ActivityCard />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Dashboard;
