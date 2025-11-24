import { useState, useEffect } from "react";
import personService from './services/persons'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    const nameExists = persons.some(
      (p) => p.name.toLowerCase() === newName.toLowerCase()
    );

    if (nameExists) {
      const ok = window.confirm(
        `${nameExists.name} is already added to phonebook, replace the old number with a new one?`
      )
      if (!ok) {
        return
      }

      const changedPerson = { ...nameExists, number: newNumber }

      personService
        .update(nameExists.id, changedPerson)
        .then(returnedPerson => {
          setPersons(
            persons.map(p => p.id !== nameExists.id ? p : returnedPerson)
          )
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          alert(`Information of ${nameExists.name} has already been removed from server`)
          setPersons(persons.filter(p => p.id !== nameExists.id))
          console.error(error)
        })

      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }


const handleDelete = (id, name) => {
    const ok = window.confirm(`Delete ${name}?`)
    if (!ok) return

    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        alert(`Information of ${name} has already been removed from server`)
        setPersons(persons.filter(p => p.id !== id))
        console.error(error)
      })
  }


  const personsToShow = filter
    ? persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={filter} onChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={personsToShow} onDelete={handleDelete} />
    </div>
  );
};

export default App;
