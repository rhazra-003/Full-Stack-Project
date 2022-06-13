import "./App.css";
import { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Create from "./components/Create";
// import BlogDetails from "./components/BlogDetails";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SignInSide from "./components/auth/SignIn";
import SkillDashboard from "./components/SkillUp/SkillDashboard";
import MainPage from "./components/Homepage/MainPage";
import Loanform from "./components/Loan/Form";
import SignUp from "./components/auth/SignUp";
import Course from "./components/course/Course";
import CourseForm from "./components/course/CourseForm";
import Album from "./components/Loan/Schemes";
import BasicTabs from "./components/AfterSign";
import Scheme_new from "./components/Loan/Scheme_new";
import Marketing from "./components/Marketing";
import Course_new from "./components/course/Course_new";

function App() {
  // const [ currentView ] = this.state;
  const [mode, setMode] = useState("light");
  const [islogin, setlogin] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        {/* <NavBar setMode={setMode} mode={mode} /> */}
        {islogin ? <></> : <NavBar setMode={setMode} mode={mode} />}
        <Routes>
          <Route exact path="/entry">
            {/* {setlogin(true)}; */}
            <Route index element={<BasicTabs />} />
          </Route>
          <Route exact path="/scheme">
            <Route index element={<Album />} />
          </Route>
          <Route exact path="/loan">
            <Route index element={<Loanform />} />
          </Route>
          <Route exact path="/market">
            <Route index element={<Marketing />} />
          </Route>
          <Route exact path="/courseform">
            <Route index element={<CourseForm />} />
          </Route>
          <Route exact path="/course_new">
            <Route index element={<Course_new />} />
          </Route>
          <Route exact path="/course">
            <Route index element={<Course />} />
          </Route>
          <Route exact path="/scheme_new">
            <Route index element={<Scheme_new />} />
          </Route>
          <Route exact path="/">
            <Route index element={<MainPage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<SignInSide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
