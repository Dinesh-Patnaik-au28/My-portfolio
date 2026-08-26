"use client";

import {useEffect,useState} from "react";

type Theme="light"|"dark";

export default function EnvironmentControl(){
  const [theme,setTheme]=useState<Theme>("light");
  useEffect(()=>{const saved=localStorage.getItem("dp-environment") as Theme|null;const initial=saved??(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");setTheme(initial);document.documentElement.dataset.environment=initial},[]);
  const change=()=>{const next=theme==="light"?"dark":"light";setTheme(next);localStorage.setItem("dp-environment",next);document.documentElement.dataset.environment=next};
  return <button className={`v5-environment ${theme}`} onClick={change} aria-label={`Change to ${theme==="light"?"dark":"light"} environment`} title="Change environment"><span><i/><b/></span><small>{theme==="light"?"DAYLIGHT":"NIGHT MODE"}</small></button>;
}
