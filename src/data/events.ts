import { Event } from "@/types";

const events: Event[] = [
  {
    id: 1,
    name: "Mobile Developer Summit 2024",
    title: "Summit For",
    subTitle: "Who're interested in MoDe",
    description: "A detailed event on mobile development trends.",
    location: {
      latitude: 41.085660366250444,
      longitude: 28.950240039927138,
      name: "Tech İstanbul | Şişhane",
      subtext:
        "Located at Moscone Center, easily accessible via public transport.",
    }, // San Francisco coordinates
    registerLink:
      "https://kommunity.com/devmultigroup/events/mobile-developer-conference-2025-445c54f5",
    videoUrl: "https://example.com/event-video",
    date: "2024-01-29T13:00:00+03:00", // ISO date object
    speakers: [
      {
        fullName: "John Doe",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "Senior Developer",
      },
      {
        fullName: "Jane Smith",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "Lead Mobile Architect",
      },
    ],
    sessions: [
      {
        topic: "Future of Android Development",
        startTime: "10:00", // Hour only
        endTime: "11:00", // Hour only
        speakerName: "John Doe",
        room: "Ana Salon"
      },
      {
        topic: "Cross-Platform Mobile Frameworks",
        startTime: "11:30",
        endTime: "12:30",
        speakerName: "Jane Smith",
        room: "Yan Salon"
      },
    ],
    sponsors: [
      {
        tier: "platin",
        sponsorSlug: "all-done"
      },
      {
        tier: "altın",
        sponsorSlug: "perseva"
      },
      {
        tier: "gümüş",
        sponsorSlug: "softtech"
      },
      {
        tier: "bronz",
        sponsorSlug: "adesso"
      }
    ],
    images: [
      "/images/events/mobile-developer-summit-2024/1.jpg",
      "/images/events/mobile-developer-summit-2024/2.jpg",
      "/images/events/mobile-developer-summit-2024/3.jpg",
    ],
    afterMetrics: {
      applications: "500",
      vipGuests: "100+",
      supporter: "150+",
      speakers: "30",
      workingParticipant: "60%",
      jobSeeker: "35%",
      jobProvider: "65%",
      satisfaction: "83%",
    },
    colorPalette: {
      primary: '214 83.7% 51%',   // Blue
      secondary: '214 83.7% 65%', 
      background: '214 83.7% 95%',
      text: '214 83.7% 20%'
    }
  },
  {
    id: 2,
    name: "AI in Mobile Development Conference 2024",
    title: "Summit For",
    subTitle: "Who're interested in MoDe",
    description:
      "Mobile, Web, Data Science ve Cloud tutkunlarının sabırsızlıkla beklediği etkinliğimiz #multitechsum24 için gerisayım başladı! Heyecan dorukta! Peki, bu etkinlikte seni neler bekliyor?\n\n🎙️ Sektörün öncülerinden ilham verici konuşmalar ve etkileşimli panellerle yepyeni bilgiler edinme fırsatı!\n\n🌟 Birbirinden değerli ve eşsiz network imkanları!\n\n☕ Enerji dolu kahve molalarıyla dinamik bir atmosfer!",
    location: {
      latitude: 41.085660366250444,
      longitude: 28.950240039927138,
      name: "Tech İstanbul | Şişhane",
      subtext:
        "Located at Moscone Center, easily accessible via public transport.",
    }, // San Francisco coordinates
    registerLink:
      "https://kommunity.com/devmultigroup/events/mobile-developer-conference-2025-445c54f5",
    videoUrl: "https://example.com/ai-event-video",
    date: "2025-03-02T13:00:00+03:00",
    speakers: [
      {
        fullName: "Alice Johnson",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "AI Research Lead",
      },
      {
        fullName: "Özcan Zafer Ayan",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "CTO at MobileTech",
        phrase: "Konuşma yaptığım en ilgi çekici topluluk, herkese tavsiye ederim!"
      },
      {
        fullName: "Alice Johnson2",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "AI Research Lead",
      },
      {
        fullName: "Bob William2",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "CTO at MobileTech",
      },
      {
        fullName: "Alice Johnson3",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "AI Research Lead",
      },
      {
        fullName: "Bob Williams3",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "CTO at MobileTech",
      },
      {
        fullName: "Alice Johnson4",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "AI Research Lead",
      },
      {
        fullName: "Bob Williams4",
        photoUrl:
          "https://media.licdn.com/dms/image/v2/D4D03AQFvuXyysfGAyg/profile-displayphoto-shrink_800_800/B4DZNqs8.gHcAc-/0/1732661989869?e=1744243200&v=beta&t=zUWagjrMnuz26tTT2cFiFifmOv0Evk1Fd-Cq3usDpME",
        title: "CTO at MobileTech",
      },
    ],
    sessions: [
      {
        topic: "AI-Driven App Personalization",
        startTime: "09:00",
        endTime: "10:00",
        speakerName: "Özcan Zafer Ayan",
        room: "Yan Salon"
      },
      {
        topic: "Building Smarter Apps with AI",
        startTime: "10:30",
        endTime: "11:30",
        speakerName: "Özcan Zafer Ayan",
        room: "Yan Salon"
      },
      {
        topic: "Building Smart Apps with AI",
        startTime: "10:30",
        endTime: "12:30",
        speakerName: "Özcan Zafer Ayan",
        room: "Ana Salon"
      },
      {
        topic: "Building Smartest Apps with AI",
        startTime: "12:30",
        endTime: "13:30",
        speakerName: "Özcan Zafer Ayan",
        room: "Ana Salon"
      },
      {
        speakerName: "Özcan Zafer Ayan",
        room: "Network"
      },
      {
        speakerName: "Özcan ZaferAyan2",
        room: "Network"
      },
      {
        speakerName: "Özcan ZaferAyan3",
        room: "Network"
      },
      {
        speakerName: "Özcan ZaferAyan4",
        room: "Network"
      },
      {
        speakerName: "Özcan ZaferAyan5",
        room: "Network"
      },
      {
        speakerName: "Özcan ZaferAyan6",
        room: "Network"
      },
    ],
    sponsors: [
      {
        tier: "platin",
        sponsorSlug: "all-done"
      },
      {
        tier: "altın",
        sponsorSlug: "perseva"
      },
      {
        tier: "gümüş",
        sponsorSlug: "softtech"
      },
      {
        tier: "bronz",
        sponsorSlug: "adesso"
      }
    ],
    images: [
      "/images/events/mobile-developer-summit-2024/1.webp",
      "/images/events/mobile-developer-summit-2024/2.webp",
      "/images/events/mobile-developer-summit-2024/3.webp",
    ],
    afterMetrics: {
      applications: "700",
      vipGuests: "200+",
      supporter: "250+",
      speakers: "40",
      workingParticipant: "70%",
      jobSeeker: "45%",
      jobProvider: "75%",
      satisfaction: "90%",
    },
    colorPalette: {
      primary: '160 81.1% 45.1%', // Green
      secondary: '160 81.1% 55.1%',
      background: '160 81.1% 95%',
      text: '160 81.1% 20%'
    }
  },
];

export default events;
