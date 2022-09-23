import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Features/Features";
import Home from "./Components/Home/Home";
import Login from "./Components/LoginAndSignup/Login";
import SignUp from "./Components/LoginAndSignup/SignUp";
import News from "./Components/News/News";
import Review from "./Components/Review/Review";
import Footer from "./Footer";
import NavbarTab from "./Navbar";


function App() {
  return (
    <Fragment>
      <NavbarTab />
      <Routes>
        <Route exact='true' path='/log_in' element={<Login />} />
        <Route exact='true' path='/join' element={<SignUp />} />
        <Route exact='true' path='/' element={<Home />} />
        <Route exact='true' path='/news' element={<News />} />
        <Route exact='true' path='/features' element={<Contact />} />
        <Route exact='true' path='/review' element={<Review />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
