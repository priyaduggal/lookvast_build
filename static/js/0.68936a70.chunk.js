(this.webpackJsonplookvast=this.webpackJsonplookvast||[]).push([[0],{479:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return o}));var r=n(38),a=(n(68),n(106)),o=function(t,e,n,o,i){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/c.innerWidth;o(e)},onEnd:function(t){var e=t.deltaX,n=c.innerWidth,a=e/n,o=t.velocityX,s=n/2,u=o>=0&&(o>.2||t.deltaX>s),h=(u?1-a:a)*n,d=0;if(h>5){var l=h/Math.abs(o);d=Math.min(l,540)}i(u,a<=0?.01:Object(r.h)(0,a,.9999),d)}})}}}]);
//# sourceMappingURL=0.68936a70.chunk.js.map