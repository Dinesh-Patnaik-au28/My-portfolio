"use client";

import {useState,type CSSProperties,type PointerEvent as ReactPointerEvent} from "react";
import {Check,MousePointer2} from "lucide-react";
import ApplicationPreview from "../builder/ApplicationPreview";
import EditspaceScene from "../editspace/EditspaceScene";
import type {BuilderModuleId} from "../data";

const appBuilderModules=[
  {id:"navigation",label:"Shell",caption:"navigation"},
  {id:"identity",label:"Identity",caption:"account state"},
  {id:"commerce",label:"Flow",caption:"business logic"},
  {id:"notifications",label:"Events",caption:"messaging"},
] as const satisfies readonly {id:BuilderModuleId;label:string;caption:string}[];

const webSections=["PAGE","CONTENT","COMPONENTS","DATA","PUBLISH"];
const editStages=["CAPTURE","RECONSTRUCT","UNDERSTAND","EDIT"];

function AppBuilderProject(){
  const [selected,setSelected]=useState<BuilderModuleId[]>(["navigation","identity"]);
  const toggle=(id:BuilderModuleId)=>setSelected(current=>current.includes(id)?current.filter(item=>item!==id):[...current,id]);

  return <article className="v5-project-card v5-project-app">
    <div className="v5-project-copy">
      <span>PROJECT 01 / APP BUILDER</span>
      <h3>APP BUILDER</h3>
      <p>A reusable application-building system for creating multiple applications around different business requirements.</p>
      <dl>
        <div><dt>ROLE</dt><dd>Built mobile interfaces, reusable packages/components, Builder Studio workflows, and helped with application builds and releases.</dd></div>
        <div><dt>TECH</dt><dd>React Native · Expo · TypeScript · JavaScript · React · Zustand</dd></div>
        <div><dt>INTERESTING</dt><dd>Different applications can be assembled from the same underlying system without rebuilding every piece.</dd></div>
      </dl>
    </div>
    <div className="v5-project-builder-demo">
      <div className="v5-project-windowbar"><span>BUILDER STUDIO / CONCEPT</span><b>{selected.length}/4 MODULES</b></div>
      <div className="v5-project-module-list">{appBuilderModules.map(module=><button key={module.id} className={selected.includes(module.id)?"active":""} onClick={()=>toggle(module.id)}><i>{selected.includes(module.id)?<Check size={10}/>:"+"}</i><b>{module.label}</b><small>{module.caption}</small></button>)}</div>
      <div className="v5-project-phone-stage"><ApplicationPreview modules={selected}/><div className="v5-project-selection"><span>APPLICATION PREVIEW</span></div></div>
      <div className="v5-project-package-strip">{["UI PKG","STATE PKG","API PKG","RELEASE"].map(item=><span key={item}>{item}<i/></span>)}</div>
    </div>
  </article>;
}

function WebBuilderProject(){
  const [active,setActive]=useState(2);
  return <article className="v5-project-card v5-project-web">
    <div className="v5-project-copy">
      <span>PROJECT 02 / WEB BUILDER / CXVERSE</span>
      <h3>WEB BUILDER</h3>
      <p>A builder-driven web platform for creating structured digital experiences, where frontend systems, content, and backend services come together.</p>
      <dl>
        <div><dt>ROLE</dt><dd>Contributed primarily to the frontend experience, building and refining the interfaces and interactions that make the builder usable.</dd></div>
        <div><dt>TECH</dt><dd>React · Next.js · Remix · PHP · Python · SQL · OAuth</dd></div>
        <div><dt>INTERESTING</dt><dd>The interesting part was making a complex builder system feel approachable turning structured content, reusable sections and underlying services into a web experience people could actually work with.</dd></div>
      </dl>
    </div>
    <div className="v5-web-builder-demo">
      <div className="v5-web-outline">
        {webSections.map((item,index)=><button key={item} className={active===index?"active":""} onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)} onClick={()=>setActive(index)}><span>0{index+1}</span><b>{item}</b></button>)}
      </div>
      <div className="v5-web-page-preview">
        <div className={`v5-web-section section-${active}`}><small>{webSections[active]} STEP</small><b>Composable page section</b><p>Build a page from reusable pieces, then shape the experience.</p></div>
        <div className="v5-web-browser"><i/><i/><i/><span>/builder/page</span></div>
        <div className="v5-web-wireframe"><i/><i/><i/><i/></div>
      </div>
    </div>
  </article>;
}

function EditspaceProject(){
  const [stage,setStage]=useState(1);
  const [tilt,setTilt]=useState({x:0,y:0});
  const move=(event:ReactPointerEvent<HTMLDivElement>)=>{const box=event.currentTarget.getBoundingClientRect();setTilt({x:(event.clientX-box.left)/box.width-.5,y:(event.clientY-box.top)/box.height-.5})};

  return <article className="v5-project-card v5-project-edit">
    <div className="v5-project-copy">
      <span>PROJECT 03 / EDITSPACE — CURRENTLY BUILDING</span>
      <h3>EDITSPACE</h3>
      <p>Exploring how real-world spaces can become editable 3D environments.</p>
      <dl>
        <div><dt>ROLE</dt><dd>Current experimentation across mobile capture, backend services, AI/computer vision and interactive 3D.</dd></div>
        <div><dt>TECH</dt><dd>React Native · Expo · TypeScript · PyTorch · MASt3R · FastAPI · Uvicorn · Three.js · React Three Fiber</dd></div>
        <div><dt>INTERESTING</dt><dd>The interface has to explain an uncertain 3D/AI pipeline in a way people can manipulate.</dd></div>
      </dl>
    </div>
    <div className="v5-edit-project-demo" onPointerMove={move} style={{"--tilt-x":tilt.x,"--tilt-y":tilt.y} as CSSProperties}>
      <EditspaceScene stage={stage}/>
      <div className="v5-edit-project-controls">{editStages.map((item,index)=><button key={item} className={stage===index?"active":""} onClick={()=>setStage(index)}><span>0{index+1}</span>{item}</button>)}</div>
    </div>
  </article>;
}

export default function ProjectsSection(){
  return <section id="projects" className="v5-projects-section">
    <div className="v5-projects-head">
      <span>04 / PROJECTS</span>
      <h2>Things<br/><em>I’ve built.</em></h2>
      <p>A few products, systems and experiments I’ve spent a lot of time getting right.</p>
    </div>
    <div className="v5-projects-stack">
      <AppBuilderProject/>
      <WebBuilderProject/>
      <EditspaceProject/>
    </div>
    <div className="v5-projects-rule"><MousePointer2 size={13}/><span>Explore the previews, but the work stays the point.</span></div>
    <div className="v5-project-experience-bridge"><span>Where I built these</span><button onClick={()=>document.getElementById("experience")?.scrollIntoView({behavior:"smooth"})}>EXPERIENCE ↓</button></div>
  </section>;
}
