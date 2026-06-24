import { notFound } from "next/navigation";
import { tracks } from "@/content/curriculum";
import type { TrackId } from "@/content/schema";
import { TrackHub } from "./track-hub";

export function generateStaticParams() {
  return tracks.map((t) => ({ track: t.id }));
}

export default function TrackPage({ params }: { params: { track: string } }) {
  const track = tracks.find((t) => t.id === (params.track as TrackId));
  if (!track) notFound();
  return <TrackHub trackId={track.id} />;
}
