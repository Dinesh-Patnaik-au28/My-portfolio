"use client";

import Image from "next/image";

type Props={image:string;caption:string;priority?:boolean;active?:boolean};

export default function ProductionScreenshot({image,caption,priority=false,active=true}:Props){
  return <figure className={`v5-production-screen ${active?"active":""}`} aria-hidden={!active}>
    <Image src={image} alt={caption} fill sizes="(max-width: 700px) 76vw, 300px" priority={priority} quality={88}/>
  </figure>;
}
