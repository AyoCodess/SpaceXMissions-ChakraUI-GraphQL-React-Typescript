import React from "react";
import { Center, Text } from "@chakra-ui/react";

export const ApiError = () => {
  return (
    <Center height="100vh">
      <Text fontSize="1.3rem" textAlign="center">
        There is a problem with the API. Contact support at ayo@ayoadesanya.com
      </Text>
    </Center>
  );
};
