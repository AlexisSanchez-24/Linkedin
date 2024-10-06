import React from 'react';

const PersonCard = ({ id, name, username, email }) => {
  return (
    <div className="person-card">
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default PersonCard;
