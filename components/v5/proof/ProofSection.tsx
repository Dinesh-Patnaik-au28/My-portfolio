"use client";

import {useMemo,useState,type CSSProperties} from "react";
import {Code2,Layers3,Sparkles} from "lucide-react";

const dimensions={
  systems:{label:"SYSTEMS",icon:Layers3,title:"I think in systems",body:"I don’t just build screens. I think about how components, state, flows and reusable pieces work together.",evidence:["Components should work together.", "State should stay predictable.", "Flows should feel effortless.", "Patterns should be reusable."]},
  experience:{label:"EXPERIENCE",icon:Sparkles,title:"I care about the experience",body:"Complex logic shouldn’t make a product feel complicated. I like turning that complexity into interfaces that feel natural.",evidence:["Less friction", "Clear feedback", "Useful motion", "Readable interfaces"]},
  complexity:{label:"HARD PARTS",icon:Code2,title:"I like the hard parts",body:"I enjoy problems where engineering and interaction meet — the parts that need both logic and a thoughtful interface.",evidence:["Logic plus UI", "Edge cases matter", "Details are designed", "The product stays understandable"]},
} as const;

type ProofKey=keyof typeof dimensions;
const keys=Object.keys(dimensions) as ProofKey[];

export default function ProofSection(){
  const [active,setActive]=useState<ProofKey>("systems");
  const selected=dimensions[active];
  const Icon=selected.icon;
  const orbit=useMemo(()=>keys.map((key,index)=>({key,index,item:dimensions[key]})),[]);

  return <section id="proof" className="v5-proof-section v5-thinking-section">
    <div className="v5-proof-head">
      <span>03 / HOW I THINK</span>
      <h2>Make it complex.<br/><em>Keep it simple.</em></h2>
      <p>I like understanding the whole system first how the pieces connect, how the experience flows, and where complexity can stay out of the user's way.</p>
    </div>

    <div className="v5-proof-lab">
      <aside className="v5-proof-scoreboard" aria-label="How Dinesh thinks">
        <div><b>01</b><span>SYSTEM THINKING</span></div>
        <div><b>02</b><span>SIMPLE EXPERIENCE</span></div>
        <div><b>03</b><span>HARD PARTS</span></div>
      </aside>

      <div className={`v5-proof-orbit ${active}`}>
        <div className="v5-proof-rings"><i/><i/><i/></div>
        <div className="v5-proof-core">
          <Icon size={22}/>
          <small>{selected.label}</small>
          <b>{selected.title}</b>
          <p>{selected.body}</p>
        </div>
        {orbit.map(({key,index,item})=>{const OrbitIcon=item.icon;return <button key={key} className={active===key?"active":""} style={{"--proof-index":index} as CSSProperties} onMouseEnter={()=>setActive(key)} onFocus={()=>setActive(key)} onClick={()=>setActive(key)}>
          <OrbitIcon size={14}/><span>{item.label}</span>
        </button>})}
      </div>

      <aside className="v5-proof-evidence" aria-live="polite">
        <small>ACTIVE IDEA / {selected.label}</small>
        <h3>{selected.title}</h3>
        <div>{selected.evidence.map((item,index)=><span key={item}><i>{String(index+1).padStart(2,"0")}</i>{item}</span>)}</div>
      </aside>
    </div>
    <div className="v5-thinking-bridge"><span>SYSTEM</span><i/><span>INTERFACE</span><i/><span>PRODUCT</span><b>Things I’ve built ↓</b></div>
  </section>;
}
