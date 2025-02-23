import css from "../src/App.module.css";
import ContactForm from "../src/components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <div className={css.wrapper}>
          <SearchBox />
          <ContactList />
        </div>
      ) : (
        <p>No contacts availavle.</p>
      )}
    </div>
  );
}

export default App;
