import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import "./v5.css";
import "./v5-sections.css";
import "./v5-fixes.css";
import "./v5-universe.css";
import "./v5-fb-intro.css";
import "./v5-impact-story.css";
import "./v5-portfolio-architecture.css";
import "./v5-r2-story.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders=await headers();
  const host=requestHeaders.get("host")??"localhost:3000";
  const protocol=host.startsWith("localhost")?"http":"https";
  return {
    metadataBase:new URL(`${protocol}://${host}`),
    title:"Dinesh Patnaik — Software Engineer",
    description:"Portfolio of Dinesh Patnaik, a Hyderabad-based Software Engineer who builds complex products, systems and interfaces with React Native, Expo, TypeScript and React.",
    openGraph:{title:"Dinesh Patnaik — Software Engineer",description:"Frontend and mobile engineer building app builders, web builders, product systems and polished interfaces.",type:"website",images:[{url:"/og-v5.png",width:1731,height:909,alt:"Dinesh Patnaik — Software Engineer"}]},
    twitter:{card:"summary_large_image",title:"Dinesh Patnaik — Software Engineer",description:"Frontend and mobile engineer building app builders, web builders, product systems and polished interfaces.",images:["/og-v5.png"]}
  };
}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
