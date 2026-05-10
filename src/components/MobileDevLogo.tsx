type MobileDevLogoProps = {
  className?: string;
  idPrefix?: string;
};

export default function MobileDevLogo({ className = 'h-14 w-14', idPrefix = 'mdsLogo' }: MobileDevLogoProps) {
  const gradientId = `${idPrefix}-gradient`;

  return (
    <svg
      viewBox="0 0 170 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Mobile Dev Studios logo"
    >
      <defs>
        <linearGradient id={gradientId} x1="20" y1="5" x2="155" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8F22FF" />
          <stop offset="0.48" stopColor="#4025F4" />
          <stop offset="1" stopColor="#006DFF" />
        </linearGradient>
      </defs>

      <g stroke={`url(#${gradientId})`} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
        <path d="M83 9L111 25L156 51V93" />
        <path d="M45 38L12 57V96" />
        <path d="M110 25L91 14" />
        <path d="M12 104L81 64" />
        <path d="M81 64L99 74" />
        <path d="M12 104V160L51 183V126" />
        <path d="M66 176L104 193L126 181L74 151" />
        <path d="M92 148L118 163L158 139" />
        <path d="M158 139V160L116 184" />
        <path d="M143 52V91" />
        <path d="M118 118L158 95" />
        <path d="M52 109V89L71 78" />
        <path d="M52 109L69 119" />
        <path d="M93 87L102 93" />
        <path d="M108 128L93 137" />
      </g>

      <g stroke={`url(#${gradientId})`} strokeWidth="8" fill="#F9FAFF">
        <circle cx="82" cy="65" r="9" />
        <circle cx="110" cy="83" r="9" />
        <circle cx="123" cy="111" r="9" />
        <circle cx="92" cy="137" r="9" />
        <circle cx="67" cy="120" r="9" />
      </g>
    </svg>
  );
}