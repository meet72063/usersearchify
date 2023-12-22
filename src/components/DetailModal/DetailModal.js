import React from "react";
import "./detail-modal.css";
import { IoClose, FaUser } from "../../icons";

const UserDetailModal = ({
  setIsModalOpen,
  name,
  username,
  email,
  phone,
  website,
}) => {
  //close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //Prevent the modal from closing when  modal content is clicked
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal} role="button">
      <div className="modal-container" onClick={handleModalClick}>
        <button className="close-btn" aria-label="Close Modal">
          <IoClose size={30} onClick={handleCloseModal} />
        </button>
        <div className="avatar-wrapper">
          <FaUser size={60} />
          <a href={`${username}`} aria-label={`visit ${username}'s profile`}>
            @{username}
          </a>
        </div>

        <div className="user-details">
          <p>
            {" "}
            <span>Name: </span> {name}
          </p>
          <p>
            {" "}
            <span>Email: </span> {email}
          </p>
          <p>
            {" "}
            <span>Phone: </span> {phone}
          </p>
          <p>
            {" "}
            <span>Website: </span> {website}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
