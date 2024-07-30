"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hint } from "@/components/hint";
import { useRenameModel } from "@/store/use-rename-model";
import { Actions } from "@/components/action";
import { icons, Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return <div className="text-neutral-300 px-1/5">|</div>;
};
export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModel();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;
  return (
    <div className="absolute top-2 left-2 bg-white dark:bg-slate-900 rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to board" side="bottom" sideOffset={10}>
        <Link href={`/`}>
          <Button variant={"board"} className="px-2">
            <Image
              src={"/logo.svg"}
              alt="Blink logo"
              width={40}
              height={40}
              className="h-6 w-6"
            />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black dark:text-white",
                font.className
              )}
            >
              Blink
            </span>
          </Button>
        </Link>
      </Hint>
      <TabSeparator />
      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant={"board"}
          className="text-base font-normal px-2 dark:text-white"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size={"icon"} variant={"board"} className="px-2">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white dark:bg-slate-900 rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"></div>
  );
};
