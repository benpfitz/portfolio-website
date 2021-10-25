import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Benjamin
        <br />
        This Is My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Web Developer with a focus on responsive Front-End Web Development. My goal is to help bring your vision
        into reality.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://docs.google.com/forms/d/e/1FAIpQLSeNrlTmlKwVXTnsnW4xKxVpyOHc3n5nRuETL33I1EooFd7qRA/viewform?usp=sf_link")
        }
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
