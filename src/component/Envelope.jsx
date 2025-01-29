import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import "../styles/envelope.scss";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Alterna tra aperto e chiuso
  const toggleEnvelope = () => setIsOpen((prev) => !prev);

  return (
    <Box className="envlope-wrapper">
      <Box
        id="envelope"
        className={isOpen ? "open" : "close"}
        onClick={toggleEnvelope} // Usa toggleEnvelope al click
      >
        <Box className="front flap"></Box>
        <Box className="front pocket"></Box>
        <Box className="letter">
          <Box className="words line1"></Box>
          <Box className="words line2"></Box>
          <Box className="words line3"></Box>
          <Box className="words line4"></Box>
        </Box>
        <Box className="hearts">
          <Box className="heart a1"></Box>
          <Box className="heart a2"></Box>
          <Box className="heart a3"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Envelope;
