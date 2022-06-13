import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";
// import "./styles.css";
import Hero from "./Hero";
import Blog from "./Blog";
import Footer from "./Footer";
import Header from "./Header";
export default function MainPage() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        {/* <Header /> */}
        <Hero />
        <Blog />
        <Footer />
      </ThemeProvider>
    </>
  );
}
