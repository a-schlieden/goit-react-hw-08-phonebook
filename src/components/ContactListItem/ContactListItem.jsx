import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, deleteContact }) => {

  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={deleteContact} className={style.contactListBtn}>
        Remove
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
