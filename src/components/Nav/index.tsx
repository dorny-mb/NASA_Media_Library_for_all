import React from "react";
import {
  useColorMode,
  Flex,
  Image,
  Center,
  useColorModeValue,
  Text,
  IconButton,
  useMediaQuery,
  CloseButton,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSun, FiMoon, FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";

import { CustomContainer, Search } from "..";
import { images } from "../../theme";

import { useForm, useSearch } from "../../hooks";
import { useAppContext } from "../../context/AppContext";

import { API_HOST } from "../../constants";

const Nav: React.FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const history = useHistory();
  const themeColorTransparent = useColorModeValue("gray.50", "gray.800");
  const themeColor = useColorModeValue("gray.100", "gray.700");
  const {
    searchTerm,
    pageNumber,

    setSearchedItems,

    setHasMore,
  } = useAppContext();

  const [{ from, to }] = useForm({ from: null, to: null });

  useSearch(
    API_HOST + "/search",
    searchTerm,
    pageNumber,
    setHasMore,
    setSearchedItems,
    from,
    to,
    "image"
  );

  const { isOpen: isMobileSearchOpen, onToggle: onMobileSearchToggle } =
    useDisclosure();
  const [isTabletOrMobile] = useMediaQuery("(max-width: 40em)");

  return (
    <Flex
      position="fixed"
      top={0}
      px={2}
      zIndex={2233542}
      bg={themeColorTransparent}
      left={0}
      width="100%"
    >
      <CustomContainer>
        <Flex align="center" justify="space-between" py={2}>
          <Center onClick={() => history.push("/")} cursor="pointer">
            <Image src={images.nasa_logo} minWidth={10} width={12} />
            {!isTabletOrMobile && (
              <Text fontSize="xs" fontWeight="bold" letterSpacing="2px">
                MEDIA LIBRARY
              </Text>
            )}
          </Center>
          {isTabletOrMobile ? (
            <Slide
              direction="top"
              in={isMobileSearchOpen}
              style={{ zIndex: 323443 }}
            >
              <Flex width="100%" py={2} bg={themeColor}>
                <Search />
                <CloseButton
                  onClick={onMobileSearchToggle}
                  size="md"
                  mx={2}
                  alignSelf="center"
                />
              </Flex>
            </Slide>
          ) : (
            <Search />
          )}
          {isTabletOrMobile && (
            <IconButton
              as={FiSearch}
              aria-label="Search"
              size="sm"
              p={2}
              onClick={onMobileSearchToggle}
            />
          )}
          <Flex onClick={toggleColorMode}>
            <IconButton
              aria-label="Search database"
              icon={colorMode === "dark" ? <FiSun /> : <FiMoon />}
            />
          </Flex>
        </Flex>
      </CustomContainer>
    </Flex>
  );
};

export default Nav;
