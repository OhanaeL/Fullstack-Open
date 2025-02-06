import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterTextBox from './filterBox';
import PersonList from './displayList';
import AddPerson from './addPerson';
import personServices from './personServices';
import Notification from './Notification';

const App = () => {
  const [persons, setPersons] = useState([]);

  const [notificationMessage, setNotificationMessage] = useState({text: "", status: "success"})

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
      <Notification message={notificationMessage} />
      <FilterTextBox filterData={filterData} setFilterData={setFilterData} />
      
      <AddPerson 
        formData={formData}
        setFormData={setFormData}
        setPersons={setPersons}
        persons={persons}
        setNotificationMessage={setNotificationMessage}
      />
      
      <h2>Numbers</h2>
      <PersonList persons={persons} filterData={filterData} setPersons={setPersons} setNotificationMessage={setNotificationMessage}/>
    </div>
  );
};

export default App;
