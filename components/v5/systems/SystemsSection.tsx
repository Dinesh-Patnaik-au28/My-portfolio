"use client";

import ArchitectureGraph from "./ArchitectureGraph";
import ImpactStory from "./ImpactStory";

export default function SystemsSection(){return <section id="system" className="v5-systems"><ImpactStory/><div className="v5-system-head"><span>BEAUTIFUL ON THE SURFACE. COMPLEX UNDERNEATH.</span><h2>Follow the product<br/>all the way to release.</h2><p>Hover a layer. Nearby dependencies stay visible so the complete path reads as one connected system.</p></div><ArchitectureGraph/><div className="v5-release"><div><span>PRODUCTION / RELEASE</span><h3>The interface is finished<br/>when the release is handled.</h3><p>Dinesh’s work includes application builds, OTA updates, Expo upgrades, production debugging and release handling for Google Play and Apple App Store.</p></div><div className="v5-release-track">{["DEVELOPMENT","BUILD","TEST","OTA / UPDATE","GOOGLE PLAY","APPLE APP STORE"].map((item,index)=><span key={item}><i>{String(index+1).padStart(2,"0")}</i><b>{item}</b></span>)}</div></div></section>}
