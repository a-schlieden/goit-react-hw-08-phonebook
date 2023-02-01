import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

export function App() {
  return (

    <div
      style={{
        margin: "100px auto",
        background: 'white',
        padding: '15px',
        width: "600px",
        fontSize: '20px',
        border: '1px solid grey'
      }}
    >
      <h3>Phonebook</h3>
      <ContactForm />
      <hr />
      <h3>Find contacts by name</h3>
      <Filter />
      <ContactList />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </div>

  );
}
