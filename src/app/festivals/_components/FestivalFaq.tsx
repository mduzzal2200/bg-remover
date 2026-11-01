/** The FAQ on the festival pages: native <details>, so every answer is in the HTML. */
export default function FestivalFaq({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {faqs.map((f) => (
        <details key={f.q} className="jpt-faq">
          <summary className="jpt-faq-q">
            <h3 style={{ fontWeight: 700, fontSize: 15, color: "var(--text)", lineHeight: 1.4, margin: 0 }}>{f.q}</h3>
            <span className="jpt-faq-icon" aria-hidden />
          </summary>
          <div style={{ padding: "0 24px 20px", color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7 }}>{f.a}</div>
        </details>
      ))}
    </div>
  );
}
