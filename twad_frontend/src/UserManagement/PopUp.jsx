import React from "react";
import PopUpStyles from "./PopUp.module.css";

function PopUp( props ) {

const {trigger, deleteRow, passId, setTrigger } = props;

return trigger ? (
    <div className={PopUpStyles.popup}>
      <div className={PopUpStyles.popupinner}>
        <h2 className={PopUpStyles.title}>Are you sure you want to delete?</h2>
        <button
          className={PopUpStyles.deletebtn}
          onClick={() => deleteRow(passId)}
        >
          Yes
        </button>
        <button
          className={PopUpStyles.closebtn}
          onClick={() => setTrigger(false)}
        >
          No
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
