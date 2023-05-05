export type ChallengeDifficulty = 'easy' | 'medium' | 'hard';
export type ChallengeTag = 'html' | 'css' | 'ts';

export interface IChallenge {
  title: string;
  description: string;
  difficulty: ChallengeDifficulty;
  updatedAt: Date;
  tags: string[];
  url: string;
  image: string;
  github: string;
}
