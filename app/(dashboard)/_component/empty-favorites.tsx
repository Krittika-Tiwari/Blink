import Image from "next/image";
export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/favorite.svg" alt="Empty search" width={400} height={400} />
      <h2 className="text-2xl font-semibold mt-6">No favorite boards!</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};
