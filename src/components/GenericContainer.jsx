import React from "react";
import "../css/style.css";
import FormUncontrolled from "./FormUncontrolled";
import H1Card from "./H1Card";
import ScreenResizer from "./ScreenResizer";
function GenericContainer(props) {
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
      <div className="container">
        {/* {names.map((item, index) => {
          return <H1Card content={item.name} key={index} />;
        })}

        <button className="btn" onClick={() => lastnameonly(names)}>
          change
        </button>
        <button className="btn" onClick={() => setNames([])}>
          clear
        </button> */}
       <FormUncontrolled/>
      </div>
    </>
  );
}

export default GenericContainer;
