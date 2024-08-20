import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import contactsList from "../contacts.json";
import { useEffect, useState } from "react";
import css from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return JSON.parse(savedContacts) || contactsList;
  });
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts)),
      contacts;
  });

  const [searchValue, setSearchValue] = useState("");
  const showValueSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onAddContact = (newContact) => {
    setContacts([newContact, ...contacts]);
  };

  const onDeleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox searchValue={searchValue} showValueSearch={showValueSearch} />
      <ContactList
        contacts={visibleContact}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
