import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 200, height = 60 }: LogoProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 400 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* RiteWat Logo */}
      <g>
        {/* "Rite" in white */}
        <path d="M46 30H66C76 30 84 38 84 48C84 58 76 66 66 66H56V90H46V30Z" fill="white"/>
        <path d="M56 56H66C70.4 56 74 52.4 74 48C74 43.6 70.4 40 66 40H56V56Z" fill="white"/>
        <path d="M90 30H100V40H90V30Z" fill="#FF6B00"/> {/* Orange dot */}
        <path d="M90 50H100V90H90V50Z" fill="white"/>
        <path d="M110 30H120V60L140 30H152L130 60L154 90H140L120 60V90H110V30Z" fill="white"/>
        <path d="M160 30H170V90H160V30Z" fill="white"/>
        
        {/* "Wat" in orange */}
        <path d="M180 30H190L200 70L210 30H220L230 70L240 30H250L235 90H225L215 50L205 90H195L180 30Z" fill="#FF6B00"/>
        <path d="M255 30H265V60L285 30H297L275 60L299 90H285L265 60V90H255V30Z" fill="#FF6B00"/>
        <path d="M305 30H315V90H305V30Z" fill="#FF6B00"/>
      </g>
      
      {/* "ENERGY SOLUTIONS" in white */}
      <text x="45" y="110" fontFamily="Arial" fontSize="16" fontWeight="bold" fill="white" letterSpacing="2">
        ENERGY SOLUTIONS
      </text>
    </svg>
  );
}
