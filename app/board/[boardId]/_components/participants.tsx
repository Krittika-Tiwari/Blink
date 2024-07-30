"use client";

import { connectionIdColor } from "@/lib/utils";
import { UserAvatar } from "./user-avatar";
import { useOthers, useSelf } from "@liveblocks/react/suspense";

const MAX_SHOWN_USER = 1;
export const Participants = () => {
  const users = useOthers();
  const currentuser = useSelf();

  const hasMoreUsers = users.length > MAX_SHOWN_USER;
  return (
    <div className="absolute top-2 right-2 bg-white dark:bg-slate-900 rounded-md p-3 h-12 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USER).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdColor(connectionId)}
              key={connectionId}
              name={info?.name}
              src={info?.picture}
              fallback={info?.name?.[0] || "A"}
            />
          );
        })}

        {currentuser && (
          <UserAvatar
            borderColor={connectionIdColor(currentuser.connectionId)}
            name={currentuser.info?.name}
            src={currentuser.info?.picture}
            fallback={currentuser.info?.name?.[0]}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USER} more...`}
            fallback={`+${users.length - MAX_SHOWN_USER}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute top-2 right-2 bg-white dark:bg-slate-900 rounded-md p-3 h-12 flex items-center shadow-md w-[100px]"></div>
  );
};
