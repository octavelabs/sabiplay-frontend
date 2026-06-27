'use client';

import React from 'react';
import SideBar, { MobileNav } from '../components/sidebar';
import { DashboardHeaderSlot } from '../components/header/DashboardHeader';
import { UserProvider } from '../context/UserContext';
import { PageHeaderProvider } from '../context/PageHeaderContext';
import { LayoutOptionsProvider, useLayoutOptions } from '../context/LayoutOptionsContext';

function DashboardShell({ children }: { children: React.ReactNode }) {
  const { hideBg } = useLayoutOptions();

  return (
    <div className="block lg:flex min-h-screen bg-[#F8F9FC]">
      <SideBar />
      <div className="relative flex-1 flex flex-col h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {!hideBg && (
            <div
              className="
                absolute inset-0
                bg-[url('/images/section-bg1.png')]
                bg-cover bg-[top_2%]
                rotate-180
              "
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#fffefb] via-[#fffefb]/70 to-[#fffefb]/30" />
        </div>

        <div className="relative z-10">
          <DashboardHeaderSlot />
        </div>

        <main className="relative z-10 flex-1 overflow-auto mt-[37px] px-[25px] lg:px-[40px] mb-[68px] lg:mb-0">
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  );
}

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <UserProvider>
    <PageHeaderProvider>
      <LayoutOptionsProvider>
        <DashboardShell>{children}</DashboardShell>
      </LayoutOptionsProvider>
    </PageHeaderProvider>
  </UserProvider>
);

export default DashboardLayout;
