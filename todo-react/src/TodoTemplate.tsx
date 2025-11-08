import type { ReactNode } from "react";
export default function TodoTemplate({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: "20px", fontFamily: "system-ui" }}>{children}</div>
  );
}
