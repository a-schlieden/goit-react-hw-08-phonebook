import React from "react"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import style from './ContactList.module.css';
import { ContactListItem } from "components/ContactListItem/ContactListItem";
import { STATUS } from "constants/constants";
import { SelectedContacts, Status, AllContacts } from "../../redux/selectors"
import { fetchContacts, deleteContact } from "redux/contacts/contacts.thunk";
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {

    const dispatch = useDispatch()

    const status = useSelector(Status)
    const FilteredContacts = useSelector(SelectedContacts)
    const totalContacts = useSelector(AllContacts)

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const onDeleteContact = (id) => {
        dispatch(deleteContact(id))
    }

    return (
        <>
            <h3>My contacts </h3>
            {(status === STATUS.idle || status === STATUS.loading) && <Loader />}

            {FilteredContacts.length === 0 ?
                (<p>No saved contacts</p>) :
                (
                    <>
                        <p>You have {totalContacts.length} contacts</p>
                        <ul className={style.contactList}>
                            {FilteredContacts.map(item => (
                                <li key={item.id} className={style.contactListItem}>
                                    <ContactListItem
                                        name={item.name}
                                        number={item.number}
                                        id={item.id}
                                        deleteContact={() => onDeleteContact(item.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </>
                )
            }
        </>
    );
};


