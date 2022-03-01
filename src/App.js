import React, { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsData.splice(0, 5));

  const addActor = () => {
    const newActor =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    setContacts([newActor, ...contacts]);
  };

  const sortByName = () => {
    const sortedArr = [...contacts].sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });
    setContacts(sortedArr);
  };

  const sortByPopularity = () => {
    const sortedArr = [...contacts].sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
    });
    setContacts(sortedArr);
  };

  const deleteActor = (actorID) => {
    const filteredContacts = [...contacts].filter((actor) => {
      return actor.id !== actorID;
    });
    setContacts(filteredContacts);
  };
  return (
    <div className="App">
      <h2>Iron Contacts</h2>
      <button onClick={addActor}>Add actor</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
     
      <div>
        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>action</th>
          </tr>

          {contacts.map((actor) => {
            return (
              <tr key={actor.id}>
                <td>
                  <img className="actor-img" src={actor.pictureUrl} />
                </td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                <td>{actor.wonOscar ? "Yes" : "No"}</td>
                <td>{actor.wonEmmy ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => deleteActor(actor.id)}>
                    {" "}
                    Remove{" "}
                  </button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
      
    </div>
  );
}

export default App;
