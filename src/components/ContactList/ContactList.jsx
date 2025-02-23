import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.filter);

  const filterData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const duplicateNames = filterData.some(
    (contact, index) =>
      filterData.findIndex(
        (c) => c.name.toLowerCase() === contact.name.toLowerCase()
      ) !== index
  );

  return (
    <ul className={css.list}>
      {duplicateNames && <p>There are duplicate contacts!</p>}
      {filterData.map((contact) => (
        <li key={contact.id}>
          <Contact {...contact} />
        </li>
      ))}
    </ul>
  );
}
