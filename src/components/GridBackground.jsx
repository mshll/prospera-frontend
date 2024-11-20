export function GridBackground({ children }) {
  return (
    <div className='relative h-full w-full'>
      <div className='dark:bg-grid-white/[0.05] bg-grid-black/[0.05] absolute inset-0 bg-background'></div>
      <div className='pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>

      <div className='relative z-10'>{children}</div>
    </div>
  );
}
