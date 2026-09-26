/* eslint-disable @next/next/no-img-element */
"use client";

import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
const AVATAR="https://github.com/Dinesh-Patnaik-au28.png";

const productStates=[
  {id:"01",label:"ORDER CREATED",mode:"ORDERING",title:"Order confirmed",detail:"The mobile journey begins with a confirmed order.",action:"View order"},
  {id:"02",label:"PREPARING",mode:"STATUS",title:"In the kitchen",detail:"The interface reflects the latest order state.",action:"Order details"},
  {id:"03",label:"READY",mode:"PICKUP",title:"Ready for pickup",detail:"The next customer action becomes clear.",action:"I’m outside"},
  {id:"04",label:"CURBSIDE / DELIVERY",mode:"FULFILMENT",title:"Choose the handoff",detail:"Pickup and delivery branch from one product flow.",action:"Confirm handoff"},
  {id:"05",label:"LIVE TRACKING",mode:"TRACKING",title:"12 min away",detail:"Delivery progress and the latest state stay visible.",action:"Track order"},
];
const heroFlow=["USER ACTION","APP UI","STATE","REUSABLE MODULE","PRODUCTION APP"];
const builderSteps=["REQUIREMENTS","BUILDER ENGINE","REUSABLE PACKAGES","GENERATED APP","BUILD","OTA / RELEASE","APP STORE"];
const labSteps=["CAPTURE","RECONSTRUCT","UNDERSTAND","EDIT","GENERATE"];
const architecture=[
  {key:"ui",name:"UI",detail:"Navigation and product screens"},
  {key:"logic",name:"LOGIC",detail:"Ordering, curbside and tracking flows"},
  {key:"data",name:"DATA",detail:"APIs and shared application state"},
  {key:"packages",name:"PACKAGES",detail:"Reusable components across applications"},
];

function ProductPhone({state=0,compact=false}:{state?:number;compact?:boolean}){
  const current=productStates[state]??productStates[0];
  return <div className={`product-phone ${compact?"compact":""}`}>
    <div className="phone-island"/><div className="phone-status"><span>9:41</span><span>•••</span></div>
    <div className="phone-order-head"><span>ORDER #4821</span><b>{current.mode}</b></div><div className="phone-title" key={current.label}>{current.label}</div>
    <div className={`phone-visual state-${state}`}><div className="map-grid"/><div className="map-route"><i/><b>→</b><i/></div><div className="order-panel"><small>LIVE STATUS / 0{state+1}</small><strong>{current.title}</strong><p>{current.detail}</p><div className="state-meter">{productStates.map((_,index)=><i key={index} className={index<=state?"active":""}/>)}</div></div></div>
    <button className="phone-action">{current.action}<ArrowUpRight size={13}/></button>
  </div>;
}

function MiniApp({index,active=true}:{index:number;active?:boolean}){
  return <div className={`mini-app ${active?"active":""}`}><div className="mini-app-bar"><span>APP / 0{index+1}</span><i/></div><div className="mini-app-hero"/><div className="mini-app-lines"><i/><i/><i/></div><div className="mini-app-nav"><i/><i/><i/></div></div>;
}

export default function Portfolio(){
  const root=useRef<HTMLElement>(null);const cursor=useRef<HTMLDivElement>(null);
  const [menu,setMenu]=useState(false);const [heroStep,setHeroStep]=useState(0);const [productState,setProductState]=useState(0);const [builderStage,setBuilderStage]=useState(0);const [labStage,setLabStage]=useState(0);const [moduleFocus,setModuleFocus]=useState("packages");const [navState,setNavState]=useState("01 / PRODUCT");
  const go=(id:string)=>{setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:"smooth"});};

  useEffect(()=>{
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const lenis=reduced?null:new Lenis({autoRaf:true,lerp:.09});lenis?.on("scroll",ScrollTrigger.update);
    const ctx=gsap.context(()=>{
      if(!reduced){
        gsap.from(".hero-copy>*",{y:45,opacity:0,duration:1.05,stagger:.08,ease:"power4.out"});gsap.from(".system-console",{y:60,rotateX:5,opacity:0,duration:1.15,delay:.15,ease:"power4.out"});
        gsap.utils.toArray<HTMLElement>(".reveal").forEach(element=>gsap.from(element,{y:55,opacity:0,duration:.9,ease:"power3.out",scrollTrigger:{trigger:element,start:"top 84%"}}));
        gsap.to(".velocity-word",{xPercent:-8,ease:"none",scrollTrigger:{trigger:".product-intro",start:"top bottom",end:"bottom top",scrub:true}});
      }
      ScrollTrigger.create({trigger:"#product",start:"top top",end:"bottom bottom",onUpdate:self=>setProductState(Math.min(4,Math.floor(self.progress*5)))});
      ScrollTrigger.create({trigger:"#builder",start:"top top",end:"bottom bottom",onUpdate:self=>setBuilderStage(Math.min(6,Math.floor(self.progress*7)))});
      ScrollTrigger.create({trigger:"#editspace",start:"top top",end:"bottom bottom",onUpdate:self=>setLabStage(Math.min(4,Math.floor(self.progress*5)))});
      [["product","01 / PRODUCT"],["builder","02 / SYSTEM"],["engineering","03 / PLATFORM"],["editspace","04 / R&D"],["contact","05 / CONTACT"]].forEach(([id,label])=>ScrollTrigger.create({trigger:`#${id}`,start:"top 48%",end:"bottom 48%",onToggle:self=>{if(self.isActive)setNavState(label)}}));
    },root);
    const timer=window.setInterval(()=>setHeroStep(value=>(value+1)%heroFlow.length),1900);
    const onMove=(event:MouseEvent)=>{if(cursor.current)gsap.to(cursor.current,{x:event.clientX,y:event.clientY,duration:.18,ease:"power2.out"});};window.addEventListener("mousemove",onMove);
    document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach(element=>{const move=(event:MouseEvent)=>{const box=element.getBoundingClientRect();gsap.to(element,{x:(event.clientX-box.left-box.width/2)*.12,y:(event.clientY-box.top-box.height/2)*.12,duration:.25});};const leave=()=>gsap.to(element,{x:0,y:0,duration:.5,ease:"elastic.out(1,.35)"});element.addEventListener("mousemove",move);element.addEventListener("mouseleave",leave);});
    return()=>{ctx.revert();lenis?.destroy();window.clearInterval(timer);window.removeEventListener("mousemove",onMove)};
  },[]);

  return <main ref={root} className="v4-site">
    <div ref={cursor} className="custom-cursor"><i/></div><div className="grain"/>
    <nav className="v4-nav"><button className="brand" onClick={()=>go("top")}><b>DP</b><span>DINESH PATNAIK<br/>SOFTWARE ENGINEER</span></button><div className={`nav-links ${menu?"open":""}`}><button onClick={()=>go("product")}><i>01</i> Product</button><button onClick={()=>go("builder")}><i>02</i> System</button><button onClick={()=>go("engineering")}><i>03</i> Platform</button><button onClick={()=>go("editspace")}><i>04</i> R&amp;D</button><button onClick={()=>go("contact")}><i>05</i> Contact</button></div><button className="nav-progress" onClick={()=>setMenu(!menu)}><span>{navState}</span><b>{menu?"CLOSE":"INDEX"}</b></button></nav>

    <section id="top" className="v4-hero">
      <div className="hero-rule"><span>BUILD LOG / V4</span><span>HYDERABAD · INDIA</span><span>AVAILABLE SYSTEM / 01</span></div>
      <div className="hero-layout"><div className="hero-copy"><div className="identity-strip"><img src={AVATAR} alt="Dinesh Patnaik"/><div><b>Dinesh Patnaik</b><span>React Native · Expo · TypeScript</span></div></div><p className="micro"><i/> SOFTWARE ENGINEER / 4+ YEARS</p><h1><span>I build the</span><span>systems behind</span><em>mobile products.</em></h1><p className="hero-note">A user taps a button. State changes. Shared modules respond. One system becomes many production applications.</p><button data-magnetic className="trace-button" onClick={()=>setHeroStep(value=>(value+1)%heroFlow.length)}><b>▶</b><span>Run product trace</span><small>0{heroStep+1} / 05</small></button></div>
        <div className="system-console"><div className="console-chrome"><span>PRODUCT_SYSTEM.TRACE</span><span className="live-dot">● LIVE</span></div><div className="console-body"><div className="hero-device"><div className="hero-device-head"><span>9:41</span><b>ORDER / 4821</b></div><div className="hero-order-card"><small>CUSTOMER VIEW</small><strong>{heroStep===0?"Place an order":heroStep===1?"Order confirmed":heroStep===2?"State updated":heroStep===3?"Module reused":"Ready to release"}</strong><div className="hero-order-art"><i/><i/><i/></div><button onClick={()=>setHeroStep(value=>(value+1)%heroFlow.length)}>{heroStep===0?"CONFIRM ORDER":"ADVANCE STATE"}<ArrowUpRight size={12}/></button></div></div>
          <div className="trace-nodes">{heroFlow.map((label,index)=><button key={label} className={index<=heroStep?"active":""} onClick={()=>setHeroStep(index)}><i/><span>0{index+1}</span><b>{label}</b><em>{index===0?"customer input":index===1?"product screen":index===2?"shared store":index===3?"package / component":"build / release"}</em></button>)}</div>
          <div className="hero-output"><span>ONE SYSTEM</span><div>{[0,1,2].map(index=><MiniApp key={index} index={index} active={heroStep>=3}/>)}</div><b>MANY PRODUCTS</b><small>10+ PRODUCTION APPS<br/>50K+ USERS</small></div></div><div className="console-status"><span>ACTION</span><i>→</i><span>UI</span><i>→</i><span>STATE</span><i>→</i><span>PACKAGE</span><i>→</i><b>RELEASE</b></div></div></div>
      <button className="scroll-cue" onClick={()=>go("product")}><ArrowDown size={13}/> FOLLOW THIS ORDER</button>
    </section>

    <section id="product" className="product-story"><div className="product-intro"><div className="section-tag"><span>01 / PRODUCT</span><span>THIS IS WHAT I BUILD</span></div><div className="velocity-wrap"><h2 className="velocity-word">ONE ORDER / FIVE STATES / ONE CONNECTED PRODUCT</h2></div></div><div className="product-sticky"><div className="product-copy"><p className="micro">REAL MOBILE PRODUCT / STATE 0{productState+1}</p><h2 key={productStates[productState].label}>{productStates[productState].label}</h2><p>{productState<2?"Designed the mobile flow from order creation through confirmation.":productState<4?"Connected pickup actions and order state transitions.":"Surfaced delivery progress and the latest order state."}</p><div className="product-meta"><span>ROLE</span><b>Mobile engineering</b><span>SYSTEM</span><b>Ordering · Curbside · Delivery · Tracking</b><span>STACK</span><b>React Native · Expo · TypeScript · Zustand</b></div></div><div className="phone-stage"><div className="phone-depth depth-a"/><div className="phone-depth depth-b"/><ProductPhone state={productState}/><div className="phone-callout"><span>UI STATE</span><b>{productStates[productState].mode}</b><i/></div></div><div className="state-index">{productStates.map((state,index)=><button key={state.id} className={index===productState?"active":""} onClick={()=>setProductState(index)}><span>{state.id}</span><b>{state.label}</b><i/></button>)}</div></div></section>

    <section id="builder" className="builder-story"><div className="builder-sticky"><div className="builder-heading"><div className="section-tag light"><span>02 / SYSTEM</span><span>APPLICATION BUILDER</span></div><p className="micro">THE PLATFORM STORY / STAGE 0{builderStage+1}</p><h2>ONE SYSTEM.<br/><em>MANY APPS.</em></h2><p>I worked with a team of around four on an application-builder platform: requirements flow through a shared system, reusable packages and production release work.</p></div><div className="builder-machine"><div className="machine-track">{builderSteps.map((step,index)=><button key={step} className={index<=builderStage?"active":""} onClick={()=>setBuilderStage(index)}><span>0{index+1}</span><b>{step}</b><i/></button>)}</div><div className="machine-canvas"><div className="requirements-bank"><small>USER REQUIREMENTS</small>{["DELIVERY","ORDERING","CURBSIDE","TRACKING"].map((item,index)=><span key={item} className={builderStage>=index/2?"active":""}>{item}<i/></span>)}</div><div className={`engine-core stage-${builderStage}`}><div className="engine-orbit a"/><div className="engine-orbit b"/><span>BUILDER</span><b>ENGINE</b><small>CONFIGURATION<br/>+ COMPOSITION</small></div><div className="package-bank"><small>REUSABLE PACKAGES</small>{["NAV","ORDER","STATUS","TRACK"].map((item,index)=><span key={item} className={builderStage>=2?"active":""}>PKG / {item}<i>{String(index+1).padStart(2,"0")}</i></span>)}</div><div className="generated-phone"><MiniApp index={3} active={builderStage>=3}/><div className="build-stamp"><span>{builderStage<4?"ASSEMBLING":builderStage===4?"BUILDING":builderStage===5?"OTA / RELEASE":"STORE READY"}</span><i/></div></div></div><div className="machine-output"><div className="output-apps">{[0,1,2,3,4].map(index=><MiniApp key={index} index={index} active={builderStage>=3}/>)}</div><div className="scale-consequence"><span><b>10+</b> PRODUCTION APPLICATIONS</span><i/><span><b>50K+</b> USERS THROUGH THE SYSTEM</span><i/><span><b>2</b> STORE ECOSYSTEMS</span></div></div></div></div></section>

    <section id="engineering" className="engineering section-light-v4"><div className="section-tag dark"><span>03 / PLATFORM</span><span>UNDER THE HOOD</span></div><div className="engineering-head reveal"><p className="micro">THE INTERFACE IS ONLY THE TOP LAYER</p><h2>Follow a module<br/><em>through the system.</em></h2><p>Hover a layer to see where it lands. The same pieces support product screens, application logic and production work.</p></div><div className="architecture-board reveal" data-focus={moduleFocus}><div className="architecture-root"><small>GENERATED APPLICATION</small><div className="arch-apps">{[0,1,2].map(index=><MiniApp key={index} index={index} active/>)}</div></div><div className="architecture-lines"><i/><i/><i/></div><div className="architecture-modules">{architecture.map(module=><button key={module.key} className={moduleFocus===module.key?"active":""} onMouseEnter={()=>setModuleFocus(module.key)} onFocus={()=>setModuleFocus(module.key)}><span>{module.name}</span><b>{module.detail}</b><small>USED IN APP 01 · 02 · 03</small></button>)}</div><div className="architecture-base"><span>BUILDER ENGINE</span><i>+</i><span>CONFIGURATION</span></div></div>
      <div className="hood-grid reveal"><article><small>01 / SHARED</small><h3>Reusable packages</h3><p>Components and packages used across multiple production applications.</p><b>React Native · TypeScript · Zustand</b></article><article><small>02 / RELEASE</small><h3>Build to store</h3><p>Application builds, OTA updates and releases to Google Play and Apple App Store.</p><b>Expo · Android · iOS</b></article><article><small>03 / PRODUCTION</small><h3>When the app is live</h3><p>Production debugging, API work, Expo version upgrades and application architecture.</p><b>APIs · OTA · Upgrades</b></article><article><small>04 / DIRECTION</small><h3>Shared foundations</h3><p>A monorepo direction for applications, packages and shared configuration.</p><b>Apps · Packages · Configuration</b></article></div></section>

    <section id="editspace" className="editspace-lab"><div className="lab-sticky"><div className="section-tag lab"><span>04 / R&amp;D</span><span>BUILDING NEXT / EDITSPACE</span></div><div className="lab-copy"><p className="micro">MOBILE → AI → 3D / STEP 0{labStage+1}</p><h2>A room becomes<br/><em>an editable space.</em></h2><p>Editspace is the direction I’m moving toward: room capture, 3D reconstruction and editable environments brought into one product experiment.</p><div className="lab-stack">{["React Native","Expo","TypeScript","PyTorch","MASt3R","FastAPI","Uvicorn","Three.js","React Three Fiber"].map(item=><span key={item}>{item}</span>)}</div></div><div className={`room-lab lab-state-${labStage}`}><div className="lab-grid"/><div className="room-back"><i/><i/></div><div className="room-floor"/><div className="room-sofa"><i/><i/><i/></div><div className="room-table"/><div className="room-plant"><i/><i/><i/></div><div className="point-cloud">{Array.from({length:18},(_,index)=><i key={index}/>)}</div><div className="selection-frame"><span>SOFA / OBJECT 01</span></div><div className="lab-scan"/><div className="lab-readout"><span>EDITSPACE / ROOM_01</span><b>{labSteps[labStage]}</b><small>{labStage===0?"MOBILE CAPTURE":labStage===1?"3D STRUCTURE":labStage===2?"SCENE ELEMENTS":labStage===3?"SELECTED OBJECT":"EDITABLE OUTPUT"}</small></div></div><div className="lab-steps">{labSteps.map((step,index)=><button key={step} onClick={()=>setLabStage(index)} className={index===labStage?"active":""}><span>0{index+1}</span><b>{step}</b><i/></button>)}</div></div></section>

    <section className="career-system section-light-v4"><div className="section-tag dark"><span>05 / PATH</span><span>SYSTEM EVOLUTION</span></div><div className="career-map reveal"><article><span>2021</span><small>FULL STACK FOUNDATION</small><h3>Attainu</h3><p>From Dec 10, 2021<br/>React · Node.js</p><i/></article><article><span>2022 → NOW</span><small>MOBILE SYSTEMS</small><h3>CXVERSE</h3><p>Since Oct 1, 2022<br/>Mobile products · App Builder</p><b>COMPANY SPOTLIGHT</b><i/></article><article><span>NOW</span><small>AI + 3D R&amp;D</small><h3>Editspace</h3><p>Mobile · AI · 3D<br/>Current direction</p><i/></article></div></section>

    <section id="contact" className="v4-contact"><div className="section-tag contact-tag"><span>06 / CONTACT</span><span>HYDERABAD · INDIA</span></div><div className="contact-main reveal"><p className="micro">THE KIND OF WORK I LIKE</p><h2>I like turning<br/>complicated systems<br/><em>into products people<br/>actually want to use.</em></h2></div><div className="contact-row"><div className="contact-id"><img src={AVATAR} alt=""/><span><b>Dinesh Patnaik</b><small>Software Engineer · Hyderabad</small></span></div><a data-magnetic href="mailto:dineshpatnaik54@gmail.com"><Mail/> EMAIL <ArrowUpRight/></a><a data-magnetic href="https://github.com/Dinesh-Patnaik-au28" target="_blank" rel="noreferrer"><Github/> GITHUB <ArrowUpRight/></a><a data-magnetic href="https://www.linkedin.com/in/dinesh-patnaik17" target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN <ArrowUpRight/></a></div><footer><span>DP / SOFTWARE ENGINEER</span><span><MapPin size={12}/> HYDERABAD, INDIA</span><span>© 2026</span></footer></section>
  </main>;
}
