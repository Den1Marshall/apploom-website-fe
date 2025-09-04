'use client';

import { FC, PropsWithChildren } from 'react';
import { HeroUIProvider as Provider } from '@heroui/react';

export const HeroUIProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
