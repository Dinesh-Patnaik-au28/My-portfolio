"use client";

import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import EditspaceScene from "./EditspaceScene";
gsap.registerPlugin(ScrollTrigger);
const steps=["CAPTURE","RECONSTRUCT","UNDERSTAND","EDIT"];
export default function EditspaceSection(){const section=useRef<HTMLElement>(null);const [stage,setStage]=useState(0);useEffect(()=>{const trigger=ScrollTrigger.create({trigger:section.current,start:"top top",end:"bottom bottom",onUpdate:self=>setStage(Math.min(3,Math.floor(self.progress*4)))});return()=>trigger.kill()},[]);return <section id="editspace" ref={section} className="v5-editspace"><div className="v5-edit-sticky"><div className="v5-edit-copy"><span>05 / WHAT I’M BUILDING NEXT</span><h2>EDITSPACE</h2><h3>From room capture<br/>to editable space.</h3><p>Current R&D direction around room capture, reconstruction and editable environments.</p><div>{["React Native","Expo","TypeScript","PyTorch","MASt3R","FastAPI","Uvicorn","Three.js","React Three Fiber"].map(item=><i key={item}>{item}</i>)}</div></div><EditspaceScene stage={stage}/><div className="v5-edit-steps">{steps.map((item,index)=><button key={item} className={index===stage?"active":""} onClick={()=>setStage(index)}><span>0{index+1}</span><b>{item}</b><i/></button>)}</div></div></section>}
