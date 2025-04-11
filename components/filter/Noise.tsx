import React from "react";

function Noise({ children }: { readonly children: React.ReactNode }) {
  return (
    <>
      <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="noise-fine">
            <feTurbulence
              baseFrequency="1"
              numOctaves="1"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
          <filter id="noise-coarse">
            <feTurbulence
              baseFrequency="0.01"
              numOctaves="1"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
          </filter>
        </defs>
      </svg>
      <div
        style={{
          filter: 'url("#noise-fine") url("#noise-coarse")',
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Noise;
