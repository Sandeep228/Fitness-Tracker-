import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const StepCount = ({ result }) => {
  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Step Count Graph
      </Text>

      {result && (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={result}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="step_count"
              animationBegin={20} // Animation start time (in milliseconds)
              animationDuration={1500} // Animation duration (in milliseconds)
            />
          </BarChart>
        </ResponsiveContainer>
      )}

      <Flex alignItems="center" justifyContent="space-between" mt={4}>
        <Stat>
          <StatLabel>Week's Total</StatLabel>
          <StatNumber>
            {result?.reduce((total, data) => total + data.step_count, 0)}
          </StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Average Daily Steps</StatLabel>
          <StatNumber>
            {Math.round(
              result?.reduce((total, data) => total + data.step_count, 0) /
                result?.length
            )}
          </StatNumber>
        </Stat>
      </Flex>
    </Box>
  );
};

export default StepCount;
