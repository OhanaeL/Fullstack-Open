import React from 'react';

const PersonList = ({ persons, filterData }) => {
  const filteredPersons = filterData.filtering
    ? persons.filter(person =>
        person.name.toLowerCase().includes(filterData.filterText.toLowerCase()) ||
        person.number.includes(filterData.filterText)
      )
    : persons;

  return (
    <ul>
      {filteredPersons.map(person => (
        <li key={person.id}>{person.name + " " + person.number}</li>
      ))}
    </ul>
  );
};

export default PersonList;
