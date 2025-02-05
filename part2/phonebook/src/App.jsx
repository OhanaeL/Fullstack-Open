// App.js
import { useState } from 'react';
import FilterTextBox from './filterBox';
import PersonList from './displayList';
import AddPerson from './addPerson';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    id: '',
  });

  const [filterData, setFilterData] = useState({
    filtering: false,
    filterText: "",
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterTextBox filterData={filterData} setFilterData={setFilterData} />
      
      <AddPerson 
        formData={formData}
        setFormData={setFormData}
        setPersons={setPersons}
        persons={persons}
      />
      
      <h2>Numbers</h2>
      <PersonList persons={persons} filterData={filterData} />
    </div>
  );
};

export default App;
