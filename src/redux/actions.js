// import { createAction } from "@reduxjs/toolkit";




//  export const addContact = createAction("contacts/AddContact");

//  export const deleteContact = createAction("contacts/DeleteContact");


export const addContact = contact => {
    // const contacts = useSelector(getContacts);
    // const names = contacts.map(contact => contact.name.toLowerCase());
    // if (names.includes(contact.name.toLowerCase())) {
    //   return alert(`${contact.name} is already in contacts`);
    // }

  return {
    type: 'contacts/addContact',
    payload: contact,
  };
};

// {
//     type: "contacts/addContact",
//     payload: { name: 'User entered name', number: 'User entered number' }
// };

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};

//   const addTask = {
//     type: "tasks/addTask",
//     payload: {
//       id: "Generated id",
//       text: "User entered text",
//       completed: false,
//     },
//   };
//   const deleteTask = {
//     type: "tasks/deleteTask",
//     payload: "Task id",
//   };
