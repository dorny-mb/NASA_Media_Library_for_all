import { Image, Text } from "@chakra-ui/react";
import * as React from "react";
import { images } from "../../theme";
import Card from "../Card";
import RevealFlex from "../RevealFlex/index";

type EmptyListHandlerProps = {
  title?: string;
  subTitle?: string;
};

const EmptyListHandler: React.FC<EmptyListHandlerProps> = ({
  title,
  subTitle,
}) => {
  return (
    <Card
      p={4}
      flex={1}
      width="100%"
      align="center"
      maxWidth="100%"
      border="none"
      justify="center"
      flexDirection="column"
    >
      <RevealFlex>
        <Image
          src={images.no_data}
          width="300px"
          maxWidth="100%"
          height="auto"
        />
        <Text my={3} fontSize="2rem" fontWeight="bold">
          {title}
        </Text>
        <Text textAlign="center">{subTitle}</Text>
      </RevealFlex>
    </Card>
  );
};

export default EmptyListHandler;

EmptyListHandler.defaultProps = {
  title: "Nothing to see here, yet.",
  subTitle: "Go ahead and create your first record to get started.",
};
