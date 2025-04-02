
import { ReactNode } from 'react';
import NavBar from './NavBar';

interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

const AppLayout = ({ children, hideNav = false }: AppLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <main className="flex-1 pb-16">
        {children}
      </main>
      {!hideNav && <NavBar />}
    </div>
  );
};

export default AppLayout;
