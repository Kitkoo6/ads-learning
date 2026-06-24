import { notFound } from "next/navigation";
import { tracks } from "@/content/curriculum";
import type { TrackId } from "@/content/schema";
import { LessonView } from "./lesson-view";

export function generateStaticParams() {
  const params: { track: string; lesson: string }[] = [];
  for (const t of tracks) {
    for (const l of t.lessons) {
      params.push({ track: t.id, lesson: l.slug });
    }
  }
  return params;
}

export default function LessonPage({
  params,
}: {
  params: { track: string; lesson: string };
}) {
  const track = tracks.find((t) => t.id === (params.track as TrackId));
  const lesson = track?.lessons.find((l) => l.slug === params.lesson);
  if (!track || !lesson) notFound();
  return <LessonView trackId={track.id} lessonSlug={lesson.slug} />;
}
