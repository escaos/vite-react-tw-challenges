import { CHALLENGES } from '@/shared/constants/Challenges';
import { Link } from 'react-router-dom';

export const Challenges = () => {
  return (
    <nav className="w-[100%] px-[5%] flex flex-row flex-wrap justify-center gap-[2rem] mt-[2rem]">
      {CHALLENGES.map((challenge) => {
        return (
          <Link className="glass-card w-[16rem] h-[16rem]" to={challenge.url}>
            <div className="circle" />
            <h2 className="text-2xl md:text-xl mt-2">{challenge.title}</h2>
          </Link>
        );
      })}
    </nav>
  );
};
