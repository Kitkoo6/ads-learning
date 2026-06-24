import { cn } from "@/lib/utils";

/**
 * Tiny markdown-ish renderer: paragraphs, numbered lists, bullet lists, **bold**.
 * Good enough for lesson bodies — not a full markdown engine.
 */
export function Prose({
  text,
  className,
  lang,
}: {
  text: string;
  className?: string;
  lang?: string;
}) {
  const blocks = text
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className={cn("space-y-3 text-[15px] leading-relaxed text-foreground/90", className)} lang={lang}>
      {blocks.map((block, i) => {
        const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
        const numbered = lines.every((l) => /^\d+\)\s+/.test(l));
        const bulleted = lines.every((l) => /^[-•]\s+/.test(l));
        if (numbered) {
          return (
            <ol key={i} className="ml-5 list-decimal space-y-1.5">
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.replace(/^\d+\)\s+/, ""))}</li>
              ))}
            </ol>
          );
        }
        if (bulleted) {
          return (
            <ul key={i} className="ml-5 list-disc space-y-1.5">
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.replace(/^[-•]\s+/, ""))}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{renderInline(block)}</p>;
      })}
    </div>
  );
}

function renderInline(s: string): React.ReactNode {
  const parts = s.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    /^\*\*[^*]+\*\*$/.test(p) ? (
      <strong key={i} className="font-semibold text-foreground">
        {p.slice(2, -2)}
      </strong>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}
