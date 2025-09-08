'use client';

import { FC } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import Link from 'next/link';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';

export const Header: FC = () => {
  return (
    <Navbar
      isBordered={false}
      className='backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-gray-200/20 dark:border-gray-800/20'
      height='60px'
    >
      <NavbarBrand>
        <Link href='/' className='flex items-center gap-2'>
          <div className='w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>A</span>
          </div>
          <p className='font-bold text-xl tracking-tight text-gray-900 dark:text-white'>
            Apploom
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-8' justify='center'>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 bg-transparent data-[hover=true]:bg-transparent text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                radius='sm'
                variant='light'
              >
                Solutions
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label='Solutions'
            className='backdrop-blur-xl bg-white/90 dark:bg-black/90'
          >
            <DropdownItem
              key='restaurants'
              description='Digital menus, ordering & delivery'
              className='text-sm'
            >
              Restaurants & Cafes
            </DropdownItem>
            <DropdownItem
              key='fitness'
              description='Workout plans, tracking & coaching'
              className='text-sm'
            >
              Fitness & Wellness
            </DropdownItem>
            <DropdownItem
              key='ecommerce'
              description='Online stores & marketplaces'
              className='text-sm'
            >
              E-commerce & Retail
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link
            href='/pricing'
            className='text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
          >
            Pricing
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            href='/support'
            className='text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
          >
            Support
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Button
            variant='light'
            size='sm'
            className='text-sm font-medium'
            as={Link}
            href='/signin'
          >
            Sign In
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            color='primary'
            size='sm'
            radius='full'
            className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-6'
            as={Link}
            href='/signup'
          >
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
