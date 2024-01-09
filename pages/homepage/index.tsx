import AddressSection from "@/components/Layout/AddressSection";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Layout/HeroSection";
import Navbar from "@/components/Layout/Navbar";
import PricingSection from "@/components/Layout/PricingSection";
import TextBox from "@/components/UI/TextIcon";
import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";

const Homepage = () => {
  return (
    <>
      <Container mt={4} h={'100vh'} maxWidth={"8xl"} zIndex={1} position={"relative"}>
        <Navbar />
        <HeroSection />
        <PricingSection />
        <AddressSection />
        <Box
          position="absolute"
          top="-25rem"
          right="-5rem"
          width="50rem"
          height="50rem"
          borderRadius="50%"
          bgGradient={"linear(to-b, surface-hover, surface-active)"}
          opacity={0.1}
          zIndex="-1"
        />
        <Box
          position="absolute"
          top="32rem"
          left="-20rem"
          width="50rem"
          height="50rem"
          borderRadius="50%"
          bgGradient={"linear(to-b, surface-hover, surface-active)"}
          opacity={0.1}
          zIndex="-1"
        />
        <Box
          position="absolute"
          top="90rem"
          right="-40rem"
          width="50rem"
          height="50rem"
          borderRadius="50%"
          bgGradient={"linear(to-b, surface-hover, surface-active)"}
          opacity={0.1}
          zIndex="-1"
        />
        <Footer />
      </Container>
    </>
  );
};

export default Homepage;
