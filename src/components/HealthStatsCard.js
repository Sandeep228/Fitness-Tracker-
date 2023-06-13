import React from "react";
import {
  Box,
  Flex,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
  useToken,
} from "@chakra-ui/react";
import {
  GiBodyHeight,
  GiWeight,
  GiHeartBeats,
  GiRunningShoe,
} from "react-icons/gi";
import { motion } from "framer-motion";

const AnimatedBox = motion(Box);

const HealthStatsCard = () => {
  const [bgColor] = useToken("colors", ["blue.500"]);

  const cardVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  return (
    <Flex justify="center" align="center" gap={4} py={2} m={2}>
      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg={bgColor}
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Icon as={GiBodyHeight} boxSize={8} color="white" mb={4} />
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Height
        </Text>
        <Stat>
          <StatLabel color="white">Current Height</StatLabel>
          <StatNumber color="white">175 cm</StatNumber>
        </Stat>
      </AnimatedBox>

      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg="green.500"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Icon as={GiWeight} boxSize={8} color="white" mb={4} />
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Weight
        </Text>
        <Stat>
          <StatLabel color="white">Current Weight</StatLabel>
          <StatNumber color="white">70 kg</StatNumber>
        </Stat>
      </AnimatedBox>

      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg="red.500"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Icon as={GiHeartBeats} boxSize={8} color="white" mb={4} />
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Blood Pressure
        </Text>
        <Stat>
          <StatLabel color="white">Current Blood Pressure</StatLabel>
          <StatNumber color="white">120/80 mmHg</StatNumber>
        </Stat>
      </AnimatedBox>
      <AnimatedBox
        as="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        width="250px"
        p={4}
        shadow="md"
        borderWidth="2px"
        borderRadius="xl"
        bg="pink.500"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Icon as={GiRunningShoe} boxSize={8} color="white" mb={4} />
        <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
          Step Count{" "}
        </Text>
        <Stat>
          <StatLabel color="white">Step Count</StatLabel>
          <StatNumber color="white">3440</StatNumber>
        </Stat>
      </AnimatedBox>
      <Flex justify="center" align="center" gap={4}>
        <AnimatedBox
          as="button"
          whileHover={{ scale: 1.05, boxShadow: "2xl" }}
          whileTap={{ scale: 0.95 }}
          variants={cardVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
          width="250px"
          p={4}
          shadow="md"
          borderWidth="2px"
          borderRadius="xl"
          bg={bgColor}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Icon as={GiHeartBeats} boxSize={8} color="white" mb={4} />
          <Text fontSize="lg" fontWeight="bold" color="white" mb={2}>
            Heart Rate
          </Text>
          <Stat>
            <StatLabel color="white">Current Heart Rate</StatLabel>
            <StatNumber color="white">75 bpm</StatNumber>
          </Stat>
        </AnimatedBox>
      </Flex>
    </Flex>
  );
};

export default HealthStatsCard;
