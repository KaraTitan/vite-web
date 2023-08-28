import Body from "./components/Body";
import DefaultFooter from "./components/Footer";
import Header from "./components/Header";
import LowerBody from "./components/LowerBody";
import Reviews from "./components/Reviews";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Header />
      <Body />
      <LowerBody />
      <DefaultFooter />
    </RecoilRoot>
  );
}

export default App;
