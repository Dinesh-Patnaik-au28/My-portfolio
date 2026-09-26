"use client";

import React,{useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Check} from "lucide-react";
import Image from "next/image";
import ApplicationPreview from "./ApplicationPreview";
import BuildPipeline from "./BuildPipeline";
import AppLauncherPreview from "./AppLauncherPreview";
import AppUniverse from "./AppUniverse";
import {applicationIdentities,builderModules,type BuilderModuleId} from "../data";

gsap.registerPlugin(ScrollTrigger);
export default function BuilderExperience(){
  const transition=useRef<HTMLElement>(null);const [zoomStage,setZoomStage]=useState(0);const [selected,setSelected]=useState<BuilderModuleId[]>(["navigation"]);const [buildProgress,setBuildProgress]=useState(0);const [focus,setFocus]=useState<BuilderModuleId>("navigation");
  useEffect(()=>{const trigger=ScrollTrigger.create({trigger:transition.current,start:"top top",end:"bottom bottom",onUpdate:self=>setZoomStage(Math.min(4,Math.floor(self.progress*5)))});return()=>trigger.kill()},[]);
  const toggle=(id:BuilderModuleId)=>{setFocus(id);setSelected(current=>current.includes(id)?current.filter(item=>item!==id):[...current,id]);setBuildProgress(0)};
  const build=()=>{if(!selected.length)return;setBuildProgress(1);window.setTimeout(()=>setBuildProgress(2),350);window.setTimeout(()=>setBuildProgress(3),700);window.setTimeout(()=>setBuildProgress(4),1050)};
  return <>
    <section id="product" ref={transition} className="v5-zoom-story"><div className={`v5-zoom-sticky stage-${zoomStage}`}><div className="v5-zoom-label"><span>01 / PRODUCT SYSTEM</span><b>{zoomStage<2?"THE APPLICATION":zoomStage<4?"THE SHARED SYSTEM":"ENTER BUILDER STUDIO"}</b></div><div className="v5-zoom-phone"><AppLauncherPreview/></div>{builderModules.map((module,index)=><div key={module.id} className={`v5-floating-module module-${index}`}><span>0{index+1}</span><b>{module.label}</b><small>REUSABLE MODULE</small></div>)}<div className="v5-identity-orbit">{applicationIdentities.map((app,index)=><figure key={app.image} style={{"--identity-index":index} as React.CSSProperties}><Image src={app.image} alt={app.name} fill sizes="90px"/><figcaption>{app.name}</figcaption></figure>)}</div><div className="v5-engine-core"><small>ONE UNDERLYING SYSTEM</small><b>BUILDER ENGINE</b></div><div className="v5-zoom-copy"><h2>{zoomStage<2?"A finished app is only the surface.":zoomStage<4?"Open it and the shared system appears.":"Seven identities. One engine."}</h2><p>Scroll to separate the interface into reusable modules, then watch multiple product identities converge on the same application-building foundation.</p></div></div></section>
    <section id="builder" className="v5-builder-deep">
      <div className="v5-section-head"><span>02 / APPLICATION BUILDER</span><h2>ONE BUILDER.<br/><em>MANY PRODUCTS.</em></h2><p>Business requirements become configuration, reusable packages and a release-ready application. The Builder Studio makes that system tangible.</p></div>
      <div className="v5-builder-product">
        <header><div><i/><i/><i/><b>BUILDER STUDIO</b><span>CONCEPT UI / BASED ON CONFIRMED PRODUCT DESCRIPTION</span></div><p>SYSTEM / ONLINE</p></header>
        <aside className="v5-deep-modules"><small>MODULE LIBRARY</small>{builderModules.map((module,index)=>{const active=selected.includes(module.id);return <button key={module.id} className={`${active?"active":""} ${focus===module.id?"focus":""}`} onClick={()=>toggle(module.id)}><span>0{index+1}</span><i>{active?<Check size={11}/>:"+"}</i><b>{module.label}</b><small>{module.description}</small></button>})}<div className="v5-package-drawer"><small>SHARED FOUNDATION</small>{["UI","STATE","API","NAVIGATION"].map(item=><span key={item}>PKG / {item}<i/></span>)}</div></aside>
        <div className="v5-deep-canvas"><div className="v5-canvas-ruler top"/><div className="v5-canvas-ruler side"/><ApplicationPreview modules={selected} celebrate={buildProgress===4}/><div className="v5-selection-box"><i/><i/><i/><i/><span>APPLICATION PREVIEW</span></div></div>
        <aside className="v5-deep-config"><small>CONFIGURATION</small><h3>{focus.toUpperCase()}</h3><p>{builderModules.find(item=>item.id===focus)?.description}</p><dl><div><dt>STATE</dt><dd>{selected.includes(focus)?"ATTACHED":"AVAILABLE"}</dd></div><div><dt>FOUNDATION</dt><dd>SHARED</dd></div><div><dt>OUTPUT</dt><dd>MOBILE UI</dd></div></dl><div className="v5-config-controls"><span>MODULE<i/></span><span>FLOW<i/></span><span>STATE<i/></span></div></aside>
        <BuildPipeline progress={buildProgress} onBuild={build}/>
      </div>
      <AppUniverse ready={buildProgress===4}/>
    </section>
  </>;
}
