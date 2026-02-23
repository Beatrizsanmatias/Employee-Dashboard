import { useState } from "react";
import { employees } from "../data/EmployeeList";

export default function Directory() {
  const [query, setQuery] = useState("");

  const filtered = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.dept.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <div className="greeting">
        <h1>Funcionários</h1>
        <p>Entre em contacto com os seus colegas</p>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <input
          className="form-input"
          type="text"
          placeholder="🔍 Pesquisar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="grid-3">
        {filtered.map((e) => (
          <div key={e.email} className="card" style={{ textAlign: "center" }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: e.color,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 12px",
              }}
            >
              {e.initials}
            </div>
            <div>{e.name}</div>
            <div style={{ fontSize: 12 }}>{e.dept}</div>
          </div>
        ))}
      </div>
    </>
  );
}
