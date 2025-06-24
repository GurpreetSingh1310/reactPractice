import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";
import MainHeader from "./component/MainHeader";
import CardData from "./component/CardData";
import CardSection from "./component/CardSection";

function App() {
  const [isVIsible, setIsVisible] = useState(true);
  
  function handleVisible() {
    setIsVisible(false);
  }

  return (
    <>
      <div className="main">
        <MainHeader />
       
        {isVIsible ? (
        <Modal onClose={handleVisible}>
          <CardData/>
        </Modal>
      ) : (
        false
      )}
      <CardSection/>
      </div>
    </>
  );
}

export default App;
