import React from "react";
import { useEffect } from "react";
import "../css/style.css";
import ExampleReducer from "./ExampleReducer";
import FormUncontrolled from "./FormUncontrolled";
import H1Card from "./H1Card";
import ScreenResizer from "./ScreenResizer";
function GenericContainer(props) {

  useEffect(()=>{
    document.body.style.backgroundColor="#009688"
  })

  const [names, setNames] = React.useState([
    {
      name: "dheeman pati",
    },
    {
      name: "sayan pati",
    },
    {
      name: "suman pati",
    },
  ]);

  function lastnameonly(arr){
      
    let newarr=arr.map((item)=>{
        return {...item,name:"pati"}
      })
    return setNames(newarr);  
  }
  return (
    <>
      <ExampleReducer/>
    </>
  );
}

export default GenericContainer;
