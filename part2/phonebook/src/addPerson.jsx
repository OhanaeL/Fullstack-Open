import React from 'react';

const AddPerson = ({ formData, setFormData, setPersons, persons }) => {
  const addtoPhonebookSubmit = (event) => {
    event.preventDefault();

    if (persons.some(person => person.name === formData.name)) {
      alert(`${formData.name} is already added to the phonebook`);
      return;
    }

    const newId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) + 1 : 1;

    setFormData(prevState => ({
      ...prevState,
      id: newId
    }));

    setPersons([...persons, { ...formData, id: newId }]);
    setFormData({
      name: '',
      number: ''
    });
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
