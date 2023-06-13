import React from "react";
import { Box, Flex, Text, Divider } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ActivityCard = () => {
  // Dummy data for step count and sleep hours
  const stepCountData = [
    { day: "Mon", steps: 5000 },
    { day: "Tue", steps: 6000 },
    { day: "Wed", steps: 8000 },
    { day: "Thu", steps: 10000 },
    { day: "Fri", steps: 7000 },
    { day: "Sat", steps: 9000 },
    { day: "Sun", steps: 6000 },
  ];

  const sleepHoursData = [
    { day: "Mon", hours: 7 },
    { day: "Tue", hours: 6 },
    { day: "Wed", hours: 8 },
    { day: "Thu", hours: 7.5 },
    { day: "Fri", hours: 6.5 },
    { day: "Sat", hours: 8.5 },
    { day: "Sun", hours: 7 },
  ];

  return (
    <Box
      p={4}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      maxW="1500px"
      mx="auto"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Activity
      </Text>
      <Flex justify="space-between">
        {/* Step Count Card */}
        <Box p={4} bg="gray.100" borderRadius="md" flex="1" mr={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Step Count
          </Text>
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={stepCountData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="steps"
                stroke="#8884d8"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>

        {/* Sleep Hours Card */}
        <Box p={4} bg="gray.100" borderRadius="md" flex="1" ml={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Sleep Hours
          </Text>
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={sleepHoursData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="hours"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Flex>
    </Box>
  );
};

export default ActivityCard;
