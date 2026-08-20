import type { FAQItem } from "@/lib/content";

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question} className="faq-item">
          <summary>
            <span>{item.question}</span>
            <span className="faq-icon" aria-hidden="true" />
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

