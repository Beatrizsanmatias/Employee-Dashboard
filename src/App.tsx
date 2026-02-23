import { useState } from "react";
import Directory from "./components/Directory";
import Dashboard from "./components/Dashboard";
import Support from "./components/Support";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="org">Município de Palmela</div>
          <div className="name">Portal de Trabalhador</div>
        </div>

        <div className="nav-item" onClick={() => setPage("dashboard")}>
          Painel Principal
        </div>
        <div className="nav-item" onClick={() => setPage("support")}>
          Ajuda & Suporte
        </div>
        <div className="nav-item" onClick={() => setPage("directory")}>
          Equipa
        </div>
      </aside>

      {/* Main */}
      <main className="main">
        <div className="content">
          {page === "dashboard" && <Dashboard />}
          {page === "support" && <Support />}
          {page === "directory" && <Directory />}
        </div>
      </main>
    </div>
  );
}
