"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type LayoutOptions = {
  /** Hide the section background image behind the main content area. */
  hideBg?: boolean;
};

const LayoutOptionsContext = createContext<{
  options: LayoutOptions;
  setOptions: (o: LayoutOptions) => void;
}>({ options: {}, setOptions: () => {} });

export function LayoutOptionsProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<LayoutOptions>({});
  return (
    <LayoutOptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </LayoutOptionsContext.Provider>
  );
}

export function useLayoutOptions() {
  return useContext(LayoutOptionsContext).options;
}

/** Set layout options for the current page (clears on unmount). */
export function useSetLayoutOptions(opts: LayoutOptions) {
  const { setOptions } = useContext(LayoutOptionsContext);
  const { hideBg } = opts;
  useEffect(() => {
    setOptions({ hideBg });
    return () => setOptions({});
  }, [hideBg, setOptions]);
}
