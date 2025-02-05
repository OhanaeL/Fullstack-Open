import React from 'react';
import personServices from './personServices'; // Ensure this is correctly imported

const PersonList = ({ persons, filterData, setPersons }) => {
  const filteredPersons = filterData.filtering
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filterData.filterText.toLowerCase()) ||
        person.number.includes(filterData.filterText)
      )
    : persons;

  const deletePersonEvent = (personData) => {
    if (window.confirm(`Do you really want to delete ${personData.name}?`)) {
      personServices
        .delete(personData.id)
        .then(response => {
          setPersons(prevPersons => prevPersons.filter(p => p.id !== personData.id));
        })
        .catch(error => {
          console.log('fail', error);
        });
    }
  };

  return (
    <ul>
      {filteredPersons.map(person => (
        <li key={person.id}>
          {person.name + " " + person.number + " " } 
          <button onClick={() => deletePersonEvent(person)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
