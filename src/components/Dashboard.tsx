import Notes from "./Notes";
import RequestList from "./RequestList";
import Weather from "./Weather";
import type { Request } from "../type/Request";
import Profile from "../media/profile.jpg";

export default function Dashboard() {
  const requests: Request[] = [
    {
      id: "1",
      category: "Hardware",
      subject: "Tela do portátil não liga",
      date: "18 Feb 2025",
      status: "progress",
    },
    {
      id: "2",
      category: "Rede",
      subject: "Acesso à VPN não funciona",
      date: "10 Feb 2025",
      status: "resolved",
    },
  ];

  return (
    <>
      <div className="greeting greeting-profile">
        <img
          src={Profile}
          sizes="20"
          alt="Teresa Matos"
          className="profile-avatar"
        />
        <h1>Teresa Matos</h1>
      </div>
      <div className="grid-main">
        <div>
          <Notes />
        </div>
        <div>
          <Weather />
          <div className="card" style={{ marginBottom: 20 }}>
            <div className="card-title">Os meus pedidos recentes</div>
            <RequestList requests={requests} />
          </div>
        </div>
      </div>
    </>
  );
}
