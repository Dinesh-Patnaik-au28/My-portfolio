"use client";

import Image from "next/image";
import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages=[
  {eyebrow:"THE OLD PATTERN",title:"Seven apps. Seven versions of the same work.",body:"Navigation, commerce, identity and notifications were rebuilt product by product. Every new requirement multiplied maintenance."},
  {eyebrow:"THE SHIFT",title:"Move the repeatable work into one foundation.",body:"Dinesh separated shared product capabilities from brand-specific decisions—so the system could be reused without making every app feel the same."},
  {eyebrow:"THE PROOF",title:"The foundation becomes a real product.",body:"Bawarchi is not a mockup of the idea. It is the production workflow shaped for ordering, delivery and the restaurant’s actual business rules."},
  {eyebrow:"THE OUTCOME",title:"Build once. Create value in three directions.",body:"Clients get faster adaptation. Product teams get a foundation they can extend. Customers get an experience that still feels made for them."}
] as const;

const fragments=["NAV","CART","IDENTITY","NOTIFY","NAV","CART","IDENTITY","NOTIFY"];

export default function ImpactStory(){
  const root=useRef<HTMLElement>(null);
  const [stage,setStage]=useState(0);

  useEffect(()=>{
    const trigger=ScrollTrigger.create({
      trigger:root.current,
      start:"top top",
      end:"bottom bottom",
      onUpdate:self=>setStage(Math.min(stages.length-1,Math.floor(self.progress*stages.length)))
    });
    return()=>trigger.kill();
  },[]);

  const goTo=(index:number)=>{
    const el=root.current;
    if(!el)return;
    const top=window.scrollY+el.getBoundingClientRect().top;
    const distance=el.offsetHeight-window.innerHeight;
    window.scrollTo({top:top+distance*((index+.15)/stages.length),behavior:"smooth"});
  };

  return <section ref={root} id="impact" className={`v5-impact-story stage-${stage}`}>
    <div className="v5-impact-sticky">
      <header className="v5-impact-header"><span>04 / WHY THIS WORK MATTERS</span><b>{String(stage+1).padStart(2,"0")} / 04</b></header>
      <div className="v5-impact-copy" aria-live="polite">
        <span>{stages[stage].eyebrow}</span>
        <h2>{stages[stage].title}</h2>
        <p>{stages[stage].body}</p>
      </div>
      <div className="v5-impact-scene" aria-hidden="true">
        <div className="v5-impact-orbit"/>
        <div className="v5-impact-fragments">{fragments.map((item,index)=><span key={`${item}-${index}`}><i>{String(index+1).padStart(2,"0")}</i>{item}</span>)}</div>
        <div className="v5-impact-core"><small>SHARED</small><b>BUILDER</b><i/></div>
        <div className="v5-impact-product"><div><Image src="/assets/app-identities/bawarchi.png" alt="" fill sizes="150px"/></div><span>REAL PRODUCT</span><b>BAWARCHI</b></div>
        <div className="v5-impact-values">
          <span className="client"><i>01</i><b>CLIENTS</b><small>adapt faster</small></span>
          <span className="team"><i>02</i><b>PRODUCT TEAM</b><small>extend one system</small></span>
          <span className="users"><i>03</i><b>END USERS</b><small>get the right experience</small></span>
        </div>
        <p className="v5-impact-scene-note">{stage===0?"DUPLICATION GROWS WITH EVERY PRODUCT":stage===1?"REPEATABLE CAPABILITY MOVES TO THE CENTER":stage===2?"SHARED FOUNDATION + BUSINESS-SPECIFIC EXPERIENCE":"ONE FOUNDATION / MULTIPLE FORMS OF VALUE"}</p>
      </div>
      <div className="v5-impact-nav" role="navigation" aria-label="Impact story stages">{stages.map((item,index)=><button key={item.eyebrow} className={index===stage?"active":""} onClick={()=>goTo(index)}><i>{String(index+1).padStart(2,"0")}</i><span>{item.eyebrow}</span></button>)}</div>
    </div>
  </section>;
}
