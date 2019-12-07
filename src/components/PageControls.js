import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import "./PageControls.css";

export default function PageControls({ buttonAction }) {
  return (
    <div className="page-controls">
      <Fab color="primary" aria-label="add" onClick={buttonAction}>
        <AddIcon />
      </Fab>
    </div>
  );
}
