import Link from 'next/link';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

export function SocialIcons() {
  <div className='flex items-center gap-4'>
    <Link href={siteConfig.links.twitter}>
      <Icons.twitter className='h-5 w-5' />
    </Link>
    <Link href={siteConfig.links.github}>
      <Icons.github className='-mr-2 h-6 w-6' />
    </Link>
  </div>;
}
