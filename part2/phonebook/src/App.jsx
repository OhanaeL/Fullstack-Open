import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterTextBox from './filterBox';
import PersonList from './displayList';
import AddPerson from './addPerson';
import personServices from './personServices';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personServices
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    number: ''
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
      <PersonList persons={persons} filterData={filterData} setPersons={setPersons} />
    </div>
  );
};

export default App;
