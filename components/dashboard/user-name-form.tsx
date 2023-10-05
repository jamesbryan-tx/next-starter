'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import {
  type User,
  type UserNameParams,
  userNameSchema,
} from '@/lib/db/schema/auth';
import { trpc } from '@/lib/trpc/client';
import { cn } from '@/lib/utils';

interface UserNameFormProps extends React.HTMLAttributes<HTMLFormElement> {
  user: Pick<User, 'id' | 'name'>;
}

type FormData = z.infer<typeof userNameSchema>;

export function UserNameForm({ user, className, ...props }: UserNameFormProps) {
  const router = useRouter();
  const utils = trpc.useContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userNameSchema),
    defaultValues: {
      name: user?.name || '',
    },
  });

  const onSuccess = () => {
    router.refresh();
    toast({
      title: 'Success!',
      description: 'Your name has been updated.',
      variant: 'default',
    });
  };

  const { mutate: updateUserName, isLoading: isUpdating } =
    trpc.users.updateUserName.useMutation({
      onSuccess: () => onSuccess(),
      onError: (error) => onError(error),
    });

  const onSubmit = (values: UserNameParams) => {
    updateUserName(values);
  };

  const onError = (error: any) => {
    console.log(error);
    toast({
      title: 'Error',
      description: error.message,
      variant: 'destructive',
    });
  };

  return (
    <form
      className={cn(className)}
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle>Your Name</CardTitle>
          <CardDescription>
            Please enter your full name or a display name you are comfortable
            with.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='name'>
              Name
            </Label>
            <Input
              id='name'
              className='w-[400px]'
              size={32}
              {...register('name')}
            />
            {errors?.name && (
              <p className='px-1 text-xs text-red-600'>{errors.name.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <button
            type='submit'
            className={cn(buttonVariants(), className)}
            disabled={isUpdating}
          >
            {isUpdating && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            <span>Save</span>
          </button>
        </CardFooter>
      </Card>
    </form>
  );
}
