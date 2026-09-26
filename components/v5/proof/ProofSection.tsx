"use client";

import {useMemo,useState,type CSSProperties} from "react";
import {Database,Network,Workflow} from "lucide-react";

const dimensions={
  backend:{label:"BACKEND SYSTEMS",icon:Network,title:"Services built to scale",body:"Node.js microservices, API gateways, and event-driven patterns keep business workflows reliable under load.",evidence:["Node.js microservices","REST and gRPC contracts","Event-driven workflows","Scalable API gateways"]},
  data:{label:"DATA & STATE",icon:Database,title:"State designed deliberately",body:"Schema design, indexing, caching, and synchronization are treated as architecture—not implementation details.",evidence:["MongoDB data modeling","Indexing and optimization","Redis caching","Distributed state"]},
  delivery:{label:"DELIVERY & OPS",icon:Workflow,title:"Owned through production",body:"Shared monorepos and automated pipelines connect implementation, testing, deployment, and incident response.",evidence:["Shared business packages","Automated CI/CD","Production observability","Operational ownership"]},
} as const;

type AboutKey=keyof typeof dimensions;
const keys=Object.keys(dimensions) as AboutKey[];

export default function ProofSection(){
  const [active,setActive]=useState<AboutKey>("backend");
  const selected=dimensions[active];
  const Icon=selected.icon;
  const orbit=useMemo(()=>keys.map((key,index)=>({key,index,item:dimensions[key]})),[]);

  return <section id="about" className="v5-proof-section v5-thinking-section v5-about-section">
    <div className="v5-proof-head">
      <span>02 / ABOUT</span>
      <h2>Crafting Experiences.<br/><em>Engineering Systems.</em></h2>
      <div className="v5-about-copy">
        <p>With years of experience shipping production software at scale, I work as a Full-Stack Software Engineer focused on building complete digital products end-to-end. My core discipline centers on resilient system design, scalable API gateways, event-driven architectures, and high-performance client engines.</p>
        <p>Rather than just building interfaces, I specialize in the complete software engineering lifecycle: from designing MongoDB schemas and Node.js microservices to building high-concurrency client engines and automated monorepos. I focus on building reliable, self-sustaining software infrastructure.</p>
      </div>
    </div>

    <div className="v5-proof-lab">
      <aside className="v5-proof-scoreboard" aria-label="Full-stack engineering focus">
        <div><b>01</b><span>BACKEND SYSTEMS</span></div><div><b>02</b><span>DATA &amp; STATE</span></div><div><b>03</b><span>DELIVERY &amp; OPS</span></div>
      </aside>
      <div className={`v5-proof-orbit ${active}`}>
        <div className="v5-proof-rings"><i/><i/><i/></div>
        <div className="v5-proof-core"><Icon size={22}/><small>{selected.label}</small><b>{selected.title}</b><p>{selected.body}</p></div>
        {orbit.map(({key,index,item})=>{const OrbitIcon=item.icon;return <button key={key} className={active===key?"active":""} style={{"--proof-index":index} as CSSProperties} onMouseEnter={()=>setActive(key)} onFocus={()=>setActive(key)} onClick={()=>setActive(key)}><OrbitIcon size={14}/><span>{item.label}</span></button>})}
      </div>
      <aside className="v5-proof-evidence" aria-live="polite">
        <small>ACTIVE LAYER / {selected.label}</small><h3>{selected.title}</h3>
        <div>{selected.evidence.map((item,index)=><span key={item}><i>{String(index+1).padStart(2,"0")}</i>{item}</span>)}</div>
      </aside>
    </div>
    <div className="v5-thinking-bridge"><span>SERVICES</span><i/><span>STATE</span><i/><span>CLIENTS</span><b>Engineering case studies ↓</b></div>
  </section>;
}
