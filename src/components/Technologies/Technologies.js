import React from "react";
import { DiFirebase, DiReact, DiZend, DiGitBranch } from "react-icons/di";
import { FaEthereum } from "react-icons/fa";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a variety of technologies in the Front-End Web Development field.</SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> - React.js <br /> - HTML <br /> - CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGitBranch size="3rem" />
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with <br /> - GitHub <br /> - Git <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaEthereum size="3rem" />
        <ListContainer>
          <ListTitle>Crypto</ListTitle>
          <ListParagraph>
            Experience with <br /> - Solidity <br /> - Truffle <br /> - Web3.js <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
