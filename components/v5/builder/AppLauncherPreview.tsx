import Image from "next/image";
import {applicationIdentities} from "../data";

export default function AppLauncherPreview(){
  return <div className="v5-phone v5-app-launcher" aria-label="Mobile home screen showing seven product applications">
    <div className="v5-phone-island"/>
    <div className="v5-launcher-status"><span>9:41</span><span>5G&nbsp;&nbsp;●</span></div>
    <div className="v5-launcher-heading"><small>PRODUCT SYSTEM</small><b>Applications</b></div>
    <div className="v5-launcher-grid">
      {applicationIdentities.map(app=><div className="v5-launcher-app" key={app.image}>
        <span><Image src={app.image} alt="" fill sizes="64px"/></span>
        <b>{app.name}</b>
      </div>)}
    </div>
    <div className="v5-launcher-pages"><i/><i className="active"/><i/></div>
    <div className="v5-launcher-dock"><i/><i/><i/><i/></div>
  </div>;
}
