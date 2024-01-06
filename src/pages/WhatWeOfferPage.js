import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Footer from "components/footers/FiveColumnWithBackground";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial";
import MainFeature1 from "components/features/ThreeColWithSideImageWithPrimaryBackground";
import DatabaseService from "components/faqs/DatabaseService";
import SoftwareService from "components/faqs/SoftwareService";
import EventDrivenService from "components/faqs/EventDrivenService";
import DevOpsService from "components/faqs/DevOpsService";
import StaticContainer from "helpers/StaticContainer";

export default () => {
  const Container = tw.div`overflow-hidden bg-gray-100`;
  return (
    <Container>
      <StaticContainer>
        <Hero />
        <MainFeature1 />
      </StaticContainer>
      <AnimationRevealPage>
        <DatabaseService />
        <SoftwareService />
        <EventDrivenService />
        <DevOpsService />
      </AnimationRevealPage>
      <StaticContainer>
        <Footer />
      </StaticContainer>
    </Container>
  );
};
