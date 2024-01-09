import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnWithBackground";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import StaticContainer from "helpers/StaticContainer";
import Privacy from "components/misc/Privacy.js"

export default () => {
  const Container = tw.div`overflow-hidden bg-gray-100`;
  return (
    <Container>
        <StaticContainer>
            <Header />
        </StaticContainer>
        <AnimationRevealPage>
            <Privacy />
        </AnimationRevealPage>
        <StaticContainer>
            <Footer />
        </StaticContainer>
    </Container>
  );
};
