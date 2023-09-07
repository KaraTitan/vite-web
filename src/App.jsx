import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { RecoilRoot } from "recoil";
import FrontPage from "./components/FrontPage";
import ContactUS from "./components/ContactUs";
import CheckOut from "./components/Checkout";

function App() {
  return (
    <Router>
      <RecoilRoot>
        <Header />
        <Routes>
          <Route exact path="vite-web/" element={<FrontPage />} />
          <Route exact path="vite-web/contact" element={<ContactUS />} />
          <Route exact path="vite-web/cart" element={<Cart />} />
          <Route exact path="vite-web/checkout" element={<CheckOut />} />
        </Routes>
      </RecoilRoot>
    </Router>
  );
}

export default App;
