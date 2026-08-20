export function ProcessStep({ number, title, children }: { number: string; title: string; children: string }) {
  return (
    <article className="process-step">
      <span className="process-number">{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

