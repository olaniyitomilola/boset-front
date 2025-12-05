import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";

const slides = [
  {
    src: "https://res.cloudinary.com/olaniyitomilola/image/upload/v1750673535/olan/gfggb_ryvoqv.jpg",
    title: "Capture Your Moment",
    description:
      "Experience photography that tells your unique story with creativity and passion.",
  },
  {
    src: "https://res.cloudinary.com/olaniyitomilola/image/upload/v1750589934/olan/90424b34-2f09-4646-bf61-35289b1d472c_2_yxxjlr.jpg",
    title: "Professional Portraits",
    description:
      "High-quality portraits tailored to your personality and style.",
  },
  {
    src: "https://res.cloudinary.com/olaniyitomilola/image/upload/v1750671026/olan/LAU10_po1t2e.jpg",
    title: "Event Coverage",
    description:
      "From weddings to corporate events, we preserve your memories beautifully.",
  },
  {
    src: "https://res.cloudinary.com/olaniyitomilola/image/upload/v1751180360/olan/DSC_5464_1_hnbbcx.jpg",
    title: "Creative Family Sessions",
    description:
      "Create timeless family portraits in studio or outdoor settings.",
  },
];

export default function CarouselWithContent() {
  return (
    <Carousel className="rounded-l h-screen w-full overflow-hidden flex-none" transition={{ type: "fade", duration: 2}} autoplay={true} loop={true}>
      {slides.map(({ src, title, description }, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={src}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50 px-4 text-center">
            <div className="max-w-3xl">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-5xl font-bold"
              >
                {title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 opacity-80"
              >
                {description}
              </Typography>
            
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
