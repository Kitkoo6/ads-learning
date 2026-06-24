import type { Lesson, Track, TrackId } from "./schema";
import { metaLessons } from "./meta";
import { tiktokLessons } from "./tiktok";
import { shopeeLessons } from "./shopee";

export const tracks: Track[] = [
  {
    id: "meta",
    name: { en: "Meta Ads", th: "โฆษณา Meta" },
    tagline: {
      en: "Facebook, Instagram, Reels — built for the Thai market.",
      th: "Facebook, Instagram, Reels — สำหรับตลาดไทย",
    },
    description: {
      en: "Master the Meta stack from Business Manager to ROAS-driven creative testing, with a Thailand-specific playbook on LINE integration and Songkran seasonal campaigns.",
      th: "เรียนรู้ Meta ตั้งแต่ Business Manager จนถึงการทดสอบครีเอทีฟแบบเน้น ROAS พร้อมเพลย์บุ๊กไทยเรื่อง LINE และแคมเปญสงกรานต์",
    },
    brandColor: "#1877F2",
    brandColorFg: "#ffffff",
    accentClass: "from-[#1877F2] to-[#5B9DFB]",
    lessons: metaLessons,
  },
  {
    id: "tiktok",
    name: { en: "TikTok Ads", th: "โฆษณา TikTok" },
    tagline: {
      en: "Gen Z attention, native creative, TikTok Shop ready.",
      th: "เข้าถึง Gen Z ครีเอทีฟเนทีฟ และพร้อมยิงร่วม TikTok Shop",
    },
    description: {
      en: "Learn TikTok Ads Manager, Smart Performance campaigns, and how to write hook-first creative that survives the Thai For You feed.",
      th: "ใช้งาน TikTok Ads Manager และ Smart Performance พร้อมเขียนครีเอทีฟแบบ hook-first ที่อยู่รอดในฟีด For You ของคนไทย",
    },
    brandColor: "#FE2C55",
    brandColorFg: "#ffffff",
    accentClass: "from-[#FE2C55] to-[#25F4EE]",
    lessons: tiktokLessons,
  },
  {
    id: "shopee",
    name: { en: "Shopee Ads", th: "โฆษณา Shopee" },
    tagline: {
      en: "Search, Display, Affiliate, and the mega-campaign calendar.",
      th: "Search, Display, Affiliate และปฏิทินแคมเปญใหญ่",
    },
    description: {
      en: "From keyword auctions to 11.11 — a sharp tour of Shopee's ad surface, with Thailand-specific buyer behaviour and Shopee Live amplification.",
      th: "ตั้งแต่การประมูลคีย์เวิร์ดจนถึง 11.11 — สรุปทุกพื้นที่โฆษณา Shopee พร้อมพฤติกรรมผู้ซื้อไทยและการดัน Shopee Live",
    },
    brandColor: "#EE4D2D",
    brandColorFg: "#ffffff",
    accentClass: "from-[#EE4D2D] to-[#F69A78]",
    lessons: shopeeLessons,
  },
];

export function getTrack(id: TrackId): Track {
  const t = tracks.find((x) => x.id === id);
  if (!t) throw new Error(`Unknown track ${id}`);
  return t;
}

export function getLesson(trackId: TrackId, slug: string): Lesson | undefined {
  return getTrack(trackId).lessons.find((l) => l.slug === slug);
}

export function totalLessons(): number {
  return tracks.reduce((acc, t) => acc + t.lessons.length, 0);
}
