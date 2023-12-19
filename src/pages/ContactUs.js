import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground";
import Footer2 from "components/footers/NewFooter";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import StaticContainer from "helpers/StaticContainer";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  const Container = tw.div`overflow-hidden bg-gray-100`;
  return (
    <Container>
      <StaticContainer>
        <Header />
      </StaticContainer>
      <AnimationRevealPage>
      <ContactUsForm />
      {/* <ContactDetails
        cards={[
          {
            title: "Michigan",
            description: (
              <>
                <Address>
                  <AddressLine>7500 28th Ave.</AddressLine>
                  <AddressLine>Hudsonville, MI 49426</AddressLine>
                </Address>
                <Email>agilesoftwaresolutionsllc@gmail.com</Email>
                <Phone>+1 (616) 312 - 8602</Phone>
              </>
            )
          },
        ]}
      /> */}
      </AnimationRevealPage>
      <StaticContainer>
        <Footer />
        {/* <Footer2 /> */}
      </StaticContainer>
    </Container>
  );
};
