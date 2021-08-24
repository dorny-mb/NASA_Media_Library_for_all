import React from "react";
import { Container, ContainerProps } from "@chakra-ui/react";

const CustomContainer: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <Container maxW="container.xl" {...rest}>
      {children}
    </Container>
  );
};

export default CustomContainer;
