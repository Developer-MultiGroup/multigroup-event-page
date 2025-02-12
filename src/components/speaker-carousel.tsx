"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Speaker } from "@/types";
import { slugify } from "@/lib/slugify";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface SpeakerCarouselProps {
  speakers: Speaker[];
}

const SpeakerCarousel: React.FC<SpeakerCarouselProps> = ({ speakers }) => {
  return (
    <Carousel
      className="select-none w-full max-w-4xl mx-auto relative mb-8"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="backface-hidden -ml-4">
        {speakers.map((speaker) => (
          <CarouselItem
            key={speaker.fullName}
            className="p-4 pl-8
              basis-full 
              sm:basis-1/2 
              lg:basis-1/3"
          >
            <Card className="hover:shadow-md hover:-translate-y-2 transition-all">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <img
                  src={`/images/speakers/${slugify(speaker.fullName)}.jpg`}
                  alt={speaker.fullName}
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">{speaker.fullName}</h3>
                <p className="text-sm text-gray-500">{speaker.title}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default SpeakerCarousel;
