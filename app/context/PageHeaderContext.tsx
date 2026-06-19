"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Header = {
  title?: ReactNode;
  subtitle?: ReactNode;
  node?: ReactNode;
  button?: ReactNode;
  onButtonClick?: () => void;
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
  const { title, subtitle, hidden } = header;

  // Store the full header in a ref so the effect always reads the latest
  // button / node / onButtonClick without needing them as dependencies.
  // Including non-primitive values (JSX, functions) as deps would cause an
  // infinite loop because they get a new reference on every render.
  const ref = useRef<Header>(header);
  ref.current = header;

  useEffect(() => {
    setHeader({ ...ref.current });
    return () => setHeader({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, subtitle, hidden, setHeader]);
}
