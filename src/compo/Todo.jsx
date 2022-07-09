import React, { useState } from "react";
import { nanoid } from "nanoid";
import "bulma/css/bulma.min.css";
import arr from "../data/data";
import Childele from "./Childele";
import Addcompo from "./AddCompo";
import "../App.css";

const Maincomponent = () => {
  const [isComponentthere, setComponentthere] = useState(false);

  const [ar, setar] = useState(arr);
  const y = ar.filter((ele) => ele.completed === false);
  console.log(y);

  const [nextid, changenextid] = useState(arr.length);
  const [fvalue, setfvalue] = useState("");
  function Adddata(e) {
    console.log(fvalue);
    console.log(nanoid());

    var newid = nextid + 1;
    var obj = { id: newid, work: fvalue, completed: false };
    var x = [...ar];
    changenextid((prev) => prev + 1);
    x.push(obj);

    setar(x);
    e.preventDefault();
    setfvalue("");
    setComponentthere(false);
  }
  function onchangehandler(e) {
    console.log(ar);
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
    x[id]["work"] = task;

    setar(x);
  }
  function deletehandler(id) {
    var x = [...ar];

    x.splice(id, 1);
    console.log(x);
    setar(x);
  }
  const items = ar.map((obj, index) => {
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
          del={deletehandler}
        ></Childele>
      );
    }
  });
  return (
    <div className="columns is-centered">
      <div className="column ">
        <div className="container mt-2">
          <h1 className="title is-italic has-text-centered">Todo List:</h1>
          {y.length ? (
            items
          ) : (
            <h1 className="title has-text-centered">No Works</h1>
          )}
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
