import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterTextBox from './filterBox';
import PersonList from './displayList';
import AddPerson from './addPerson';

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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
