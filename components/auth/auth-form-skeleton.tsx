import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface AuthFormSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AuthFormSkeleton({
  className,
  ...props
}: AuthFormSkeletonProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Skeleton className='h-10 w-full' />
          </div>
          <Skeleton className='h-10 w-full' />
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <Skeleton className='h-10 w-full' />
      </div>
    </div>
  );
}
