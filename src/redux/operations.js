import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

//  https://642278cc77e7062b3e1a616c.mockapi.io/api/v1/:endpoint

axios.defaults.baseURL = 'https://642278cc77e7062b3e1a616c.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      toast.error(`Something went wrong! ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'tasks/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: contactData.name,
        number: contactData.number,
      });
      return response.data;
    } catch (e) {
      toast.error(`Something went wrong! ${e.message}`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
