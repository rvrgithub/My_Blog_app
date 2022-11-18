import { useState } from "react";
import "./App.css";
import { AllRoutes } from "./Components/Routes/AllRoutes";
import { Navbar } from "./Components/Navbar/Navbar";


function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div className="App">
      <Navbar />
      {/* <button onClick={handleToggle}>Create Your Blog 👍</button>
    {toggle? <CreateBlog/> :"" } */}

 <AllRoutes/>
    </div>
  );
}

export default App;
