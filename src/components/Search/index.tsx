import React, { useState } from "react";
import {
  Center,
  Flex,
  Grid,
  IconButton,
  Select,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import moment from "moment";
import { FiSearch } from "react-icons/fi";
import { useHistory } from "react-router";

import { SearchBar, CardItem } from "..";
import { API_HOST } from "../../constants";
import { useAppContext } from "../../context/AppContext";
import { useForm, useSearch, useObserver } from "../../hooks";
import { theme } from "../../theme";
import { H5 } from "../../typography";
const renderYears = () => {
  const arr = [];
  for (let i = -100; i <= 5; i++) {
    arr.push(
      <option key={moment().year() + i} value={moment().year() + i}>
        {moment().year() + i}
      </option>
    );
  }
  return arr;
};
const Search: React.FC = () => {
  const themeColor = useColorModeValue("gray.50", "gray.700");
  const borderTheme = useColorModeValue("white", "gray.700");

  const history = useHistory();

  const {
    searchTerm,
    pageNumber,
    setPageNumber,
    setSearchTerm,
    setSearchedItems,
    searching,
    setHasMore,
    hasMore,
    searchedItems,
  } = useAppContext();

  const [{ from, to }, handleChange] = useForm({ from: null, to: null });

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
  const [sugg, setSugg] = useState(false);
  const { lastElementRef } = useObserver(hasMore, searching, setPageNumber);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/search");
    setSugg(false);
  };
  const onSearch = React.useCallback(
    (value: string) => {
      setSearchTerm(value);
      setPageNumber(1);
    },
    [setPageNumber, setSearchTerm]
  );
  const [isTabletOrMobile] = useMediaQuery("(max-width: 40em)");

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        flex: 1,
        margin: isTabletOrMobile ? "0 .5rem" : "0 1.5rem",
      }}
    >
      <Center>
        <Flex flex={1} position="relative">
          <Center flex={1} flexDirection={isTabletOrMobile ? "column" : "row"}>
            <Flex flex={1}>
              <SearchBar
                onFocus={() => setSugg(true)}
                onBlur={() => {
                  setTimeout(() => setSugg(false), 200);
                }}
                bg={themeColor}
                isLoading={searching}
                onSearch={onSearch}
              />
              <IconButton
                aria-label="Search"
                type="submit"
                borderRadius="none"
                icon={<FiSearch />}
              />
            </Flex>
            <Flex mx={1} my={isTabletOrMobile ? 2 : 0}>
              <Select
                borderRadius="none"
                variant="filled"
                placeholder="From"
                name="from"
                fontSize=".8rem"
                minW={24}
                onChange={handleChange}
              >
                {renderYears()}
              </Select>
              <Select
                variant="filled"
                onChange={handleChange}
                name="to"
                fontSize=".8rem"
                borderRadius="0 0 1rem 0"
                placeholder="To"
                minW={20}
              >
                {renderYears()}
              </Select>
            </Flex>
          </Center>
          {history.location.pathname !== "/search" &&
            sugg &&
            searchTerm &&
            !isTabletOrMobile && (
              <Flex
                direction="column"
                position="absolute"
                top="102%"
                left={0}
                width="100%"
                height="70vh"
                boxShadow={theme.boxShadow}
                bg={themeColor}
                overflowY="auto"
                overflowX="hidden"
                border="1px solid"
                borderColor={borderTheme}
              >
                <H5 fontSize="xs" px={isTabletOrMobile ? 4 : 8} py={4}>
                  Results for "{searchTerm}"
                </H5>
                <Grid
                  templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                  rowGap={20}
                  alignItems="start"
                  columnGap={4}
                  p={isTabletOrMobile ? 4 : 8}
                  width="100%"
                  pb={20}
                >
                  {searchedItems?.map((item: any, index) => {
                    if (searchedItems.length === index + 1) {
                      return (
                        <CardItem
                          ref={lastElementRef}
                          loading={searching}
                          key={index}
                          item={item}
                        />
                      );
                    } else {
                      return (
                        <CardItem loading={searching} key={index} item={item} />
                      );
                    }
                  })}
                </Grid>
              </Flex>
            )}
        </Flex>
      </Center>
    </form>
  );
};

export default Search;
