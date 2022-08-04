import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}
export const Wrapper = ({ children }: Props) => {
  return (
    <Flex
      flexDirection="column"
      height="100vh"
      padding="1rem"
      maxWidth="80rem"
      marginX="auto"
    >
      {children}
    </Flex>
  );
};
