import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Authors = () => {
  const [name, setName] = useState([]);
  const [quote, setQuote] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const result = await axios.get("http://localhost:8000/api/authors/"); //se pone el id del useparams aca para hacer fetch de esa id
        console.log(result);
        /*         setName(result.data.product.map((prod) => prod.title));
        setQuote(result.data.product.map((prod) => prod.price)); */
      } catch (error) {
        console.log(error);
      }
    };
    getAuthor();
  }, []);

  const deleteAuthor = async () => {
    try {
      const result = await axios
        .delete(`http://localhost:8000/api/products/${id}`) //se pone el id del useparams aca para hacer fetch de esa id
        .then((res) => {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Favorite authors</h1>
      <p>{<a href={`/add`}>Add an author</a>}</p>
      <p>We have quotes by:</p>
      <div className="tableAuth">
        {/*  <table>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
          <tr>
            <td>Bill</td>
            <td>Frank</td>
          </tr>
          <tr>
            <button>
              <a href={`/edit/:id`}>Edit</a>
            </button>
            <button>
              <a href={`/edit/:id`}>Delete</a>
            </button>
          </tr>
        </table> */}
        <label htmlFor="">Author</label>
        <label htmlFor="">Actions Available</label>
        <div>
          <p>{name}</p>
          <button>
            <a href={`/edit/:id`}>Edit</a>
          </button>
          <button>
            <a href={`/edit/:id`}>Delete</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authors;
