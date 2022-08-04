import React from "react";
import { ViewIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { ListItem, Text, Flex } from "@chakra-ui/react";
import {
  ListPanelSectionMainTitle,
  ListPanelNoItem,
  ListPanelHeadingExternal,
  ListPanelHeading
} from "../components";

import { Mission } from "../@types/custom.d";

interface Props {
  mission: Mission;
}
export const ListPanelMainInfo = ({ mission }: Props) => {
  return (
    <>
      <ListPanelSectionMainTitle title={"Main Info"} />
      <ListItem>
        <Flex gap="1" flexDirection={["column", "row"]}>
          <ListPanelHeading title={"Launch Site:"} />
          <Text display="inline-block">
            {mission.launch_site.site_name_long}
          </Text>
        </Flex>
      </ListItem>

      <ListItem>
        <Flex gap="1" alignItems="center">
          {mission.links.article_link && (
            <ListPanelHeadingExternal
              mission={mission}
              text={"Article Link"}
              icon={CheckCircleIcon}
            />
          )}
          {!mission.links.article_link && (
            <>
              <ListPanelNoItem text={"No Article"} />
            </>
          )}
        </Flex>
      </ListItem>

      <ListItem>
        <Flex gap="1" alignItems="center">
          {mission.links.video_link && (
            <ListPanelHeadingExternal
              mission={mission}
              text={"Video Link"}
              icon={ViewIcon}
            />
          )}
          {!mission.links.video_link && (
            <>
              <ListPanelNoItem text={"No Video"} />
            </>
          )}
        </Flex>
      </ListItem>
    </>
  );
};
