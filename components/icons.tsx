type IconProps = { className?: string };

export function ArrowUpRight({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function ArrowDown({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 4v12m0 0 5-5m-5 5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export function Play({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m7 5 8 5-8 5V5Z" fill="currentColor" /></svg>;
}

export function Plus({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export function Menu({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 6h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export function Close({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m4 4 12 12M16 4 4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export function VolumeOn({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 8h3l4-3v10l-4-3H4V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M14 7a4 4 0 0 1 0 6M16 5a7 7 0 0 1 0 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export function VolumeOff({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 8h3l4-3v10l-4-3H4V8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="m14 8 4 4m0-4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>;
}

export function XLogo({ className = "" }: IconProps) {
  return <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 3h3.6l3.3 4.4L14.8 3H16l-4.5 5.2L17 17h-3.6l-3.7-5-4.4 5H4l5-5.8L4 3Zm3 1.1H5.9l8.1 11.8h1.2L7 4.1Z" fill="currentColor" /></svg>;
}
