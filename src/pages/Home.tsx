import { Challenges } from '@/components/Challenges';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <h1 className="text-center text-xl md:text-5xl p-3 md:p-5">Samples Vite + React + TailwindCSS</h1>
      <Challenges />
    </>
  );
};

export default Home;
