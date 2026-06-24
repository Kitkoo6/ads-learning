import type { Bilingual } from "@/lib/i18n/types";

export type TrackId = "meta" | "tiktok" | "shopee";
export type Level = "beginner" | "advanced";

export type VideoRef = {
  title: Bilingual;
  url: string;
  /** Optional jump-in time in seconds */
  timestamp?: number;
};

export type LessonSection = {
  heading: Bilingual;
  /** Markdown supported */
  body: Bilingual;
};

export type QuizQuestion = {
  prompt: Bilingual;
  options: Bilingual[];
  correctIndex: number;
  explanation: Bilingual;
};

export type Quiz = {
  questions: QuizQuestion[];
};

export type Scenario = {
  prompt: Bilingual;
  /** Free-form answer prompt; revealed after submission */
  idealAnswer: Bilingual;
  hints?: Bilingual[];
};

export type DragMatchPair = {
  left: Bilingual;
  right: Bilingual;
};

export type DragMatchExercise = {
  prompt: Bilingual;
  pairs: DragMatchPair[];
};

export type Lesson = {
  id: string;
  slug: string;
  track: TrackId;
  level: Level;
  order: number;
  title: Bilingual;
  summary: Bilingual;
  readTimeMin: number;
  /** Thailand-specific lesson flag (10.10, Songkran, LINE, etc.) */
  thailandFocus?: boolean;
  videoRef?: VideoRef;
  sections: LessonSection[];
  dragMatch?: DragMatchExercise;
  scenario?: Scenario;
  quiz?: Quiz;
};

export type Track = {
  id: TrackId;
  name: Bilingual;
  tagline: Bilingual;
  description: Bilingual;
  brandColor: string;
  brandColorFg: string;
  accentClass: string;
  lessons: Lesson[];
};
