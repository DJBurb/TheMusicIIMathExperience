(self.webpackChunkTheMusicIIMathExperience=self.webpackChunkTheMusicIIMathExperience||[]).push([[7009],{7009:(e,t,r)=>{"use strict";r.r(t),r.d(t,{createSwipeBackGesture:()=>s});var a=r(3874),n=r(3065);r(1354);const s=(e,t,r,s,c)=>{const i=e.ownerDocument.defaultView;return(0,n.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:r,onMove:e=>{s(e.deltaX/i.innerWidth)},onEnd:e=>{const t=i.innerWidth,r=e.deltaX/t,n=e.velocityX,s=n>=0&&(n>.2||e.deltaX>t/2),o=(s?1-r:r)*t;let h=0;if(o>5){const e=o/Math.abs(n);h=Math.min(e,540)}c(s,r<=0?.01:(0,a.d)(0,r,.9999),h)}})}}}]);