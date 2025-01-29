import React, { useEffect, useRef } from "react"
import {Box} from "@chakra-ui/react";
import videoSrc from '../static/home_video.mp4'

const FullVideo = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.play()
      }
    }, [])

  return (
    <Box>
      <video ref={videoRef} autoplay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        {/* Fallback for unsupported browsers */}
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default FullVideo;