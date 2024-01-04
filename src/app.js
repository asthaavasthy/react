import React  from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
const styleCart = 
{
backgroundColor:"#f0f0f0"
};




const AppLayout = () =>
(
  
    <div className="app">
<Header />
<Body />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
