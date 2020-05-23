import React from "react";

function UserForm() {
  return (
    <form>
      <label className="name" htmlFor="name">
        Name:
        <input type="text" name="name" id="name" placeholder="name"></input>
      </label>
      <label className="email" htmlFor="email">
        Email:
        <input type="email" name="email" id="email" placeholder="email"></input>
      </label>
      <label htmlFor="sizes">
        Values:
        <br></br>
        <select name="value-1" id="value-1">
          <option value="">--Please Select Value One--</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra-Large">Extra Large</option>
        </select>
        <select name="value-2" id="value-2">
          <option value="">--Please Select Value Two--</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra-Large">Extra Large</option>
        </select>
        <select name="value-3" id="value-3">
          <option value="">--Please Select Value Three--</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
          <option value="Extra-Large">Extra Large</option>
        </select>
      </label>
    </form>
  );
}

export default UserForm;
