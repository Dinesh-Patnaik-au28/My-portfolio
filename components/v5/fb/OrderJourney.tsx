"use client";

import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import ProductionScreenshot from "./ProductionScreenshot";
import {productionJourney} from "../data";
import ProductIntro from "./ProductIntro";

gsap.registerPlugin(ScrollTrigger);

export default function OrderJourney(){
  const section=useRef<HTMLDivElement>(null);
  const [state,setState]=useState(0);
  useEffect(()=>{const trigger=ScrollTrigger.create({trigger:section.current,start:"top top",end:"bottom bottom",onUpdate:self=>setState(Math.min(productionJourney.length-1,Math.floor(self.progress*productionJourney.length)))});return()=>trigger.kill()},[]);
  const current=productionJourney[state];
  return <section id="fb" className="v5-fb">
    <ProductIntro/>
    <div className="v5-order-story" ref={section}>
      <div className="v5-order-sticky">
        <div className="v5-order-copy">
          <span>PRODUCT FLOW / {String(state+1).padStart(2,"0")}—{String(productionJourney.length).padStart(2,"0")}</span>
          <h3>{current.state}</h3>
          <p>{current.title}. {current.caption}.</p>
          <div>{productionJourney.map((item,index)=><button key={item.state} className={index===state?"active":""} onClick={()=>setState(index)} aria-label={`Show ${item.state}`}><i/>{item.state}</button>)}</div>
        </div>
        <div className="v5-real-device" aria-live="polite">
          <div className="v5-real-device-island"/>
          {productionJourney.map((item,index)=><ProductionScreenshot key={item.image} image={item.image} caption={item.caption} active={index===state} priority={index===0}/>) }
          <div className="v5-device-scan" key={state}/>
        </div>
        <aside className="v5-order-engineering">
          <small>ACTIVE PRODUCT STATE</small><b>{current.focus}</b><p>{current.caption}</p>
          <div className="v5-journey-meter"><i style={{width:`${((state+1)/productionJourney.length)*100}%`}}/></div>
          {["REACT NATIVE","STATE MANAGEMENT","API INTEGRATION","PRODUCTION DEBUGGING","APP RELEASES"].map(item=><span key={item}>{item}<i/></span>)}
        </aside>
      </div>
    </div>
  </section>;
}
