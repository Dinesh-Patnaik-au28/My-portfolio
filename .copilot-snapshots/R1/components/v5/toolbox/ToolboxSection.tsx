"use client";

import {useState,type CSSProperties} from "react";
import {Box,Braces,Film,Network,Smartphone} from "lucide-react";

const groups=[
  {key:"core",label:"CORE",icon:Smartphone,tools:["React Native","Expo","TypeScript","React","Zustand"],preview:"mobile"},
  {key:"backend",label:"BACKEND / WEB",icon:Network,tools:["Node.js","Express","Next.js","MongoDB","Prisma"],preview:"api"},
  {key:"motion",label:"MOTION / 3D",icon:Box,tools:["GSAP","Three.js","React Three Fiber"],preview:"motion"},
  {key:"experimenting",label:"EXPERIMENTING",icon:Braces,tools:["AI","PyTorch","MASt3R","Computer Vision"],preview:"vision"},
] as const;

export default function ToolboxSection(){
  const [active,setActive]=useState(0);
  const selected=groups[active];
  const Icon=selected.icon;

  return <section id="toolbox" className="v5-toolbox-section">
    <div className="v5-toolbox-head">
      <span>05 / TOOLBOX</span>
      <h2>Tools he uses<br/><em>and plays with.</em></h2>
      <p>The stack is presented as working material: mobile first, web/backend capable, motion-aware and currently experimenting with AI/computer vision.</p>
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
          <b>{selected.preview==="mobile"?"Mobile interface surface":selected.preview==="api"?"API + data layer":selected.preview==="motion"?"Interaction timeline":"Vision experiment"}</b>
          <div className="v5-tool-visual" aria-hidden="true"><i/><i/><i/><i/><i/></div>
        </div>
      </div>

      <div className="v5-tool-cloud" aria-live="polite">
        {selected.tools.map((tool,index)=><button key={tool} style={{"--tool-index":index} as CSSProperties}><span>{tool}</span><Film size={11}/></button>)}
      </div>
    </div>
  </section>;
}
