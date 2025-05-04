const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "Portfolio/_app",
	assets: new Set([".nojekyll","favicon.png","gallery-closed.png","gallery-open.png","Placeholder.png","styles/globals.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.CS0zga-6.js",app:"_app/immutable/entry/app.Dor8O1HU.js",imports:["_app/immutable/entry/start.CS0zga-6.js","_app/immutable/chunks/CminKL6y.js","_app/immutable/chunks/ChcujYhf.js","_app/immutable/chunks/ex4hH3nZ.js","_app/immutable/chunks/DyiCsbeV.js","_app/immutable/entry/app.Dor8O1HU.js","_app/immutable/chunks/ChcujYhf.js","_app/immutable/chunks/CVhjSGlz.js","_app/immutable/chunks/aVxHoVl3.js","_app/immutable/chunks/CcxAtk1f.js","_app/immutable/chunks/BbnxEhTo.js","_app/immutable/chunks/B2HVgmOC.js","_app/immutable/chunks/DyiCsbeV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-IL_2FTgI.js')),
			__memo(() => import('./chunks/1-e-JtPgAp.js')),
			__memo(() => import('./chunks/3-DGuWJD5D.js')),
			__memo(() => import('./chunks/4-DVqXpkGx.js')),
			__memo(() => import('./chunks/5-o8RXtmJa.js')),
			__memo(() => import('./chunks/6-CNBFcLqs.js')),
			__memo(() => import('./chunks/7-DNnbMt9X.js')),
			__memo(() => import('./chunks/8-HN4xKU58.js')),
			__memo(() => import('./chunks/9-DH9rgmYg.js'))
		],
		routes: [
			{
				id: "/animation",
				pattern: /^\/animation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/art",
				pattern: /^\/art\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cv",
				pattern: /^\/cv\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/games",
				pattern: /^\/games\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/games/jams",
				pattern: /^\/games\/jams\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/web-comic",
				pattern: /^\/web-comic\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/Portfolio/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/Portfolio/"]);

const base = "/Portfolio";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
