import React from 'react';

const SvgIcon = ({ color }: { color?: string }) => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43.125 37.3565H40.4489V15.8818H44.1552L22.5 0L0.844842 15.8818H4.55061V37.3565H1.87497C0.839415 37.3565 0 38.1958 0 39.2315V45H45V39.2315C45 38.1958 44.1606 37.3565 43.125 37.3565ZM11.3553 37.3565H6.42567V15.8818H11.3553V37.3565ZM18.16 37.3565H13.2303V15.8818H18.16V37.3565ZM24.9646 37.3565H20.0349V15.8818H24.9646V37.3565ZM22.5 12.1818C20.9036 12.1818 19.6094 10.8995 19.6094 9.31802C19.6094 7.7365 20.9036 6.45405 22.5 6.45405C24.0965 6.45405 25.3907 7.7365 25.3907 9.31802C25.3906 10.8995 24.0965 12.1818 22.5 12.1818ZM31.7693 37.3565H26.8397V15.8818H31.7693V37.3565ZM38.5739 37.3565H33.6443V15.8818H38.5739V37.3565Z"
      fill={color || 'white'}
    />
  </svg>
);

export default SvgIcon;