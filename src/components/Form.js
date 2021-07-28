import React, { useState } from "react";

function Form({ handleFirstName, handleLastName, firstName, lastName }) {
  return (
    <form>
      <input onChange={handleFirstName} type="text" value={firstName} />
      <input onChange={handleLastName} type="text" value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
