import { useState } from "react";
import { v4 as uuid } from "uuid";
import RequestList from "./RequestList";
import type { Request } from "../type/Request";

export default function Support() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("Hardware");

  const submitTicket = () => {
    if (!subject.trim()) {
      alert("Por favor, submita um assunto.");
      return;
    }

    const newTicket: Request = {
      id: uuid(),
      subject,
      category,
      date: new Date().toLocaleDateString("en-GB"),
      status: "open",
    };

    setRequests([newTicket, ...requests]);
    setSubject("");
  };

  return (
    <>
      <div className="greeting">
        <h1>Ajuda e Suporte</h1>
        <p>Submita um novo pedido</p>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-title">Novo Pedido</div>

          <div className="form-row">
            <label className="form-label">Categoria</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Hardware</option>
              <option>Software</option>
              <option>Rede</option>
              <option>Impressão</option>
              <option>Outro</option>
            </select>
          </div>

          <div className="form-row">
            <label className="form-label">Assunto</label>
            <input
              className="form-input"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <button className="btn-primary" onClick={submitTicket}>
            Submeter
          </button>
        </div>

        <div className="card">
          <div className="card-title">Os Meus Pedidos</div>
          <RequestList requests={requests} />
        </div>
      </div>
    </>
  );
}
