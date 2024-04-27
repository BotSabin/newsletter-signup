import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import Button from "../Button/Button";
import { iconList } from "../../assets";

import "./Modal.css";

const Modal = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      mountOnEnter
      unmountOnExit
      timeout={1000}
      classNames="modal"
    >
      <div className="modal">
        <div className="modal-content">
          <div className="flex flex-col gap-5">
            <img src={iconList} alt="icon-list" width={40} />
            <h1 className="text-4xl font-roboto-b text-dark-slate-gray">
              Thanks for subscribing!
            </h1>
            <p className="text-dark-slate-gray">
              A confirmation email has been sent to <b>botify@company.ro</b>{" "}
              Please open it and click the button inside to confirm your
              subscription.
            </p>
          </div>
          <Button onClick={props.onClose}>Dismiss message</Button>
        </div>
      </div>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

export default Modal;
