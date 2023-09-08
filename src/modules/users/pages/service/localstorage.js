export const getListUsers = () => {
  if (!localStorage["Users"]) {
    localStorage["Users"] = "[]";
  }

  let Users = localStorage["Users"];
  Users = JSON.parse(Users);
  return Users;
};

export const addUser = (User) => {
  const Users = getListUsers();
  Users.push(User);
  localStorage["Users"] = JSON.stringify(Users);
};

export const removeUser = (id) => {
  let Users = getListUsers();
  Users = Users.filter((User) => User.id !== id);
  localStorage["Users"] = JSON.stringify(Users);
};

export const getUserById = (id) => {
  const Users = getListUsers();
  const User = Users.find((User) => User.id === id);
  return User;
};

export const editUser = (id, newUser) => {
  let Users = getListUsers();
  Users = Users.filter((User) => User.id !== id);
  Users.push(newUser);
  localStorage["Users"] = JSON.stringify(Users);
};