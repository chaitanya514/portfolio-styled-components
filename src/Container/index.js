import React from "react";
import { LeftPanelContainer } from "../Components/LeftPanel/styles/LeftPanel";
import { RightPanelContainer } from "../Components/RightPanel/styles/RightPanel";
import {
  ContainerWrapper,
  Text,
  mediaIcons,
  SocialMediaLists,
  SocialCube,
} from "./styles/Container";
import { leftPanelUserInfo } from "../data/dummyData";

import ContactCard from "../Components/ContactCard";

function Container() {
  return (
    <ContainerWrapper>
      <div>
        <LeftPanelContainer>
          <Text>{leftPanelUserInfo.name}</Text>
          <Text>{leftPanelUserInfo.designation}</Text>
          <Text>{leftPanelUserInfo.name}</Text>
          <SocialMediaLists>
            {mediaIcons?.map((mediaIcon, id) => (
              <SocialCube>{mediaIcon.linkedIn}</SocialCube>
            ))}
          </SocialMediaLists>

          <ContactCard />
        </LeftPanelContainer>
      </div>
      <div>
        <RightPanelContainer></RightPanelContainer>
      </div>
    </ContainerWrapper>
  );
}

export default Container;
