import {
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  StackProps,
  Skeleton,
  Center,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React from "react";
import { FiCamera, FiMapPin } from "react-icons/fi";
import { useHistory } from "react-router";
import { images, theme } from "../../theme";

const ImageCard = styled(Flex)`
  cursor: pointer;
  position: relative;
  .front,
  .back {
    width: 100%;
    transition: all 0.3s ease-in-out 0s;
  }
  .front {
    z-index: 474393;
    position: relative;
    height: 100%;
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 57;
  }
  .front .item_name {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 474394;
    font-weight: bold;
    color: #f4f4f4;
    opacity: 0;
    background: linear-gradient(to top, #0f0f0f67, transparent);
    transition: opacity 0.4s ease-in-out 0s;
  }
  &:hover {
    .front .item_name {
      opacity: 1;
    }
    .front {
      transform: translateY(-10%);
    }
    .back {
      transform: scale(1.05) translateY(2.8rem);
    }
  }
`;
type Props = { item: any; loading?: boolean } & StackProps;

const CardItem = React.forwardRef<any, Props>(
  ({ item, loading, ...rest }, ref: React.ForwardedRef<any>) => {
    const colorTheme = useColorModeValue("gray.100", "gray.800");
    const borderTheme = useColorModeValue("gray.200", "gray.600");
    const frontBg = useColorModeValue("gray.50", "gray.600");
    const history = useHistory();
    return (
      <Skeleton
        isLoaded={!loading}
        onClick={() => {
          history.push("/show", {
            item,
          });
        }}
        minH="25vh"
        position="relative"
        alignItems="start"
      >
        <Stack ref={ref} {...rest}>
          <ImageCard minH={40} boxShadow={theme.boxShadow}>
            <Box
              className="front"
              border="1px solid"
              borderColor={borderTheme}
              bg={frontBg}
            >
              <Center position="relative">
                <Image
                  w="100%"
                  src={item.href || images.no_image}
                  verticalAlign="middle"
                  objectFit="contain"
                />

                <Flex
                  p={4}
                  direction="column"
                  justify="flex-end"
                  className="item_name"
                >
                  <Text noOfLines={1} fontSize="xs">
                    {item.title}
                  </Text>
                </Flex>
              </Center>
              <Flex direction="column">
                {item.photographer && (
                  <Flex align="center" px={4} py={4} fontSize="sm">
                    <FiCamera />{" "}
                    <Text fontWeight="bold" mx={1}>
                      {item.photographer}
                    </Text>
                  </Flex>
                )}
                {item.location && (
                  <Flex align="center" px={4} py={4} fontSize=".7rem">
                    <FiMapPin /> <Text mx={1}>{item.location}</Text>
                  </Flex>
                )}
              </Flex>
            </Box>
            <Flex
              direction="column"
              justify="flex-end"
              bg={colorTheme}
              border="1px solid"
              borderColor={borderTheme}
              p={5}
              className="back"
            >
              <Text noOfLines={2} fontSize="xs">
                {item.description}
              </Text>
            </Flex>
          </ImageCard>
        </Stack>
      </Skeleton>
    );
  }
);

export default CardItem;
