import ListOrg from "./list-org";
import NewOrgButton from "./new-org-btn";

export default function Sidebar() {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-500 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <ListOrg />
      <NewOrgButton />
    </aside>
  );
}
