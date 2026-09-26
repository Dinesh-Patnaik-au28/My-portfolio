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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders=await headers();
  const host=requestHeaders.get("host")??"localhost:3000";
  const protocol=host.startsWith("localhost")?"http":"https";
  return {
    metadataBase:new URL(`${protocol}://${host}`),
    title:"Dinesh Patnaik — Software Engineer",
    description:"Portfolio of Dinesh Patnaik, a Hyderabad-based Software Engineer focused on React Native, Expo, TypeScript and polished product interfaces.",
    openGraph:{title:"Dinesh Patnaik — Software Engineer",description:"React Native, Expo and TypeScript engineer building mobile applications, reusable systems and polished interfaces.",type:"website",images:[{url:"/og-v5.png",width:1731,height:909,alt:"Dinesh Patnaik — Software Engineer"}]},
    twitter:{card:"summary_large_image",title:"Dinesh Patnaik — Software Engineer",description:"React Native, Expo and TypeScript engineer building mobile applications, reusable systems and polished interfaces.",images:["/og-v5.png"]}
  };
}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
