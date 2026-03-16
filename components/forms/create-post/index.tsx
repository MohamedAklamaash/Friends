'use client';

import { FaUser } from 'react-icons/fa';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import { CreatePostForm } from './create-post-form';

export function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center xm:gap-3 gap-2 glass-card rounded-xl px-4 py-4">
      <div className="bg-amber-50 border border-amber-100 p-2.5 rounded-full text-[#f07c1e]">
        <FaUser size={18} />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="placeholder">Create a post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <CreatePostForm setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
