import React from 'react';
import personServices from './personServices'; // Ensure this is correctly imported

const PersonList = ({ persons, filterData, setPersons, setNotificationMessage}) => {
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
          setNotificationMessage({status: "success", text: personData.name+" has been deleted."});
          setPersons(prevPersons => prevPersons.filter(p => p.id !== personData.id));
        })
        .catch(error => {
          console.log('fail', error);
          if (error.response.status == 404){
            setNotificationMessage({status: "error", text: personData.name+" has already been deleted from the server."});
          }else{
            setNotificationMessage({status: "error", text: error.message});
          }
          
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
