import type { Bilingual } from "./types";

export const messages = {
  "nav.home": { en: "Home", th: "หน้าแรก" },
  "nav.progress": { en: "My Progress", th: "ความคืบหน้า" },
  "nav.tracks": { en: "Tracks", th: "หลักสูตร" },
  "nav.study_mode": { en: "Study Mode", th: "โหมดเรียน" },
  "nav.theme": { en: "Theme", th: "ธีม" },

  "track.meta": { en: "Meta Ads", th: "โฆษณา Meta" },
  "track.tiktok": { en: "TikTok Ads", th: "โฆษณา TikTok" },
  "track.shopee": { en: "Shopee Ads", th: "โฆษณา Shopee" },

  "level.beginner": { en: "Beginner", th: "ระดับเริ่มต้น" },
  "level.advanced": { en: "Advanced", th: "ระดับสูง" },

  "lesson.read_time": { en: "min read", th: "นาที" },
  "lesson.complete": { en: "Mark complete", th: "ทำเครื่องหมายเสร็จ" },
  "lesson.completed": { en: "Completed", th: "เรียนจบแล้ว" },
  "lesson.next": { en: "Next lesson", th: "บทเรียนถัดไป" },
  "lesson.prev": { en: "Previous", th: "ก่อนหน้า" },
  "lesson.video": { en: "Watch source video", th: "ดูวิดีโอต้นฉบับ" },

  "quiz.title": { en: "Knowledge check", th: "ทดสอบความเข้าใจ" },
  "quiz.submit": { en: "Submit", th: "ส่งคำตอบ" },
  "quiz.score": { en: "Your score", th: "คะแนนของคุณ" },
  "quiz.retake": { en: "Retake quiz", th: "ทำแบบทดสอบใหม่" },
  "quiz.correct": { en: "Correct", th: "ถูกต้อง" },
  "quiz.incorrect": { en: "Incorrect", th: "ไม่ถูกต้อง" },

  "scenario.title": { en: "Scenario challenge", th: "แบบฝึกหัดสถานการณ์" },
  "scenario.check": { en: "Check answer", th: "ตรวจคำตอบ" },

  "progress.your": { en: "Your progress", th: "ความคืบหน้าของคุณ" },
  "progress.lessons": { en: "lessons", th: "บทเรียน" },
  "progress.completed": { en: "completed", th: "เสร็จแล้ว" },
  "progress.reset": { en: "Reset progress", th: "รีเซ็ตความคืบหน้า" },

  "home.title": {
    en: "Master Ads in Thailand",
    th: "เชี่ยวชาญการยิงแอดในไทย",
  },
  "home.subtitle": {
    en: "A bilingual playbook for Meta, TikTok, and Shopee — built for the Thai market.",
    th: "คู่มือสองภาษาสำหรับ Meta, TikTok และ Shopee — ออกแบบเพื่อตลาดไทย",
  },
  "home.cta.start": { en: "Start learning", th: "เริ่มเรียน" },
  "home.cta.explore": { en: "Explore tracks", th: "ดูหลักสูตรทั้งหมด" },
} as const satisfies Record<string, Bilingual>;

export type MessageKey = keyof typeof messages;
