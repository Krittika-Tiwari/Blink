import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

interface FooterProps {
  isFavorite: boolean;
  title: string;
  authorlabe: string;
  createdAtLabel: string;
  onClick: () => void;
  disabled: boolean;
}

export const Footer = ({
  isFavorite,
  title,
  authorlabe,
  createdAtLabel,
  onClick,
  disabled,
}: FooterProps) => {
  const handelClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    event.preventDefault();

    onClick();
  };
  return (
    <div className="relative dark:bg-slate-700 p-3">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground ">
        {authorlabe}, {createdAtLabel}
      </p>

      <button
        disabled={disabled}
        onClick={handelClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-yellow-600",
          disabled && "cursor-not-allowed opacity-75"
        )}
      >
        <Star
          className={cn(
            "h-4 w-4 ",
            isFavorite && "text-yellow-500 fill-yellow-500"
          )}
          size={20}
        />
      </button>
    </div>
  );
};
