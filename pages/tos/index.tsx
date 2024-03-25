import PrimaryButton from "@/components/UI/PrimaryButton";
import { Box, Container, Heading, Text, chakra } from "@chakra-ui/react";

export default function TermsOfService() {
  return (
    <Container maxW={"4xl"} paddingY={10} fontSize={"lg"} textAlign={"justify"}>
      <Heading as="h1" textAlign={"center"} mb={4}>
        Terms of Service
      </Heading>
      <Text mb={4}>
        Welcome to Custom Golf Ball Printing, provided by Biodegradable Golf
        Canada Inc. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). Your use
        of our services constitutes your agreement to the following terms:
      </Text>
      <Text mb={4}>
        1. <chakra.span fontWeight={"bold"}>Order Liability:</chakra.span> The
        responsibility for your order shifts to you once it is shipped. We aim
        for the highest standards in delivering your custom printed golf balls,
        but we cannot be held liable for any loss, damage, or delays during
        shipping.
      </Text>
      <Text mb={4}>
        2. <chakra.span fontWeight={"bold"}>Shipping Discretion:</chakra.span>{" "}
        Shipping conditions are subject to external factors beyond our control,
        and we cannot guarantee specific delivery outcomes. Decisions regarding
        the resolution of shipping issues, including replacements or refunds,
        are at our discretion.
      </Text>
      <Text mb={4}>
        3.{" "}
        <chakra.span fontWeight={"bold"}>Data and Image Uploads:</chakra.span>{" "}
        By uploading images or data for customization, you authorize us to use
        these materials to fulfill your order. Despite our efforts to protect
        your data, we cannot assure its complete security against data breaches.
        We are not liable for unauthorized access or use of your uploaded
        materials.
      </Text>
      <Text mb={4}>
        4. <chakra.span fontWeight={"bold"}>Print Quality:</chakra.span> We
        strive to accurately reproduce your designs on our golf balls. However,
        due to the nature of custom printing, slight variations between the
        uploaded image and the final print may occur. Refunds or replacements
        based on minor discrepancies in print quality from the original upload
        will not be honored.
      </Text>
      <Text mb={4}>
        5.{" "}
        <chakra.span fontWeight={"bold"}>Right to Refuse Service:</chakra.span>{" "}
        We reserve the right to refuse any order at our discretion, particularly
        if the submitted graphics are deemed inappropriate or violate our
        content guidelines. This decision is final and not subject to dispute.
      </Text>
      <Text mb={4}>
        6. <chakra.span fontWeight={"bold"}>Acceptance of Terms:</chakra.span>{" "}
        Completing your purchase signifies your acknowledgment and acceptance of
        these terms, including that the risk of loss transfers to you upon our
        handover of the goods to the carrier.
      </Text>
      <Text mb={4}>
        Thank you for choosing Custom Golf Ball Printing. We are committed to
        delivering quality and satisfaction with every order. For questions or
        concerns about your order or our policies, please reach out to our
        customer support team.
      </Text>
      <PrimaryButton mt={4} size={"md"} onClick={() => window.history.back()}>
        Back
      </PrimaryButton>
    </Container>
  );
}
