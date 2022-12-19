import React from "react";
import AddPoll from "../components/pages/home/AddPoll";
import PollsView from "../components/pages/home/PollsView";

async function Page() {
  return (
    <div className="bg-red-500">
      {/* @ts-expect-error Server Component */}
      <PollsView />
      <AddPoll />
    </div>
  );
}

export default Page;
