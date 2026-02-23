import { useEffect, useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem("portal_notes");
    if (savedNotes) setNotes(savedNotes);
  }, []);

  const saveNotes = () => {
    localStorage.setItem("portal_notes", notes);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="card">
      <div className="card-title">As Minhas Notas</div>
      <textarea
        className="notes-area"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Escreva algo..."
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="notes-actions">
          <button className="notes-save" onClick={saveNotes}>
            Guardar
          </button>
          <span className={`notes-saved ${saved ? "show" : ""}`}>
            Guardado ✓
          </span>
        </div>
      </div>
    </div>
  );
}
