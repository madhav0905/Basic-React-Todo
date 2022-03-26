import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import arr from "../data/data";
import Childele from "./Childele";
import Addcompo from "./AddCompo";
import "../App.css";

const Maincomponent = () => {
  const [isComponentthere, setComponentthere] = useState(false);
  const [ar, setar] = useState(arr);
  const [fvalue, setfvalue] = useState("");
  function Adddata(e) {
    console.log(fvalue);
    var n = ar.length;
    var newid = ar[n - 1]["id"] + 1;
    var obj = { id: newid, work: fvalue, completed: false };
    var x = [...ar];
    x.push(obj);

    setar(x);
    e.preventDefault();
    setfvalue("");
    setComponentthere(false);
  }
  function onchangehandler(e) {
    console.log(fvalue);

    setfvalue(e.target.value);
  }
  function Addcomponenet() {
    if (isComponentthere) {
    } else {
      setComponentthere(true);
    }
  }
  function completetask(id) {
    var x = [...ar];
    x[id]["completed"] = true;
    setar(x);
  }
  function changeHandler(e, id) {
    let task = e.target.value;

    var x = [...ar];
    x[id - 1]["work"] = task;

    setar(x);
    console.log(ar);
  }
  return (
    <div className="columns is-centered">
      <div className="column ">
        <div className="container mt-2">
          <h1 className="title is-italic has-text-centered">Todo List:</h1>
          {ar.map((obj, index) => {
            if (obj.completed) {
              return null;
            } else {
              return (
                <Childele
                  key={obj.id}
                  id={obj.id}
                  work={obj.work}
                  ind={index}
                  done={completetask}
                  fun={changeHandler}
                ></Childele>
              );
            }
          })}
          <div className="field has-text-centered">
            <button
              className="button is-success has-text-centered is-responsive"
              onClick={Addcomponenet}
            >
              Add
            </button>
            <br />
            <br />
            {isComponentthere ? (
              <Addcompo val={fvalue} onch={onchangehandler} onsub={Adddata} />
            ) : null}
            <br></br>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Maincomponent;
