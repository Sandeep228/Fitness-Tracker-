import {
  Button,
  ChakraProvider,
  Container,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import fitnessGif from "./sa.gif"; // Import your fitness GIF

function FirstPage() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  const handleLogin = () => {
    // Add your login with Gmail logic here
    console.log("Logging in with Gmail...");
  };

  return (
    <Container
      maxW="2550px"
      maxHeight={1670}
      textAlign="center"
      style={{
        backgroundImage: `url(${fitnessGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "800px",
      }}
    >
      <VStack spacing={4} initial={{ opacity: 0, x: -100 }} animate={controls}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Heading as="h1" size="2xl" color="black" mt={195}>
            Fitness Tracker
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Text fontSize="xl" color="black">
            Track your fitness goals, stay motivated, and achieve results.
          </Text>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Button
            colorScheme="teal"
            size="lg"
            whileHover={{ scale: 1.1, boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLogin}
          >
            Login with Gmail
          </Button>
        </motion.div>
      </VStack>
    </Container>
  );
}

export default FirstPage;
