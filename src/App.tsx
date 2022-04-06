import { ThemeProvider } from "@/contexts/Theme";
import Title from "@/components/Title";

function App() {
  return (
    <ThemeProvider>
      <Title>Hello Homexin!</Title>
    </ThemeProvider>
  );
}

export default App;
