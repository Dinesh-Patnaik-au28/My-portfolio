"use client";

const items=[["top","01 ME"],["proof","02 PROOF"],["projects","03 PROJECTS"],["experience","04 EXPERIENCE"],["toolbox","05 TOOLBOX"],["contact","06 CONTACT"]];
export default function Navigation({active}:{active:string}){const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});return <nav className="v5-nav"><button onClick={()=>go("top")} className="v5-nav-brand">DP</button><div>{items.map(([id,label])=><button key={id} className={active===id?"active":""} onClick={()=>go(id)}><i/>{label}</button>)}</div><span>PORTFOLIO / V5</span></nav>}
