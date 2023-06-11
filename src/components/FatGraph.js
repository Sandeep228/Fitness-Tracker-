import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const FatGraph = ({ data }) => {
  return (
    <Box bg="white" border="1px solid #E2E8F0" borderRadius="md" p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Sleep Hours Graph
      </Text>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="hours"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default FatGraph;
