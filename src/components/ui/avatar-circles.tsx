"use client";

import { cn } from "@/lib/utils";

interface Avatar {
  imageUrl: string;
  profileUrl?: string;
}

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: Avatar[];
}

export function AvatarCircles({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((avatar, index) => (
        <a
          key={index}
          href={avatar.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-10 w-10 rounded-full border-2 border-background transition-transform hover:scale-110"
            src={avatar.imageUrl}
            alt={`Avatar ${index + 1}`}
          />
        </a>
      ))}
      {numPeople && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-secondary text-center text-xs font-medium text-secondary-foreground">
          +{numPeople}
        </div>
      )}
    </div>
  );
}
