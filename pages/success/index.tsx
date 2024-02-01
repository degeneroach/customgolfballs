import PrimaryButton from "@/components/UI/PrimaryButton";
import useBoundStore from "@/store/boundStore";
import { Container, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const delayTime = 5000;
    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      router.push("/");
    }, delayTime);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [router]);

  return (
    <Container textAlign={"center"} maxW={'2xl'}>
      <Text
        mt={20}
        mb={10}
        fontSize={"4xl"}
        fontWeight={"bold"}
        color={"text-hover"}
      >
        Thank you for your payment! 🎉
      </Text>
      <Text mb={10}>
        Your transaction was successful, and we appreciate your business. Your
        order is now being processed, and you should receive a confirmation
        email shortly.
      </Text>
      <PrimaryButton size="md" onClick={() => router.push("/")}>
        GO BACK HOME
      </PrimaryButton>
      <Text my={2}>Redirecting in {countdown} seconds...</Text>
    </Container>
  );
};

export default SuccessPage;
