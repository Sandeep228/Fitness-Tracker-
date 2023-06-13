import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

const ContactPage = () => {
  return (
    <Box bg="gray.200" py={59} minHeight="100vh">
      <Container maxW="xl">
        <Box
          bg="white"
          p={8}
          borderRadius="md"
          boxShadow="lg"
          textAlign="center"
          animation="scale-in-center 0.5s"
        >
          <Heading as="h1" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="lg">
            We'd love to hear from you! Please fill out the form below to get in
            touch with us.
          </Text>
          <Box mt={8}>
            <form>
              <Box mb={4}>
                <Input type="text" placeholder="Your Name" />
              </Box>
              <Box mb={4}>
                <Input type="email" placeholder="Your Email" />
              </Box>
              <Box mb={4}>
                <Textarea placeholder="Your Message" rows={5} />
              </Box>
              <Button colorScheme="blue" type="submit">
                Send Message
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
