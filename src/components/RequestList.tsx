import type { Request } from "../type/Request";

interface Props {
  requests: Request[];
}

export default function RequestList({ requests }: Props) {
  const statusClass = (status: string) => {
    if (status === "open") return "status open";
    if (status === "progress") return "status progress";
    return "status resolved";
  };

  const statusLabel = (status: string) => {
    if (status === "open") return "Iniciado";
    if (status === "progress") return "Processando";
    return "Resolvido";
  };

  return (
    <>
      {requests.map((request) => (
        <div key={request.id} className="ticket-item">
          <div className="ticket-cat">📋</div>
          <div style={{ flex: 1 }}>
            <div className="ticket-title">{request.subject}</div>
            <div className="ticket-date">
              {request.date} · {request.category}
            </div>
          </div>
          <span className={statusClass(request.status)}>
            {statusLabel(request.status)}
          </span>
        </div>
      ))}
    </>
  );
}
