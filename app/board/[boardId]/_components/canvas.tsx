"use client";

import { useOthers, useSelf } from "@liveblocks/react/suspense";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolBar";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 dark:bg-slate-950 touch-none">
      <Info boardId={boardId} />
      <Participants />
      <ToolBar />
    </main>
  );
};
