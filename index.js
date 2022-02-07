// Add your code here
const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};
const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};
fetch("http://localhost:3000/dogs", configurationObject)
  .then((resp) => resp.json())
  .then((obj) => console.log(obj))
  .catch((err) => {
    alert("Bad things! Ragnarok!");
    console.log(error.message);
  });

function submitData(userName, userEmail) {
  let userOBJ = {
    name: userName,
    email: userEmail,
  };

  const SubmitDatObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userOBJ),
  };

  function renderData(obj) {
    const userEl = document.createElement("h1");
    const emailEl = document.createElement("h2");
    const IDEl = document.createElement("h1");
    userEl.textContent = obj.name;
    emailEl.textContent = obj.email;
    IDEl.textContent = obj.id;
    document.body.appendChild(userEl);
    document.body.appendChild(emailEl);
    document.body.appendChild(IDEl);
  }
  function renderErr(error) {
    const errorEl = document.createElement("h1");
    errorEl.textContent = error;
    document.body.appendChild(errorEl);
  }
  return fetch("http://localhost:3000/users", SubmitDatObj)
    .then((resp) => resp.json())
    .then((obj) => {
      console.log(obj);
      renderData(obj);
    })
    .catch((err) => {
      alert("Bad things! Ragnarok!");
      console.log(err.message);
      renderErr(err.message);
    });
}

submitData("Steve", "steve@steve.com");
submitData("Sam", "sam@sam.com");

// userEl.textContent = obj.name;
// emailEl.textContent = obj.email;
// return body.appendChild(userEl, emailEl);
