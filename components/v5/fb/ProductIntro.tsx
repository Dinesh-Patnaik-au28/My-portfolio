"use client";

import {useRef,useState,type PointerEvent as ReactPointerEvent} from "react";
import {ArrowDownRight,MousePointer2} from "lucide-react";

export default function ProductIntro(){
  const stage=useRef<HTMLDivElement>(null);
  const [open,setOpen]=useState(false);
  const move=(event:ReactPointerEvent<HTMLDivElement>)=>{const box=event.currentTarget.getBoundingClientRect();event.currentTarget.style.setProperty("--reveal-x",`${event.clientX-box.left}px`);event.currentTarget.style.setProperty("--reveal-y",`${event.clientY-box.top}px`)};
  const enterJourney=()=>document.querySelector(".v5-order-story")?.scrollIntoView({behavior:"smooth"});
  return <div className={`v5-fb-intro v5-story-bridge ${open?"open":""}`}>
    <header><span>03 / FROM PLATFORM TO PRODUCT</span><p>THE BUILDER CREATED THE FOUNDATION.</p></header>
    <div className="v5-bridge-stage" ref={stage} onPointerMove={move} onPointerEnter={()=>setOpen(true)} onPointerLeave={()=>setOpen(false)} onClick={()=>setOpen(value=>!value)}>
      <div className="v5-bridge-base"><small>A SYSTEM IS ONLY</small><h2>A PROMISE.</h2></div>
      <div className="v5-bridge-reveal" aria-hidden="true"><small>UNTIL REAL PEOPLE</small><h2>USE IT.</h2></div>
      <div className="v5-bridge-lens"><span>PRODUCTION</span><i/></div>
      <p><MousePointer2 size={12}/> MOVE TO PUT THE SYSTEM IN PEOPLE&apos;S HANDS</p>
    </div>
    <footer><div><span>APPLICATION BUILDER</span><i/><b>SHARED FOUNDATION</b><i/><strong>F&amp;B PRODUCT</strong></div><p>One production experience proved how the platform could become a product built around a real business workflow.</p><button onClick={enterJourney}>ENTER THE REAL JOURNEY <ArrowDownRight size={15}/></button></footer>
  </div>;
}
