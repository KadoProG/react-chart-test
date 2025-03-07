import { useMemo, useState } from "react";

import { SmallLineChart } from "./SmallLineChart";

const data = [
  { label: 2, fullLabel: "2025/02", value: 10 },
  { label: 1, fullLabel: "2025/01", value: 20 },
  { label: 12, fullLabel: "2024/12", value: 0 },
  { label: 11, fullLabel: "2024/11", value: 30 },
];

export const App = () => {
  const [size, setSize] = useState<"small" | "large">("small");
  const style = useMemo(
    () => ({
      width: size === "small" ? 100 : 200,
      height: size === "small" ? 56 : 112,
      border: "1px solid black",
    }),
    [size]
  );

  return (
    <div
      style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}
    >
      <button
        onClick={() =>
          setSize((prev) => (prev === "small" ? "large" : "small"))
        }
      >
        {size === "small" ? "大きくする" : "小さくする"}
      </button>

      <div style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", padding: 16 }}>
        <h2>recharts</h2>
        {/* 本体 */}
        <div style={style}>
          <SmallLineChart data={data} />
        </div>
        <p>
          リンク：
          <a href="https://recharts.org/en-US/" target="_blank" rel="noreferrer">
            https://recharts.org/en-US
          </a>
        </p>
        <p>パッケージ容量：243.51 kB</p>
        <p>
          元々ChatGPTに頼んで作ってもらった際にこのパッケージを利用していた。普通に使いやすいと思う。
        </p>
      </div>
    </div>
  );
};
