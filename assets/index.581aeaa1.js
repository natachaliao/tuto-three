import{T as F,O as P,a as _,F as O,W as z,S as B,C as A,P as G,A as j,b as H,c as E,d as W,G as C,e as I,f as x,M as L,g as h,h as U,V as b,B as q,i as p,j as D}from"./vendor.78d57738.js";const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};N();const M=window.innerWidth,k=window.innerHeight,d=new F;new P;new _;const R=new O,T=document.querySelector("canvas"),m=new z({canvas:T,antialias:!0});m.setSize(M,k);const c=new B;c.background=new A(65280);const X=75,V=M/k,J=.1,K=1e4,u=new G(X,V,J,K);u.position.z=5;const Y=new j(2);c.add(Y);const Z=new H(9474192),l=new E(16777215,1);l.position.set(4,3,5);c.add(Z);c.add(l);const $=new W(l,1);c.add($);const Q=new C,f=Q.addFolder("PointLight");f.add(l.position,"x",-10,10,1);f.add(l.position,"y",-10,10,1);f.add(l.position,"z",-10,10,1);f.add(l,"intensity",0,10,1);f.add(l,"distance",0,10,1);const g=new I(u,m.domElement);g.maxDistance=9;g.minDistance=3.5;function ee(){const n=d.load("/assets/pluto_texture.jpg"),t=d.load("/assets/pluto_bump.jpg"),s=new x,a=new L({map:n,bumpMap:t,bumpScale:.05});return new h(s,a)}const y=ee();c.add(y);let r;function te(){const n=s=>{r=s,r.scale.multiplyScalar(.01),c.add(r)},t=s=>{alert(s)};R.load("/assets/UFO_FBX/Low_poly_UFO.FBX",n,void 0,t)}te();function ne(n,t,s,a,e){const o=new x(n),i=new h(o,e);return i.position.set(t,s,a),i}function oe(n,t,s,a,e,o){const i=Math.random()*(t-n)+n,w=Math.random()*(a-s)+s,v=Math.random()*(o-e)+e;return new b(i,w,v)}function se(n){const t=new L({color:16249734}),s=new U;for(let a=0;a<n;a++){let e=oe(-6,6,-3,3,-10,10),o=ne(.05,e.x,e.y,e.z,t);s.add(o)}return s}const ae=se(100);c.add(ae);function re(){const n=window.innerWidth,t=window.innerHeight;u.aspect=n/t,u.updateProjectionMatrix(),m.setSize(n,t)}function ie(){const n=new q(10,10,10),t=[new p({map:d.load("/assets/kurt/space_ft.png")}),new p({map:d.load("/assets/kurt/space_bk.png")}),new p({map:d.load("/assets/kurt/space_up.png")}),new p({map:d.load("/assets/kurt/space_dn.png")}),new p({map:d.load("/assets/kurt/space_rt.png")}),new p({map:d.load("/assets/kurt/space_lf.png")})];return t.forEach(a=>{a.side=D}),new h(n,t)}const ce=ie();c.add(ce);window.addEventListener("resize",re);function de(n,t,s,a,e){const o=t+Math.cos(n)*e,i=s+Math.sin(n)*e,w=a+Math.cos(n)*e;return new b(o,i,w)}function S(){const n=Date.now()*5e-4;if(requestAnimationFrame(S),g.update(),y.rotation.x+=.001,y.rotation.y-=.001,r){const t=de(n,0,0,0,2);(r.position.x>=0&&t.x<=0||r.position.x<=0&&t.x>=0)&&r.up.set(0,-r.up.y,0),r.position.set(t.x,t.y,t.z),r.lookAt(0,0,0),r.rotateY(Math.PI/2),r.rotateZ(-Math.PI/2)}m.render(c,u)}S();