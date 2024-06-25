'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/utils/utils';
// import AnimateClick from '../animate-click/AnimateClick';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: any;
  icon?: any;
}

const buttonVariants = cva(
  'w-full  text-white font-medium py-4 flex justify-center px-4 focus:outline-none focus:shadow-outline',

  {
    variants: {
      variant: {
        default: 'bg-primaryColor  text-white hover:opacity-90',
        primary: 'bg-primaryColor  text-white hover:opacity-90 rounded-lg',
        secondary: 'bg-[#EEF3FB] hover:opacity-90 text-[#2C353A]',
        danger: 'bg-red-500 w-full text-white hover:bg-red-600',
        outline:
          'bg-white w-full text-primaryColor01 border border-primaryColor01 hover:opacity-70 rounded-lg',
        disabled: 'bg-primaryColor  opacity-50 w-full text-white',
        active:'bg-primaryColor  opacity-50 w-full text-white'
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
      <>
        {/* {icon ? (
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
        )} */}
      </>
    );
  }
  return (
    <>
      <button {...props} className={cn(buttonVariants({ variant, className }))}>
        <div className="flex items-center">
          <span className="mr-2">
            {icon ? <Image src={icon} alt={'Icon'} /> : ''}
          </span>
          {children}
        </div>
      </button>
    </>
  );
};

export { Button, buttonVariants };
