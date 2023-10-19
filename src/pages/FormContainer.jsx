import { useState } from "react";
import "../styles/components/form.sass";
import { useNavigate } from "react-router-dom";

const FormContainer = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    telefone: "",
    empresa: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    //setErrorMessage("");
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
      navigate("/");
    } else {
      console.log("erro");
    }
  }
  return (
    <div id="form">
      <form onSubmit={handleSubmit} className="info-card">
        <label className="title">
          Nome
          <input
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
          />
        </label>
        <label className="title">
          Email
          <input
            type="text"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
        </label>
        <label className="title">
          Whatsapp
          <input
            type="text"
            onChange={(e) => setData({ ...data, telefone: e.target.value })}
            value={data.telefone}
          />
        </label>
        <label className="title">
          Empresa
          <input
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
