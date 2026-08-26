"use client";

const items=[["greeting","01 HELLO"],["top","02 ME"],["proof","03 THINK"],["projects","04 BUILD"],["experience","05 EXPERIENCE"],["toolbox","06 TOOLBOX"],["contact","07 CONTACT"]];
export default function Navigation({active}:{active:string}){const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"});return <nav className={`v5-nav ${active==="greeting"?"hidden":""}`}><button onClick={()=>go("top")} className="v5-nav-brand">DP</button><div>{items.map(([id,label])=><button key={id} className={active===id?"active":""} onClick={()=>go(id)}><i/>{label}</button>)}</div><span>PORTFOLIO / V5</span></nav>}
