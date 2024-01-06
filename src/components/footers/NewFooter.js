import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

const Container = tw.div`relative bg-primary-900 text-gray-100 -mb-8 -mx-8 px-2 py-2 lg:py-8 z-0`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

export default () => {
    return (
        <Container>
            <Content>
                <div tw="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span tw="text-sm font-medium text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" tw="hover:underline">Agile Software Solutions LLC</a>. All Rights Reserved.
                </span>
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
                </div>
            </Content>
        </Container>
    );
};