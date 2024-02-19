import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

// Assuming you're using Chakra UI based on the Box component usage
import { Box } from "@chakra-ui/react";

const MySwiper = () => {
  return (
    <Swiper
      width={2}
        spaceBetween={10}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Box bg={"red"}>Slide 1</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bg={"red"}>Slide 2</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bg={"red"}>Slide 3</Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box bg={"red"}>Slide 4</Box>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
