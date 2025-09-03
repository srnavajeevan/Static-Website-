
import React from 'react';

interface IconProps {
  className?: string;
}

const LeafIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M11.25 4.5A6.75 6.75 0 004.5 11.25v2.866c0 .937.23 1.832.656 2.634.46.861 1.157 1.558 2.018 2.018.802.426 1.697.656 2.634.656h2.866A6.75 6.75 0 0019.5 11.25 6.75 6.75 0 0011.25 4.5zM6.08 13.633a.75.75 0 01.37.662v.59a.75.75 0 01-1.5 0v-.59a.75.75 0 01.37-.662l.38-.19a.75.75 0 01.76 0l.38.19z"
      clipRule="evenodd"
    />
    <path
      d="M12 1.5a5.25 5.25 0 00-5.25 5.25v2.866a.75.75 0 00.161.468l.38.38a.75.75 0 001.06 0l.38-.38a.75.75 0 00.161-.468V6.75A3.75 3.75 0 0112 3a3.75 3.75 0 013.75 3.75v2.866a.75.75 0 00.161.468l.38.38a.75.75 0 001.06 0l.38-.38a.75.75 0 00.161-.468V6.75A5.25 5.25 0 0012 1.5z"
    />
  </svg>
);

export default LeafIcon;
