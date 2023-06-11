import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const HeartRate = ({ rate }) => {
  return (
    <Box
      bg="white"
      border="1px solid #E2E8F0"
      borderRadius="md"
      p={4}
      display="flex"
      alignItems="center"
    >
      <Box
        bg="#F56565"
        color="white"
        borderRadius="full"
        p={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mr={4}
      >
        <FaHeart size={20} />
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb={1}>
          Heart Rate
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          {rate} bpm
        </Text>
      </Box>
    </Box>
  );
};

export default HeartRate;
