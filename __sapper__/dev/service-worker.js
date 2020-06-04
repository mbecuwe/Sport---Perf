(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1591268051655;

	const files = [
		"service-worker-index.html",
		"cycling.jpg",
		"cycling_drawing.jpeg",
		"draw_run.png",
		"favicon.png",
		"global.css",
		"logo-192.png",
		"logo-512.png",
		"main.css",
		"manifest.json",
		"running.jpg",
		"running_draw.jpg",
		"running_draw.png",
		"runningdraw.png",
		"successkid.jpg",
		"swimming.jpg",
		"swimming_draw.jpg",
		"tailwind.css",
		"workout.jpg",
		"workout_draw.png",
		"workout_drawing.jpg"
	];

	const shell = [
		"client/client.36912fb8.js",
		"client/index.a2c3f396.js",
		"client/frappe-charts.cd37852d.js",
		"client/chart.b5a25dbc.js",
		"client/_commonjsHelpers.1e235def.js",
		"client/new_swimming.155fbf2e.js",
		"client/new_cycling.b5f8ffd3.js",
		"client/new_running.46d751d5.js",
		"client/new_workout.bd73d294.js",
		"client/new_session.222aa15b.js",
		"client/Box.b77323c5.js",
		"client/performance.40055197.js",
		"client/chartest.4b1bbff6.js",
		"client/Chart.b2015135.js",
		"client/tutorial.af38780f.js",
		"client/swimming-charts.0c68a4d7.js",
		"client/swimming.786a4f56.js",
		"client/cycling-charts.5ab936c9.js",
		"client/cycling.394bd74c.js",
		"client/running-charts.0131bc9b.js",
		"client/running.c70c116a.js",
		"client/workoutpushups-radar.6efb7b47.js",
		"client/workoutothers-radar.89b5f73d.js",
		"client/workoutabdo-radar.6803247d.js",
		"client/workoutlegs-radar.6a1aa29c.js",
		"client/workout-charts.e2653093.js",
		"client/workout.9782669c.js",
		"client/about.6c7dde3f.js",
		"client/sapper-dev-client.89e34bae.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener('install', event => {
		event.waitUntil(
			caches
				.open(ASSETS)
				.then(cache => cache.addAll(to_cache))
				.then(() => {
					self.skipWaiting();
				})
		);
	});

	self.addEventListener('activate', event => {
		event.waitUntil(
			caches.keys().then(async keys => {
				// delete old caches
				for (const key of keys) {
					if (key !== ASSETS) await caches.delete(key);
				}

				self.clients.claim();
			})
		);
	});

	self.addEventListener('fetch', event => {
		if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

		const url = new URL(event.request.url);

		// don't try to handle e.g. data: URIs
		if (!url.protocol.startsWith('http')) return;

		// ignore dev server requests
		if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

		// always serve static files and bundler-generated assets from cache
		if (url.host === self.location.host && cached.has(url.pathname)) {
			event.respondWith(caches.match(event.request));
			return;
		}

		// for pages, you might want to serve a shell `service-worker-index.html` file,
		// which Sapper has generated for you. It's not right for every
		// app, but if it's right for yours then uncomment this section
		/*
		if (url.origin === self.origin && routes.find(route => route.pattern.test(url.pathname))) {
			event.respondWith(caches.match('/service-worker-index.html'));
			return;
		}
		*/

		if (event.request.cache === 'only-if-cached') return;

		// for everything else, try the network first, falling back to
		// cache if the user is offline. (If the pages never change, you
		// might prefer a cache-first approach to a network-first one.)
		event.respondWith(
			caches
				.open(`offline${timestamp}`)
				.then(async cache => {
					try {
						const response = await fetch(event.request);
						cache.put(event.request, response.clone());
						return response;
					} catch(err) {
						const response = await cache.match(event.request);
						if (response) return response;

						throw err;
					}
				})
		);
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU5MTI2ODA1MTY1NTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJjeWNsaW5nLmpwZ1wiLFxuXHRcImN5Y2xpbmdfZHJhd2luZy5qcGVnXCIsXG5cdFwiZHJhd19ydW4ucG5nXCIsXG5cdFwiZmF2aWNvbi5wbmdcIixcblx0XCJnbG9iYWwuY3NzXCIsXG5cdFwibG9nby0xOTIucG5nXCIsXG5cdFwibG9nby01MTIucG5nXCIsXG5cdFwibWFpbi5jc3NcIixcblx0XCJtYW5pZmVzdC5qc29uXCIsXG5cdFwicnVubmluZy5qcGdcIixcblx0XCJydW5uaW5nX2RyYXcuanBnXCIsXG5cdFwicnVubmluZ19kcmF3LnBuZ1wiLFxuXHRcInJ1bm5pbmdkcmF3LnBuZ1wiLFxuXHRcInN1Y2Nlc3NraWQuanBnXCIsXG5cdFwic3dpbW1pbmcuanBnXCIsXG5cdFwic3dpbW1pbmdfZHJhdy5qcGdcIixcblx0XCJ0YWlsd2luZC5jc3NcIixcblx0XCJ3b3Jrb3V0LmpwZ1wiLFxuXHRcIndvcmtvdXRfZHJhdy5wbmdcIixcblx0XCJ3b3Jrb3V0X2RyYXdpbmcuanBnXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCJjbGllbnQvY2xpZW50LjM2OTEyZmI4LmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmEyYzNmMzk2LmpzXCIsXG5cdFwiY2xpZW50L2ZyYXBwZS1jaGFydHMuY2QzNzg1MmQuanNcIixcblx0XCJjbGllbnQvY2hhcnQuYjVhMjVkYmMuanNcIixcblx0XCJjbGllbnQvX2NvbW1vbmpzSGVscGVycy4xZTIzNWRlZi5qc1wiLFxuXHRcImNsaWVudC9uZXdfc3dpbW1pbmcuMTU1ZmJmMmUuanNcIixcblx0XCJjbGllbnQvbmV3X2N5Y2xpbmcuYjVmOGZmZDMuanNcIixcblx0XCJjbGllbnQvbmV3X3J1bm5pbmcuNDZkNzUxZDUuanNcIixcblx0XCJjbGllbnQvbmV3X3dvcmtvdXQuYmQ3M2QyOTQuanNcIixcblx0XCJjbGllbnQvbmV3X3Nlc3Npb24uMjIyYWExNWIuanNcIixcblx0XCJjbGllbnQvQm94LmI3NzMyM2M1LmpzXCIsXG5cdFwiY2xpZW50L3BlcmZvcm1hbmNlLjQwMDU1MTk3LmpzXCIsXG5cdFwiY2xpZW50L2NoYXJ0ZXN0LjRiMWJiZmY2LmpzXCIsXG5cdFwiY2xpZW50L0NoYXJ0LmIyMDE1MTM1LmpzXCIsXG5cdFwiY2xpZW50L3R1dG9yaWFsLmFmMzg3ODBmLmpzXCIsXG5cdFwiY2xpZW50L3N3aW1taW5nLWNoYXJ0cy4wYzY4YTRkNy5qc1wiLFxuXHRcImNsaWVudC9zd2ltbWluZy43ODZhNGY1Ni5qc1wiLFxuXHRcImNsaWVudC9jeWNsaW5nLWNoYXJ0cy41YWI5MzZjOS5qc1wiLFxuXHRcImNsaWVudC9jeWNsaW5nLjM5NGJkNzRjLmpzXCIsXG5cdFwiY2xpZW50L3J1bm5pbmctY2hhcnRzLjAxMzFiYzliLmpzXCIsXG5cdFwiY2xpZW50L3J1bm5pbmcuYzcwYzExNmEuanNcIixcblx0XCJjbGllbnQvd29ya291dHB1c2h1cHMtcmFkYXIuNmVmYjdiNDcuanNcIixcblx0XCJjbGllbnQvd29ya291dG90aGVycy1yYWRhci44OWI1ZjczZC5qc1wiLFxuXHRcImNsaWVudC93b3Jrb3V0YWJkby1yYWRhci42ODAzMjQ3ZC5qc1wiLFxuXHRcImNsaWVudC93b3Jrb3V0bGVncy1yYWRhci42YTFhYTI5Yy5qc1wiLFxuXHRcImNsaWVudC93b3Jrb3V0LWNoYXJ0cy5lMjY1MzA5My5qc1wiLFxuXHRcImNsaWVudC93b3Jrb3V0Ljk3ODI2NjljLmpzXCIsXG5cdFwiY2xpZW50L2Fib3V0LjZjN2RkZTNmLmpzXCIsXG5cdFwiY2xpZW50L3NhcHBlci1kZXYtY2xpZW50Ljg5ZTM0YmFlLmpzXCJcbl07XG5cbmV4cG9ydCBjb25zdCByb3V0ZXMgPSBbXG5cdHsgcGF0dGVybjogL15cXC8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvZnJhcHBlLWNoYXJ0c1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwvc3dpbW1pbmdcXC9uZXdfc3dpbW1pbmdcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL25ld19zZXNzaW9uc1xcL2N5Y2xpbmdcXC9uZXdfY3ljbGluZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwvcnVubmluZ1xcL25ld19ydW5uaW5nXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC93b3Jrb3V0XFwvbmV3X3dvcmtvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL25ld19zZXNzaW9uXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9wZXJmb3JtYW5jZVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvY2hhcnRlc3RcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3R1dG9yaWFsXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydHNcXC9zd2ltbWluZ1xcL3N3aW1taW5nLWNoYXJ0c1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvc3dpbW1pbmdcXC9zd2ltbWluZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvY3ljbGluZ1xcL2N5Y2xpbmctY2hhcnRzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydHNcXC9jeWNsaW5nXFwvY3ljbGluZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvcnVubmluZ1xcL3J1bm5pbmctY2hhcnRzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydHNcXC9ydW5uaW5nXFwvcnVubmluZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvd29ya291dFxcL3dvcmtvdXRwdXNodXBzLXJhZGFyXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dG90aGVycy1yYWRhclxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvd29ya291dFxcL3dvcmtvdXRhYmRvLXJhZGFyXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dGxlZ3MtcmFkYXJcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3dvcmtvdXRcXC93b3Jrb3V0LWNoYXJ0c1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvd29ya291dFxcL3dvcmtvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Fib3V0XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9jaGFydFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvQm94XFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwsIHJvdXRlcyB9IGZyb20gJ0BzYXBwZXIvc2VydmljZS13b3JrZXInO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBldmVudCA9PiB7XG5cdGV2ZW50LndhaXRVbnRpbChcblx0XHRjYWNoZXNcblx0XHRcdC5vcGVuKEFTU0VUUylcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdHNlbGYuc2tpcFdhaXRpbmcoKTtcblx0XHRcdH0pXG5cdCk7XG59KTtcblxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdhY3RpdmF0ZScsIGV2ZW50ID0+IHtcblx0ZXZlbnQud2FpdFVudGlsKFxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcblx0XHRcdC8vIGRlbGV0ZSBvbGQgY2FjaGVzXG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcblx0XHR9KVxuXHQpO1xufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCBldmVudCA9PiB7XG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xuXG5cdGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG5cdC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG5cdGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoJ2h0dHAnKSkgcmV0dXJuO1xuXG5cdC8vIGlnbm9yZSBkZXYgc2VydmVyIHJlcXVlc3RzXG5cdGlmICh1cmwuaG9zdG5hbWUgPT09IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgJiYgdXJsLnBvcnQgIT09IHNlbGYubG9jYXRpb24ucG9ydCkgcmV0dXJuO1xuXG5cdC8vIGFsd2F5cyBzZXJ2ZSBzdGF0aWMgZmlsZXMgYW5kIGJ1bmRsZXItZ2VuZXJhdGVkIGFzc2V0cyBmcm9tIGNhY2hlXG5cdGlmICh1cmwuaG9zdCA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0ICYmIGNhY2hlZC5oYXModXJsLnBhdGhuYW1lKSkge1xuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZm9yIHBhZ2VzLCB5b3UgbWlnaHQgd2FudCB0byBzZXJ2ZSBhIHNoZWxsIGBzZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sYCBmaWxlLFxuXHQvLyB3aGljaCBTYXBwZXIgaGFzIGdlbmVyYXRlZCBmb3IgeW91LiBJdCdzIG5vdCByaWdodCBmb3IgZXZlcnlcblx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXG5cdC8qXG5cdGlmICh1cmwub3JpZ2luID09PSBzZWxmLm9yaWdpbiAmJiByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSkpIHtcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykpO1xuXHRcdHJldHVybjtcblx0fVxuXHQqL1xuXG5cdGlmIChldmVudC5yZXF1ZXN0LmNhY2hlID09PSAnb25seS1pZi1jYWNoZWQnKSByZXR1cm47XG5cblx0Ly8gZm9yIGV2ZXJ5dGhpbmcgZWxzZSwgdHJ5IHRoZSBuZXR3b3JrIGZpcnN0LCBmYWxsaW5nIGJhY2sgdG9cblx0Ly8gY2FjaGUgaWYgdGhlIHVzZXIgaXMgb2ZmbGluZS4gKElmIHRoZSBwYWdlcyBuZXZlciBjaGFuZ2UsIHlvdVxuXHQvLyBtaWdodCBwcmVmZXIgYSBjYWNoZS1maXJzdCBhcHByb2FjaCB0byBhIG5ldHdvcmstZmlyc3Qgb25lLilcblx0ZXZlbnQucmVzcG9uZFdpdGgoXG5cdFx0Y2FjaGVzXG5cdFx0XHQub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXG5cdFx0XHQudGhlbihhc3luYyBjYWNoZSA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcblx0XHRcdFx0XHRjYWNoZS5wdXQoZXZlbnQucmVxdWVzdCwgcmVzcG9uc2UuY2xvbmUoKSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuXHRcdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2FjaGUubWF0Y2goZXZlbnQucmVxdWVzdCk7XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cblx0XHRcdFx0XHR0aHJvdyBlcnI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdCk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsYUFBYTtDQUNkLENBQUMsc0JBQXNCO0NBQ3ZCLENBQUMsY0FBYztDQUNmLENBQUMsYUFBYTtDQUNkLENBQUMsWUFBWTtDQUNiLENBQUMsY0FBYztDQUNmLENBQUMsY0FBYztDQUNmLENBQUMsVUFBVTtDQUNYLENBQUMsZUFBZTtDQUNoQixDQUFDLGFBQWE7Q0FDZCxDQUFDLGtCQUFrQjtDQUNuQixDQUFDLGtCQUFrQjtDQUNuQixDQUFDLGlCQUFpQjtDQUNsQixDQUFDLGdCQUFnQjtDQUNqQixDQUFDLGNBQWM7Q0FDZixDQUFDLG1CQUFtQjtDQUNwQixDQUFDLGNBQWM7Q0FDZixDQUFDLGFBQWE7Q0FDZCxDQUFDLGtCQUFrQjtDQUNuQixDQUFDLHFCQUFxQjtDQUN0QixDQUFDLENBQUM7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
