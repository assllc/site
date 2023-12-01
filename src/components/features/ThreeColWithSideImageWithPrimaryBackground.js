import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomizeIconImage from "images/customize-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import Database from "images/database-svgrepo-com.svg";
import CustomCode from "images/custom-coding-svgrepo-com.svg";
import Webhook from "images/webhook-svgrepo-com.svg";
import Pipeline from "images/rocket-2-svgrepo-com.svg";
import Management from "images/workflowy-svgrepo-com.svg";

const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/3 lg:w-1/4 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0 m-auto`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none text-center`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400`}
  }
`;

export default ({
  cards = null,
  heading = "Core Competencies",
  subheading = "",
  description = "We specialize in a wide array of custom products, using every tool at our disposal to meet your custom software needs."
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
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

    }
  ];

  if (!cards) cards = defaultCards;

  function handleClick(string) {
    let element;
    switch (string) {
      case "DevOps":
        element = "devOpsService";
        document.getElementById(element).scrollIntoView({ behavior: "smooth" });
        break;
      case "Event Driven Systems":
        element = "eventDrivenService";
        document.getElementById(element).scrollIntoView({ behavior: "smooth" });
        break;
      case "Custom Software":
        element = "softwareService";
        // document.getElementById(element).scrollTo({top: 1, behavior: "smooth" });
        document.getElementById(element).scrollIntoView({ behavior: "smooth" });
        break;
      case "Database Design":
        element = "databaseService";
        document.getElementById(element).scrollIntoView({ behavior: "smooth" });
        break;
    }
  }

// onClick={e => handleClick(card.title)} tw="cursor-pointer"

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer" style={{ width: "" }}>
                <span className="title" >{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
