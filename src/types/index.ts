type Speaker = {
  fullName: string;
  linkedInUsername: string;
  title: string;
};

type Session = {
  topic: string;
  startTime: string; // start time for session
  endTime: string; // end time for session
  speakerName: string;
};

type AfterMetrics = {
  applications: string;
  vipGuests: string;
  supporter: string;
  speakers: string;
  workingParticipant: string;
  jobSeeker: string;
  jobProvider: string;
  satisfaction: string;
};

export type Event = {
  id: number;
  name: string;
  subTitle: string;
  title: string;
  description: string;
  location: string;
  locationSubText: string;
  videoUrl?: string;
  date: string; // ISO formatta tarih
  speakers: Speaker[];
  sessions: Session[];
  afterMetrics?: AfterMetrics;
};
