import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] w-[60px] flex p-3 flex-col h-full gap-y-4 text-white bg-blue-950 ">
      <List />
      <NewButton />
    </aside>
  );
};
