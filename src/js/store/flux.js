const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      contacts: [],
    },
    actions: {
      getFetch: () => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/redando_d/contacts"
        )
          .then((response) => response.json())
          .then((jsonifiedData) => {
            setStore({ contacts: jsonifiedData.contacts });
          })
          .catch((err) => console.log(err));
      },

      addContact: (nameInput, emailInput, phoneInput, addressInput) => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/redando_d/contacts",
          {
            method: "POST",
            body: JSON.stringify({
              name: nameInput,
              email: emailInput,
              phone: phoneInput,
              address: addressInput,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
          })
          .then((response) => {
            console.log("Success:", response);
            getActions().getFetch();
          })
          .catch((error) => console.error(error));
      },

      deleteContact: (id) => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/redando_d/contacts/" +
            id,
          { method: "DELETE" }
        ).then((response) => getActions().getFetch());
      },

      updateContact: (id, nameInput, emailInput, phoneInput, addressInput) => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/redando_d/contacts/" + id,
          {
            method: "PUT",
            body: JSON.stringify({
              name: nameInput,
              email: emailInput,
              phone: phoneInput,
              address: addressInput,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => {
            if (!res.ok) throw Error(res.statusText);
            return res.json();
          })
          .then((response) => {
            console.log("Success:", response);
            getActions().getFetch();
          })
          .catch((error) => console.error(error));
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
