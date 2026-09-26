"use client";

import Image from "next/image";
import {useRef,useState,type CSSProperties, type PointerEvent as ReactPointerEvent} from "react";
import {Move,RefreshCw,Zap} from "lucide-react";
import {applicationIdentities} from "../data";

const packages=["UI","STATE","API","NAVIGATION"];
const step=360/applicationIdentities.length;

export default function AppUniverse({ready}:{ready:boolean}){
  const [active,setActive]=useState(0);
  const [rotation,setRotation]=useState(-90);
  const drag=useRef({active:false,start:0,rotation:0,moved:false});
  const select=(index:number)=>{setActive(index);setRotation(-90-index*step)};
  const cycle=()=>select((active+1)%applicationIdentities.length);
  const down=(event:ReactPointerEvent<HTMLDivElement>)=>{drag.current={active:true,start:event.clientX,rotation,moved:false};event.currentTarget.setPointerCapture(event.pointerId)};
  const move=(event:ReactPointerEvent<HTMLDivElement>)=>{if(!drag.current.active)return;const distance=event.clientX-drag.current.start;if(Math.abs(distance)>3)drag.current.moved=true;setRotation(drag.current.rotation+distance*.35)};
  const up=(event:ReactPointerEvent<HTMLDivElement>)=>{drag.current.active=false;event.currentTarget.releasePointerCapture(event.pointerId)};
  const app=applicationIdentities[active];
  return <section className="v5-app-universe">
    <header><div><span>ONE FOUNDATION / SEVEN OUTPUTS</span><h3>Pull an application<br/>into focus.</h3></div><p>Drag the orbit, tap an app, or pulse the engine. Every identity stays connected to the same shared foundation.</p></header>
    <div className="v5-universe-workbench">
      <aside className="v5-universe-readout">
        <span>FOCUSED OUTPUT / {String(active+1).padStart(2,"0")}</span>
        <div><Image src={app.image} alt={app.name} fill sizes="76px"/></div>
        <h4>{app.name}</h4>
        <small>{ready?"BUILD READY":"INTERACTIVE PREVIEW"}</small>
        <dl>{packages.map((item,index)=><div key={item}><dt>PKG / {item}</dt><dd className={index<=active%4?"active":""}/></div>)}</dl>
      </aside>
      <div className="v5-universe-stage" onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up}>
        <div className="v5-universe-rings"><i/><i/><i/></div>
        <div className="v5-universe-orbit" style={{"--rotation":`${rotation}deg`} as CSSProperties}>
          {applicationIdentities.map((item,index)=><button key={item.image} className={index===active?"active":""} style={{"--app-angle":`${index*step}deg`,"--counter-rotation":`${-rotation-index*step}deg`} as CSSProperties} onClick={()=>{if(!drag.current.moved)select(index)}} aria-label={`Focus ${item.name}`}>
            <span><Image src={item.image} alt="" fill sizes="88px"/></span><b>{item.name}</b><small>APP {String(index+1).padStart(2,"0")}</small>
          </button>)}
        </div>
        <button className="v5-universe-core" onClick={cycle} aria-label="Cycle to the next application"><Zap size={15}/><small>SHARED SYSTEM</small><b>BUILDER<br/>ENGINE</b><span>PULSE OUTPUT <RefreshCw size={10}/></span></button>
        <div className="v5-universe-beam" style={{"--beam-angle":`${active*step+rotation}deg`} as CSSProperties}/>
        <p><Move size={13}/> DRAG THE SYSTEM</p>
      </div>
      <aside className="v5-universe-output">
        <span>APPLICATION OUTPUT</span>
        <div className="v5-output-device"><div className="v5-output-icon"><Image src={app.image} alt="" fill sizes="76px"/></div><small>COMPOSED FROM</small>{packages.map(item=><i key={item}>{item}</i>)}<b>{app.name}</b><em>READY FOR PRODUCT CONFIGURATION</em></div>
      </aside>
    </div>
  </section>;
}
