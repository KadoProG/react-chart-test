import { useEffect, useRef, useState } from "react";
import {
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ContentType as LabelContentType } from "recharts/types/component/Label";

const CustomLabel: LabelContentType = ({ x, y }) => {
  return (
    <g>
      <circle cx={x} cy={y} r={2} fill="blue" />
    </g>
  );
};

export const SmallLineChart = ({
  data,
}: {
  data: {
    label: string | number;
    fullLabel?: string | number;
    value: number;
  }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(ref.current?.clientHeight || 0);
  }, [ref.current?.clientHeight]);

  return (
    <ResponsiveContainer width="100%" height="100%" ref={ref}>
      <LineChart data={data} margin={{ right: 8, left: 8 }}>
        <XAxis
          dataKey="label"
          height={16}
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 10 }}
          padding={{ left: 0, right: 0 }}
        />
        <YAxis hide />
        <RechartsTooltip
          position={{ y: height }}
          contentStyle={{
            // transform: "translate(0, 80%)",
            fontSize: 12, // フォントサイズを小さく
            padding: "4px 6px", // 内側の余白を小さく
            borderRadius: "4px", // 角丸を調整
          }}
          labelFormatter={(label, payload) => {
            const fullLabel = payload?.[0]?.payload?.fullLabel || label;
            return fullLabel; // fullLabelがあればそれを使う
          }}
          formatter={(value) => [`${value} 回`]}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#aaa"
          dot={{ r: 0 }} // ドットの大きさ
          activeDot={{ r: 0 }} // ドットの大きさ
        >
          <LabelList dataKey="value" content={<CustomLabel />} />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  );
};
