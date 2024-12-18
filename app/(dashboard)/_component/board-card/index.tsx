"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { formatDistanceToNow } from "date-fns";
import { useAuth } from "@clerk/nextjs";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/action";
import { MoreHorizontal } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";
import { useMutation } from "convex/react";
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

  // Alternative implementation
  // const handelFavorite = useMutation(api.board.favorite);
  // const handelUnFavorite = useMutation(api.board.unfavorite);

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(
    api.board.favorite
  );

  const { mutate: onUnFavorite, pending: pendingUnFavorite } = useApiMutation(
    api.board.unfavorite
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      onUnFavorite({ id }).catch(() =>
        toast.error("Failed to unfavorite board")
      );
    } else {
      onFavorite({ id, orgId }).catch(() =>
        toast.error("Failed to favorite board")
      );
    }
  };
  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden ">
        <div className=" relative flex-1 bg-purple-100">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button title="More" className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1 outline-none ">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorlabe={authorlabe}
          createdAtLabel={createdAtLabel}
          onClick={toggleFavorite}
          disabled={pendingFavorite || pendingUnFavorite}
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
