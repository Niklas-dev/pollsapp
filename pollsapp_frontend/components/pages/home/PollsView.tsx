import React from "react";
import Poll from "./Poll";

const fetchData = async () => {
  return [
    { text: "This is a poll", author: "Niklas" },
    { text: "This is a poll too", author: "Server" },
  ];
};

async function PollsView() {
  const data = await fetchData();
  return (
    <div>
      {data.map((item) => (
        <Poll author={item.author} text={item.text} key={item.author} />
      ))}
    </div>
  );
}

export default PollsView;
