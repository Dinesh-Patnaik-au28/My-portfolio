"use client";

import type {BuilderModuleId} from "../data";

export default function ApplicationPreview({modules,celebrate=false}:{modules:BuilderModuleId[];celebrate?:boolean}){
  const has=(id:BuilderModuleId)=>modules.includes(id);
  return <div className={`v5-phone ${celebrate?"celebrate":""}`} aria-label="Concept mobile application preview">
    <div className="v5-phone-island"/><div className="v5-phone-status"><span>9:41</span><span>•••</span></div>
    <div className="v5-app-head"><span>YOUR PRODUCT</span><b>{modules.length}/4 MODULES</b></div>
    <div className="v5-app-body">
      <div className={`v5-empty-state ${modules.length?"hidden":""}`}><i>+</i><b>Empty application</b><span>Select a requirement to begin</span></div>
      {has("navigation")&&<div className="v5-ui-block ordering"><small>NAVIGATION</small><strong>Application shell</strong><div><i/><i/><i/></div></div>}
      {has("commerce")&&<div className="v5-ui-row delivery"><span>COMMERCE</span><b>Transaction flow →</b></div>}
      {has("identity")&&<div className="v5-ui-row curbside"><span>IDENTITY</span><b>Account state →</b></div>}
      {has("notifications")&&<div className="v5-ui-block tracking"><small>NOTIFICATIONS</small><div className="v5-route"><i/><b>→</b><i/></div><strong>Event received</strong></div>}
    </div>
    <div className="v5-app-nav"><i/><i className="active"/><i/></div>
  </div>;
}
