import ContactForm from "./components/ContactForm/ContactForm";
import SearchContact from "./components/SearchContact/SearchContact";
import ContactList from "./components/ContactList/ContactList";
import s from "./App.module.css";
import { useSelector } from "react-redux";
import { getContacts } from "./redux/selectors";

export default function App() {
  const allContacts = useSelector(getContacts);
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      {allContacts.length > 0 && <h2 className={s.title}>Contacts</h2>}
      {allContacts.length > 0 && <SearchContact />}
      <ContactList />
    </div>
  );
}
