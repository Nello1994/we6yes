import React from "react";
import {Box, Text} from "@chakra-ui/react";


const Footer = () => {
    return (
        <Box as="footer" bg="teal.500" color="white" p={4} textAlign="center">
            <Text>&copy; 2025 My React App. All rights reserved.</Text>
        </Box>
    )
}

export default Footer;