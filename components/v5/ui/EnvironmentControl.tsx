"use client";

import {useEffect,useState} from "react";

type Theme="light"|"dark";

export default function EnvironmentControl(){
  const [theme,setTheme]=useState<Theme>("light");
  useEffect(()=>{
    try{
      const saved=localStorage.getItem("dp-environment") as Theme|null;
      const initial=saved==="dark"||saved==="light"?saved:"light";
      setTheme(initial);
      document.documentElement.dataset.environment=initial;
    }catch{
      document.documentElement.dataset.environment="light";
    }
  },[]);
  const change=()=>{const next=theme==="light"?"dark":"light";setTheme(next);localStorage.setItem("dp-environment",next);document.documentElement.dataset.environment=next};
  return <button className={`v5-environment ${theme}`} onClick={change} aria-label={`Change to ${theme==="light"?"dark":"light"} environment`} title="Change environment"><span><i/><b/></span><small>{theme==="light"?"DAYLIGHT":"NIGHT MODE"}</small></button>;
}
