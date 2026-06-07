"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Header = { title?: ReactNode; subtitle?: ReactNode };

const PageHeaderContext = createContext<{
  header: Header;
  setHeader: (h: Header) => void;
}>({ header: {}, setHeader: () => {} });

export function PageHeaderProvider({ children }: { children: ReactNode }) {
  const [header, setHeader] = useState<Header>({});
  return (
    <PageHeaderContext.Provider value={{ header, setHeader }}>
      {children}
    </PageHeaderContext.Provider>
  );
}

export function usePageHeader() {
  return useContext(PageHeaderContext);
}

/** Set the shared dashboard header for the current page (clears on unmount). */
export function useSetPageHeader(header: Header) {
  const { setHeader } = usePageHeader();
  const { title, subtitle } = header;
  useEffect(() => {
    setHeader({ title, subtitle });
    return () => setHeader({});
  }, [title, subtitle, setHeader]);
}
