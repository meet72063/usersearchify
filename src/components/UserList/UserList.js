import React from "react";
import UserCard from "../UserCard/UserCard";
import "./userlist.css";

const UserList = ({ usersList }) => {
  return (
    <div className="list-wrapper">
      <ol className="users-list">
        {usersList.map((user) => {
          return (
            <li key={user.id}>
              <UserCard {...user} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default UserList;
