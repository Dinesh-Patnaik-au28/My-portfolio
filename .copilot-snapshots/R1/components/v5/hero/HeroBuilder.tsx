"use client";

import {useEffect,useRef,useState} from "react";
import {ArrowDown,Braces,Layers3,MousePointer2,RotateCcw,Sparkles} from "lucide-react";

const components=[
  {label:"LOGIC",x:14,y:18,icon:Braces},
  {label:"STATE",x:68,y:15,icon:Layers3},
  {label:"MOTION",x:18,y:68,icon:Sparkles},
  {label:"INPUT",x:70,y:67,icon:MousePointer2},
];

export default function HeroBuilder(){
  const stage=useRef<HTMLDivElement>(null);
  const [resolved,setResolved]=useState(false);
  const [active,setActive]=useState<number[]>([]);
  const toggle=(index:number)=>{setActive(current=>{const next=current.includes(index)?current.filter(item=>item!==index):[...current,index];setResolved(next.length===components.length);return next})};
  useEffect(()=>{const move=(event:PointerEvent)=>{if(!stage.current||event.pointerType==="touch")return;const box=stage.current.getBoundingClientRect();stage.current.style.setProperty("--mx",`${(event.clientX-box.left)/box.width-.5}`);stage.current.style.setProperty("--my",`${(event.clientY-box.top)/box.height-.5}`)};const node=stage.current;node?.addEventListener("pointermove",move);return()=>node?.removeEventListener("pointermove",move)},[]);
  return <section id="top" className="v5-hero v5-hero-final">
    <header className="v5-hero-header"><div><b>DP</b><span>DINESH PATNAIK<br/>SOFTWARE ENGINEER</span></div><p>FRONTEND / MOBILE / PRODUCT SYSTEMS</p><small>HYDERABAD, INDIA</small></header>
    <div className="v5-identity-hero">
      <div className="v5-hero-copy-final">
        <span>SOFTWARE ENGINEER / 4+ YEARS</span>
        <h1>Complex logic.<br/><em>Beautiful UI.</em></h1>
        <p>I turn product logic, shared systems and mobile constraints into interfaces people can understand and use.</p>
        <div className="v5-tech-strip"><i>REACT NATIVE</i><i>EXPO</i><i>TYPESCRIPT</i><i>REACT</i></div>
      </div>
      <div className={`v5-component-playground ${resolved?"resolved":""}`} ref={stage}>
        <div className="v5-play-grid"/>
        <div className="v5-portrait-slice"><img src="https://github.com/Dinesh-Patnaik-au28.png" alt="Dinesh Patnaik"/><span>DINESH / 01</span></div>
        <div className="v5-play-core"><small>{resolved?"INTERFACE RESOLVED":"ASSEMBLE THE INTERFACE"}</small><b>{resolved?"BEAUTIFUL UI":"COMPLEX LOGIC"}</b><i>{active.length}/4 COMPONENTS</i></div>
        {components.map((item,index)=>{const Icon=item.icon;return <button key={item.label} className={active.includes(index)?"active":""} style={{left:`${item.x}%`,top:`${item.y}%`}} onClick={()=>toggle(index)} aria-pressed={active.includes(index)}><Icon size={15}/><span>{item.label}</span></button>})}
        <div className="v5-play-lines">{components.map((item,index)=><i key={item.label} className={active.includes(index)?"active":""}/>)}</div>
        <button className="v5-play-reset" onClick={()=>{setActive([]);setResolved(false)}}><RotateCcw size={12}/> RESET</button>
        <p>Tap all four primitives. The system organizes itself.</p>
      </div>
    </div>
    <div className="v5-hero-foot"><span>DINESH PATNAIK / HYDERABAD</span><p>Mobile interfaces · application builders · reusable product systems</p><b>EXPLORE THE PORTFOLIO <ArrowDown size={11}/></b></div>
  </section>;
}
