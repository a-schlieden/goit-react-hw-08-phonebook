import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import { ContactForm } from "components/ContactForm/ContactForm";
// import { Filter } from "components/Filter/Filter";
// import { ContactList } from "components/ContactList/ContactList";
///////////////////////////////////////////////////////
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

import Register from 'pages/Register';
import Login from 'pages/Login';
//import MyContacts from 'pages/Contacts';
import Layout from './Layout/Layout';
import Home from 'pages/Home';

const MyContacts = lazy(() => import('pages/Contacts'));



export function App() {
  return (
    <>
      {/* <div
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

      <hr /> */}

      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contacts" element={<MyContacts />} />
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
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
    </>
  );
}
