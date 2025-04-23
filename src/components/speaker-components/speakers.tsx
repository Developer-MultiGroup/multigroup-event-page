"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Speaker } from "@/types";
import { slugify } from "@/lib/slugify";
import Image from "next/image";
import { InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";

interface SpeakerProps {
  speakers: Speaker[];
}

const Speakers: React.FC<SpeakerProps> = ({ speakers }) => {
  // State to track which cards are flipped on mobile
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Toggle flip state for mobile devices
  const handleCardClick = (speakerName: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [speakerName]: !prev[speakerName],
    }));
  };

  return (
    <section className="w-5/6 mx-auto md:px-0 px-4">
      <div className="flex flex-wrap justify-center gap-4">
        {speakers.map((speaker) => (
          <div
            key={speaker.fullName}
            className={`h-[250px] w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)] cursor-pointer group [perspective:1000px] ${
              flippedCards[speaker.fullName] ? "flip-active" : ""
            }`}
            onClick={() => handleCardClick(speaker.fullName)}
          >
            <div
              className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
                flippedCards[speaker.fullName]
                  ? "[transform:rotateY(180deg)]"
                  : ""
              } group-hover:[transform:rotateY(180deg)]`}
            >
              {/* Front Side */}
              <Card className="absolute w-full h-full overflow-hidden [backface-visibility:hidden]">
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/speakers/${slugify(speaker.fullName)}.webp`}
                    alt={speaker.fullName}
                    className="object-cover object-[50%_25%]"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-color-accent to-color-primary opacity-40" /> */}
                </div>
              </Card>

              {/* Back Side */}
              <Card className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col p-4">
                <h3 className="text-lg font-semibold text-center mt-2">
                  {speaker.fullName}
                </h3>

                <div className="flex-grow flex items-center justify-center">
                  <p className="text-sm text-gray-500 text-center">
                    {speaker.title}
                  </p>
                </div>

                {speaker.company && (
                  <div className="flex justify-center w-full h-16">
                    <div className="relative w-24 h-16">
                      <Image
                        src={`/images/sponsors/${slugify(speaker.company)}.webp`}
                        alt={`${speaker.company} logo`}
                        className="object-contain"
                        fill
                        sizes="96px"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-center space-x-3 mb-2">
                  {speaker.instagram && (
                    <a
                      href={speaker.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-pink-600 hover:text-pink-700 transition-colors"
                      aria-label="Speaker Instagram account"
                    >
                      <InstagramLogo size={28} weight="fill" />
                    </a>
                  )}
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                      aria-label="Speaker LinkedIn account"
                    >
                      <LinkedinLogo size={28} weight="fill" />
                    </a>
                  )}
                  {speaker.twitter && (
                    <a
                      href={speaker.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-black hover:text-gray-700 transition-colors"
                      aria-label="Speaker Twitter account"
                    >
                      <XLogo size={28} />
                    </a>
                  )}
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;
