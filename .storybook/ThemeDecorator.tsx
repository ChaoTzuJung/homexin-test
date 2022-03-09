import { ThemeProvider } from "../src/contexts/Theme";
import { GlobalStyle } from "../src/styles";
import { DecoratorFn } from "@storybook/react";

const ThemeDecorator: DecoratorFn = (Story) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};

export default ThemeDecorator;
