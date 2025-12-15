
"use client";
import { useState } from "react";

const TYPES = ["84A","84B","112A","112B"];

export default function Page(){
  const [type,setType] = useState("84A");
  return (
    <main style={{ padding: 24 }}>
      <h1>풍무 역세권 호반써밋 옵션견적기</h1>
      <p>타입 선택</p>
      <select value={type} onChange={e=>setType(e.target.value)}>
        {TYPES.map(t=><option key={t}>{t}</option>)}
      </select>
      <div style={{ marginTop: 16 }}>
        <strong>선택 타입:</strong> {type}
      </div>
      <p style={{ marginTop: 24, color:"#666" }}>
        ※ 이 ZIP은 배포 확인용 기본 뼈대입니다. 옵션 데이터와 PDF 출력은 이어서 업데이트됩니다.
      </p>
    </main>
  );
}
