import React from "react";
import {Box, Text, HStack, Link} from "@chakra-ui/react";


const Header = () => {
    return (
        <Box as="header" bg="teal.500" color="white" p={4}>
            <HStack justify="space-between">
            <Text fontSize="xl" fontWeight="bold">My React App</Text>
            <HStack spacing={4}>
                <Link href="#" color="white">Home</Link>
                <Link href="#" color="white">About</Link>
                <Link href="#" color="white">Contact</Link>
            </HStack>
            </HStack>
        </Box>
    )
}

export default Header;