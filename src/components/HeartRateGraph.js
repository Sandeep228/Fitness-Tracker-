import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HeartRateGraph = ({ data }) => {
  return (
    <Box bg="white" border="1px solid #E2E8F0" borderRadius="md" p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Heart Rate Graph
      </Text>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default HeartRateGraph;
