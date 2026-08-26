"use client";

const dots=Array.from({length:34});
export default function EditspaceScene({stage}:{stage:number}){return <div className={`v5-room stage-${stage}`}><div className="v5-room-grid"/><div className="v5-room-shell"><div className="v5-room-wall"><i/><i/></div><div className="v5-room-floor"/><div className="v5-room-sofa"><i/><i/><i/></div><div className="v5-room-table"/><div className="v5-room-plant"><i/><i/><i/></div></div><div className="v5-point-cloud">{dots.map((_,index)=><i key={index}/>)}</div><div className="v5-object-select"><span>OBJECT / SOFA</span></div><div className="v5-room-scan"/><div className="v5-room-hud"><span>EDITSPACE / ROOM_01</span><b>{["CAPTURE","RECONSTRUCT","UNDERSTAND","EDIT"][stage]}</b><small>R&D CONCEPT VISUAL</small></div></div>}
