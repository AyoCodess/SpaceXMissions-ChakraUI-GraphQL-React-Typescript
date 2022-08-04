import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Flex } from "@chakra-ui/react";

interface Props {
  text: string;
  data: string;
}
export const ListPanelOtherDetailsSubHeading = ({ text, data }: Props) => {
  return (
    <Flex alignItems="center" gap="2">
      <ChevronRightIcon w={4} h={4} color="green.500" />
      <Text>
        {text} {data}
      </Text>
    </Flex>
  );
};
