'use client';

import { FC, PropsWithChildren } from 'react';
import { ThemeProvider as Provider } from 'next-themes';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider attribute='class' defaultTheme='dark'>
      {children}
    </Provider>
  );
};
