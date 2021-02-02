import React from "react";

const Contacts = ({ contacts }) => {
  return (
    <div>
      <center>
        <h1>Contact List</h1>
      </center>
      <table>
        {contacts.map(e => (
            <tr>
              <td>{e.name}</td>
              <td>{e.email}</td>
            </tr>
        ))}
      </table>
    </div>
  );
};

export default Contacts;
