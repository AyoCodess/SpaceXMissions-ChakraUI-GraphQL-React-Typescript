import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Text, ListIcon, Link, Flex } from "@chakra-ui/react";
import { Mission } from "../types/custom";

interface Props {
  mission: Mission;
  text: string;
  icon: any;
}
export const ListPanelHeadingExternal = (props: Props) => {
  return (
    <Flex alignItems="center" width="9rem">
      <ListIcon as={props.icon} color="green.500" marginBottom="0.1rem" />
      <Text display="inline-block" fontSize="lg" fontWeight="medium">
        {props.text}
      </Text>
      <Link
        marginLeft="auto"
        href={props.mission.links.article_link}
        isExternal
      >
        <ExternalLinkIcon mx="2px" marginBottom="0.3rem" />
      </Link>
    </Flex>
  );
};
