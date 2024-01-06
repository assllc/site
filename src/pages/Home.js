import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import StaticContainer from "helpers/StaticContainer";
import Hero from "components/hero/TwoColumnWithPrimaryBackground";
import Features from "components/features/WhatWeOfferHomePage.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as StarIcon } from "images/star-svgrepo-com (2).svg";
import PairProgramming from "images/undraw_pair_programming_re_or4x.svg";

import Database from "images/database-svgrepo-com.svg";
import CustomCode from "images/custom-coding-svgrepo-com.svg";
import Webhook from "images/webhook-svgrepo-com.svg";
import Pipeline from "images/rocket-2-svgrepo-com.svg";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;
  const Container = tw.div`overflow-hidden bg-gray-100`;
  const heading = <>This is what <span tw="text-primary-500">we're good</span> at</>;

  return (
    <Container>
      <StaticContainer>
        <Hero roundedHeaderButton={true} />
      </StaticContainer>
      <AnimationRevealPage>
      <Features
        subheading={<Subheading>What We Offer</Subheading>}
        heading= {heading}
        description="Ultimately, we specialize in creative problem solving. These are only the most common solutions we offer, try to find a problem we can't solve."
        cards={[
          {
            imageSrc: Database,
            title: "Database Design",
            description: "We know how to organize your data in order to optimize your business's workflows."
          },
          {
            imageSrc: CustomCode,
            title: "Custom Software",
            description: "Your business's challenges are unique to you, the solution is unique to match."
          },
          {
            imageSrc: Webhook,
            title: "Event Driven Systems",
            description: "Dynamic integrations to meet the complex needs of an ever-changing landscape." 
          },
          {
            imageSrc: Pipeline,
            title: "DevOps",
            description: "We'll handle program management. Experts in agile development, It's in our name." 
          },
        ]}
        linkText=""
      />
        <MainFeature2
          subheading={<Subheading>ABOUT</Subheading>}
          heading={
            <>
              Who we are and <HighlightedText> why we do it.</HighlightedText>
            </>
          }
          description="We're a small team of passionate developers, fueled with experience and driven by our desire to see you win. We know what it's like to have to use an incomplete product or service. We want to get you back to what you do best."
          imageSrc={PairProgramming}
          showDecoratorBlob={false}
          features={[
            {
              Icon: StarIcon,
              title: "Values Driven",
              description: "Our values are the foundation of how we do business.",
              iconContainerCss: tw`bg-green-300 text-green-800`
            },
            {
              Icon: BriefcaseIcon,
              title: "Unique Model",
              description: "Our network of developers lets us get you what you need, when you need it.",
              iconContainerCss: tw`bg-primary-200 text-primary-800`
            }
          ]}
        />
        <GetStarted/>
        </AnimationRevealPage>
        <StaticContainer>
          <Footer />
        </StaticContainer>
    </Container>
  );
}
