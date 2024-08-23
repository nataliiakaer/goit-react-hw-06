import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
// import contactsList from "../../contacts.json";
// import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../redux/contactsSlice";
import { changeFilter } from "../redux/filtersSlice";

const App = () => {
  const dispatch = useDispatch();
  const selectContacts = useSelector((state) => state.contacts.items);
  const searchValue = useSelector((state) => state.filters.name);

  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");
  //   return JSON.parse(savedContacts) || contactsList;
  // });
  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts)),
  //     contacts;
  // });

  // const [searchValue, setSearchValue] = useState("");

  const showValueSearch = (event) => {
    dispatch(changeFilter(event.target.value));
    // setSearchValue(event.target.value);
  };

  const visibleContact = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onAddContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };

    dispatch(addContact(finalContact));
  };

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
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
