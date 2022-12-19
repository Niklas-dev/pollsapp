import React from "react";
import Button from "./Button";

async function Poll({ text, author }: { text: string; author: string }) {
  return (
    <div>
      <h2>{author}</h2>
      <p>{text}</p>
      <Button />
    </div>
  );
}

export default Poll;
