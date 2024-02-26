'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import AnimateClick from '../animate-click/AnimateClick';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: any;
  icon?: any;
}

const buttonVariants = cva(
  'w-full  text-white font-medium py-4 flex justify-center px-4  rounded-full focus:outline-none focus:shadow-outline',

  {
    variants: {
      variant: {
        default: 'bg-primaryColor  text-white hover:opacity-90',
        primary: 'bg-primaryColor  text-white hover:opacity-90',
        secondary: 'bg-[#EEF3FB] hover:opacity-90 text-[#2C353A]',
        danger: 'bg-red-500 w-full text-white hover:bg-red-600',
        outline:
          'bg-white w-full text-gray-700 border border-primaryColor hover:bg-primaryColor hover:text-white hover:border-primaryColor',
        disabled: 'bg-primaryColor  opacity-50 w-full text-white',
      },
    },

    defaultVariants: {
      variant: 'default',
    },
  }
);

const Button: FC<ButtonProps> = ({
  variant,
  className,
  href,
  icon,
  children,
  ...props
}) => {
  if (href) {
    return (
      <AnimateClick>
        {icon ? (
          <Link
            href={...href}
            className={cn(buttonVariants({ variant, className }))}
          >
            <span className="mr-2">
              {icon ? <Image src={icon} alt={'Icon'} /> : ''}
            </span>
            {children}
          </Link>
        ) : (
          <Link
            href={href}
            className={cn(buttonVariants({ variant, className }))}
          >
            {children}
          </Link>
        )}
      </AnimateClick>
    );
  }
  return (
    <AnimateClick>
      <button {...props} className={cn(buttonVariants({ variant, className }))}>
        <div className="flex items-center">
          <span className="mr-2">
            {icon ? <Image src={icon} alt={'Icon'} /> : ''}
          </span>
          {children}
        </div>
      </button>
    </AnimateClick>
  );
};

export { Button, buttonVariants };
