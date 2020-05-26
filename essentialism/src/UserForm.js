import React from "react";

function UserForm() {
  return (
    <form>
        <br></br>
      <label className="name" htmlFor="name">
        Name:
        <input type="text" name="name" id="name" placeholder="name"></input>
      </label>
      <br></br>
      <label className="email" htmlFor="email">
        Email:
        <input type="email" name="email" id="email" placeholder="email"></input>
      </label>
      <br></br>
      <label htmlFor="sizes">
        Values:
        <br></br>
        <select name="value-1" id="value-1">
          <option value="">--Please Select Value One--</option>
          <option value="creativity">Creativity</option>
          <option value="health">Health</option>
          <option value="career">Career</option>
          <option value="community">Community</option>
        </select>
        <select name="value-2" id="value-2">
          <option value="">--Please Select Value Two--</option>
          <option value="creativity">Creativity</option>
          <option value="health">Health</option>
          <option value="career">Career</option>
          <option value="community">Community</option>
        </select>
        <select name="value-3" id="value-3">
          <option value="">--Please Select Value Three--</option>
          <option value="creativity">Creativity</option>
          <option value="Health">Health</option>
          <option value="career">Career</option>
          <option value="community">Community</option>
        </select>
      </label>
      <br></br>
      <button>Create Profile</button>
    </form>
  );
}

export default UserForm;
