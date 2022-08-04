import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { Text, ListIcon } from "@chakra-ui/react";

interface Props {
  text: string;
}
export const ListPanelNoItem = ({ text }: Props) => {
  return (
    <>
      <ListIcon as={CloseIcon} width="14px" height="14px" color="red.500" />
      <Text fontSize="lg" fontWeight="medium" display="inline-block">
        {text}
      </Text>
    </>
  );
};
