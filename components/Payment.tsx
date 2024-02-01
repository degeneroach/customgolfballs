import { Divider, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomerDetails from "./CustomerDetails";
import OrderSummary from "./OrderSummary";
import CheckoutForm from "./Form/CheckoutForm";
import { PaymentIntent, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import API from "@/utils/axios";
import useBoundStore from "@/store/boundStore";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Payment = () => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntent>();
  const firstName = useBoundStore((state) => state.firstName);
  const lastName = useBoundStore((state) => state.lastName);
  const email = useBoundStore((state) => state.email);
  const phoneNumber = useBoundStore((state) => state.phoneNumber);
  const streetAddress = useBoundStore((state) => state.streetAddress);
  const unit = useBoundStore((state) => state.unit);
  const city = useBoundStore((state) => state.city);
  const province = useBoundStore((state) => state.province);
  const zipCode = useBoundStore((state) => state.zipCode);
  const country = useBoundStore((state) => state.country);
  const shippingDetails = useBoundStore((state) => state.shippingDetails);
  const totalPrice = useBoundStore((state) => state.totalPrice);

  useEffect(() => {
    async function getClientSecret() {
      const { clientSecret: _clientSecret, paymentIntent: _paymentIntent } =
        await API("POST", "create-payment-intent", {
          name: `${firstName} ${lastName}`,
          email,
          phoneNumber,
          streetAddress,
          unit,
          city,
          province,
          zipCode,
          country,
          shippingDetails,
          totalPrice
        });
        
      setClientSecret(_clientSecret);
      setPaymentIntent(_paymentIntent);
    }

    getClientSecret();
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options: any = {
    clientSecret,
    appearance,
  };

  return (
    <Flex flexDir={"column"}>
      <OrderSummary title="Payment"/>
      <CustomerDetails />
      <Divider
        my={10}
        w={{base: "20rem", sm: "40rem"}}
        alignSelf={"center"}
        borderColor={"border-primary"}
      />
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm paymentIntent={paymentIntent} />
        </Elements>
      )}
    </Flex>
  );
};

export default Payment;
