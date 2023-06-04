import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

function Landing() {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
    },
    tap: {
      scale: 0.9,
    },
  };

  const handleLogin = () => {
    // Add your login with Gmail logic here
    console.log("Logging in with Gmail...");
  };

  const back = {
    name: "sandeep",
  };
  const navigate = useNavigate();

  navigate("/firstpage", {
    replace: true,
    state: { back },
  });

  return (
    <Container maxW="container.md" textAlign="center" mt={16}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="2xl" mb={8}>
          Fitness Tracker
        </Heading>
        <Text fontSize="xl" mb={8}>
          Track your fitness goals, stay motivated, and achieve results.
        </Text>
        <Button
          colorScheme="teal"
          size="lg"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={handleLogin}
        >
          Login with Gmail
        </Button>
      </motion.div>
    </Container>
  );
}

export default Landing;
