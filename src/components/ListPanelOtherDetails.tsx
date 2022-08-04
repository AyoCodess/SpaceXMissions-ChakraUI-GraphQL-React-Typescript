import React from "react";
import {} from "@chakra-ui/icons";
import { Box, ListItem, Text, Flex, Image } from "@chakra-ui/react";
import { Mission } from "../@types/custom.d";

import {
  ListPanelSectionMainTitle,
  ListPanelHeading,
  ListPanelOtherDetailsSubHeading,
  ListPanelNoItem
} from "../components";

interface Props {
  mission: Mission;
}
export const ListPanelOtherDetails = ({ mission }: Props) => {
  return (
    <>
      <ListPanelSectionMainTitle title={"Other Details"} />
      <ListItem>
        <Flex alignItems="center" gap="1">
          <ListPanelHeading title={"Rocket Name:"} />
          <Text>{mission.rocket.rocket_name}</Text>
        </Flex>

        <Flex marginTop="2" flexDirection="column">
          <ListPanelHeading title={"First Stage"} />
          {mission.rocket.first_stage.cores.map((core: any, index: number) => {
            return (
              <Flex key={index} flexDirection="column">
                <ListPanelOtherDetailsSubHeading
                  text={"Number of Cores:"}
                  data={core.flight}
                />
                <ListPanelOtherDetailsSubHeading
                  text={"Re-use Count:"}
                  data={core.core.reuse_count}
                />
                <ListPanelOtherDetailsSubHeading
                  text={"Status:"}
                  data={core.core.status ? core.core.status : "unknown"}
                />
              </Flex>
            );
          })}
        </Flex>
        <Flex marginTop="2" flexDirection="column">
          <ListPanelHeading title={"Second Stage"} />
          {mission.rocket.second_stage.payloads.map(
            (payload: any, index: number) => {
              return (
                <Flex key={index} flexDirection="column">
                  <ListPanelOtherDetailsSubHeading
                    text={"Payload Type:"}
                    data={payload.payload_type}
                  />

                  <ListPanelOtherDetailsSubHeading
                    text={"Payload Mass (KG):"}
                    data={payload.payload_mass_kg}
                  />

                  <ListPanelOtherDetailsSubHeading
                    text={"Payload Mass (LB): "}
                    data={payload.payload_mass_lbs}
                  />
                </Flex>
              );
            }
          )}
        </Flex>

        <Flex marginTop="2" flexDirection="column">
          <Flex alignItems="center">
            {mission.ships.length > 0 && (
              <ListPanelHeading title={"Ship Details"} />
            )}
            {mission.ships.length === 0 && (
              <ListPanelNoItem text={"No Ship Details"} />
            )}
          </Flex>
          {mission.ships &&
            mission.ships.map((ship: any, index: number) => {
              return (
                <Flex key={index} flexDirection="column">
                  <ListPanelOtherDetailsSubHeading
                    text={"Ship Name: "}
                    data={ship.name}
                  />

                  <ListPanelOtherDetailsSubHeading
                    text={"Name port: "}
                    data={ship.home_port}
                  />

                  <Flex flexDirection="column" gap="2">
                    <Box marginY="1rem">
                      <Image
                        src={ship.image}
                        alt={ship.name}
                        height="200px"
                        width="400px"
                        borderRadius="md"
                        objectFit="cover"
                        boxShadow="md"
                      />
                    </Box>
                  </Flex>
                </Flex>
              );
            })}
        </Flex>
      </ListItem>
    </>
  );
};
