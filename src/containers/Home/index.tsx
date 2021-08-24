import React from "react";
import { Center, Flex, Image, useMediaQuery } from "@chakra-ui/react";

import { Variants } from "framer-motion";

import { PageWrap } from "../../layouts";
import styled from "@emotion/styled";
import { CustomContainer, MotionFlex } from "../../components";

import { Text } from "../../typography";
import { images } from "../../theme";

const PageWrapper = styled(PageWrap)`
  &::after {
    content: "";
    background: url(${({ backgroundImage }) => backgroundImage}) center
      center/cover;
    position: absolute;
    transition: all 0.7s ease-in-out 0s;
    top: 0;
    right: 0;
    width: 100%;
    z-index: -1;
    height: 100%;
  }
`;
const Img = styled(Image)`
  width: 100%;
  overflow: hidden;
  height: 100%;
  z-index: 1;
  & > div {
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
    transform-origin: center;
  }
  animation: spin 8s ease-in-out alternate infinite;

  @keyframes spin {
    0% {
      animation-timing-function: ease-in-out;
      transform: translate3d(0, 0, 0) rotate(1deg);
    }
    50% {
      animation-timing-function: ease-in-out;
      transform: translate3d(0, 1vh, 0) rotate(-4deg);
    }
    100% {
      animation-timing-function: ease-in-out;
      transform: translate3d(0, 0, 0) rotate(3deg);
    }
  }
`;
const Home: React.FC = () => {
  const variants: Variants = {
    show: {
      opacity: 1,
    },
    hide: {
      opacity: 0,
    },
  };
  const [isTabletOrMobile] = useMediaQuery("(max-width: 40em)");
  return (
    <PageWrapper
      title="Profile"
      justify="center"
      align="center"
      p={4}
      flexDir="column"
      justifyContent="flex-start"
    >
      <CustomContainer>
        <Flex>
          {!isTabletOrMobile && (
            <Center flex={0.4} height="100%">
              <Img src={images.astronaut} />
            </Center>
          )}
          <MotionFlex
            flex={1}
            minHeight="80vh"
            animate="show"
            initial="hide"
            variants={variants}
            justifyContent="center"
            alignItems={isTabletOrMobile ? "flex-start" : "flex-end"}
            flexDirection="column"
          >
            <Text
              lineHeight="5.2rem"
              fontWeight={900}
              textAlign={isTabletOrMobile ? "left" : "right"}
              fontSize="6rem"
            >
              NASA{" "}
              <span style={{ color: "var(--primary-blue)" }}>
                Media Library
              </span>{" "}
              for all
            </Text>
            <Text fontSize="1.2rem" mt={7}>
              These ressources are comming from a legal API
            </Text>
          </MotionFlex>
        </Flex>
      </CustomContainer>
    </PageWrapper>
  );
};

export default Home;
