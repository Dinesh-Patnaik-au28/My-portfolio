"use client";

import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
export default function Cursor(){const ref=useRef<HTMLDivElement>(null);const [label,setLabel]=useState("");useEffect(()=>{const move=(event:MouseEvent)=>{if(ref.current)gsap.to(ref.current,{x:event.clientX,y:event.clientY,duration:.14,ease:"power2.out"});const target=(event.target as HTMLElement).closest<HTMLElement>("[data-cursor]");setLabel(target?.dataset.cursor??"")};window.addEventListener("mousemove",move);return()=>window.removeEventListener("mousemove",move)},[]);return <div ref={ref} className={`v5-cursor ${label?"active":""}`}><i/><span>{label}</span></div>}
