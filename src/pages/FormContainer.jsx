import { useState } from "react";
import "../styles/components/form.sass";
import { useNavigate } from "react-router-dom";

const FormContainer = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    telefone: "",
    empresa: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    // setErrorMessage("");
    //setLoading(true);
    const response = await fetch(
      `https://backend-conecta-lab-jezy.vercel.app/contacts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      // setError("Error");
      // alert(error);
      navigate("/portifolio/home");
    } else {
      console.log("erro");
    }
  }
  return (
    <div id="form">
      <h1>Registre</h1>
      <form onSubmit={handleSubmit} className="info-card">
        <label className="title">
          Nome
          <input
          className="box"
            type="text"
            required='true'
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
          />
        </label>
        <label className="title">
          Email
          <input
          className="box"
            type="email"
            required='true'
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
        </label>
        <label className="title">
          Whatsapp
          <input
          className="box"
            type="text"
            required='true'
            onChange={(e) => setData({ ...data, telefone: e.target.value })}
            value={data.telefone}
          />
        </label>
        <label className="title">
          Empresa
          <input
          className="box"
            type="text"
            onChange={(e) => setData({ ...data, empresa: e.target.value })}
            value={data.empresa}
          />
        </label>
        <input type="submit" id="bnt" className="social-btn" />
      </form>
    </div>
  );
};

export default FormContainer;
