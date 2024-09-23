import { FETCH_USERS, ADD_USER, UPDATE_USER, DELETE_USER, SET_LOADING, SET_ERROR } from '../types';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const usersCol = collection(db, 'users');
    const userSnapshot = await getDocs(usersCol);
    const userList = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch({ type: FETCH_USERS, payload: userList });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const addUser = (userData) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const docRef = await addDoc(collection(db, 'users'), userData);
    dispatch({ type: ADD_USER, payload: { id: docRef.id, ...userData } });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const updateUser = (id, userData) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    await updateDoc(doc(db, 'users', id), userData);
    dispatch({ type: UPDATE_USER, payload: { id, ...userData } });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

export const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    await deleteDoc(doc(db, 'users', id));
    dispatch({ type: DELETE_USER, payload: id });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.message });
  }
  dispatch({ type: SET_LOADING, payload: false });
};