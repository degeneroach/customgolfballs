import AddressSection from "@/components/Layout/AddressSection";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Layout/HeroSection";
import Navbar from "@/components/Layout/Navbar";
import PricingSection from "@/components/Layout/PricingSection";
import OrderModal from "@/components/Modal/OrderModal";
import Shape from "@/components/UI/Shape";
import { Container, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const Homepage = () => {
  const {
    isOpen: isOpenOrderModal,
    onOpen: onOpenOrderModal,
    onClose: onCloseOrderModal,
  } = useDisclosure();

  return (
    <>
      <Head>
        <title>
          Custom Golf Balls | Personalized Golf Balls Printed In Van
        </title>
        <meta
          name="description"
          content="Expert in custom golf ball printing for tournaments, gifts, & personal sets. Get creative, personalized golf balls at 3200 E Broadway, Vancouver."
        />
      </Head>
      <Container
        mt={4}
        h={"100vh"}
        maxWidth={"8xl"}
        zIndex={1}
        position={"relative"}
      >
        <Navbar onOpen={onOpenOrderModal} />
        <HeroSection onOpen={onOpenOrderModal} />
        <PricingSection onOpen={onOpenOrderModal} />
        <AddressSection />
        <Footer />
        <OrderModal isOpen={isOpenOrderModal} onClose={onCloseOrderModal} />
        <Shape top="-25rem" right="-5rem" />
        <Shape top="32rem" right="60rem" />
        <Shape top="95rem" right="-40rem" />
      </Container>
    </>
  );
};

export default Homepage;
