import Link from 'next/link';
import { AsideLinksOne, IAsideLinksOne } from '@/constants';
import { ShowIcon } from '@/components/show-icon';

export function AsideOne() {
  return (
    <div className="py-2">
      {AsideLinksOne.map((link, i) => (
        <ShowLink key={i} link={link} />
      ))}
    </div>
  );
}

function ShowLink({ link }: { link: IAsideLinksOne }) {
  return (
    <Link
      href={link.path}
      className="flex items-center gap-3 px-4 py-3 hover:bg-amber-50 transition-colors duration-150 cursor-pointer rounded-lg mx-1 group"
    >
      <ShowIcon
        hoverEffect={false}
        keepClasses={false}
        className="text-[#f07c1e]"
      >
        <link.icon size={22} />
      </ShowIcon>
      <span className="font-medium text-sm text-[#1a1612]">{link.label}</span>
    </Link>
  );
}
