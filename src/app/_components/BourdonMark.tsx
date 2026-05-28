type BourdonMarkProps = {
  size?: number;
  color?: string;
};

export function BourdonMark({ size = 28, color = "var(--drone)" }: BourdonMarkProps) {
  return (
    <svg viewBox="0 0 400 400" width={size} height={size} fill="none" aria-hidden="true">
      <g fill={color}>
        <rect x="43" y="277" width="22" height="98" />
        <rect x="47" y="355" width="14" height="4" fill="var(--paper, #f7f1e8)" />
        <rect x="77" y="235" width="22" height="140" />
        <rect x="81" y="355" width="14" height="4" fill="var(--paper, #f7f1e8)" />
        <rect x="110" y="186" width="22" height="189" />
        <rect x="114" y="355" width="14" height="4" fill="var(--paper, #f7f1e8)" />
        <rect x="144" y="137" width="22" height="238" />
        <rect x="148" y="355" width="14" height="4" fill="var(--paper, #f7f1e8)" />
        <rect x="177" y="88" width="22" height="287" />
        <rect x="182" y="355" width="14" height="4" fill="var(--paper, #f7f1e8)" />
        <rect x="203" y="25" width="31" height="350" />
        <rect x="210" y="355" width="20" height="4" fill="var(--paper, #f7f1e8)" />
        <path d="M233 204 C292 182, 357 207, 357 269 C357 327, 298 367, 233 372 L233 288 C264 285, 289 274, 289 255 C289 235, 267 232, 233 249 Z" />
      </g>
    </svg>
  );
}
