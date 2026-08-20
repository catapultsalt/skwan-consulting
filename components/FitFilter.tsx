import { fitFor, notFor } from "@/lib/content";

function FitList({ title, items, positive }: { title: string; items: string[]; positive: boolean }) {
  return (
    <div className={`fit-column ${positive ? "fit-positive" : "fit-negative"}`.trim()}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span aria-hidden="true">{positive ? "✓" : "×"}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FitFilter() {
  return (
    <div className="fit-grid">
      <FitList title="Worth a call if..." items={fitFor} positive />
      <FitList title="Not a fit if..." items={notFor} positive={false} />
    </div>
  );
}

