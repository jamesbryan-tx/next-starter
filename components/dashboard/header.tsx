interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className='items-center justify-between px-2 sm:flex'>
      <div className='mb-2 grid gap-1 sm:mb-0'>
        <h1 className='font-heading text-3xl md:text-4xl'>{heading}</h1>
        {text && <p className='text-lg text-muted-foreground'>{text}</p>}
      </div>
      {children}
    </div>
  );
}
