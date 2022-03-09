import React, {
  createContext,
  useState,
  useRef,
  useContext,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
  background: "#E5E5E5",
  text: "hsl(200, 15%, 8%)",
};

const darkTheme = {
  background: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
};

interface IThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = useState("light");
  const context = React.useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={context}>
      <StyledThemeProvider
        theme={theme === "dark" ? darkTheme : lightTheme}
        {...props}
      >
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  return ctx;
};
