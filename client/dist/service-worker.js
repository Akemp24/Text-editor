if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let t={};const f=e=>d(e,n),l={module:{uri:n},exports:t,require:f};i[n]=Promise.all(r.map((e=>l[e]||f(e)))).then((e=>(s(...e),t)))}}define(["./workbox-24d5432a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"database.bundle.js",revision:"a147658b03716a26d7b2e4e131ec0847"},{url:"database.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"editor.bundle.js",revision:"68f831575dd85dc22678520e3eabf3e4"},{url:"editor.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"header.bundle.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"index.html",revision:"99b9022ce8ac9109288e1f051486fab9"},{url:"install.bundle.js",revision:"d3aa6112c6032ff6e28e574e1cafe694"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"12f6818c1d0e7a7c8a7a25d2bdfe529b"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"src-sw.js",revision:"6b594a40c20a556369fb77de648b5021"}],{})}));
