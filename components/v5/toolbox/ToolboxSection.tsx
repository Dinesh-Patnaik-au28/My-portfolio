"use client";

import {useState,type CSSProperties} from "react";
import {Container,Database,Film,Network,PanelsTopLeft} from "lucide-react";

const groups=[
  {key:"backend",label:"BACKEND & DISTRIBUTED SYSTEMS",icon:Network,tools:["Node.js","Express","RESTful APIs","gRPC","Microservices Architecture","Event-Driven Patterns","API Gateways"],preview:"api",title:"Services, contracts, and event flow"},
  {key:"database",label:"DATABASE & STORAGE",icon:Database,tools:["MongoDB","Database Indexing & Optimization","Redis Caching","Data Modeling"],preview:"data",title:"Durable, queryable distributed state"},
  {key:"frontend",label:"FRONTEND & CLIENT ARCHITECTURE",icon:PanelsTopLeft,tools:["React","Next.js","React Native","TypeScript","Zustand","Client-side Performance & Memory Optimization"],preview:"client",title:"High-performance cross-platform clients"},
  {key:"devops",label:"DEVOPS, AI & TOOLING",icon:Container,tools:["Docker","Monorepo Pipelines (Turborepo/Nx)","CI/CD Automation","Git","Linux Administration","AI Agent Orchestration (PyTorch/FastAPI integration)"],preview:"release",title:"Automated delivery and AI orchestration"},
] as const;

type ToolPreview=typeof groups[number]["preview"];

function ToolVisual({preview}:{preview:ToolPreview}){
  if(preview==="release")return <div className="v5-tool-visual v5-tool-release-flow" aria-hidden="true">
    { ["CODE", "BUILD", "TEST", "RELEASE", "USERS"].map((stage,index)=><span key={stage} style={{"--stage-index":index} as CSSProperties}><b>{String(index+1).padStart(2,"0")}</b>{stage}</span>) }
    <em/>
  </div>;

  return <div className="v5-tool-visual" aria-hidden="true"><i/><i/><i/><i/><i/></div>;
}

export default function ToolboxSection(){
  const [active,setActive]=useState(0);
  const selected=groups[active];
  const Icon=selected.icon;

  return <section id="toolbox" className="v5-toolbox-section">
    <div className="v5-toolbox-head">
      <span>05 / TECHNICAL SKILLS</span>
      <h2>The stack behind<br/><em>the system.</em></h2>
      <p>Backend-heavy engineering across distributed services, data architecture, high-performance clients, and automated delivery.</p>
    </div>

    <div className="v5-toolbox-lab">
      <aside className="v5-tool-groups">
        {groups.map((group,index)=>{const GroupIcon=group.icon;return <button key={group.key} className={active===index?"active":""} onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)} onClick={()=>setActive(index)}>
          <GroupIcon size={15}/><span>{group.label}</span><i/>
        </button>})}
      </aside>

      <div className={`v5-tool-preview ${selected.preview}`}>
        <div className="v5-tool-preview-card">
          <Icon size={24}/>
          <small>{selected.label}</small>
          <b>{selected.title}</b>
          <ToolVisual preview={selected.preview}/>
        </div>
      </div>

      <div className="v5-tool-cloud" aria-live="polite">
        {selected.tools.map((tool,index)=><button key={tool} style={{"--tool-index":index} as CSSProperties}><span>{tool}</span><Film size={11}/></button>)}
      </div>
    </div>
  </section>;
}
