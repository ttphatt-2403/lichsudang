import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { C } from "@/tokens";

export function TimelineEntry({ date, title, body }: { date: string; title: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ paddingTop: 16, paddingBottom: 16, borderTop: `1px dotted rgba(139,107,63,0.4)` }}>
      <div className="flex items-start gap-3 cursor-pointer hover-accordion" onClick={() => setOpen(!open)}>
        <span style={{
          fontFamily: C.serif, fontSize: 12, fontWeight: 700,
          color: C.accent, letterSpacing: "0.08em", minWidth: 70, flexShrink: 0, marginTop: 3,
        }}>{date}</span>
        <div style={{ flex: 1 }}>
          <p style={{ fontFamily: C.serif, fontSize: 17, fontWeight: 600, color: C.dark, lineHeight: 1.3 }}>{title}</p>
          {open && <p style={{ fontFamily: C.body, fontSize: 16, color: C.dark, opacity: 0.72, lineHeight: 1.78, marginTop: 6 }}>{body}</p>}
        </div>
        <span style={{ color: C.muted, flexShrink: 0 }}>{open ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}</span>
      </div>
    </div>
  );
}
