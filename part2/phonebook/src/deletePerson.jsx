import React from 'react';
import personServices from './personServices';

const DelPerson = ({ personData, setPersons, persons }) => {
  const deletePersonEvent = () => {
    if (window.confirm(`Do you really want to delete ${personData.name}?`)) {
    personServices
    .delete(personData.id)
    .then(response => {
        setPersons(persons)
        })
        .catch(error => {
        console.log('fail', error)
        })
    }
  };

  return (
    <button onClick={deletePersonEvent}>delete</button>
  );
};

export default DelPerson;
