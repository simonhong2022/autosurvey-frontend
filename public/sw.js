if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),f={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts("fallback-kDm7pBoCD_AsfQVgsiCqp.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/114-fc2817bd0e1994fc.js",revision:"fc2817bd0e1994fc"},{url:"/_next/static/chunks/115-c5c38e2829d6a67f.js",revision:"c5c38e2829d6a67f"},{url:"/_next/static/chunks/173-36ec85c0e3d79d07.js",revision:"36ec85c0e3d79d07"},{url:"/_next/static/chunks/196-67372d21c62c54b9.js",revision:"67372d21c62c54b9"},{url:"/_next/static/chunks/229.0a7b33d76dbc83f5.js",revision:"0a7b33d76dbc83f5"},{url:"/_next/static/chunks/302-58f7e3ba298489c5.js",revision:"58f7e3ba298489c5"},{url:"/_next/static/chunks/353-ca7f36c9816f853f.js",revision:"ca7f36c9816f853f"},{url:"/_next/static/chunks/372-f8bae41abeed0dca.js",revision:"f8bae41abeed0dca"},{url:"/_next/static/chunks/473-c515037cffc5dc81.js",revision:"c515037cffc5dc81"},{url:"/_next/static/chunks/538-7f630eede5311d86.js",revision:"7f630eede5311d86"},{url:"/_next/static/chunks/674a26a7-990ae0457bb622ee.js",revision:"990ae0457bb622ee"},{url:"/_next/static/chunks/692-ea1b8958f1f8c7f8.js",revision:"ea1b8958f1f8c7f8"},{url:"/_next/static/chunks/6c44d60f.21bf4415b3a8fa4a.js",revision:"21bf4415b3a8fa4a"},{url:"/_next/static/chunks/780-0ce430882cb9f023.js",revision:"0ce430882cb9f023"},{url:"/_next/static/chunks/871-75e55fde4baa6a9c.js",revision:"75e55fde4baa6a9c"},{url:"/_next/static/chunks/910-3592e6e63c309921.js",revision:"3592e6e63c309921"},{url:"/_next/static/chunks/917-42b606fd6c711708.js",revision:"42b606fd6c711708"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-9ee8f46f903f0ee4.js",revision:"9ee8f46f903f0ee4"},{url:"/_next/static/chunks/pages/_app-ffbc7911aeebfc01.js",revision:"ffbc7911aeebfc01"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/_offline-34b412b9de1ab29c.js",revision:"34b412b9de1ab29c"},{url:"/_next/static/chunks/pages/about-29efe89fa9199bef.js",revision:"29efe89fa9199bef"},{url:"/_next/static/chunks/pages/index-a84d3bd11d2efaff.js",revision:"a84d3bd11d2efaff"},{url:"/_next/static/chunks/pages/org-a96618f23cf4ccb1.js",revision:"a96618f23cf4ccb1"},{url:"/_next/static/chunks/pages/org/%5BorgId%5D-79e9a7419038cb68.js",revision:"79e9a7419038cb68"},{url:"/_next/static/chunks/pages/org/%5BorgId%5D/%5Bsurveyid%5D-05daa393d6e38b80.js",revision:"05daa393d6e38b80"},{url:"/_next/static/chunks/pages/org/%5BorgId%5D/manage-f2e3be6ac9b6404f.js",revision:"f2e3be6ac9b6404f"},{url:"/_next/static/chunks/pages/userInfo-028c83555e18668b.js",revision:"028c83555e18668b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-1c349483d2cdcf64.js",revision:"1c349483d2cdcf64"},{url:"/_next/static/css/06bda05661925c52.css",revision:"06bda05661925c52"},{url:"/_next/static/kDm7pBoCD_AsfQVgsiCqp/_buildManifest.js",revision:"2ee00d1b5b14575012fc9877d98ff7bd"},{url:"/_next/static/kDm7pBoCD_AsfQVgsiCqp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/brand-icons.1a368124.ttf",revision:"1a368124"},{url:"/_next/static/media/brand-icons.a5c2b578.eot",revision:"a5c2b578"},{url:"/_next/static/media/brand-icons.b0ccb869.svg",revision:"b0ccb869"},{url:"/_next/static/media/brand-icons.d3632e64.woff2",revision:"d3632e64"},{url:"/_next/static/media/brand-icons.ff793786.woff",revision:"ff793786"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/_next/static/media/flags.6989ab0a.png",revision:"6989ab0a"},{url:"/_next/static/media/icons.004393de.woff",revision:"004393de"},{url:"/_next/static/media/icons.62a2bfb1.woff2",revision:"62a2bfb1"},{url:"/_next/static/media/icons.8ec0357f.ttf",revision:"8ec0357f"},{url:"/_next/static/media/icons.a93cf03c.svg",revision:"a93cf03c"},{url:"/_next/static/media/icons.fa5c061f.eot",revision:"fa5c061f"},{url:"/_next/static/media/outline-icons.315b68a4.woff",revision:"315b68a4"},{url:"/_next/static/media/outline-icons.3c7c2806.eot",revision:"3c7c2806"},{url:"/_next/static/media/outline-icons.7af2e9ac.svg",revision:"7af2e9ac"},{url:"/_next/static/media/outline-icons.ba204dab.ttf",revision:"ba204dab"},{url:"/_next/static/media/outline-icons.d24ca609.woff2",revision:"d24ca609"},{url:"/_offline",revision:"kDm7pBoCD_AsfQVgsiCqp"},{url:"/dataColleciton.jpg",revision:"51f589ef0d4b01a17a3932ed1f82cbdf"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"ba30425854392d81cedad57891f57a0f"},{url:"/icon-256x256.png",revision:"6f01aa6a72baccd37236fc9ba7b78d96"},{url:"/icon-384x384.png",revision:"643690da74f95cd9f650d030909b4fea"},{url:"/icon-512x512.png",revision:"bc3d9eb1d76e946c3360c2d0f516fe19"},{url:"/manifest.json",revision:"586c29ec0ce88a1b5ab2213ff95d2fdc"},{url:"/marco.png",revision:"0aacdaa5034139b0c0a379fd737888ac"},{url:"/marco2.png",revision:"56d55570e3f4b37559afebfbb9a05e44"},{url:"/mercer.png",revision:"41e5100a372b8d2c70ff2e38087e400a"},{url:"/msf.png",revision:"3f9620af8ee9a5901cabdb665b6ed62c"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/salt.png",revision:"fa56de1c0b35db64dbb4f6d1b327bad7"},{url:"/simon.jpg",revision:"cff63880d732e62b9b7a55defbfd1971"},{url:"/undp.png",revision:"cc1885f80c0c03c0f9f3a6e5cb71cf63"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/whitesmoke.png",revision:"a877df306f780afc9dc0582493071e72"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
