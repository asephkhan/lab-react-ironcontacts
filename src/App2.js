import React, { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App2() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 6));

  /* Add  Random contact from the contacts data to the list*/

  const addNewContact = () => {
    const randomContact =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    setContacts([randomContact, ...contacts]);
    console.log(randomContact);
  };

  /*  Sort the list by name  */
  const sortByName = () => {
    const sortedArray = [...contacts].sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      // names must be equal
      return 0;
    });
    setContacts(sortedArray);
  };

  /* Sort the list by popularity */

  const sortByPopularity = () => {
    const sortedArray = [...contacts].sort(function (a, b) {
      return b.popularity - a.popularity;
    });
    setContacts(sortedArray);
  };

  /* Remove contact from the list */

  const deleteContact = contactId => {
    const filteredMovies = [...contacts].filter(el => {
      return el.id !== contactId;
    });
    setContacts(filteredMovies);
  };

  return (
    <div>
      <h1>Iron Contcts</h1>

      {/* Adding new element and sorting Buttons */}
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={addNewContact}>Add New</button>


     {/*  table headers */}
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won OScar</th>
      <th>Won Emmy</th>
      <th>Actions</th>

      {contacts.map((contact) => {
        return (
          <>
            {/*  contact table card */}
            <table>
              <tr>
                <td>
                  <img
                    className="actor-img"
                    src={contact.pictureUrl}
                    alt="profile-pic"
                  />
                </td>
                <td>{contact.name} </td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && <p> 🏆 </p>}</td>
                <td>{contact.wonEmmy && <p> 🏆 </p>}</td>
                <td><button onClick={()=> deleteContact(contact.id)}>delete</button></td>
              </tr>
            </table>
          </>
        );
      })}
    </div>
  );
}

export default App2;
