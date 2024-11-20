export function GridBackground() {
  return (
    <div className='absolute inset-0 -z-10'>
      <div className='absolute inset-0 bg-background bg-grid-black/[0.05] dark:bg-grid-white/[0.05]'></div>
      <div className='pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
    </div>
  );
}
