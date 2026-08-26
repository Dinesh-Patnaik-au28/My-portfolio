"use client";

import {useEffect,useRef,type PointerEvent as ReactPointerEvent} from "react";
import gsap from "gsap";

export default function GreetingSection(){
  const root=useRef<HTMLElement>(null);
  const card=useRef<HTMLDivElement>(null);
  const frame=useRef<number|null>(null);
  const point=useRef({x:0,y:0,clientX:0,clientY:0});
  const move=(event:ReactPointerEvent<HTMLElement>)=>{
    const box=event.currentTarget.getBoundingClientRect();
    point.current={x:(event.clientX-box.left)/box.width-.5,y:(event.clientY-box.top)/box.height-.5,clientX:event.clientX,clientY:event.clientY};
    if(frame.current!==null)return;
    frame.current=requestAnimationFrame(()=>{
      const section=root.current;
      const current=point.current;
      section?.style.setProperty("--hello-x",String(current.x));
      section?.style.setProperty("--hello-y",String(current.y));
      card.current?.style.setProperty("--card-rx",`${current.y*-4}deg`);
      card.current?.style.setProperty("--card-ry",`${current.x*5}deg`);
      section?.querySelectorAll<HTMLElement>(".v5-doodle").forEach(doodle=>{
        const doodleBox=doodle.getBoundingClientRect();
        const doodleX=doodleBox.left+doodleBox.width/2;
        const doodleY=doodleBox.top+doodleBox.height/2;
        const distance=Math.hypot(current.clientX-doodleX,current.clientY-doodleY);
        const strength=Math.max(0,1-distance/260);
        doodle.style.setProperty("--near",String(strength));
        doodle.style.setProperty("--push-x",`${(current.clientX-doodleX)*strength*.035}px`);
        doodle.style.setProperty("--push-y",`${(current.clientY-doodleY)*strength*.035}px`);
      });
      frame.current=null;
    });
  };
  const leave=()=>{
    card.current?.style.setProperty("--card-rx","0deg");
    card.current?.style.setProperty("--card-ry","0deg");
    root.current?.querySelectorAll<HTMLElement>(".v5-doodle").forEach(doodle=>{
      doodle.style.setProperty("--near","0");
      doodle.style.setProperty("--push-x","0px");
      doodle.style.setProperty("--push-y","0px");
    });
  };
  const scrollToHero=()=>document.getElementById("top")?.scrollIntoView({behavior:"smooth",block:"start"});

  useEffect(()=>{
    const section=root.current;
    if(!section)return;
    const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(reduced){
      section.classList.add("intro-ready");
      gsap.set(section.querySelectorAll(".intro-animate"),{clearProps:"all",opacity:1,y:0,scale:1});
      gsap.set(section.querySelector(".v5-scroll-cue"),{clearProps:"all",opacity:1,y:0});
      return()=>{if(frame.current!==null)cancelAnimationFrame(frame.current)};
    }
    const ctx=gsap.context(()=>{
      const timeline=gsap.timeline({defaults:{ease:"power3.out"},onComplete:()=>section.classList.add("intro-ready")});
      timeline
        .set(".intro-animate",{opacity:0,y:18})
        .set(".v5-scroll-cue",{opacity:0,y:12,pointerEvents:"none"})
        .to(".v5-greeting-bg",{opacity:1,duration:.3},0)
        .to(".v5-doodle",{opacity:1,y:0,scale:1,duration:.8,stagger:.08},.3)
        .to(".v5-greeting-title",{opacity:1,y:0,duration:.6},.8)
        .to(".v5-greeting-support span",{opacity:1,y:0,duration:.55,stagger:.18},1.55)
        .to(".v5-card-canvas",{opacity:1,y:0,scale:1,duration:.8},2.2)
        .to(".v5-card-line,.v5-card-node,.v5-card-layer",{opacity:1,scale:1,duration:.55,stagger:.08},2.65)
        .to(".v5-system-connector",{scaleX:1,opacity:.55,duration:.7,stagger:.12},3.15)
        .to(".v5-scroll-cue",{opacity:1,y:0,pointerEvents:"auto",duration:.65},4.45);
    },section);
    return()=>{
      if(frame.current!==null)cancelAnimationFrame(frame.current);
      ctx.revert();
    };
  },[]);

  return <section id="greeting" ref={root} className="v5-greeting" onPointerMove={move} onPointerLeave={leave}>
    <div className="v5-greeting-bg" aria-hidden="true"/>
    <div className="v5-greeting-doodles" aria-hidden="true">
      <span className="v5-doodle doodle-wire"><i/><i/><i/><b/></span>
      <span className="v5-doodle doodle-tree"><i/><i/><i/><b/></span>
      <span className="v5-doodle doodle-phone"><i/><i/><b/></span>
      <span className="v5-doodle doodle-arrow"><i/><b/></span>
      <span className="v5-doodle doodle-brackets">{`< />`}</span>
      <span className="v5-doodle doodle-layers"><i/><i/><i/></span>
      <span className="v5-doodle doodle-path"><i/><b/></span>
      <span className="v5-system-connector connector-a"/>
      <span className="v5-system-connector connector-b"/>
    </div>
    <div ref={card} className="v5-greeting-card" aria-live="polite">
      <div className="v5-card-canvas intro-animate" aria-hidden="true">
        <span className="v5-card-layer layer-a"/><span className="v5-card-layer layer-b"/><span className="v5-card-layer layer-c"/>
        <span className="v5-card-line card-line-a"/><span className="v5-card-line card-line-b"/>
        <span className="v5-card-node node-a"/><span className="v5-card-node node-b"/><span className="v5-card-node node-c"/>
      </div>
      <div className="v5-greeting-copy">
        <h1 className="v5-greeting-title intro-animate">HELLO, WELCOME.</h1>
        <p className="v5-greeting-support" aria-label="I shape digital products that feel clear useful and alive. Step inside to explore the engineering behind the interface.">
          <span className="intro-animate">I shape digital products that feel clear useful and alive.</span>
          <span className="intro-animate">Step inside to explore the engineering behind the interface.</span>
        </p>
      </div>
    </div>
    <button className="v5-scroll-cue" type="button" onClick={scrollToHero} aria-label="Scroll to hero section"><span>↓</span><b>SCROLL</b></button>
  </section>;
}
