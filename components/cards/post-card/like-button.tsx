'use client';

import { useFormStatus } from 'react-dom';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { ReloadIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function LikeButton({ isLiked }: { isLiked: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        'py-1.5 w-full px-4 rounded-lg transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50',
        isLiked ? 'text-[#f07c1e]' : 'text-[#8a8278] hover:text-[#f07c1e] hover:bg-amber-50'
      )}
      type="submit"
      disabled={pending}
    >
      <div className="flex-center gap-2 w-full mx-auto">
        {pending ? (
          <ReloadIcon className="h-4 w-4 animate-spin" />
        ) : (
          <motion.span
            key={String(isLiked)}
            initial={{ scale: 0.6 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 18 }}
          >
            {isLiked ? <AiFillLike size={18} /> : <AiOutlineLike size={18} />}
          </motion.span>
        )}
        <span className="text-sm font-medium">Like</span>
      </div>
    </button>
  );
}
