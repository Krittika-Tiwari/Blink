"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorname: string;
  createdAt: number;
  orgId: string;
  isFavorite: boolean;
}
export const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorname,
  createdAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorlabe = userId === authorId ? "You" : authorname;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });
  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden ">
        <div className=" relative flex-1 bg-purple-100">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorlabe={authorlabe}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className=" aspect-[100/127]  rounded-lg   overflow-hidden ">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
