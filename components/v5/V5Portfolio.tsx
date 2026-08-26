"use client";

import {useEffect,useRef,useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";
import GreetingSection from "./greeting/GreetingSection";
import HeroBuilder from "./hero/HeroBuilder";
import ProofSection from "./proof/ProofSection";
import ProjectsSection from "./projects/ProjectsSection";
import ExperienceSection from "./experience/ExperienceSection";
import ToolboxSection from "./toolbox/ToolboxSection";
import ContactSection from "./contact/ContactSection";
import Navigation from "./navigation/Navigation";
import Cursor from "./ui/Cursor";
import EnvironmentControl from "./ui/EnvironmentControl";

gsap.registerPlugin(ScrollTrigger);
export default function V5Portfolio(){
  const root=useRef<HTMLElement>(null);const [active,setActive]=useState("greeting");
  useEffect(()=>{const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const lenis=reduced?null:new Lenis({autoRaf:true,lerp:.09});lenis?.on("scroll",ScrollTrigger.update);const ctx=gsap.context(()=>{if(!reduced){gsap.utils.toArray<HTMLElement>(".v5-reveal").forEach(element=>gsap.from(element,{clipPath:"inset(0 0 100% 0)",y:35,duration:1,ease:"power4.out",scrollTrigger:{trigger:element,start:"top 82%"}}))}[["greeting","greeting"],["top","top"],["proof","proof"],["projects","projects"],["experience","experience"],["toolbox","toolbox"],["contact","contact"]].forEach(([id,value])=>ScrollTrigger.create({trigger:`#${id}`,start:"top 48%",end:"bottom 48%",onToggle:self=>{if(self.isActive)setActive(value)}}))},root);return()=>{ctx.revert();lenis?.destroy()}},[]);
  return <main ref={root} className="v5-site"><Cursor/><EnvironmentControl/><Navigation active={active}/><GreetingSection/><HeroBuilder/><ProofSection/><ProjectsSection/><ExperienceSection/><ToolboxSection/><ContactSection/></main>;
}
