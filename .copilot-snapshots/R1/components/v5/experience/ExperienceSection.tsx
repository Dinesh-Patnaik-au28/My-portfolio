"use client";

import {useState} from "react";
import {Award,CalendarDays,PackageCheck} from "lucide-react";

const roles=[
  {company:"CXVERSE",period:"October 2022 → Present",role:"Software Engineer",focus:"React Native, Expo, TypeScript, Application Builder and production mobile applications.",details:["10+ production applications", "50K+ users", "Application builds and releases", "OTA updates and Expo upgrades", "Production debugging"],badge:"Company Spotlight"},
  {company:"ATTAINU",period:"December 2021 → 2022",role:"Full Stack Developer Intern",focus:"Node.js work with React web exposure on a Web Builder platform.",details:["Node.js foundation", "React web work", "Web Builder platform"],badge:"Full-stack foundation"},
] as const;

export default function ExperienceSection(){
  const [active,setActive]=useState(0);
  const selected=roles[active];

  return <section id="experience" className="v5-experience-section">
    <div className="v5-experience-head">
      <span>04 / EXPERIENCE</span>
      <h2>Where the work<br/><em>became real.</em></h2>
      <p>A short career timeline showing how Dinesh moved from web/full-stack foundations into production mobile and platform engineering.</p>
    </div>

    <div className="v5-career-timeline">
      <div className="v5-career-track" aria-hidden="true"><i style={{height:active===0?"34%":"100%"}}/></div>
      <div className="v5-career-items">
        {roles.map((item,index)=><button key={item.company} className={active===index?"active":""} onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)} onClick={()=>setActive(index)}>
          <span>{String(index+1).padStart(2,"0")}</span>
          <small>{item.period}</small>
          <b>{item.company}</b>
          <p>{item.role}</p>
        </button>)}
      </div>
      <aside className="v5-career-detail" aria-live="polite">
        <div className="v5-career-badge"><Award size={15}/>{selected.badge}</div>
        <small><CalendarDays size={13}/>{selected.period}</small>
        <h3>{selected.company}</h3>
        <h4>{selected.role}</h4>
        <p>{selected.focus}</p>
        <div>{selected.details.map(item=><span key={item}><PackageCheck size={12}/>{item}</span>)}</div>
      </aside>
    </div>
  </section>;
}
