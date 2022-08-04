import React from "react";
import { Heading, Text, Box } from "@chakra-ui/react";

export const MainHeading = () => {
  return (
    <Box marginBottom="1rem">
      <Heading
        as="h1"
        fontSize={["2rem", "2rem", "3rem"]}
        borderRadius="xl"
        textAlign="left"
        boxShadow="inner"
        padding="4"
        maxW="40rem"
      >
        SpaceX{" "}
        <Text display="inline-block" color="red">
          Launch Missions{" "}
        </Text>
      </Heading>
      <Text
        fontSize={["sm", "md", "md"]}
        textAlign="right"
        fontWeight="bold"
        marginRight="1.5rem"
      >
        View all past launches...
      </Text>
    </Box>
  );
};
