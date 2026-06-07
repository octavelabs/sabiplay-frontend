'use client';

import React from 'react';
import SideBar, { MobileNav } from '../components/sidebar';
import { DashboardHeaderSlot } from '../components/header/DashboardHeader';
import { UserProvider } from '../context/UserContext';
import { PageHeaderProvider } from '../context/PageHeaderContext';



interface DashboardLayoutProps {
  children: React.ReactNode;
  custom?: boolean;
  customClass?: string;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, custom, customClass }) => {


  return (
    <UserProvider>
      <PageHeaderProvider>
        <div className="block lg:flex min-h-screen bg-[#F8F9FC]">
          <SideBar />
          <div className="relative flex-1 flex flex-col h-screen overflow-hidden">
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div
      className="
        absolute inset-0
        bg-[url('/images/section-bg.png')]
        bg-cover bg-top
        rotate-180
      "
    />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fffefb] via-[#fffefb]/70 to-[#fffefb]/30" />

  </div>

  <div className="relative z-10">
    <DashboardHeaderSlot />
  </div>

  <main className="relative z-10 flex-1 overflow-auto mt-[37px]">
    {children}
  </main>
</div>

          <MobileNav />
        </div>
      </PageHeaderProvider>
    </UserProvider>
  );
};

export default DashboardLayout;