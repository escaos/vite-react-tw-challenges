import { ReactNode } from 'react';
import { GithubOutlined } from '@ant-design/icons';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative">
      <div className="absolute md:fixed flex flex-row gap-[1rem] top-[1rem] right-[1rem]">
        <a
          className="github-button flex flex-row justify-center items-center gap-2 text-[#FFF]"
          href="https://www.edisonsanchez.com"
        >
          <GithubOutlined className="text-[#FFF]" />
          <span>Who is Edison?</span>
        </a>
        <a
          className="github-button flex flex-row justify-center items-center gap-2 text-[#FFF]"
          href="https://github.com/escaos/vite-react-tw-challenges"
        >
          <GithubOutlined className="text-[#FFF]" />
          <span>Show me the code</span>
        </a>
      </div>

      <main>{children}</main>
      <footer className="my-4 md:fixed md:bottom-0">
        &copy;{` ${new Date().getFullYear()} - Edison Sanchez.  All rights reserved.`}
      </footer>
    </div>
  );
};
