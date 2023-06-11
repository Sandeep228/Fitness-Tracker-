import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const SleepHoursGraph = ({ data }) => {
  return (
    <Box bg="white" border="1px solid #E2E8F0" borderRadius="md" p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Sleep Hours Graph
      </Text>

      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="hours" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter
            name="Sleep Hours"
            data={data}
            fill="#8884d8"
            shape="circle"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SleepHoursGraph;
