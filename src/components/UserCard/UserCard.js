import React, { useState } from "react";
import "./usercard.css";
import UserDetailModal from "../DetailModal/DetailModal";
import { FaUser } from "../../icons";

const UserCard = (props) => {
  const { name, username } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="user-card" onClick={() => setIsModalOpen(true)}>
        <div className="user-name">
          <span className="avatar">
            <FaUser size={30} />
          </span>
          <a href="#" onClick={(e) => e.stopPropagation()}>
            @{username}
          </a>
          <p>{name}</p>
        </div>
      </div>
      {isModalOpen && <UserDetailModal {...{ ...props, setIsModalOpen }} />}
    </>
  );
};

export default UserCard;
