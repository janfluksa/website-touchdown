import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_DagTLmzh.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B75dca4e.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/janf/Code/website-touchdown/","cacheDir":"file:///Users/janf/Code/website-touchdown/node_modules/.astro/","outDir":"file:///Users/janf/Code/website-touchdown/dist/","srcDir":"file:///Users/janf/Code/website-touchdown/src/","publicDir":"file:///Users/janf/Code/website-touchdown/public/","buildClientDir":"file:///Users/janf/Code/website-touchdown/dist/client/","buildServerDir":"file:///Users/janf/Code/website-touchdown/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"media/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/media","isIndex":false,"type":"page","pattern":"^\\/media\\/?$","segments":[[{"content":"media","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/media.astro","pathname":"/media","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/janf/Code/website-touchdown/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/janf/Code/website-touchdown/src/pages/media.astro",{"propagation":"in-tree","containsHead":true}],["/Users/janf/Code/website-touchdown/src/pages/media/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/src/components/Media.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/src/components/Services.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/media@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/media/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/src/pages/services/[...slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/services/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/node_modules/@astrojs/markdoc/components/Renderer.astro",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/node_modules/@astrojs/markdoc/components/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/src/content/posts/first-post.mdoc",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/src/content/posts/first-post.mdoc?astroPropagatedAssets",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/.astro/content-modules.mjs",{"propagation":"in-tree","containsHead":false}],["/Users/janf/Code/website-touchdown/node_modules/astro/dist/content/runtime.js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/media@_@astro":"pages/media.astro.mjs","\u0000@astro-page:src/pages/media/[...slug]@_@astro":"pages/media/_---slug_.astro.mjs","\u0000@astro-page:src/pages/services/[...slug]@_@astro":"pages/services/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_VXLvYLOR.mjs","/Users/janf/Code/website-touchdown/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/janf/Code/website-touchdown/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CDjMaBrB.mjs","/Users/janf/Code/website-touchdown/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/janf/Code/website-touchdown/.astro/content-modules.mjs":"chunks/content-modules_2ZXlx4i8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BLPOR_Ap.mjs","/Users/janf/Code/website-touchdown/src/content/posts/first-post.mdoc?astroPropagatedAssets":"chunks/first-post_BegNV5Su.mjs","/Users/janf/Code/website-touchdown/src/content/posts/first-post.mdoc":"chunks/first-post_BEF_CT7x.mjs","/Users/janf/Code/website-touchdown/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.ZmR3JDda.js","@astrojs/react/client.js":"_astro/client.DK-ogvXW.js","/Users/janf/Code/website-touchdown/src/components/@Flow.astro?astro&type=script&index=0&lang.ts":"_astro/@Flow.astro_astro_type_script_index_0_lang.2VRPbflU.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/janf/Code/website-touchdown/src/components/@Flow.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"preferHistory\");e&&e.addEventListener(\"click\",n=>{n.preventDefault();const o=location.hostname,t=document.referrer;try{const r=new URL(t).hostname;t&&r===o?history.go(-1):location.href=e.href}catch{location.href=e.href}})});"]],"assets":["/_astro/touchdown-executive-search-team.LxZi70yB.png","/_astro/touchdown-barbora-and-laredo.lwa4XRnA.png","/favicon.svg","/_astro/client.DK-ogvXW.js","/_astro/index.BfjclWtw.js","/_astro/keystatic-page.ZmR3JDda.js","/images/footer-logo-transparent.svg","/images/footer-logo.svg","/images/logo-touchdown.svg","/images/touchdown-sigma-search-cities.svg","/images/touchdown-sigma-search-europe.svg","/images/touchdown-sigma-search-white-stripes.svg","/images/touchdown-vn-trees.png","/images/touchdown-vn.png","/images/partners/adol-group.jpg","/images/partners/air-products.jpg","/images/partners/amcor.jpg","/images/partners/automotive-lighting.jpg","/images/partners/avia.jpg","/images/partners/ball-aerocan.jpg","/images/partners/benson-oak.jpg","/images/partners/ceska-sporitelna.jpg","/images/partners/cs-cargo.jpg","/images/partners/csob-leasing.jpg","/images/partners/datart.jpg","/images/partners/dermacol.jpg","/images/partners/education-first.jpg","/images/partners/hellenic.jpg","/images/partners/i.jpg","/images/partners/ims.jpg","/images/partners/kiekert-cs.jpg","/images/partners/kofola.jpg","/images/partners/kollmorgen.jpg","/images/partners/lilly.jpg","/images/partners/mondi.jpg","/images/partners/n.jpg","/images/partners/net-for-gas.jpg","/images/partners/okin-group.jpg","/images/partners/passerinvest.jpg","/images/partners/pepsico.jpg","/images/partners/plzensky-prazdroj.jpg","/images/partners/raiffeisen-bank.jpg","/images/partners/rigips.jpg","/images/partners/rodenstock.jpg","/images/partners/rpg-real-estate.jpg","/images/partners/saint-gobain.jpg","/images/partners/samvardhana-motherson-group.jpg","/images/partners/tesco.jpg","/images/partners/trend-micro.jpg","/images/services/executive-search/image.svg","/images/services/leadership-advisory/image.svg","/images/services/organizational-design/image.svg","/images/services/talent-audit/image.svg","/media/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"CkSSZ/1+ltdj0hLPmC7tc3sBdMNQBOq53n+WxUF1mis=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/janf/Code/website-touchdown/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
