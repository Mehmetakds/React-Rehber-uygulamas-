import { useState, useEffect } from "react";

import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacs] = useState([
    {
      fullname : "Mehmet",
      phone_number: "0546-012-0102",
    },
    {
      fullname: "Ayşe",
      phone_number: "0545-321-1243",
    },
    {
      fullname: "Nazlı",
      phone_number: "0545-456-7898",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
      <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacs} contacts={contacts} />
      </div>
  );
}

export default Contacts;
