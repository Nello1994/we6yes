import React from "react";
import { ChakraProvider, Box, Flex, Text, VStack, HStack, Link, Button } from "@chakra-ui/react";
import Envelope from "./component/Envelope";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import FullVideo from "./component/FullVideo";

const App = () => {
  return (
    <ChakraProvider>
      {/* Main App Wrapper */}
      <Flex direction="column" minH="100vh">
        {/* Header */}
        <Header></Header>

        {/* Main Content */}
        <Flex flex="1" direction={{ base: "column", md: "row" }}>
          {/* Main Content Area */}
          <Box as="main" flex="1" p={6} bg="gray.50">
            <FullVideo></FullVideo>
            <Envelope></Envelope>
          </Box>
        </Flex>

        {/* Footer */}
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  );
};

export default App;

