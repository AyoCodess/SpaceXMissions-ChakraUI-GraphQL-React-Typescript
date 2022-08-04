import React from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Text, Flex } from "@chakra-ui/react";

interface Props {
  title: string;
}
export const ListPanelHeading = ({ title }: Props) => {
  return (
    <Flex alignItems="center" gap="2">
      <CheckCircleIcon w={4} h={4} color="green.500" />
      <Text fontSize="lg" fontWeight="medium">
        {title}
      </Text>
    </Flex>
  );
};
