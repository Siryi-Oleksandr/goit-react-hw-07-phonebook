import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalStyle } from 'components/GlobalStyle';
import { Container } from './App.styled';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { Toaster } from 'react-hot-toast';
import { selectError, selectIsLoading } from 'redux/selectors';
import Loader from 'components/Loader';

function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />

      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      <GlobalStyle />
    </Container>
  );
}

export default App;
