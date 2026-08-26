"use client";

import {useState,type CSSProperties,type PointerEvent as ReactPointerEvent} from "react";
import {ArrowUpRight,Github,Linkedin,Mail,MapPin} from "lucide-react";

export default function ContactSection(){
  const [signal,setSignal]=useState({x:50,y:50});
  const move=(event:ReactPointerEvent<HTMLElement>)=>{const box=event.currentTarget.getBoundingClientRect();setSignal({x:((event.clientX-box.left)/box.width)*100,y:((event.clientY-box.top)/box.height)*100})};

  return <section id="contact" className="v5-contact-section" onPointerMove={move} style={{"--signal-x":`${signal.x}%`,"--signal-y":`${signal.y}%`} as CSSProperties}>
    <div className="v5-contact-signal" aria-hidden="true"><i/><i/><i/></div>
    <div className="v5-contact-main">
      <span>06 / CONTACT</span>
      <h2>Let’s talk about<br/><em>building useful interfaces.</em></h2>
      <p>Dinesh Patnaik · Software Engineer · Hyderabad, India</p>
    </div>
    <div className="v5-contact-links-final">
      <a href="mailto:dineshpatnaik54@gmail.com" data-cursor="EMAIL"><Mail/>dineshpatnaik54@gmail.com<ArrowUpRight/></a>
      <a href="https://github.com/Dinesh-Patnaik-au28" target="_blank" rel="noreferrer" data-cursor="GITHUB"><Github/>GitHub<ArrowUpRight/></a>
      <a href="https://www.linkedin.com/in/dinesh-patnaik17" target="_blank" rel="noreferrer" data-cursor="LINKEDIN"><Linkedin/>LinkedIn<ArrowUpRight/></a>
    </div>
    <footer><span>DP / PORTFOLIO</span><span><MapPin size={11}/> HYDERABAD, INDIA</span><span>REACT NATIVE · EXPO · TYPESCRIPT</span></footer>
  </section>;
}
