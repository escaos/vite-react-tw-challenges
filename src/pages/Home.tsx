import { Challenges } from '@/components/Challenges';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <h1 className="text-center text-xl md:text-5xl px-8 md:p-5 pt-[4rem] md:pt-5 ">
        Samples Vite + React + TailwindCSS
      </h1>
      <Challenges />
    </>
  );
};

export default Home;
