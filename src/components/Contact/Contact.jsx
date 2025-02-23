import css from "./Contact.module.css";
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <div className={css.itemWrapper}>
        <div className={css.itemInfo}>
          <FaUserAlt className={css.userIcon} />
          <p className={css.itemName}>{name}</p>
        </div>
        <div className={css.itemInfo}>
          <BsTelephoneFill className={css.userIcon} />
          <p className={css.itemName}>{number}</p>
        </div>
      </div>

      <button
        onClick={() => dispatch(deleteContacts(id))}
        className={css.itemBtn}
      >
        Delete
      </button>
    </div>
  );
}
