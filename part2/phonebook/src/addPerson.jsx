import axios from 'axios';
import React from 'react';
import personServices from './personServices';

const AddPerson = ({ formData, setFormData, setPersons, persons, setNotificationMessage }) => {
  const addtoPhonebookSubmit = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === formData.name)) {
      if (window.confirm(`${formData.name} is already in the phonebook. Do you want to update their number instead?`)) {
        const personToUpdate = persons.find(person => person.name === formData.name);
    
        personServices
          .update(personToUpdate.id, formData)
          .then(response => {
            setNotificationMessage({status: "success", text: formData.name+"'s number has been updated."});
            setPersons(prevPersons =>
              prevPersons.map(person =>
                person.id === personToUpdate.id ? { ...person, ...formData } : person
              )
            );
          })
          .catch(error => {
            setNotificationMessage({status: "error", text: error.message});
            console.log('fail', error);
          });
      }
      return;
    }

    personServices
    .create({ ...formData })
    .then(response => {
      setPersons(persons.concat(response.data))
      setNotificationMessage({status: "success", text: response.data.name+" has been added to the phonebook."});
      setFormData({
        name: '',
        number: '',
      });
    })

  };

  return (
    <div>
      <h2>Add new person</h2>
      <form onSubmit={addtoPhonebookSubmit}>
        <div>
          name:
          <input
            onChange={(event) => setFormData(prevState => ({
              ...prevState,
              name: event.target.value
            }))}
            value={formData.name}
          />
        </div>
        <div>
          number:
          <input
            onChange={(event) => setFormData(prevState => ({
              ...prevState,
              number: event.target.value
            }))}
            value={formData.number}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
