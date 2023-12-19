import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import Integrity from "images/handshake-svgrepo-com.svg";
import Transparencey from "images/open-svgrepo-com.svg";
import Efficiency from "images/speedometer-svgrepo-com.svg";
import AskingQuestions from "images/question-mark-svgrepo-com.svg";
import StaticContainer from "helpers/StaticContainer";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  const Container = tw.div`overflow-hidden bg-gray-100`;
  return (
    <Container>
    <StaticContainer>
      <Header />  
    </StaticContainer>
    <AnimationRevealPage>
      <MainFeature1
        subheading={<Subheading>Our Mission</Subheading>}
        heading="Providing the best experience for our customers"
        buttonRounded={false}
        primaryButtonText="Let's Chat"
      />
      <Features
        subheading={<Subheading>Guiding Principles</Subheading>}
        description="Staying true to what we believe in allows us to deliver the best customer experience to all of our clients."
        cards={[
          {
            imageSrc: Integrity,
            title: "Integrity",
            description: "We measure our success by the trust and relationships we build with our customers."
          },
          {
            imageSrc: Transparencey,
            title: "Transparency",
            description: "No customer will be left in the dark. Our Statement of Work will be the guiding document though the duration of the process."
          },
          {
            imageSrc: Efficiency,
            title: "Efficiency",
            description: "Our unique business organization allows us to cut all slack from the process, while remaining adaptable to new challenges."
          },
          {
            imageSrc: AskingQuestions,
            title: "Asking Questions",
            description: "No one knows your needs better than you do. That’s why we’ll work to understand them better than anyone else."
          },
        ]}
        linkText=""
      />
      </AnimationRevealPage>
      <StaticContainer>
        <Footer />
      </StaticContainer>
      </Container>
  );
};
