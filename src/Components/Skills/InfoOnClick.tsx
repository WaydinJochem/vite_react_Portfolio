import React from "react";
import ReactModal from "react-modal";

interface infoProps {
  show: boolean;
  hidden: () => void;
  skillName: string;
}

const InfoOnClick: React.FC<infoProps> = ({ show, hidden, skillName }) => {
  return (
    <ReactModal isOpen={show} onRequestClose={hidden} className="modal">
        <div className="modal-content">
          <h2>Skill Name: {skillName}</h2>
          <button onClick={hidden}>Close Modal</button>
      </div>
    </ReactModal>
  );
};

export default InfoOnClick;
