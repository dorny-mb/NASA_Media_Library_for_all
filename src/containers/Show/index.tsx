import {
  Flex,
  Icon,
  Image,
  List,
  ListItem,
  Skeleton,
  Tag,
  useMediaQuery,
} from "@chakra-ui/react";
import moment from "moment";
import { FiArrowLeft, FiCamera, FiMapPin } from "react-icons/fi";

import { useHistory } from "react-router";
import { CustomContainer } from "../../components";
import { PageWrap } from "../../layouts";
import { H5, Text } from "../../typography";

function Show() {
  const history = useHistory();

  const { item }: any = history.location.state as any;

  if (!item) history.goBack();

  const [isTabletOrMobile] = useMediaQuery("(max-width: 40em)");

  return (
    <PageWrap
      title="Show"
      justify="center"
      align="center"
      p={0}
      pt="4rem"
      flexDir="column"
      justifyContent="flex-start"
    >
      <CustomContainer>
        <Flex direction={isTabletOrMobile ? "column" : "row"}>
          <Flex direction="column" flex={1}>
            <Flex align="center">
              <Flex
                align="center"
                onClick={() => history.goBack()}
                fontSize="sm"
                cursor="pointer"
                mx={1}
              >
                <Icon size="md" as={FiArrowLeft} /> Go back
              </Flex>
            </Flex>
            <Skeleton my={5} isLoaded>
              <Image src={item.href} w="100%" objectFit="contain" />
            </Skeleton>
          </Flex>
          <Flex flex={1} p={isTabletOrMobile ? 2 : 10}>
            <List w="100%">
              <ListItem>
                <Skeleton width="100%" isLoaded>
                  <Text fontWeight="bold" fontSize="2rem">
                    {item.title}
                  </Text>
                </Skeleton>
              </ListItem>
              {item.photographer && (
                <ListItem>
                  <Skeleton my={4} isLoaded>
                    <Flex align="center">
                      <FiCamera /> <Text mx={1}>{item.photographer}</Text>
                    </Flex>
                  </Skeleton>
                </ListItem>
              )}
              {item.location && (
                <ListItem>
                  <Skeleton my={4} isLoaded>
                    <Flex align="center">
                      <FiMapPin /> <Text mx={1}>{item.location}</Text>
                    </Flex>
                  </Skeleton>
                </ListItem>
              )}
              <ListItem>
                <Flex flexWrap="wrap">
                  {item.keywords.length > 0 &&
                    item.keywords.map((word: string, i: number) => (
                      <Skeleton my={1} mr={4} key={i} isLoaded>
                        <Tag size="md" variant="subtle" colorScheme="cyan">
                          {word}
                        </Tag>
                      </Skeleton>
                    ))}
                </Flex>
              </ListItem>
              <ListItem>
                <Skeleton isLoaded>
                  <H5 my={2} fontWeight="bold" fontSize="md">
                    Description
                  </H5>
                  <Text fontSize="sm">{item.description}</Text>
                </Skeleton>
              </ListItem>
              <ListItem my={4}>
                <Skeleton isLoaded>
                  <Text fontSize="xs">
                    Date created:{" "}
                    {moment(item.date_created).format("DD/MM/YY - HH:MMa")}
                  </Text>
                </Skeleton>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </CustomContainer>
    </PageWrap>
  );
}

export default Show;
