import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <head>
        <title>
          Vite + React + Tailwind Challenger - Fullstack Developer / React, Typescript, Python, NextJS, NestJS, AWS,
          Postgres - Edison Sanchez
        </title>
        <meta
          name="description"
          content="Vite + React + Tailwind Challenger - Fullstack Developer / React, Typescript, Python, NextJS, NestJS, AWS, Postgres - Edison Sanchez"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>
        {/* <Background /> */}
        {children}
      </main>
    </>
  );
};
