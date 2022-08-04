import React, { useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from "@chakra-ui/react";
import { ListPanel, ListButton } from "../components";
import { Mission } from "../types/custom";

interface Props {
  missions: Mission[];
}
export const List = ({ missions }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    scrollRef.current?.scrollIntoView();
  };

  return (
    <Accordion allowToggle ref={scrollRef}>
      {missions
        .sort(
          (a: Mission, b: Mission) =>
            new Date(b.launch_date_local).valueOf() -
            new Date(a.launch_date_local).valueOf()
        )
        .map((mission: Mission) => (
          <AccordionItem key={mission.mission_name} onClick={executeScroll}>
            <h2>
              <AccordionButton>
                <ListButton mission={mission} />
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ListPanel mission={mission} />
            </AccordionPanel>
          </AccordionItem>
        ))}
    </Accordion>
  );
};
