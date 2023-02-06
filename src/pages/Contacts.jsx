
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import style from './pages.module.css';

const MyContacts = () => {
    return (
        <div className={style.pagesWrapp}>
            <div className={style.contactsWrapp}>
                <ContactList />
                <Filter />
            </div>
            <hr />
            <ContactForm />
        </div>
    )
}

export default MyContacts