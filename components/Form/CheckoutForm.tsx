import { Stack, Text } from "@chakra-ui/react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../UI/PrimaryButton";
import API from "@/utils/axios";
import useBoundStore from "@/store/boundStore";
import uploadImages from "@/utils/upload-images";
import { PaymentIntent } from "@stripe/stripe-js";
import { useRouter } from "next/router";

const CheckoutForm: React.FC<{
  paymentIntent: PaymentIntent | undefined;
}> = ({ paymentIntent }) => {
  const router = useRouter();
  const stripe = useStripe();
  const elements: any = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const frontSideImage = useBoundStore((state) => state.frontSideImage);
  const backSideImage = useBoundStore((state) => state.backSideImage);
  const totalPrice = useBoundStore((state) => state.totalPrice);
  const quantity = useBoundStore((state) => state.quantity);
  const ballType = useBoundStore((state) => state.ballType);
  const isDoubleSided = useBoundStore((state) => state.isDoubleSided);
  const unit = useBoundStore((state) => state.unit);
  const streetAddress = useBoundStore((state) => state.streetAddress);
  const city = useBoundStore((state) => state.city);
  const province = useBoundStore((state) => state.province);
  const zipCode = useBoundStore((state) => state.zipCode);
  const country = useBoundStore((state) => state.country);
  const firstName = useBoundStore((state) => state.firstName);
  const lastName = useBoundStore((state) => state.lastName);
  const shippingDetails = useBoundStore((state) => state.shippingDetails);
  const setQuantity = useBoundStore((state) => state.setQuantity);
  const clearTotalPrice = useBoundStore((state) => state.clearTotalPrice);
  const setFirstName = useBoundStore((state) => state.setFirstName);
  const setLastName = useBoundStore((state) => state.setLastName);
  const setEmail = useBoundStore((state) => state.setEmail);
  const setPhoneNumber = useBoundStore((state) => state.setPhoneNumber);
  const setStreetAddress = useBoundStore((state) => state.setStreetAddress);
  const setUnit = useBoundStore((state) => state.setUnit);
  const setCity = useBoundStore((state) => state.setCity);
  const setProvince = useBoundStore((state) => state.setProvince);
  const setZipCode = useBoundStore((state) => state.setZipCode);
  const setCountry = useBoundStore((state) => state.setCountry);
  const setShippingDetails = useBoundStore((state) => state.setShippingDetails);
  const clearBackSideImage = useBoundStore((state) => state.clearBackSideImage);
  const clearFrontSideImage = useBoundStore(
    (state) => state.clearFrontSideImage
  );

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe) return null;
    setIsLoading(true);

    const { error, paymentIntent } = await stripe?.confirmPayment({
      elements,
      confirmParams: { return_url: "http://localhost:3000/success" },
      redirect: 'if_required'
    });

    if (error) setErrorMessage(error.message as any);

    if (paymentIntent?.status === "succeeded") {
      //Upload Image
      const imagesToUpload = [frontSideImage, backSideImage];
      const responseUrls = await uploadImages(imagesToUpload);

      const updatePaymentIntent = await API("POST", "update-payment-intent", {
        paymentIntent: paymentIntent?.id,
        orderId: paymentIntent?.payment_method,
        arrayImageUrl: responseUrls,
        ballType,
        quantity,
        isDoubleSided,
        unit,
        streetAddress,
        city,
        province,
        zipCode,
        country,
        totalPrice,
        firstName,
        lastName,
        shippingDetails
      });

      clearFrontSideImage();
      clearBackSideImage();
      clearTotalPrice();
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setStreetAddress("");
      setUnit("");
      setCity("");
      setProvince("");
      setZipCode("");
      setCountry("");
      setShippingDetails("");
      setQuantity(0);

      router.push("/success");
    }

    setIsLoading(false);
  };

  const paymentElementOptions: any = {
    layout: "tabs",
  };

  return (
    <Stack w={{ base: "20rem", md: "28rem" }} alignSelf={"center"}>
      <form onSubmit={onSubmit}>
        <Stack>
          <PaymentElement options={paymentElementOptions} />
          <PrimaryButton
            size="lg"
            type="submit"
            mt={5}
            alignItems="center"
            borderRadius="0.5rem"
            isDisabled={isLoading || !stripe || !elements}
          >
            PAY ${totalPrice.toFixed(2)}
          </PrimaryButton>
          {errorMessage && (
            <Text textAlign={"center"} color={"red"} fontSize={"md"}>
              {errorMessage}
            </Text>
          )}
        </Stack>
      </form>
    </Stack>
  );
};

export default CheckoutForm;
