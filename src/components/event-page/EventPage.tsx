"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Head from "next/head";
import type { Event } from "@/types";
// import CountdownTimer from "@/components/common/countdown-timer";
import SessionContainer from "@/components/speaker-components/session-container";
import SpeakerCarousel from "@/components/speaker-components/speakers";
import SponsorSlider from "@/components/speaker-components/sponsors-slider";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import EventTickets from "../event-components/event-tickets";
import HighlightHeading from "@/components/common/heading";
import { MovingBorderButton } from "../ui/moving-border";
import ActionCard from "../event-components/action-card";
import IconDivider from "../dividers/icon-divider";
import TextDivider from "../dividers/text-divider";
import { slugify } from "@/lib/slugify";
// import EventBadge from "../event-badge";

interface EventPageProps {
  event: Event;
  previousEvent?: Event;
  hero: boolean;
}

export default function EventPage({
  event,
  previousEvent,
  hero,
}: EventPageProps) {
  const [minHeight, setMinHeight] = useState("100vh");

  useEffect(() => {
    const updateMinHeight = () => {
      const screenHeight = window.innerHeight;
      if (screenHeight < 700) {
        setMinHeight("600px");
      } else {
        setMinHeight("100vh");
      }
    };

    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <div className="bg-color-background">
      <Head>
        {/* Preload key fonts */}
        <link
          rel="preload"
          href="/fonts/TanNimbus.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-between bg-color-background w-5/6 mx-auto py-24 min-h-screen">
        {/* Top Section with Event Name */}
        <div className="w-full">
          <motion.div
            className="select-none text-color-text text-4xl sm:text-6xl font-extrabold px-2 pt-24 md:pt-32 max-w-lg sm:max-w-2xl leading-snug sm:leading-[64px] text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {event.name}
            <div className="text-xl font-normal pt-8">
              {event.heroDescription}
              <br />
              <br />
              <div className="flex justify-center items-center lg:justify-start lg:items-start text-color-text w-full gap-x-6">
                <span>{event.location.name}</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href={event.registerLink} target="_blank">
                <MovingBorderButton
                  borderRadius="0.75rem"
                  className="bg-transparent text-color-text"
                >
                  {new Date(event.date) < new Date()
                    ? "Etkinliği Görüntüle"
                    : "Yerinizi Ayırtın"}
                </MovingBorderButton>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="select-none w-full flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 mt-8"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Initial Metrics */}
          <motion.div
            className="select-none text-color-text text-xl sm:text-4xl py-4 md:py-1 rounded-lg text-center lg:text-left w-full font-extrabold"
            variants={fadeInUp}
          >
            <div className="flex justify-center items-center lg:justify-start lg:items-start text-color-text w-full gap-x-6">
              {event.initialMetrics.map((metric, index) => (
                <div
                  key={`metric-${index}`}
                  className={`flex flex-col items-left justify-left text-center md:text-left ${index < event.initialMetrics.length - 1 ? "pr-6 border-r-2 border-color-accent" : ""}`}
                >
                  <span className="text-2xl sm:text-4xl font-bold">
                    {metric.value}+
                  </span>
                  <span className="text-sm sm:text-base font-medium mt-1">
                    {metric.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Organizers */}
          <motion.div
            className="flex flex-row justify-center items-center lg:justify-end mb-10 w-full"
            variants={fadeInUp}
          >
            <AnimatedTooltip items={event.organizers} />
          </motion.div>
        </motion.div>
      </div>

      <p className="text-center w-2/3 mx-auto md:w-full bg-color-background text-lg md:text-2xl font-semibold">
        Sektörün önde gelen şirketleri bu etkinlikte yerlerini aldı
      </p>
      <SponsorSlider sponsors={event.sponsors} />

      <div className="bg-color-background pt-16">
        {/* Card-1 */}
        <ActionCard
          variant="right-image"
          name={event.name}
          description={event.cardDescription}
          image={`/images/mockups/${slugify(event.name)}.webp`}
        />

        {/* Divider-1 */}
        <IconDivider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span id="etkinlik-akisi" />
          <SessionContainer event={event} color={event.colorPalette.accent} />
        </motion.div>

        <span id="konusmacilar"></span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HighlightHeading
            beforeHighlight="Etkinlik"
            highlightText="Konuşmacılarımızla"
            afterHighlight="Tanışın!"
          >
            İşte konuklarımız hakkında biraz daha bilgi. Biz onları tanıdığımız
            ve bu etkinlikte ağırladığımız için çok mutluyuz, siz de mutlaka bir
            göz atın!
          </HighlightHeading>

          <SpeakerCarousel speakers={event.speakers} />
        </motion.div>

        {event.tickets && (
          <>
            <span id="biletler"></span>
            <HighlightHeading
              beforeHighlight="Bize"
              highlightText="Destek Olmak"
              afterHighlight="İster misiniz?"
            >
              Her zaman hayalimizdeki ilham verici etkinlikler için sponsor
              bulamıyoruz, ama şimdiye dek etkinliklerimize katılmış ve memnun
              kalmış 500'den fazla destekçimiz sayesinde hayalimize biraz daha
              yakınız.
            </HighlightHeading>
            <EventTickets tickets={event.tickets} eventDate={event.date} />
          </>
        )}

        {/* Divider-2 */}
        <TextDivider />

        {/* Card-2 */}
        <ActionCard
          variant="left-image"
          title="Sizi aramızda görmek için can atıyoruz!"
          description="Eğer hala yerini ayırtmadıysan bu harika deneyimin bir parçası olmak 1 tık uzağında. Seni etkinlik sayfamıza alalım!"
          buttonLabel="Aramıza Katıl"
          buttonLink={event.registerLink}
          image="/images/mockups/reserved.webp"
        />
      </div>
    </div>
  );
}
