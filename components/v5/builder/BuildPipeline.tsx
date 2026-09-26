"use client";

import {Check,Play} from "lucide-react";
const steps=["CONFIGURE","COMPOSE","BUILD","RELEASE"];
export default function BuildPipeline({progress,onBuild}:{progress:number;onBuild:()=>void}){return <div className="v5-deep-pipeline"><div>{steps.map((step,index)=><span key={step} className={index<=progress?"active":""}><i>{index<progress?<Check size={10}/>:String(index+1).padStart(2,"0")}</i><b>{step}</b></span>)}</div><button onClick={onBuild}><Play size={12}/>{progress===4?"APPLICATION READY":"BUILD APPLICATION"}</button></div>}
