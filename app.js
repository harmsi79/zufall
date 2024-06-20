function zufall() {
  const randomIndex = Math.floor(Math.random() * name.length);
  const randomName = name[randomIndex];
  const randomNachname = nachname[randomIndex];
  const randomAlter = alter[randomIndex];

  add(randomName, randomNachname, randomAlter);
}

function add(randomName, randomNachname, randomAlter) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("student");

  const newNameP = document.createElement("p");
  newNameP.textContent = randomName;

  const newNachnameP = document.createElement("p");
  newNachnameP.textContent = randomNachname;

  const newAlterP = document.createElement("p");
  newAlterP.textContent = randomAlter;

  newDiv.appendChild(newNameP);
  newDiv.appendChild(newNachnameP);
  newDiv.appendChild(newAlterP);

  document.getElementById("wrapper").appendChild(newDiv);
}
