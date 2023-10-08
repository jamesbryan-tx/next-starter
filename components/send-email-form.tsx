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
import { type SendEmailParams, sendEmailSchema } from '@/lib/email/utils';
import { trpc } from '@/lib/trpc/client';
import { cn } from '@/lib/utils';

interface EmailFormProps extends React.HTMLAttributes<HTMLFormElement> {}

type FormData = z.infer<typeof sendEmailSchema>;

export function EmailForm({ className, ...props }: EmailFormProps) {
  const router = useRouter();
  const utils = trpc.useContext();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(sendEmailSchema),
  });

  const { mutate: sendEmail, isLoading: isSending } =
    trpc.email.sendEmail.useMutation({
      onSuccess: () => onSuccess(),
      onError: (error) => onError(error),
    });

  const onSubmit = (values: SendEmailParams) => {
    sendEmail(values);
  };

  const onSuccess = () => {
    router.refresh();
    toast({
      title: 'Success!',
      description: 'Your email has been sent.',
      variant: 'default',
    });
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
          <CardTitle>Recipient Info</CardTitle>
          <CardDescription>
            Please provide the name and email address of the email recipient.
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-5'>
          <div className='grid gap-1'>
            <Label htmlFor='name'>Name</Label>
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
          <div className='grid gap-1'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              className='w-[400px]'
              size={32}
              {...register('email')}
            />
            {errors?.email && (
              <p className='px-1 text-xs text-red-600'>
                {errors.email.message}
              </p>
            )}
          </div>
          <div className='grid gap-1'>
            <Label htmlFor='email'>Subject</Label>
            <Input
              id='subject'
              className='w-[400px]'
              size={32}
              {...register('subject')}
            />
            {errors?.subject && (
              <p className='px-1 text-xs text-red-600'>
                {errors.subject.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <button
            type='submit'
            className={cn(buttonVariants(), className)}
            disabled={isSending}
          >
            {isSending && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            <span>Send</span>
          </button>
        </CardFooter>
      </Card>
    </form>
  );
}
