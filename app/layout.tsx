import type { Metadata } from "next";
import "./globals.css";
import "./v5.css";
import "./v5-sections.css";
import "./v5-fixes.css";
import "./v5-universe.css";
import "./v5-fb-intro.css";
import "./v5-impact-story.css";
import "./v5-portfolio-architecture.css";
import "./v5-r2-story.css";
import "./v5-systems-positioning.css";

export const metadata:Metadata={metadataBase:new URL("https://dineshpatnaik.vercel.app"),title:"Dinesh Patnaik — Full-Stack Systems Engineer",description:"Full-Stack Systems Engineer building backend microservices, real-time event pipelines, scalable web and mobile platforms, and AI-integrated systems.",openGraph:{title:"Dinesh Patnaik — Full-Stack Systems Engineer",description:"Backend microservices, distributed systems, real-time data flow, scalable product platforms, and AI integration.",type:"website",images:[{url:"/og-v5.png",width:1731,height:909,alt:"Dinesh Patnaik — Full-Stack Systems Engineer"}]},twitter:{card:"summary_large_image",title:"Dinesh Patnaik — Full-Stack Systems Engineer",description:"Backend microservices, distributed systems, real-time data flow, scalable product platforms, and AI integration.",images:["/og-v5.png"]}};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`(function(){try{var saved=localStorage.getItem("dp-environment");var theme=saved==="dark"||saved==="light"?saved:"light";document.documentElement.dataset.environment=theme;}catch(e){document.documentElement.dataset.environment="light";}})();`}} /></head><body>{children}</body></html>}
