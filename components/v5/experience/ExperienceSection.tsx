"use client";

import {useState} from "react";
import {Award,CalendarDays,PackageCheck} from "lucide-react";

const roles=[
  {company:"CXVERSE",period:"October 2022 – Present",role:"Software Engineer",focus:"Full-stack architecture, backend API systems, platform optimization, and production operations.",details:["Full-Stack Architecture: Engineered scalable web and mobile platform engines supporting 200K+ active users using Node.js, React, and TypeScript.","Backend & API Systems: Designed, documented, and deployed RESTful microservices handling ordering workflows, real-time status updates, and third-party API integrations.","System Optimization: Initiated and led a monorepo architecture transition to unify shared packages, backend contract interfaces, and CI configurations.","SDLC & Operations: Managed complete lifecycle execution in Agile sprints—from database schema design and technical specification to automated unit testing, deployment pipelines, and Tier-3 production incident triage."],badge:"Production systems ownership"},
  {company:"ATTAINU",period:"December 2021 – September 2022",role:"Full Stack Developer Intern",focus:"Built backend services and maintained the client-to-server flow of a production web portal.",details:["Developed backend REST API endpoints using Node.js for authentication, database access, and core business operations.","Maintained web portal components using React, resolving full-stack data flow bottlenecks across client and server logic."],badge:"Full-stack foundation"},
] as const;

export default function ExperienceSection(){
  const [active,setActive]=useState(0);
  const selected=roles[active];

  return <section id="experience" className="v5-experience-section">
    <div className="v5-experience-head">
      <span>04 / EXPERIENCE</span>
      <h2>Where the work<br/><em>became real.</em></h2>
      <p>From backend endpoints to platform architecture: four-plus years building and operating software across the complete delivery lifecycle.</p>
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
