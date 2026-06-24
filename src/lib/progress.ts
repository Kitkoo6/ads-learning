"use client";

import { useCallback, useEffect, useState } from "react";
import type { TrackId } from "@/content/schema";
import { tracks } from "@/content/curriculum";

const KEY = "ads-learning:progress";

type ProgressState = Record<string, true>;

function read(): ProgressState {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(KEY) || "{}") as ProgressState;
  } catch {
    return {};
  }
}

function write(state: ProgressState) {
  localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new Event("progress-updated"));
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>({});

  useEffect(() => {
    setState(read());
    const onUpdate = () => setState(read());
    window.addEventListener("progress-updated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("progress-updated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);

  const isDone = useCallback((lessonId: string) => !!state[lessonId], [state]);

  const markDone = useCallback((lessonId: string) => {
    const next = { ...read(), [lessonId]: true as const };
    write(next);
  }, []);

  const markUndone = useCallback((lessonId: string) => {
    const next = { ...read() };
    delete next[lessonId];
    write(next);
  }, []);

  const toggle = useCallback(
    (lessonId: string) => {
      if (state[lessonId]) markUndone(lessonId);
      else markDone(lessonId);
    },
    [state, markDone, markUndone]
  );

  const reset = useCallback(() => write({}), []);

  const trackProgress = useCallback(
    (trackId: TrackId) => {
      const t = tracks.find((x) => x.id === trackId);
      if (!t) return { done: 0, total: 0, pct: 0 };
      const total = t.lessons.length;
      const done = t.lessons.filter((l) => state[l.id]).length;
      return { done, total, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
    },
    [state]
  );

  const overallProgress = useCallback(() => {
    let total = 0;
    let done = 0;
    for (const tr of tracks) {
      total += tr.lessons.length;
      done += tr.lessons.filter((l) => state[l.id]).length;
    }
    return { done, total, pct: total === 0 ? 0 : Math.round((done / total) * 100) };
  }, [state]);

  return { state, isDone, markDone, markUndone, toggle, reset, trackProgress, overallProgress };
}
