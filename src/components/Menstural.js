import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const MenstrualLifecycle = ({ values }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const data = [
    { label: "Day 1", value: values[0] },
    { label: "Day 2", value: values[1] },
    { label: "Day 3", value: values[2] },
    { label: "Day 4", value: values[3] },
    { label: "Day 5", value: values[4] },
    { label: "Day 6", value: values[5] },
    { label: "Day 7", value: values[6] },
  ];

  return (
    <Box bg="white" border="1px solid #E2E8F0" borderRadius="md" p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Menstrual Lifecycle Graph
      </Text>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default MenstrualLifecycle;
