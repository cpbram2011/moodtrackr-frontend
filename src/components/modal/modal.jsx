import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";

import LoginForm from "../session/login";
import SignupForm from "../session/signup";
import NewTrackForm from "../tracks/new_track";


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginForm />;
      break;
    case "signup":
      component = <SignupForm />;
      break;
    case "newtrack":
      component = <NewTrackForm />;
      break;

    default:
      return null;
  }
  return (
    <div className="modal-background " onClick={closeModal}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
