"use client";

import { useOthers } from "@liveblocks/react/suspense";
import { Info } from "./info";
import { Participants } from "./participants";
import { ToolBar } from "./toolBar";

interface CanvasProps {
  boardId: string;
}
export const Canvas = ({ boardId }: CanvasProps) => {
  const others = useOthers();
  const userCount = others.length;

  return (
    <main className="h-full w-full relative bg-neutral-100 dark:bg-slate-950 touch-none">
      <div className="absolute top-40 left-2">
        There are {userCount} other user(s) online
      </div>
      <Info />
      <Participants />
      <ToolBar />
    </main>
  );
};
