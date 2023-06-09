let id = document.getElementById("userId");
let full_name = document.getElementById("fullname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");

let updateBtn = document.getElementById("update");
updateBtn.style.display = "none";

let table = document.getElementById("table");
table.style.visibility = "hidden";
// create user
const createUser = () => {
  let inputId = id.value;
  let inputIFullName = full_name.value;
  let inputUser = username.value;
  let inputEmail = email.value;
  let inputPassword = password.value;

  if (
    inputId == "" ||
    inputIFullName == "" ||
    inputUser == "" ||
    inputEmail == "" ||
    inputPassword == ""
  ) {
    alert("please fill all inputs");
  } else {
    let trBody = document.createElement("tr");
    trBody.innerHTML = `<tr>
      <td class="text-center  text-xs sm:text-lg py-2">${inputId}</td>
      <td class="text-center  text-xs sm:text-lg py-2">${inputIFullName}</td>
      <td class="text-center  text-xs sm:text-lg py-2">${inputUser}</td>
      <td class="text-center  text-xs sm:text-lg py-2">${inputEmail}</td>
      <td class="text-center  text-xs sm:text-lg py-2">${inputPassword}</td>
      <td
        class="text-center text-xs sm:text-lg py-2 flex flex-row gap-4 items-center justify-center">
        <i
          class="fa-solid fa-edit text-green-900 cursor-pointer edit"
          id="edit"></i>
        <i
          class="fa-solid fa-trash text-red-500 cursor-pointer delete"
          id="delete"></i>
      </td>
    </tr>`;

    document.getElementById("tbody").append(trBody);
    table.style.visibility = "visible";
  }

  id.value = "";
  full_name.value = "";
  username.value = "";
  email.value = "";
  password.value = "";
};
// create user invoke
document.getElementById("save").addEventListener("click", createUser);

// clear input values
const clearInputs = () => {
  id.value = "";
  full_name.value = "";
  username.value = "";
  email.value = "";
  password.value = "";

  updateBtn.style.display = "none";
};
// clear inputs function invoke
document.getElementById("clear").addEventListener("click", clearInputs);

// form handle
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  // delete user
  document.getElementById("tbody").addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("delete")) {
      console.log("yes");
      target.parentElement.parentElement.remove();
    }
  });

  // update user
  document.getElementById("tbody").addEventListener("click", (e) => {
    let target = e.target;
    let selectedRow = target.parentElement.parentElement;
    if (target.classList.contains("edit")) {
      updateBtn.style.display = "flex";
      id.value = selectedRow.children[0].textContent;
      full_name.value = selectedRow.children[1].textContent;
      username.value = selectedRow.children[2].textContent;
      email.value = selectedRow.children[3].textContent;
      password.value = selectedRow.children[4].textContent;

      document.getElementById("save").style.display = "none";

      updateBtn.addEventListener("click", () => {
        selectedRow.children[0].textContent = id.value;
        selectedRow.children[1].textContent = full_name.value;
        selectedRow.children[2].textContent = username.value;
        selectedRow.children[3].textContent = email.value;
        selectedRow.children[4].textContent = password.value;

        document.getElementById("save").style.display = "flex";
      });
    }
  });
});
