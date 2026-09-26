"use client";

import {useMemo,useState,type CSSProperties} from "react";
import {Code2,Layers3,PackageCheck,Smartphone} from "lucide-react";

const dimensions={
  mobile:{label:"MOBILE",icon:Smartphone,title:"Production mobile engineering",body:"React Native, Expo and TypeScript work across production applications—not just demos.",evidence:["React Native + Expo", "TypeScript interfaces", "10+ production applications", "App builds and store releases"]},
  systems:{label:"SYSTEMS",icon:Layers3,title:"Reusable product foundations",body:"Comfortable turning repeated product logic into shared packages, modules and builder workflows.",evidence:["Application Builder", "Reusable packages", "Builder Studio", "Multiple application outputs"]},
  production:{label:"PRODUCTION",icon:PackageCheck,title:"Shipping and maintaining real apps",body:"Experience includes debugging production behavior and handling updates after release.",evidence:["Google Play releases", "Apple App Store releases", "OTA updates", "Expo upgrades"]},
  product:{label:"PRODUCT",icon:Code2,title:"Complex workflows made usable",body:"Focuses on making business rules, state and product flows understandable in the UI.",evidence:["Ordering flows", "Application configuration", "State-heavy interfaces", "Company Spotlight"]},
} as const;

type ProofKey=keyof typeof dimensions;
const keys=Object.keys(dimensions) as ProofKey[];

export default function ProofSection(){
  const [active,setActive]=useState<ProofKey>("mobile");
  const selected=dimensions[active];
  const Icon=selected.icon;
  const orbit=useMemo(()=>keys.map((key,index)=>({key,index,item:dimensions[key]})),[]);

  return <section id="proof" className="v5-proof-section">
    <div className="v5-proof-head">
      <span>02 / WHY ME</span>
      <h2>Real product work,<br/><em>not portfolio noise.</em></h2>
      <p>Dinesh has worked across mobile UI, reusable systems and release workflows where details matter after users install the app.</p>
    </div>

    <div className="v5-proof-lab">
      <aside className="v5-proof-scoreboard" aria-label="Key proof points">
        <div><b>4+</b><span>YEARS EXPERIENCE</span></div>
        <div><b>10+</b><span>PRODUCTION APPS</span></div>
        <div><b>50K+</b><span>USERS REACHED</span></div>
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
        <small>ACTIVE EVIDENCE / {selected.label}</small>
        <h3>{selected.title}</h3>
        <div>{selected.evidence.map((item,index)=><span key={item}><i>{String(index+1).padStart(2,"0")}</i>{item}</span>)}</div>
      </aside>
    </div>
  </section>;
}
