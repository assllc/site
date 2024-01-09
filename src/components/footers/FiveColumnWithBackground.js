import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/fav4.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-9.svg";
import { TfiLinkedin } from "react-icons/tfi";

const Container = tw.div`relative bg-primary-900 text-gray-100 -mb-8 -mx-8 px-8 py-8 lg:py-12 z-0`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

const Divider = tw.div`my-8 border-b-2 border-primary-400 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-400 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const PrivacyPolicy = tw.a`flex items-center hover:text-gray-500 mr-2 md:mr-4 text-sm text-gray-400`;

export default () => {
  return (
    <Container>
      <Content>
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Agile Software Solutions</LogoText>
          </LogoContainer>
          <ul tw="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" tw="hover:underline mr-2 md:m-6">Home</a>
                    </li>
                    <li>
                        <a href="/product" tw="hover:underline mr-2 md:m-6">What We Offer</a>
                    </li>
                    <li>
                        <a href="/about" tw="hover:underline mr-2 md:m-6">About</a>
                    </li>
                    <li>
                        <a href="/contact" tw="hover:underline md:m-6">Contact Us</a>
                    </li>
                </ul>
        </ThreeColRow>
          <Divider />
        <ThreeColRow>
          <CopywrightNotice>&copy; 2024 Agile Software Solutions LLC All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer> 
            <PrivacyPolicy href="/privacy">Privacy Policy</PrivacyPolicy>
            <SocialLink href="https://www.linkedin.com/company/agile-software-solutions/">
              <TfiLinkedin />
            </SocialLink>
            {/* <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink> */}
          </SocialLinksContainer>
          </ThreeColRow>
      </Content>
    </Container>
  );
};
