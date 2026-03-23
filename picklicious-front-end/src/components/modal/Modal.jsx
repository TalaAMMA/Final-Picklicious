import React from "react";
import Portal from "./Portal";

const Modal = ({ children, visible }) => {
    const modalHtml = (
      <div className="modal">
        <div className="card" role="dialog" aria-modal={true}>
          {children}
        </div>
      </div>
    );
  
    return <Portal visible={visible} element={modalHtml} />;
  };
  
  export default Modal;
