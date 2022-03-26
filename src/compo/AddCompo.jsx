import React, { useState } from "react";
import arr from "../data/data";

const Addcompo = (props) => {
  return (
    <div className="columns is-centered ">
      <div className="column is-half is-offset-one-quarter is-offset-one-quarter-mobile">
        {/* <form onSubmit={props.onsub}>*/}
        <div className="field has-addons">
          <div className="control">
            <input
              className="input "
              onChange={props.onch}
              type="text"
              value={props.val}
              placeholder="Add Your Work"
              required
            />
          </div>

          <div className="control has-text-centered">
            <input
              onClick={props.onsub}
              type="submit"
              value="Assign"
              className="button is-info has-text-centered is-responsive  "
            />
          </div>
        </div>
        {/* </form>*/}
      </div>
    </div>
  );
};
export default Addcompo;
