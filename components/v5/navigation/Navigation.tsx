"use client";

const items=[["top","01 HOME"],["about","02 ABOUT"],["projects","03 SYSTEMS"],["experience","04 EXPERIENCE"],["toolbox","05 SKILLS"],["contact","06 CONTACT"]];
export default function Navigation({active}:{active:string}){const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});return <nav className={`v5-nav ${active==="greeting"?"hidden":""}`}><button onClick={()=>go("top")} className="v5-nav-brand">DP</button><div>{items.map(([id,label])=><button key={id} data-short={label.slice(0,2)} aria-label={label} className={active===id?"active":""} onClick={()=>go(id)}><i/>{label}</button>)}</div><span>PORTFOLIO / V5</span></nav>}
