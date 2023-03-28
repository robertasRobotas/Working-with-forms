const displayUserInfo = (name, lastName, age) => {
  const existingUserInfo = document.querySelector(".userInfo");

  if (existingUserInfo) {
    existingUserInfo.remove();
  }

  const userInfo = document.createElement("div");
  userInfo.setAttribute("id", "userInfo");
  userInfo.setAttribute("class", "userInfo");
  document.body.append(userInfo);

  const nameWarpper = document.createElement("div");
  const lastNameWarpper = document.createElement("div");
  const ageWarpper = document.createElement("div");

  nameWarpper.innerHTML = name;
  lastNameWarpper.innerHTML = lastName;
  ageWarpper.innerHTML = age;

  userInfo.append(nameWarpper);
  userInfo.append(lastNameWarpper);
  userInfo.append(ageWarpper);
};

const displayUserErrors = (name, lastName, age) => {
  // CREATING ERROR WRAPPER
  const errorWrapper = document.createElement("div");
  errorWrapper.setAttribute("id", "errorWrapper");
  errorWrapper.setAttribute("class", "errorMessages");

  document.body.append(errorWrapper);
  ////////////////////////////

  if (!(name.length >= 3)) {
    const error = document.createElement("div");
    error.innerHTML = "Name is too short";
    errorWrapper.append(error);
  }

  if (!lastName) {
    const error = document.createElement("div");
    error.innerHTML = "Please inset last name";
    errorWrapper.append(error);
  }

  if (!(age >= 18)) {
    const error = document.createElement("div");
    error.innerHTML = "Age should be above 18";
    errorWrapper.append(error);
  }
};

const button = document.getElementById("button");

button.addEventListener("click", () => {
  const wrapper = document.getElementById("errorWrapper");

  if (wrapper) {
    wrapper.remove();
  }

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("last-name").value;
  const age = document.getElementById("age").value;

  if (name.length >= 3 && lastName && age >= 18) {
    displayUserInfo(name, lastName, age);
  } else {
    displayUserErrors(name, lastName, age);
  }
});
