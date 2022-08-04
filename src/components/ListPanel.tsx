import React from "react";
import { Box, List } from "@chakra-ui/react";
import { Mission } from "../@types/custom.d";

import { ListPanelMainInfo, ListPanelOtherDetails } from "../components";

interface Props {
  mission: Mission;
}
export const ListPanel = ({ mission }: Props) => {
  return (
    <Box>
      <List spacing={3}>
        <ListPanelMainInfo mission={mission} />
        <ListPanelOtherDetails mission={mission} />
      </List>
    </Box>
  );
};
