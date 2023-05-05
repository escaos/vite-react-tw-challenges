import { ReactNode } from 'react';
import { GithubOutlined } from '@ant-design/icons';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <a
        className="github-button flex flex-row justify-center items-center gap-2 text-[#FFF]"
        href="https://github.com/escaos/vite-react-tw-challenges"
      >
        <GithubOutlined className="text-[#FFF]" />
        Show me the code
      </a>

      <main>{children}</main>
    </div>
  );
};
