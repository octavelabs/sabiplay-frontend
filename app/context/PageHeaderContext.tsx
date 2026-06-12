"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Header = {
  title?: ReactNode;
  subtitle?: ReactNode;
  node?: ReactNode;
  /** Hide the dashboard header entirely (e.g. focused full-screen flows). */
  hidden?: boolean;
};

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
  const { title, subtitle, node, hidden } = header;
  useEffect(() => {
    setHeader({ title, subtitle, node, hidden });
    return () => setHeader({});
  }, [title, subtitle, node, hidden, setHeader]);
}
