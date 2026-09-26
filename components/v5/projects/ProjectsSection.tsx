"use client";

import {useState,type CSSProperties,type PointerEvent as ReactPointerEvent} from "react";
import {Check,MousePointer2} from "lucide-react";
import ApplicationPreview from "../builder/ApplicationPreview";
import EditspaceScene from "../editspace/EditspaceScene";
import type {BuilderModuleId} from "../data";

const appBuilderModules=[
  {id:"navigation",label:"Shell",caption:"navigation"},{id:"identity",label:"Identity",caption:"account state"},{id:"commerce",label:"Logic",caption:"business rules"},{id:"notifications",label:"Events",caption:"messaging"},
] as const satisfies readonly {id:BuilderModuleId;label:string;caption:string}[];
const editStages=["CAPTURE","QUEUE","INFERENCE","SYNC"];
const webBuilderSteps=[
  {id:"step-1",label:"1. WEBSTUDIO & CMS",title:"Visual Layout & Content Intake",content:"User designs static/marketing pages (Home, Rewards, About) inside the integrated Webstudio editor. Layout schemas and CMS dynamic content bindings are fetched via automated REST endpoints."},
  {id:"step-2",label:"2. CORE MERGE ENGINE",title:"Transactional Module Injection",content:"The core engine automatically injects transactional SaaS microservices (Ordering Flow, Cart Management, Payment Gateways, and Checkout APIs) into the Webstudio template structure."},
  {id:"step-3",label:"3. ASSET STAGING",title:"State & Route Optimization",content:"Compiled JavaScript bundles, route definitions, and database schemas are cached in Redis and MongoDB to ensure sub-100ms API response times during user navigation."},
  {id:"step-4",label:"4. HYBRID PUBLISH",title:"Zero-Downtime Deployment",content:"Upon clicking 'Publish', the system builds and deploys the unified hybrid application live to the user's custom domain, seamlessly bridging marketing pages with core checkout infrastructure."},
] as const;

function ProjectCopy({index,title,subtitle,overview,stack,highlights}:{index:string;title:string;subtitle?:string;overview:string;stack:string[];highlights:string[]}){
  return <div className="v5-project-copy">
    <span>PROJECT {index} / ENGINEERING SYSTEM CASE</span><h3>{title}</h3>{subtitle&&<h4>{subtitle}</h4>}<p>{overview}</p>
    <div className="v5-project-stack" aria-label="Technology stack">{stack.map(item=><i key={item}>{item}</i>)}</div>
    <dl className="v5-project-architecture"><div><dt>ARCHITECTURAL HIGHLIGHTS</dt><dd><ul>{highlights.map(item=><li key={item}>{item}</li>)}</ul></dd></div></dl>
  </div>;
}

function EditspaceProject(){
  const [stage,setStage]=useState(1);const [tilt,setTilt]=useState({x:0,y:0});
  const move=(event:ReactPointerEvent<HTMLDivElement>)=>{const box=event.currentTarget.getBoundingClientRect();setTilt({x:(event.clientX-box.left)/box.width-.5,y:(event.clientY-box.top)/box.height-.5})};
  return <article className="v5-project-card v5-project-edit">
    <ProjectCopy index="01" title="EDITSPACE" subtitle="AI Spatial Processing Engine" overview="Architected an end-to-end full-stack platform that ingests real-world environmental data to compute and generate interactive 2D/3D environments." stack={["Node.js","FastAPI","PyTorch","React","TypeScript","MongoDB","Docker","REST/WebSocket APIs"]} highlights={["Designed an asynchronous job queue and API gateway handling high-compute AI inference tasks between FastAPI backends and Node.js microservices.","Implemented real-time WebSocket state synchronization for dynamic 3D asset updates on client interfaces."]}/>
    <div className="v5-edit-project-demo" onPointerMove={move} style={{"--tilt-x":tilt.x,"--tilt-y":tilt.y} as CSSProperties}><EditspaceScene stage={stage}/><div className="v5-edit-project-controls">{editStages.map((item,index)=><button key={item} className={stage===index?"active":""} onClick={()=>setStage(index)}><span>0{index+1}</span>{item}</button>)}</div></div>
  </article>;
}

function WebBuilderDiagram({step}:{step:number}){
  const diagrams=[
    <><rect x="30" y="64" width="170" height="90" rx="8"/><text x="115" y="101">WEBSTUDIO</text><text className="muted" x="115" y="123">VISUAL CANVAS</text><path d="M200 109H316"/><polygon points="316,109 304,102 304,116"/><rect x="320" y="64" width="170" height="90" rx="8"/><text x="405" y="101">CUSTOM CMS</text><text className="muted" x="405" y="123">DATA STORE</text><text className="accent" x="260" y="91">REST</text></>,
    <><rect x="22" y="42" width="148" height="68" rx="8"/><text x="96" y="73">WEBSTUDIO</text><text className="muted" x="96" y="92">PAGE SCHEMA</text><rect x="22" y="134" width="148" height="68" rx="8"/><text x="96" y="165">CORE SAAS</text><text className="muted" x="96" y="184">PAYMENT API</text><path d="M170 76L282 117M170 168L282 127"/><polygon points="288,120 275,112 278,128"/><rect className="active-node" x="288" y="76" width="210" height="92" rx="8"/><text x="393" y="113">UNIFIED AST</text><text className="muted" x="393" y="135">REACT TREE</text></>,
    <><rect x="20" y="72" width="140" height="86" rx="8"/><text x="90" y="108">REDIS</text><text className="muted" x="90" y="130">CACHE LAYER</text><path d="M160 115H254M254 115H160"/><polygon points="254,115 242,108 242,122"/><polygon points="160,115 172,108 172,122"/><rect x="258" y="72" width="140" height="86" rx="8"/><text x="328" y="108">MONGODB</text><text className="muted" x="328" y="130">DB STORE</text><path d="M398 115H492M492 115H398"/><polygon points="492,115 480,108 480,122"/><polygon points="398,115 410,108 410,122"/><rect className="active-node" x="496" y="72" width="140" height="86" rx="8"/><text x="566" y="108">STATIC EDGE</text><text className="muted" x="566" y="130">&lt;100MS</text></>,
    <><rect x="22" y="54" width="150" height="64" rx="8"/><text x="97" y="84">WEBSTUDIO</text><text className="muted" x="97" y="102">MARKETING</text><rect x="22" y="140" width="150" height="64" rx="8"/><text x="97" y="170">CORE ENGINE</text><text className="muted" x="97" y="188">CHECKOUT</text><path d="M172 86L294 122M172 172L294 132"/><polygon points="300,125 287,117 290,133"/><rect className="active-node" x="300" y="82" width="190" height="92" rx="8"/><text x="395" y="118">LIVE DOMAIN</text><text className="muted" x="395" y="140">UNIFIED OUTPUT</text><path className="publish-line" d="M490 128H625"/><polygon className="publish-line" points="625,128 613,121 613,135"/></>,
  ];
  return <svg className="v5-webbuilder-diagram" viewBox="0 0 660 244" role="img" aria-label={`${webBuilderSteps[step].title} architecture diagram`}>{diagrams[step]}</svg>;
}

function HybridWebBuilderProject(){
  const [active,setActive]=useState(0);const selected=webBuilderSteps[active];
  return <article className="v5-project-card v5-project-webbuilder">
    <ProjectCopy index="02" title="HYBRID WEB BUILDER" subtitle="Core SaaS Merge Engine" overview="Engineered a hybrid website generation platform within our SaaS product. Seamlessly merges CMS-driven Webstudio layouts with core ordering, rewards, and payment microservices into a single live deployment." stack={["Node.js","React","Webstudio","Custom CMS","MongoDB","Redis","REST APIs"]} highlights={["Integrated Webstudio editor to allow end-users to visually build marketing and rewards pages.","Built a custom backend merge engine that binds transactional ordering and payment flows directly into Webstudio templates.","Implemented automated deployment pipelines to publish unified hybrid web applications to custom domains instantly."]}/>
    <div className="v5-webbuilder-demo">
      <div id="webbuilder-stage" role="tabpanel" aria-labelledby={`${selected.id}-tab`} className="v5-webbuilder-canvas" aria-live="polite"><div className="v5-webbuilder-status"><small>HYBRID PLATFORM / {selected.id.toUpperCase()}</small><span>{String(active+1).padStart(2,"0")} / 04</span></div><h4>{selected.title}</h4><p>{selected.content}</p><WebBuilderDiagram step={active}/></div>
      <div className="v5-webbuilder-tabs" role="tablist" aria-label="Hybrid Web Builder architecture stages">{webBuilderSteps.map((step,index)=><button key={step.id} id={`${step.id}-tab`} role="tab" aria-selected={active===index} aria-controls="webbuilder-stage" className={active===index?"active":""} onClick={()=>setActive(index)}><span>{String(index+1).padStart(2,"0")}</span><b>{step.label.replace(/^\d\.\s/,"")}</b></button>)}</div>
    </div>
  </article>;
}

function AppBuilderProject(){
  const [selected,setSelected]=useState<BuilderModuleId[]>(["navigation","identity"]);const toggle=(id:BuilderModuleId)=>setSelected(current=>current.includes(id)?current.filter(item=>item!==id):[...current,id]);
  return <article className="v5-project-card v5-project-app">
    <ProjectCopy index="03" title="APP STUDIO ENGINE" subtitle="Multi-Tenant Config & Build Pipeline" overview="Designed and built a platform engine from scratch capable of dynamic application generation based on structured backend schema configurations." stack={["Node.js","React","React Native","Monorepo","NPM Packages","MongoDB"]} highlights={["Established a unified Monorepo codebase housing core NPM business logic packages, microservices, and client templates.","Reduced code duplication across production services while supporting modular platform extensions."]}/>
    <div className="v5-project-builder-demo"><div className="v5-project-windowbar"><span>CONFIG ENGINE / LIVE</span><b>{selected.length}/4 MODULES</b></div><div className="v5-project-module-list">{appBuilderModules.map(module=><button key={module.id} className={selected.includes(module.id)?"active":""} onClick={()=>toggle(module.id)}><i>{selected.includes(module.id)?<Check size={10}/>:"+"}</i><b>{module.label}</b><small>{module.caption}</small></button>)}</div><div className="v5-project-phone-stage"><ApplicationPreview modules={selected}/><div className="v5-project-selection"><span>DYNAMIC CLIENT PREVIEW</span></div></div><div className="v5-project-package-strip">{["CORE NPM","API CONTRACTS","CLIENT TEMPLATE","CI PIPELINE"].map(item=><span key={item}>{item}<i/></span>)}</div></div>
  </article>;
}

export default function ProjectsSection(){return <section id="projects" className="v5-projects-section"><div className="v5-projects-head"><span>03 / FEATURED SYSTEMS</span><h2>Architecture<br/><em>in production.</em></h2><p>Three engineering cases spanning AI inference, hybrid web publishing, and multi-tenant platform infrastructure.</p></div><div className="v5-projects-stack"><EditspaceProject/><HybridWebBuilderProject/><AppBuilderProject/></div><div className="v5-projects-rule"><MousePointer2 size={13}/><span>Interact with each system to trace how data becomes a product experience.</span></div><div className="v5-project-experience-bridge"><span>The production work behind the systems</span><button onClick={()=>document.getElementById("experience")?.scrollIntoView({behavior:"smooth"})}>EXPERIENCE ↓</button></div></section>}
