import React, { useEffect, useState, useRef } from "react";

const FormUncontrolled = () => {
  const [isname, setIsname] = useState('');
  const nameRef = useRef("name");

  const submitFun = (event) => {
    event.preventDefault();
    if (nameRef.current.value === "") {
      alert("you have to enter some data");
    } else {
        setIsname(nameRef.current.value);
    }
  };
  useEffect(() => {
    document.body.style.backgroundColor = "#009688";
  });

  return (
    <>
      <div className="container">
        <div className="text-center">
           
          <div className="card shadow p-5">
          {!(isname==='')?<h1 className="mb-2">{isname}</h1>:``}
            <form action="" onSubmit={submitFun}>
              <div className="mx-2 my-3">
                <label htmlFor="">Enter your Name</label>
                <input type="text" className="form-control" ref={nameRef} />
              </div>
              <button type="submit" className="btn btn-success">
                Submit!
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUncontrolled;
