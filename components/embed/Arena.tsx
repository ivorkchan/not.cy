"use client";

import React from "react";

type ArenaEmbedProps = {
  readonly channel: string;
};

const Arena: React.FC<ArenaEmbedProps> = ({ channel }) => {
  const src = `https://www.are.na/might-bang/${channel}/embed`;

  return (
    <div className="shadow-blur border">
      <iframe
        className="h-[64ch] w-full border-none"
        sandbox="allow-forms allow-popups"
        src={src}
        title={channel}
      />
    </div>
  );
};

export default Arena;
