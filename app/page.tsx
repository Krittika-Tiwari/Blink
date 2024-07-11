import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
<div>
  <div>
    This is screen for Authenticated user only
  </div>
  <div>
    <UserButton/>
  </div>

</div>
  );
}
