import {
  Flex,
  Text,
  Image,
  ListItem as ChakraListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

type ListItemProps = {
  item: any;
};
const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const borderTheme = useColorModeValue("gray.100", "gray.700");
  return (
    <ChakraListItem width="100%" border={`1px solid ${borderTheme}`}>
      <Flex>
        <Image boxSize="80px" objectFit="cover" src={item?.links?.[0]?.href} />
        <Flex direction="column">
          <Text isTruncated fontSize="md" p={2}>
            {item?.data?.[0]?.title}
          </Text>
          <Text noOfLines={2} fontSize="xs" px={2}>
            {item?.data?.[0]?.description}
          </Text>
        </Flex>
      </Flex>
    </ChakraListItem>
  );
};

export default ListItem;
