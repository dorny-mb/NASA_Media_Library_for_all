import { Grid } from "@chakra-ui/react";
import React from "react";
import { CardItem, CustomContainer, EmptyListHandler } from "../../components";

import { useAppContext } from "../../context/AppContext";
import { useObserver } from "../../hooks";
import { PageWrap } from "../../layouts";
import { H5 } from "../../typography";

const SearchResults: React.FC = () => {
  const { searchedItems, setPageNumber, searching, searchTerm, hasMore } =
    useAppContext();
  const { lastElementRef } = useObserver(hasMore, searching, setPageNumber);

  return (
    <PageWrap
      title="Search"
      justify="center"
      align="center"
      p={4}
      flexDir="column"
      justifyContent="flex-start"
    >
      {!searching && searchedItems.length <= 0 && (
        <EmptyListHandler
          subTitle={
            searchTerm ? `No data found for "${searchTerm}"` : undefined
          }
        />
      )}
      <CustomContainer>
        {searchedItems.length > 0 && <H5 pb={6}>Results for "{searchTerm}"</H5>}
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          alignItems="start"
          rowGap={20}
          autoFlow="dense"
          pb={20}
          columnGap={4}
        >
          {searchedItems.map((item, index) => {
            if (searchedItems.length === index + 1) {
              return (
                <CardItem
                  loading={searching}
                  key={index}
                  item={item}
                  ref={lastElementRef}
                />
              );
            } else {
              return <CardItem loading={searching} key={index} item={item} />;
            }
          })}
        </Grid>
      </CustomContainer>
    </PageWrap>
  );
};

export default SearchResults;
