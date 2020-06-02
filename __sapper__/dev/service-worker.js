(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1591122404070;

	const files = [
		"service-worker-index.html",
		"bycicle.jpg",
		"bycicle2.jpg",
		"cycling.jpg",
		"favicon.png",
		"global.css",
		"logo-192.png",
		"logo-512.png",
		"main.css",
		"manifest.json",
		"running.jpg",
		"successkid.jpg",
		"swimming.jpg",
		"tailwind.css",
		"workout.jpg"
	];

	const shell = [
		"client/client.d791bb95.js",
		"client/index.cd7e8cb4.js",
		"client/frappe-charts.b8ebf44f.js",
		"client/chart.7e02a3f8.js",
		"client/_commonjsHelpers.1e235def.js",
		"client/new_cycling.6a16f8cf.js",
		"client/new_session.bdb08560.js",
		"client/Box.7ae94a0c.js",
		"client/performance.ac51f17b.js",
		"client/index.1516af19.js",
		"client/[slug].5d6d91c2.js",
		"client/chartest.752eea04.js",
		"client/Chart.97e39373.js",
		"client/tutorial.703a4a80.js",
		"client/swimming-charts.5496dd28.js",
		"client/swimming.790b6435.js",
		"client/cycling-charts.5529979b.js",
		"client/cycling.95e6762b.js",
		"client/running-charts.fb71a16b.js",
		"client/running.0fd0b068.js",
		"client/workout.20f1db7e.js",
		"client/about.c04f127d.js",
		"client/index.8ae3461f.js",
		"client/[slug].20dae945.js",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTU5MTEyMjQwNDA3MDtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCJieWNpY2xlLmpwZ1wiLFxuXHRcImJ5Y2ljbGUyLmpwZ1wiLFxuXHRcImN5Y2xpbmcuanBnXCIsXG5cdFwiZmF2aWNvbi5wbmdcIixcblx0XCJnbG9iYWwuY3NzXCIsXG5cdFwibG9nby0xOTIucG5nXCIsXG5cdFwibG9nby01MTIucG5nXCIsXG5cdFwibWFpbi5jc3NcIixcblx0XCJtYW5pZmVzdC5qc29uXCIsXG5cdFwicnVubmluZy5qcGdcIixcblx0XCJzdWNjZXNza2lkLmpwZ1wiLFxuXHRcInN3aW1taW5nLmpwZ1wiLFxuXHRcInRhaWx3aW5kLmNzc1wiLFxuXHRcIndvcmtvdXQuanBnXCJcbl07XG5leHBvcnQgeyBmaWxlcyBhcyBhc3NldHMgfTsgLy8gbGVnYWN5XG5cbmV4cG9ydCBjb25zdCBzaGVsbCA9IFtcblx0XCJjbGllbnQvY2xpZW50LmQ3OTFiYjk1LmpzXCIsXG5cdFwiY2xpZW50L2luZGV4LmNkN2U4Y2I0LmpzXCIsXG5cdFwiY2xpZW50L2ZyYXBwZS1jaGFydHMuYjhlYmY0NGYuanNcIixcblx0XCJjbGllbnQvY2hhcnQuN2UwMmEzZjguanNcIixcblx0XCJjbGllbnQvX2NvbW1vbmpzSGVscGVycy4xZTIzNWRlZi5qc1wiLFxuXHRcImNsaWVudC9uZXdfY3ljbGluZy42YTE2ZjhjZi5qc1wiLFxuXHRcImNsaWVudC9uZXdfc2Vzc2lvbi5iZGIwODU2MC5qc1wiLFxuXHRcImNsaWVudC9Cb3guN2FlOTRhMGMuanNcIixcblx0XCJjbGllbnQvcGVyZm9ybWFuY2UuYWM1MWYxN2IuanNcIixcblx0XCJjbGllbnQvaW5kZXguMTUxNmFmMTkuanNcIixcblx0XCJjbGllbnQvW3NsdWddLjVkNmQ5MWMyLmpzXCIsXG5cdFwiY2xpZW50L2NoYXJ0ZXN0Ljc1MmVlYTA0LmpzXCIsXG5cdFwiY2xpZW50L0NoYXJ0Ljk3ZTM5MzczLmpzXCIsXG5cdFwiY2xpZW50L3R1dG9yaWFsLjcwM2E0YTgwLmpzXCIsXG5cdFwiY2xpZW50L3N3aW1taW5nLWNoYXJ0cy41NDk2ZGQyOC5qc1wiLFxuXHRcImNsaWVudC9zd2ltbWluZy43OTBiNjQzNS5qc1wiLFxuXHRcImNsaWVudC9jeWNsaW5nLWNoYXJ0cy41NTI5OTc5Yi5qc1wiLFxuXHRcImNsaWVudC9jeWNsaW5nLjk1ZTY3NjJiLmpzXCIsXG5cdFwiY2xpZW50L3J1bm5pbmctY2hhcnRzLmZiNzFhMTZiLmpzXCIsXG5cdFwiY2xpZW50L3J1bm5pbmcuMGZkMGIwNjguanNcIixcblx0XCJjbGllbnQvd29ya291dC4yMGYxZGI3ZS5qc1wiLFxuXHRcImNsaWVudC9hYm91dC5jMDRmMTI3ZC5qc1wiLFxuXHRcImNsaWVudC9pbmRleC44YWUzNDYxZi5qc1wiLFxuXHRcImNsaWVudC9bc2x1Z10uMjBkYWU5NDUuanNcIixcblx0XCJjbGllbnQvc2FwcGVyLWRldi1jbGllbnQuODllMzRiYWUuanNcIlxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBwYXR0ZXJuOiAvXlxcLyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9mcmFwcGUtY2hhcnRzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC9uZXdfY3ljbGluZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25cXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3BlcmZvcm1hbmNlXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydF9saXN0XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydF9saXN0XFwvKFteXFwvXSs/KVxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvY2hhcnRlc3RcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3R1dG9yaWFsXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydHNcXC9zd2ltbWluZ1xcL3N3aW1taW5nLWNoYXJ0c1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvc3dpbW1pbmdcXC9zd2ltbWluZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvY3ljbGluZ1xcL2N5Y2xpbmctY2hhcnRzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydHNcXC9jeWNsaW5nXFwvY3ljbGluZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvcnVubmluZ1xcL3J1bm5pbmctY2hhcnRzXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zcG9ydHNcXC9ydW5uaW5nXFwvcnVubmluZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvd29ya291dFxcL3dvcmtvdXRcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2Fib3V0XFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9jaGFydFxcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYmxvZ1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvYmxvZ1xcLyhbXlxcL10rPylcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL0JveFxcLz8kLyB9XG5dOyIsImltcG9ydCB7IHRpbWVzdGFtcCwgZmlsZXMsIHNoZWxsLCByb3V0ZXMgfSBmcm9tICdAc2FwcGVyL3NlcnZpY2Utd29ya2VyJztcclxuXHJcbmNvbnN0IEFTU0VUUyA9IGBjYWNoZSR7dGltZXN0YW1wfWA7XHJcblxyXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxyXG4vLyBgZmlsZXNgIGlzIGFuIGFycmF5IG9mIGV2ZXJ5dGhpbmcgaW4gdGhlIGBzdGF0aWNgIGRpcmVjdG9yeVxyXG5jb25zdCB0b19jYWNoZSA9IHNoZWxsLmNvbmNhdChmaWxlcyk7XHJcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xyXG5cclxuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgZXZlbnQgPT4ge1xyXG5cdGV2ZW50LndhaXRVbnRpbChcclxuXHRcdGNhY2hlc1xyXG5cdFx0XHQub3BlbihBU1NFVFMpXHJcblx0XHRcdC50aGVuKGNhY2hlID0+IGNhY2hlLmFkZEFsbCh0b19jYWNoZSkpXHJcblx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRzZWxmLnNraXBXYWl0aW5nKCk7XHJcblx0XHRcdH0pXHJcblx0KTtcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZXZlbnQgPT4ge1xyXG5cdGV2ZW50LndhaXRVbnRpbChcclxuXHRcdGNhY2hlcy5rZXlzKCkudGhlbihhc3luYyBrZXlzID0+IHtcclxuXHRcdFx0Ly8gZGVsZXRlIG9sZCBjYWNoZXNcclxuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG5cdFx0XHRcdGlmIChrZXkgIT09IEFTU0VUUykgYXdhaXQgY2FjaGVzLmRlbGV0ZShrZXkpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzZWxmLmNsaWVudHMuY2xhaW0oKTtcclxuXHRcdH0pXHJcblx0KTtcclxufSk7XHJcblxyXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2ZldGNoJywgZXZlbnQgPT4ge1xyXG5cdGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgfHwgZXZlbnQucmVxdWVzdC5oZWFkZXJzLmhhcygncmFuZ2UnKSkgcmV0dXJuO1xyXG5cclxuXHRjb25zdCB1cmwgPSBuZXcgVVJMKGV2ZW50LnJlcXVlc3QudXJsKTtcclxuXHJcblx0Ly8gZG9uJ3QgdHJ5IHRvIGhhbmRsZSBlLmcuIGRhdGE6IFVSSXNcclxuXHRpZiAoIXVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJykpIHJldHVybjtcclxuXHJcblx0Ly8gaWdub3JlIGRldiBzZXJ2ZXIgcmVxdWVzdHNcclxuXHRpZiAodXJsLmhvc3RuYW1lID09PSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmIHVybC5wb3J0ICE9PSBzZWxmLmxvY2F0aW9uLnBvcnQpIHJldHVybjtcclxuXHJcblx0Ly8gYWx3YXlzIHNlcnZlIHN0YXRpYyBmaWxlcyBhbmQgYnVuZGxlci1nZW5lcmF0ZWQgYXNzZXRzIGZyb20gY2FjaGVcclxuXHRpZiAodXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBjYWNoZWQuaGFzKHVybC5wYXRobmFtZSkpIHtcclxuXHRcdGV2ZW50LnJlc3BvbmRXaXRoKGNhY2hlcy5tYXRjaChldmVudC5yZXF1ZXN0KSk7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHQvLyBmb3IgcGFnZXMsIHlvdSBtaWdodCB3YW50IHRvIHNlcnZlIGEgc2hlbGwgYHNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxgIGZpbGUsXHJcblx0Ly8gd2hpY2ggU2FwcGVyIGhhcyBnZW5lcmF0ZWQgZm9yIHlvdS4gSXQncyBub3QgcmlnaHQgZm9yIGV2ZXJ5XHJcblx0Ly8gYXBwLCBidXQgaWYgaXQncyByaWdodCBmb3IgeW91cnMgdGhlbiB1bmNvbW1lbnQgdGhpcyBzZWN0aW9uXHJcblx0LypcclxuXHRpZiAodXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiYgcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpKSB7XHJcblx0XHRldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goJy9zZXJ2aWNlLXdvcmtlci1pbmRleC5odG1sJykpO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHQqL1xyXG5cclxuXHRpZiAoZXZlbnQucmVxdWVzdC5jYWNoZSA9PT0gJ29ubHktaWYtY2FjaGVkJykgcmV0dXJuO1xyXG5cclxuXHQvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xyXG5cdC8vIGNhY2hlIGlmIHRoZSB1c2VyIGlzIG9mZmxpbmUuIChJZiB0aGUgcGFnZXMgbmV2ZXIgY2hhbmdlLCB5b3VcclxuXHQvLyBtaWdodCBwcmVmZXIgYSBjYWNoZS1maXJzdCBhcHByb2FjaCB0byBhIG5ldHdvcmstZmlyc3Qgb25lLilcclxuXHRldmVudC5yZXNwb25kV2l0aChcclxuXHRcdGNhY2hlc1xyXG5cdFx0XHQub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApXHJcblx0XHRcdC50aGVuKGFzeW5jIGNhY2hlID0+IHtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcclxuXHRcdFx0XHRcdGNhY2hlLnB1dChldmVudC5yZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcclxuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZTtcclxuXHRcdFx0XHR9IGNhdGNoKGVycikge1xyXG5cdFx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChldmVudC5yZXF1ZXN0KTtcclxuXHRcdFx0XHRcdGlmIChyZXNwb25zZSkgcmV0dXJuIHJlc3BvbnNlO1xyXG5cclxuXHRcdFx0XHRcdHRocm93IGVycjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsYUFB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
