import React from "react";

import { useState } from "react";
import { changearr } from "../data/data";

import "font-awesome/css/font-awesome.min.css";

import "bulma/css/bulma.min.css";
import "../index.css";
const Childele = (props) => {
  return (
    <div className="box m-2">
      <div className="field has-addons">
        <div className="control has-icons-right is-expanded">
          <input
            type="text"
            style={{ border: "none" }}
            className="input is-normal "
            value={props.work}
            onChange={(e) => props.fun(e, props.id)}
          ></input>
        </div>
        <div className="buttons is-pulled-right">
          <div className="control">
            <button
              className="button is-primary m-1 is-small is-responsive is-pulled-right"
              onClick={() => props.done(props.ind)}
            >
              {" "}
              <i className="fa fa-check"></i>
            </button>
          </div>
          <div className="control">
            <button
              className="button is-danger m-1 is-small is-responsive is-pulled-right"
              onClick={() => {
                console.log("hello");
              }}
            >
              {" "}
              <i className="fa fa-close"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Childele;
