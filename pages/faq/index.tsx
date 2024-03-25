import PrimaryButton from "@/components/UI/PrimaryButton";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  chakra,
} from "@chakra-ui/react";

const Faq = () => {
  return (
    <Container maxW={"4xl"} paddingY={10} fontSize={"lg"} textAlign={"justify"}>
      <Heading as="h1" textAlign={"center"} mb={4}>
        Frequently Asked Questions (FAQs)
      </Heading>
      <Box mb={4}>
        <Text fontWeight={"bold"}>
          Q: How long does it take to process and print my order?
        </Text>
        <Text>
          A: We strive to complete all orders within 5 to 7 business days. This
          timeframe allows us to ensure the highest quality custom print for
          your golf balls.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontWeight={"bold"}>
          Q: What is the shipping duration for my order?
        </Text>
        <Text>
          A: Our orders are shipped via UPS, generally taking 2 to 3 business
          days depending on your location. Being Vancouver-based, deliveries to
          nearby areas tend to be faster compared to more distant locations.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontWeight={"bold"}>
          Q: Are discounts available for bulk purchases?
        </Text>
        <Text>
          A: Absolutely! We provide wholesale discounts for larger orders. For
          detailed information and to discuss your needs, please contact us at{" "}
          <chakra.a
            href="mailto:hello@customgolfballprinting.com"
            color={"text-hover"}
          >
            hello@customgolfballprinting.com
          </chakra.a>{" "}
          or call us at (604) 600-4347.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontWeight={"bold"}>
          Q: Can I request printing on golf balls not listed on your website?
        </Text>
        <Text>
          A: Certainly, we&apos;re equipped to print on any type of golf ball.
          While our website features a selected range for streamlined ordering,
          we welcome requests for alternatives. Contact us directly for such
          inquiries at{" "}
          <chakra.a
            href="mailto:hello@customgolfballprinting.com"
            color={"text-hover"}
          >
            hello@customgolfballprinting.com
          </chakra.a>{" "}
          or (604) 600-4347.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontWeight={"bold"}>
          Q: Is it possible to place a rush order?
        </Text>
        <Text>
          A: Yes, we accommodate rush orders. The feasibility of a
          1-business-day turnaround depends on the quantity required. For urgent
          requests, please reach out to us to discuss specifics and
          arrangements.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontWeight={"bold"}>
          Q: Do you offer printing services on items other than golf balls?
        </Text>
        <Text>
          A: Indeed, we do! Our custom printing services extend to a variety of
          promotional items including hockey pucks, lighters, bottles, wallets,
          phone cases, and much more. For more information or to place an order,
          please contact us.
        </Text>
      </Box>
      <Box mb={4}>
        <Text fontWeight={"bold"}>
          Q: Do you offer alternative packaging options, such as gift wrapping
          or unmarked packaging?
        </Text>
        <Text>
          A: Yes, we do! We understand the importance of personalized packaging,
          whether it&apos;s for a special gift or privacy reasons. If you have
          specific packaging requests or preferences, we&apos;re more than happy
          to accommodate. Please reach out to us to discuss your needs in
          detail.
        </Text>
      </Box>
      <Text>
        For any further questions or to discuss your custom printing needs, feel
        free to email us at{" "}
        <chakra.a
          href="mailto:hello@customgolfballprinting.com"
          color={"text-hover"}
        >
          hello@customgolfballprinting.com
        </chakra.a>{" "}
        or call us directly at (604) 600-4347. We&apos;re here to help make your
        promotional products uniquely yours.
      </Text>
      <PrimaryButton mt={4} size={"md"} onClick={() => window.history.back()}>
        Back
      </PrimaryButton>
    </Container>
  );
};

export default Faq;
