import { IChallenge } from '@/shared/types/Challenges.types';
import { Link } from 'react-router-dom';

const CHALLENGES: IChallenge[] = [
  {
    title: 'Age Calculator',
    description: 'Calc the age based on the date of birth.',
    difficulty: 'easy',
    updatedAt: new Date('2023-05-04'),
    tags: ['html', 'css', 'ts'],
    url: '/age-calculator',
    image: '/',
    github: '/',
  },
  {
    title: 'Soon ...',
    description: 'More Projects everyday.',
    difficulty: 'easy',
    updatedAt: new Date(),
    tags: ['ts'],
    url: '/',
    image: '/',
    github: '/',
  },
  {
    title: 'Soon ...',
    description: 'More Projects everyday.',
    difficulty: 'easy',
    updatedAt: new Date(),
    tags: ['ts'],
    url: '/',
    image: '/',
    github: '/',
  },
  {
    title: 'Soon ...',
    description: 'More Projects everyday.',
    difficulty: 'easy',
    updatedAt: new Date(),
    tags: ['ts'],
    url: '/',
    image: '/',
    github: '/',
  },
];

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
