import AddressSection from "@/components/Layout/AddressSection";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Layout/HeroSection";
import Navbar from "@/components/Layout/Navbar";
import PricingSection from "@/components/Layout/PricingSection";
import OrderModal from "@/components/Modal/OrderModal";
import Shape from "@/components/Shape";
import { Box, Button, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";

const Homepage = () => {
  const {
    isOpen: isOpenOrderModal,
    onOpen: onOpenOrderModal,
    onClose: onCloseOrderModal,
  } = useDisclosure();

  return (
    <>
      <Container
        mt={4}
        h={"100vh"}
        maxWidth={"8xl"}
        zIndex={1}
        position={"relative"}
      >
        <Navbar onOpen={onOpenOrderModal} />
        <HeroSection />
        <PricingSection onOpen={onOpenOrderModal} />
        <AddressSection />
        <Footer />
        <OrderModal isOpen={isOpenOrderModal} onClose={onCloseOrderModal} />
        <Shape top="-25rem" right="-5rem" />
        <Shape top="32rem" right="60rem" />
        <Shape top="90rem" right="-40rem" />
      </Container>
    </>
  );
};

export default Homepage;
