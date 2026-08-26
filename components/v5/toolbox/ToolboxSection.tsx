"use client";

import {useState,type CSSProperties} from "react";
import {Box,Braces,Film,GitBranch,Network,Rocket,Smartphone} from "lucide-react";

const groups=[
  {key:"core",label:"CORE",icon:Smartphone,tools:["React","React Native","TypeScript","JavaScript","Expo"],preview:"mobile",title:"Interface foundations"},
  {key:"backend",label:"BACKEND / WEB",icon:Network,tools:["Node.js","Next.js","Python","MongoDB","REST APIs"],preview:"api",title:"Connected product systems"},
  {key:"motion",label:"MOTION / 3D",icon:Box,tools:["GSAP","Three.js","React Three Fiber"],preview:"motion",title:"Richer interaction layer"},
  {key:"version",label:"VERSION CONTROL",icon:GitBranch,tools:["Git","GitHub"],preview:"version",title:"Repository workflow"},
  {key:"release",label:"CI/CD / RELEASE",icon:Rocket,tools:["CI/CD","Builds","Expo EAS","OTA Updates","Store Releases"],preview:"release",title:"Production delivery flow"},
  {key:"exploring",label:"EXPLORING",icon:Braces,tools:["PyTorch","MASt3R","AI","3D / spatial workflows"],preview:"vision",title:"Experimental workspace"},
] as const;

type ToolPreview=typeof groups[number]["preview"];

function ToolVisual({preview}:{preview:ToolPreview}){
  if(preview==="version")return <div className="v5-tool-visual v5-tool-git-flow" aria-hidden="true">
    <span className="repo">Repository</span>
    <span className="mainline"/>
    <span className="branchline"/>
    <span className="merge-line"/>
    { ["Commit", "Commit", "Commit"].map((label,index)=><b key={`${label}-${index}`} style={{"--commit-index":index} as CSSProperties}>{label}</b>) }
    <em>Pull Request</em>
    <strong>Merge</strong>
  </div>;

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
      <span>05 / TOOLBOX</span>
      <h2>Tools I build with<br/><em>and explore.</em></h2>
      <p>A working toolbox: mobile first, web/backend capable, motion-aware, and curious about AI/computer vision.</p>
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
