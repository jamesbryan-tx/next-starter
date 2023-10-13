import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default function IndexPage() {
  return (
    <>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
        <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
          <Link
            href={siteConfig.links.twitter}
            className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'
            target='_blank'
          >
            Because we need another Next starter
          </Link>
          <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
            <Balancer>A fork of Taxonomy using TRPC and React Query!</Balancer>
          </h1>
          <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
            <Balancer>
              Along with Drizzle, Next Auth, Resend with React.Email Components,
              T3 Env, and more.
            </Balancer>
          </p>
          <div className='space-x-4'>
            <Link
              href='/register'
              className={cn(buttonVariants({ size: 'lg' }))}
            >
              Get Started
            </Link>
            <Link
              href={siteConfig.links.github}
              target='_blank'
              rel='noreferrer'
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section
        id='features'
        className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Features
          </h2>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            <Balancer>
              This project is a fork of the{' '}
              <Link
                href={siteConfig.links.taxonomy}
                className='underline underline-offset-4'
              >
                Taxonomy
              </Link>{' '}
              repo by shadcn. It is intended to be a bare bones starter for your
              next...Next project. Special thanks to{' '}
              <Link
                href={siteConfig.links.shadcn}
                className='underline underline-offset-4'
              >
                shadcn
              </Link>{' '}
              for inspiring this template.
            </Balancer>
          </p>
        </div>
        <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
                <path d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z' />
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Next.js 13</h3>
                <p className='text-sm text-muted-foreground'>
                  App Directory, Routing, Layouts, Loading UI, and API routes.
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
                <path d='M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z' />
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>React 18</h3>
                <p className='text-sm text-muted-foreground'>
                  Server and Client Components. Use hook.
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg
                className='-mx-1 h-12 w-12 fill-current'
                viewBox='0 0 160 160'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  width='9.63139'
                  height='40.8516'
                  rx='4.8157'
                  transform='matrix(0.873028 0.48767 -0.497212 0.867629 43.4805 67.3037)'
                  fill='currentColor'
                ></rect>
                <rect
                  width='9.63139'
                  height='40.8516'
                  rx='4.8157'
                  transform='matrix(0.873028 0.48767 -0.497212 0.867629 76.9395 46.5342)'
                  fill='currentColor'
                ></rect>
                <rect
                  width='9.63139'
                  height='40.8516'
                  rx='4.8157'
                  transform='matrix(0.873028 0.48767 -0.497212 0.867629 128.424 46.5352)'
                  fill='currentColor'
                ></rect>
                <rect
                  width='9.63139'
                  height='40.8516'
                  rx='4.8157'
                  transform='matrix(0.873028 0.48767 -0.497212 0.867629 94.957 67.3037)'
                  fill='currentColor'
                ></rect>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Database</h3>
                <p className='text-sm text-muted-foreground'>
                  Drizzle ORM and Postgres. Connect to any Postgres connection
                  string.
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 256 256'
                className='-mx-1 h-12 w-12'
              >
                <rect width='256' height='256' fill='none'></rect>
                <line
                  x1='208'
                  y1='128'
                  x2='128'
                  y2='208'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></line>
                <line
                  x1='192'
                  y1='40'
                  x2='40'
                  y2='192'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='16'
                ></line>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Components</h3>
                <p className='text-sm text-muted-foreground'>
                  Shadcn UI components and Tailwind CSS for styling.
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='1'
                className='-mx-1 h-12 w-12 fill-current'
              >
                <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Authentication</h3>
                <p className='text-sm text-muted-foreground'>
                  Authentication using NextAuth.js and middlewares.
                </p>
              </div>
            </div>
          </div>
          <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
            <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
              <svg
                className='-mx-2 h-14 w-14 fill-current'
                viewBox='0 0 32 32'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M24.4558 24.4853C25.2339 23.7073 25.3805 22.6549 25.2947 21.746C25.2078 20.8254 24.8697 19.8258 24.3896 18.8287C23.957 17.9302 23.3802 16.9745 22.6821 16C23.3802 15.0255 23.957 14.0698 24.3896 13.1713C24.8697 12.1742 25.2078 11.1746 25.2947 10.254C25.3805 9.34508 25.2339 8.29273 24.4558 7.51472C23.6778 6.73671 22.6255 6.59004 21.7165 6.67584C20.796 6.76273 19.7964 7.10086 18.7993 7.58094C17.9007 8.01357 16.945 8.59036 15.9706 9.28842C14.9961 8.59036 14.0404 8.01357 13.1418 7.58094C12.1447 7.10086 11.1451 6.76273 10.2246 6.67584C9.31564 6.59004 8.26329 6.73671 7.48528 7.51472C6.70727 8.29273 6.5606 9.34508 6.6464 10.254C6.7333 11.1746 7.07142 12.1742 7.5515 13.1713C7.98414 14.0698 8.56092 15.0255 9.25898 16C8.56092 16.9745 7.98414 17.9302 7.5515 18.8287C7.07142 19.8258 6.7333 20.8254 6.6464 21.746C6.5606 22.6549 6.70727 23.7073 7.48528 24.4853C8.26329 25.2633 9.31564 25.41 10.2246 25.3242C11.1451 25.2373 12.1447 24.8991 13.1418 24.4191C14.0404 23.9864 14.9961 23.4096 15.9706 22.7116C16.945 23.4096 17.9007 23.9864 18.7993 24.4191C19.7964 24.8991 20.796 25.2373 21.7165 25.3242C22.6255 25.41 23.6778 25.2633 24.4558 24.4853ZM15.9706 20.948C16.8399 20.2684 17.724 19.4874 18.591 18.6205C19.458 17.7535 20.239 16.8693 20.9186 16C20.239 15.1307 19.458 14.2465 18.591 13.3795C17.724 12.5126 16.8399 11.7316 15.9706 11.052C15.1012 11.7316 14.2171 12.5126 13.3501 13.3795C12.4831 14.2465 11.7021 15.1307 11.0225 16C11.7021 16.8693 12.4831 17.7535 13.3501 18.6205C14.2171 19.4874 15.1012 20.2684 15.9706 20.948ZM17.1498 21.8145C17.968 21.1558 18.7885 20.4195 19.5893 19.6187C20.39 18.818 21.1264 17.9974 21.7851 17.1792C23.7187 19.9919 24.4627 22.4819 23.4576 23.487C22.4524 24.4922 19.9625 23.7482 17.1498 21.8145ZM10.156 17.1792C10.8148 17.9974 11.5511 18.818 12.3518 19.6187C13.1526 20.4195 13.9731 21.1558 14.7914 21.8145C11.9786 23.7482 9.48871 24.4922 8.48355 23.487C7.47839 22.4819 8.22238 19.9919 10.156 17.1792ZM10.156 14.8208C10.8148 14.0026 11.5511 13.182 12.3518 12.3813C13.1526 11.5805 13.9731 10.8442 14.7914 10.1855C11.9786 8.25182 9.48871 7.50783 8.48355 8.51299C7.47839 9.51815 8.22238 12.0081 10.156 14.8208ZM17.1498 10.1855C17.968 10.8442 18.7885 11.5805 19.5893 12.3813C20.39 13.182 21.1264 14.0026 21.7851 14.8208C23.7187 12.0081 24.4627 9.51815 23.4576 8.51299C22.4524 7.50783 19.9625 8.25182 17.1498 10.1855Z'
                  fill='currentColor'
                  strokeWidth='0.5'
                ></path>
              </svg>
              <div className='space-y-2'>
                <h3 className='font-bold'>Email</h3>
                <p className='text-sm text-muted-foreground'>
                  Send email with Resend and build email templates with
                  React.Email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='open-source' className='container py-8 md:py-12 lg:py-24'>
        <div className='mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Proudly Open Source
          </h2>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            <Balancer>
              Taxonomy and this Next starter are open source and powered by open
              source software. The code is available on{' '}
              <Link
                href={siteConfig.links.github}
                target='_blank'
                rel='noreferrer'
                className='underline underline-offset-4'
              >
                GitHub
              </Link>
              .{' '}
            </Balancer>
          </p>
        </div>
      </section>
    </>
  );
}
