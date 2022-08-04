import React from "react";

import { Text, Flex } from "@chakra-ui/react";
import { Mission } from "../types/custom";

interface Props {
  mission: Mission;
}
export const ListButton = ({ mission }: Props) => {
  return (
    <Flex
      flexDirection={["column", "row"]}
      alignItems={["left", "center"]}
      justifyContent={"space-between"}
      gap="0.5rem"
      width="100%"
    >
      <Text fontSize="md" textAlign="left" fontWeight="bold">
        {mission.mission_name}
      </Text>
      <Text
        bg="red.500"
        fontSize="sm"
        color="white"
        borderRadius="md"
        paddingY="1"
        paddingX="2"
        width="6.5rem"
        marginRight="1rem"
      >
        {new Date(mission.launch_date_local).toDateString().slice(3)}
      </Text>
    </Flex>
  );
};
