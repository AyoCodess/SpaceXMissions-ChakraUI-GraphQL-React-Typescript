import React from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Text, Divider } from "@chakra-ui/react";

interface Props {
  title: string;
}
export const ListPanelSectionMainTitle = ({ title }: Props) => {
  return (
    <>
      <Divider marginTop="0.5rem" borderColor={"red.500"} />
      <Text marginTop="0.5rem" fontWeight="bold">
        <InfoOutlineIcon
          w={4}
          h={4}
          color="black"
          marginBottom="0.15rem"
          marginRight="0.2rem"
        />{" "}
        {title}
      </Text>
      <Divider borderColor={"red.500"} />
    </>
  );
};
