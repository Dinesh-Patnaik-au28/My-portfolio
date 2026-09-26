"use client";

import {useEffect,useRef,useState} from "react";
import {ArrowDown,ArrowUpRight,Database,Network,PanelsTopLeft,RotateCcw,Workflow} from "lucide-react";

const components=[
  {label:"APIS",x:14,y:18,icon:Network},
  {label:"DATA",x:68,y:15,icon:Database},
  {label:"EVENTS",x:18,y:68,icon:Workflow},
  {label:"CLIENTS",x:70,y:67,icon:PanelsTopLeft},
];

export default function HeroBuilder(){
  const root=useRef<HTMLElement>(null);
  const stage=useRef<HTMLDivElement>(null);
  const [resolved,setResolved]=useState(false);
  const [active,setActive]=useState<number[]>([]);
  const toggle=(index:number)=>{setActive(current=>{const next=current.includes(index)?current.filter(item=>item!==index):[...current,index];setResolved(next.length===components.length);return next})};
  useEffect(()=>{const move=(event:PointerEvent)=>{if(!stage.current||event.pointerType==="touch")return;const box=stage.current.getBoundingClientRect();stage.current.style.setProperty("--mx",`${(event.clientX-box.left)/box.width-.5}`);stage.current.style.setProperty("--my",`${(event.clientY-box.top)/box.height-.5}`)};const node=stage.current;node?.addEventListener("pointermove",move);return()=>node?.removeEventListener("pointermove",move)},[]);
  useEffect(()=>{
    const section=root.current;if(!section)return;
    const timers:number[]=[];
    const complete=()=>{
      components.forEach((_,index)=>{
        const timer=window.setTimeout(()=>{
          setActive(current=>current.includes(index)?current:[...current,index]);
          if(index===components.length-1)setResolved(true);
        },index*140);
        timers.push(timer);
      });
    };
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){setActive(components.map((_,index)=>index));setResolved(true);return}
    const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){complete();observer.disconnect()}},{threshold:.42});
    observer.observe(section);return()=>{observer.disconnect();timers.forEach(timer=>window.clearTimeout(timer))};
  },[]);
  return <section id="top" ref={root} className="v5-hero v5-hero-final">
    <header className="v5-hero-header"><div><b>DP</b><span>DINESH PATNAIK<br/>FULL-STACK SYSTEMS ENGINEER</span></div><p>BACKEND / DISTRIBUTED SYSTEMS / PRODUCT ENGINES</p><small>HYDERABAD, INDIA</small></header>
    <div className="v5-identity-hero">
      <div className="v5-hero-copy-final">
        <span>FULL-STACK SOFTWARE ENGINEER / 4+ YEARS</span>
        <h1>Dinesh<br/><em>Patnaik</em></h1>
        <h2>Full-Stack Systems Engineer</h2>
        <p>Engineering high-throughput backend microservices, real-time event pipelines, and scalable web/mobile platforms. Specialized in Node.js, React, TypeScript, REST/gRPC APIs, distributed state, and AI integration.</p>
        <div className="v5-hero-actions"><a href="#projects">Explore Architecture &amp; Code <ArrowUpRight size={15}/></a><a href="#contact">Contact Me</a></div>
        <div className="v5-tech-strip"><i>NODE.JS</i><i>REST / GRPC</i><i>TYPESCRIPT</i><i>DISTRIBUTED STATE</i></div>
      </div>
      <div className={`v5-component-playground ${resolved?"resolved":""}`} ref={stage}>
        <div className="v5-play-grid"/>
        <div className="v5-portrait-slice"><img src="/assets/portrait/dinesh-3d.png" alt="Dinesh Patnaik"/></div>
        <div className="v5-play-core"><small>{resolved?"SYSTEM CONNECTED":"ARCHITECTURE IN MOTION"}</small><b>BUILT END TO END</b><i>{active.length}/4 LAYERS</i></div>
        {components.map((item,index)=>{const Icon=item.icon;return <button key={item.label} className={active.includes(index)?"active":""} style={{left:`${item.x}%`,top:`${item.y}%`}} onClick={()=>toggle(index)} aria-pressed={active.includes(index)}><Icon size={15}/><span>{item.label}</span></button>})}
        <div className="v5-play-lines">{components.map((item,index)=><i key={item.label} className={active.includes(index)?"active":""}/>)}</div>
        <button className="v5-play-reset" onClick={()=>{setActive([]);setResolved(false)}}><RotateCcw size={12}/> RESET</button>
        <p>Connect all four layers. The production system comes online.</p>
      </div>
    </div>
    <div className="v5-hero-foot"><span>DINESH PATNAIK / HYDERABAD</span><p>Microservices · event pipelines · scalable product platforms</p><b>EXPLORE THE ARCHITECTURE <ArrowDown size={11}/></b></div>
  </section>;
}
