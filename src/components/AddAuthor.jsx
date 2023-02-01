import React, { useState, useEffect } from "react";

const AddAuthor = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Favorite authors</h1>
      <p>
        <a href="">Home</a>
      </p>
      <p>Edit this author:</p>
      <div>
        <p>Name:</p>
        <input type="text" />
        <button>Cancel</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default AddAuthor;
