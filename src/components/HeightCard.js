import React from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { AiOutlineRise } from "react-icons/ai";

const HeightCard = ({ height }) => {
  return (
    <Box
      bg="white"
      border="1px solid #E2E8F0"
      borderRadius="md"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <Icon as={AiOutlineRise} color="gray.500" boxSize={6} mr={4} />
        <Box>
          <Text fontSize="lg" fontWeight="bold" mb={1}>
            Height
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            {height} cm
          </Text>
        </Box>
      </Flex>
      <Box>
        <Text fontSize="sm" color="gray.500">
          Last Updated: 12th June 2023
        </Text>
      </Box>
    </Box>
  );
};

export default HeightCard;
