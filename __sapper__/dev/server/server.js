'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var moment = _interopDefault(require('moment'));
var Chart = _interopDefault(require('chart.js'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));
var bodyParser = _interopDefault(require('body-parser'));

const mongo = require('mongodb');

let client = null;
let db = null;

async function init(){
    if(!client){
        const url = "mongodb+srv://becuwemartin:vendredi13@cluster0-hgxcl.mongodb.net/test2_database?retryWrites=true&w=majority";
        client = await mongo.MongoClient.connect(url);
        db = client.db('sport_perf_database');
    }
    return {client, db}
}

async function get(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'swimming'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

async function post(req, res){
	const {db } = await init();
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE

var route_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get,
    post: post
});

async function get$1(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'cycling'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

async function post$1(req, res){
	const {db } = await init();
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE

var route_1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$1,
    post: post$1
});

async function get$2(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'running'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

async function post$2(req, res){
	const {db } = await init();
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE

var route_2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$2,
    post: post$2
});

async function get$3(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'workout'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

async function post$3(req, res){
	const {db } = await init();
	const post = req.body;
	const result = await db.collection("user1_collection").insert(post);
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(result));
}

//https://www.youtube.com/watch?v=H8SYYmrhHiE

var route_3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$3,
    post: post$3
});

async function get$4(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'swimming'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$4
});

async function get$5(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'cycling'}).toArray();

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));

	}

var route_5 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$5
});

async function get$6(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'running'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$6
});

async function get$7(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({sport:'workout'}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_7 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$7
});

async function get$8(req, res) {
	
	const {db} = await init();
	const data_raw = await db.collection("user1_collection").find({}).toArray();
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(data_raw));
	}

var route_8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get$8
});

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

/* src/routes/index.svelte generated by Svelte v3.22.3 */

const css = {
	code: ".workout.svelte-828loh::before{content:\"🏋️\"}.swimming.svelte-828loh::before{content:\"🏊\"}.cycling.svelte-828loh::before{content:\"🚴\"}.running.svelte-828loh::before{content:\"🏃\"}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`home.json`).then(r => r.json()).then(data_raw => {\\n\\t\\t\\treturn { data_raw };\\n\\t\\t});\\n\\t}\\t\\nimport moment from 'moment';\\n</script>\\n\\n<script>\\nexport let data_raw\\n        // Sort list of Json by dates (closest dates to last positions)\\n    function custom_sort(a, b) {\\n        return new Date(a.date).getTime() - new Date(b.date).getTime();\\n    }\\n\\tdata_raw = data_raw.sort(custom_sort)\\n\\t\\nlet list_date = []\\nlet list_sport = []\\ndata_raw.forEach(x=>{\\n\\tlist_date.push(x.date)\\n\\tlist_sport.push(x.sport)\\n})\\n\\nlet sport = 'workout'\\n\\nfunction convert_date(date){\\n\\treturn moment(date, 'YYYY-MM-DD').format('dddd MMMM D Y')\\n}\\n\\n</script>\\n\\n<style>\\n.workout::before {\\n  content: \\\"🏋️\\\";\\n}\\n.swimming::before {\\n  content: \\\"🏊\\\";\\n}\\n.cycling::before {\\n  content: \\\"🚴\\\";\\n}\\n.running::before {\\n  content: \\\"🏃\\\";\\n}\\n\\n</style>\\n\\n<svelte:head>\\n\\t<title>Sport App</title>\\n</svelte:head>\\n\\n<div class=\\\"\\\">\\n\\n\\n<div class=\\\"mb-6 shadow \\\">\\n    <img src=\\\"index.jpg\\\" alt=\\\"work harder sign\\\" class=\\\"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md\\\">\\n</div>\\n\\t\\n\\t\\n\\t\\n\\t<div class='p-8'>\\n\\t\\n    <div class=\\\"flex justify-center mb-8\\\">\\n        <h1 class=\\\"text-4xl text-center text-blue-700 font-semibold tracking-widest\\\">Welcome to the Sport Performance Assistant !</h1>\\n    </div>\\n\\t\\n\\n \\n<br />\\n\\n\\n<div class=\\\"flex \\\">\\n  <div class=\\\" w-2/3 p-4\\\">\\n\\t<div class=\\\"divide-y divide-gray-400 \\\">\\n\\t\\n\\t<div class=''>\\n\\t<h1 class=\\\"text-blue-700\\\">\\n        Why using the Sport Assistant App? \\n    </h1>\\n\\t\\n\\t<p class='p-4'>It can be hard to measure progress in sports performance. <br>\\n\\tWe think this evolution towards better performance is what truly motivates us to give our best in sports sessions.<br>\\n\\tThis application is here to help you track your progress from one sport session to another.\\n\\t</p>\\n\\t</div>\\n\\n<div class='pt-8'>\\n\\t<h1 class=\\\"text-blue-700\\\">\\n        How to use the App? \\n    </h1>\\n\\t<p class='p-4'>Once you finished your sport session, record your performance in the 'New Session' tab. <br>\\n\\tFor now, you can save sessions for running, cycling, swimming and working out. <br>\\n\\tThen, go to the 'Performance' tab and observe the progress you made.\\n\\t</p>\\n</div>\\n\\n<div class='pt-8'>\\n\\t<h1 class=\\\"text-blue-700\\\">\\n        What's next? \\n    </h1>\\n  <div class='p-4'>\\n\\t<p > This is a first version of our website and we intend to improve it further to allow for more features and a better experience.<br>\\n\\tWe are thinking of implementing options to:</p>\\n\\t<lu>\\n\\t<li>Add more sports\\n\\t</li>\\n\\t<li>Delete sessions that were wrongly entered\\n\\t</li>\\n\\t<li>Add an authentification system\\n\\t</li>\\n\\t<li>Improve and add new visualizations.\\n\\t</li>\\n\\t</lu>\\n\\t<p>We hope you enjoy our App and that it helps you staying motivated!<br>\\n\\tFeel free to contact us to give your thoughts about features you would like to see in the App.</p> \\n\\t</div>\\n</div></div>\\n\\t\\n\\n\\n  </div>\\n\\n  <div class=\\\"flex-initial w-1/3 p-4\\\">\\n\\n\\n\\n\\t<table class=\\\"table-auto text-center container mx-auto\\\">\\n\\t<!-- <caption class=\\\"font-semibold  text-xl italic text-blue-700 pb-4\\\">Session Calendar</caption> -->\\n\\t\\t\\t\\t<thead class=\\\"border-gray-300 italic\\\">\\n\\t\\t\\t\\t<tr class=\\\" border border-gray-300\\\">\\n\\t\\t\\t\\t<th colspan=2 class=\\\"px-2 py-2 text-blue-700\\\">Sessions Calendar </th>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t</thead>\\n\\t\\t\\t\\t\\t\\t<tbody>\\n\\t\\t\\t\\n\\t\\t\\t\\t{#each [1,2,3,4,5, 6, 7,8, 9, 10] as i}\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t<td class=\\\"border px-2 py-2 text-3xl {list_sport[list_sport.length-i]}\\\"></td>\\n\\t\\t\\t\\t<td class=\\\"border px-2 py-2\\\">{convert_date(list_date[list_date.length-i])}</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t{/each}\\n\\t\\t\\t</tbody>\\n\\n\\t</table>\\n\\n\\t</div>\\t\\n\\n\\n  </div>\\n\\n</div>\\n\\t\\n\\n</div>\\n\"],\"names\":[],\"mappings\":\"AAkCA,sBAAQ,QAAQ,AAAC,CAAC,AAChB,OAAO,CAAE,KAAK,AAChB,CAAC,AACD,uBAAS,QAAQ,AAAC,CAAC,AACjB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,sBAAQ,QAAQ,AAAC,CAAC,AAChB,OAAO,CAAE,IAAI,AACf,CAAC,AACD,sBAAQ,QAAQ,AAAC,CAAC,AAChB,OAAO,CAAE,IAAI,AACf,CAAC\"}"
};

function preload({ params, query }) {
	return this.fetch(`home.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function custom_sort(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function convert_date(date) {
	return moment(date, "YYYY-MM-DD").format("dddd MMMM D Y");
}

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort);
	let list_date = [];
	let list_sport = [];

	data_raw.forEach(x => {
		list_date.push(x.date);
		list_sport.push(x.sport);
	});
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	$$result.css.add(css);

	return `${($$result.head += `${($$result.title = `<title>Sport App</title>`, "")}`, "")}

<div class="${""}"><div class="${"mb-6 shadow "}"><img src="${"index.jpg"}" alt="${"work harder sign"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md"}"></div>
	
	
	
	<div class="${"p-8"}"><div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-center text-blue-700 font-semibold tracking-widest"}">Welcome to the Sport Performance Assistant !</h1></div>
	

 
<br>


<div class="${"flex "}"><div class="${" w-2/3 p-4"}"><div class="${"divide-y divide-gray-400 "}"><div class="${""}"><h1 class="${"text-blue-700"}">Why using the Sport Assistant App? 
    </h1>
	
	<p class="${"p-4"}">It can be hard to measure progress in sports performance. <br>
	We think this evolution towards better performance is what truly motivates us to give our best in sports sessions.<br>
	This application is here to help you track your progress from one sport session to another.
	</p></div>

<div class="${"pt-8"}"><h1 class="${"text-blue-700"}">How to use the App? 
    </h1>
	<p class="${"p-4"}">Once you finished your sport session, record your performance in the &#39;New Session&#39; tab. <br>
	For now, you can save sessions for running, cycling, swimming and working out. <br>
	Then, go to the &#39;Performance&#39; tab and observe the progress you made.
	</p></div>

<div class="${"pt-8"}"><h1 class="${"text-blue-700"}">What&#39;s next? 
    </h1>
  <div class="${"p-4"}"><p>This is a first version of our website and we intend to improve it further to allow for more features and a better experience.<br>
	We are thinking of implementing options to:</p>
	<lu><li>Add more sports
	</li>
	<li>Delete sessions that were wrongly entered
	</li>
	<li>Add an authentification system
	</li>
	<li>Improve and add new visualizations.
	</li></lu>
	<p>We hope you enjoy our App and that it helps you staying motivated!<br>
	Feel free to contact us to give your thoughts about features you would like to see in the App.</p></div></div></div></div>

  <div class="${"flex-initial w-1/3 p-4"}"><table class="${"table-auto text-center container mx-auto"}">
				<thead class="${"border-gray-300 italic"}"><tr class="${" border border-gray-300"}"><th colspan="${"2"}" class="${"px-2 py-2 text-blue-700"}">Sessions Calendar </th></tr></thead>
						<tbody>${each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], i => `<tr><td class="${"border px-2 py-2 text-3xl " + escape(list_sport[list_sport.length - i]) + " svelte-828loh"}"></td>
				<td class="${"border px-2 py-2"}">${escape(convert_date(list_date[list_date.length - i]))}</td>
				</tr>`)}</tbody></table></div></div></div></div>`;
});

/* src/routes/new_sessions/swimming/new_swimming.svelte generated by Svelte v3.22.3 */

function preload$1({ params, query }) {
	return this.fetch(`new_sessions/swimming.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_swimming = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let date = null, meters = null, minutes = null, nb_sprints = null;

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"swimming2.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>


    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Swimming New Session
        </div></div></div>



<div class="${"flex justify-center text-blue-700 "}"><div class="${"flex-initial w-2/3 p-2"}"><div class="${" p-2"}"><form><label for="${"date"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Date
            </label>
        <input placeholder="${"date"}" required type="${"date"}" id="${"date"}" class="${"text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", date, 1)}>
            <br>

        <label for="${"meters"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Distance (m)</label>
        <input placeholder="${"meters"}" required type="${"number"}" id="${"meters"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", meters, 1)}>
            <br>


        <label for="${"minutes"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Minutes</label>
        <input placeholder="${"minutes"}" required type="${"number"}" id="${"minutes"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", minutes, 1)}>
            <br>

        <label for="${"nb_sprints"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Sprints</label>
        <input placeholder="${"number of sprints"}" required type="${"number"}" id="${"nb_sprints"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", nb_sprints, 1)}>
            <br>
        <div class="${"flex justify-end my-8"}"><div class="${"flex"}"><button type="${"submit"}" class="${"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}">Add Session</button></div></div></form>
            <br>



        <div id="${"add_to_me"}"></div></div></div></div>`;
});

/* src/routes/new_sessions/cycling/new_cycling.svelte generated by Svelte v3.22.3 */

function preload$2({ params, query }) {
	return this.fetch(`new_sessions/cycling.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_cycling = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let date = null, meters = null, minutes = null, elevation = null;

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"bycicle21.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>

    
    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Cycling Performance
        </div></div></div>


<div class="${"flex justify-center text-blue-700 "}"><div class="${"flex-initial w-2/3 p-2"}"><div class="${" p-2"}"><form><label for="${"date"}" class="${" block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Date
            </label>
        <input placeholder="${"date"}" required type="${"date"}" id="${"date"}" class="${"text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", date, 1)}>
            <br>

        <label for="${"meters"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Distance (m)</label>
        <input placeholder="${"meters"}" required type="${"number"}" id="${"meters"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", meters, 1)}>
            <br>


        <label for="${"minutes"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Minutes</label>
        <input placeholder="${"minutes"}" required type="${"number"}" id="${"minutes"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", minutes, 1)}>
            <br>

        <label for="${"elevation"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Elevation (m)</label>
        <input placeholder="${"elevation"}" required type="${"number"}" id="${"elevation"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", elevation, 1)}>
            <br>


        <div class="${"flex justify-end my-8"}"><div class="${"flex"}"><button type="${"submit"}" class="${"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}">Add Session</button></div></div></form>
            <br>



        <div id="${"add_to_me"}"></div></div></div></div>`;
});

/* src/routes/new_sessions/running/new_running.svelte generated by Svelte v3.22.3 */

function preload$3({ params, query }) {
	return this.fetch(`new_sessions/running.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_running = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let date = null, meters = null, minutes = null, elevation = null;

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"running1.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>

    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Running Performance
        </div></div></div>

<div class="${"flex justify-center text-blue-700 "}"><div class="${"flex-initial w-2/3 p-2"}"><div class="${" p-2"}"><form><label for="${"date"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Date
            </label>
        <input placeholder="${"date"}" required type="${"date"}" id="${"date"}" class="${"text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", date, 1)}>
            <br>

        <label for="${"meters"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Distance (m)</label>
        <input placeholder="${"meters"}" required type="${"number"}" id="${"meters"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", meters, 1)}>
            <br>


        <label for="${"minutes"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Minutes</label>
        <input placeholder="${"minutes"}" required type="${"number"}" id="${"minutes"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", minutes, 1)}>
            <br>

        <label for="${"elevation"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"}">Elevation (m)</label>
        <input placeholder="${"elevation"}" required type="${"number"}" id="${"elevation"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"}"${add_attribute("value", elevation, 1)}>
            <br>

        <div class="${"flex justify-end my-8"}"><div class="${"flex"}"><button type="${"submit"}" class="${"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}">Add Session</button></div></div></form>
            <br>



        <div id="${"add_to_me"}"></div></div></div></div>`;
});

/* src/routes/new_sessions/workout/new_workout.svelte generated by Svelte v3.22.3 */

function preload$4({ params, query }) {
	return this.fetch(`new_sessions/workout.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

const New_workout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let date = null;
	let squats_series = 0;
	let stair_climbs_series = 0;
	let bench_climbs_series = 0;
	let leg_press_series = 0;
	let pushups_series = 0;
	let pushups_lateral_series = 0;
	let pushups_jumping_series = 0;
	let pushups_closing_series = 0;
	let pushups_raised_series = 0;
	let abdominal_series = 0;
	let abdominal_lateral_series = 0;
	let abdominal_core_series = 0;
	let bench_series = 0;
	let biceps_weight_series = 0;
	let pullups_series = 0;
	let squats_number = 0;
	let stair_climbs_number = 0;
	let bench_climbs_number = 0;
	let leg_press_number = 0;
	let pushups_number = 0;
	let pushups_lateral_number = 0;
	let pushups_jumping_number = 0;
	let pushups_closing_number = 0;
	let pushups_raised_number = 0;
	let abdominal_number = 0;
	let abdominal_lateral_number = 0;
	let abdominal_core_number = 0;
	let bench_number = 0;
	let biceps_weight_number = 0;
	let pullups_number = 0;
	let null_var = null;

	return `<div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"workout2.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>
    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Workout New Session
        </div></div></div>




<div class="${"flex justify-center text-blue-700"}"><div class="${"flex-initial p-2"}"><div class="${" p-2"}"><form><div class="${"flex"}"><div class="${"flex w-1/3 m-2"}"><label for="${"date"}" class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Date
                </label></div>
                <div class="${"flex w-2/3 m-2"}"><input placeholder="${"date"}" required type="${"date"}" id="${"date"}" class="${"text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", date, 1)}></div></div>
            <br>


            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide  text-grey-darker text-xs font-bold p-2"}">Example </label></div>
                <div class="${"flex w-1/2 m-2"}"><input readonly placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", null_var, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input readonly placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", null_var, 1)}></div></div>

            <label class="${" block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2"}">Legs</label>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide  text-grey-darker text-xs font-bold p-2"}">Squats</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", squats_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", squats_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Stair Climbs</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", stair_climbs_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", stair_climbs_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Bench Climbs</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", bench_climbs_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", bench_climbs_number, 1)}></div></div>
            
            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Leg Press</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", leg_press_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", leg_press_number, 1)}></div></div>

            <br>

            <label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2"}">Push-ups
            </label>



            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Regular</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_number, 1)}></div></div>

            




            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Lateral</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_lateral_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_lateral_number, 1)}></div></div>

            
            
            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Jumping</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_jumping_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_jumping_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Closing</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_closing_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_closing_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Raised</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_raised_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pushups_raised_number, 1)}></div></div>

            <br>

            <label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2"}">Abdominals
            </label>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Regular</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Lateral</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_lateral_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_lateral_number, 1)}></div></div>
            
            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Core</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_core_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", abdominal_core_number, 1)}></div></div>

            <br>

            <label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2"}">Others
            </label>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Bench</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", bench_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", bench_number, 1)}></div></div>

            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold"}">Biceps Weight</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", biceps_weight_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", biceps_weight_number, 1)}></div></div>
            
            <div class="${"flex"}"><div class="${"flex w-1/2 m-2"}"><label class="${"block uppercase tracking-wide text-grey-darker text-xs font-bold p-2"}">Pull-ups</label></div>
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"series"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pullups_series, 1)}></div>    
                <div class="${"flex w-1/2 m-2"}"><input placeholder="${"repetitions"}" type="${"number"}" class="${"appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2"}"${add_attribute("value", pullups_number, 1)}></div></div>



        <div class="${"flex justify-end mx-2 my-8"}"><div class="${"flex"}"><button type="${"submit"}" class="${"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}">Add Session</button></div></div></form>
            <br>



        <div id="${"add_to_me"}"></div></div></div></div>`;
});

/* src/routes/Box.svelte generated by Svelte v3.22.3 */

const css$1 = {
	code: ".box.svelte-1vpl77v{width:300px;border:1px solid #aaa;border-radius:2px;box-shadow:2px 2px 8px rgba(0,0,0,0.1);padding:1em;margin:0 0 1em 0}",
	map: "{\"version\":3,\"file\":\"Box.svelte\",\"sources\":[\"Box.svelte\"],\"sourcesContent\":[\"<style>\\n\\t.box {\\n\\t\\twidth: 300px;\\n\\t\\tborder: 1px solid #aaa;\\n\\t\\tborder-radius: 2px;\\n\\t\\tbox-shadow: 2px 2px 8px rgba(0,0,0,0.1);\\n\\t\\tpadding: 1em;\\n\\t\\tmargin: 0 0 1em 0;\\n\\t}\\n</style>\\n\\n<div class=\\\"box\\\">\\n\\t<slot></slot>\\n</div>\"],\"names\":[],\"mappings\":\"AACC,IAAI,eAAC,CAAC,AACL,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACvC,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AAClB,CAAC\"}"
};

const Box = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$1);
	return `<div class="${"box svelte-1vpl77v"}">${$$slots.default ? $$slots.default({}) : ``}</div>`;
});

/* src/routes/new_session.svelte generated by Svelte v3.22.3 */

const New_session = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<body class="${""}"><div class="${""}"><div class="${"mb-6 shadow "}"><img src="${"workout_3.jpg"}" alt="${"new_session"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md "}"></div>
	<div class="${"p-8"}"><div class="${""}"><div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">Add a new Session</h1></div>

	<div class="${"md:flex justify-center mb-8"}"><div class="${"text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Cycling</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"new_sessions/cycling/new_cycling"}"><img src="${"bycicle21.jpg"}" alt="${"cycling"}" class="${"rounded-lg"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Running</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"new_sessions/running/new_running"}"><img src="${"running1.jpg"}" alt="${"running"}" class="${"rounded-lg"}"></a></div></div></div>
	<div class="${"md:flex justify-center"}"><div class="${" text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Work-out</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"new_sessions/workout/new_workout"}"><img src="${"workout3.jpg"}" alt="${"workout"}" class="${"rounded-lg"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Swimming</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"new_sessions/swimming/new_swimming"}"><img src="${"swimming2.jpg"}" alt="${"swimming"}" class="${"rounded-lg"}"></a></div></div></div></div></div></div></body>







    

`;
});

/* src/routes/performance.svelte generated by Svelte v3.22.3 */

const Performance = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<body class="${""}"><div class="${"mb-6 shadow "}"><img src="${"performance.jpg"}" alt="${"work harder sign"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md "}"></div>

<div class="${"p-8"}"><div class="${""}"><div class="${""}"><div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">See your Performance</h1></div>

	<div class="${"md:flex justify-center mb-8"}"><div class="${"text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Cycling</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/cycling/cycling"}"><img src="${"bycicle21.jpg"}" alt="${"cycling"}" class="${"rounded-lg"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Running</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/running/running"}"><img src="${"running1.jpg"}" alt="${"running"}" class="${"rounded-lg"}"></a></div></div></div>
	<div class="${"md:flex justify-center"}"><div class="${" text-center mx-4 md:w-1/2"}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Work-out</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/workout/workout"}"><img src="${"workout3.jpg"}" alt="${"workout"}" class="${"rounded-lg"}"></a></div></div>
		<div class="${" text-center mx-4  md:w-1/2 "}"><p class="${"font-semibold tracking-wider text-xl text-blue-700 pb-6"}">Swimming</p>
			<div class="${"hover:shadow-2xl hover:border-blue-800"}"><a href="${"sports/swimming/swimming"}"><img src="${"swimming2.jpg"}" alt="${"swimming"}" class="${"rounded-lg"}"></a></div></div></div></div></div></div></body>

`;
});

/* src/routes/tutorial.svelte generated by Svelte v3.22.3 */

const Tutorial = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"mb-6 shadow "}"><img src="${"https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}" alt="${"mountains"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md"}"></div>



<div class="${"flex justify-center p-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">Tutorial</h1></div>
    <div class="${""}"><div class="${" mt-12 justify-center"}"><div class="${"m-16"}"><p class="${"flex justify-center mb-6 font-semibold mb-6 text-xl text-blue-700"}">Where it all starts</p>
                <div class="${"flex justify-center pb-6 "}"><iframe title="${"videotutorial1"}" width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/6uG9lsx-EMo?autoplay=1&loop=1&autopause=1"}" frameborder="${"0"}" allow="${"fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen controls autoplay></iframe></div></div>
            <div class="${"m-16"}"><p class="${"flex justify-center mb-6 font-semibold mb-6 text-xl text-blue-700"}">How to use the application</p>
                <div class="${"flex justify-center pb-6 "}"><iframe title="${"videotutorial2"}" width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/6uG9lsx-EMo"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen controls autoplay></iframe></div></div></div></div>`;
});

/* src/routes/sports/swimming/swimming-charts.svelte generated by Svelte v3.22.3 */

const Swimming_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data } = $$props;

	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart(ctx,
		{
				type: "line",
				data,
				options: {
					scales: {
						yAxes: [
							{
								id: "Distance",
								position: "left",
								scaleLabel: {
									display: true,
									labelString: "Distance (m)",
									beginAtZero: true
								}
							},
							{
								id: "Sprints",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Sprints",
									beginAtZero: true
								},
								gridLines: { display: false }
							},
							{
								id: "Speed",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Speed (km/h)",
									beginAtZero: true
								},
								gridLines: { display: false }
							}
						]
					}
				}
			});
	}

	onMount(createChart);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.createChart === void 0 && $$bindings.createChart && createChart !== void 0) $$bindings.createChart(createChart);
	return `<canvas id="${"myChart"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/swimming/swimming.svelte generated by Svelte v3.22.3 */

const css$2 = {
	code: ".red.svelte-x4tdvp{color:red}.green.svelte-x4tdvp{color:green}",
	map: "{\"version\":3,\"file\":\"swimming.svelte\",\"sources\":[\"swimming.svelte\"],\"sourcesContent\":[\"\\n<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`sports/swimming.json`).then(r => r.json()).then(data_raw => {\\n\\t\\t\\treturn { data_raw };\\n\\t\\t});\\n\\t}\\t\\n    \\n\\n</script>\\n\\n<style>\\n   .red { color: red; }\\n   .green { color: green; }\\n</style>\\n\\n<script>\\nimport moment from 'moment';\\n\\n    import Charts from './swimming-charts.svelte'\\n    export let data_raw\\n    \\n    // Sort list of Json by dates (closest dates to last positions)\\n    function custom_sort(a, b) {\\n        return new Date(a.date).getTime() - new Date(b.date).getTime();\\n    }\\n    data_raw = data_raw.sort(custom_sort)\\n\\nfunction get_last_nb_sessions(int, list){\\n    return list.slice(Math.max(list.length - int, 0))\\n}\\nfunction convert_date(date){\\n\\treturn moment(date, 'YYYY-MM-DD').format('dddd MMMM D Y')\\n}\\nfunction dividevector(a,b){\\n    return a.map((e,i) => e / b[i]);\\n}\\n\\nfunction variation(x_new, x_old){\\n    const variation = Math.round((x_new-x_old)/x_old*100)\\n    return variation\\n}\\n\\nfunction round_1_decimal(float){\\n    return Math.round(float * 10) /10\\n}\\n\\nfunction round_2_decimal(float){\\n    return Math.round(float * 100) / 100\\n}\\n\\n// Compute data for charts\\n\\n    let list_meters = [];\\n    let list_date = [];\\n    let list_sprint = [];\\n    let list_minutes = [];\\n    let list_speed = [];\\n\\n    data_raw.forEach(x => {\\n        list_meters.push(x.meters)\\n        list_date.push(x.date)\\n        list_sprint.push(x.nb_sprint)\\n        list_minutes.push(x.minutes)\\n        let speed = x.meters / x.minutes * 0.06\\n        list_speed.push(round_2_decimal(speed))\\n    })\\n\\n    export const data = {\\n    labels: list_date,\\n    datasets: [{\\n        label: 'Distance',\\n        yAxisID : 'Distance',\\n        data:list_meters,\\n        borderColor: \\\"#192E5B\\\",\\n        fill: false\\n    },\\n    {\\n        label: 'Sprints',\\n        data:list_sprint,\\n        yAxisID : 'Sprints',\\n        borderColor: \\\"#1D65A6\\\",\\n        fill: false\\n    },\\n    {\\n        label: 'Speed',\\n        data:list_speed,\\n        yAxisID : 'Speed',\\n        borderColor: \\\"#72A2C0\\\",\\n        fill: false\\n    }]\\n}\\n\\n// TODO: verifiy ordering of dates and sessions\\n\\nconst average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;\\n\\n\\n// TODO: right now including last session, probably should not\\n\\n// TODO: colors green or red for variations\\n\\n\\n// Compute average distance, speed, sprint, \\n// Last session\\nconst last_distance = list_meters[list_meters.length-1]\\nconst last_hours = list_minutes[list_minutes.length-1]/60\\nconst last_speed = last_distance/1000/last_hours\\nconst last_sprint = list_sprint[list_sprint.length-1]\\n\\n\\n// Last 3 sessions\\n//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))\\n\\nconst distance_3_session = get_last_nb_sessions(3, list_meters)\\nconst minutes_3_session = get_last_nb_sessions(3, list_minutes)\\nconst sprint_3_session = get_last_nb_sessions(3, list_sprint)\\nconst date_3_session = get_last_nb_sessions(3, list_date)\\n\\n\\n\\nconst average_3_distance = average(distance_3_session)\\nconst average_3_sprint = average(sprint_3_session)\\nconst average_3_speed = average(dividevector(distance_3_session , minutes_3_session)) * 60/1000  \\n\\nconst variation_3_distance = variation(last_distance, average_3_distance)\\nconst variation_3_speed = variation(last_speed, average_3_speed)\\nconst variation_3_sprint = variation(last_sprint, average_3_sprint)\\n\\n// Last 10 sessions\\nconst distance_10_session = get_last_nb_sessions(10, list_meters)\\nconst minutes_10_session = get_last_nb_sessions(10, list_minutes)\\nconst sprint_10_session = get_last_nb_sessions(10, list_sprint)\\n\\nconst average_10_distance = average(distance_10_session)\\nconst average_10_sprint = average(sprint_10_session)\\nconst average_10_speed = average(dividevector(distance_10_session , minutes_10_session)) * 60/1000\\n\\nconst variation_10_distance = variation(last_distance, average_10_distance)\\nconst variation_10_speed = variation(last_speed, average_10_speed)\\nconst variation_10_sprint = variation(last_sprint, average_10_sprint)\\n\\nconst nb_displayed = 3\\n\\n\\n\\n</script>\\n\\n\\n<div class='bg-white'>\\n\\n<div class=\\\"mb-20\\\">\\n    <div class=\\\"mb-6 shadow \\\">\\n        <img src=\\\"swimming2.jpg\\\" alt=\\\"cycling\\\" class=\\\"object-cover h-48 w-full shadow rounded-md\\\">\\n    </div>\\n\\n\\n    <div class=\\\"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md\\\">\\n        <div class=\\\"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest\\\">\\n            Swimming Performance\\n        </div>\\n    </div>\\n\\n<div class='p-8'>\\n    <div class='pb-8'>\\n        <h1 class=\\\"text-blue-800  mb-8 \\\">Last Sessions   </h1>\\n     \\n        <div class=\\\"italic grid grid-cols-3 divide-x divide-gray-400\\\">\\n            {#each get_last_nb_sessions(3, list_date) as date}\\n            <div class=\\\"text-center\\\">{convert_date(date)}</div>\\n            {/each}\\n        </div>\\n    </div>\\n\\n    <div class=\\\"divide-y mt-16\\\">\\n        <h1 class=\\\"text-blue-800\\\">Performance Tables</h1>\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance evolution of main metrics</caption>\\n            <thead class=\\\"border-gray-300 italic\\\">\\n                <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n                <th class=\\\"px-4 py-2\\\">Metrics</th>\\n                <th class=\\\"px-4 py-2\\\">Value</th>\\n                <th colspan=2 class=\\\"px-4 py-2 \\\">vs. Last 3 sessions</th>\\n                <th colspan=2 class=\\\"px-4 py-2\\\">vs. Last 10 sessions</th>\\n                </tr>\\n            </thead>\\n            <tbody>\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">Distance (m)</td>\\n                <td class=\\\"border px-4 py-2\\\">{last_distance}</td>\\n                <td class=\\\"border px-4 py-2\\\">{Math.round(average_3_distance)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_distance>=0}\\\" class:red=\\\"{variation_3_distance<0}\\\">{variation_3_distance}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_distance)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_distance>=0}\\\" class:red=\\\"{variation_10_distance<0}\\\">{variation_10_distance}%</td>\\n                </tr>\\n                <tr class=\\\"\\\">\\n                <td class=\\\"border px-4 py-2\\\">Speed (km/h)</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(last_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_3_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_speed>=0}\\\" class:red=\\\"{variation_3_speed<0}\\\">{variation_3_speed}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_speed>=0}\\\" class:red=\\\"{variation_10_speed<0}\\\">{variation_10_speed}%</td>\\n                </tr>\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">Sprints</td>\\n                <td class=\\\"border px-4 py-2\\\">{last_sprint}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_3_sprint)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_sprint>=0}\\\" class:red=\\\"{variation_3_sprint<0}\\\">{variation_3_sprint}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_sprint)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_sprint>=0}\\\" class:red=\\\"{variation_10_sprint<0}\\\">{variation_10_sprint}%</td>\\n        \\n                </tr>\\n            </tbody>\\n            </table>\\n        </div>\\n\\n\\n\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance of last sessions</caption>           \\n            <thead class=\\\"italic border-gray-300\\\">\\n                <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n                <th class=\\\"px-4 py-2\\\">Date</th>\\n                <th class=\\\"px-4 py-2\\\">Distance (m)</th>\\n                <th class=\\\"px-4 py-2\\\">Time (min)</th>\\n                <th class=\\\"px-4 py-2\\\">Speed (km/h)</th>\\n                <th class=\\\"px-4 py-2\\\">Sprints</th>\\n                \\n                </tr>\\n            </thead>\\n\\n            <tbody>\\n            \\n                {#each distance_3_session as distance, i}\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">{date_3_session[i]}</td>\\n                <td class=\\\"border px-4 py-2\\\">{distance}</td>\\n                <td class=\\\"border px-4 py-2\\\">{minutes_3_session[i]}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal((distance/1000) / (minutes_3_session[i]/60)) }</td>\\n                <td class=\\\"border px-4 py-2\\\">{sprint_3_session[i]}</td>\\n                \\n\\n                </tr>\\n                {/each}\\n            </tbody>\\n            </table>\\n        </div>\\n        <div class=\\\"mt-8\\\">\\n            <h1 class=\\\"text-blue-800 mb-8 mt-16\\\">Performance Chart</h1>\\n            <Charts {data} /> \\n        </div>\\n    </div></div>\\n</div>\\n\\n</div>\"],\"names\":[],\"mappings\":\"AAYG,IAAI,cAAC,CAAC,AAAC,KAAK,CAAE,GAAG,AAAE,CAAC,AACpB,MAAM,cAAC,CAAC,AAAC,KAAK,CAAE,KAAK,AAAE,CAAC\"}"
};

function preload$5({ params, query }) {
	return this.fetch(`sports/swimming.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

// Sort list of Json by dates (closest dates to last positions)
function custom_sort$1(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function get_last_nb_sessions(int, list) {
	return list.slice(Math.max(list.length - int, 0));
}

function dividevector(a, b) {
	return a.map((e, i) => e / b[i]);
}

function variation(x_new, x_old) {
	const variation = Math.round((x_new - x_old) / x_old * 100);
	return variation;
}

function round_2_decimal(float) {
	return Math.round(float * 100) / 100;
}

const Swimming = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort$1);

	function convert_date(date) {
		return moment(date, "YYYY-MM-DD").format("dddd MMMM D Y");
	}

	// Compute data for charts
	let list_meters = [];

	let list_date = [];
	let list_sprint = [];
	let list_minutes = [];
	let list_speed = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_sprint.push(x.nb_sprint);
		list_minutes.push(x.minutes);
		let speed = x.meters / x.minutes * 0.06;
		list_speed.push(round_2_decimal(speed));
	});

	const data = {
		labels: list_date,
		datasets: [
			{
				label: "Distance",
				yAxisID: "Distance",
				data: list_meters,
				borderColor: "#192E5B",
				fill: false
			},
			{
				label: "Sprints",
				data: list_sprint,
				yAxisID: "Sprints",
				borderColor: "#1D65A6",
				fill: false
			},
			{
				label: "Speed",
				data: list_speed,
				yAxisID: "Speed",
				borderColor: "#72A2C0",
				fill: false
			}
		]
	};

	// TODO: verifiy ordering of dates and sessions
	const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

	// TODO: right now including last session, probably should not
	// TODO: colors green or red for variations
	// Compute average distance, speed, sprint, 
	// Last session
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_sprint = list_sprint[list_sprint.length - 1];

	// Last 3 sessions
	//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))
	const distance_3_session = get_last_nb_sessions(3, list_meters);

	const minutes_3_session = get_last_nb_sessions(3, list_minutes);
	const sprint_3_session = get_last_nb_sessions(3, list_sprint);
	const date_3_session = get_last_nb_sessions(3, list_date);
	const average_3_distance = average(distance_3_session);
	const average_3_sprint = average(sprint_3_session);
	const average_3_speed = average(dividevector(distance_3_session, minutes_3_session)) * 60 / 1000;
	const variation_3_distance = variation(last_distance, average_3_distance);
	const variation_3_speed = variation(last_speed, average_3_speed);
	const variation_3_sprint = variation(last_sprint, average_3_sprint);

	// Last 10 sessions
	const distance_10_session = get_last_nb_sessions(10, list_meters);

	const minutes_10_session = get_last_nb_sessions(10, list_minutes);
	const sprint_10_session = get_last_nb_sessions(10, list_sprint);
	const average_10_distance = average(distance_10_session);
	const average_10_sprint = average(sprint_10_session);
	const average_10_speed = average(dividevector(distance_10_session, minutes_10_session)) * 60 / 1000;
	const variation_10_distance = variation(last_distance, average_10_distance);
	const variation_10_speed = variation(last_speed, average_10_speed);
	const variation_10_sprint = variation(last_sprint, average_10_sprint);
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css$2);

	return `<div class="${"bg-white"}"><div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"swimming2.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>


    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Swimming Performance
        </div></div>

<div class="${"p-8"}"><div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions   </h1>
     
        <div class="${"italic grid grid-cols-3 divide-x divide-gray-400"}">${each(get_last_nb_sessions(3, list_date), date => `<div class="${"text-center"}">${escape(convert_date(date))}</div>`)}</div></div>

    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Performance Tables</h1>
        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance evolution of main metrics</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Metrics</th>
                <th class="${"px-4 py-2"}">Value</th>
                <th colspan="${"2"}" class="${"px-4 py-2 "}">vs. Last 3 sessions</th>
                <th colspan="${"2"}" class="${"px-4 py-2"}">vs. Last 10 sessions</th></tr></thead>
            <tbody><tr><td class="${"border px-4 py-2"}">Distance (m)</td>
                <td class="${"border px-4 py-2"}">${escape(last_distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(Math.round(average_3_distance))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_distance >= 0 ? "green" : "") + " " + (variation_3_distance < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_distance)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_10_distance))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_distance >= 0 ? "green" : "") + " " + (variation_10_distance < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_distance)}%</td></tr>
                <tr class="${""}"><td class="${"border px-4 py-2"}">Speed (km/h)</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(last_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_3_speed))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_speed >= 0 ? "green" : "") + " " + (variation_3_speed < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_speed)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_10_speed))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_speed >= 0 ? "green" : "") + " " + (variation_10_speed < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_speed)}%</td></tr>
                <tr><td class="${"border px-4 py-2"}">Sprints</td>
                <td class="${"border px-4 py-2"}">${escape(last_sprint)}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_3_sprint))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_sprint >= 0 ? "green" : "") + " " + (variation_3_sprint < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_sprint)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(average_10_sprint))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_sprint >= 0 ? "green" : "") + " " + (variation_10_sprint < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_sprint)}%</td></tr></tbody></table></div>



        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance of last sessions</caption>           
            <thead class="${"italic border-gray-300"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Date</th>
                <th class="${"px-4 py-2"}">Distance (m)</th>
                <th class="${"px-4 py-2"}">Time (min)</th>
                <th class="${"px-4 py-2"}">Speed (km/h)</th>
                <th class="${"px-4 py-2"}">Sprints</th></tr></thead>

            <tbody>${each(distance_3_session, (distance, i) => `<tr><td class="${"border px-4 py-2"}">${escape(date_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(minutes_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal(distance / 1000 / (minutes_3_session[i] / 60)))}</td>
                <td class="${"border px-4 py-2"}">${escape(sprint_3_session[i])}</td>
                

                </tr>`)}</tbody></table></div>
        <div class="${"mt-8"}"><h1 class="${"text-blue-800 mb-8 mt-16"}">Performance Chart</h1>
            ${validate_component(Swimming_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div></div></div>`;
});

/* src/routes/sports/cycling/cycling-charts.svelte generated by Svelte v3.22.3 */

const Cycling_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data } = $$props;

	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart(ctx,
		{
				type: "line",
				data,
				options: {
					scales: {
						yAxes: [
							{
								id: "Distance",
								position: "left",
								scaleLabel: {
									display: true,
									labelString: "Distance (m)",
									beginAtZero: true
								}
							},
							{
								id: "Elevation",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Elevation (m)",
									beginAtZero: true
								},
								gridLines: { display: false }
							},
							{
								id: "Speed",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Speed (km/h)",
									beginAtZero: true
								},
								gridLines: { display: false }
							}
						]
					}
				}
			});
	}

	onMount(createChart);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.createChart === void 0 && $$bindings.createChart && createChart !== void 0) $$bindings.createChart(createChart);
	return `<canvas id="${"myChart"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/cycling/cycling.svelte generated by Svelte v3.22.3 */

const css$3 = {
	code: ".red.svelte-x4tdvp{color:red}.green.svelte-x4tdvp{color:green}",
	map: "{\"version\":3,\"file\":\"cycling.svelte\",\"sources\":[\"cycling.svelte\"],\"sourcesContent\":[\"\\n\\n<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {\\n\\t\\t\\treturn { data_raw };\\n\\t\\t});\\n\\t}\\t\\n    \\n\\n</script>\\n\\n<style>\\n   .red { color: red; }\\n   .green { color: green; }\\n</style>\\n\\n\\n<script>\\nimport moment from 'moment';\\n\\n    import Charts from './cycling-charts.svelte'\\n    export let data_raw\\n    function get_last_nb_sessions(int, list){\\n    return list.slice(Math.max(list.length - int, 0))\\n}\\nfunction convert_date(date){\\n\\treturn moment(date, 'YYYY-MM-DD').format('dddd MMMM D Y')\\n}\\nfunction dividevector(a,b){\\n    return a.map((e,i) => e / b[i]);\\n}\\n\\nfunction variation(x_new, x_old){\\n    const variation = Math.round((x_new-x_old)/x_old*100)\\n    return variation\\n}\\n\\nfunction round_1_decimal(float){\\n    return Math.round(float * 10) /10\\n}\\n\\nfunction round_2_decimal(float){\\n    return Math.round(float * 100) / 100\\n}\\n    // Sort list of Json by dates (closest dates to last positions)\\n    function custom_sort(a, b) {\\n        return new Date(a.date).getTime() - new Date(b.date).getTime();\\n    }\\n    data_raw = data_raw.sort(custom_sort)\\n\\n// Compute data for charts\\n\\n    let list_meters = [];\\n    let list_date = [];\\n    let list_elevation = [];\\n    let list_minutes = [];\\n    let list_speed = [];\\n\\n    data_raw.forEach(x => {\\n        list_meters.push(x.meters)\\n        list_date.push(x.date)\\n        list_elevation.push(x.elevation)\\n        list_minutes.push(x.minutes)\\n        let speed = x.meters / x.minutes * 0.06\\n        list_speed.push(round_2_decimal(speed))\\n    })\\n\\n    export const data = {\\n    labels: list_date,\\n    datasets: [{\\n        label: 'Distance',\\n        yAxisID : 'Distance',\\n        data:list_meters,\\n        borderColor: \\\"#192E5B\\\",\\n        fill: false\\n    },\\n    {\\n        label: 'Elevation',\\n        data:list_elevation,\\n        yAxisID : 'Elevation',\\n        borderColor: \\\"#1D65A6\\\",\\n        fill: false\\n    },\\n    {\\n        label: 'Speed',\\n        data:list_speed,\\n        yAxisID : 'Speed',\\n        borderColor: \\\"#72A2C0\\\",\\n        fill: false\\n    }]\\n}\\n\\n// TODO: verifiy ordering of dates and sessions\\n\\nconst average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;\\n\\n\\n// TODO: right now including last session, probably should not\\n\\n// TODO: colors green or red for variations\\n\\n\\n// Compute average distance, speed, elevation, \\n// Last session\\nconst last_distance = list_meters[list_meters.length-1]\\nconst last_hours = list_minutes[list_minutes.length-1]/60\\nconst last_speed = last_distance/1000/last_hours\\nconst last_elevation = list_elevation[list_elevation.length-1]\\n\\n\\n// Last 3 sessions\\n//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))\\n\\nconst distance_3_session = get_last_nb_sessions(3, list_meters)\\nconst minutes_3_session = get_last_nb_sessions(3, list_minutes)\\nconst elevation_3_session = get_last_nb_sessions(3, list_elevation)\\nconst date_3_session = get_last_nb_sessions(3, list_date)\\n\\n\\n\\nconst average_3_distance = average(distance_3_session)\\nconst average_3_elevation = average(elevation_3_session)\\nconst average_3_speed = average(dividevector(distance_3_session , minutes_3_session)) * 60/1000  \\n\\nconst variation_3_distance = variation(last_distance, average_3_distance)\\nconst variation_3_speed = variation(last_speed, average_3_speed)\\nconst variation_3_elevation = variation(last_elevation, average_3_elevation)\\n\\n// Last 10 sessions\\nconst distance_10_session = get_last_nb_sessions(10, list_meters)\\nconst minutes_10_session = get_last_nb_sessions(10, list_minutes)\\nconst elevation_10_session = get_last_nb_sessions(10, list_elevation)\\n\\nconst average_10_distance = average(distance_10_session)\\nconst average_10_elevation = average(elevation_10_session)\\nconst average_10_speed = average(dividevector(distance_10_session , minutes_10_session)) * 60/1000\\n\\nconst variation_10_distance = variation(last_distance, average_10_distance)\\nconst variation_10_speed = variation(last_speed, average_10_speed)\\nconst variation_10_elevation = variation(last_elevation, average_10_elevation)\\n\\nconst nb_displayed = 3\\n\\n\\n\\n</script>\\n<div class='bg-white'>\\n\\n<div class=\\\"mb-20\\\">\\n    <div class=\\\"mb-6 shadow \\\">\\n        <img src=\\\"bycicle21.jpg\\\" alt=\\\"cycling\\\" class=\\\"object-cover h-48 w-full shadow rounded-md\\\">\\n    </div>\\n\\n    \\n    <div class=\\\"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md\\\">\\n        <div class=\\\"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest\\\">\\n            Cycling Performance\\n        </div>\\n    </div>\\n<div class='p-8'>\\n    <div class='pb-8'>\\n        <h1 class=\\\"text-blue-800  mb-8 \\\">Last Sessions</h1>\\n     \\n        <div class=\\\"italic grid grid-cols-3 divide-x divide-gray-400\\\">\\n            {#each get_last_nb_sessions(3, list_date) as date}\\n            <div class=\\\"text-center\\\">{convert_date(date)}</div>\\n            {/each}\\n        </div>\\n    </div>\\n\\n    <div class=\\\"divide-y mt-16\\\">\\n        <h1 class=\\\"text-blue-800\\\">Performance Tables</h1>\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance evolution of main metrics</caption>\\n            <thead class=\\\"border-gray-300 italic\\\">\\n                <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n                <th class=\\\"px-4 py-2\\\">Metrics</th>\\n                <th class=\\\"px-4 py-2\\\">Value</th>\\n                <th colspan=2 class=\\\"px-4 py-2 \\\">vs. Last 3 sessions</th>\\n                <th colspan=2 class=\\\"px-4 py-2\\\">vs. Last 10 sessions</th>\\n                </tr>\\n            </thead>\\n            <tbody>\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">Distance (m)</td>\\n                <td class=\\\"border px-4 py-2\\\">{last_distance}</td>\\n                <td class=\\\"border px-4 py-2\\\">{Math.round(average_3_distance)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_distance>=0}\\\" class:red=\\\"{variation_3_distance<0}\\\">{variation_3_distance}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_distance)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_distance>=0}\\\" class:red=\\\"{variation_10_distance<0}\\\">{variation_10_distance}%</td>\\n                </tr>\\n                <tr class=\\\"\\\">\\n                <td class=\\\"border px-4 py-2\\\">Speed (km/h)</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(last_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_3_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_speed>=0}\\\" class:red=\\\"{variation_3_speed<0}\\\">{variation_3_speed}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_speed>=0}\\\" class:red=\\\"{variation_10_speed<0}\\\">{variation_10_speed}%</td>\\n                </tr>\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">Elevation</td>\\n                <td class=\\\"border px-4 py-2\\\">{last_elevation}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_3_elevation)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_elevation>=0}\\\" class:red=\\\"{variation_3_elevation<0}\\\">{variation_3_elevation}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_elevation)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_elevation>=0}\\\" class:red=\\\"{variation_10_elevation<0}\\\">{variation_10_elevation}%</td>\\n        \\n                </tr>\\n            </tbody>\\n            </table>\\n        </div>\\n\\n\\n\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance of last sessions</caption>\\n            <thead class=\\\"italic border-gray-300\\\">\\n                <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n                <th class=\\\"px-4 py-2\\\">Date</th>\\n                <th class=\\\"px-4 py-2\\\">Distance (m)</th>\\n                <th class=\\\"px-4 py-2\\\">Time (min)</th>\\n                <th class=\\\"px-4 py-2\\\">Speed (km/h)</th>\\n                <th class=\\\"px-4 py-2\\\">Elevation (m)</th>\\n                \\n                </tr>\\n            </thead>\\n\\n            <tbody>\\n            \\n                {#each distance_3_session as distance, i}\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">{date_3_session[i]}</td>\\n                <td class=\\\"border px-4 py-2\\\">{distance}</td>\\n                <td class=\\\"border px-4 py-2\\\">{minutes_3_session[i]}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal((distance/1000) / (minutes_3_session[i]/60)) }</td>\\n                <td class=\\\"border px-4 py-2\\\">{elevation_3_session[i]}</td>\\n                \\n\\n                </tr>\\n                {/each}\\n            </tbody>\\n            </table>\\n        </div>\\n        <div class=\\\"mt-8\\\">\\n            <h1 class=\\\"text-blue-800 mb-8 mt-16\\\">Performance Chart</h1>\\n            <Charts {data} /> \\n        </div>\\n    </div></div>\\n</div>\\n\\n\\n</div>\"],\"names\":[],\"mappings\":\"AAaG,IAAI,cAAC,CAAC,AAAC,KAAK,CAAE,GAAG,AAAE,CAAC,AACpB,MAAM,cAAC,CAAC,AAAC,KAAK,CAAE,KAAK,AAAE,CAAC\"}"
};

function preload$6({ params, query }) {
	return this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function get_last_nb_sessions$1(int, list) {
	return list.slice(Math.max(list.length - int, 0));
}

function dividevector$1(a, b) {
	return a.map((e, i) => e / b[i]);
}

function variation$1(x_new, x_old) {
	const variation = Math.round((x_new - x_old) / x_old * 100);
	return variation;
}

function round_2_decimal$1(float) {
	return Math.round(float * 100) / 100;
}

// Sort list of Json by dates (closest dates to last positions)
function custom_sort$2(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

const Cycling = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;

	function convert_date(date) {
		return moment(date, "YYYY-MM-DD").format("dddd MMMM D Y");
	}

	data_raw = data_raw.sort(custom_sort$2);

	// Compute data for charts
	let list_meters = [];

	let list_date = [];
	let list_elevation = [];
	let list_minutes = [];
	let list_speed = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_elevation.push(x.elevation);
		list_minutes.push(x.minutes);
		let speed = x.meters / x.minutes * 0.06;
		list_speed.push(round_2_decimal$1(speed));
	});

	const data = {
		labels: list_date,
		datasets: [
			{
				label: "Distance",
				yAxisID: "Distance",
				data: list_meters,
				borderColor: "#192E5B",
				fill: false
			},
			{
				label: "Elevation",
				data: list_elevation,
				yAxisID: "Elevation",
				borderColor: "#1D65A6",
				fill: false
			},
			{
				label: "Speed",
				data: list_speed,
				yAxisID: "Speed",
				borderColor: "#72A2C0",
				fill: false
			}
		]
	};

	// TODO: verifiy ordering of dates and sessions
	const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

	// TODO: right now including last session, probably should not
	// TODO: colors green or red for variations
	// Compute average distance, speed, elevation, 
	// Last session
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_elevation = list_elevation[list_elevation.length - 1];

	// Last 3 sessions
	//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))
	const distance_3_session = get_last_nb_sessions$1(3, list_meters);

	const minutes_3_session = get_last_nb_sessions$1(3, list_minutes);
	const elevation_3_session = get_last_nb_sessions$1(3, list_elevation);
	const date_3_session = get_last_nb_sessions$1(3, list_date);
	const average_3_distance = average(distance_3_session);
	const average_3_elevation = average(elevation_3_session);
	const average_3_speed = average(dividevector$1(distance_3_session, minutes_3_session)) * 60 / 1000;
	const variation_3_distance = variation$1(last_distance, average_3_distance);
	const variation_3_speed = variation$1(last_speed, average_3_speed);
	const variation_3_elevation = variation$1(last_elevation, average_3_elevation);

	// Last 10 sessions
	const distance_10_session = get_last_nb_sessions$1(10, list_meters);

	const minutes_10_session = get_last_nb_sessions$1(10, list_minutes);
	const elevation_10_session = get_last_nb_sessions$1(10, list_elevation);
	const average_10_distance = average(distance_10_session);
	const average_10_elevation = average(elevation_10_session);
	const average_10_speed = average(dividevector$1(distance_10_session, minutes_10_session)) * 60 / 1000;
	const variation_10_distance = variation$1(last_distance, average_10_distance);
	const variation_10_speed = variation$1(last_speed, average_10_speed);
	const variation_10_elevation = variation$1(last_elevation, average_10_elevation);
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css$3);

	return `<div class="${"bg-white"}"><div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"bycicle21.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>

    
    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Cycling Performance
        </div></div>
<div class="${"p-8"}"><div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
        <div class="${"italic grid grid-cols-3 divide-x divide-gray-400"}">${each(get_last_nb_sessions$1(3, list_date), date => `<div class="${"text-center"}">${escape(convert_date(date))}</div>`)}</div></div>

    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Performance Tables</h1>
        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance evolution of main metrics</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Metrics</th>
                <th class="${"px-4 py-2"}">Value</th>
                <th colspan="${"2"}" class="${"px-4 py-2 "}">vs. Last 3 sessions</th>
                <th colspan="${"2"}" class="${"px-4 py-2"}">vs. Last 10 sessions</th></tr></thead>
            <tbody><tr><td class="${"border px-4 py-2"}">Distance (m)</td>
                <td class="${"border px-4 py-2"}">${escape(last_distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(Math.round(average_3_distance))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_distance >= 0 ? "green" : "") + " " + (variation_3_distance < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_distance)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_10_distance))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_distance >= 0 ? "green" : "") + " " + (variation_10_distance < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_distance)}%</td></tr>
                <tr class="${""}"><td class="${"border px-4 py-2"}">Speed (km/h)</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(last_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_3_speed))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_speed >= 0 ? "green" : "") + " " + (variation_3_speed < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_speed)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_10_speed))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_speed >= 0 ? "green" : "") + " " + (variation_10_speed < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_speed)}%</td></tr>
                <tr><td class="${"border px-4 py-2"}">Elevation</td>
                <td class="${"border px-4 py-2"}">${escape(last_elevation)}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_3_elevation))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_elevation >= 0 ? "green" : "") + " " + (variation_3_elevation < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_elevation)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(average_10_elevation))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_elevation >= 0 ? "green" : "") + " " + (variation_10_elevation < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_elevation)}%</td></tr></tbody></table></div>



        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance of last sessions</caption>
            <thead class="${"italic border-gray-300"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Date</th>
                <th class="${"px-4 py-2"}">Distance (m)</th>
                <th class="${"px-4 py-2"}">Time (min)</th>
                <th class="${"px-4 py-2"}">Speed (km/h)</th>
                <th class="${"px-4 py-2"}">Elevation (m)</th></tr></thead>

            <tbody>${each(distance_3_session, (distance, i) => `<tr><td class="${"border px-4 py-2"}">${escape(date_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(minutes_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$1(distance / 1000 / (minutes_3_session[i] / 60)))}</td>
                <td class="${"border px-4 py-2"}">${escape(elevation_3_session[i])}</td>
                

                </tr>`)}</tbody></table></div>
        <div class="${"mt-8"}"><h1 class="${"text-blue-800 mb-8 mt-16"}">Performance Chart</h1>
            ${validate_component(Cycling_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div></div></div>`;
});

/* src/routes/sports/running/running-charts.svelte generated by Svelte v3.22.3 */

const Running_charts = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data } = $$props;

	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart(ctx,
		{
				type: "line",
				data,
				options: {
					scales: {
						yAxes: [
							{
								id: "Distance",
								position: "left",
								scaleLabel: {
									display: true,
									labelString: "Distance (m)",
									beginAtZero: true
								}
							},
							{
								id: "Elevation",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Elevation (m)",
									beginAtZero: true
								},
								gridLines: { display: false }
							},
							{
								id: "Speed",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Speed (km/h)",
									beginAtZero: true
								},
								gridLines: { display: false }
							}
						]
					}
				}
			});
	}

	onMount(createChart);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	if ($$props.createChart === void 0 && $$bindings.createChart && createChart !== void 0) $$bindings.createChart(createChart);
	return `<canvas id="${"myChart"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/running/running.svelte generated by Svelte v3.22.3 */

const css$4 = {
	code: ".red.svelte-x4tdvp{color:red}.green.svelte-x4tdvp{color:green}",
	map: "{\"version\":3,\"file\":\"running.svelte\",\"sources\":[\"running.svelte\"],\"sourcesContent\":[\"\\n\\n<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`sports/running.json`).then(r => r.json()).then(data_raw => {\\n\\t\\t\\treturn { data_raw };\\n\\t\\t});\\n\\t}\\t\\n    \\n\\n</script>\\n\\n<style>\\n   .red { color: red; }\\n   .green { color: green; }\\n</style>\\n\\n<script>\\nimport moment from 'moment';\\n\\nimport Charts from './running-charts.svelte'\\n    export let data_raw\\n    // Sort list of Json by dates (closest dates to last positions)\\n    function custom_sort(a, b) {\\n        return new Date(a.date).getTime() - new Date(b.date).getTime();\\n    }\\n    data_raw = data_raw.sort(custom_sort)\\nfunction get_last_nb_sessions(int, list){\\n    return list.slice(Math.max(list.length - int, 0))\\n}\\nfunction convert_date(date){\\n\\treturn moment(date, 'YYYY-MM-DD').format('dddd MMMM D Y')\\n}\\nfunction dividevector(a,b){\\n    return a.map((e,i) => e / b[i]);\\n}\\n\\nfunction variation(x_new, x_old){\\n    const variation = Math.round((x_new-x_old)/x_old*100)\\n    return variation\\n}\\n\\nfunction round_1_decimal(float){\\n    return Math.round(float * 10) /10\\n}\\n\\nfunction round_2_decimal(float){\\n    return Math.round(float * 100) / 100\\n}\\n// Compute data for charts\\n\\n    let list_meters = [];\\n    let list_date = [];\\n    let list_elevation = [];\\n    let list_minutes = [];\\n    let list_speed = [];\\n\\n    data_raw.forEach(x => {\\n        list_meters.push(x.meters)\\n        list_date.push(x.date)\\n        list_elevation.push(x.elevation)\\n        list_minutes.push(x.minutes)\\n        let speed = x.meters / x.minutes * 0.06\\n        list_speed.push(round_2_decimal(speed))\\n    })\\n\\n    export const data = {\\n    labels: list_date,\\n    datasets:[{\\n        label: 'Distance',\\n        yAxisID : 'Distance',\\n        data:list_meters,\\n        borderColor: \\\"#192E5B\\\",\\n        fill: false\\n    },\\n    {\\n        label: 'Elevation',\\n        data:list_elevation,\\n        yAxisID : 'Elevation',\\n        borderColor: \\\"#1D65A6\\\",\\n        fill: false\\n    },\\n    {\\n        label: 'Speed',\\n        data:list_speed,\\n        yAxisID : 'Speed',\\n        borderColor: \\\"#72A2C0\\\",\\n        fill: false\\n    }]\\n}\\n\\n// TODO: verifiy ordering of dates and sessions\\n\\nconst average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;\\n\\n\\n// TODO: right now including last session, probably should not\\n\\n// TODO: liste des options bool avec les métriques qu'on veut observer (rythme cardiaque)\\n\\n// TODO: colors green or red for variations\\n\\n\\n\\n\\n// Compute average distance, speed, elevation, \\n// Last session\\nconst last_distance = list_meters[list_meters.length-1]\\nconst last_hours = list_minutes[list_minutes.length-1]/60\\nconst last_speed = last_distance/1000/last_hours\\nconst last_elevation = list_elevation[list_elevation.length-1]\\n\\n\\n// Last 3 sessions\\n//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))\\n\\nconst distance_3_session = get_last_nb_sessions(3, list_meters)\\nconst minutes_3_session = get_last_nb_sessions(3, list_minutes)\\nconst elevation_3_session = get_last_nb_sessions(3, list_elevation)\\nconst date_3_session = get_last_nb_sessions(3, list_date)\\n\\n\\n\\nconst average_3_distance = average(distance_3_session)\\nconst average_3_elevation = average(elevation_3_session)\\nconst average_3_speed = average(dividevector(distance_3_session , minutes_3_session)) * 60/1000  \\n\\nconst variation_3_distance = variation(last_distance, average_3_distance)\\nconst variation_3_speed = variation(last_speed, average_3_speed)\\nconst variation_3_elevation = variation(last_elevation, average_3_elevation)\\n\\n// Last 10 sessions\\nconst distance_10_session = get_last_nb_sessions(10, list_meters)\\nconst minutes_10_session = get_last_nb_sessions(10, list_minutes)\\nconst elevation_10_session = get_last_nb_sessions(10, list_elevation)\\n\\nconst average_10_distance = average(distance_10_session)\\nconst average_10_elevation = average(elevation_10_session)\\nconst average_10_speed = average(dividevector(distance_10_session , minutes_10_session)) * 60/1000\\n\\nconst variation_10_distance = variation(last_distance, average_10_distance)\\nconst variation_10_speed = variation(last_speed, average_10_speed)\\nconst variation_10_elevation = variation(last_elevation, average_10_elevation)\\n\\nconst nb_displayed = 3\\n\\n\\n\\n</script>\\n\\n<div class='bg-white'>\\n\\n<div class=\\\"mb-20\\\">\\n\\n    <div class=\\\"mb-6 shadow \\\">\\n        <img src=\\\"running1.jpg\\\" alt=\\\"cycling\\\" class=\\\"object-cover h-48 w-full shadow rounded-md\\\">\\n    </div>\\n\\n    <div class=\\\"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md\\\">\\n        <div class=\\\"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest\\\">\\n            Running Performance\\n        </div>\\n    </div>\\n    <div class='p-8'>\\n    <div class='pb-8'>\\n        <h1 class=\\\"text-blue-800  mb-8 \\\">Last Sessions</h1>\\n     \\n        <div class=\\\"italic grid grid-cols-3 divide-x divide-gray-400\\\">\\n            {#each get_last_nb_sessions(3, list_date) as date}\\n            <div class=\\\"text-center\\\">{convert_date(date)}</div>\\n            {/each}\\n        </div>\\n    </div>\\n\\n\\n    <div class='divide-y mt-16'>\\n        <h1 class=\\\"text-blue-800\\\">Performance Tables</h1>\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance evolution of main metrics</caption>\\n            <thead class=\\\"border-gray-300 italic\\\">\\n                <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n                <th class=\\\"px-4 py-2\\\">Metrics</th>\\n                <th class=\\\"px-4 py-2\\\">Value</th>\\n                <th colspan=2 class=\\\"px-4 py-2 \\\">vs. Last 3 sessions</th>\\n                <th colspan=2 class=\\\"px-4 py-2\\\">vs. Last 10 sessions</th>\\n                </tr>\\n            </thead>\\n            <tbody>\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">Distance (m)</td>\\n                <td class=\\\"border px-4 py-2\\\">{last_distance}</td>\\n                <td class=\\\"border px-4 py-2\\\">{Math.round(average_3_distance)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_distance>=0}\\\" class:red=\\\"{variation_3_distance<0}\\\">{variation_3_distance}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_distance)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_distance>=0}\\\" class:red=\\\"{variation_10_distance<0}\\\">{variation_10_distance}%</td>\\n                </tr>\\n                <tr class=\\\"\\\">\\n                <td class=\\\"border px-4 py-2\\\">Speed (km/h)</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(last_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_3_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_speed>=0}\\\" class:red=\\\"{variation_3_speed<0}\\\">{variation_3_speed}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_speed)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_speed>=0}\\\" class:red=\\\"{variation_10_speed<0}\\\">{variation_10_speed}%</td>\\n                </tr>\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">Elevation</td>\\n                <td class=\\\"border px-4 py-2\\\">{last_elevation}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_3_elevation)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_3_elevation>=0}\\\" class:red=\\\"{variation_3_elevation<0}\\\">{variation_3_elevation}%</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal(average_10_elevation)}</td>\\n                <td class=\\\"border px-4 py-2\\\" class:green=\\\"{variation_10_elevation>=0}\\\" class:red=\\\"{variation_10_elevation<0}\\\">{variation_10_elevation}%</td>\\n        \\n                </tr>\\n            </tbody>\\n            </table>\\n        </div>\\n\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance of last sessions</caption>\\n            <thead class=\\\"italic border-gray-300\\\">\\n                <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n                <th class=\\\"px-4 py-2\\\">Date</th>\\n                <th class=\\\"px-4 py-2\\\">Distance (m)</th>\\n                <th class=\\\"px-4 py-2\\\">Time (min)</th>\\n                <th class=\\\"px-4 py-2\\\">Speed (km/h)</th>\\n                <th class=\\\"px-4 py-2\\\">Elevation (m)</th>\\n                \\n                </tr>\\n            </thead>\\n\\n            <tbody>\\n            \\n                {#each distance_3_session as distance, i}\\n                <tr>\\n                <td class=\\\"border px-4 py-2\\\">{date_3_session[i]}</td>\\n                <td class=\\\"border px-4 py-2\\\">{distance}</td>\\n                <td class=\\\"border px-4 py-2\\\">{minutes_3_session[i]}</td>\\n                <td class=\\\"border px-4 py-2\\\">{round_2_decimal((distance/1000) / (minutes_3_session[i]/60)) }</td>\\n                <td class=\\\"border px-4 py-2\\\">{elevation_3_session[i]}</td>\\n                \\n\\n                </tr>\\n                {/each}\\n            </tbody>\\n            </table>\\n        </div>\\n        <div class=\\\"mt-8\\\">\\n            <h1 class=\\\"text-blue-800 mb-8 mt-16\\\">Performance Chart</h1>\\n            <Charts {data} /> \\n        </div>        \\n    </div></div>\\n</div>\\n\\n</div>\"],\"names\":[],\"mappings\":\"AAaG,IAAI,cAAC,CAAC,AAAC,KAAK,CAAE,GAAG,AAAE,CAAC,AACpB,MAAM,cAAC,CAAC,AAAC,KAAK,CAAE,KAAK,AAAE,CAAC\"}"
};

function preload$7({ params, query }) {
	return this.fetch(`sports/running.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

// Sort list of Json by dates (closest dates to last positions)
function custom_sort$3(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function get_last_nb_sessions$2(int, list) {
	return list.slice(Math.max(list.length - int, 0));
}

function dividevector$2(a, b) {
	return a.map((e, i) => e / b[i]);
}

function variation$2(x_new, x_old) {
	const variation = Math.round((x_new - x_old) / x_old * 100);
	return variation;
}

function round_2_decimal$2(float) {
	return Math.round(float * 100) / 100;
}

const Running = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort$3);

	function convert_date(date) {
		return moment(date, "YYYY-MM-DD").format("dddd MMMM D Y");
	}

	// Compute data for charts
	let list_meters = [];

	let list_date = [];
	let list_elevation = [];
	let list_minutes = [];
	let list_speed = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_elevation.push(x.elevation);
		list_minutes.push(x.minutes);
		let speed = x.meters / x.minutes * 0.06;
		list_speed.push(round_2_decimal$2(speed));
	});

	const data = {
		labels: list_date,
		datasets: [
			{
				label: "Distance",
				yAxisID: "Distance",
				data: list_meters,
				borderColor: "#192E5B",
				fill: false
			},
			{
				label: "Elevation",
				data: list_elevation,
				yAxisID: "Elevation",
				borderColor: "#1D65A6",
				fill: false
			},
			{
				label: "Speed",
				data: list_speed,
				yAxisID: "Speed",
				borderColor: "#72A2C0",
				fill: false
			}
		]
	};

	// TODO: verifiy ordering of dates and sessions
	const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

	// TODO: right now including last session, probably should not
	// TODO: liste des options bool avec les métriques qu'on veut observer (rythme cardiaque)
	// TODO: colors green or red for variations
	// Compute average distance, speed, elevation, 
	// Last session
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_elevation = list_elevation[list_elevation.length - 1];

	// Last 3 sessions
	//const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0))
	const distance_3_session = get_last_nb_sessions$2(3, list_meters);

	const minutes_3_session = get_last_nb_sessions$2(3, list_minutes);
	const elevation_3_session = get_last_nb_sessions$2(3, list_elevation);
	const date_3_session = get_last_nb_sessions$2(3, list_date);
	const average_3_distance = average(distance_3_session);
	const average_3_elevation = average(elevation_3_session);
	const average_3_speed = average(dividevector$2(distance_3_session, minutes_3_session)) * 60 / 1000;
	const variation_3_distance = variation$2(last_distance, average_3_distance);
	const variation_3_speed = variation$2(last_speed, average_3_speed);
	const variation_3_elevation = variation$2(last_elevation, average_3_elevation);

	// Last 10 sessions
	const distance_10_session = get_last_nb_sessions$2(10, list_meters);

	const minutes_10_session = get_last_nb_sessions$2(10, list_minutes);
	const elevation_10_session = get_last_nb_sessions$2(10, list_elevation);
	const average_10_distance = average(distance_10_session);
	const average_10_elevation = average(elevation_10_session);
	const average_10_speed = average(dividevector$2(distance_10_session, minutes_10_session)) * 60 / 1000;
	const variation_10_distance = variation$2(last_distance, average_10_distance);
	const variation_10_speed = variation$2(last_speed, average_10_speed);
	const variation_10_elevation = variation$2(last_elevation, average_10_elevation);
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
	$$result.css.add(css$4);

	return `<div class="${"bg-white"}"><div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"running1.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>

    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Running Performance
        </div></div>
    <div class="${"p-8"}"><div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
        <div class="${"italic grid grid-cols-3 divide-x divide-gray-400"}">${each(get_last_nb_sessions$2(3, list_date), date => `<div class="${"text-center"}">${escape(convert_date(date))}</div>`)}</div></div>


    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Performance Tables</h1>
        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance evolution of main metrics</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Metrics</th>
                <th class="${"px-4 py-2"}">Value</th>
                <th colspan="${"2"}" class="${"px-4 py-2 "}">vs. Last 3 sessions</th>
                <th colspan="${"2"}" class="${"px-4 py-2"}">vs. Last 10 sessions</th></tr></thead>
            <tbody><tr><td class="${"border px-4 py-2"}">Distance (m)</td>
                <td class="${"border px-4 py-2"}">${escape(last_distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(Math.round(average_3_distance))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_distance >= 0 ? "green" : "") + " " + (variation_3_distance < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_distance)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_10_distance))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_distance >= 0 ? "green" : "") + " " + (variation_10_distance < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_distance)}%</td></tr>
                <tr class="${""}"><td class="${"border px-4 py-2"}">Speed (km/h)</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(last_speed))}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_3_speed))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_speed >= 0 ? "green" : "") + " " + (variation_3_speed < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_speed)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_10_speed))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_speed >= 0 ? "green" : "") + " " + (variation_10_speed < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_speed)}%</td></tr>
                <tr><td class="${"border px-4 py-2"}">Elevation</td>
                <td class="${"border px-4 py-2"}">${escape(last_elevation)}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_3_elevation))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_3_elevation >= 0 ? "green" : "") + " " + (variation_3_elevation < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_3_elevation)}%</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(average_10_elevation))}</td>
                <td class="${[
		"border px-4 py-2 svelte-x4tdvp",
		(variation_10_elevation >= 0 ? "green" : "") + " " + (variation_10_elevation < 0 ? "red" : "")
	].join(" ").trim()}">${escape(variation_10_elevation)}%</td></tr></tbody></table></div>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance of last sessions</caption>
            <thead class="${"italic border-gray-300"}"><tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-4 py-2"}">Date</th>
                <th class="${"px-4 py-2"}">Distance (m)</th>
                <th class="${"px-4 py-2"}">Time (min)</th>
                <th class="${"px-4 py-2"}">Speed (km/h)</th>
                <th class="${"px-4 py-2"}">Elevation (m)</th></tr></thead>

            <tbody>${each(distance_3_session, (distance, i) => `<tr><td class="${"border px-4 py-2"}">${escape(date_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(distance)}</td>
                <td class="${"border px-4 py-2"}">${escape(minutes_3_session[i])}</td>
                <td class="${"border px-4 py-2"}">${escape(round_2_decimal$2(distance / 1000 / (minutes_3_session[i] / 60)))}</td>
                <td class="${"border px-4 py-2"}">${escape(elevation_3_session[i])}</td>
                

                </tr>`)}</tbody></table></div>
        <div class="${"mt-8"}"><h1 class="${"text-blue-800 mb-8 mt-16"}">Performance Chart</h1>
            ${validate_component(Running_charts, "Charts").$$render($$result, { data }, {}, {})}</div></div></div></div></div>`;
});

/* src/routes/sports/workout/workoutpushups-radar.svelte generated by Svelte v3.22.3 */

const Workoutpushups_radar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_pushups_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart10");

		var myChart = new Chart(ctx,
		{
				type: "radar",
				data: data_pushups_radar,
				options: {
					scale: {
						ticks: {
							min: 0, // You can also change the Min
							beginAtZero: false, // in case you change the Min
							
						}, // etc
						
					}
				}
			});
	}

	onMount(createChart2);
	if ($$props.data_pushups_radar === void 0 && $$bindings.data_pushups_radar && data_pushups_radar !== void 0) $$bindings.data_pushups_radar(data_pushups_radar);
	if ($$props.createChart2 === void 0 && $$bindings.createChart2 && createChart2 !== void 0) $$bindings.createChart2(createChart2);
	return `<canvas id="${"myChart10"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workoutothers-radar.svelte generated by Svelte v3.22.3 */

const Workoutothers_radar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_others_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart13");

		var myChart = new Chart(ctx,
		{
				type: "radar",
				data: data_others_radar,
				options: {
					scale: {
						ticks: {
							min: 0, // You can also change the Min
							beginAtZero: false, // in case you change the Min
							
						}, // etc
						
					}
				}
			});
	}

	onMount(createChart2);
	if ($$props.data_others_radar === void 0 && $$bindings.data_others_radar && data_others_radar !== void 0) $$bindings.data_others_radar(data_others_radar);
	if ($$props.createChart2 === void 0 && $$bindings.createChart2 && createChart2 !== void 0) $$bindings.createChart2(createChart2);
	return `<canvas id="${"myChart13"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workoutabdo-radar.svelte generated by Svelte v3.22.3 */

const Workoutabdo_radar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_abdominal_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart14");

		var myChart = new Chart(ctx,
		{
				type: "radar",
				data: data_abdominal_radar,
				options: {
					scale: {
						ticks: {
							min: 0, // You can also change the Min
							beginAtZero: false, // in case you change the Min
							
						}, // etc
						
					}
				}
			});
	}

	onMount(createChart2);
	if ($$props.data_abdominal_radar === void 0 && $$bindings.data_abdominal_radar && data_abdominal_radar !== void 0) $$bindings.data_abdominal_radar(data_abdominal_radar);
	if ($$props.createChart2 === void 0 && $$bindings.createChart2 && createChart2 !== void 0) $$bindings.createChart2(createChart2);
	return `<canvas id="${"myChart14"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workoutlegs-radar.svelte generated by Svelte v3.22.3 */

const Workoutlegs_radar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_leg_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart1");

		var myChart = new Chart(ctx,
		{
				type: "radar",
				data: data_leg_radar,
				options: {
					scale: {
						ticks: {
							min: 0, // You can also change the Min
							beginAtZero: false, // in case you change the Min
							
						}, // etc
						
					}
				}
			});
	}

	onMount(createChart2);
	if ($$props.data_leg_radar === void 0 && $$bindings.data_leg_radar && data_leg_radar !== void 0) $$bindings.data_leg_radar(data_leg_radar);
	if ($$props.createChart2 === void 0 && $$bindings.createChart2 && createChart2 !== void 0) $$bindings.createChart2(createChart2);
	return `<canvas id="${"myChart1"}" width="${"2"}" height="${"1"}"></canvas>`;
});

/* src/routes/sports/workout/workout.svelte generated by Svelte v3.22.3 */

const css$5 = {
	code: ".red.svelte-x4tdvp{color:red}.green.svelte-x4tdvp{color:green}",
	map: "{\"version\":3,\"file\":\"workout.svelte\",\"sources\":[\"workout.svelte\"],\"sourcesContent\":[\"\\n<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`sports/workout.json`).then(r => r.json()).then(data_raw => {\\n\\t\\t\\treturn { data_raw };\\n\\t\\t});\\n\\t}\\t\\n\\n</script>\\n\\n\\n<style>\\n   .red { color: red; }\\n   .green { color: green; }\\n</style>\\n\\n<script>\\n    import ChartsRadarLeg from './workoutlegs-radar.svelte'\\n    import ChartsRadarPushUps from './workoutpushups-radar.svelte'\\n    import ChartsRadarAbdominals from './workoutabdo-radar.svelte'\\n    import ChartsRadarOthers from './workoutothers-radar.svelte'\\n    import moment from 'moment';\\n\\n    export let data_raw\\n        // Sort list of Json by dates (closest dates to last positions)\\n    function custom_sort(a, b) {\\n        return new Date(a.date).getTime() - new Date(b.date).getTime();\\n    }\\n    data_raw = data_raw.sort(custom_sort)\\n    let data_last5 = data_raw.slice(Math.max(data_raw.length-5, 0))\\n    const workout_exercise = [\\n    {'name': 'Squats', 'features' : ['Series', 'Number'], 'group' : 'Legs'},\\n    {'name': 'Stair Climbs', 'features' : ['Series', 'Number'], 'group' : 'Legs'},\\n    {'name': 'Bench Climbs', 'features' : ['Series', 'Number'], 'group' : 'Legs'},\\n    {'name': 'Leg Press', 'features' : ['Series', 'Number'], 'group' : 'Legs'},\\n    \\n    {'name': 'Push-Ups','features' : ['Series', 'Number'],'group' : 'Push-Ups'},\\n    {'name': 'Lateral Push-Ups','features' : ['Series', 'Number'], 'group' : 'Push-Ups'},\\n    {'name': 'Jumping Push-Ups','features' : ['Series', 'Number'], 'group' : 'Push-Ups'},\\n    {'name': 'Close Push-Ups','features' : ['Series', 'Number'], 'group' : 'Push-Ups'},\\n    {'name': 'Raised Push-Ups','features' : ['Series', 'Number'], 'group' : 'Push-Ups'},\\n\\n    {'name': 'Abdominal','features' : ['Series', 'Number'], 'group' : 'Abdominals'},\\n    {'name': 'Abdominal Lateral','features' : ['Series', 'Number'], 'group' : 'Abdominals'},\\n    {'name': 'Core Abdominal','features' : ['Series', 'Number'], 'group' : 'Abdominals'},\\n    \\n    \\n    {'name': 'Bench', 'features' : ['Series', 'Number'], 'group' : 'Weight'},\\n    {'name': 'Biceps Weight', 'features' : ['Series', 'Number'],'group' : 'Weight'},\\n    {'name': 'Pull-Ups', 'features' : ['Series', 'Number'],'group' : 'Pull-Ups'},\\n    ]\\n\\n\\n    const group_list = {'Legs': ['Squats', 'Stair Climbs', 'Bench Climbs', 'Leg Press'],\\n    'Push-Ups' : ['Push-Ups', 'Lateral Push-Ups', 'Jumping Push-Ups', 'Close Push-Ups', 'Raised Push-Ups'],\\n    'Abdominals': ['Abdominal', 'Abdominal Lateral', 'Core Abdominal'],\\n    'Others': ['Bench', 'Biceps Weight', 'Pull-Ups']}\\n    function convert_date(date){\\n\\treturn moment(date, 'YYYY-MM-DD').format('dddd MMMM D Y')\\n}\\n    function push_series(x, exercise){\\n        if (exercise in x){\\n            return x[exercise]['Series'] * x[exercise]['Number']\\n        } else return 0\\n    }\\n    function last_element(list){\\n        return list[list.length-1]\\n    }\\n    function average_perf(list1, list2){\\n        let count = 0\\n        let length = 0\\n        for (let i in list1){\\n            if (list2[i] >0 ){\\n                count += list1[i]/list2[i]\\n                length +=1\\n            }\\n        }\\n        return count/length *100\\n    }\\n\\n    function round_1_decimal(float){\\n        return Math.round(float * 10) /10\\n    }\\n\\n    function mean_list_notnull(list){\\n        let count = 0\\n        let length = 0\\n        list.forEach(elem => { \\n            if (elem > 0){\\n                count += elem\\n                length += 1\\n            }})\\n        return count / length\\n    }\\nfunction get_last_nb_sessions(int, list){\\n    return list.slice(Math.max(list.length - int, 0))\\n}\\n\\n    // LEGS : \\n    let squats = []\\n    let stair_climbs = []\\n    let bench_climbs = []\\n    let leg_press = []\\n    let list_date = []\\n\\n    data_raw.forEach(x => {\\n        list_date.push(x['date'])\\n        \\n        squats.push(push_series(x, 'Squats'))\\n        stair_climbs.push(push_series(x, 'Stair Climbs'))\\n        bench_climbs.push(push_series(x, 'Bench Climbs'))\\n        leg_press.push(push_series(x, 'Leg Press'))\\n        \\n    })\\n\\n    let last_legs = [last_element(squats),\\n    last_element(stair_climbs), \\n    last_element(bench_climbs), \\n    last_element(leg_press)]\\n\\n    let mean_legs = [mean_list_notnull(squats),\\n    mean_list_notnull(stair_climbs), \\n    mean_list_notnull(bench_climbs), \\n    mean_list_notnull(leg_press)]\\n\\n     export const data_leg_radar = {\\n    labels: group_list['Legs'],\\n    datasets: [{\\n        label: 'Last session',\\n        data:last_legs,\\n        borderColor: \\\"#192E5B\\\",\\n        fill:false\\n        }, \\n    {\\n        label: 'Average session',\\n        data:mean_legs,\\n        borderColor: \\\"#72A2C0\\\",\\n        fill:false\\n    }\\n    ]}\\n\\n    let leg_global_indicator = round_1_decimal(average_perf(last_legs, mean_legs))\\n\\n    let pushups = []\\n    let pushups_lateral = []\\n    let pushups_jumping = []\\n    let pushups_close = []\\n    let raised_pushups = []\\n\\n    data_raw.forEach(x => {\\n        pushups.push(push_series(x, 'Push-Ups'))\\n        pushups_lateral.push(push_series(x, 'Lateral Push-Ups'))\\n        pushups_jumping.push(push_series(x, 'Jumping Push-Ups'))\\n        pushups_close.push(push_series(x, 'Close Push-Ups'))\\n        raised_pushups.push(push_series(x, 'Raised Push-Ups'))\\n    })\\n\\n    let last_pushups = [last_element(pushups),\\n    last_element(pushups_lateral), \\n    last_element(pushups_jumping), \\n    last_element(pushups_close),\\n    last_element(raised_pushups),\\n    ]\\n\\n    let mean_pushups = [mean_list_notnull(pushups),\\n    mean_list_notnull(pushups_lateral), \\n    mean_list_notnull(pushups_jumping), \\n    mean_list_notnull(pushups_close),\\n    mean_list_notnull(raised_pushups)]\\n\\n     export const data_pushups_radar = {\\n    labels: group_list['Push-Ups'],\\n    datasets: [{\\n        label: 'Last session',\\n        data:last_pushups,\\n        borderColor: \\\"#192E5B\\\",\\n        fill:false\\n\\n\\n    }, \\n    {\\n        label: 'Average session',\\n        data:mean_pushups,\\n        borderColor: \\\"#72A2C0\\\",\\n        fill:false\\n\\n\\n    }\\n    ]}\\n\\n    let pushups_global_indicator = round_1_decimal(average_perf(last_pushups, mean_pushups))\\n\\n    let abdominal = []\\n    let abdominal_lateral = []\\n    let abdominal_core = []\\n\\n    data_raw.forEach(x => {\\n        abdominal.push(push_series(x, 'Abdominal'))\\n        abdominal_lateral.push(push_series(x, 'Abdominal Lateral'))\\n        abdominal_core.push(push_series(x, 'Core Abdominal'))\\n    })\\n\\n    let last_abdominal = [last_element(abdominal),\\n    last_element(abdominal_lateral), \\n    last_element(abdominal_core), \\n    ]\\n\\n    let mean_abdominal = [mean_list_notnull(abdominal),\\n    mean_list_notnull(abdominal_lateral), \\n    mean_list_notnull(abdominal_core), \\n    ]\\n\\n     export const data_abdominal_radar = {\\n    labels: group_list['Abdominals'],\\n    datasets: [{\\n        label: 'Last session',\\n        data:last_abdominal,\\n        borderColor: \\\"#192E5B\\\",\\n        fill:false\\n\\n\\n    }, \\n    {\\n        label: 'Average session',\\n        data:mean_abdominal,\\n        borderColor: \\\"#72A2C0\\\",\\n        fill:false\\n\\n\\n    }\\n    ]}\\n\\n    let abdominal_global_indicator = round_1_decimal(average_perf(last_abdominal, mean_abdominal))\\n\\n\\n    // Others : \\n    //['Bench', 'Biceps Weight', 'Pull-Ups']\\n\\n    let bench = []\\n    let biceps_weight = []\\n    let pullups = []\\n\\n    data_raw.forEach(x => {\\n        bench.push(push_series(x, 'Bench'))\\n        biceps_weight.push(push_series(x, 'Biceps Weight'))\\n        pullups.push(push_series(x, 'Pull-Ups'))\\n    })\\n\\n    let last_others = [last_element(bench),\\n    last_element(biceps_weight), \\n    last_element(pullups), \\n    ]\\n\\n    let mean_others = [mean_list_notnull(bench),\\n    mean_list_notnull(biceps_weight), \\n    mean_list_notnull(pullups), \\n    ]\\n\\n     export const data_others_radar = {\\n    labels: group_list['Others'],\\n    datasets: [{\\n        label: 'Last session',\\n        data:last_others,\\n        borderColor: \\\"#192E5B\\\",\\n        fill:false\\n\\n}, \\n    {\\n        label: 'Average session',\\n        data:mean_others,\\n        borderColor: \\\"#72A2C0\\\",\\n        fill:false\\n\\n\\n    }]}\\n\\n    let others_global_indicator = round_1_decimal(average_perf(last_others, mean_others))\\n\\n\\n\\n</script> \\n\\n<div class='bg-white '>\\n\\n\\n\\n\\n<div class=\\\"mb-20\\\">\\n    <div class=\\\"mb-6 shadow \\\">\\n        <img src=\\\"workout2.jpg\\\" alt=\\\"cycling\\\" class=\\\"object-cover h-48 w-full shadow rounded-md\\\">\\n    </div>\\n    <div class=\\\"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md\\\">\\n        <div class=\\\"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest\\\">\\n        Workout Performance\\n        </div>\\n    </div>\\n<div class='p-8'>\\n    <div class='pb-8'>\\n        <h1 class=\\\"text-blue-800  mb-8 \\\">Last Sessions</h1>\\n     \\n        <div class=\\\"italic grid grid-cols-3 divide-x divide-gray-400\\\">\\n            {#each get_last_nb_sessions(3, list_date) as date}\\n            <div class=\\\"text-center\\\">{convert_date(date)}</div>\\n            {/each}\\n        </div>\\n    </div>\\n\\n    <div class=\\\"divide-y mt-16\\\">\\n       \\n       \\n        <h1 class=\\\"text-blue-800\\\">\\n        Legs\\n        </h1>\\n\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Data for legs</caption>\\n            <thead class=\\\"border-gray-300 italic\\\">\\n            <tr class=\\\"bg-blue-200 border border-gray-300\\\">\\n            <th class=\\\"px-2 py-2\\\"></th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Squats </th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Stair Climbs</th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Bench Climbs</th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Leg Press</th>\\n            </tr>\\n            <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n            <th class=\\\"px-2 py-2\\\">Date</th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            \\n            </tr>\\n        </thead>\\n\\n        <tbody>\\n        \\n            {#each data_last5 as data}\\n            <tr>\\n            <td class=\\\"border px-2 py-2\\\">{data['date']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Squats']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Squats']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Stair Climbs']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Stair Climbs']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Bench Climbs']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Bench Climbs']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Leg Press']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Leg Press']['Number']}</td>\\n            </tr>\\n            {/each}\\n        </tbody>\\n        </table>\\n    </div>\\n</div>\\n\\n<div class='text-center'> Your last session was <span class:green=\\\"{leg_global_indicator>=100}\\\" class:red=\\\"{leg_global_indicator<100}\\\">{leg_global_indicator}%</span> of the average of the sessions where you worked on legs </div>\\n\\n    <div class=\\\"mt-8  m-12  \\\">\\n            <caption class=\\\"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance Radar Chart</caption>\\n            <ChartsRadarLeg {data_leg_radar} /> \\n        </div>\\n\\n    <div class=\\\"divide-y mt-16\\\">\\n       \\n       \\n        <h1 class=\\\"text-blue-800\\\">\\n        Push-Ups\\n        </h1>\\n\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Data for Push-ups</caption>\\n            <thead class=\\\"border-gray-300 italic\\\">\\n            <tr class=\\\"bg-blue-200 border border-gray-300\\\">\\n            <th class=\\\"px-2 py-2\\\"></th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Regular </th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Lateral</th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Jumping</th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Close</th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Raised</th>\\n            </tr>\\n            <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n            <th class=\\\"px-2 py-2\\\">Date</th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            \\n            </tr>\\n        </thead>\\n\\n        <tbody>\\n        \\n            {#each data_last5 as data, i}\\n            <tr>\\n            <td class=\\\"border px-2 py-2\\\">{data['date']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Push-Ups']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Push-Ups']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Lateral Push-Ups']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Lateral Push-Ups']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Jumping Push-Ups']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Jumping Push-Ups']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Close Push-Ups']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Close Push-Ups']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Raised Push-Ups']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Raised Push-Ups']['Number']}</td>\\n            </tr>\\n            {/each}\\n        </tbody>\\n        </table>\\n    </div>\\n</div>\\n<div class='text-center'> Your last session was <span class:green=\\\"{pushups_global_indicator>=100}\\\" class:red=\\\"{pushups_global_indicator<100}\\\">{pushups_global_indicator}%</span> of the average of the sessions where you worked on push-ups </div>\\n\\n\\n    <div class=\\\"mt-8  m-12  \\\">\\n            <caption class=\\\"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance Radar Chart</caption>\\n<ChartsRadarPushUps {data_pushups_radar} /> \\n        </div>\\n\\n\\n    <div class=\\\"divide-y mt-16\\\">\\n       \\n       \\n        <h1 class=\\\"text-blue-800\\\">\\n        Abdominals\\n        </h1>\\n\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Data for Abdominals</caption>\\n            <thead class=\\\"border-gray-300 italic\\\">\\n            <tr class=\\\"bg-blue-200 border border-gray-300\\\">\\n            <th class=\\\"px-2 py-2\\\"></th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Regular </th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Lateral</th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Core</th>\\n            </tr>\\n            <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n            <th class=\\\"px-2 py-2\\\">Date</th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            \\n            </tr>\\n        </thead>\\n\\n        <tbody>\\n        \\n            {#each data_last5 as data}\\n            <tr>\\n            <td class=\\\"border px-2 py-2\\\">{data['date']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Abdominal']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Abdominal']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Abdominal Lateral']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Abdominal Lateral']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Core Abdominal']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Core Abdominal']['Number']}</td>\\n            </tr>\\n            {/each}\\n        </tbody>\\n        </table>\\n    </div>\\n</div>\\n<div class='text-center'> Your last session was <span class:green=\\\"{abdominal_global_indicator>=100}\\\" class:red=\\\"{abdominal_global_indicator<100}\\\">{abdominal_global_indicator}%</span> of the average of the sessions where you worked on abdominals </div>\\n\\n\\n    <div class=\\\"mt-8  m-12  \\\">\\n            <caption class=\\\"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance Radar Chart</caption>\\n<ChartsRadarAbdominals {data_abdominal_radar} />         </div>\\n\\n\\n    <div class=\\\"divide-y mt-16\\\">\\n       \\n       \\n        <h1 class=\\\"text-blue-800\\\">\\n        Others\\n        </h1>\\n\\n        <div class='m-12 container mx-auto'>\\n            <table class=\\\"table-auto text-center container mx-auto\\\">\\n            <caption class=\\\"font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Data for Others</caption>\\n            <thead class=\\\"border-gray-300 italic\\\">\\n            <tr class=\\\"bg-blue-200 border border-gray-300\\\">\\n            <th class=\\\"px-2 py-2\\\"></th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Bench </th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Biceps Weight</th>\\n            <th colspan=2 class=\\\"px-2 py-2\\\">Pull-Ups</th>\\n            </tr>\\n            <tr class=\\\"bg-blue-100 border border-gray-300\\\">\\n             <th class=\\\"px-2 py-2\\\">Date</th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            <th class=\\\"px-2 py-2\\\">Series </th>\\n            <th class=\\\"px-2 py-2\\\">Repet. </th>\\n            \\n            </tr>\\n        </thead>\\n\\n        <tbody>\\n        \\n            {#each data_last5 as data}\\n            <tr>\\n            <td class=\\\"border px-2 py-2\\\">{data['date']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Bench']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Bench']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Biceps Weight']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Biceps Weight']['Number']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Pull-Ups']['Series']}</td>\\n            <td class=\\\"border px-2 py-2\\\">{data['Pull-Ups']['Number']}</td>\\n            </tr>\\n            {/each}\\n        </tbody>\\n        </table>\\n    </div>\\n</div>\\n<div class='text-center'> Your last session was <span class:green=\\\"{others_global_indicator>=100}\\\" class:red=\\\"{others_global_indicator<100}\\\">{others_global_indicator}%</span> of the average of the sessions where you worked on other exercises </div>\\n\\n\\n\\n    <div class=\\\"mt-8  m-12  \\\">\\n            <caption class=\\\"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700\\\">Performance Radar Chart</caption>\\n            <ChartsRadarOthers {data_others_radar} /> \\n        </div>\\n\\n\\n</div>\\n</div>\\n</div>\\n\\n\\n\\n\"],\"names\":[],\"mappings\":\"AAYG,IAAI,cAAC,CAAC,AAAC,KAAK,CAAE,GAAG,AAAE,CAAC,AACpB,MAAM,cAAC,CAAC,AAAC,KAAK,CAAE,KAAK,AAAE,CAAC\"}"
};

function preload$8({ params, query }) {
	return this.fetch(`sports/workout.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function custom_sort$4(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function push_series(x, exercise) {
	if (exercise in x) {
		return x[exercise]["Series"] * x[exercise]["Number"];
	} else return 0;
}

function last_element(list) {
	return list[list.length - 1];
}

function average_perf(list1, list2) {
	let count = 0;
	let length = 0;

	for (let i in list1) {
		if (list2[i] > 0) {
			count += list1[i] / list2[i];
			length += 1;
		}
	}

	return count / length * 100;
}

function round_1_decimal(float) {
	return Math.round(float * 10) / 10;
}

function mean_list_notnull(list) {
	let count = 0;
	let length = 0;

	list.forEach(elem => {
		if (elem > 0) {
			count += elem;
			length += 1;
		}
	});

	return count / length;
}

function get_last_nb_sessions$3(int, list) {
	return list.slice(Math.max(list.length - int, 0));
}

const Workout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort$4);
	let data_last5 = data_raw.slice(Math.max(data_raw.length - 5, 0));

	const group_list = {
		"Legs": ["Squats", "Stair Climbs", "Bench Climbs", "Leg Press"],
		"Push-Ups": [
			"Push-Ups",
			"Lateral Push-Ups",
			"Jumping Push-Ups",
			"Close Push-Ups",
			"Raised Push-Ups"
		],
		"Abdominals": ["Abdominal", "Abdominal Lateral", "Core Abdominal"],
		"Others": ["Bench", "Biceps Weight", "Pull-Ups"]
	};

	function convert_date(date) {
		return moment(date, "YYYY-MM-DD").format("dddd MMMM D Y");
	}

	// LEGS : 
	let squats = [];

	let stair_climbs = [];
	let bench_climbs = [];
	let leg_press = [];
	let list_date = [];

	data_raw.forEach(x => {
		list_date.push(x["date"]);
		squats.push(push_series(x, "Squats"));
		stair_climbs.push(push_series(x, "Stair Climbs"));
		bench_climbs.push(push_series(x, "Bench Climbs"));
		leg_press.push(push_series(x, "Leg Press"));
	});

	let last_legs = [
		last_element(squats),
		last_element(stair_climbs),
		last_element(bench_climbs),
		last_element(leg_press)
	];

	let mean_legs = [
		mean_list_notnull(squats),
		mean_list_notnull(stair_climbs),
		mean_list_notnull(bench_climbs),
		mean_list_notnull(leg_press)
	];

	const data_leg_radar = {
		labels: group_list["Legs"],
		datasets: [
			{
				label: "Last session",
				data: last_legs,
				borderColor: "#192E5B",
				fill: false
			},
			{
				label: "Average session",
				data: mean_legs,
				borderColor: "#72A2C0",
				fill: false
			}
		]
	};

	let leg_global_indicator = round_1_decimal(average_perf(last_legs, mean_legs));
	let pushups = [];
	let pushups_lateral = [];
	let pushups_jumping = [];
	let pushups_close = [];
	let raised_pushups = [];

	data_raw.forEach(x => {
		pushups.push(push_series(x, "Push-Ups"));
		pushups_lateral.push(push_series(x, "Lateral Push-Ups"));
		pushups_jumping.push(push_series(x, "Jumping Push-Ups"));
		pushups_close.push(push_series(x, "Close Push-Ups"));
		raised_pushups.push(push_series(x, "Raised Push-Ups"));
	});

	let last_pushups = [
		last_element(pushups),
		last_element(pushups_lateral),
		last_element(pushups_jumping),
		last_element(pushups_close),
		last_element(raised_pushups)
	];

	let mean_pushups = [
		mean_list_notnull(pushups),
		mean_list_notnull(pushups_lateral),
		mean_list_notnull(pushups_jumping),
		mean_list_notnull(pushups_close),
		mean_list_notnull(raised_pushups)
	];

	const data_pushups_radar = {
		labels: group_list["Push-Ups"],
		datasets: [
			{
				label: "Last session",
				data: last_pushups,
				borderColor: "#192E5B",
				fill: false
			},
			{
				label: "Average session",
				data: mean_pushups,
				borderColor: "#72A2C0",
				fill: false
			}
		]
	};

	let pushups_global_indicator = round_1_decimal(average_perf(last_pushups, mean_pushups));
	let abdominal = [];
	let abdominal_lateral = [];
	let abdominal_core = [];

	data_raw.forEach(x => {
		abdominal.push(push_series(x, "Abdominal"));
		abdominal_lateral.push(push_series(x, "Abdominal Lateral"));
		abdominal_core.push(push_series(x, "Core Abdominal"));
	});

	let last_abdominal = [
		last_element(abdominal),
		last_element(abdominal_lateral),
		last_element(abdominal_core)
	];

	let mean_abdominal = [
		mean_list_notnull(abdominal),
		mean_list_notnull(abdominal_lateral),
		mean_list_notnull(abdominal_core)
	];

	const data_abdominal_radar = {
		labels: group_list["Abdominals"],
		datasets: [
			{
				label: "Last session",
				data: last_abdominal,
				borderColor: "#192E5B",
				fill: false
			},
			{
				label: "Average session",
				data: mean_abdominal,
				borderColor: "#72A2C0",
				fill: false
			}
		]
	};

	let abdominal_global_indicator = round_1_decimal(average_perf(last_abdominal, mean_abdominal));

	// Others : 
	//['Bench', 'Biceps Weight', 'Pull-Ups']
	let bench = [];

	let biceps_weight = [];
	let pullups = [];

	data_raw.forEach(x => {
		bench.push(push_series(x, "Bench"));
		biceps_weight.push(push_series(x, "Biceps Weight"));
		pullups.push(push_series(x, "Pull-Ups"));
	});

	let last_others = [last_element(bench), last_element(biceps_weight), last_element(pullups)];

	let mean_others = [
		mean_list_notnull(bench),
		mean_list_notnull(biceps_weight),
		mean_list_notnull(pullups)
	];

	const data_others_radar = {
		labels: group_list["Others"],
		datasets: [
			{
				label: "Last session",
				data: last_others,
				borderColor: "#192E5B",
				fill: false
			},
			{
				label: "Average session",
				data: mean_others,
				borderColor: "#72A2C0",
				fill: false
			}
		]
	};

	let others_global_indicator = round_1_decimal(average_perf(last_others, mean_others));
	if ($$props.data_raw === void 0 && $$bindings.data_raw && data_raw !== void 0) $$bindings.data_raw(data_raw);
	if ($$props.data_leg_radar === void 0 && $$bindings.data_leg_radar && data_leg_radar !== void 0) $$bindings.data_leg_radar(data_leg_radar);
	if ($$props.data_pushups_radar === void 0 && $$bindings.data_pushups_radar && data_pushups_radar !== void 0) $$bindings.data_pushups_radar(data_pushups_radar);
	if ($$props.data_abdominal_radar === void 0 && $$bindings.data_abdominal_radar && data_abdominal_radar !== void 0) $$bindings.data_abdominal_radar(data_abdominal_radar);
	if ($$props.data_others_radar === void 0 && $$bindings.data_others_radar && data_others_radar !== void 0) $$bindings.data_others_radar(data_others_radar);
	$$result.css.add(css$5);

	return `<div class="${"bg-white "}"><div class="${"mb-20"}"><div class="${"mb-6 shadow "}"><img src="${"workout2.jpg"}" alt="${"cycling"}" class="${"object-cover h-48 w-full shadow rounded-md"}"></div>
    <div class="${"flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md"}"><div class="${"font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest"}">Workout Performance
        </div></div>
<div class="${"p-8"}"><div class="${"pb-8"}"><h1 class="${"text-blue-800  mb-8 "}">Last Sessions</h1>
     
        <div class="${"italic grid grid-cols-3 divide-x divide-gray-400"}">${each(get_last_nb_sessions$3(3, list_date), date => `<div class="${"text-center"}">${escape(convert_date(date))}</div>`)}</div></div>

    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Legs
        </h1>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Data for legs</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-200 border border-gray-300"}"><th class="${"px-2 py-2"}"></th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Squats </th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Stair Climbs</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Bench Climbs</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Leg Press</th></tr>
            <tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-2 py-2"}">Date</th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th></tr></thead>

        <tbody>${each(data_last5, data => `<tr><td class="${"border px-2 py-2"}">${escape(data["date"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Squats"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Squats"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Stair Climbs"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Stair Climbs"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Bench Climbs"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Bench Climbs"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Leg Press"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Leg Press"]["Number"])}</td>
            </tr>`)}</tbody></table></div></div>

<div class="${"text-center"}">Your last session was <span class="${[
		"svelte-x4tdvp",
		(leg_global_indicator >= 100 ? "green" : "") + " " + (leg_global_indicator < 100 ? "red" : "")
	].join(" ").trim()}">${escape(leg_global_indicator)}%</span> of the average of the sessions where you worked on legs </div>

    <div class="${"mt-8  m-12  "}"><caption class="${"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance Radar Chart</caption>
            ${validate_component(Workoutlegs_radar, "ChartsRadarLeg").$$render($$result, { data_leg_radar }, {}, {})}</div>

    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Push-Ups
        </h1>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Data for Push-ups</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-200 border border-gray-300"}"><th class="${"px-2 py-2"}"></th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Regular </th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Lateral</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Jumping</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Close</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Raised</th></tr>
            <tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-2 py-2"}">Date</th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th></tr></thead>

        <tbody>${each(data_last5, (data, i) => `<tr><td class="${"border px-2 py-2"}">${escape(data["date"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Push-Ups"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Lateral Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Lateral Push-Ups"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Jumping Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Jumping Push-Ups"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Close Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Close Push-Ups"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Raised Push-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Raised Push-Ups"]["Number"])}</td>
            </tr>`)}</tbody></table></div></div>
<div class="${"text-center"}">Your last session was <span class="${[
		"svelte-x4tdvp",
		(pushups_global_indicator >= 100 ? "green" : "") + " " + (pushups_global_indicator < 100 ? "red" : "")
	].join(" ").trim()}">${escape(pushups_global_indicator)}%</span> of the average of the sessions where you worked on push-ups </div>


    <div class="${"mt-8  m-12  "}"><caption class="${"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance Radar Chart</caption>
${validate_component(Workoutpushups_radar, "ChartsRadarPushUps").$$render($$result, { data_pushups_radar }, {}, {})}</div>


    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Abdominals
        </h1>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Data for Abdominals</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-200 border border-gray-300"}"><th class="${"px-2 py-2"}"></th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Regular </th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Lateral</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Core</th></tr>
            <tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-2 py-2"}">Date</th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th></tr></thead>

        <tbody>${each(data_last5, data => `<tr><td class="${"border px-2 py-2"}">${escape(data["date"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Abdominal"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Abdominal"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Abdominal Lateral"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Abdominal Lateral"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Core Abdominal"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Core Abdominal"]["Number"])}</td>
            </tr>`)}</tbody></table></div></div>
<div class="${"text-center"}">Your last session was <span class="${[
		"svelte-x4tdvp",
		(abdominal_global_indicator >= 100 ? "green" : "") + " " + (abdominal_global_indicator < 100 ? "red" : "")
	].join(" ").trim()}">${escape(abdominal_global_indicator)}%</span> of the average of the sessions where you worked on abdominals </div>


    <div class="${"mt-8  m-12  "}"><caption class="${"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance Radar Chart</caption>
${validate_component(Workoutabdo_radar, "ChartsRadarAbdominals").$$render($$result, { data_abdominal_radar }, {}, {})}</div>


    <div class="${"divide-y mt-16"}"><h1 class="${"text-blue-800"}">Others
        </h1>

        <div class="${"m-12 container mx-auto"}"><table class="${"table-auto text-center container mx-auto"}"><caption class="${"font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Data for Others</caption>
            <thead class="${"border-gray-300 italic"}"><tr class="${"bg-blue-200 border border-gray-300"}"><th class="${"px-2 py-2"}"></th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Bench </th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Biceps Weight</th>
            <th colspan="${"2"}" class="${"px-2 py-2"}">Pull-Ups</th></tr>
            <tr class="${"bg-blue-100 border border-gray-300"}"><th class="${"px-2 py-2"}">Date</th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th>
            <th class="${"px-2 py-2"}">Series </th>
            <th class="${"px-2 py-2"}">Repet. </th></tr></thead>

        <tbody>${each(data_last5, data => `<tr><td class="${"border px-2 py-2"}">${escape(data["date"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Bench"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Bench"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Biceps Weight"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Biceps Weight"]["Number"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Pull-Ups"]["Series"])}</td>
            <td class="${"border px-2 py-2"}">${escape(data["Pull-Ups"]["Number"])}</td>
            </tr>`)}</tbody></table></div></div>
<div class="${"text-center"}">Your last session was <span class="${[
		"svelte-x4tdvp",
		(others_global_indicator >= 100 ? "green" : "") + " " + (others_global_indicator < 100 ? "red" : "")
	].join(" ").trim()}">${escape(others_global_indicator)}%</span> of the average of the sessions where you worked on other exercises </div>



    <div class="${"mt-8  m-12  "}"><caption class="${"text-center container mx-auto font-semibold mb-6 mt-8 text-xl italic text-blue-700"}">Performance Radar Chart</caption>
            ${validate_component(Workoutothers_radar, "ChartsRadarOthers").$$render($$result, { data_others_radar }, {}, {})}</div></div></div></div>`;
});

/* src/routes/about.svelte generated by Svelte v3.22.3 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div class="${"mb-6 shadow "}"><img src="${"work_hader.jpg"}" alt="${"work harder sign"}" class="${"antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md opacity-75"}"></div>

<div class="${"p-8"}">
    <div class="${"flex justify-center mb-8"}"><h1 class="${"text-4xl text-blue-700 font-semibold tracking-widest"}">About Us</h1></div>

    <div class="${"md:flex justify-center"}"><div class="${"m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"}" style="${"\n        background-image: url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');\n        background-repeat: no-repat;\n        background-size: cover;\n        "}"><div class="${"w-1/3"}"><img alt="${"about"}" class="${"rounded-lg shadow-lg antialiased"}" src="${"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}"></div>
            <div class="${"md:w-2/3 w-full px-3 flex flex-row flex-wrap"}"><div class="${"w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"}"><div class="${"text-2xl text-white leading-tight"}">Martin</div>
                <div class="${"text-normal text-gray-300 hover:text-gray-400 cursor-pointer"}"><span class="${"border-b border-dashed border-gray-500 pb-1"}">Death Star Supervisor</span></div>
                <div class="${"text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"}">Last Seen: <b>3 days ago</b></div></div></div></div>  
        <div class="${"m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"}" style="${"\n        background-image: url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');\n        background-repeat: no-repat;\n        background-size: cover;\n        "}"><div class="${"w-1/3"}"><img alt="${"about2"}" class="${"rounded-lg shadow-lg antialiased"}" src="${"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}"></div>
            <div class="${"md:w-2/3 w-full px-3 flex flex-row flex-wrap"}"><div class="${"w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"}"><div class="${"text-2xl text-white leading-tight"}">Valentin</div>
                <div class="${"text-normal text-gray-300 hover:text-gray-400 cursor-pointer"}"><span class="${"border-b border-dashed border-gray-500 pb-1"}">Chaos Master</span></div>
                <div class="${"text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"}">Last Seen: <b>2 days ago</b></div></div></div></div></div>

    <div class="${"mt-16 mb-8 text-center text-2xl text-blue-800"}">Do you have questions?</div>


        
    <form id="${"contact-me"}" class="${"w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 "}"><h2 class="${"w-full my-2 text-3xl font-bold leading-tight my-5 text-blue-800 tracking-widest"}">Contact form</h2>
        
        <div class="${"flex flex-wrap mb-6"}"><div class="${"relative w-full appearance-none label-floating"}"><input class="${"tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"name"}" type="${"text"}" placeholder="${"Your name"}" required>
                <label for="${"name"}" class="${"absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"}">Your name
                </label></div></div>
        
        <div class="${"flex flex-wrap mb-6"}"><div class="${"relative w-full appearance-none label-floating"}"><input class="${"tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"name"}" type="${"text"}" placeholder="${"Your email"}" required>
                <label for="${"name"}" class="${"absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"}">Your email
                </label></div></div>
        
        <div class="${"flex flex-wrap mb-6"}"><div class="${"relative w-full appearance-none label-floating"}"><textarea class="${"autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"}" id="${"message"}" type="${"text"}" placeholder="${"Message..."}"></textarea>
                    <label for="${"message"}" class="${"absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"}">Message...
                </label></div></div>

        <div class="${""}"><button class="${"w-full shadow bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"}" type="${"submit"}">Send
            </button></div></form></div>`;
});

/* src/components/Nav.svelte generated by Svelte v3.22.3 */

const css$6 = {
	code: "ul.svelte-gm7f4q{margin:0;padding:0}ul.svelte-gm7f4q::after{content:'';display:block;clear:both}li.svelte-gm7f4q{display:block;float:left}[aria-current].svelte-gm7f4q{position:relative;display:inline-block}[aria-current].svelte-gm7f4q::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgb(255,62,0);display:block;bottom:-1px}a.svelte-gm7f4q{text-decoration:none;padding:1em 0.5em;display:block}[aria-current].svelte-gm7f4q::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:orange;display:block;bottom:-1px}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\n\\tul {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t/* clearfix */\\n\\t ul::after {\\n\\t\\tcontent: '';\\n\\t\\tdisplay: block;\\n\\t\\tclear: both;\\n\\t}\\n\\n\\tli {\\n\\t\\tdisplay: block;\\n\\t\\tfloat: left;\\n\\t}\\n\\n\\t[aria-current] {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t[aria-current]::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color: rgb(255,62,0);\\n\\t\\tdisplay: block;\\n\\t\\tbottom: -1px;\\n\\t}\\n\\n\\ta {\\n\\t\\ttext-decoration: none;\\n\\t\\tpadding: 1em 0.5em;\\n\\t\\tdisplay: block; \\n\\t} \\n\\n\\t[aria-current]::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color: orange;\\n\\t\\tdisplay: block;\\n\\t\\tbottom: -1px;\\n\\t}\\n</style>\\n\\n<nav>\\n<div class=\\\"flex justify-between items-center py-0 bg-blue-800\\\">\\n  <div class=\\\"flex-shrink-0 ml-10 cursor-pointer\\\">\\n    <i class=\\\"fas fa-drafting-compass fa-2x text-orange-500\\\"></i>\\n    <span class=\\\"ml-1 text-3xl text-blue-200 font-semibold\\\">SportAssistant</span>\\n  </div>\\n  <i class=\\\"fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer\\\"></i>\\n  <ul class=\\\"hidden md:flex overflow-x-hidden mr-10 font-semibold\\\">\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === undefined ? \\\"page\\\" : undefined}' href=\\\".\\\">Home</a>\\n    </li>\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === \\\"new_session\\\" ? \\\"page\\\" : undefined}' href=\\\"new_session\\\">New Session</a>\\n    </li>\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === 'performance' ? \\\"page\\\" : undefined}' href=\\\"performance\\\">Performance</a>\\n    </li>\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === \\\"about\\\" ? \\\"page\\\" : undefined}' href=\\\"about\\\">About</a>\\n    </li>\\n    <li class=\\\"mr-6 p-1\\\">\\n      <a class=\\\"text-white hover:text-blue-300\\\" aria-current='{segment === \\\"tutorial\\\" ? \\\"page\\\" : undefined}' href=\\\"tutorial\\\">Tutorial</a>\\n    </li>\\n  </ul>\\n</div>\\n\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AAMC,EAAE,cAAC,CAAC,AACH,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,AACX,CAAC,AAGA,gBAAE,OAAO,AAAC,CAAC,AACX,OAAO,CAAE,EAAE,CACX,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,EAAE,cAAC,CAAC,AACH,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,AACZ,CAAC,AAED,CAAC,YAAY,CAAC,cAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACtB,CAAC,AAED,CAAC,YAAY,eAAC,OAAO,AAAC,CAAC,AACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,CAAC,CAAC,CAC/B,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACb,CAAC,AAED,CAAC,cAAC,CAAC,AACF,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,OAAO,CAAE,KAAK,AACf,CAAC,AAED,CAAC,YAAY,eAAC,OAAO,AAAC,CAAC,AACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,MAAM,CACxB,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,AACb,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$6);

	return `<nav><div class="${"flex justify-between items-center py-0 bg-blue-800"}"><div class="${"flex-shrink-0 ml-10 cursor-pointer"}"><i class="${"fas fa-drafting-compass fa-2x text-orange-500"}"></i>
    <span class="${"ml-1 text-3xl text-blue-200 font-semibold"}">SportAssistant</span></div>
  <i class="${"fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"}"></i>
  <ul class="${"hidden md:flex overflow-x-hidden mr-10 font-semibold svelte-gm7f4q"}"><li class="${"mr-6 p-1 svelte-gm7f4q"}"><a class="${"text-white hover:text-blue-300 svelte-gm7f4q"}"${add_attribute("aria-current", segment === undefined ? "page" : undefined, 0)} href="${"."}">Home</a></li>
    <li class="${"mr-6 p-1 svelte-gm7f4q"}"><a class="${"text-white hover:text-blue-300 svelte-gm7f4q"}"${add_attribute("aria-current", segment === "new_session" ? "page" : undefined, 0)} href="${"new_session"}">New Session</a></li>
    <li class="${"mr-6 p-1 svelte-gm7f4q"}"><a class="${"text-white hover:text-blue-300 svelte-gm7f4q"}"${add_attribute("aria-current", segment === "performance" ? "page" : undefined, 0)} href="${"performance"}">Performance</a></li>
    <li class="${"mr-6 p-1 svelte-gm7f4q"}"><a class="${"text-white hover:text-blue-300 svelte-gm7f4q"}"${add_attribute("aria-current", segment === "about" ? "page" : undefined, 0)} href="${"about"}">About</a></li>
    <li class="${"mr-6 p-1 svelte-gm7f4q"}"><a class="${"text-white hover:text-blue-300 svelte-gm7f4q"}"${add_attribute("aria-current", segment === "tutorial" ? "page" : undefined, 0)} href="${"tutorial"}">Tutorial</a></li></ul></div></nav>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.22.3 */

const css$7 = {
	code: "main.svelte-1azp5h7{position:relative;max-width:72em;background:linear-gradient(45deg , #c5e1f1 ,#FFFFFF  );padding:0;margin:0 auto;box-sizing:border-box}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Nav from '../components/Nav.svelte';\\n\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\tmain {\\n\\t\\tposition: relative;\\n\\t\\tmax-width: 72em;\\n\\t\\t/* background-color: #ebf8ff; */\\n\\n\\t\\tbackground: linear-gradient(45deg , #c5e1f1 ,#FFFFFF  );\\n\\t\\t\\n\\t\\t/* padding: 2em; */\\n\\t\\tpadding: 0;\\n\\t\\tmargin: 0 auto;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n</style>\\n\\n<Nav {segment}/>\\n <div style=\\\"background-image: url('background4.jpg');    background-size:     cover;             \\n    background-repeat:   no-repeat;\\n    background-position: center center;  \\\"> \\n\\n<main>\\n\\t<slot></slot>\\n</main>\\n\\n</div>\"],\"names\":[],\"mappings\":\"AAOC,IAAI,eAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,SAAS,CAAE,IAAI,CAGf,UAAU,CAAE,gBAAgB,KAAK,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,OAAO,GAAG,CAGvD,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CAAC,IAAI,CACd,UAAU,CAAE,UAAU,AACvB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$7);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}
 <div style="${"background-image: url('background4.jpg');    background-size:     cover;             \n    background-repeat:   no-repeat;\n    background-position: center center;  "}"><main class="${"svelte-1azp5h7"}">${$$slots.default ? $$slots.default({}) : ``}</main></div>`;
});

/* src/routes/_error.svelte generated by Svelte v3.22.3 */

const css$8 = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = \\\"development\\\" === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$8);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${ error.stack
	? `<pre>${escape(error.stack)}</pre>`
	: ``}`;
});

// This file is generated by Sapper — do not edit it!

const manifest = {
	server_routes: [
		{
			// new_sessions/swimming/index.json.js
			pattern: /^\/new_sessions\/swimming\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// new_sessions/cycling/index.json.js
			pattern: /^\/new_sessions\/cycling\.json$/,
			handlers: route_1,
			params: () => ({})
		},

		{
			// new_sessions/running/index.json.js
			pattern: /^\/new_sessions\/running\.json$/,
			handlers: route_2,
			params: () => ({})
		},

		{
			// new_sessions/workout/index.json.js
			pattern: /^\/new_sessions\/workout\.json$/,
			handlers: route_3,
			params: () => ({})
		},

		{
			// sports/swimming/index.json.js
			pattern: /^\/sports\/swimming\.json$/,
			handlers: route_4,
			params: () => ({})
		},

		{
			// sports/cycling/index.json.js
			pattern: /^\/sports\/cycling\.json$/,
			handlers: route_5,
			params: () => ({})
		},

		{
			// sports/running/index.json.js
			pattern: /^\/sports\/running\.json$/,
			handlers: route_6,
			params: () => ({})
		},

		{
			// sports/workout/index.json.js
			pattern: /^\/sports\/workout\.json$/,
			handlers: route_7,
			params: () => ({})
		},

		{
			// home/index.json.js
			pattern: /^\/home\.json$/,
			handlers: route_8,
			params: () => ({})
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes, preload: preload }
			]
		},

		{
			// new_sessions/swimming/new_swimming.svelte
			pattern: /^\/new_sessions\/swimming\/new_swimming\/?$/,
			parts: [
				null,
				null,
				{ name: "new_sessions_swimming_new_swimming", file: "new_sessions/swimming/new_swimming.svelte", component: New_swimming, preload: preload$1 }
			]
		},

		{
			// new_sessions/cycling/new_cycling.svelte
			pattern: /^\/new_sessions\/cycling\/new_cycling\/?$/,
			parts: [
				null,
				null,
				{ name: "new_sessions_cycling_new_cycling", file: "new_sessions/cycling/new_cycling.svelte", component: New_cycling, preload: preload$2 }
			]
		},

		{
			// new_sessions/running/new_running.svelte
			pattern: /^\/new_sessions\/running\/new_running\/?$/,
			parts: [
				null,
				null,
				{ name: "new_sessions_running_new_running", file: "new_sessions/running/new_running.svelte", component: New_running, preload: preload$3 }
			]
		},

		{
			// new_sessions/workout/new_workout.svelte
			pattern: /^\/new_sessions\/workout\/new_workout\/?$/,
			parts: [
				null,
				null,
				{ name: "new_sessions_workout_new_workout", file: "new_sessions/workout/new_workout.svelte", component: New_workout, preload: preload$4 }
			]
		},

		{
			// new_session.svelte
			pattern: /^\/new_session\/?$/,
			parts: [
				{ name: "new_session", file: "new_session.svelte", component: New_session }
			]
		},

		{
			// performance.svelte
			pattern: /^\/performance\/?$/,
			parts: [
				{ name: "performance", file: "performance.svelte", component: Performance }
			]
		},

		{
			// tutorial.svelte
			pattern: /^\/tutorial\/?$/,
			parts: [
				{ name: "tutorial", file: "tutorial.svelte", component: Tutorial }
			]
		},

		{
			// sports/swimming/swimming-charts.svelte
			pattern: /^\/sports\/swimming\/swimming-charts\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_swimming_swimming$45charts", file: "sports/swimming/swimming-charts.svelte", component: Swimming_charts }
			]
		},

		{
			// sports/swimming/swimming.svelte
			pattern: /^\/sports\/swimming\/swimming\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_swimming_swimming", file: "sports/swimming/swimming.svelte", component: Swimming, preload: preload$5 }
			]
		},

		{
			// sports/cycling/cycling-charts.svelte
			pattern: /^\/sports\/cycling\/cycling-charts\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_cycling_cycling$45charts", file: "sports/cycling/cycling-charts.svelte", component: Cycling_charts }
			]
		},

		{
			// sports/cycling/cycling.svelte
			pattern: /^\/sports\/cycling\/cycling\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_cycling_cycling", file: "sports/cycling/cycling.svelte", component: Cycling, preload: preload$6 }
			]
		},

		{
			// sports/running/running-charts.svelte
			pattern: /^\/sports\/running\/running-charts\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_running_running$45charts", file: "sports/running/running-charts.svelte", component: Running_charts }
			]
		},

		{
			// sports/running/running.svelte
			pattern: /^\/sports\/running\/running\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_running_running", file: "sports/running/running.svelte", component: Running, preload: preload$7 }
			]
		},

		{
			// sports/workout/workoutpushups-radar.svelte
			pattern: /^\/sports\/workout\/workoutpushups-radar\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workoutpushups$45radar", file: "sports/workout/workoutpushups-radar.svelte", component: Workoutpushups_radar }
			]
		},

		{
			// sports/workout/workoutothers-radar.svelte
			pattern: /^\/sports\/workout\/workoutothers-radar\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workoutothers$45radar", file: "sports/workout/workoutothers-radar.svelte", component: Workoutothers_radar }
			]
		},

		{
			// sports/workout/workoutabdo-radar.svelte
			pattern: /^\/sports\/workout\/workoutabdo-radar\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workoutabdo$45radar", file: "sports/workout/workoutabdo-radar.svelte", component: Workoutabdo_radar }
			]
		},

		{
			// sports/workout/workoutlegs-radar.svelte
			pattern: /^\/sports\/workout\/workoutlegs-radar\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workoutlegs$45radar", file: "sports/workout/workoutlegs-radar.svelte", component: Workoutlegs_radar }
			]
		},

		{
			// sports/workout/workout.svelte
			pattern: /^\/sports\/workout\/workout\/?$/,
			parts: [
				null,
				null,
				{ name: "sports_workout_workout", file: "sports/workout/workout.svelte", component: Workout, preload: preload$8 }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// Box.svelte
			pattern: /^\/Box\/?$/,
			parts: [
				{ name: "Box", file: "Box.svelte", component: Box }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/dev";

const src_dir = "src";

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.22.3 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  () => JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8'))
		;

	const template =  () => read_template(src_dir)
		;

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  escape_html(err.message) ;

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'no-cache' );

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		const session = session_getter(req, res);

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				if (opts) {
					opts = Object.assign({}, opts);

					const include_cookies = (
						opts.credentials === 'include' ||
						opts.credentials === 'same-origin' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
					);

					if (include_cookies) {
						opts.headers = Object.assign({}, opts.headers);

						const cookies = Object.assign(
							{},
							cookie.parse(req.headers.cookie || ''),
							cookie.parse(opts.headers.cookie || '')
						);

						const set_cookie = res.getHeader('Set-Cookie');
						(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
							const match = /([^=]+)=([^;]+)/.exec(str);
							if (match) cookies[match[1]] = match[2];
						});

						const str = Object.keys(cookies)
							.map(key => `${key}=${cookies[key]}`)
							.join('; ');

						opts.headers.cookie = str;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && try_serialize(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

function escape_html(html) {
	const chars = {
		'"' : 'quot',
		"'": '#39',
		'&': 'amp',
		'<' : 'lt',
		'>' : 'gt'
	};

	return html.replace(/["'&<>]/g, c => `&${chars[c]};`);
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'no-cache' 
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const read =  (file) => fs.readFileSync(path.join(build_dir, file))
		;

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		bodyParser.json(),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BsaWIvbW9uZ28uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL25ld19zZXNzaW9ucy9zd2ltbWluZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvY3ljbGluZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvcnVubmluZy9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvd29ya291dC9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvaW5kZXguanNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvaW5kZXguanNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3J1bm5pbmcvaW5kZXguanNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvaW5kZXguanNvbi5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaG9tZS9pbmRleC5qc29uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9pbnRlcm5hbC9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3X3Nlc3Npb25zL3N3aW1taW5nL25ld19zd2ltbWluZy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL25ld19zZXNzaW9ucy9jeWNsaW5nL25ld19jeWNsaW5nLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3X3Nlc3Npb25zL3J1bm5pbmcvbmV3X3J1bm5pbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9uZXdfc2Vzc2lvbnMvd29ya291dC9uZXdfd29ya291dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9zd2ltbWluZy1jaGFydHMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvY3ljbGluZy9jeWNsaW5nLWNoYXJ0cy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2N5Y2xpbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvcnVubmluZy9ydW5uaW5nLWNoYXJ0cy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9ydW5uaW5nL3J1bm5pbmcuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvd29ya291dC93b3Jrb3V0cHVzaHVwcy1yYWRhci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXRvdGhlcnMtcmFkYXIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvd29ya291dC93b3Jrb3V0YWJkby1yYWRhci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXRsZWdzLXJhZGFyLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OYXYuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9tYW5pZmVzdC1zZXJ2ZXIubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zdG9yZS9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvaW50ZXJuYWwvc2hhcmVkLm1qcyIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9BcHAuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL3NlcnZlci5tanMiLCIuLi8uLi8uLi9zcmMvc2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvID0gcmVxdWlyZSgnbW9uZ29kYicpO1xuXG5sZXQgY2xpZW50ID0gbnVsbDtcbmxldCBkYiA9IG51bGw7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0KCl7XG4gICAgaWYoIWNsaWVudCl7XG4gICAgICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYitzcnY6Ly9iZWN1d2VtYXJ0aW46dmVuZHJlZGkxM0BjbHVzdGVyMC1oZ3hjbC5tb25nb2RiLm5ldC90ZXN0Ml9kYXRhYmFzZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIjtcbiAgICAgICAgY2xpZW50ID0gYXdhaXQgbW9uZ28uTW9uZ29DbGllbnQuY29ubmVjdCh1cmwpXG4gICAgICAgIGRiID0gY2xpZW50LmRiKCdzcG9ydF9wZXJmX2RhdGFiYXNlJyk7XG4gICAgfVxuICAgIHJldHVybiB7Y2xpZW50LCBkYn1cbn1cbiIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XG5cdFxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xuXHRjb25zdCBkYXRhX3JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmZpbmQoe3Nwb3J0Oidzd2ltbWluZyd9KS50b0FycmF5KCk7XG5cdFxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cblx0cmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhX3JhdykpO1xuXG5cdH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3QocmVxLCByZXMpe1xuXHRjb25zdCB7ZGIgfSA9IGF3YWl0IGluaXQoKVxuXHRjb25zdCBwb3N0ID0gcmVxLmJvZHk7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmluc2VydChwb3N0KTtcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xufVxuXG4vL2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SDhTWVltcmhIaUUiLCJpbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHtzcG9ydDonY3ljbGluZyd9KS50b0FycmF5KCk7XG5cdFxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cblx0cmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhX3JhdykpO1xuXG5cdH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3QocmVxLCByZXMpe1xuXHRjb25zdCB7ZGIgfSA9IGF3YWl0IGluaXQoKVxuXHRjb25zdCBwb3N0ID0gcmVxLmJvZHk7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmluc2VydChwb3N0KTtcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xufVxuXG4vL2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SDhTWVltcmhIaUUiLCJpbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHtzcG9ydDoncnVubmluZyd9KS50b0FycmF5KCk7XG5cdFxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cblx0cmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhX3JhdykpO1xuXG5cdH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3QocmVxLCByZXMpe1xuXHRjb25zdCB7ZGIgfSA9IGF3YWl0IGluaXQoKVxuXHRjb25zdCBwb3N0ID0gcmVxLmJvZHk7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmluc2VydChwb3N0KTtcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xufVxuXG4vL2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SDhTWVltcmhIaUUiLCJpbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHtzcG9ydDond29ya291dCd9KS50b0FycmF5KCk7XG5cdFxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cblx0cmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhX3JhdykpO1xuXG5cdH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3QocmVxLCByZXMpe1xuXHRjb25zdCB7ZGIgfSA9IGF3YWl0IGluaXQoKVxuXHRjb25zdCBwb3N0ID0gcmVxLmJvZHk7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmluc2VydChwb3N0KTtcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xufVxuXG4vL2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SDhTWVltcmhIaUUiLCJpbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHtzcG9ydDonc3dpbW1pbmcnfSkudG9BcnJheSgpO1xuXHRcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZGF0YV9yYXcpKTtcblx0fSIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHtzcG9ydDonY3ljbGluZyd9KS50b0FycmF5KCk7XG5cblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZGF0YV9yYXcpKTtcblxuXHR9XG5cblxuXG4iLCJpbXBvcnQge2luaXR9IGZyb20gJ0BsaWIvbW9uZ28nXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRcblx0Y29uc3Qge2RifSA9IGF3YWl0IGluaXQoKTtcblx0Y29uc3QgZGF0YV9yYXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcjFfY29sbGVjdGlvblwiKS5maW5kKHtzcG9ydDoncnVubmluZyd9KS50b0FycmF5KCk7XG5cdFxuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cblx0cmVzLmVuZChKU09OLnN0cmluZ2lmeShkYXRhX3JhdykpO1xuXHR9IiwiaW1wb3J0IHtpbml0fSBmcm9tICdAbGliL21vbmdvJ1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXQocmVxLCByZXMpIHtcblx0XG5cdGNvbnN0IHtkYn0gPSBhd2FpdCBpbml0KCk7XG5cdGNvbnN0IGRhdGFfcmF3ID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXIxX2NvbGxlY3Rpb25cIikuZmluZCh7c3BvcnQ6J3dvcmtvdXQnfSkudG9BcnJheSgpO1xuXHRcblx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdH0pO1xuXG5cdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoZGF0YV9yYXcpKTtcblx0fSIsImltcG9ydCB7aW5pdH0gZnJvbSAnQGxpYi9tb25nbydcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzKSB7XG5cdFxuXHRjb25zdCB7ZGJ9ID0gYXdhaXQgaW5pdCgpO1xuXHRjb25zdCBkYXRhX3JhdyA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJ1c2VyMV9jb2xsZWN0aW9uXCIpLmZpbmQoe30pLnRvQXJyYXkoKTtcblx0XG5cdHJlcy53cml0ZUhlYWQoMjAwLCB7XG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuXHR9KTtcblxuXHRyZXMuZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFfcmF3KSk7XG5cdH0iLCJmdW5jdGlvbiBub29wKCkgeyB9XG5jb25zdCBpZGVudGl0eSA9IHggPT4geDtcbmZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBmb3IgKGNvbnN0IGsgaW4gc3JjKVxuICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgcmV0dXJuIHRhcjtcbn1cbmZ1bmN0aW9uIGlzX3Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIGFkZF9sb2NhdGlvbihlbGVtZW50LCBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIpIHtcbiAgICBlbGVtZW50Ll9fc3ZlbHRlX21ldGEgPSB7XG4gICAgICAgIGxvYzogeyBmaWxlLCBsaW5lLCBjb2x1bW4sIGNoYXIgfVxuICAgIH07XG59XG5mdW5jdGlvbiBydW4oZm4pIHtcbiAgICByZXR1cm4gZm4oKTtcbn1cbmZ1bmN0aW9uIGJsYW5rX29iamVjdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShudWxsKTtcbn1cbmZ1bmN0aW9uIHJ1bl9hbGwoZm5zKSB7XG4gICAgZm5zLmZvckVhY2gocnVuKTtcbn1cbmZ1bmN0aW9uIGlzX2Z1bmN0aW9uKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmZ1bmN0aW9uIHNhZmVfbm90X2VxdWFsKGEsIGIpIHtcbiAgICByZXR1cm4gYSAhPSBhID8gYiA9PSBiIDogYSAhPT0gYiB8fCAoKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnKSB8fCB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG5mdW5jdGlvbiBub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfc3RvcmUoc3RvcmUsIG5hbWUpIHtcbiAgICBpZiAoc3RvcmUgIT0gbnVsbCAmJiB0eXBlb2Ygc3RvcmUuc3Vic2NyaWJlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgJyR7bmFtZX0nIGlzIG5vdCBhIHN0b3JlIHdpdGggYSAnc3Vic2NyaWJlJyBtZXRob2RgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUoc3RvcmUsIC4uLmNhbGxiYWNrcykge1xuICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBub29wO1xuICAgIH1cbiAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgIHJldHVybiB1bnN1Yi51bnN1YnNjcmliZSA/ICgpID0+IHVuc3ViLnVuc3Vic2NyaWJlKCkgOiB1bnN1Yjtcbn1cbmZ1bmN0aW9uIGdldF9zdG9yZV92YWx1ZShzdG9yZSkge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzdWJzY3JpYmUoc3RvcmUsIF8gPT4gdmFsdWUgPSBfKSgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICBjb21wb25lbnQuJCQub25fZGVzdHJveS5wdXNoKHN1YnNjcmliZShzdG9yZSwgY2FsbGJhY2spKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9zbG90KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBzbG90X2N0eCA9IGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbik7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uWzBdKHNsb3RfY3R4KTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jb250ZXh0KGRlZmluaXRpb24sIGN0eCwgJCRzY29wZSwgZm4pIHtcbiAgICByZXR1cm4gZGVmaW5pdGlvblsxXSAmJiBmblxuICAgICAgICA/IGFzc2lnbigkJHNjb3BlLmN0eC5zbGljZSgpLCBkZWZpbml0aW9uWzFdKGZuKGN0eCkpKVxuICAgICAgICA6ICQkc2NvcGUuY3R4O1xufVxuZnVuY3Rpb24gZ2V0X3Nsb3RfY2hhbmdlcyhkZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZm4pIHtcbiAgICBpZiAoZGVmaW5pdGlvblsyXSAmJiBmbikge1xuICAgICAgICBjb25zdCBsZXRzID0gZGVmaW5pdGlvblsyXShmbihkaXJ0eSkpO1xuICAgICAgICBpZiAoJCRzY29wZS5kaXJ0eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxldHMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGgubWF4KCQkc2NvcGUuZGlydHkubGVuZ3RoLCBsZXRzLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2VkW2ldID0gJCRzY29wZS5kaXJ0eVtpXSB8IGxldHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkJHNjb3BlLmRpcnR5IHwgbGV0cztcbiAgICB9XG4gICAgcmV0dXJuICQkc2NvcGUuZGlydHk7XG59XG5mdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoa1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdWx0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfcmVzdF9wcm9wcyhwcm9wcywga2V5cykge1xuICAgIGNvbnN0IHJlc3QgPSB7fTtcbiAgICBrZXlzID0gbmV3IFNldChrZXlzKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmICgha2V5cy5oYXMoaykgJiYga1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSA9IHJldCkge1xuICAgIHN0b3JlLnNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5mdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcbiAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbn1cblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5sZXQgbm93ID0gaXNfY2xpZW50XG4gICAgPyAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5sZXQgcmFmID0gaXNfY2xpZW50ID8gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IG5vb3A7XG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3RpbmdcbmZ1bmN0aW9uIHNldF9ub3coZm4pIHtcbiAgICBub3cgPSBmbjtcbn1cbmZ1bmN0aW9uIHNldF9yYWYoZm4pIHtcbiAgICByYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBydW5fdGFza3Mobm93KSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG59XG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkhXG4gKi9cbmZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuICAgIHRhc2tzLmNsZWFyKCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAqIHVudGlsIGl0IHJldHVybnMgYSBmYWxzeSB2YWx1ZSBvciBpcyBhYm9ydGVkXG4gKi9cbmZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IHsgYzogY2FsbGJhY2ssIGY6IGZ1bGZpbGwgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0aW9uc1tpXSlcbiAgICAgICAgICAgIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUsIHsgaXMgfSk7XG59XG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc19wcm9wKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwKSB7XG4gICAgY29uc3QgdmFsdWUgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyb3VwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChncm91cFtpXS5jaGVja2VkKVxuICAgICAgICAgICAgdmFsdWUucHVzaChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IG5vZGUuYXR0cmlidXRlc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN2ZyA/IHN2Z19lbGVtZW50KG5hbWUpIDogZWxlbWVudChuYW1lKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3RleHQobm9kZXMsIGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9ICcnICsgZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBub2Rlcy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRleHQoZGF0YSk7XG59XG5mdW5jdGlvbiBjbGFpbV9zcGFjZShub2Rlcykge1xuICAgIHJldHVybiBjbGFpbV90ZXh0KG5vZGVzLCAnICcpO1xufVxuZnVuY3Rpb24gc2V0X2RhdGEodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQuZGF0YSAhPT0gZGF0YSlcbiAgICAgICAgdGV4dC5kYXRhID0gZGF0YTtcbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF92YWx1ZShpbnB1dCwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCB8fCBpbnB1dC52YWx1ZSkge1xuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldF9pbnB1dF90eXBlKGlucHV0LCB0eXBlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3R5bGUobm9kZSwga2V5LCB2YWx1ZSwgaW1wb3J0YW50KSB7XG4gICAgbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlLCBpbXBvcnRhbnQgPyAnaW1wb3J0YW50JyA6ICcnKTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9vcHRpb24oc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIGlmIChvcHRpb24uX192YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9ucyhzZWxlY3QsIHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBzZWxlY3Qub3B0aW9uc1tpXTtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gfnZhbHVlLmluZGV4T2Yob3B0aW9uLl9fdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF92YWx1ZShzZWxlY3QpIHtcbiAgICBjb25zdCBzZWxlY3RlZF9vcHRpb24gPSBzZWxlY3QucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKSB8fCBzZWxlY3Qub3B0aW9uc1swXTtcbiAgICByZXR1cm4gc2VsZWN0ZWRfb3B0aW9uICYmIHNlbGVjdGVkX29wdGlvbi5fX3ZhbHVlO1xufVxuZnVuY3Rpb24gc2VsZWN0X211bHRpcGxlX3ZhbHVlKHNlbGVjdCkge1xuICAgIHJldHVybiBbXS5tYXAuY2FsbChzZWxlY3QucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKSwgb3B0aW9uID0+IG9wdGlvbi5fX3ZhbHVlKTtcbn1cbi8vIHVuZm9ydHVuYXRlbHkgdGhpcyBjYW4ndCBiZSBhIGNvbnN0YW50IGFzIHRoYXQgd291bGRuJ3QgYmUgdHJlZS1zaGFrZWFibGVcbi8vIHNvIHdlIGNhY2hlIHRoZSByZXN1bHQgaW5zdGVhZFxubGV0IGNyb3Nzb3JpZ2luO1xuZnVuY3Rpb24gaXNfY3Jvc3NvcmlnaW4oKSB7XG4gICAgaWYgKGNyb3Nzb3JpZ2luID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3Jvc3NvcmlnaW4gPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdm9pZCB3aW5kb3cucGFyZW50LmRvY3VtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY3Jvc3NvcmlnaW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcm9zc29yaWdpbjtcbn1cbmZ1bmN0aW9uIGFkZF9yZXNpemVfbGlzdGVuZXIobm9kZSwgZm4pIHtcbiAgICBjb25zdCBjb21wdXRlZF9zdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3Qgel9pbmRleCA9IChwYXJzZUludChjb21wdXRlZF9zdHlsZS56SW5kZXgpIHx8IDApIC0gMTtcbiAgICBpZiAoY29tcHV0ZWRfc3R5bGUucG9zaXRpb24gPT09ICdzdGF0aWMnKSB7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cbiAgICBjb25zdCBpZnJhbWUgPSBlbGVtZW50KCdpZnJhbWUnKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsIGBkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGAgK1xuICAgICAgICBgb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwOyBvcGFjaXR5OiAwOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogJHt6X2luZGV4fTtgKTtcbiAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgaWZyYW1lLnRhYkluZGV4ID0gLTE7XG4gICAgbGV0IHVuc3Vic2NyaWJlO1xuICAgIGlmIChpc19jcm9zc29yaWdpbigpKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBgZGF0YTp0ZXh0L2h0bWwsPHNjcmlwdD5vbnJlc2l6ZT1mdW5jdGlvbigpe3BhcmVudC5wb3N0TWVzc2FnZSgwLCcqJyl9PC9zY3JpcHQ+YDtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBkZXRhY2goaWZyYW1lKTtcbiAgICAgICAgaWYgKHVuc3Vic2NyaWJlKVxuICAgICAgICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gdG9nZ2xlX2NsYXNzKGVsZW1lbnQsIG5hbWUsIHRvZ2dsZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0W3RvZ2dsZSA/ICdhZGQnIDogJ3JlbW92ZSddKG5hbWUpO1xufVxuZnVuY3Rpb24gY3VzdG9tX2V2ZW50KHR5cGUsIGRldGFpbCkge1xuICAgIGNvbnN0IGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBlLmluaXRDdXN0b21FdmVudCh0eXBlLCBmYWxzZSwgZmFsc2UsIGRldGFpbCk7XG4gICAgcmV0dXJuIGU7XG59XG5mdW5jdGlvbiBxdWVyeV9zZWxlY3Rvcl9hbGwoc2VsZWN0b3IsIHBhcmVudCA9IGRvY3VtZW50LmJvZHkpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShwYXJlbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuY2xhc3MgSHRtbFRhZyB7XG4gICAgY29uc3RydWN0b3IoaHRtbCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICB0aGlzLmUgPSBlbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5hID0gYW5jaG9yO1xuICAgICAgICB0aGlzLnUoaHRtbCk7XG4gICAgfVxuICAgIG0odGFyZ2V0LCBhbmNob3IgPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpbnNlcnQodGFyZ2V0LCB0aGlzLm5baV0sIGFuY2hvcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgIH1cbiAgICB1KGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBwKGh0bWwpIHtcbiAgICAgICAgdGhpcy5kKCk7XG4gICAgICAgIHRoaXMudShodG1sKTtcbiAgICAgICAgdGhpcy5tKHRoaXMudCwgdGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5cbmNvbnN0IGFjdGl2ZV9kb2NzID0gbmV3IFNldCgpO1xubGV0IGFjdGl2ZSA9IDA7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBjb25zdCBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgYWN0aXZlX2RvY3MuYWRkKGRvYyk7XG4gICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvYy5fX3N2ZWx0ZV9zdHlsZXNoZWV0IHx8IChkb2MuX19zdmVsdGVfc3R5bGVzaGVldCA9IGRvYy5oZWFkLmFwcGVuZENoaWxkKGVsZW1lbnQoJ3N0eWxlJykpLnNoZWV0KTtcbiAgICBjb25zdCBjdXJyZW50X3J1bGVzID0gZG9jLl9fc3ZlbHRlX3J1bGVzIHx8IChkb2MuX19zdmVsdGVfcnVsZXMgPSB7fSk7XG4gICAgaWYgKCFjdXJyZW50X3J1bGVzW25hbWVdKSB7XG4gICAgICAgIGN1cnJlbnRfcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiBgYH0ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICBjb25zdCBwcmV2aW91cyA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgbmV4dCA9IHByZXZpb3VzLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZGVsZXRlZCA9IHByZXZpb3VzLmxlbmd0aCAtIG5leHQubGVuZ3RoO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbmV4dC5qb2luKCcsICcpO1xuICAgICAgICBhY3RpdmUgLT0gZGVsZXRlZDtcbiAgICAgICAgaWYgKCFhY3RpdmUpXG4gICAgICAgICAgICBjbGVhcl9ydWxlcygpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGFjdGl2ZV9kb2NzLmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2MuX19zdmVsdGVfc3R5bGVzaGVldDtcbiAgICAgICAgICAgIGxldCBpID0gc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgICAgIGRvYy5fX3N2ZWx0ZV9ydWxlcyA9IHt9O1xuICAgICAgICB9KTtcbiAgICAgICAgYWN0aXZlX2RvY3MuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZ1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbmApO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4oZXZlbnQpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5jb25zdCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmxldCBmbHVzaGluZyA9IGZhbHNlO1xuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAoZmx1c2hpbmcpXG4gICAgICAgIHJldHVybjtcbiAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbaV07XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICB9XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgICB9XG4gICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGZsdXNoaW5nID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlKTtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICBncm91cC5yICs9IDE7XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbmQocmVzZXQpIHtcbiAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCB0ID0gaW50cm8gPyAwIDogMTtcbiAgICBsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNsZWFyX2FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGQgPSBwcm9ncmFtLmIgLSB0O1xuICAgICAgICBkdXJhdGlvbiAqPSBNYXRoLmFicyhkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHQsXG4gICAgICAgICAgICBiOiBwcm9ncmFtLmIsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBzdGFydDogcHJvZ3JhbS5zdGFydCxcbiAgICAgICAgICAgIGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuICAgICAgICAgICAgZ3JvdXA6IHByb2dyYW0uZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oYikge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBjb25zdCBwcm9ncmFtID0ge1xuICAgICAgICAgICAgc3RhcnQ6IG5vdygpICsgZGVsYXksXG4gICAgICAgICAgICBiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgICAgICBvdXRyb3MuciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmZvLnRva2VuICE9PSB0b2tlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHZhbHVlO1xuICAgICAgICBsZXQgY2hpbGRfY3R4ID0gaW5mby5jdHg7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2hpbGRfY3R4ID0gY2hpbGRfY3R4LnNsaWNlKCk7XG4gICAgICAgICAgICBjaGlsZF9jdHhba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IG5lZWRzX2ZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2NrLmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgICAgIGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG4gICAgICAgICAgICBuZWVkc19mbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5ibG9jayA9IGJsb2NrO1xuICAgICAgICBpZiAoaW5mby5ibG9ja3MpXG4gICAgICAgICAgICBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcbiAgICAgICAgaWYgKG5lZWRzX2ZsdXNoKSB7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc19wcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgICAgIHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnBlbmRpbmcsIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8udGhlbikge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnJlc29sdmVkID0gcHJvbWlzZTtcbiAgICB9XG59XG5cbmNvbnN0IGdsb2JhbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHdpbmRvd1xuICAgIDogdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZ2xvYmFsVGhpc1xuICAgICAgICA6IGdsb2JhbCk7XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmQoMSk7XG4gICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChvbGRfYmxvY2tzLCBkaXJ0eSwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBuZXh0LCBnZXRfY29udGV4dCkge1xuICAgIGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG4gICAgbGV0IG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaSA9IG87XG4gICAgY29uc3Qgb2xkX2luZGV4ZXMgPSB7fTtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuICAgIGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcbiAgICBjb25zdCBuZXdfbG9va3VwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBNYXAoKTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICBibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld19sb29rdXAuc2V0KGtleSwgbmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKTtcbiAgICAgICAgaWYgKGtleSBpbiBvbGRfaW5kZXhlcylcbiAgICAgICAgICAgIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuICAgIH1cbiAgICBjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICBibG9jay5tKG5vZGUsIG5leHQsIGxvb2t1cC5oYXMoYmxvY2sua2V5KSk7XG4gICAgICAgIGxvb2t1cC5zZXQoYmxvY2sua2V5LCBibG9jayk7XG4gICAgICAgIG5leHQgPSBibG9jay5maXJzdDtcbiAgICAgICAgbi0tO1xuICAgIH1cbiAgICB3aGlsZSAobyAmJiBuKSB7XG4gICAgICAgIGNvbnN0IG5ld19ibG9jayA9IG5ld19ibG9ja3NbbiAtIDFdO1xuICAgICAgICBjb25zdCBvbGRfYmxvY2sgPSBvbGRfYmxvY2tzW28gLSAxXTtcbiAgICAgICAgY29uc3QgbmV3X2tleSA9IG5ld19ibG9jay5rZXk7XG4gICAgICAgIGNvbnN0IG9sZF9rZXkgPSBvbGRfYmxvY2sua2V5O1xuICAgICAgICBpZiAobmV3X2Jsb2NrID09PSBvbGRfYmxvY2spIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIG5leHQgPSBuZXdfYmxvY2suZmlyc3Q7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgICAgICBuLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIW5ld19sb29rdXAuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb2xkIGJsb2NrXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghbG9va3VwLmhhcyhuZXdfa2V5KSB8fCB3aWxsX21vdmUuaGFzKG5ld19rZXkpKSB7XG4gICAgICAgICAgICBpbnNlcnQobmV3X2Jsb2NrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkaWRfbW92ZS5oYXMob2xkX2tleSkpIHtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkZWx0YXMuZ2V0KG5ld19rZXkpID4gZGVsdGFzLmdldChvbGRfa2V5KSkge1xuICAgICAgICAgICAgZGlkX21vdmUuYWRkKG5ld19rZXkpO1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWxsX21vdmUuYWRkKG9sZF9rZXkpO1xuICAgICAgICAgICAgby0tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChvLS0pIHtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvXTtcbiAgICAgICAgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfYmxvY2sua2V5KSlcbiAgICAgICAgICAgIGRlc3Ryb3kob2xkX2Jsb2NrLCBsb29rdXApO1xuICAgIH1cbiAgICB3aGlsZSAobilcbiAgICAgICAgaW5zZXJ0KG5ld19ibG9ja3NbbiAtIDFdKTtcbiAgICByZXR1cm4gbmV3X2Jsb2Nrcztcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX2VhY2hfa2V5cyhjdHgsIGxpc3QsIGdldF9jb250ZXh0LCBnZXRfa2V5KSB7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZ2V0X2tleShnZXRfY29udGV4dChjdHgsIGxpc3QsIGkpKTtcbiAgICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGhhdmUgZHVwbGljYXRlIGtleXMgaW4gYSBrZXllZCBlYWNoYCk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldF9zcHJlYWRfdXBkYXRlKGxldmVscywgdXBkYXRlcykge1xuICAgIGNvbnN0IHVwZGF0ZSA9IHt9O1xuICAgIGNvbnN0IHRvX251bGxfb3V0ID0ge307XG4gICAgY29uc3QgYWNjb3VudGVkX2ZvciA9IHsgJCRzY29wZTogMSB9O1xuICAgIGxldCBpID0gbGV2ZWxzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IG8gPSBsZXZlbHNbaV07XG4gICAgICAgIGNvbnN0IG4gPSB1cGRhdGVzW2ldO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbykge1xuICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBuKSlcbiAgICAgICAgICAgICAgICAgICAgdG9fbnVsbF9vdXRba2V5XSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFhY2NvdW50ZWRfZm9yW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlW2tleV0gPSBuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRlZF9mb3Jba2V5XSA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV2ZWxzW2ldID0gbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IGluIHRvX251bGxfb3V0KSB7XG4gICAgICAgIGlmICghKGtleSBpbiB1cGRhdGUpKVxuICAgICAgICAgICAgdXBkYXRlW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB1cGRhdGU7XG59XG5mdW5jdGlvbiBnZXRfc3ByZWFkX29iamVjdChzcHJlYWRfcHJvcHMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNwcmVhZF9wcm9wcyA9PT0gJ29iamVjdCcgJiYgc3ByZWFkX3Byb3BzICE9PSBudWxsID8gc3ByZWFkX3Byb3BzIDoge307XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5kaWNlcy5odG1sXG5jb25zdCBib29sZWFuX2F0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgICAnYWxsb3dmdWxsc2NyZWVuJyxcbiAgICAnYWxsb3dwYXltZW50cmVxdWVzdCcsXG4gICAgJ2FzeW5jJyxcbiAgICAnYXV0b2ZvY3VzJyxcbiAgICAnYXV0b3BsYXknLFxuICAgICdjaGVja2VkJyxcbiAgICAnY29udHJvbHMnLFxuICAgICdkZWZhdWx0JyxcbiAgICAnZGVmZXInLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Zvcm1ub3ZhbGlkYXRlJyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaXNtYXAnLFxuICAgICdsb29wJyxcbiAgICAnbXVsdGlwbGUnLFxuICAgICdtdXRlZCcsXG4gICAgJ25vbW9kdWxlJyxcbiAgICAnbm92YWxpZGF0ZScsXG4gICAgJ29wZW4nLFxuICAgICdwbGF5c2lubGluZScsXG4gICAgJ3JlYWRvbmx5JyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXZlcnNlZCcsXG4gICAgJ3NlbGVjdGVkJ1xuXSk7XG5cbmNvbnN0IGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyID0gL1tcXHMnXCI+Lz1cXHV7RkREMH0tXFx1e0ZERUZ9XFx1e0ZGRkV9XFx1e0ZGRkZ9XFx1ezFGRkZFfVxcdXsxRkZGRn1cXHV7MkZGRkV9XFx1ezJGRkZGfVxcdXszRkZGRX1cXHV7M0ZGRkZ9XFx1ezRGRkZFfVxcdXs0RkZGRn1cXHV7NUZGRkV9XFx1ezVGRkZGfVxcdXs2RkZGRX1cXHV7NkZGRkZ9XFx1ezdGRkZFfVxcdXs3RkZGRn1cXHV7OEZGRkV9XFx1ezhGRkZGfVxcdXs5RkZGRX1cXHV7OUZGRkZ9XFx1e0FGRkZFfVxcdXtBRkZGRn1cXHV7QkZGRkV9XFx1e0JGRkZGfVxcdXtDRkZGRX1cXHV7Q0ZGRkZ9XFx1e0RGRkZFfVxcdXtERkZGRn1cXHV7RUZGRkV9XFx1e0VGRkZGfVxcdXtGRkZGRX1cXHV7RkZGRkZ9XFx1ezEwRkZGRX1cXHV7MTBGRkZGfV0vdTtcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuLy8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI25vbmNoYXJhY3RlclxuZnVuY3Rpb24gc3ByZWFkKGFyZ3MsIGNsYXNzZXNfdG9fYWRkKSB7XG4gICAgY29uc3QgYXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oe30sIC4uLmFyZ3MpO1xuICAgIGlmIChjbGFzc2VzX3RvX2FkZCkge1xuICAgICAgICBpZiAoYXR0cmlidXRlcy5jbGFzcyA9PSBudWxsKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzID0gY2xhc3Nlc190b19hZGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmNsYXNzICs9ICcgJyArIGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBzdHIgPSAnJztcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICBpZiAoaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIudGVzdChuYW1lKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXG4gICAgICAgICAgICBzdHIgKz0gXCIgXCIgKyBuYW1lO1xuICAgICAgICBlbHNlIGlmIChib29sZWFuX2F0dHJpYnV0ZXMuaGFzKG5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSlcbiAgICAgICAgICAgICAgICBzdHIgKz0gXCIgXCIgKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHN0ciArPSBgICR7bmFtZX09XCIke1N0cmluZyh2YWx1ZSkucmVwbGFjZSgvXCIvZywgJyYjMzQ7JykucmVwbGFjZSgvJy9nLCAnJiMzOTsnKX1cImA7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgZXNjYXBlZCA9IHtcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICBcIidcIjogJyYjMzk7JyxcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0Oydcbn07XG5mdW5jdGlvbiBlc2NhcGUoaHRtbCkge1xuICAgIHJldHVybiBTdHJpbmcoaHRtbCkucmVwbGFjZSgvW1wiJyY8Pl0vZywgbWF0Y2ggPT4gZXNjYXBlZFttYXRjaF0pO1xufVxuZnVuY3Rpb24gZWFjaChpdGVtcywgZm4pIHtcbiAgICBsZXQgc3RyID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdHIgKz0gZm4oaXRlbXNbaV0sIGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxuY29uc3QgbWlzc2luZ19jb21wb25lbnQgPSB7XG4gICAgJCRyZW5kZXI6ICgpID0+ICcnXG59O1xuZnVuY3Rpb24gdmFsaWRhdGVfY29tcG9uZW50KGNvbXBvbmVudCwgbmFtZSkge1xuICAgIGlmICghY29tcG9uZW50IHx8ICFjb21wb25lbnQuJCRyZW5kZXIpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdzdmVsdGU6Y29tcG9uZW50JylcbiAgICAgICAgICAgIG5hbWUgKz0gJyB0aGlzPXsuLi59JztcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGA8JHtuYW1lfT4gaXMgbm90IGEgdmFsaWQgU1NSIGNvbXBvbmVudC4gWW91IG1heSBuZWVkIHRvIHJldmlldyB5b3VyIGJ1aWxkIGNvbmZpZyB0byBlbnN1cmUgdGhhdCBkZXBlbmRlbmNpZXMgYXJlIGNvbXBpbGVkLCByYXRoZXIgdGhhbiBpbXBvcnRlZCBhcyBwcmUtY29tcGlsZWQgbW9kdWxlc2ApO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZnVuY3Rpb24gZGVidWcoZmlsZSwgbGluZSwgY29sdW1uLCB2YWx1ZXMpIHtcbiAgICBjb25zb2xlLmxvZyhge0BkZWJ1Z30gJHtmaWxlID8gZmlsZSArICcgJyA6ICcnfSgke2xpbmV9OiR7Y29sdW1ufSlgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5sb2codmFsdWVzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgcmV0dXJuICcnO1xufVxubGV0IG9uX2Rlc3Ryb3k7XG5mdW5jdGlvbiBjcmVhdGVfc3NyX2NvbXBvbmVudChmbikge1xuICAgIGZ1bmN0aW9uICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cykge1xuICAgICAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgICAgIGNvbnN0ICQkID0ge1xuICAgICAgICAgICAgb25fZGVzdHJveSxcbiAgICAgICAgICAgIGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSxcbiAgICAgICAgICAgIC8vIHRoZXNlIHdpbGwgYmUgaW1tZWRpYXRlbHkgZGlzY2FyZGVkXG4gICAgICAgICAgICBvbl9tb3VudDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpXG4gICAgICAgIH07XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudCh7ICQkIH0pO1xuICAgICAgICBjb25zdCBodG1sID0gZm4ocmVzdWx0LCBwcm9wcywgYmluZGluZ3MsIHNsb3RzKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHBhcmVudF9jb21wb25lbnQpO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyOiAocHJvcHMgPSB7fSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBvbl9kZXN0cm95ID0gW107XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7IHRpdGxlOiAnJywgaGVhZDogJycsIGNzczogbmV3IFNldCgpIH07XG4gICAgICAgICAgICBjb25zdCBodG1sID0gJCRyZW5kZXIocmVzdWx0LCBwcm9wcywge30sIG9wdGlvbnMpO1xuICAgICAgICAgICAgcnVuX2FsbChvbl9kZXN0cm95KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaHRtbCxcbiAgICAgICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQXJyYXkuZnJvbShyZXN1bHQuY3NzKS5tYXAoY3NzID0+IGNzcy5jb2RlKS5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgbWFwOiBudWxsIC8vIFRPRE9cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhlYWQ6IHJlc3VsdC50aXRsZSArIHJlc3VsdC5oZWFkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICAkJHJlbmRlclxuICAgIH07XG59XG5mdW5jdGlvbiBhZGRfYXR0cmlidXRlKG5hbWUsIHZhbHVlLCBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKGJvb2xlYW4gJiYgIXZhbHVlKSlcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHJldHVybiBgICR7bmFtZX0ke3ZhbHVlID09PSB0cnVlID8gJycgOiBgPSR7dHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KGVzY2FwZSh2YWx1ZSkpIDogYFwiJHt2YWx1ZX1cImB9YH1gO1xufVxuZnVuY3Rpb24gYWRkX2NsYXNzZXMoY2xhc3Nlcykge1xuICAgIHJldHVybiBjbGFzc2VzID8gYCBjbGFzcz1cIiR7Y2xhc3Nlc31cImAgOiBgYDtcbn1cblxuZnVuY3Rpb24gYmluZChjb21wb25lbnQsIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb21wb25lbnQuJCQucHJvcHNbbmFtZV07XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50LiQkLmJvdW5kW2luZGV4XSA9IGNhbGxiYWNrO1xuICAgICAgICBjYWxsYmFjayhjb21wb25lbnQuJCQuY3R4W2luZGV4XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlX2NvbXBvbmVudChibG9jaykge1xuICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbn1cbmZ1bmN0aW9uIGNsYWltX2NvbXBvbmVudChibG9jaywgcGFyZW50X25vZGVzKSB7XG4gICAgYmxvY2sgJiYgYmxvY2subChwYXJlbnRfbm9kZXMpO1xufVxuZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IpIHtcbiAgICBjb25zdCB7IGZyYWdtZW50LCBvbl9tb3VudCwgb25fZGVzdHJveSwgYWZ0ZXJfdXBkYXRlIH0gPSBjb21wb25lbnQuJCQ7XG4gICAgZnJhZ21lbnQgJiYgZnJhZ21lbnQubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgLy8gb25Nb3VudCBoYXBwZW5zIGJlZm9yZSB0aGUgaW5pdGlhbCBhZnRlclVwZGF0ZVxuICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgIGlmIChvbl9kZXN0cm95KSB7XG4gICAgICAgICAgICBvbl9kZXN0cm95LnB1c2goLi4ubmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRWRnZSBjYXNlIC0gY29tcG9uZW50IHdhcyBkZXN0cm95ZWQgaW1tZWRpYXRlbHksXG4gICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICBydW5fYWxsKG5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICB9KTtcbiAgICBhZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGRlc3Ryb3lfY29tcG9uZW50KGNvbXBvbmVudCwgZGV0YWNoaW5nKSB7XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQ7XG4gICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJ1bl9hbGwoJCQub25fZGVzdHJveSk7XG4gICAgICAgICQkLmZyYWdtZW50ICYmICQkLmZyYWdtZW50LmQoZGV0YWNoaW5nKTtcbiAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAvLyBwcmVzZXJ2ZSBmaW5hbCBzdGF0ZT8pXG4gICAgICAgICQkLm9uX2Rlc3Ryb3kgPSAkJC5mcmFnbWVudCA9IG51bGw7XG4gICAgICAgICQkLmN0eCA9IFtdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgaWYgKGNvbXBvbmVudC4kJC5kaXJ0eVswXSA9PT0gLTEpIHtcbiAgICAgICAgZGlydHlfY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICBjb21wb25lbnQuJCQuZGlydHkuZmlsbCgwKTtcbiAgICB9XG4gICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xufVxuZnVuY3Rpb24gaW5pdChjb21wb25lbnQsIG9wdGlvbnMsIGluc3RhbmNlLCBjcmVhdGVfZnJhZ21lbnQsIG5vdF9lcXVhbCwgcHJvcHMsIGRpcnR5ID0gWy0xXSkge1xuICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICBjb25zdCBwcm9wX3ZhbHVlcyA9IG9wdGlvbnMucHJvcHMgfHwge307XG4gICAgY29uc3QgJCQgPSBjb21wb25lbnQuJCQgPSB7XG4gICAgICAgIGZyYWdtZW50OiBudWxsLFxuICAgICAgICBjdHg6IG51bGwsXG4gICAgICAgIC8vIHN0YXRlXG4gICAgICAgIHByb3BzLFxuICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgIG5vdF9lcXVhbCxcbiAgICAgICAgYm91bmQ6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICBvbl9kZXN0cm95OiBbXSxcbiAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgIGNvbnRleHQ6IG5ldyBNYXAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSxcbiAgICAgICAgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgIGNhbGxiYWNrczogYmxhbmtfb2JqZWN0KCksXG4gICAgICAgIGRpcnR5XG4gICAgfTtcbiAgICBsZXQgcmVhZHkgPSBmYWxzZTtcbiAgICAkJC5jdHggPSBpbnN0YW5jZVxuICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgcHJvcF92YWx1ZXMsIChpLCByZXQsIC4uLnJlc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgaWYgKCQkLmN0eCAmJiBub3RfZXF1YWwoJCQuY3R4W2ldLCAkJC5jdHhbaV0gPSB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCQuYm91bmRbaV0pXG4gICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVhZHkpXG4gICAgICAgICAgICAgICAgICAgIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pXG4gICAgICAgIDogW107XG4gICAgJCQudXBkYXRlKCk7XG4gICAgcmVhZHkgPSB0cnVlO1xuICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgLy8gYGZhbHNlYCBhcyBhIHNwZWNpYWwgY2FzZSBvZiBubyBET00gY29tcG9uZW50XG4gICAgJCQuZnJhZ21lbnQgPSBjcmVhdGVfZnJhZ21lbnQgPyBjcmVhdGVfZnJhZ21lbnQoJCQuY3R4KSA6IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICBpZiAob3B0aW9ucy5oeWRyYXRlKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IGNoaWxkcmVuKG9wdGlvbnMudGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5sKG5vZGVzKTtcbiAgICAgICAgICAgIG5vZGVzLmZvckVhY2goZGV0YWNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5jKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuaW50cm8pXG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGNvbXBvbmVudC4kJC5mcmFnbWVudCk7XG4gICAgICAgIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIG9wdGlvbnMudGFyZ2V0LCBvcHRpb25zLmFuY2hvcik7XG4gICAgICAgIGZsdXNoKCk7XG4gICAgfVxuICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbn1cbmxldCBTdmVsdGVFbGVtZW50O1xuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFN2ZWx0ZUVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdXBlcigpO1xuICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRvZG86IGltcHJvdmUgdHlwaW5nc1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy4kJC5zbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuJCQuc2xvdHRlZFtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0ciwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpc1thdHRyXSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFRPRE8gc2hvdWxkIHRoaXMgZGVsZWdhdGUgdG8gYWRkRXZlbnRMaXN0ZW5lcj9cbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgpIHtcbiAgICAgICAgICAgIC8vIG92ZXJyaWRkZW4gYnkgaW5zdGFuY2UsIGlmIGl0IGhhcyBwcm9wc1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICB9XG4gICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICBjYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgICRzZXQoKSB7XG4gICAgICAgIC8vIG92ZXJyaWRkZW4gYnkgaW5zdGFuY2UsIGlmIGl0IGhhcyBwcm9wc1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hfZGV2KHR5cGUsIGRldGFpbCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tX2V2ZW50KHR5cGUsIE9iamVjdC5hc3NpZ24oeyB2ZXJzaW9uOiAnMy4yMi4zJyB9LCBkZXRhaWwpKSk7XG59XG5mdW5jdGlvbiBhcHBlbmRfZGV2KHRhcmdldCwgbm9kZSkge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUluc2VydFwiLCB7IHRhcmdldCwgbm9kZSB9KTtcbiAgICBhcHBlbmQodGFyZ2V0LCBub2RlKTtcbn1cbmZ1bmN0aW9uIGluc2VydF9kZXYodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01JbnNlcnRcIiwgeyB0YXJnZXQsIG5vZGUsIGFuY2hvciB9KTtcbiAgICBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2Rldihub2RlKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NUmVtb3ZlXCIsIHsgbm9kZSB9KTtcbiAgICBkZXRhY2gobm9kZSk7XG59XG5mdW5jdGlvbiBkZXRhY2hfYmV0d2Vlbl9kZXYoYmVmb3JlLCBhZnRlcikge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcgJiYgYmVmb3JlLm5leHRTaWJsaW5nICE9PSBhZnRlcikge1xuICAgICAgICBkZXRhY2hfZGV2KGJlZm9yZS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2JlZm9yZV9kZXYoYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYWZ0ZXIucHJldmlvdXNTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBkZXRhY2hfYWZ0ZXJfZGV2KGJlZm9yZSkge1xuICAgIHdoaWxlIChiZWZvcmUubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxpc3Rlbl9kZXYobm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMsIGhhc19wcmV2ZW50X2RlZmF1bHQsIGhhc19zdG9wX3Byb3BhZ2F0aW9uKSB7XG4gICAgY29uc3QgbW9kaWZpZXJzID0gb3B0aW9ucyA9PT0gdHJ1ZSA/IFtcImNhcHR1cmVcIl0gOiBvcHRpb25zID8gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhvcHRpb25zKSkgOiBbXTtcbiAgICBpZiAoaGFzX3ByZXZlbnRfZGVmYXVsdClcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3ByZXZlbnREZWZhdWx0Jyk7XG4gICAgaWYgKGhhc19zdG9wX3Byb3BhZ2F0aW9uKVxuICAgICAgICBtb2RpZmllcnMucHVzaCgnc3RvcFByb3BhZ2F0aW9uJyk7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NQWRkRXZlbnRMaXN0ZW5lclwiLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgY29uc3QgZGlzcG9zZSA9IGxpc3Rlbihub2RlLCBldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NUmVtb3ZlRXZlbnRMaXN0ZW5lclwiLCB7IG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBtb2RpZmllcnMgfSk7XG4gICAgICAgIGRpc3Bvc2UoKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gYXR0cl9kZXYobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09IG51bGwpXG4gICAgICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZUF0dHJpYnV0ZVwiLCB7IG5vZGUsIGF0dHJpYnV0ZSB9KTtcbiAgICBlbHNlXG4gICAgICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldEF0dHJpYnV0ZVwiLCB7IG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBwcm9wX2Rldihub2RlLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBub2RlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldFByb3BlcnR5XCIsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gZGF0YXNldF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZS5kYXRhc2V0W3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldERhdGFzZXRcIiwgeyBub2RlLCBwcm9wZXJ0eSwgdmFsdWUgfSk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YV9kZXYodGV4dCwgZGF0YSkge1xuICAgIGRhdGEgPSAnJyArIGRhdGE7XG4gICAgaWYgKHRleHQuZGF0YSA9PT0gZGF0YSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVNldERhdGFcIiwgeyBub2RlOiB0ZXh0LCBkYXRhIH0pO1xuICAgIHRleHQuZGF0YSA9IGRhdGE7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50KGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnc3RyaW5nJyAmJiAhKGFyZyAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhcmcpKSB7XG4gICAgICAgIGxldCBtc2cgPSAneyNlYWNofSBvbmx5IGl0ZXJhdGVzIG92ZXIgYXJyYXktbGlrZSBvYmplY3RzLic7XG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIGFyZyAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gYXJnKSB7XG4gICAgICAgICAgICBtc2cgKz0gJyBZb3UgY2FuIHVzZSBhIHNwcmVhZCB0byBjb252ZXJ0IHRoaXMgaXRlcmFibGUgaW50byBhbiBhcnJheS4nO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlX3Nsb3RzKG5hbWUsIHNsb3QsIGtleXMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Rfa2V5IG9mIE9iamVjdC5rZXlzKHNsb3QpKSB7XG4gICAgICAgIGlmICghfmtleXMuaW5kZXhPZihzbG90X2tleSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgPCR7bmFtZX0+IHJlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgc2xvdCBcIiR7c2xvdF9rZXl9XCIuYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBTdmVsdGVDb21wb25lbnREZXYgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zIHx8ICghb3B0aW9ucy50YXJnZXQgJiYgIW9wdGlvbnMuJCRpbmxpbmUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCd0YXJnZXQnIGlzIGEgcmVxdWlyZWQgb3B0aW9uYCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLiRkZXN0cm95KCk7XG4gICAgICAgIHRoaXMuJGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENvbXBvbmVudCB3YXMgYWxyZWFkeSBkZXN0cm95ZWRgKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH07XG4gICAgfVxuICAgICRjYXB0dXJlX3N0YXRlKCkgeyB9XG4gICAgJGluamVjdF9zdGF0ZSgpIHsgfVxufVxuZnVuY3Rpb24gbG9vcF9ndWFyZCh0aW1lb3V0KSB7XG4gICAgY29uc3Qgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gc3RhcnQgPiB0aW1lb3V0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEluZmluaXRlIGxvb3AgZGV0ZWN0ZWRgKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCB7IEh0bWxUYWcsIFN2ZWx0ZUNvbXBvbmVudCwgU3ZlbHRlQ29tcG9uZW50RGV2LCBTdmVsdGVFbGVtZW50LCBhY3Rpb25fZGVzdHJveWVyLCBhZGRfYXR0cmlidXRlLCBhZGRfY2xhc3NlcywgYWRkX2ZsdXNoX2NhbGxiYWNrLCBhZGRfbG9jYXRpb24sIGFkZF9yZW5kZXJfY2FsbGJhY2ssIGFkZF9yZXNpemVfbGlzdGVuZXIsIGFkZF90cmFuc2Zvcm0sIGFmdGVyVXBkYXRlLCBhcHBlbmQsIGFwcGVuZF9kZXYsIGFzc2lnbiwgYXR0ciwgYXR0cl9kZXYsIGJlZm9yZVVwZGF0ZSwgYmluZCwgYmluZGluZ19jYWxsYmFja3MsIGJsYW5rX29iamVjdCwgYnViYmxlLCBjaGVja19vdXRyb3MsIGNoaWxkcmVuLCBjbGFpbV9jb21wb25lbnQsIGNsYWltX2VsZW1lbnQsIGNsYWltX3NwYWNlLCBjbGFpbV90ZXh0LCBjbGVhcl9sb29wcywgY29tcG9uZW50X3N1YnNjcmliZSwgY29tcHV0ZV9yZXN0X3Byb3BzLCBjcmVhdGVFdmVudERpc3BhdGNoZXIsIGNyZWF0ZV9hbmltYXRpb24sIGNyZWF0ZV9iaWRpcmVjdGlvbmFsX3RyYW5zaXRpb24sIGNyZWF0ZV9jb21wb25lbnQsIGNyZWF0ZV9pbl90cmFuc2l0aW9uLCBjcmVhdGVfb3V0X3RyYW5zaXRpb24sIGNyZWF0ZV9zbG90LCBjcmVhdGVfc3NyX2NvbXBvbmVudCwgY3VycmVudF9jb21wb25lbnQsIGN1c3RvbV9ldmVudCwgZGF0YXNldF9kZXYsIGRlYnVnLCBkZXN0cm95X2Jsb2NrLCBkZXN0cm95X2NvbXBvbmVudCwgZGVzdHJveV9lYWNoLCBkZXRhY2gsIGRldGFjaF9hZnRlcl9kZXYsIGRldGFjaF9iZWZvcmVfZGV2LCBkZXRhY2hfYmV0d2Vlbl9kZXYsIGRldGFjaF9kZXYsIGRpcnR5X2NvbXBvbmVudHMsIGRpc3BhdGNoX2RldiwgZWFjaCwgZWxlbWVudCwgZWxlbWVudF9pcywgZW1wdHksIGVzY2FwZSwgZXNjYXBlZCwgZXhjbHVkZV9pbnRlcm5hbF9wcm9wcywgZml4X2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBmaXhfcG9zaXRpb24sIGZsdXNoLCBnZXRDb250ZXh0LCBnZXRfYmluZGluZ19ncm91cF92YWx1ZSwgZ2V0X2N1cnJlbnRfY29tcG9uZW50LCBnZXRfc2xvdF9jaGFuZ2VzLCBnZXRfc2xvdF9jb250ZXh0LCBnZXRfc3ByZWFkX29iamVjdCwgZ2V0X3NwcmVhZF91cGRhdGUsIGdldF9zdG9yZV92YWx1ZSwgZ2xvYmFscywgZ3JvdXBfb3V0cm9zLCBoYW5kbGVfcHJvbWlzZSwgaGFzX3Byb3AsIGlkZW50aXR5LCBpbml0LCBpbnNlcnQsIGluc2VydF9kZXYsIGludHJvcywgaW52YWxpZF9hdHRyaWJ1dGVfbmFtZV9jaGFyYWN0ZXIsIGlzX2NsaWVudCwgaXNfY3Jvc3NvcmlnaW4sIGlzX2Z1bmN0aW9uLCBpc19wcm9taXNlLCBsaXN0ZW4sIGxpc3Rlbl9kZXYsIGxvb3AsIGxvb3BfZ3VhcmQsIG1pc3NpbmdfY29tcG9uZW50LCBtb3VudF9jb21wb25lbnQsIG5vb3AsIG5vdF9lcXVhbCwgbm93LCBudWxsX3RvX2VtcHR5LCBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzLCBvbkRlc3Ryb3ksIG9uTW91bnQsIG9uY2UsIG91dHJvX2FuZF9kZXN0cm95X2Jsb2NrLCBwcmV2ZW50X2RlZmF1bHQsIHByb3BfZGV2LCBxdWVyeV9zZWxlY3Rvcl9hbGwsIHJhZiwgcnVuLCBydW5fYWxsLCBzYWZlX25vdF9lcXVhbCwgc2NoZWR1bGVfdXBkYXRlLCBzZWxlY3RfbXVsdGlwbGVfdmFsdWUsIHNlbGVjdF9vcHRpb24sIHNlbGVjdF9vcHRpb25zLCBzZWxlY3RfdmFsdWUsIHNlbGYsIHNldENvbnRleHQsIHNldF9hdHRyaWJ1dGVzLCBzZXRfY3VycmVudF9jb21wb25lbnQsIHNldF9jdXN0b21fZWxlbWVudF9kYXRhLCBzZXRfZGF0YSwgc2V0X2RhdGFfZGV2LCBzZXRfaW5wdXRfdHlwZSwgc2V0X2lucHV0X3ZhbHVlLCBzZXRfbm93LCBzZXRfcmFmLCBzZXRfc3RvcmVfdmFsdWUsIHNldF9zdHlsZSwgc2V0X3N2Z19hdHRyaWJ1dGVzLCBzcGFjZSwgc3ByZWFkLCBzdG9wX3Byb3BhZ2F0aW9uLCBzdWJzY3JpYmUsIHN2Z19lbGVtZW50LCB0ZXh0LCB0aWNrLCB0aW1lX3Jhbmdlc190b19hcnJheSwgdG9fbnVtYmVyLCB0b2dnbGVfY2xhc3MsIHRyYW5zaXRpb25faW4sIHRyYW5zaXRpb25fb3V0LCB1cGRhdGVfa2V5ZWRfZWFjaCwgdmFsaWRhdGVfY29tcG9uZW50LCB2YWxpZGF0ZV9lYWNoX2FyZ3VtZW50LCB2YWxpZGF0ZV9lYWNoX2tleXMsIHZhbGlkYXRlX3Nsb3RzLCB2YWxpZGF0ZV9zdG9yZSwgeGxpbmtfYXR0ciB9O1xuIiwiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgaG9tZS5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5leHBvcnQgbGV0IGRhdGFfcmF3XG4gICAgICAgIC8vIFNvcnQgbGlzdCBvZiBKc29uIGJ5IGRhdGVzIChjbG9zZXN0IGRhdGVzIHRvIGxhc3QgcG9zaXRpb25zKVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9zb3J0KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCk7XG4gICAgfVxuXHRkYXRhX3JhdyA9IGRhdGFfcmF3LnNvcnQoY3VzdG9tX3NvcnQpXG5cdFxubGV0IGxpc3RfZGF0ZSA9IFtdXG5sZXQgbGlzdF9zcG9ydCA9IFtdXG5kYXRhX3Jhdy5mb3JFYWNoKHg9Pntcblx0bGlzdF9kYXRlLnB1c2goeC5kYXRlKVxuXHRsaXN0X3Nwb3J0LnB1c2goeC5zcG9ydClcbn0pXG5cbmxldCBzcG9ydCA9ICd3b3Jrb3V0J1xuXG5mdW5jdGlvbiBjb252ZXJ0X2RhdGUoZGF0ZSl7XG5cdHJldHVybiBtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoJ2RkZGQgTU1NTSBEIFknKVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLndvcmtvdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi8J+Pi++4j1wiO1xufVxuLnN3aW1taW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIvCfj4pcIjtcbn1cbi5jeWNsaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIvCfmrRcIjtcbn1cbi5ydW5uaW5nOjpiZWZvcmUge1xuICBjb250ZW50OiBcIvCfj4NcIjtcbn1cblxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U3BvcnQgQXBwPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJcIj5cblxuXG48ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgPGltZyBzcmM9XCJpbmRleC5qcGdcIiBhbHQ9XCJ3b3JrIGhhcmRlciBzaWduXCIgY2xhc3M9XCJhbnRpYWxpYXNlZCBiZy1ncmF5LTYwMCBvYmplY3QtY292ZXIgaC00OCB3LWZ1bGwgc2hhZG93IHJvdW5kZWQtbWRcIj5cbjwvZGl2PlxuXHRcblx0XG5cdFxuXHQ8ZGl2IGNsYXNzPSdwLTgnPlxuXHRcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi04XCI+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtNHhsIHRleHQtY2VudGVyIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlc3RcIj5XZWxjb21lIHRvIHRoZSBTcG9ydCBQZXJmb3JtYW5jZSBBc3Npc3RhbnQgITwvaDE+XG4gICAgPC9kaXY+XG5cdFxuXG4gXG48YnIgLz5cblxuXG48ZGl2IGNsYXNzPVwiZmxleCBcIj5cbiAgPGRpdiBjbGFzcz1cIiB3LTIvMyBwLTRcIj5cblx0PGRpdiBjbGFzcz1cImRpdmlkZS15IGRpdmlkZS1ncmF5LTQwMCBcIj5cblx0XG5cdDxkaXYgY2xhc3M9Jyc+XG5cdDxoMSBjbGFzcz1cInRleHQtYmx1ZS03MDBcIj5cbiAgICAgICAgV2h5IHVzaW5nIHRoZSBTcG9ydCBBc3Npc3RhbnQgQXBwPyBcbiAgICA8L2gxPlxuXHRcblx0PHAgY2xhc3M9J3AtNCc+SXQgY2FuIGJlIGhhcmQgdG8gbWVhc3VyZSBwcm9ncmVzcyBpbiBzcG9ydHMgcGVyZm9ybWFuY2UuIDxicj5cblx0V2UgdGhpbmsgdGhpcyBldm9sdXRpb24gdG93YXJkcyBiZXR0ZXIgcGVyZm9ybWFuY2UgaXMgd2hhdCB0cnVseSBtb3RpdmF0ZXMgdXMgdG8gZ2l2ZSBvdXIgYmVzdCBpbiBzcG9ydHMgc2Vzc2lvbnMuPGJyPlxuXHRUaGlzIGFwcGxpY2F0aW9uIGlzIGhlcmUgdG8gaGVscCB5b3UgdHJhY2sgeW91ciBwcm9ncmVzcyBmcm9tIG9uZSBzcG9ydCBzZXNzaW9uIHRvIGFub3RoZXIuXG5cdDwvcD5cblx0PC9kaXY+XG5cbjxkaXYgY2xhc3M9J3B0LTgnPlxuXHQ8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtNzAwXCI+XG4gICAgICAgIEhvdyB0byB1c2UgdGhlIEFwcD8gXG4gICAgPC9oMT5cblx0PHAgY2xhc3M9J3AtNCc+T25jZSB5b3UgZmluaXNoZWQgeW91ciBzcG9ydCBzZXNzaW9uLCByZWNvcmQgeW91ciBwZXJmb3JtYW5jZSBpbiB0aGUgJ05ldyBTZXNzaW9uJyB0YWIuIDxicj5cblx0Rm9yIG5vdywgeW91IGNhbiBzYXZlIHNlc3Npb25zIGZvciBydW5uaW5nLCBjeWNsaW5nLCBzd2ltbWluZyBhbmQgd29ya2luZyBvdXQuIDxicj5cblx0VGhlbiwgZ28gdG8gdGhlICdQZXJmb3JtYW5jZScgdGFiIGFuZCBvYnNlcnZlIHRoZSBwcm9ncmVzcyB5b3UgbWFkZS5cblx0PC9wPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9J3B0LTgnPlxuXHQ8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtNzAwXCI+XG4gICAgICAgIFdoYXQncyBuZXh0PyBcbiAgICA8L2gxPlxuICA8ZGl2IGNsYXNzPSdwLTQnPlxuXHQ8cCA+IFRoaXMgaXMgYSBmaXJzdCB2ZXJzaW9uIG9mIG91ciB3ZWJzaXRlIGFuZCB3ZSBpbnRlbmQgdG8gaW1wcm92ZSBpdCBmdXJ0aGVyIHRvIGFsbG93IGZvciBtb3JlIGZlYXR1cmVzIGFuZCBhIGJldHRlciBleHBlcmllbmNlLjxicj5cblx0V2UgYXJlIHRoaW5raW5nIG9mIGltcGxlbWVudGluZyBvcHRpb25zIHRvOjwvcD5cblx0PGx1PlxuXHQ8bGk+QWRkIG1vcmUgc3BvcnRzXG5cdDwvbGk+XG5cdDxsaT5EZWxldGUgc2Vzc2lvbnMgdGhhdCB3ZXJlIHdyb25nbHkgZW50ZXJlZFxuXHQ8L2xpPlxuXHQ8bGk+QWRkIGFuIGF1dGhlbnRpZmljYXRpb24gc3lzdGVtXG5cdDwvbGk+XG5cdDxsaT5JbXByb3ZlIGFuZCBhZGQgbmV3IHZpc3VhbGl6YXRpb25zLlxuXHQ8L2xpPlxuXHQ8L2x1PlxuXHQ8cD5XZSBob3BlIHlvdSBlbmpveSBvdXIgQXBwIGFuZCB0aGF0IGl0IGhlbHBzIHlvdSBzdGF5aW5nIG1vdGl2YXRlZCE8YnI+XG5cdEZlZWwgZnJlZSB0byBjb250YWN0IHVzIHRvIGdpdmUgeW91ciB0aG91Z2h0cyBhYm91dCBmZWF0dXJlcyB5b3Ugd291bGQgbGlrZSB0byBzZWUgaW4gdGhlIEFwcC48L3A+IFxuXHQ8L2Rpdj5cbjwvZGl2PjwvZGl2PlxuXHRcblxuXG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0xLzMgcC00XCI+XG5cblxuXG5cdDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cblx0PCEtLSA8Y2FwdGlvbiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgIHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDAgcGItNFwiPlNlc3Npb24gQ2FsZW5kYXI8L2NhcHRpb24+IC0tPlxuXHRcdFx0XHQ8dGhlYWQgY2xhc3M9XCJib3JkZXItZ3JheS0zMDAgaXRhbGljXCI+XG5cdFx0XHRcdDx0ciBjbGFzcz1cIiBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG5cdFx0XHRcdDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTIgdGV4dC1ibHVlLTcwMFwiPlNlc3Npb25zIENhbGVuZGFyIDwvdGg+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcblx0XHRcdFx0eyNlYWNoIFsxLDIsMyw0LDUsIDYsIDcsOCwgOSwgMTBdIGFzIGl9XG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0PHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMiB0ZXh0LTN4bCB7bGlzdF9zcG9ydFtsaXN0X3Nwb3J0Lmxlbmd0aC1pXX1cIj48L3RkPlxuXHRcdFx0XHQ8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2NvbnZlcnRfZGF0ZShsaXN0X2RhdGVbbGlzdF9kYXRlLmxlbmd0aC1pXSl9PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdFx0ey9lYWNofVxuXHRcdFx0PC90Ym9keT5cblxuXHQ8L3RhYmxlPlxuXG5cdDwvZGl2Plx0XG5cblxuICA8L2Rpdj5cblxuPC9kaXY+XG5cdFxuXG48L2Rpdj5cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBuZXdfc2Vzc2lvbnMvc3dpbW1pbmcuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihvcHRpb25zID0+IHtcblx0XHRcdHJldHVybiB7IG9wdGlvbnMgfTtcblx0XHR9KTtcblx0fVx0XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBsZXQgc3BvcnQgPSAnc3dpbW1pbmcnXG4gICAgbGV0IGRhdGUgPSBudWxsLCBtZXRlcnMgPSBudWxsLCBtaW51dGVzID0gbnVsbCwgbmJfc3ByaW50cyA9IG51bGw7ICAgIFxuICAgIGxldCBlcnJvcl9ib29sZWFuID0gZmFsc2U7XG5cblxuICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgY29uc3QgcG9zdCA9IHtzcG9ydCwgZGF0ZSwgbWV0ZXJzLCBtaW51dGVzLCBuYl9zcHJpbnRzfVxuICAgICAgICBhd2FpdCBmZXRjaChgbmV3X3Nlc3Npb25zL3N3aW1taW5nLmpzb25gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3RvX21lXCIpLmlubmVySFRNTCArPSAgXG4gICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nYmctdGVhbC0xMDAgYm9yZGVyLXQtNCBib3JkZXItdGVhbC01MDAgcm91bmRlZC1iIHRleHQtdGVhbC05MDAgcHgtNCBweS0zIHNoYWRvdy1tZCcgcm9sZT0nYWxlcnQnPjxkaXYgY2xhc3M9J2ZsZXgnPjxkaXYgY2xhc3M9J3B5LTEnPjxzdmcgY2xhc3M9J2ZpbGwtY3VycmVudCBoLTYgdy02IHRleHQtdGVhbC01MDAgbXItNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGQ9J00yLjkzIDE3LjA3QTEwIDEwIDAgMSAxIDE3LjA3IDIuOTMgMTAgMTAgMCAwIDEgMi45MyAxNy4wN3ptMTIuNzMtMS40MUE4IDggMCAxIDAgNC4zNCA0LjM0YTggOCAwIDAgMCAxMS4zMiAxMS4zMnpNOSAxMVY5aDJ2Nkg5di00em0wLTZoMnYySDlWNXonLz48L3N2Zz48L2Rpdj48ZGl2PjxwIGNsYXNzPSdmb250LWJvbGQnPlNlc3Npb24gd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YnIvPlwiOyBcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlRW1haWwoZXZlbnQpIHtcbiAgICAgICBsZXQgdGV4dGJveCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICBlcnJvcl9ib29sZWFuID0gZmFsc2U7XG4gICAgICAgaWYgKHRleHRib3gudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdOdW1iZXIgcmVxdWlyZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0ZXh0Ym94LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCl7XG4gICAgICAgICAgICBlcnJvcl9ib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwibWItMjBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgICAgIDxpbWcgc3JjPVwic3dpbW1pbmcyLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxuICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xNiBiZy1ibHVlLTcwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgc2hhZG93LWxnIHJvdW5kZWQtdC1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC1zYW5zIEFyaWFsIHRleHQtY2VudGVyIHAtMiB0ZXh0LTN4bCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS0xMDAgcHgtOCB0cmFja2luZy13aWRlc3RcIj5cbiAgICAgICAgICAgIFN3aW1taW5nIE5ldyBTZXNzaW9uXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cblxuXG48ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJsdWUtNzAwIFwiPlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0yLzMgcC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cIiBwLTJcIj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD1cIntoYW5kbGVTdWJtaXR9XCJcbiAgICAgICAgICAgIG9uOmludmFsaWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246Y2hhbmdlZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgICAgICBvbjppbnB1dD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgID5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2RhdGV9IHBsYWNlaG9sZGVyPSdkYXRlJyByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXIgYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1ldGVyc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIERpc3RhbmNlIChtKTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttZXRlcnN9IHBsYWNlaG9sZGVyPSdtZXRlcnMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1ldGVyc1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICA8bGFiZWwgZm9yPVwibWludXRlc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIE1pbnV0ZXM8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17bWludXRlc30gcGxhY2Vob2xkZXI9J21pbnV0ZXMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1pbnV0ZXNcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJuYl9zcHJpbnRzXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgU3ByaW50czwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtuYl9zcHJpbnRzfSBwbGFjZWhvbGRlcj0nbnVtYmVyIG9mIHNwcmludHMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm5iX3NwcmludHNcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGp1c3RpZnktZW5kIG15LTgnPlxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiPlxuICAgICAgICBBZGQgU2Vzc2lvbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJhZGRfdG9fbWVcIj4gXG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj4gXG4gIDwvZGl2PlxuPC9kaXY+XG5cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBuZXdfc2Vzc2lvbnMvY3ljbGluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKG9wdGlvbnMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgb3B0aW9ucyB9O1xuXHRcdH0pO1xuXHR9XHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGxldCBzcG9ydCA9ICdjeWNsaW5nJ1xuICAgIGxldCBkYXRlID0gbnVsbCwgbWV0ZXJzID0gbnVsbCwgbWludXRlcyA9IG51bGwsIGVsZXZhdGlvbiA9IG51bGw7ICAgIFxuICAgIGxldCBlcnJvcl9ib29sZWFuID0gZmFsc2U7XG5cblxuICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgY29uc3QgcG9zdCA9IHtzcG9ydCwgZGF0ZSwgbWV0ZXJzLCBtaW51dGVzLCBlbGV2YXRpb259XG4gICAgICAgIGF3YWl0IGZldGNoKGBuZXdfc2Vzc2lvbnMvY3ljbGluZy5qc29uYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90b19tZVwiKS5pbm5lckhUTUwgKz0gIFxuICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2JnLXRlYWwtMTAwIGJvcmRlci10LTQgYm9yZGVyLXRlYWwtNTAwIHJvdW5kZWQtYiB0ZXh0LXRlYWwtOTAwIHB4LTQgcHktMyBzaGFkb3ctbWQnIHJvbGU9J2FsZXJ0Jz48ZGl2IGNsYXNzPSdmbGV4Jz48ZGl2IGNsYXNzPSdweS0xJz48c3ZnIGNsYXNzPSdmaWxsLWN1cnJlbnQgaC02IHctNiB0ZXh0LXRlYWwtNTAwIG1yLTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz48cGF0aCBkPSdNMi45MyAxNy4wN0ExMCAxMCAwIDEgMSAxNy4wNyAyLjkzIDEwIDEwIDAgMCAxIDIuOTMgMTcuMDd6bTEyLjczLTEuNDFBOCA4IDAgMSAwIDQuMzQgNC4zNGE4IDggMCAwIDAgMTEuMzIgMTEuMzJ6TTkgMTFWOWgydjZIOXYtNHptMC02aDJ2Mkg5VjV6Jy8+PC9zdmc+PC9kaXY+PGRpdj48cCBjbGFzcz0nZm9udC1ib2xkJz5TZXNzaW9uIHdhcyBzdWNjZXNzZnVsbHkgYWRkZWQ8L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGJyLz5cIjsgXG4gICAgICAgIGlmIChyZXNwb25zZS5vayl7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgIGZ1bmN0aW9uIHZhbGlkYXRlTWVzc2FnZUVtYWlsKGV2ZW50KSB7XG4gICAgICAgbGV0IHRleHRib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgIGlmICh0ZXh0Ym94LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnTnVtYmVyIHJlcXVpcmVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGV4dGJveC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpe1xuICAgICAgICAgICAgZXJyb3JfYm9vbGVhbiA9IHRydWU7XG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBpbnB1dCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG48L3NjcmlwdD5cblxuXG48ZGl2IGNsYXNzPVwibWItMjBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiYnljaWNsZTIxLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxuICAgIDwvZGl2PlxuXG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTYgYmctYmx1ZS03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLXQtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2FucyBBcmlhbCB0ZXh0LWNlbnRlciBwLTIgdGV4dC0zeGwgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGJnLWJsdWUtMTAwIHB4LTggdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBDeWNsaW5nIFBlcmZvcm1hbmNlXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cblxuPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1ibHVlLTcwMCBcIj5cblxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCIgcC0yXCI+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgICBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9XCJ7aGFuZGxlU3VibWl0fVwiXG4gICAgICAgICAgICBvbjppbnZhbGlkPXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cbiAgICAgICAgICAgIG9uOmNoYW5nZWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246aW5wdXQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICA+XG5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCIgY2xhc3M9XCIgYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICBEYXRlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZGF0ZX0gcGxhY2Vob2xkZXI9J2RhdGUnIHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICA8bGFiZWwgZm9yPVwibWV0ZXJzXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgRGlzdGFuY2UgKG0pPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e21ldGVyc30gcGxhY2Vob2xkZXI9J21ldGVycycgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwibWV0ZXJzXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJtaW51dGVzXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgTWludXRlczwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttaW51dGVzfSBwbGFjZWhvbGRlcj0nbWludXRlcycgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwibWludXRlc1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVsZXZhdGlvblwiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIEVsZXZhdGlvbiAobSk8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZWxldmF0aW9ufSBwbGFjZWhvbGRlcj0nZWxldmF0aW9uJyByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJlbGV2YXRpb25cIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmxleCBqdXN0aWZ5LWVuZCBteS04Jz5cbiAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctYmx1ZS01MDAgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWRcIj5cbiAgICAgICAgQWRkIFNlc3Npb248L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+ICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cblxuICAgICAgICA8ZGl2IGlkPVwiYWRkX3RvX21lXCI+IFxuICAgICAgICA8L2Rpdj4gXG4gICAgPC9kaXY+IFxuICA8L2Rpdj5cbjwvZGl2PlxuXG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgbmV3X3Nlc3Npb25zL3J1bm5pbmcuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihvcHRpb25zID0+IHtcblx0XHRcdHJldHVybiB7IG9wdGlvbnMgfTtcblx0XHR9KTtcblx0fVx0XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBsZXQgc3BvcnQgPSAncnVubmluZydcbiAgICBsZXQgZGF0ZSA9IG51bGwsIG1ldGVycyA9IG51bGwsIG1pbnV0ZXMgPSBudWxsLCBlbGV2YXRpb24gPSBudWxsOyAgICBcbiAgICBsZXQgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgIGNvbnN0IHBvc3QgPSB7c3BvcnQsIGRhdGUsIG1ldGVycywgbWludXRlcywgZWxldmF0aW9ufVxuICAgICAgICBhd2FpdCBmZXRjaChgbmV3X3Nlc3Npb25zL3J1bm5pbmcuanNvbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdG9fbWVcIikuaW5uZXJIVE1MICs9ICBcbiAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdiZy10ZWFsLTEwMCBib3JkZXItdC00IGJvcmRlci10ZWFsLTUwMCByb3VuZGVkLWIgdGV4dC10ZWFsLTkwMCBweC00IHB5LTMgc2hhZG93LW1kJyByb2xlPSdhbGVydCc+PGRpdiBjbGFzcz0nZmxleCc+PGRpdiBjbGFzcz0ncHktMSc+PHN2ZyBjbGFzcz0nZmlsbC1jdXJyZW50IGgtNiB3LTYgdGV4dC10ZWFsLTUwMCBtci00JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZD0nTTIuOTMgMTcuMDdBMTAgMTAgMCAxIDEgMTcuMDcgMi45MyAxMCAxMCAwIDAgMSAyLjkzIDE3LjA3em0xMi43My0xLjQxQTggOCAwIDEgMCA0LjM0IDQuMzRhOCA4IDAgMCAwIDExLjMyIDExLjMyek05IDExVjloMnY2SDl2LTR6bTAtNmgydjJIOVY1eicvPjwvc3ZnPjwvZGl2PjxkaXY+PHAgY2xhc3M9J2ZvbnQtYm9sZCc+U2Vzc2lvbiB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkPC9wPjwvZGl2PjwvZGl2PjwvZGl2Pjxici8+XCI7IFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2VFbWFpbChldmVudCkge1xuICAgICAgIGxldCB0ZXh0Ym94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgIGVycm9yX2Jvb2xlYW4gPSBmYWxzZTtcbiAgICAgICBpZiAodGV4dGJveC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ051bWJlciByZXF1aXJlZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRleHRib3gudmFsaWRpdHkudHlwZU1pc21hdGNoKXtcbiAgICAgICAgICAgIGVycm9yX2Jvb2xlYW4gPSB0cnVlO1xuICAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgncGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG48ZGl2IGNsYXNzPVwibWItMjBcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJtYi02IHNoYWRvdyBcIj5cbiAgICAgICAgPGltZyBzcmM9XCJydW5uaW5nMS5qcGdcIiBhbHQ9XCJjeWNsaW5nXCIgY2xhc3M9XCJvYmplY3QtY292ZXIgaC00OCB3LWZ1bGwgc2hhZG93IHJvdW5kZWQtbWRcIj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTE2IGJnLWJsdWUtNzAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctbGcgcm91bmRlZC10LW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250LXNhbnMgQXJpYWwgdGV4dC1jZW50ZXIgcC0yIHRleHQtM3hsIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTEwMCBweC04IHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAgUnVubmluZyBQZXJmb3JtYW5jZVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJsdWUtNzAwIFwiPlxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxuXG4gICAgPGRpdiBjbGFzcz1cIiBwLTJcIj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD1cIntoYW5kbGVTdWJtaXR9XCJcbiAgICAgICAgICAgIG9uOmludmFsaWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246Y2hhbmdlZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgICAgICBvbjppbnB1dD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgID5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2RhdGV9IHBsYWNlaG9sZGVyPSdkYXRlJyByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXIgYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1ldGVyc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIERpc3RhbmNlIChtKTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttZXRlcnN9IHBsYWNlaG9sZGVyPSdtZXRlcnMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1ldGVyc1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICA8bGFiZWwgZm9yPVwibWludXRlc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIE1pbnV0ZXM8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17bWludXRlc30gcGxhY2Vob2xkZXI9J21pbnV0ZXMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1pbnV0ZXNcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJlbGV2YXRpb25cIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICBFbGV2YXRpb24gKG0pPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2VsZXZhdGlvbn0gcGxhY2Vob2xkZXI9J2VsZXZhdGlvbicgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwiZWxldmF0aW9uXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGp1c3RpZnktZW5kIG15LTgnPlxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJiZy10cmFuc3BhcmVudCBob3ZlcjpiZy1ibHVlLTUwMCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgaG92ZXI6dGV4dC13aGl0ZSBweS0yIHB4LTQgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCBob3Zlcjpib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZFwiPlxuICAgICAgICBBZGQgU2Vzc2lvbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJhZGRfdG9fbWVcIj4gXG4gICAgICAgIDwvZGl2PiBcbiAgICA8L2Rpdj4gXG4gIDwvZGl2PlxuPC9kaXY+XG5cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBuZXdfc2Vzc2lvbnMvd29ya291dC5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKG9wdGlvbnMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgb3B0aW9ucyB9O1xuXHRcdH0pO1xuXHR9XHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGxldCBzcG9ydCA9ICd3b3Jrb3V0J1xuXG4gICAgbGV0IGRhdGUgPSBudWxsLCBtZXRlcnMgPSAwLCBtaW51dGVzID0gMCwgZWxldmF0aW9uID0gMDsgICAgXG4gICAgbGV0IGVycm9yX2Jvb2xlYW4gPSBmYWxzZTtcblxuICAgIGxldCBzcXVhdHNfc2VyaWVzID0gMDtcbiAgICBsZXQgc3RhaXJfY2xpbWJzX3NlcmllcyA9IDA7XG4gICAgbGV0IGJlbmNoX2NsaW1ic19zZXJpZXMgPSAwO1xuICAgIGxldCBsZWdfcHJlc3Nfc2VyaWVzID0gMDtcbiAgICBsZXQgcHVzaHVwc19zZXJpZXMgPSAwO1xuICAgIGxldCBwdXNodXBzX2xhdGVyYWxfc2VyaWVzID0gMDtcbiAgICBsZXQgcHVzaHVwc19qdW1waW5nX3NlcmllcyA9IDA7XG4gICAgbGV0IHB1c2h1cHNfY2xvc2luZ19zZXJpZXMgPSAwO1xuICAgIGxldCBwdXNodXBzX3JhaXNlZF9zZXJpZXMgPSAwO1xuICAgIGxldCBhYmRvbWluYWxfc2VyaWVzID0gMDtcbiAgICBsZXQgYWJkb21pbmFsX2xhdGVyYWxfc2VyaWVzID0gMDtcbiAgICBsZXQgYWJkb21pbmFsX2NvcmVfc2VyaWVzID0gMDtcbiAgICBsZXQgYmVuY2hfc2VyaWVzID0gMDtcbiAgICBsZXQgYmljZXBzX3dlaWdodF9zZXJpZXMgPSAwO1xuICAgIGxldCBwdWxsdXBzX3NlcmllcyA9IDA7XG5cbiAgICBsZXQgc3F1YXRzX251bWJlciA9IDA7XG4gICAgbGV0IHN0YWlyX2NsaW1ic19udW1iZXIgPSAwO1xuICAgIGxldCBiZW5jaF9jbGltYnNfbnVtYmVyID0gMDtcbiAgICBsZXQgbGVnX3ByZXNzX251bWJlciA9IDA7XG4gICAgbGV0IHB1c2h1cHNfbnVtYmVyID0gMDtcbiAgICBsZXQgcHVzaHVwc19sYXRlcmFsX251bWJlciA9IDA7XG4gICAgbGV0IHB1c2h1cHNfanVtcGluZ19udW1iZXIgPSAwO1xuICAgIGxldCBwdXNodXBzX2Nsb3NpbmdfbnVtYmVyID0gMDtcbiAgICBsZXQgcHVzaHVwc19yYWlzZWRfbnVtYmVyID0gMDtcbiAgICBsZXQgYWJkb21pbmFsX251bWJlciA9IDA7XG4gICAgbGV0IGFiZG9taW5hbF9sYXRlcmFsX251bWJlciA9IDA7XG4gICAgbGV0IGFiZG9taW5hbF9jb3JlX251bWJlciA9IDA7XG4gICAgbGV0IGJlbmNoX251bWJlciA9IDA7XG4gICAgbGV0IGJpY2Vwc193ZWlnaHRfbnVtYmVyID0gMDtcbiAgICBsZXQgcHVsbHVwc19udW1iZXIgPSAwO1xuICAgIFxuICAgIGxldCBudWxsX3ZhciA9IG51bGxcbiAgICAgICAgY29uc3Qgd29ya291dF9leGVyY2lzZSA9IFtcbiAgICB7J25hbWUnOiAnU3F1YXRzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnU3RhaXIgQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnQmVuY2ggQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnTGVnIFByZXNzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICBcbiAgICB7J25hbWUnOiAnUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0xhdGVyYWwgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdKdW1waW5nIFB1c2gtVXBzJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnQ2xvc2UgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdSYWlzZWQgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuXG4gICAgeyduYW1lJzogJ0FiZG9taW5hbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0FiZG9taW5hbHMnfSxcbiAgICB7J25hbWUnOiAnQWJkb21pbmFsIExhdGVyYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0NvcmUgQWJkb21pbmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnQWJkb21pbmFscyd9LFxuICAgIFxuICAgIFxuICAgIHsnbmFtZSc6ICdCZW5jaCcsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdXZWlnaHQnfSxcbiAgICB7J25hbWUnOiAnQmljZXBzIFdlaWdodCcsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1dlaWdodCd9LFxuICAgIHsnbmFtZSc6ICdQdWxsLVVwcycsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1bGwtVXBzJ30sXG4gICAgXVxuICAgIFxuICAgIFxuXG5cbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgIGNvbnN0IHBvc3QgPSB7J3Nwb3J0Jzogc3BvcnQsIFxuICAgICAgICdkYXRlJyA6IGRhdGUsIFxuXG4gICAgICAgJ1NxdWF0cycgOiB7J1Nlcmllcyc6c3F1YXRzX3NlcmllcywgJ051bWJlcicgOiBzcXVhdHNfbnVtYmVyfSxcbiAgICAgJ1N0YWlyIENsaW1icycgOiB7J1Nlcmllcyc6c3RhaXJfY2xpbWJzX3NlcmllcywgJ051bWJlcicgOiBzdGFpcl9jbGltYnNfbnVtYmVyfSxcbiAgICAgJ0JlbmNoIENsaW1icycgOiB7J1Nlcmllcyc6YmVuY2hfY2xpbWJzX3NlcmllcywgJ051bWJlcicgOiBiZW5jaF9jbGltYnNfbnVtYmVyfSxcbiAgICAgJ0xlZyBQcmVzcycgOiB7J1Nlcmllcyc6bGVnX3ByZXNzX3NlcmllcywgJ051bWJlcicgOiBsZWdfcHJlc3NfbnVtYmVyfSxcblxuICAgICAgICdQdXNoLVVwcycgOiB7J1Nlcmllcyc6cHVzaHVwc19zZXJpZXMsICdOdW1iZXInIDogcHVzaHVwc19udW1iZXJ9LFxuICAgICAnTGF0ZXJhbCBQdXNoLVVwcycgOiB7J1Nlcmllcyc6cHVzaHVwc19sYXRlcmFsX3NlcmllcywgJ051bWJlcicgOiBwdXNodXBzX2xhdGVyYWxfbnVtYmVyfSxcbiAgICAgJ0p1bXBpbmcgUHVzaC1VcHMnIDogeydTZXJpZXMnOnB1c2h1cHNfanVtcGluZ19zZXJpZXMsICdOdW1iZXInIDogcHVzaHVwc19qdW1waW5nX251bWJlcn0sXG4gICAgICdDbG9zZSBQdXNoLVVwcycgOiB7J1Nlcmllcyc6cHVzaHVwc19jbG9zaW5nX3NlcmllcywgJ051bWJlcicgOiBwdXNodXBzX2Nsb3NpbmdfbnVtYmVyfSxcbiAgICAgJ1JhaXNlZCBQdXNoLVVwcycgOiB7J1Nlcmllcyc6cHVzaHVwc19sYXRlcmFsX3NlcmllcywgJ051bWJlcicgOiBwdXNodXBzX2xhdGVyYWxfbnVtYmVyfSxcbiAgICAgICAnQWJkb21pbmFsJyA6IHsnU2VyaWVzJzphYmRvbWluYWxfc2VyaWVzLCAnTnVtYmVyJyA6IGFiZG9taW5hbF9udW1iZXJ9LFxuICAgICAnQWJkb21pbmFsIExhdGVyYWwnIDogeydTZXJpZXMnOmFiZG9taW5hbF9sYXRlcmFsX3NlcmllcywgJ051bWJlcicgOiBhYmRvbWluYWxfbGF0ZXJhbF9udW1iZXJ9LFxuICAgICAnQ29yZSBBYmRvbWluYWwnIDogeydTZXJpZXMnOmFiZG9taW5hbF9jb3JlX3NlcmllcywgJ051bWJlcicgOiBhYmRvbWluYWxfY29yZV9udW1iZXJ9LFxuXG4gICAgJ0JlbmNoJyA6IHsnU2VyaWVzJzpiZW5jaF9zZXJpZXMsICdOdW1iZXInIDogYmVuY2hfbnVtYmVyfSxcbiAgICAgJ0JpY2VwcyBXZWlnaHQnIDogeydTZXJpZXMnOmJpY2Vwc193ZWlnaHRfc2VyaWVzLCAnTnVtYmVyJyA6IGJpY2Vwc193ZWlnaHRfbnVtYmVyfSxcbiAgICAgJ1B1bGwtVXBzJyA6IHsnU2VyaWVzJzpwdWxsdXBzX3NlcmllcywgJ051bWJlcicgOiBwdWxsdXBzX251bWJlcn1cbiAgICAgICBcbiAgICAgICB9XG4gICAgICAgXG4gICAgICAgLy97c3BvcnQsIGRhdGUsIG1ldGVycywgbWludXRlcywgZWxldmF0aW9ufVxuXG5cbiAgICAgICAgYXdhaXQgZmV0Y2goYG5ld19zZXNzaW9ucy93b3Jrb3V0Lmpzb25gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3RvX21lXCIpLmlubmVySFRNTCArPSAgXG4gICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nYmctdGVhbC0xMDAgYm9yZGVyLXQtNCBib3JkZXItdGVhbC01MDAgcm91bmRlZC1iIHRleHQtdGVhbC05MDAgcHgtNCBweS0zIHNoYWRvdy1tZCcgcm9sZT0nYWxlcnQnPjxkaXYgY2xhc3M9J2ZsZXgnPjxkaXYgY2xhc3M9J3B5LTEnPjxzdmcgY2xhc3M9J2ZpbGwtY3VycmVudCBoLTYgdy02IHRleHQtdGVhbC01MDAgbXItNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGQ9J00yLjkzIDE3LjA3QTEwIDEwIDAgMSAxIDE3LjA3IDIuOTMgMTAgMTAgMCAwIDEgMi45MyAxNy4wN3ptMTIuNzMtMS40MUE4IDggMCAxIDAgNC4zNCA0LjM0YTggOCAwIDAgMCAxMS4zMiAxMS4zMnpNOSAxMVY5aDJ2Nkg5di00em0wLTZoMnYySDlWNXonLz48L3N2Zz48L2Rpdj48ZGl2PjxwIGNsYXNzPSdmb250LWJvbGQnPlNlc3Npb24gd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YnIvPlwiOyBcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlRW1haWwoZXZlbnQpIHtcbiAgICAgICBsZXQgdGV4dGJveCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICBlcnJvcl9ib29sZWFuID0gZmFsc2U7XG4gICAgICAgaWYgKHRleHRib3gudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdOdW1iZXIgcmVxdWlyZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0ZXh0Ym94LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCl7XG4gICAgICAgICAgICBlcnJvcl9ib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuXG5cblxuXG48ZGl2IGNsYXNzPVwibWItMjBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgICAgIDxpbWcgc3JjPVwid29ya291dDIuanBnXCIgYWx0PVwiY3ljbGluZ1wiIGNsYXNzPVwib2JqZWN0LWNvdmVyIGgtNDggdy1mdWxsIHNoYWRvdyByb3VuZGVkLW1kXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTYgYmctYmx1ZS03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLXQtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2FucyBBcmlhbCB0ZXh0LWNlbnRlciBwLTIgdGV4dC0zeGwgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGJnLWJsdWUtMTAwIHB4LTggdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgIFdvcmtvdXQgTmV3IFNlc3Npb25cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvZGl2PlxuXG5cblxuXG48ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWJsdWUtNzAwXCI+XG5cbiAgPGRpdiBjbGFzcz1cImZsZXgtaW5pdGlhbCBwLTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiIHAtMlwiPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb246c3VibWl0fHByZXZlbnREZWZhdWx0PVwie2hhbmRsZVN1Ym1pdH1cIlxuICAgICAgICAgICAgb246aW52YWxpZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgICAgICBvbjpjaGFuZ2VkPXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cbiAgICAgICAgICAgIG9uOmlucHV0PXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cbiAgICAgICAgPiAgIFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzMgbS0yJz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBwLTJcIj5cbiAgICAgICAgICAgICAgICBEYXRlXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMi8zIG0tMic+XG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZGF0ZX0gcGxhY2Vob2xkZXI9J2RhdGUnIHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeGFtcGxlIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVhZG9ubHkgYmluZDp2YWx1ZT17bnVsbF92YXJ9IHBsYWNlaG9sZGVyPSdzZXJpZXMnIHR5cGU9XCJudW1iZXJcImNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHJlYWRvbmx5IGJpbmQ6dmFsdWU9e251bGxfdmFyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiIGJsb2NrIHVwcGVyY2FzZSBwLTIgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteGwgZm9udC1ib2xkIG0tMlwiPlxuICAgICAgICAgICAgICAgICAgICBMZWdzPC9sYWJlbD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSAgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFNxdWF0czwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17c3F1YXRzX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17c3F1YXRzX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFN0YWlyIENsaW1iczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17c3RhaXJfY2xpbWJzX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17c3RhaXJfY2xpbWJzX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJlbmNoIENsaW1iczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YmVuY2hfY2xpbWJzX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YmVuY2hfY2xpbWJzX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExlZyBQcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17bGVnX3ByZXNzX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17bGVnX3ByZXNzX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgcC0yIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhsIGZvbnQtYm9sZCBtLTJcIj5cbiAgICAgICAgICAgIFB1c2gtdXBzXG4gICAgICAgICAgICA8L2xhYmVsPlxuXG5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVndWxhcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19zZXJpZXN9IHBsYWNlaG9sZGVyPSdzZXJpZXMnIHR5cGU9XCJudW1iZXJcImNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e3B1c2h1cHNfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgXG5cblxuXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExhdGVyYWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e3B1c2h1cHNfbGF0ZXJhbF9zZXJpZXN9IHBsYWNlaG9sZGVyPSdzZXJpZXMnIHR5cGU9XCJudW1iZXJcImNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e3B1c2h1cHNfbGF0ZXJhbF9udW1iZXJ9IHBsYWNlaG9sZGVyPSdyZXBldGl0aW9ucycgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSnVtcGluZzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19qdW1waW5nX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19qdW1waW5nX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3Npbmc8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e3B1c2h1cHNfY2xvc2luZ19zZXJpZXN9IHBsYWNlaG9sZGVyPSdzZXJpZXMnIHR5cGU9XCJudW1iZXJcImNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e3B1c2h1cHNfY2xvc2luZ19udW1iZXJ9IHBsYWNlaG9sZGVyPSdyZXBldGl0aW9ucycgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgcC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBSYWlzZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e3B1c2h1cHNfcmFpc2VkX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVzaHVwc19yYWlzZWRfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSBwLTIgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteGwgZm9udC1ib2xkIG0tMlwiPlxuICAgICAgICAgICAgQWJkb21pbmFsc1xuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVndWxhcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YWJkb21pbmFsX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YWJkb21pbmFsX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExhdGVyYWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2FiZG9taW5hbF9sYXRlcmFsX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YWJkb21pbmFsX2xhdGVyYWxfbnVtYmVyfSBwbGFjZWhvbGRlcj0ncmVwZXRpdGlvbnMnIHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIHAtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ29yZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17YWJkb21pbmFsX2NvcmVfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXthYmRvbWluYWxfY29yZV9udW1iZXJ9IHBsYWNlaG9sZGVyPSdyZXBldGl0aW9ucycgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14bCBmb250LWJvbGQgbS0yXCI+XG4gICAgICAgICAgICBPdGhlcnNcbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJlbmNoPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtiZW5jaF9zZXJpZXN9IHBsYWNlaG9sZGVyPSdzZXJpZXMnIHR5cGU9XCJudW1iZXJcImNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2JlbmNoX251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEJpY2VwcyBXZWlnaHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2JpY2Vwc193ZWlnaHRfc2VyaWVzfSBwbGFjZWhvbGRlcj0nc2VyaWVzJyB0eXBlPVwibnVtYmVyXCJjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBwLTJcIi8+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtiaWNlcHNfd2VpZ2h0X251bWJlcn0gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFB1bGwtdXBzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXtwdWxsdXBzX3Nlcmllc30gcGxhY2Vob2xkZXI9J3NlcmllcycgdHlwZT1cIm51bWJlclwiY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCB3LTEvMiBtLTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17cHVsbHVwc19udW1iZXJ9IHBsYWNlaG9sZGVyPSdyZXBldGl0aW9ucycgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGp1c3RpZnktZW5kIG14LTIgbXktOCc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCI+XG4gICAgICAgIEFkZCBTZXNzaW9uPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cblxuICAgICAgICA8ZGl2IGlkPVwiYWRkX3RvX21lXCI+IFxuICAgICAgICA8L2Rpdj4gXG4gICAgPC9kaXY+IFxuICA8L2Rpdj5cbjwvZGl2PlxuXG4iLCI8Y2FudmFzIGlkPVwibXlDaGFydFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjFcIj48L2NhbnZhcz5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5leHBvcnQgbGV0IGRhdGE7IFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0KCl7XG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpO1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgIHlBeGVzOiBcbiAgICAgICAgICAgICAgICBbe1xuICAgICAgICBpZDogJ0Rpc3RhbmNlJyxcbiAgICAgICAgcG9zaXRpb246ICdsZWZ0JyxcbiAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6ICdEaXN0YW5jZSAobSknLFxuICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICdTcHJpbnRzJyxcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6ICdTcHJpbnRzJyxcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICBpZDogJ1NwZWVkJyxcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6ICdTcGVlZCAoa20vaCknLFxuICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgIH0sXG4gICAgICB9XVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxub25Nb3VudChjcmVhdGVDaGFydClcbjwvc2NyaXB0PlxuIiwiXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgc3BvcnRzL3N3aW1taW5nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4oZGF0YV9yYXcgPT4ge1xuXHRcdFx0cmV0dXJuIHsgZGF0YV9yYXcgfTtcblx0XHR9KTtcblx0fVx0XG4gICAgXG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICAucmVkIHsgY29sb3I6IHJlZDsgfVxuICAgLmdyZWVuIHsgY29sb3I6IGdyZWVuOyB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG4gICAgaW1wb3J0IENoYXJ0cyBmcm9tICcuL3N3aW1taW5nLWNoYXJ0cy5zdmVsdGUnXG4gICAgZXhwb3J0IGxldCBkYXRhX3Jhd1xuICAgIFxuICAgIC8vIFNvcnQgbGlzdCBvZiBKc29uIGJ5IGRhdGVzIChjbG9zZXN0IGRhdGVzIHRvIGxhc3QgcG9zaXRpb25zKVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9zb3J0KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIGRhdGFfcmF3ID0gZGF0YV9yYXcuc29ydChjdXN0b21fc29ydClcblxuZnVuY3Rpb24gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoaW50LCBsaXN0KXtcbiAgICByZXR1cm4gbGlzdC5zbGljZShNYXRoLm1heChsaXN0Lmxlbmd0aCAtIGludCwgMCkpXG59XG5mdW5jdGlvbiBjb252ZXJ0X2RhdGUoZGF0ZSl7XG5cdHJldHVybiBtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoJ2RkZGQgTU1NTSBEIFknKVxufVxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XG4gICAgcmV0dXJuIGEubWFwKChlLGkpID0+IGUgLyBiW2ldKTtcbn1cblxuZnVuY3Rpb24gdmFyaWF0aW9uKHhfbmV3LCB4X29sZCl7XG4gICAgY29uc3QgdmFyaWF0aW9uID0gTWF0aC5yb3VuZCgoeF9uZXcteF9vbGQpL3hfb2xkKjEwMClcbiAgICByZXR1cm4gdmFyaWF0aW9uXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMCkgLzEwXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzJfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMDApIC8gMTAwXG59XG5cbi8vIENvbXB1dGUgZGF0YSBmb3IgY2hhcnRzXG5cbiAgICBsZXQgbGlzdF9tZXRlcnMgPSBbXTtcbiAgICBsZXQgbGlzdF9kYXRlID0gW107XG4gICAgbGV0IGxpc3Rfc3ByaW50ID0gW107XG4gICAgbGV0IGxpc3RfbWludXRlcyA9IFtdO1xuICAgIGxldCBsaXN0X3NwZWVkID0gW107XG5cbiAgICBkYXRhX3Jhdy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBsaXN0X21ldGVycy5wdXNoKHgubWV0ZXJzKVxuICAgICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpXG4gICAgICAgIGxpc3Rfc3ByaW50LnB1c2goeC5uYl9zcHJpbnQpXG4gICAgICAgIGxpc3RfbWludXRlcy5wdXNoKHgubWludXRlcylcbiAgICAgICAgbGV0IHNwZWVkID0geC5tZXRlcnMgLyB4Lm1pbnV0ZXMgKiAwLjA2XG4gICAgICAgIGxpc3Rfc3BlZWQucHVzaChyb3VuZF8yX2RlY2ltYWwoc3BlZWQpKVxuICAgIH0pXG5cbiAgICBleHBvcnQgY29uc3QgZGF0YSA9IHtcbiAgICBsYWJlbHM6IGxpc3RfZGF0ZSxcbiAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6ICdEaXN0YW5jZScsXG4gICAgICAgIHlBeGlzSUQgOiAnRGlzdGFuY2UnLFxuICAgICAgICBkYXRhOmxpc3RfbWV0ZXJzLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjMTkyRTVCXCIsXG4gICAgICAgIGZpbGw6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnU3ByaW50cycsXG4gICAgICAgIGRhdGE6bGlzdF9zcHJpbnQsXG4gICAgICAgIHlBeGlzSUQgOiAnU3ByaW50cycsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiMxRDY1QTZcIixcbiAgICAgICAgZmlsbDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdTcGVlZCcsXG4gICAgICAgIGRhdGE6bGlzdF9zcGVlZCxcbiAgICAgICAgeUF4aXNJRCA6ICdTcGVlZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiM3MkEyQzBcIixcbiAgICAgICAgZmlsbDogZmFsc2VcbiAgICB9XVxufVxuXG4vLyBUT0RPOiB2ZXJpZml5IG9yZGVyaW5nIG9mIGRhdGVzIGFuZCBzZXNzaW9uc1xuXG5jb25zdCBhdmVyYWdlID0gYXJyID0+IGFyci5yZWR1Y2UoICggcCwgYyApID0+IHAgKyBjLCAwICkgLyBhcnIubGVuZ3RoO1xuXG5cbi8vIFRPRE86IHJpZ2h0IG5vdyBpbmNsdWRpbmcgbGFzdCBzZXNzaW9uLCBwcm9iYWJseSBzaG91bGQgbm90XG5cbi8vIFRPRE86IGNvbG9ycyBncmVlbiBvciByZWQgZm9yIHZhcmlhdGlvbnNcblxuXG4vLyBDb21wdXRlIGF2ZXJhZ2UgZGlzdGFuY2UsIHNwZWVkLCBzcHJpbnQsIFxuLy8gTGFzdCBzZXNzaW9uXG5jb25zdCBsYXN0X2Rpc3RhbmNlID0gbGlzdF9tZXRlcnNbbGlzdF9tZXRlcnMubGVuZ3RoLTFdXG5jb25zdCBsYXN0X2hvdXJzID0gbGlzdF9taW51dGVzW2xpc3RfbWludXRlcy5sZW5ndGgtMV0vNjBcbmNvbnN0IGxhc3Rfc3BlZWQgPSBsYXN0X2Rpc3RhbmNlLzEwMDAvbGFzdF9ob3Vyc1xuY29uc3QgbGFzdF9zcHJpbnQgPSBsaXN0X3NwcmludFtsaXN0X3NwcmludC5sZW5ndGgtMV1cblxuXG4vLyBMYXN0IDMgc2Vzc2lvbnNcbi8vY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gbGlzdF9tZXRlcnMuc2xpY2UoTWF0aC5tYXgobGlzdF9tZXRlcnMubGVuZ3RoIC0gMywgMCkpXG5cbmNvbnN0IGRpc3RhbmNlXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWV0ZXJzKVxuY29uc3QgbWludXRlc18zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X21pbnV0ZXMpXG5jb25zdCBzcHJpbnRfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9zcHJpbnQpXG5jb25zdCBkYXRlXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfZGF0ZSlcblxuXG5cbmNvbnN0IGF2ZXJhZ2VfM19kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX3NwcmludCA9IGF2ZXJhZ2Uoc3ByaW50XzNfc2Vzc2lvbilcbmNvbnN0IGF2ZXJhZ2VfM19zcGVlZCA9IGF2ZXJhZ2UoZGl2aWRldmVjdG9yKGRpc3RhbmNlXzNfc2Vzc2lvbiAsIG1pbnV0ZXNfM19zZXNzaW9uKSkgKiA2MC8xMDAwICBcblxuY29uc3QgdmFyaWF0aW9uXzNfZGlzdGFuY2UgPSB2YXJpYXRpb24obGFzdF9kaXN0YW5jZSwgYXZlcmFnZV8zX2Rpc3RhbmNlKVxuY29uc3QgdmFyaWF0aW9uXzNfc3BlZWQgPSB2YXJpYXRpb24obGFzdF9zcGVlZCwgYXZlcmFnZV8zX3NwZWVkKVxuY29uc3QgdmFyaWF0aW9uXzNfc3ByaW50ID0gdmFyaWF0aW9uKGxhc3Rfc3ByaW50LCBhdmVyYWdlXzNfc3ByaW50KVxuXG4vLyBMYXN0IDEwIHNlc3Npb25zXG5jb25zdCBkaXN0YW5jZV8xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3RfbWV0ZXJzKVxuY29uc3QgbWludXRlc18xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3RfbWludXRlcylcbmNvbnN0IHNwcmludF8xMF9zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMTAsIGxpc3Rfc3ByaW50KVxuXG5jb25zdCBhdmVyYWdlXzEwX2Rpc3RhbmNlID0gYXZlcmFnZShkaXN0YW5jZV8xMF9zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8xMF9zcHJpbnQgPSBhdmVyYWdlKHNwcmludF8xMF9zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8xMF9zcGVlZCA9IGF2ZXJhZ2UoZGl2aWRldmVjdG9yKGRpc3RhbmNlXzEwX3Nlc3Npb24gLCBtaW51dGVzXzEwX3Nlc3Npb24pKSAqIDYwLzEwMDBcblxuY29uc3QgdmFyaWF0aW9uXzEwX2Rpc3RhbmNlID0gdmFyaWF0aW9uKGxhc3RfZGlzdGFuY2UsIGF2ZXJhZ2VfMTBfZGlzdGFuY2UpXG5jb25zdCB2YXJpYXRpb25fMTBfc3BlZWQgPSB2YXJpYXRpb24obGFzdF9zcGVlZCwgYXZlcmFnZV8xMF9zcGVlZClcbmNvbnN0IHZhcmlhdGlvbl8xMF9zcHJpbnQgPSB2YXJpYXRpb24obGFzdF9zcHJpbnQsIGF2ZXJhZ2VfMTBfc3ByaW50KVxuXG5jb25zdCBuYl9kaXNwbGF5ZWQgPSAzXG5cblxuXG48L3NjcmlwdD5cblxuXG48ZGl2IGNsYXNzPSdiZy13aGl0ZSc+XG5cbjxkaXYgY2xhc3M9XCJtYi0yMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYi02IHNoYWRvdyBcIj5cbiAgICAgICAgPGltZyBzcmM9XCJzd2ltbWluZzIuanBnXCIgYWx0PVwiY3ljbGluZ1wiIGNsYXNzPVwib2JqZWN0LWNvdmVyIGgtNDggdy1mdWxsIHNoYWRvdyByb3VuZGVkLW1kXCI+XG4gICAgPC9kaXY+XG5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTE2IGJnLWJsdWUtNzAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctbGcgcm91bmRlZC10LW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb250LXNhbnMgQXJpYWwgdGV4dC1jZW50ZXIgcC0yIHRleHQtM3hsIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBiZy1ibHVlLTEwMCBweC04IHRyYWNraW5nLXdpZGVzdFwiPlxuICAgICAgICAgICAgU3dpbW1pbmcgUGVyZm9ybWFuY2VcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjxkaXYgY2xhc3M9J3AtOCc+XG4gICAgPGRpdiBjbGFzcz0ncGItOCc+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDAgIG1iLTggXCI+TGFzdCBTZXNzaW9ucyAgIDwvaDE+XG4gICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRhbGljIGdyaWQgZ3JpZC1jb2xzLTMgZGl2aWRlLXggZGl2aWRlLWdyYXktNDAwXCI+XG4gICAgICAgICAgICB7I2VhY2ggZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKSBhcyBkYXRlfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+e2NvbnZlcnRfZGF0ZShkYXRlKX08L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgbXQtMTZcIj5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlBlcmZvcm1hbmNlIFRhYmxlczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2UgZXZvbHV0aW9uIG9mIG1haW4gbWV0cmljczwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+TWV0cmljczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VmFsdWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC00IHB5LTIgXCI+dnMuIExhc3QgMyBzZXNzaW9uczwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMlwiPnZzLiBMYXN0IDEwIHNlc3Npb25zPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkRpc3RhbmNlIChtKTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntNYXRoLnJvdW5kKGF2ZXJhZ2VfM19kaXN0YW5jZSl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCIgY2xhc3M6Z3JlZW49XCJ7dmFyaWF0aW9uXzNfZGlzdGFuY2U+PTB9XCIgY2xhc3M6cmVkPVwie3ZhcmlhdGlvbl8zX2Rpc3RhbmNlPDB9XCI+e3ZhcmlhdGlvbl8zX2Rpc3RhbmNlfSU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfZGlzdGFuY2UpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiIGNsYXNzOmdyZWVuPVwie3ZhcmlhdGlvbl8xMF9kaXN0YW5jZT49MH1cIiBjbGFzczpyZWQ9XCJ7dmFyaWF0aW9uXzEwX2Rpc3RhbmNlPDB9XCI+e3ZhcmlhdGlvbl8xMF9kaXN0YW5jZX0lPC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGxhc3Rfc3BlZWQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX3NwZWVkKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIiBjbGFzczpncmVlbj1cInt2YXJpYXRpb25fM19zcGVlZD49MH1cIiBjbGFzczpyZWQ9XCJ7dmFyaWF0aW9uXzNfc3BlZWQ8MH1cIj57dmFyaWF0aW9uXzNfc3BlZWR9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9zcGVlZCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCIgY2xhc3M6Z3JlZW49XCJ7dmFyaWF0aW9uXzEwX3NwZWVkPj0wfVwiIGNsYXNzOnJlZD1cInt2YXJpYXRpb25fMTBfc3BlZWQ8MH1cIj57dmFyaWF0aW9uXzEwX3NwZWVkfSU8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5TcHJpbnRzPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3Rfc3ByaW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8zX3NwcmludCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCIgY2xhc3M6Z3JlZW49XCJ7dmFyaWF0aW9uXzNfc3ByaW50Pj0wfVwiIGNsYXNzOnJlZD1cInt2YXJpYXRpb25fM19zcHJpbnQ8MH1cIj57dmFyaWF0aW9uXzNfc3ByaW50fSU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfMTBfc3ByaW50KX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIiBjbGFzczpncmVlbj1cInt2YXJpYXRpb25fMTBfc3ByaW50Pj0wfVwiIGNsYXNzOnJlZD1cInt2YXJpYXRpb25fMTBfc3ByaW50PDB9XCI+e3ZhcmlhdGlvbl8xMF9zcHJpbnR9JTwvdGQ+XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2Ugb2YgbGFzdCBzZXNzaW9uczwvY2FwdGlvbj4gICAgICAgICAgIFxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiaXRhbGljIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5EaXN0YW5jZSAobSk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlRpbWUgKG1pbik8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPlNwZWVkIChrbS9oKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+U3ByaW50czwvdGg+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHsjZWFjaCBkaXN0YW5jZV8zX3Nlc3Npb24gYXMgZGlzdGFuY2UsIGl9XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZGF0ZV8zX3Nlc3Npb25baV19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnttaW51dGVzXzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKChkaXN0YW5jZS8xMDAwKSAvIChtaW51dGVzXzNfc2Vzc2lvbltpXS82MCkpIH08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57c3ByaW50XzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICB7L2VhY2h9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdC04XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwIG1iLTggbXQtMTZcIj5QZXJmb3JtYW5jZSBDaGFydDwvaDE+XG4gICAgICAgICAgICA8Q2hhcnRzIHtkYXRhfSAvPiBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+PC9kaXY+XG48L2Rpdj5cblxuPC9kaXY+IiwiPGNhbnZhcyBpZD1cIm15Q2hhcnRcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuZXhwb3J0IGxldCBkYXRhOyBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFydCgpe1xuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKTtcbiAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICB5QXhlczogXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgaWQ6ICdEaXN0YW5jZScsXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXG4gICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAnRGlzdGFuY2UgKG0pJyxcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnRWxldmF0aW9uJyxcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6ICdFbGV2YXRpb24gKG0pJyxcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICBpZDogJ1NwZWVkJyxcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgICAgc2NhbGVMYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgbGFiZWxTdHJpbmc6ICdTcGVlZCAoa20vaCknLFxuICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgIH0sXG4gICAgICB9XVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfVxub25Nb3VudChjcmVhdGVDaGFydClcbjwvc2NyaXB0PlxuIiwiXG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBzcG9ydHMvY3ljbGluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuICAgIFxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgLnJlZCB7IGNvbG9yOiByZWQ7IH1cbiAgIC5ncmVlbiB7IGNvbG9yOiBncmVlbjsgfVxuPC9zdHlsZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG4gICAgaW1wb3J0IENoYXJ0cyBmcm9tICcuL2N5Y2xpbmctY2hhcnRzLnN2ZWx0ZSdcbiAgICBleHBvcnQgbGV0IGRhdGFfcmF3XG4gICAgZnVuY3Rpb24gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoaW50LCBsaXN0KXtcbiAgICByZXR1cm4gbGlzdC5zbGljZShNYXRoLm1heChsaXN0Lmxlbmd0aCAtIGludCwgMCkpXG59XG5mdW5jdGlvbiBjb252ZXJ0X2RhdGUoZGF0ZSl7XG5cdHJldHVybiBtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoJ2RkZGQgTU1NTSBEIFknKVxufVxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XG4gICAgcmV0dXJuIGEubWFwKChlLGkpID0+IGUgLyBiW2ldKTtcbn1cblxuZnVuY3Rpb24gdmFyaWF0aW9uKHhfbmV3LCB4X29sZCl7XG4gICAgY29uc3QgdmFyaWF0aW9uID0gTWF0aC5yb3VuZCgoeF9uZXcteF9vbGQpL3hfb2xkKjEwMClcbiAgICByZXR1cm4gdmFyaWF0aW9uXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMCkgLzEwXG59XG5cbmZ1bmN0aW9uIHJvdW5kXzJfZGVjaW1hbChmbG9hdCl7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQgKiAxMDApIC8gMTAwXG59XG4gICAgLy8gU29ydCBsaXN0IG9mIEpzb24gYnkgZGF0ZXMgKGNsb3Nlc3QgZGF0ZXMgdG8gbGFzdCBwb3NpdGlvbnMpXG4gICAgZnVuY3Rpb24gY3VzdG9tX3NvcnQoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKTtcbiAgICB9XG4gICAgZGF0YV9yYXcgPSBkYXRhX3Jhdy5zb3J0KGN1c3RvbV9zb3J0KVxuXG4vLyBDb21wdXRlIGRhdGEgZm9yIGNoYXJ0c1xuXG4gICAgbGV0IGxpc3RfbWV0ZXJzID0gW107XG4gICAgbGV0IGxpc3RfZGF0ZSA9IFtdO1xuICAgIGxldCBsaXN0X2VsZXZhdGlvbiA9IFtdO1xuICAgIGxldCBsaXN0X21pbnV0ZXMgPSBbXTtcbiAgICBsZXQgbGlzdF9zcGVlZCA9IFtdO1xuXG4gICAgZGF0YV9yYXcuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgbGlzdF9tZXRlcnMucHVzaCh4Lm1ldGVycylcbiAgICAgICAgbGlzdF9kYXRlLnB1c2goeC5kYXRlKVxuICAgICAgICBsaXN0X2VsZXZhdGlvbi5wdXNoKHguZWxldmF0aW9uKVxuICAgICAgICBsaXN0X21pbnV0ZXMucHVzaCh4Lm1pbnV0ZXMpXG4gICAgICAgIGxldCBzcGVlZCA9IHgubWV0ZXJzIC8geC5taW51dGVzICogMC4wNlxuICAgICAgICBsaXN0X3NwZWVkLnB1c2gocm91bmRfMl9kZWNpbWFsKHNwZWVkKSlcbiAgICB9KVxuXG4gICAgZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiAnRGlzdGFuY2UnLFxuICAgICAgICB5QXhpc0lEIDogJ0Rpc3RhbmNlJyxcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzE5MkU1QlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0VsZXZhdGlvbicsXG4gICAgICAgIGRhdGE6bGlzdF9lbGV2YXRpb24sXG4gICAgICAgIHlBeGlzSUQgOiAnRWxldmF0aW9uJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzFENjVBNlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1NwZWVkJyxcbiAgICAgICAgZGF0YTpsaXN0X3NwZWVkLFxuICAgICAgICB5QXhpc0lEIDogJ1NwZWVkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzcyQTJDMFwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH1dXG59XG5cbi8vIFRPRE86IHZlcmlmaXkgb3JkZXJpbmcgb2YgZGF0ZXMgYW5kIHNlc3Npb25zXG5cbmNvbnN0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XG5cblxuLy8gVE9ETzogcmlnaHQgbm93IGluY2x1ZGluZyBsYXN0IHNlc3Npb24sIHByb2JhYmx5IHNob3VsZCBub3RcblxuLy8gVE9ETzogY29sb3JzIGdyZWVuIG9yIHJlZCBmb3IgdmFyaWF0aW9uc1xuXG5cbi8vIENvbXB1dGUgYXZlcmFnZSBkaXN0YW5jZSwgc3BlZWQsIGVsZXZhdGlvbiwgXG4vLyBMYXN0IHNlc3Npb25cbmNvbnN0IGxhc3RfZGlzdGFuY2UgPSBsaXN0X21ldGVyc1tsaXN0X21ldGVycy5sZW5ndGgtMV1cbmNvbnN0IGxhc3RfaG91cnMgPSBsaXN0X21pbnV0ZXNbbGlzdF9taW51dGVzLmxlbmd0aC0xXS82MFxuY29uc3QgbGFzdF9zcGVlZCA9IGxhc3RfZGlzdGFuY2UvMTAwMC9sYXN0X2hvdXJzXG5jb25zdCBsYXN0X2VsZXZhdGlvbiA9IGxpc3RfZWxldmF0aW9uW2xpc3RfZWxldmF0aW9uLmxlbmd0aC0xXVxuXG5cbi8vIExhc3QgMyBzZXNzaW9uc1xuLy9jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBsaXN0X21ldGVycy5zbGljZShNYXRoLm1heChsaXN0X21ldGVycy5sZW5ndGggLSAzLCAwKSlcblxuY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfbWludXRlcylcbmNvbnN0IGVsZXZhdGlvbl8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2VsZXZhdGlvbilcbmNvbnN0IGRhdGVfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKVxuXG5cblxuY29uc3QgYXZlcmFnZV8zX2Rpc3RhbmNlID0gYXZlcmFnZShkaXN0YW5jZV8zX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzNfZWxldmF0aW9uID0gYXZlcmFnZShlbGV2YXRpb25fM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfM19zZXNzaW9uICwgbWludXRlc18zX3Nlc3Npb24pKSAqIDYwLzEwMDAgIFxuXG5jb25zdCB2YXJpYXRpb25fM19kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzNfZGlzdGFuY2UpXG5jb25zdCB2YXJpYXRpb25fM19zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzNfc3BlZWQpXG5jb25zdCB2YXJpYXRpb25fM19lbGV2YXRpb24gPSB2YXJpYXRpb24obGFzdF9lbGV2YXRpb24sIGF2ZXJhZ2VfM19lbGV2YXRpb24pXG5cbi8vIExhc3QgMTAgc2Vzc2lvbnNcbmNvbnN0IGRpc3RhbmNlXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9tZXRlcnMpXG5jb25zdCBtaW51dGVzXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9taW51dGVzKVxuY29uc3QgZWxldmF0aW9uXzEwX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygxMCwgbGlzdF9lbGV2YXRpb24pXG5cbmNvbnN0IGF2ZXJhZ2VfMTBfZGlzdGFuY2UgPSBhdmVyYWdlKGRpc3RhbmNlXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX2VsZXZhdGlvbiA9IGF2ZXJhZ2UoZWxldmF0aW9uXzEwX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzEwX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfMTBfc2Vzc2lvbiAsIG1pbnV0ZXNfMTBfc2Vzc2lvbikpICogNjAvMTAwMFxuXG5jb25zdCB2YXJpYXRpb25fMTBfZGlzdGFuY2UgPSB2YXJpYXRpb24obGFzdF9kaXN0YW5jZSwgYXZlcmFnZV8xMF9kaXN0YW5jZSlcbmNvbnN0IHZhcmlhdGlvbl8xMF9zcGVlZCA9IHZhcmlhdGlvbihsYXN0X3NwZWVkLCBhdmVyYWdlXzEwX3NwZWVkKVxuY29uc3QgdmFyaWF0aW9uXzEwX2VsZXZhdGlvbiA9IHZhcmlhdGlvbihsYXN0X2VsZXZhdGlvbiwgYXZlcmFnZV8xMF9lbGV2YXRpb24pXG5cbmNvbnN0IG5iX2Rpc3BsYXllZCA9IDNcblxuXG5cbjwvc2NyaXB0PlxuPGRpdiBjbGFzcz0nYmctd2hpdGUnPlxuXG48ZGl2IGNsYXNzPVwibWItMjBcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiYnljaWNsZTIxLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxuICAgIDwvZGl2PlxuXG4gICAgXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTYgYmctYmx1ZS03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLXQtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2FucyBBcmlhbCB0ZXh0LWNlbnRlciBwLTIgdGV4dC0zeGwgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGJnLWJsdWUtMTAwIHB4LTggdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBDeWNsaW5nIFBlcmZvcm1hbmNlXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPGRpdiBjbGFzcz0ncC04Jz5cbiAgICA8ZGl2IGNsYXNzPSdwYi04Jz5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCAgbWItOCBcIj5MYXN0IFNlc3Npb25zPC9oMT5cbiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGFsaWMgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHsjZWFjaCBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpIGFzIGRhdGV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj57Y29udmVydF9kYXRlKGRhdGUpfTwvZGl2PlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkaXZpZGUteSBtdC0xNlwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwXCI+UGVyZm9ybWFuY2UgVGFibGVzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz0nbS0xMiBjb250YWluZXIgbXgtYXV0byc+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgbWItNiBtdC04IHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDBcIj5QZXJmb3JtYW5jZSBldm9sdXRpb24gb2YgbWFpbiBtZXRyaWNzPC9jYXB0aW9uPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiYm9yZGVyLWdyYXktMzAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5NZXRyaWNzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5WYWx1ZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMiBcIj52cy4gTGFzdCAzIHNlc3Npb25zPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtNCBweS0yXCI+dnMuIExhc3QgMTAgc2Vzc2lvbnM8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3RfZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e01hdGgucm91bmQoYXZlcmFnZV8zX2Rpc3RhbmNlKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIiBjbGFzczpncmVlbj1cInt2YXJpYXRpb25fM19kaXN0YW5jZT49MH1cIiBjbGFzczpyZWQ9XCJ7dmFyaWF0aW9uXzNfZGlzdGFuY2U8MH1cIj57dmFyaWF0aW9uXzNfZGlzdGFuY2V9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9kaXN0YW5jZSl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCIgY2xhc3M6Z3JlZW49XCJ7dmFyaWF0aW9uXzEwX2Rpc3RhbmNlPj0wfVwiIGNsYXNzOnJlZD1cInt2YXJpYXRpb25fMTBfZGlzdGFuY2U8MH1cIj57dmFyaWF0aW9uXzEwX2Rpc3RhbmNlfSU8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPlNwZWVkIChrbS9oKTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwobGFzdF9zcGVlZCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzNfc3BlZWQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiIGNsYXNzOmdyZWVuPVwie3ZhcmlhdGlvbl8zX3NwZWVkPj0wfVwiIGNsYXNzOnJlZD1cInt2YXJpYXRpb25fM19zcGVlZDwwfVwiPnt2YXJpYXRpb25fM19zcGVlZH0lPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX3NwZWVkKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIiBjbGFzczpncmVlbj1cInt2YXJpYXRpb25fMTBfc3BlZWQ+PTB9XCIgY2xhc3M6cmVkPVwie3ZhcmlhdGlvbl8xMF9zcGVlZDwwfVwiPnt2YXJpYXRpb25fMTBfc3BlZWR9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkVsZXZhdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2VsZXZhdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19lbGV2YXRpb24pfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiIGNsYXNzOmdyZWVuPVwie3ZhcmlhdGlvbl8zX2VsZXZhdGlvbj49MH1cIiBjbGFzczpyZWQ9XCJ7dmFyaWF0aW9uXzNfZWxldmF0aW9uPDB9XCI+e3ZhcmlhdGlvbl8zX2VsZXZhdGlvbn0lPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX2VsZXZhdGlvbil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCIgY2xhc3M6Z3JlZW49XCJ7dmFyaWF0aW9uXzEwX2VsZXZhdGlvbj49MH1cIiBjbGFzczpyZWQ9XCJ7dmFyaWF0aW9uXzEwX2VsZXZhdGlvbjwwfVwiPnt2YXJpYXRpb25fMTBfZWxldmF0aW9ufSU8L3RkPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdtLTEyIGNvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIG9mIGxhc3Qgc2Vzc2lvbnM8L2NhcHRpb24+XG4gICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJpdGFsaWMgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkRpc3RhbmNlIChtKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VGltZSAobWluKTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5FbGV2YXRpb24gKG0pPC90aD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeyNlYWNoIGRpc3RhbmNlXzNfc2Vzc2lvbiBhcyBkaXN0YW5jZSwgaX1cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkYXRlXzNfc2Vzc2lvbltpXX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57ZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e21pbnV0ZXNfM19zZXNzaW9uW2ldfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoKGRpc3RhbmNlLzEwMDApIC8gKG1pbnV0ZXNfM19zZXNzaW9uW2ldLzYwKSkgfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntlbGV2YXRpb25fM19zZXNzaW9uW2ldfTwvdGQ+XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LThcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDAgbWItOCBtdC0xNlwiPlBlcmZvcm1hbmNlIENoYXJ0PC9oMT5cbiAgICAgICAgICAgIDxDaGFydHMge2RhdGF9IC8+IFxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj48L2Rpdj5cbjwvZGl2PlxuXG5cbjwvZGl2PiIsIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YTsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeUF4ZXM6IFxuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgIGlkOiAnRGlzdGFuY2UnLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ0Rpc3RhbmNlIChtKScsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICBpZDogJ0VsZXZhdGlvbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAnRWxldmF0aW9uIChtKScsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICdTcGVlZCcsXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAnU3BlZWQgKGttL2gpJyxcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICB9LFxuICAgICAgfV1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQpXG48L3NjcmlwdD5cbiIsIlxuXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgc3BvcnRzL3J1bm5pbmcuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihkYXRhX3JhdyA9PiB7XG5cdFx0XHRyZXR1cm4geyBkYXRhX3JhdyB9O1xuXHRcdH0pO1xuXHR9XHRcbiAgICBcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgIC5yZWQgeyBjb2xvcjogcmVkOyB9XG4gICAuZ3JlZW4geyBjb2xvcjogZ3JlZW47IH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCBDaGFydHMgZnJvbSAnLi9ydW5uaW5nLWNoYXJ0cy5zdmVsdGUnXG4gICAgZXhwb3J0IGxldCBkYXRhX3Jhd1xuICAgIC8vIFNvcnQgbGlzdCBvZiBKc29uIGJ5IGRhdGVzIChjbG9zZXN0IGRhdGVzIHRvIGxhc3QgcG9zaXRpb25zKVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9zb3J0KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCk7XG4gICAgfVxuICAgIGRhdGFfcmF3ID0gZGF0YV9yYXcuc29ydChjdXN0b21fc29ydClcbmZ1bmN0aW9uIGdldF9sYXN0X25iX3Nlc3Npb25zKGludCwgbGlzdCl7XG4gICAgcmV0dXJuIGxpc3Quc2xpY2UoTWF0aC5tYXgobGlzdC5sZW5ndGggLSBpbnQsIDApKVxufVxuZnVuY3Rpb24gY29udmVydF9kYXRlKGRhdGUpe1xuXHRyZXR1cm4gbW9tZW50KGRhdGUsICdZWVlZLU1NLUREJykuZm9ybWF0KCdkZGRkIE1NTU0gRCBZJylcbn1cbmZ1bmN0aW9uIGRpdmlkZXZlY3RvcihhLGIpe1xuICAgIHJldHVybiBhLm1hcCgoZSxpKSA9PiBlIC8gYltpXSk7XG59XG5cbmZ1bmN0aW9uIHZhcmlhdGlvbih4X25ldywgeF9vbGQpe1xuICAgIGNvbnN0IHZhcmlhdGlvbiA9IE1hdGgucm91bmQoKHhfbmV3LXhfb2xkKS94X29sZCoxMDApXG4gICAgcmV0dXJuIHZhcmlhdGlvblxufVxuXG5mdW5jdGlvbiByb3VuZF8xX2RlY2ltYWwoZmxvYXQpe1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTApIC8xMFxufVxuXG5mdW5jdGlvbiByb3VuZF8yX2RlY2ltYWwoZmxvYXQpe1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTAwKSAvIDEwMFxufVxuLy8gQ29tcHV0ZSBkYXRhIGZvciBjaGFydHNcblxuICAgIGxldCBsaXN0X21ldGVycyA9IFtdO1xuICAgIGxldCBsaXN0X2RhdGUgPSBbXTtcbiAgICBsZXQgbGlzdF9lbGV2YXRpb24gPSBbXTtcbiAgICBsZXQgbGlzdF9taW51dGVzID0gW107XG4gICAgbGV0IGxpc3Rfc3BlZWQgPSBbXTtcblxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpXG4gICAgICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSlcbiAgICAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbilcbiAgICAgICAgbGlzdF9taW51dGVzLnB1c2goeC5taW51dGVzKVxuICAgICAgICBsZXQgc3BlZWQgPSB4Lm1ldGVycyAvIHgubWludXRlcyAqIDAuMDZcbiAgICAgICAgbGlzdF9zcGVlZC5wdXNoKHJvdW5kXzJfZGVjaW1hbChzcGVlZCkpXG4gICAgfSlcblxuICAgIGV4cG9ydCBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVsczogbGlzdF9kYXRlLFxuICAgIGRhdGFzZXRzOlt7XG4gICAgICAgIGxhYmVsOiAnRGlzdGFuY2UnLFxuICAgICAgICB5QXhpc0lEIDogJ0Rpc3RhbmNlJyxcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzE5MkU1QlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ0VsZXZhdGlvbicsXG4gICAgICAgIGRhdGE6bGlzdF9lbGV2YXRpb24sXG4gICAgICAgIHlBeGlzSUQgOiAnRWxldmF0aW9uJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzFENjVBNlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1NwZWVkJyxcbiAgICAgICAgZGF0YTpsaXN0X3NwZWVkLFxuICAgICAgICB5QXhpc0lEIDogJ1NwZWVkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzcyQTJDMFwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH1dXG59XG5cbi8vIFRPRE86IHZlcmlmaXkgb3JkZXJpbmcgb2YgZGF0ZXMgYW5kIHNlc3Npb25zXG5cbmNvbnN0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XG5cblxuLy8gVE9ETzogcmlnaHQgbm93IGluY2x1ZGluZyBsYXN0IHNlc3Npb24sIHByb2JhYmx5IHNob3VsZCBub3RcblxuLy8gVE9ETzogbGlzdGUgZGVzIG9wdGlvbnMgYm9vbCBhdmVjIGxlcyBtw6l0cmlxdWVzIHF1J29uIHZldXQgb2JzZXJ2ZXIgKHJ5dGhtZSBjYXJkaWFxdWUpXG5cbi8vIFRPRE86IGNvbG9ycyBncmVlbiBvciByZWQgZm9yIHZhcmlhdGlvbnNcblxuXG5cblxuLy8gQ29tcHV0ZSBhdmVyYWdlIGRpc3RhbmNlLCBzcGVlZCwgZWxldmF0aW9uLCBcbi8vIExhc3Qgc2Vzc2lvblxuY29uc3QgbGFzdF9kaXN0YW5jZSA9IGxpc3RfbWV0ZXJzW2xpc3RfbWV0ZXJzLmxlbmd0aC0xXVxuY29uc3QgbGFzdF9ob3VycyA9IGxpc3RfbWludXRlc1tsaXN0X21pbnV0ZXMubGVuZ3RoLTFdLzYwXG5jb25zdCBsYXN0X3NwZWVkID0gbGFzdF9kaXN0YW5jZS8xMDAwL2xhc3RfaG91cnNcbmNvbnN0IGxhc3RfZWxldmF0aW9uID0gbGlzdF9lbGV2YXRpb25bbGlzdF9lbGV2YXRpb24ubGVuZ3RoLTFdXG5cblxuLy8gTGFzdCAzIHNlc3Npb25zXG4vL2NvbnN0IGRpc3RhbmNlXzNfc2Vzc2lvbiA9IGxpc3RfbWV0ZXJzLnNsaWNlKE1hdGgubWF4KGxpc3RfbWV0ZXJzLmxlbmd0aCAtIDMsIDApKVxuXG5jb25zdCBkaXN0YW5jZV8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X21ldGVycylcbmNvbnN0IG1pbnV0ZXNfM19zZXNzaW9uID0gZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9taW51dGVzKVxuY29uc3QgZWxldmF0aW9uXzNfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDMsIGxpc3RfZWxldmF0aW9uKVxuY29uc3QgZGF0ZV8zX3Nlc3Npb24gPSBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpXG5cblxuXG5jb25zdCBhdmVyYWdlXzNfZGlzdGFuY2UgPSBhdmVyYWdlKGRpc3RhbmNlXzNfc2Vzc2lvbilcbmNvbnN0IGF2ZXJhZ2VfM19lbGV2YXRpb24gPSBhdmVyYWdlKGVsZXZhdGlvbl8zX3Nlc3Npb24pXG5jb25zdCBhdmVyYWdlXzNfc3BlZWQgPSBhdmVyYWdlKGRpdmlkZXZlY3RvcihkaXN0YW5jZV8zX3Nlc3Npb24gLCBtaW51dGVzXzNfc2Vzc2lvbikpICogNjAvMTAwMCAgXG5cbmNvbnN0IHZhcmlhdGlvbl8zX2Rpc3RhbmNlID0gdmFyaWF0aW9uKGxhc3RfZGlzdGFuY2UsIGF2ZXJhZ2VfM19kaXN0YW5jZSlcbmNvbnN0IHZhcmlhdGlvbl8zX3NwZWVkID0gdmFyaWF0aW9uKGxhc3Rfc3BlZWQsIGF2ZXJhZ2VfM19zcGVlZClcbmNvbnN0IHZhcmlhdGlvbl8zX2VsZXZhdGlvbiA9IHZhcmlhdGlvbihsYXN0X2VsZXZhdGlvbiwgYXZlcmFnZV8zX2VsZXZhdGlvbilcblxuLy8gTGFzdCAxMCBzZXNzaW9uc1xuY29uc3QgZGlzdGFuY2VfMTBfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDEwLCBsaXN0X21ldGVycylcbmNvbnN0IG1pbnV0ZXNfMTBfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDEwLCBsaXN0X21pbnV0ZXMpXG5jb25zdCBlbGV2YXRpb25fMTBfc2Vzc2lvbiA9IGdldF9sYXN0X25iX3Nlc3Npb25zKDEwLCBsaXN0X2VsZXZhdGlvbilcblxuY29uc3QgYXZlcmFnZV8xMF9kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfMTBfc2Vzc2lvbilcbmNvbnN0IGF2ZXJhZ2VfMTBfZWxldmF0aW9uID0gYXZlcmFnZShlbGV2YXRpb25fMTBfc2Vzc2lvbilcbmNvbnN0IGF2ZXJhZ2VfMTBfc3BlZWQgPSBhdmVyYWdlKGRpdmlkZXZlY3RvcihkaXN0YW5jZV8xMF9zZXNzaW9uICwgbWludXRlc18xMF9zZXNzaW9uKSkgKiA2MC8xMDAwXG5cbmNvbnN0IHZhcmlhdGlvbl8xMF9kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzEwX2Rpc3RhbmNlKVxuY29uc3QgdmFyaWF0aW9uXzEwX3NwZWVkID0gdmFyaWF0aW9uKGxhc3Rfc3BlZWQsIGF2ZXJhZ2VfMTBfc3BlZWQpXG5jb25zdCB2YXJpYXRpb25fMTBfZWxldmF0aW9uID0gdmFyaWF0aW9uKGxhc3RfZWxldmF0aW9uLCBhdmVyYWdlXzEwX2VsZXZhdGlvbilcblxuY29uc3QgbmJfZGlzcGxheWVkID0gM1xuXG5cblxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9J2JnLXdoaXRlJz5cblxuPGRpdiBjbGFzcz1cIm1iLTIwXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgICAgIDxpbWcgc3JjPVwicnVubmluZzEuanBnXCIgYWx0PVwiY3ljbGluZ1wiIGNsYXNzPVwib2JqZWN0LWNvdmVyIGgtNDggdy1mdWxsIHNoYWRvdyByb3VuZGVkLW1kXCI+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xNiBiZy1ibHVlLTcwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgc2hhZG93LWxnIHJvdW5kZWQtdC1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC1zYW5zIEFyaWFsIHRleHQtY2VudGVyIHAtMiB0ZXh0LTN4bCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS0xMDAgcHgtOCB0cmFja2luZy13aWRlc3RcIj5cbiAgICAgICAgICAgIFJ1bm5pbmcgUGVyZm9ybWFuY2VcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz0ncC04Jz5cbiAgICA8ZGl2IGNsYXNzPSdwYi04Jz5cbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCAgbWItOCBcIj5MYXN0IFNlc3Npb25zPC9oMT5cbiAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGFsaWMgZ3JpZCBncmlkLWNvbHMtMyBkaXZpZGUteCBkaXZpZGUtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHsjZWFjaCBnZXRfbGFzdF9uYl9zZXNzaW9ucygzLCBsaXN0X2RhdGUpIGFzIGRhdGV9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIj57Y29udmVydF9kYXRlKGRhdGUpfTwvZGl2PlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz0nZGl2aWRlLXkgbXQtMTYnPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwXCI+UGVyZm9ybWFuY2UgVGFibGVzPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz0nbS0xMiBjb250YWluZXIgbXgtYXV0byc+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgbWItNiBtdC04IHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDBcIj5QZXJmb3JtYW5jZSBldm9sdXRpb24gb2YgbWFpbiBtZXRyaWNzPC9jYXB0aW9uPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiYm9yZGVyLWdyYXktMzAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5NZXRyaWNzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5WYWx1ZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTQgcHktMiBcIj52cy4gTGFzdCAzIHNlc3Npb25zPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtNCBweS0yXCI+dnMuIExhc3QgMTAgc2Vzc2lvbnM8L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3RfZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e01hdGgucm91bmQoYXZlcmFnZV8zX2Rpc3RhbmNlKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIiBjbGFzczpncmVlbj1cInt2YXJpYXRpb25fM19kaXN0YW5jZT49MH1cIiBjbGFzczpyZWQ9XCJ7dmFyaWF0aW9uXzNfZGlzdGFuY2U8MH1cIj57dmFyaWF0aW9uXzNfZGlzdGFuY2V9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwoYXZlcmFnZV8xMF9kaXN0YW5jZSl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCIgY2xhc3M6Z3JlZW49XCJ7dmFyaWF0aW9uXzEwX2Rpc3RhbmNlPj0wfVwiIGNsYXNzOnJlZD1cInt2YXJpYXRpb25fMTBfZGlzdGFuY2U8MH1cIj57dmFyaWF0aW9uXzEwX2Rpc3RhbmNlfSU8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPlNwZWVkIChrbS9oKTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntyb3VuZF8yX2RlY2ltYWwobGFzdF9zcGVlZCl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzNfc3BlZWQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiIGNsYXNzOmdyZWVuPVwie3ZhcmlhdGlvbl8zX3NwZWVkPj0wfVwiIGNsYXNzOnJlZD1cInt2YXJpYXRpb25fM19zcGVlZDwwfVwiPnt2YXJpYXRpb25fM19zcGVlZH0lPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX3NwZWVkKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIiBjbGFzczpncmVlbj1cInt2YXJpYXRpb25fMTBfc3BlZWQ+PTB9XCIgY2xhc3M6cmVkPVwie3ZhcmlhdGlvbl8xMF9zcGVlZDwwfVwiPnt2YXJpYXRpb25fMTBfc3BlZWR9JTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkVsZXZhdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X2VsZXZhdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57cm91bmRfMl9kZWNpbWFsKGF2ZXJhZ2VfM19lbGV2YXRpb24pfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiIGNsYXNzOmdyZWVuPVwie3ZhcmlhdGlvbl8zX2VsZXZhdGlvbj49MH1cIiBjbGFzczpyZWQ9XCJ7dmFyaWF0aW9uXzNfZWxldmF0aW9uPDB9XCI+e3ZhcmlhdGlvbl8zX2VsZXZhdGlvbn0lPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbChhdmVyYWdlXzEwX2VsZXZhdGlvbil9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCIgY2xhc3M6Z3JlZW49XCJ7dmFyaWF0aW9uXzEwX2VsZXZhdGlvbj49MH1cIiBjbGFzczpyZWQ9XCJ7dmFyaWF0aW9uXzEwX2VsZXZhdGlvbjwwfVwiPnt2YXJpYXRpb25fMTBfZWxldmF0aW9ufSU8L3RkPlxuICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2Ugb2YgbGFzdCBzZXNzaW9uczwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cIml0YWxpYyBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+RGlzdGFuY2UgKG0pPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5UaW1lIChtaW4pPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPkVsZXZhdGlvbiAobSk8L3RoPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7I2VhY2ggZGlzdGFuY2VfM19zZXNzaW9uIGFzIGRpc3RhbmNlLCBpfVxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2RhdGVfM19zZXNzaW9uW2ldfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntkaXN0YW5jZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bWludXRlc18zX3Nlc3Npb25baV19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3JvdW5kXzJfZGVjaW1hbCgoZGlzdGFuY2UvMTAwMCkgLyAobWludXRlc18zX3Nlc3Npb25baV0vNjApKSB9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2VsZXZhdGlvbl8zX3Nlc3Npb25baV19PC90ZD5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgey9lYWNofVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibXQtOFwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMCBtYi04IG10LTE2XCI+UGVyZm9ybWFuY2UgQ2hhcnQ8L2gxPlxuICAgICAgICAgICAgPENoYXJ0cyB7ZGF0YX0gLz4gXG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgPC9kaXY+PC9kaXY+XG48L2Rpdj5cblxuPC9kaXY+IiwiPGNhbnZhcyBpZD1cIm15Q2hhcnQxMFwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjFcIj48L2NhbnZhcz5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5leHBvcnQgbGV0IGRhdGFfcHVzaHVwc19yYWRhcjsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQyKCl7XG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydDEwJyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdyYWRhcicsXG4gICAgICAgIGRhdGE6IGRhdGFfcHVzaHVwc19yYWRhcixcbiAgICAgICAgb3B0aW9uczoge1xuICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgIG1pbjogMCwgLy8gWW91IGNhbiBhbHNvIGNoYW5nZSB0aGUgTWluXG4gICBiZWdpbkF0WmVybzogZmFsc2UsIC8vIGluIGNhc2UgeW91IGNoYW5nZSB0aGUgTWluXG59LCAvLyBldGNcbiAgICB9XG59XG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQyKVxuPC9zY3JpcHQ+XG4iLCI8Y2FudmFzIGlkPVwibXlDaGFydDEzXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YV9vdGhlcnNfcmFkYXI7IFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0Migpe1xuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQxMycpO1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgICBkYXRhOiBkYXRhX290aGVyc19yYWRhcixcbiAgICAgICAgb3B0aW9uczoge1xuICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgIG1pbjogMCwgLy8gWW91IGNhbiBhbHNvIGNoYW5nZSB0aGUgTWluXG4gICBiZWdpbkF0WmVybzogZmFsc2UsIC8vIGluIGNhc2UgeW91IGNoYW5nZSB0aGUgTWluXG59LCAvLyBldGNcbiAgICB9XG59XG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQyKVxuPC9zY3JpcHQ+XG4iLCI8Y2FudmFzIGlkPVwibXlDaGFydDE0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YV9hYmRvbWluYWxfcmFkYXI7IFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0Migpe1xuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQxNCcpO1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgICBkYXRhOiBkYXRhX2FiZG9taW5hbF9yYWRhcixcbiAgICAgICAgb3B0aW9uczoge1xuICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgIG1pbjogMCwgLy8gWW91IGNhbiBhbHNvIGNoYW5nZSB0aGUgTWluXG4gICBiZWdpbkF0WmVybzogZmFsc2UsIC8vIGluIGNhc2UgeW91IGNoYW5nZSB0aGUgTWluXG59LCAvLyBldGNcbiAgICB9XG59XG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQyKVxuPC9zY3JpcHQ+XG4iLCI8Y2FudmFzIGlkPVwibXlDaGFydDFcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuZXhwb3J0IGxldCBkYXRhX2xlZ19yYWRhcjsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQyKCl7XG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydDEnKTtcbiAgICB2YXIgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgICAgdHlwZTogJ3JhZGFyJyxcbiAgICAgICAgZGF0YTogZGF0YV9sZWdfcmFkYXIsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICBtaW46IDAsIC8vIFlvdSBjYW4gYWxzbyBjaGFuZ2UgdGhlIE1pblxuICAgYmVnaW5BdFplcm86IGZhbHNlLCAvLyBpbiBjYXNlIHlvdSBjaGFuZ2UgdGhlIE1pblxufSwgLy8gZXRjXG4gICAgfVxufVxuXG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQyKVxuPC9zY3JpcHQ+XG4iLCJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBzcG9ydHMvd29ya291dC5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuXG48L3NjcmlwdD5cblxuXG48c3R5bGU+XG4gICAucmVkIHsgY29sb3I6IHJlZDsgfVxuICAgLmdyZWVuIHsgY29sb3I6IGdyZWVuOyB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBDaGFydHNSYWRhckxlZyBmcm9tICcuL3dvcmtvdXRsZWdzLXJhZGFyLnN2ZWx0ZSdcbiAgICBpbXBvcnQgQ2hhcnRzUmFkYXJQdXNoVXBzIGZyb20gJy4vd29ya291dHB1c2h1cHMtcmFkYXIuc3ZlbHRlJ1xuICAgIGltcG9ydCBDaGFydHNSYWRhckFiZG9taW5hbHMgZnJvbSAnLi93b3Jrb3V0YWJkby1yYWRhci5zdmVsdGUnXG4gICAgaW1wb3J0IENoYXJ0c1JhZGFyT3RoZXJzIGZyb20gJy4vd29ya291dG90aGVycy1yYWRhci5zdmVsdGUnXG4gICAgaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG4gICAgZXhwb3J0IGxldCBkYXRhX3Jhd1xuICAgICAgICAvLyBTb3J0IGxpc3Qgb2YgSnNvbiBieSBkYXRlcyAoY2xvc2VzdCBkYXRlcyB0byBsYXN0IHBvc2l0aW9ucylcbiAgICBmdW5jdGlvbiBjdXN0b21fc29ydChhLCBiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShhLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGIuZGF0ZSkuZ2V0VGltZSgpO1xuICAgIH1cbiAgICBkYXRhX3JhdyA9IGRhdGFfcmF3LnNvcnQoY3VzdG9tX3NvcnQpXG4gICAgbGV0IGRhdGFfbGFzdDUgPSBkYXRhX3Jhdy5zbGljZShNYXRoLm1heChkYXRhX3Jhdy5sZW5ndGgtNSwgMCkpXG4gICAgY29uc3Qgd29ya291dF9leGVyY2lzZSA9IFtcbiAgICB7J25hbWUnOiAnU3F1YXRzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnU3RhaXIgQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnQmVuY2ggQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnTGVnIFByZXNzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICBcbiAgICB7J25hbWUnOiAnUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0xhdGVyYWwgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdKdW1waW5nIFB1c2gtVXBzJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnQ2xvc2UgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdSYWlzZWQgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuXG4gICAgeyduYW1lJzogJ0FiZG9taW5hbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0FiZG9taW5hbHMnfSxcbiAgICB7J25hbWUnOiAnQWJkb21pbmFsIExhdGVyYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0NvcmUgQWJkb21pbmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnQWJkb21pbmFscyd9LFxuICAgIFxuICAgIFxuICAgIHsnbmFtZSc6ICdCZW5jaCcsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdXZWlnaHQnfSxcbiAgICB7J25hbWUnOiAnQmljZXBzIFdlaWdodCcsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1dlaWdodCd9LFxuICAgIHsnbmFtZSc6ICdQdWxsLVVwcycsICdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1bGwtVXBzJ30sXG4gICAgXVxuXG5cbiAgICBjb25zdCBncm91cF9saXN0ID0geydMZWdzJzogWydTcXVhdHMnLCAnU3RhaXIgQ2xpbWJzJywgJ0JlbmNoIENsaW1icycsICdMZWcgUHJlc3MnXSxcbiAgICAnUHVzaC1VcHMnIDogWydQdXNoLVVwcycsICdMYXRlcmFsIFB1c2gtVXBzJywgJ0p1bXBpbmcgUHVzaC1VcHMnLCAnQ2xvc2UgUHVzaC1VcHMnLCAnUmFpc2VkIFB1c2gtVXBzJ10sXG4gICAgJ0FiZG9taW5hbHMnOiBbJ0FiZG9taW5hbCcsICdBYmRvbWluYWwgTGF0ZXJhbCcsICdDb3JlIEFiZG9taW5hbCddLFxuICAgICdPdGhlcnMnOiBbJ0JlbmNoJywgJ0JpY2VwcyBXZWlnaHQnLCAnUHVsbC1VcHMnXX1cbiAgICBmdW5jdGlvbiBjb252ZXJ0X2RhdGUoZGF0ZSl7XG5cdHJldHVybiBtb21lbnQoZGF0ZSwgJ1lZWVktTU0tREQnKS5mb3JtYXQoJ2RkZGQgTU1NTSBEIFknKVxufVxuICAgIGZ1bmN0aW9uIHB1c2hfc2VyaWVzKHgsIGV4ZXJjaXNlKXtcbiAgICAgICAgaWYgKGV4ZXJjaXNlIGluIHgpe1xuICAgICAgICAgICAgcmV0dXJuIHhbZXhlcmNpc2VdWydTZXJpZXMnXSAqIHhbZXhlcmNpc2VdWydOdW1iZXInXVxuICAgICAgICB9IGVsc2UgcmV0dXJuIDBcbiAgICB9XG4gICAgZnVuY3Rpb24gbGFzdF9lbGVtZW50KGxpc3Qpe1xuICAgICAgICByZXR1cm4gbGlzdFtsaXN0Lmxlbmd0aC0xXVxuICAgIH1cbiAgICBmdW5jdGlvbiBhdmVyYWdlX3BlcmYobGlzdDEsIGxpc3QyKXtcbiAgICAgICAgbGV0IGNvdW50ID0gMFxuICAgICAgICBsZXQgbGVuZ3RoID0gMFxuICAgICAgICBmb3IgKGxldCBpIGluIGxpc3QxKXtcbiAgICAgICAgICAgIGlmIChsaXN0MltpXSA+MCApe1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IGxpc3QxW2ldL2xpc3QyW2ldXG4gICAgICAgICAgICAgICAgbGVuZ3RoICs9MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudC9sZW5ndGggKjEwMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJvdW5kXzFfZGVjaW1hbChmbG9hdCl7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGZsb2F0ICogMTApIC8xMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1lYW5fbGlzdF9ub3RudWxsKGxpc3Qpe1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGxldCBsZW5ndGggPSAwXG4gICAgICAgIGxpc3QuZm9yRWFjaChlbGVtID0+IHsgXG4gICAgICAgICAgICBpZiAoZWxlbSA+IDApe1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IGVsZW1cbiAgICAgICAgICAgICAgICBsZW5ndGggKz0gMVxuICAgICAgICAgICAgfX0pXG4gICAgICAgIHJldHVybiBjb3VudCAvIGxlbmd0aFxuICAgIH1cbmZ1bmN0aW9uIGdldF9sYXN0X25iX3Nlc3Npb25zKGludCwgbGlzdCl7XG4gICAgcmV0dXJuIGxpc3Quc2xpY2UoTWF0aC5tYXgobGlzdC5sZW5ndGggLSBpbnQsIDApKVxufVxuXG4gICAgLy8gTEVHUyA6IFxuICAgIGxldCBzcXVhdHMgPSBbXVxuICAgIGxldCBzdGFpcl9jbGltYnMgPSBbXVxuICAgIGxldCBiZW5jaF9jbGltYnMgPSBbXVxuICAgIGxldCBsZWdfcHJlc3MgPSBbXVxuICAgIGxldCBsaXN0X2RhdGUgPSBbXVxuXG4gICAgZGF0YV9yYXcuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgbGlzdF9kYXRlLnB1c2goeFsnZGF0ZSddKVxuICAgICAgICBcbiAgICAgICAgc3F1YXRzLnB1c2gocHVzaF9zZXJpZXMoeCwgJ1NxdWF0cycpKVxuICAgICAgICBzdGFpcl9jbGltYnMucHVzaChwdXNoX3Nlcmllcyh4LCAnU3RhaXIgQ2xpbWJzJykpXG4gICAgICAgIGJlbmNoX2NsaW1icy5wdXNoKHB1c2hfc2VyaWVzKHgsICdCZW5jaCBDbGltYnMnKSlcbiAgICAgICAgbGVnX3ByZXNzLnB1c2gocHVzaF9zZXJpZXMoeCwgJ0xlZyBQcmVzcycpKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgbGV0IGxhc3RfbGVncyA9IFtsYXN0X2VsZW1lbnQoc3F1YXRzKSxcbiAgICBsYXN0X2VsZW1lbnQoc3RhaXJfY2xpbWJzKSwgXG4gICAgbGFzdF9lbGVtZW50KGJlbmNoX2NsaW1icyksIFxuICAgIGxhc3RfZWxlbWVudChsZWdfcHJlc3MpXVxuXG4gICAgbGV0IG1lYW5fbGVncyA9IFttZWFuX2xpc3Rfbm90bnVsbChzcXVhdHMpLFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKHN0YWlyX2NsaW1icyksIFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKGJlbmNoX2NsaW1icyksIFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKGxlZ19wcmVzcyldXG5cbiAgICAgZXhwb3J0IGNvbnN0IGRhdGFfbGVnX3JhZGFyID0ge1xuICAgIGxhYmVsczogZ3JvdXBfbGlzdFsnTGVncyddLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogJ0xhc3Qgc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bGFzdF9sZWdzLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjMTkyRTVCXCIsXG4gICAgICAgIGZpbGw6ZmFsc2VcbiAgICAgICAgfSwgXG4gICAge1xuICAgICAgICBsYWJlbDogJ0F2ZXJhZ2Ugc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bWVhbl9sZWdzLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjNzJBMkMwXCIsXG4gICAgICAgIGZpbGw6ZmFsc2VcbiAgICB9XG4gICAgXX1cblxuICAgIGxldCBsZWdfZ2xvYmFsX2luZGljYXRvciA9IHJvdW5kXzFfZGVjaW1hbChhdmVyYWdlX3BlcmYobGFzdF9sZWdzLCBtZWFuX2xlZ3MpKVxuXG4gICAgbGV0IHB1c2h1cHMgPSBbXVxuICAgIGxldCBwdXNodXBzX2xhdGVyYWwgPSBbXVxuICAgIGxldCBwdXNodXBzX2p1bXBpbmcgPSBbXVxuICAgIGxldCBwdXNodXBzX2Nsb3NlID0gW11cbiAgICBsZXQgcmFpc2VkX3B1c2h1cHMgPSBbXVxuXG4gICAgZGF0YV9yYXcuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgcHVzaHVwcy5wdXNoKHB1c2hfc2VyaWVzKHgsICdQdXNoLVVwcycpKVxuICAgICAgICBwdXNodXBzX2xhdGVyYWwucHVzaChwdXNoX3Nlcmllcyh4LCAnTGF0ZXJhbCBQdXNoLVVwcycpKVxuICAgICAgICBwdXNodXBzX2p1bXBpbmcucHVzaChwdXNoX3Nlcmllcyh4LCAnSnVtcGluZyBQdXNoLVVwcycpKVxuICAgICAgICBwdXNodXBzX2Nsb3NlLnB1c2gocHVzaF9zZXJpZXMoeCwgJ0Nsb3NlIFB1c2gtVXBzJykpXG4gICAgICAgIHJhaXNlZF9wdXNodXBzLnB1c2gocHVzaF9zZXJpZXMoeCwgJ1JhaXNlZCBQdXNoLVVwcycpKVxuICAgIH0pXG5cbiAgICBsZXQgbGFzdF9wdXNodXBzID0gW2xhc3RfZWxlbWVudChwdXNodXBzKSxcbiAgICBsYXN0X2VsZW1lbnQocHVzaHVwc19sYXRlcmFsKSwgXG4gICAgbGFzdF9lbGVtZW50KHB1c2h1cHNfanVtcGluZyksIFxuICAgIGxhc3RfZWxlbWVudChwdXNodXBzX2Nsb3NlKSxcbiAgICBsYXN0X2VsZW1lbnQocmFpc2VkX3B1c2h1cHMpLFxuICAgIF1cblxuICAgIGxldCBtZWFuX3B1c2h1cHMgPSBbbWVhbl9saXN0X25vdG51bGwocHVzaHVwcyksXG4gICAgbWVhbl9saXN0X25vdG51bGwocHVzaHVwc19sYXRlcmFsKSwgXG4gICAgbWVhbl9saXN0X25vdG51bGwocHVzaHVwc19qdW1waW5nKSwgXG4gICAgbWVhbl9saXN0X25vdG51bGwocHVzaHVwc19jbG9zZSksXG4gICAgbWVhbl9saXN0X25vdG51bGwocmFpc2VkX3B1c2h1cHMpXVxuXG4gICAgIGV4cG9ydCBjb25zdCBkYXRhX3B1c2h1cHNfcmFkYXIgPSB7XG4gICAgbGFiZWxzOiBncm91cF9saXN0WydQdXNoLVVwcyddLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogJ0xhc3Qgc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bGFzdF9wdXNodXBzLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjMTkyRTVCXCIsXG4gICAgICAgIGZpbGw6ZmFsc2VcblxuXG4gICAgfSwgXG4gICAge1xuICAgICAgICBsYWJlbDogJ0F2ZXJhZ2Ugc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bWVhbl9wdXNodXBzLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjNzJBMkMwXCIsXG4gICAgICAgIGZpbGw6ZmFsc2VcblxuXG4gICAgfVxuICAgIF19XG5cbiAgICBsZXQgcHVzaHVwc19nbG9iYWxfaW5kaWNhdG9yID0gcm91bmRfMV9kZWNpbWFsKGF2ZXJhZ2VfcGVyZihsYXN0X3B1c2h1cHMsIG1lYW5fcHVzaHVwcykpXG5cbiAgICBsZXQgYWJkb21pbmFsID0gW11cbiAgICBsZXQgYWJkb21pbmFsX2xhdGVyYWwgPSBbXVxuICAgIGxldCBhYmRvbWluYWxfY29yZSA9IFtdXG5cbiAgICBkYXRhX3Jhdy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBhYmRvbWluYWwucHVzaChwdXNoX3Nlcmllcyh4LCAnQWJkb21pbmFsJykpXG4gICAgICAgIGFiZG9taW5hbF9sYXRlcmFsLnB1c2gocHVzaF9zZXJpZXMoeCwgJ0FiZG9taW5hbCBMYXRlcmFsJykpXG4gICAgICAgIGFiZG9taW5hbF9jb3JlLnB1c2gocHVzaF9zZXJpZXMoeCwgJ0NvcmUgQWJkb21pbmFsJykpXG4gICAgfSlcblxuICAgIGxldCBsYXN0X2FiZG9taW5hbCA9IFtsYXN0X2VsZW1lbnQoYWJkb21pbmFsKSxcbiAgICBsYXN0X2VsZW1lbnQoYWJkb21pbmFsX2xhdGVyYWwpLCBcbiAgICBsYXN0X2VsZW1lbnQoYWJkb21pbmFsX2NvcmUpLCBcbiAgICBdXG5cbiAgICBsZXQgbWVhbl9hYmRvbWluYWwgPSBbbWVhbl9saXN0X25vdG51bGwoYWJkb21pbmFsKSxcbiAgICBtZWFuX2xpc3Rfbm90bnVsbChhYmRvbWluYWxfbGF0ZXJhbCksIFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKGFiZG9taW5hbF9jb3JlKSwgXG4gICAgXVxuXG4gICAgIGV4cG9ydCBjb25zdCBkYXRhX2FiZG9taW5hbF9yYWRhciA9IHtcbiAgICBsYWJlbHM6IGdyb3VwX2xpc3RbJ0FiZG9taW5hbHMnXSxcbiAgICBkYXRhc2V0czogW3tcbiAgICAgICAgbGFiZWw6ICdMYXN0IHNlc3Npb24nLFxuICAgICAgICBkYXRhOmxhc3RfYWJkb21pbmFsLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjMTkyRTVCXCIsXG4gICAgICAgIGZpbGw6ZmFsc2VcblxuXG4gICAgfSwgXG4gICAge1xuICAgICAgICBsYWJlbDogJ0F2ZXJhZ2Ugc2Vzc2lvbicsXG4gICAgICAgIGRhdGE6bWVhbl9hYmRvbWluYWwsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiM3MkEyQzBcIixcbiAgICAgICAgZmlsbDpmYWxzZVxuXG5cbiAgICB9XG4gICAgXX1cblxuICAgIGxldCBhYmRvbWluYWxfZ2xvYmFsX2luZGljYXRvciA9IHJvdW5kXzFfZGVjaW1hbChhdmVyYWdlX3BlcmYobGFzdF9hYmRvbWluYWwsIG1lYW5fYWJkb21pbmFsKSlcblxuXG4gICAgLy8gT3RoZXJzIDogXG4gICAgLy9bJ0JlbmNoJywgJ0JpY2VwcyBXZWlnaHQnLCAnUHVsbC1VcHMnXVxuXG4gICAgbGV0IGJlbmNoID0gW11cbiAgICBsZXQgYmljZXBzX3dlaWdodCA9IFtdXG4gICAgbGV0IHB1bGx1cHMgPSBbXVxuXG4gICAgZGF0YV9yYXcuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgYmVuY2gucHVzaChwdXNoX3Nlcmllcyh4LCAnQmVuY2gnKSlcbiAgICAgICAgYmljZXBzX3dlaWdodC5wdXNoKHB1c2hfc2VyaWVzKHgsICdCaWNlcHMgV2VpZ2h0JykpXG4gICAgICAgIHB1bGx1cHMucHVzaChwdXNoX3Nlcmllcyh4LCAnUHVsbC1VcHMnKSlcbiAgICB9KVxuXG4gICAgbGV0IGxhc3Rfb3RoZXJzID0gW2xhc3RfZWxlbWVudChiZW5jaCksXG4gICAgbGFzdF9lbGVtZW50KGJpY2Vwc193ZWlnaHQpLCBcbiAgICBsYXN0X2VsZW1lbnQocHVsbHVwcyksIFxuICAgIF1cblxuICAgIGxldCBtZWFuX290aGVycyA9IFttZWFuX2xpc3Rfbm90bnVsbChiZW5jaCksXG4gICAgbWVhbl9saXN0X25vdG51bGwoYmljZXBzX3dlaWdodCksIFxuICAgIG1lYW5fbGlzdF9ub3RudWxsKHB1bGx1cHMpLCBcbiAgICBdXG5cbiAgICAgZXhwb3J0IGNvbnN0IGRhdGFfb3RoZXJzX3JhZGFyID0ge1xuICAgIGxhYmVsczogZ3JvdXBfbGlzdFsnT3RoZXJzJ10sXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiAnTGFzdCBzZXNzaW9uJyxcbiAgICAgICAgZGF0YTpsYXN0X290aGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzE5MkU1QlwiLFxuICAgICAgICBmaWxsOmZhbHNlXG5cbn0sIFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdBdmVyYWdlIHNlc3Npb24nLFxuICAgICAgICBkYXRhOm1lYW5fb3RoZXJzLFxuICAgICAgICBib3JkZXJDb2xvcjogXCIjNzJBMkMwXCIsXG4gICAgICAgIGZpbGw6ZmFsc2VcblxuXG4gICAgfV19XG5cbiAgICBsZXQgb3RoZXJzX2dsb2JhbF9pbmRpY2F0b3IgPSByb3VuZF8xX2RlY2ltYWwoYXZlcmFnZV9wZXJmKGxhc3Rfb3RoZXJzLCBtZWFuX290aGVycykpXG5cblxuXG48L3NjcmlwdD4gXG5cbjxkaXYgY2xhc3M9J2JnLXdoaXRlICc+XG5cblxuXG5cbjxkaXYgY2xhc3M9XCJtYi0yMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtYi02IHNoYWRvdyBcIj5cbiAgICAgICAgPGltZyBzcmM9XCJ3b3Jrb3V0Mi5qcGdcIiBhbHQ9XCJjeWNsaW5nXCIgY2xhc3M9XCJvYmplY3QtY292ZXIgaC00OCB3LWZ1bGwgc2hhZG93IHJvdW5kZWQtbWRcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xNiBiZy1ibHVlLTcwMCBib3JkZXItMiBib3JkZXItZ3JheS0zMDAgc2hhZG93LWxnIHJvdW5kZWQtdC1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC1zYW5zIEFyaWFsIHRleHQtY2VudGVyIHAtMiB0ZXh0LTN4bCB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgYmctYmx1ZS0xMDAgcHgtOCB0cmFja2luZy13aWRlc3RcIj5cbiAgICAgICAgV29ya291dCBQZXJmb3JtYW5jZVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjxkaXYgY2xhc3M9J3AtOCc+XG4gICAgPGRpdiBjbGFzcz0ncGItOCc+XG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDAgIG1iLTggXCI+TGFzdCBTZXNzaW9uczwvaDE+XG4gICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRhbGljIGdyaWQgZ3JpZC1jb2xzLTMgZGl2aWRlLXggZGl2aWRlLWdyYXktNDAwXCI+XG4gICAgICAgICAgICB7I2VhY2ggZ2V0X2xhc3RfbmJfc2Vzc2lvbnMoMywgbGlzdF9kYXRlKSBhcyBkYXRlfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+e2NvbnZlcnRfZGF0ZShkYXRlKX08L2Rpdj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgbXQtMTZcIj5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBMZWdzXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzcz0nbS0xMiBjb250YWluZXIgbXgtYXV0byc+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cImZvbnQtc2VtaWJvbGQgbWItNiBtdC04IHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDBcIj5EYXRhIGZvciBsZWdzPC9jYXB0aW9uPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiYm9yZGVyLWdyYXktMzAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+PC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5TcXVhdHMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5TdGFpciBDbGltYnM8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTIgcHktMlwiPkJlbmNoIENsaW1iczwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+TGVnIFByZXNzPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJiZy1ibHVlLTEwMCBib3JkZXIgYm9yZGVyLWdyYXktMzAwXCI+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5EYXRlPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICBcbiAgICAgICAgICAgIHsjZWFjaCBkYXRhX2xhc3Q1IGFzIGRhdGF9XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ2RhdGUnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydTcXVhdHMnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnU3F1YXRzJ11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ1N0YWlyIENsaW1icyddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydTdGFpciBDbGltYnMnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQmVuY2ggQ2xpbWJzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0JlbmNoIENsaW1icyddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydMZWcgUHJlc3MnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnTGVnIFByZXNzJ11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9J3RleHQtY2VudGVyJz4gWW91ciBsYXN0IHNlc3Npb24gd2FzIDxzcGFuIGNsYXNzOmdyZWVuPVwie2xlZ19nbG9iYWxfaW5kaWNhdG9yPj0xMDB9XCIgY2xhc3M6cmVkPVwie2xlZ19nbG9iYWxfaW5kaWNhdG9yPDEwMH1cIj57bGVnX2dsb2JhbF9pbmRpY2F0b3J9JTwvc3Bhbj4gb2YgdGhlIGF2ZXJhZ2Ugb2YgdGhlIHNlc3Npb25zIHdoZXJlIHlvdSB3b3JrZWQgb24gbGVncyA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJtdC04ICBtLTEyICBcIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwidGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG8gZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPlBlcmZvcm1hbmNlIFJhZGFyIENoYXJ0PC9jYXB0aW9uPlxuICAgICAgICAgICAgPENoYXJ0c1JhZGFyTGVnIHtkYXRhX2xlZ19yYWRhcn0gLz4gXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImRpdmlkZS15IG10LTE2XCI+XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgUHVzaC1VcHNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdtLTEyIGNvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPkRhdGEgZm9yIFB1c2gtdXBzPC9jYXB0aW9uPlxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiYm9yZGVyLWdyYXktMzAwIGl0YWxpY1wiPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0yMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+PC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5SZWd1bGFyIDwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+TGF0ZXJhbDwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+SnVtcGluZzwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+Q2xvc2U8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTIgcHktMlwiPlJhaXNlZDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+RGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIFxuICAgICAgICAgICAgeyNlYWNoIGRhdGFfbGFzdDUgYXMgZGF0YSwgaX1cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnZGF0ZSddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ1B1c2gtVXBzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ1B1c2gtVXBzJ11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0xhdGVyYWwgUHVzaC1VcHMnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnTGF0ZXJhbCBQdXNoLVVwcyddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydKdW1waW5nIFB1c2gtVXBzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0p1bXBpbmcgUHVzaC1VcHMnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQ2xvc2UgUHVzaC1VcHMnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQ2xvc2UgUHVzaC1VcHMnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnUmFpc2VkIFB1c2gtVXBzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ1JhaXNlZCBQdXNoLVVwcyddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz0ndGV4dC1jZW50ZXInPiBZb3VyIGxhc3Qgc2Vzc2lvbiB3YXMgPHNwYW4gY2xhc3M6Z3JlZW49XCJ7cHVzaHVwc19nbG9iYWxfaW5kaWNhdG9yPj0xMDB9XCIgY2xhc3M6cmVkPVwie3B1c2h1cHNfZ2xvYmFsX2luZGljYXRvcjwxMDB9XCI+e3B1c2h1cHNfZ2xvYmFsX2luZGljYXRvcn0lPC9zcGFuPiBvZiB0aGUgYXZlcmFnZSBvZiB0aGUgc2Vzc2lvbnMgd2hlcmUgeW91IHdvcmtlZCBvbiBwdXNoLXVwcyA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cIm10LTggIG0tMTIgIFwiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJ0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0byBmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+UGVyZm9ybWFuY2UgUmFkYXIgQ2hhcnQ8L2NhcHRpb24+XG48Q2hhcnRzUmFkYXJQdXNoVXBzIHtkYXRhX3B1c2h1cHNfcmFkYXJ9IC8+IFxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgPGRpdiBjbGFzcz1cImRpdmlkZS15IG10LTE2XCI+XG4gICAgICAgXG4gICAgICAgXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgQWJkb21pbmFsc1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9J20tMTIgY29udGFpbmVyIG14LWF1dG8nPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtYXV0byB0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGNhcHRpb24gY2xhc3M9XCJmb250LXNlbWlib2xkIG1iLTYgbXQtOCB0ZXh0LXhsIGl0YWxpYyB0ZXh0LWJsdWUtNzAwXCI+RGF0YSBmb3IgQWJkb21pbmFsczwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMjAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPjwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+UmVndWxhciA8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTIgcHktMlwiPkxhdGVyYWw8L3RoPlxuICAgICAgICAgICAgPHRoIGNvbHNwYW49MiBjbGFzcz1cInB4LTIgcHktMlwiPkNvcmU8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgXG4gICAgICAgICAgICB7I2VhY2ggZGF0YV9sYXN0NSBhcyBkYXRhfVxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydkYXRlJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQWJkb21pbmFsJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ0FiZG9taW5hbCddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydBYmRvbWluYWwgTGF0ZXJhbCddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydBYmRvbWluYWwgTGF0ZXJhbCddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydDb3JlIEFiZG9taW5hbCddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydDb3JlIEFiZG9taW5hbCddWydOdW1iZXInXX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz0ndGV4dC1jZW50ZXInPiBZb3VyIGxhc3Qgc2Vzc2lvbiB3YXMgPHNwYW4gY2xhc3M6Z3JlZW49XCJ7YWJkb21pbmFsX2dsb2JhbF9pbmRpY2F0b3I+PTEwMH1cIiBjbGFzczpyZWQ9XCJ7YWJkb21pbmFsX2dsb2JhbF9pbmRpY2F0b3I8MTAwfVwiPnthYmRvbWluYWxfZ2xvYmFsX2luZGljYXRvcn0lPC9zcGFuPiBvZiB0aGUgYXZlcmFnZSBvZiB0aGUgc2Vzc2lvbnMgd2hlcmUgeW91IHdvcmtlZCBvbiBhYmRvbWluYWxzIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwibXQtOCAgbS0xMiAgXCI+XG4gICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cInRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvIGZvbnQtc2VtaWJvbGQgbWItNiBtdC04IHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDBcIj5QZXJmb3JtYW5jZSBSYWRhciBDaGFydDwvY2FwdGlvbj5cbjxDaGFydHNSYWRhckFiZG9taW5hbHMge2RhdGFfYWJkb21pbmFsX3JhZGFyfSAvPiAgICAgICAgIDwvZGl2PlxuXG5cbiAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgbXQtMTZcIj5cbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBPdGhlcnNcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8ZGl2IGNsYXNzPSdtLTEyIGNvbnRhaW5lciBteC1hdXRvJz5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVwiZm9udC1zZW1pYm9sZCBtYi02IG10LTggdGV4dC14bCBpdGFsaWMgdGV4dC1ibHVlLTcwMFwiPkRhdGEgZm9yIE90aGVyczwvY2FwdGlvbj5cbiAgICAgICAgICAgIDx0aGVhZCBjbGFzcz1cImJvcmRlci1ncmF5LTMwMCBpdGFsaWNcIj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImJnLWJsdWUtMjAwIGJvcmRlciBib3JkZXItZ3JheS0zMDBcIj5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPjwvdGg+XG4gICAgICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtMiBweS0yXCI+QmVuY2ggPC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5CaWNlcHMgV2VpZ2h0PC90aD5cbiAgICAgICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC0yIHB5LTJcIj5QdWxsLVVwczwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiYmctYmx1ZS0xMDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPkRhdGU8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+U2VyaWVzIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5SZXBldC4gPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlNlcmllcyA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwicHgtMiBweS0yXCI+UmVwZXQuIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJweC0yIHB5LTJcIj5TZXJpZXMgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInB4LTIgcHktMlwiPlJlcGV0LiA8L3RoPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgXG4gICAgICAgICAgICB7I2VhY2ggZGF0YV9sYXN0NSBhcyBkYXRhfVxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydkYXRlJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQmVuY2gnXVsnU2VyaWVzJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQmVuY2gnXVsnTnVtYmVyJ119PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC0yIHB5LTJcIj57ZGF0YVsnQmljZXBzIFdlaWdodCddWydTZXJpZXMnXX08L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTIgcHktMlwiPntkYXRhWydCaWNlcHMgV2VpZ2h0J11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ1B1bGwtVXBzJ11bJ1NlcmllcyddfTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtMiBweS0yXCI+e2RhdGFbJ1B1bGwtVXBzJ11bJ051bWJlciddfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgey9lYWNofVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPSd0ZXh0LWNlbnRlcic+IFlvdXIgbGFzdCBzZXNzaW9uIHdhcyA8c3BhbiBjbGFzczpncmVlbj1cIntvdGhlcnNfZ2xvYmFsX2luZGljYXRvcj49MTAwfVwiIGNsYXNzOnJlZD1cIntvdGhlcnNfZ2xvYmFsX2luZGljYXRvcjwxMDB9XCI+e290aGVyc19nbG9iYWxfaW5kaWNhdG9yfSU8L3NwYW4+IG9mIHRoZSBhdmVyYWdlIG9mIHRoZSBzZXNzaW9ucyB3aGVyZSB5b3Ugd29ya2VkIG9uIG90aGVyIGV4ZXJjaXNlcyA8L2Rpdj5cblxuXG5cbiAgICA8ZGl2IGNsYXNzPVwibXQtOCAgbS0xMiAgXCI+XG4gICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cInRleHQtY2VudGVyIGNvbnRhaW5lciBteC1hdXRvIGZvbnQtc2VtaWJvbGQgbWItNiBtdC04IHRleHQteGwgaXRhbGljIHRleHQtYmx1ZS03MDBcIj5QZXJmb3JtYW5jZSBSYWRhciBDaGFydDwvY2FwdGlvbj5cbiAgICAgICAgICAgIDxDaGFydHNSYWRhck90aGVycyB7ZGF0YV9vdGhlcnNfcmFkYXJ9IC8+IFxuICAgICAgICA8L2Rpdj5cblxuXG48L2Rpdj5cbjwvZGl2PlxuPC9kaXY+XG5cblxuXG4iLCI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IHNlZ21lbnQ7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG5cdHVsIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0fVxuXG5cdC8qIGNsZWFyZml4ICovXG5cdCB1bDo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGNsZWFyOiBib3RoO1xuXHR9XG5cblx0bGkge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHR9XG5cblx0W2FyaWEtY3VycmVudF0ge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdH1cblxuXHRbYXJpYS1jdXJyZW50XTo6YWZ0ZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRjb250ZW50OiAnJztcblx0XHR3aWR0aDogY2FsYygxMDAlIC0gMWVtKTtcblx0XHRoZWlnaHQ6IDJweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LDYyLDApO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGJvdHRvbTogLTFweDtcblx0fVxuXG5cdGEge1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRwYWRkaW5nOiAxZW0gMC41ZW07XG5cdFx0ZGlzcGxheTogYmxvY2s7IFxuXHR9IFxuXG5cdFthcmlhLWN1cnJlbnRdOjphZnRlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxZW0pO1xuXHRcdGhlaWdodDogMnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRib3R0b206IC0xcHg7XG5cdH1cbjwvc3R5bGU+XG5cbjxuYXY+XG48ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB5LTAgYmctYmx1ZS04MDBcIj5cbiAgPGRpdiBjbGFzcz1cImZsZXgtc2hyaW5rLTAgbWwtMTAgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICA8aSBjbGFzcz1cImZhcyBmYS1kcmFmdGluZy1jb21wYXNzIGZhLTJ4IHRleHQtb3JhbmdlLTUwMFwiPjwvaT5cbiAgICA8c3BhbiBjbGFzcz1cIm1sLTEgdGV4dC0zeGwgdGV4dC1ibHVlLTIwMCBmb250LXNlbWlib2xkXCI+U3BvcnRBc3Npc3RhbnQ8L3NwYW4+XG4gIDwvZGl2PlxuICA8aSBjbGFzcz1cImZhcyBmYS1iYXJzIGZhLTJ4IHZpc2libGUgbWQ6aW52aXNpYmxlIG1yLTEwIG1kOm1yLTAgdGV4dC1ibHVlLTIwMCBjdXJzb3ItcG9pbnRlclwiPjwvaT5cbiAgPHVsIGNsYXNzPVwiaGlkZGVuIG1kOmZsZXggb3ZlcmZsb3cteC1oaWRkZW4gbXItMTAgZm9udC1zZW1pYm9sZFwiPlxuICAgIDxsaSBjbGFzcz1cIm1yLTYgcC0xXCI+XG4gICAgICA8YSBjbGFzcz1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ibHVlLTMwMFwiIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09IHVuZGVmaW5lZCA/IFwicGFnZVwiIDogdW5kZWZpbmVkfScgaHJlZj1cIi5cIj5Ib21lPC9hPlxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzPVwibXItNiBwLTFcIj5cbiAgICAgIDxhIGNsYXNzPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJsdWUtMzAwXCIgYXJpYS1jdXJyZW50PSd7c2VnbWVudCA9PT0gXCJuZXdfc2Vzc2lvblwiID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9JyBocmVmPVwibmV3X3Nlc3Npb25cIj5OZXcgU2Vzc2lvbjwvYT5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzcz1cIm1yLTYgcC0xXCI+XG4gICAgICA8YSBjbGFzcz1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ibHVlLTMwMFwiIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09ICdwZXJmb3JtYW5jZScgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0nIGhyZWY9XCJwZXJmb3JtYW5jZVwiPlBlcmZvcm1hbmNlPC9hPlxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzPVwibXItNiBwLTFcIj5cbiAgICAgIDxhIGNsYXNzPVwidGV4dC13aGl0ZSBob3Zlcjp0ZXh0LWJsdWUtMzAwXCIgYXJpYS1jdXJyZW50PSd7c2VnbWVudCA9PT0gXCJhYm91dFwiID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9JyBocmVmPVwiYWJvdXRcIj5BYm91dDwvYT5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzcz1cIm1yLTYgcC0xXCI+XG4gICAgICA8YSBjbGFzcz1cInRleHQtd2hpdGUgaG92ZXI6dGV4dC1ibHVlLTMwMFwiIGFyaWEtY3VycmVudD0ne3NlZ21lbnQgPT09IFwidHV0b3JpYWxcIiA/IFwicGFnZVwiIDogdW5kZWZpbmVkfScgaHJlZj1cInR1dG9yaWFsXCI+VHV0b3JpYWw8L2E+XG4gICAgPC9saT5cbiAgPC91bD5cbjwvZGl2PlxuXG48L25hdj5cbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYuc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IHNlZ21lbnQ7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRtYWluIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0bWF4LXdpZHRoOiA3MmVtO1xuXHRcdC8qIGJhY2tncm91bmQtY29sb3I6ICNlYmY4ZmY7ICovXG5cblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcgLCAjYzVlMWYxICwjRkZGRkZGICApO1xuXHRcdFxuXHRcdC8qIHBhZGRpbmc6IDJlbTsgKi9cblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdH1cbjwvc3R5bGU+XG5cbjxOYXYge3NlZ21lbnR9Lz5cbiA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdiYWNrZ3JvdW5kNC5qcGcnKTsgICAgYmFja2dyb3VuZC1zaXplOiAgICAgY292ZXI7ICAgICAgICAgICAgIFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyAgXCI+IFxuXG48bWFpbj5cblx0PHNsb3Q+PC9zbG90PlxuPC9tYWluPlxuXG48L2Rpdj4iLCI8c2NyaXB0PlxuXHRleHBvcnQgbGV0IHN0YXR1cztcblx0ZXhwb3J0IGxldCBlcnJvcjtcblxuXHRjb25zdCBkZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdGgxLCBwIHtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDIuOGVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuXG5cdHAge1xuXHRcdG1hcmdpbjogMWVtIGF1dG87XG5cdH1cblxuXHRAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHtcblx0XHRoMSB7XG5cdFx0XHRmb250LXNpemU6IDRlbTtcblx0XHR9XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPntzdGF0dXN9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT57c3RhdHVzfTwvaDE+XG5cbjxwPntlcnJvci5tZXNzYWdlfTwvcD5cblxueyNpZiBkZXYgJiYgZXJyb3Iuc3RhY2t9XG5cdDxwcmU+e2Vycm9yLnN0YWNrfTwvcHJlPlxuey9pZn1cbiIsIi8vIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCFcbmltcG9ydCAqIGFzIHJvdXRlXzAgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9uZXdfc2Vzc2lvbnMvc3dpbW1pbmcvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfMSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL25ld19zZXNzaW9ucy9jeWNsaW5nL2luZGV4Lmpzb24uanNcIjtcbmltcG9ydCAqIGFzIHJvdXRlXzIgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9uZXdfc2Vzc2lvbnMvcnVubmluZy9pbmRleC5qc29uLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV8zIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvbmV3X3Nlc3Npb25zL3dvcmtvdXQvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfNCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9pbmRleC5qc29uLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV81IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL2N5Y2xpbmcvaW5kZXguanNvbi5qc1wiO1xuaW1wb3J0ICogYXMgcm91dGVfNiBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9ydW5uaW5nL2luZGV4Lmpzb24uanNcIjtcbmltcG9ydCAqIGFzIHJvdXRlXzcgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvd29ya291dC9pbmRleC5qc29uLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV84IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvaG9tZS9pbmRleC5qc29uLmpzXCI7XG5pbXBvcnQgY29tcG9uZW50XzAsIHsgcHJlbG9hZCBhcyBwcmVsb2FkXzAgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2luZGV4LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xLCB7IHByZWxvYWQgYXMgcHJlbG9hZF8xIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9uZXdfc2Vzc2lvbnMvc3dpbW1pbmcvbmV3X3N3aW1taW5nLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8yLCB7IHByZWxvYWQgYXMgcHJlbG9hZF8yIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9uZXdfc2Vzc2lvbnMvY3ljbGluZy9uZXdfY3ljbGluZy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMywgeyBwcmVsb2FkIGFzIHByZWxvYWRfMyB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvbmV3X3Nlc3Npb25zL3J1bm5pbmcvbmV3X3J1bm5pbmcuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzQsIHsgcHJlbG9hZCBhcyBwcmVsb2FkXzQgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL25ld19zZXNzaW9ucy93b3Jrb3V0L25ld193b3Jrb3V0LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF81IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvbmV3X3Nlc3Npb24uc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzYgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9wZXJmb3JtYW5jZS5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfNyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3R1dG9yaWFsLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF84IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLWNoYXJ0cy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfOSwgeyBwcmVsb2FkIGFzIHByZWxvYWRfOSB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xMCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2N5Y2xpbmctY2hhcnRzLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xMSwgeyBwcmVsb2FkIGFzIHByZWxvYWRfMTEgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy9jeWNsaW5nL2N5Y2xpbmcuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzEyIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3J1bm5pbmcvcnVubmluZy1jaGFydHMuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzEzLCB7IHByZWxvYWQgYXMgcHJlbG9hZF8xMyB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvc3BvcnRzL3J1bm5pbmcvcnVubmluZy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTQgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvd29ya291dC93b3Jrb3V0cHVzaHVwcy1yYWRhci5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfMTUgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9zcG9ydHMvd29ya291dC93b3Jrb3V0b3RoZXJzLXJhZGFyLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xNiBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXRhYmRvLXJhZGFyLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xNyBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXRsZWdzLXJhZGFyLnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF8xOCwgeyBwcmVsb2FkIGFzIHByZWxvYWRfMTggfSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Nwb3J0cy93b3Jrb3V0L3dvcmtvdXQuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzE5IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvYWJvdXQuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzIwIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvQm94LnN2ZWx0ZVwiO1xuaW1wb3J0IHJvb3QgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZVwiO1xuaW1wb3J0IGVycm9yIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZVwiO1xuXG5jb25zdCBkID0gZGVjb2RlVVJJQ29tcG9uZW50O1xuXG5leHBvcnQgY29uc3QgbWFuaWZlc3QgPSB7XG5cdHNlcnZlcl9yb3V0ZXM6IFtcblx0XHR7XG5cdFx0XHQvLyBuZXdfc2Vzc2lvbnMvc3dpbW1pbmcvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC9zd2ltbWluZ1xcLmpzb24kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV8wLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIG5ld19zZXNzaW9ucy9jeWNsaW5nL2luZGV4Lmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwvY3ljbGluZ1xcLmpzb24kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV8xLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIG5ld19zZXNzaW9ucy9ydW5uaW5nL2luZGV4Lmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwvcnVubmluZ1xcLmpzb24kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV8yLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIG5ld19zZXNzaW9ucy93b3Jrb3V0L2luZGV4Lmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwvd29ya291dFxcLmpzb24kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV8zLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9zd2ltbWluZy9pbmRleC5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3N3aW1taW5nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzQsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL2N5Y2xpbmcvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9jeWNsaW5nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzUsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3J1bm5pbmcvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9ydW5uaW5nXFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzYsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3dvcmtvdXQvaW5kZXguanNvbi5qc1xuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwuanNvbiQvLFxuXHRcdFx0aGFuZGxlcnM6IHJvdXRlXzcsXG5cdFx0XHRwYXJhbXM6ICgpID0+ICh7fSlcblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gaG9tZS9pbmRleC5qc29uLmpzXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2hvbWVcXC5qc29uJC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfOCxcblx0XHRcdHBhcmFtczogKCkgPT4gKHt9KVxuXHRcdH1cblx0XSxcblxuXHRwYWdlczogW1xuXHRcdHtcblx0XHRcdC8vIGluZGV4LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJpbmRleFwiLCBmaWxlOiBcImluZGV4LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8wLCBwcmVsb2FkOiBwcmVsb2FkXzAgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBuZXdfc2Vzc2lvbnMvc3dpbW1pbmcvbmV3X3N3aW1taW5nLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC9zd2ltbWluZ1xcL25ld19zd2ltbWluZ1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJuZXdfc2Vzc2lvbnNfc3dpbW1pbmdfbmV3X3N3aW1taW5nXCIsIGZpbGU6IFwibmV3X3Nlc3Npb25zL3N3aW1taW5nL25ld19zd2ltbWluZy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMSwgcHJlbG9hZDogcHJlbG9hZF8xIH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gbmV3X3Nlc3Npb25zL2N5Y2xpbmcvbmV3X2N5Y2xpbmcuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL25ld19zZXNzaW9uc1xcL2N5Y2xpbmdcXC9uZXdfY3ljbGluZ1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJuZXdfc2Vzc2lvbnNfY3ljbGluZ19uZXdfY3ljbGluZ1wiLCBmaWxlOiBcIm5ld19zZXNzaW9ucy9jeWNsaW5nL25ld19jeWNsaW5nLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yLCBwcmVsb2FkOiBwcmVsb2FkXzIgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBuZXdfc2Vzc2lvbnMvcnVubmluZy9uZXdfcnVubmluZy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvbmV3X3Nlc3Npb25zXFwvcnVubmluZ1xcL25ld19ydW5uaW5nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcIm5ld19zZXNzaW9uc19ydW5uaW5nX25ld19ydW5uaW5nXCIsIGZpbGU6IFwibmV3X3Nlc3Npb25zL3J1bm5pbmcvbmV3X3J1bm5pbmcuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzMsIHByZWxvYWQ6IHByZWxvYWRfMyB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIG5ld19zZXNzaW9ucy93b3Jrb3V0L25ld193b3Jrb3V0LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9uZXdfc2Vzc2lvbnNcXC93b3Jrb3V0XFwvbmV3X3dvcmtvdXRcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwibmV3X3Nlc3Npb25zX3dvcmtvdXRfbmV3X3dvcmtvdXRcIiwgZmlsZTogXCJuZXdfc2Vzc2lvbnMvd29ya291dC9uZXdfd29ya291dC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfNCwgcHJlbG9hZDogcHJlbG9hZF80IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gbmV3X3Nlc3Npb24uc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL25ld19zZXNzaW9uXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcIm5ld19zZXNzaW9uXCIsIGZpbGU6IFwibmV3X3Nlc3Npb24uc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzUgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBwZXJmb3JtYW5jZS5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcGVyZm9ybWFuY2VcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwicGVyZm9ybWFuY2VcIiwgZmlsZTogXCJwZXJmb3JtYW5jZS5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfNiB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHR1dG9yaWFsLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC90dXRvcmlhbFxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJ0dXRvcmlhbFwiLCBmaWxlOiBcInR1dG9yaWFsLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF83IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLWNoYXJ0cy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvc3dpbW1pbmdcXC9zd2ltbWluZy1jaGFydHNcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwic3BvcnRzX3N3aW1taW5nX3N3aW1taW5nJDQ1Y2hhcnRzXCIsIGZpbGU6IFwic3BvcnRzL3N3aW1taW5nL3N3aW1taW5nLWNoYXJ0cy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfOCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9zd2ltbWluZy9zd2ltbWluZy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvc3dpbW1pbmdcXC9zd2ltbWluZ1xcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfc3dpbW1pbmdfc3dpbW1pbmdcIiwgZmlsZTogXCJzcG9ydHMvc3dpbW1pbmcvc3dpbW1pbmcuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzksIHByZWxvYWQ6IHByZWxvYWRfOSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9jeWNsaW5nL2N5Y2xpbmctY2hhcnRzLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9jeWNsaW5nXFwvY3ljbGluZy1jaGFydHNcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwic3BvcnRzX2N5Y2xpbmdfY3ljbGluZyQ0NWNoYXJ0c1wiLCBmaWxlOiBcInNwb3J0cy9jeWNsaW5nL2N5Y2xpbmctY2hhcnRzLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xMCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9jeWNsaW5nL2N5Y2xpbmcuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL2N5Y2xpbmdcXC9jeWNsaW5nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19jeWNsaW5nX2N5Y2xpbmdcIiwgZmlsZTogXCJzcG9ydHMvY3ljbGluZy9jeWNsaW5nLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xMSwgcHJlbG9hZDogcHJlbG9hZF8xMSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9ydW5uaW5nL3J1bm5pbmctY2hhcnRzLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC9ydW5uaW5nXFwvcnVubmluZy1jaGFydHNcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwic3BvcnRzX3J1bm5pbmdfcnVubmluZyQ0NWNoYXJ0c1wiLCBmaWxlOiBcInNwb3J0cy9ydW5uaW5nL3J1bm5pbmctY2hhcnRzLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xMiB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy9ydW5uaW5nL3J1bm5pbmcuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3J1bm5pbmdcXC9ydW5uaW5nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c19ydW5uaW5nX3J1bm5pbmdcIiwgZmlsZTogXCJzcG9ydHMvcnVubmluZy9ydW5uaW5nLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xMywgcHJlbG9hZDogcHJlbG9hZF8xMyB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy93b3Jrb3V0L3dvcmtvdXRwdXNodXBzLXJhZGFyLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9zcG9ydHNcXC93b3Jrb3V0XFwvd29ya291dHB1c2h1cHMtcmFkYXJcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwic3BvcnRzX3dvcmtvdXRfd29ya291dHB1c2h1cHMkNDVyYWRhclwiLCBmaWxlOiBcInNwb3J0cy93b3Jrb3V0L3dvcmtvdXRwdXNodXBzLXJhZGFyLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8xNCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHNwb3J0cy93b3Jrb3V0L3dvcmtvdXRvdGhlcnMtcmFkYXIuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3dvcmtvdXRcXC93b3Jrb3V0b3RoZXJzLXJhZGFyXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0eyBuYW1lOiBcInNwb3J0c193b3Jrb3V0X3dvcmtvdXRvdGhlcnMkNDVyYWRhclwiLCBmaWxlOiBcInNwb3J0cy93b3Jrb3V0L3dvcmtvdXRvdGhlcnMtcmFkYXIuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzE1IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3dvcmtvdXQvd29ya291dGFiZG8tcmFkYXIuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3dvcmtvdXRcXC93b3Jrb3V0YWJkby1yYWRhclxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfd29ya291dF93b3Jrb3V0YWJkbyQ0NXJhZGFyXCIsIGZpbGU6IFwic3BvcnRzL3dvcmtvdXQvd29ya291dGFiZG8tcmFkYXIuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzE2IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3dvcmtvdXQvd29ya291dGxlZ3MtcmFkYXIuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL3Nwb3J0c1xcL3dvcmtvdXRcXC93b3Jrb3V0bGVncy1yYWRhclxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHsgbmFtZTogXCJzcG9ydHNfd29ya291dF93b3Jrb3V0bGVncyQ0NXJhZGFyXCIsIGZpbGU6IFwic3BvcnRzL3dvcmtvdXQvd29ya291dGxlZ3MtcmFkYXIuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzE3IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gc3BvcnRzL3dvcmtvdXQvd29ya291dC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvc3BvcnRzXFwvd29ya291dFxcL3dvcmtvdXRcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwic3BvcnRzX3dvcmtvdXRfd29ya291dFwiLCBmaWxlOiBcInNwb3J0cy93b3Jrb3V0L3dvcmtvdXQuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzE4LCBwcmVsb2FkOiBwcmVsb2FkXzE4IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gYWJvdXQuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2Fib3V0XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcImFib3V0XCIsIGZpbGU6IFwiYWJvdXQuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzE5IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gQm94LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9Cb3hcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiQm94XCIsIGZpbGU6IFwiQm94LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8yMCB9XG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXG5cdHJvb3QsXG5cdHJvb3RfcHJlbG9hZDogKCkgPT4ge30sXG5cdGVycm9yXG59O1xuXG5leHBvcnQgY29uc3QgYnVpbGRfZGlyID0gXCJfX3NhcHBlcl9fL2RldlwiO1xuXG5leHBvcnQgY29uc3Qgc3JjX2RpciA9IFwic3JjXCI7XG5cbmV4cG9ydCBjb25zdCBkZXYgPSB0cnVlOyIsImltcG9ydCB7IG5vb3AsIHNhZmVfbm90X2VxdWFsLCBzdWJzY3JpYmUsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuZXhwb3J0IHsgZ2V0X3N0b3JlX3ZhbHVlIGFzIGdldCB9IGZyb20gJy4uL2ludGVybmFsJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZSxcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPX1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICBsZXQgc3RvcDtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgaWYgKHNhZmVfbm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBzWzFdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICBzdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICB9XG4gICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUgfTtcbn1cbmZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuICAgIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KHN0b3Jlcyk7XG4gICAgY29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlXG4gICAgICAgID8gW3N0b3Jlc11cbiAgICAgICAgOiBzdG9yZXM7XG4gICAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gICAgcmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQpID0+IHtcbiAgICAgICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHBlbmRpbmcgPSAwO1xuICAgICAgICBsZXQgY2xlYW51cCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0KTtcbiAgICAgICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICAgICAgc2V0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwID0gaXNfZnVuY3Rpb24ocmVzdWx0KSA/IHJlc3VsdCA6IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT4gc3Vic2NyaWJlKHN0b3JlLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcGVuZGluZyAmPSB+KDEgPDwgaSk7XG4gICAgICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgc3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nIHw9ICgxIDw8IGkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHN5bmMoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBkZXJpdmVkLCByZWFkYWJsZSwgd3JpdGFibGUgfTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuZXhwb3J0IGNvbnN0IENPTlRFWFRfS0VZID0ge307XG5cbmV4cG9ydCBjb25zdCBwcmVsb2FkID0gKCkgPT4gKHt9KTsiLCI8IS0tIFRoaXMgZmlsZSBpcyBnZW5lcmF0ZWQgYnkgU2FwcGVyIOKAlCBkbyBub3QgZWRpdCBpdCEgLS0+XG48c2NyaXB0PlxuXHRpbXBvcnQgeyBzZXRDb250ZXh0LCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCB7IENPTlRFWFRfS0VZIH0gZnJvbSAnLi9zaGFyZWQnO1xuXHRpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSc7XG5cdGltcG9ydCBFcnJvciBmcm9tICcuLi8uLi8uLi9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCBzdG9yZXM7XG5cdGV4cG9ydCBsZXQgZXJyb3I7XG5cdGV4cG9ydCBsZXQgc3RhdHVzO1xuXHRleHBvcnQgbGV0IHNlZ21lbnRzO1xuXHRleHBvcnQgbGV0IGxldmVsMDtcblx0ZXhwb3J0IGxldCBsZXZlbDEgPSBudWxsO1xuXHRleHBvcnQgbGV0IG5vdGlmeTtcblxuXHRhZnRlclVwZGF0ZShub3RpZnkpO1xuXHRzZXRDb250ZXh0KENPTlRFWFRfS0VZLCBzdG9yZXMpO1xuPC9zY3JpcHQ+XG5cbjxMYXlvdXQgc2VnbWVudD1cIntzZWdtZW50c1swXX1cIiB7Li4ubGV2ZWwwLnByb3BzfT5cblx0eyNpZiBlcnJvcn1cblx0XHQ8RXJyb3Ige2Vycm9yfSB7c3RhdHVzfS8+XG5cdHs6ZWxzZX1cblx0XHQ8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPVwie2xldmVsMS5jb21wb25lbnR9XCIgey4uLmxldmVsMS5wcm9wc30vPlxuXHR7L2lmfVxuPC9MYXlvdXQ+IiwiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgZGV2LCBidWlsZF9kaXIsIHNyY19kaXIsIG1hbmlmZXN0IH0gZnJvbSAnLi9pbnRlcm5hbC9tYW5pZmVzdC1zZXJ2ZXInO1xuaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuaW1wb3J0IFN0cmVhbSBmcm9tICdzdHJlYW0nO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IHpsaWIgZnJvbSAnemxpYic7XG5pbXBvcnQgQXBwIGZyb20gJy4vaW50ZXJuYWwvQXBwLnN2ZWx0ZSc7XG5cbi8qKlxuICogQHBhcmFtIHR5cGVNYXAgW09iamVjdF0gTWFwIG9mIE1JTUUgdHlwZSAtPiBBcnJheVtleHRlbnNpb25zXVxuICogQHBhcmFtIC4uLlxuICovXG5mdW5jdGlvbiBNaW1lKCkge1xuICB0aGlzLl90eXBlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX2V4dGVuc2lvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5kZWZpbmUoYXJndW1lbnRzW2ldKTtcbiAgfVxuXG4gIHRoaXMuZGVmaW5lID0gdGhpcy5kZWZpbmUuYmluZCh0aGlzKTtcbiAgdGhpcy5nZXRUeXBlID0gdGhpcy5nZXRUeXBlLmJpbmQodGhpcyk7XG4gIHRoaXMuZ2V0RXh0ZW5zaW9uID0gdGhpcy5nZXRFeHRlbnNpb24uYmluZCh0aGlzKTtcbn1cblxuLyoqXG4gKiBEZWZpbmUgbWltZXR5cGUgLT4gZXh0ZW5zaW9uIG1hcHBpbmdzLiAgRWFjaCBrZXkgaXMgYSBtaW1lLXR5cGUgdGhhdCBtYXBzXG4gKiB0byBhbiBhcnJheSBvZiBleHRlbnNpb25zIGFzc29jaWF0ZWQgd2l0aCB0aGUgdHlwZS4gIFRoZSBmaXJzdCBleHRlbnNpb24gaXNcbiAqIHVzZWQgYXMgdGhlIGRlZmF1bHQgZXh0ZW5zaW9uIGZvciB0aGUgdHlwZS5cbiAqXG4gKiBlLmcuIG1pbWUuZGVmaW5lKHsnYXVkaW8vb2dnJywgWydvZ2EnLCAnb2dnJywgJ3NweCddfSk7XG4gKlxuICogSWYgYSB0eXBlIGRlY2xhcmVzIGFuIGV4dGVuc2lvbiB0aGF0IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCwgYW4gZXJyb3Igd2lsbFxuICogYmUgdGhyb3duLiAgVG8gc3VwcHJlc3MgdGhpcyBlcnJvciBhbmQgZm9yY2UgdGhlIGV4dGVuc2lvbiB0byBiZSBhc3NvY2lhdGVkXG4gKiB3aXRoIHRoZSBuZXcgdHlwZSwgcGFzcyBgZm9yY2VgPXRydWUuICBBbHRlcm5hdGl2ZWx5LCB5b3UgbWF5IHByZWZpeCB0aGVcbiAqIGV4dGVuc2lvbiB3aXRoIFwiKlwiIHRvIG1hcCB0aGUgdHlwZSB0byBleHRlbnNpb24sIHdpdGhvdXQgbWFwcGluZyB0aGVcbiAqIGV4dGVuc2lvbiB0byB0aGUgdHlwZS5cbiAqXG4gKiBlLmcuIG1pbWUuZGVmaW5lKHsnYXVkaW8vd2F2JywgWyd3YXYnXX0sIHsnYXVkaW8veC13YXYnLCBbJyp3YXYnXX0pO1xuICpcbiAqXG4gKiBAcGFyYW0gbWFwIChPYmplY3QpIHR5cGUgZGVmaW5pdGlvbnNcbiAqIEBwYXJhbSBmb3JjZSAoQm9vbGVhbikgaWYgdHJ1ZSwgZm9yY2Ugb3ZlcnJpZGluZyBvZiBleGlzdGluZyBkZWZpbml0aW9uc1xuICovXG5NaW1lLnByb3RvdHlwZS5kZWZpbmUgPSBmdW5jdGlvbih0eXBlTWFwLCBmb3JjZSkge1xuICBmb3IgKHZhciB0eXBlIGluIHR5cGVNYXApIHtcbiAgICB2YXIgZXh0ZW5zaW9ucyA9IHR5cGVNYXBbdHlwZV0ubWFwKGZ1bmN0aW9uKHQpIHtyZXR1cm4gdC50b0xvd2VyQ2FzZSgpfSk7XG4gICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXh0ZW5zaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGV4dCA9IGV4dGVuc2lvbnNbaV07XG5cbiAgICAgIC8vICcqJyBwcmVmaXggPSBub3QgdGhlIHByZWZlcnJlZCB0eXBlIGZvciB0aGlzIGV4dGVuc2lvbi4gIFNvIGZpeHVwIHRoZVxuICAgICAgLy8gZXh0ZW5zaW9uLCBhbmQgc2tpcCBpdC5cbiAgICAgIGlmIChleHRbMF0gPT0gJyonKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcmNlICYmIChleHQgaW4gdGhpcy5fdHlwZXMpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnQXR0ZW1wdCB0byBjaGFuZ2UgbWFwcGluZyBmb3IgXCInICsgZXh0ICtcbiAgICAgICAgICAnXCIgZXh0ZW5zaW9uIGZyb20gXCInICsgdGhpcy5fdHlwZXNbZXh0XSArICdcIiB0byBcIicgKyB0eXBlICtcbiAgICAgICAgICAnXCIuIFBhc3MgYGZvcmNlPXRydWVgIHRvIGFsbG93IHRoaXMsIG90aGVyd2lzZSByZW1vdmUgXCInICsgZXh0ICtcbiAgICAgICAgICAnXCIgZnJvbSB0aGUgbGlzdCBvZiBleHRlbnNpb25zIGZvciBcIicgKyB0eXBlICsgJ1wiLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdHlwZXNbZXh0XSA9IHR5cGU7XG4gICAgfVxuXG4gICAgLy8gVXNlIGZpcnN0IGV4dGVuc2lvbiBhcyBkZWZhdWx0XG4gICAgaWYgKGZvcmNlIHx8ICF0aGlzLl9leHRlbnNpb25zW3R5cGVdKSB7XG4gICAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uc1swXTtcbiAgICAgIHRoaXMuX2V4dGVuc2lvbnNbdHlwZV0gPSAoZXh0WzBdICE9ICcqJykgPyBleHQgOiBleHQuc3Vic3RyKDEpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBMb29rdXAgYSBtaW1lIHR5cGUgYmFzZWQgb24gZXh0ZW5zaW9uXG4gKi9cbk1pbWUucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHBhdGggPSBTdHJpbmcocGF0aCk7XG4gIHZhciBsYXN0ID0gcGF0aC5yZXBsYWNlKC9eLipbL1xcXFxdLywgJycpLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBleHQgPSBsYXN0LnJlcGxhY2UoL14uKlxcLi8sICcnKS50b0xvd2VyQ2FzZSgpO1xuXG4gIHZhciBoYXNQYXRoID0gbGFzdC5sZW5ndGggPCBwYXRoLmxlbmd0aDtcbiAgdmFyIGhhc0RvdCA9IGV4dC5sZW5ndGggPCBsYXN0Lmxlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIChoYXNEb3QgfHwgIWhhc1BhdGgpICYmIHRoaXMuX3R5cGVzW2V4dF0gfHwgbnVsbDtcbn07XG5cbi8qKlxuICogUmV0dXJuIGZpbGUgZXh0ZW5zaW9uIGFzc29jaWF0ZWQgd2l0aCBhIG1pbWUgdHlwZVxuICovXG5NaW1lLnByb3RvdHlwZS5nZXRFeHRlbnNpb24gPSBmdW5jdGlvbih0eXBlKSB7XG4gIHR5cGUgPSAvXlxccyooW147XFxzXSopLy50ZXN0KHR5cGUpICYmIFJlZ0V4cC4kMTtcbiAgcmV0dXJuIHR5cGUgJiYgdGhpcy5fZXh0ZW5zaW9uc1t0eXBlLnRvTG93ZXJDYXNlKCldIHx8IG51bGw7XG59O1xuXG52YXIgTWltZV8xID0gTWltZTtcblxudmFyIHN0YW5kYXJkID0ge1wiYXBwbGljYXRpb24vYW5kcmV3LWluc2V0XCI6W1wiZXpcIl0sXCJhcHBsaWNhdGlvbi9hcHBsaXh3YXJlXCI6W1wiYXdcIl0sXCJhcHBsaWNhdGlvbi9hdG9tK3htbFwiOltcImF0b21cIl0sXCJhcHBsaWNhdGlvbi9hdG9tY2F0K3htbFwiOltcImF0b21jYXRcIl0sXCJhcHBsaWNhdGlvbi9hdG9tc3ZjK3htbFwiOltcImF0b21zdmNcIl0sXCJhcHBsaWNhdGlvbi9iZG9jXCI6W1wiYmRvY1wiXSxcImFwcGxpY2F0aW9uL2NjeG1sK3htbFwiOltcImNjeG1sXCJdLFwiYXBwbGljYXRpb24vY2RtaS1jYXBhYmlsaXR5XCI6W1wiY2RtaWFcIl0sXCJhcHBsaWNhdGlvbi9jZG1pLWNvbnRhaW5lclwiOltcImNkbWljXCJdLFwiYXBwbGljYXRpb24vY2RtaS1kb21haW5cIjpbXCJjZG1pZFwiXSxcImFwcGxpY2F0aW9uL2NkbWktb2JqZWN0XCI6W1wiY2RtaW9cIl0sXCJhcHBsaWNhdGlvbi9jZG1pLXF1ZXVlXCI6W1wiY2RtaXFcIl0sXCJhcHBsaWNhdGlvbi9jdS1zZWVtZVwiOltcImN1XCJdLFwiYXBwbGljYXRpb24vZGFzaCt4bWxcIjpbXCJtcGRcIl0sXCJhcHBsaWNhdGlvbi9kYXZtb3VudCt4bWxcIjpbXCJkYXZtb3VudFwiXSxcImFwcGxpY2F0aW9uL2RvY2Jvb2sreG1sXCI6W1wiZGJrXCJdLFwiYXBwbGljYXRpb24vZHNzYytkZXJcIjpbXCJkc3NjXCJdLFwiYXBwbGljYXRpb24vZHNzYyt4bWxcIjpbXCJ4ZHNzY1wiXSxcImFwcGxpY2F0aW9uL2VjbWFzY3JpcHRcIjpbXCJlY21hXCIsXCJlc1wiXSxcImFwcGxpY2F0aW9uL2VtbWEreG1sXCI6W1wiZW1tYVwiXSxcImFwcGxpY2F0aW9uL2VwdWIremlwXCI6W1wiZXB1YlwiXSxcImFwcGxpY2F0aW9uL2V4aVwiOltcImV4aVwiXSxcImFwcGxpY2F0aW9uL2ZvbnQtdGRwZnJcIjpbXCJwZnJcIl0sXCJhcHBsaWNhdGlvbi9nZW8ranNvblwiOltcImdlb2pzb25cIl0sXCJhcHBsaWNhdGlvbi9nbWwreG1sXCI6W1wiZ21sXCJdLFwiYXBwbGljYXRpb24vZ3B4K3htbFwiOltcImdweFwiXSxcImFwcGxpY2F0aW9uL2d4ZlwiOltcImd4ZlwiXSxcImFwcGxpY2F0aW9uL2d6aXBcIjpbXCJnelwiXSxcImFwcGxpY2F0aW9uL2hqc29uXCI6W1wiaGpzb25cIl0sXCJhcHBsaWNhdGlvbi9oeXBlcnN0dWRpb1wiOltcInN0a1wiXSxcImFwcGxpY2F0aW9uL2lua21sK3htbFwiOltcImlua1wiLFwiaW5rbWxcIl0sXCJhcHBsaWNhdGlvbi9pcGZpeFwiOltcImlwZml4XCJdLFwiYXBwbGljYXRpb24vamF2YS1hcmNoaXZlXCI6W1wiamFyXCIsXCJ3YXJcIixcImVhclwiXSxcImFwcGxpY2F0aW9uL2phdmEtc2VyaWFsaXplZC1vYmplY3RcIjpbXCJzZXJcIl0sXCJhcHBsaWNhdGlvbi9qYXZhLXZtXCI6W1wiY2xhc3NcIl0sXCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCI6W1wianNcIixcIm1qc1wiXSxcImFwcGxpY2F0aW9uL2pzb25cIjpbXCJqc29uXCIsXCJtYXBcIl0sXCJhcHBsaWNhdGlvbi9qc29uNVwiOltcImpzb241XCJdLFwiYXBwbGljYXRpb24vanNvbm1sK2pzb25cIjpbXCJqc29ubWxcIl0sXCJhcHBsaWNhdGlvbi9sZCtqc29uXCI6W1wianNvbmxkXCJdLFwiYXBwbGljYXRpb24vbG9zdCt4bWxcIjpbXCJsb3N0eG1sXCJdLFwiYXBwbGljYXRpb24vbWFjLWJpbmhleDQwXCI6W1wiaHF4XCJdLFwiYXBwbGljYXRpb24vbWFjLWNvbXBhY3Rwcm9cIjpbXCJjcHRcIl0sXCJhcHBsaWNhdGlvbi9tYWRzK3htbFwiOltcIm1hZHNcIl0sXCJhcHBsaWNhdGlvbi9tYW5pZmVzdCtqc29uXCI6W1wid2VibWFuaWZlc3RcIl0sXCJhcHBsaWNhdGlvbi9tYXJjXCI6W1wibXJjXCJdLFwiYXBwbGljYXRpb24vbWFyY3htbCt4bWxcIjpbXCJtcmN4XCJdLFwiYXBwbGljYXRpb24vbWF0aGVtYXRpY2FcIjpbXCJtYVwiLFwibmJcIixcIm1iXCJdLFwiYXBwbGljYXRpb24vbWF0aG1sK3htbFwiOltcIm1hdGhtbFwiXSxcImFwcGxpY2F0aW9uL21ib3hcIjpbXCJtYm94XCJdLFwiYXBwbGljYXRpb24vbWVkaWFzZXJ2ZXJjb250cm9sK3htbFwiOltcIm1zY21sXCJdLFwiYXBwbGljYXRpb24vbWV0YWxpbmsreG1sXCI6W1wibWV0YWxpbmtcIl0sXCJhcHBsaWNhdGlvbi9tZXRhbGluazQreG1sXCI6W1wibWV0YTRcIl0sXCJhcHBsaWNhdGlvbi9tZXRzK3htbFwiOltcIm1ldHNcIl0sXCJhcHBsaWNhdGlvbi9tb2RzK3htbFwiOltcIm1vZHNcIl0sXCJhcHBsaWNhdGlvbi9tcDIxXCI6W1wibTIxXCIsXCJtcDIxXCJdLFwiYXBwbGljYXRpb24vbXA0XCI6W1wibXA0c1wiLFwibTRwXCJdLFwiYXBwbGljYXRpb24vbXN3b3JkXCI6W1wiZG9jXCIsXCJkb3RcIl0sXCJhcHBsaWNhdGlvbi9teGZcIjpbXCJteGZcIl0sXCJhcHBsaWNhdGlvbi9uLXF1YWRzXCI6W1wibnFcIl0sXCJhcHBsaWNhdGlvbi9uLXRyaXBsZXNcIjpbXCJudFwiXSxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiOltcImJpblwiLFwiZG1zXCIsXCJscmZcIixcIm1hclwiLFwic29cIixcImRpc3RcIixcImRpc3R6XCIsXCJwa2dcIixcImJwa1wiLFwiZHVtcFwiLFwiZWxjXCIsXCJkZXBsb3lcIixcImV4ZVwiLFwiZGxsXCIsXCJkZWJcIixcImRtZ1wiLFwiaXNvXCIsXCJpbWdcIixcIm1zaVwiLFwibXNwXCIsXCJtc21cIixcImJ1ZmZlclwiXSxcImFwcGxpY2F0aW9uL29kYVwiOltcIm9kYVwiXSxcImFwcGxpY2F0aW9uL29lYnBzLXBhY2thZ2UreG1sXCI6W1wib3BmXCJdLFwiYXBwbGljYXRpb24vb2dnXCI6W1wib2d4XCJdLFwiYXBwbGljYXRpb24vb21kb2MreG1sXCI6W1wib21kb2NcIl0sXCJhcHBsaWNhdGlvbi9vbmVub3RlXCI6W1wib25ldG9jXCIsXCJvbmV0b2MyXCIsXCJvbmV0bXBcIixcIm9uZXBrZ1wiXSxcImFwcGxpY2F0aW9uL294cHNcIjpbXCJveHBzXCJdLFwiYXBwbGljYXRpb24vcGF0Y2gtb3BzLWVycm9yK3htbFwiOltcInhlclwiXSxcImFwcGxpY2F0aW9uL3BkZlwiOltcInBkZlwiXSxcImFwcGxpY2F0aW9uL3BncC1lbmNyeXB0ZWRcIjpbXCJwZ3BcIl0sXCJhcHBsaWNhdGlvbi9wZ3Atc2lnbmF0dXJlXCI6W1wiYXNjXCIsXCJzaWdcIl0sXCJhcHBsaWNhdGlvbi9waWNzLXJ1bGVzXCI6W1wicHJmXCJdLFwiYXBwbGljYXRpb24vcGtjczEwXCI6W1wicDEwXCJdLFwiYXBwbGljYXRpb24vcGtjczctbWltZVwiOltcInA3bVwiLFwicDdjXCJdLFwiYXBwbGljYXRpb24vcGtjczctc2lnbmF0dXJlXCI6W1wicDdzXCJdLFwiYXBwbGljYXRpb24vcGtjczhcIjpbXCJwOFwiXSxcImFwcGxpY2F0aW9uL3BraXgtYXR0ci1jZXJ0XCI6W1wiYWNcIl0sXCJhcHBsaWNhdGlvbi9wa2l4LWNlcnRcIjpbXCJjZXJcIl0sXCJhcHBsaWNhdGlvbi9wa2l4LWNybFwiOltcImNybFwiXSxcImFwcGxpY2F0aW9uL3BraXgtcGtpcGF0aFwiOltcInBraXBhdGhcIl0sXCJhcHBsaWNhdGlvbi9wa2l4Y21wXCI6W1wicGtpXCJdLFwiYXBwbGljYXRpb24vcGxzK3htbFwiOltcInBsc1wiXSxcImFwcGxpY2F0aW9uL3Bvc3RzY3JpcHRcIjpbXCJhaVwiLFwiZXBzXCIsXCJwc1wiXSxcImFwcGxpY2F0aW9uL3Bza2MreG1sXCI6W1wicHNrY3htbFwiXSxcImFwcGxpY2F0aW9uL3JhbWwreWFtbFwiOltcInJhbWxcIl0sXCJhcHBsaWNhdGlvbi9yZGYreG1sXCI6W1wicmRmXCIsXCJvd2xcIl0sXCJhcHBsaWNhdGlvbi9yZWdpbmZvK3htbFwiOltcInJpZlwiXSxcImFwcGxpY2F0aW9uL3JlbGF4LW5nLWNvbXBhY3Qtc3ludGF4XCI6W1wicm5jXCJdLFwiYXBwbGljYXRpb24vcmVzb3VyY2UtbGlzdHMreG1sXCI6W1wicmxcIl0sXCJhcHBsaWNhdGlvbi9yZXNvdXJjZS1saXN0cy1kaWZmK3htbFwiOltcInJsZFwiXSxcImFwcGxpY2F0aW9uL3Jscy1zZXJ2aWNlcyt4bWxcIjpbXCJyc1wiXSxcImFwcGxpY2F0aW9uL3Jwa2ktZ2hvc3RidXN0ZXJzXCI6W1wiZ2JyXCJdLFwiYXBwbGljYXRpb24vcnBraS1tYW5pZmVzdFwiOltcIm1mdFwiXSxcImFwcGxpY2F0aW9uL3Jwa2ktcm9hXCI6W1wicm9hXCJdLFwiYXBwbGljYXRpb24vcnNkK3htbFwiOltcInJzZFwiXSxcImFwcGxpY2F0aW9uL3Jzcyt4bWxcIjpbXCJyc3NcIl0sXCJhcHBsaWNhdGlvbi9ydGZcIjpbXCJydGZcIl0sXCJhcHBsaWNhdGlvbi9zYm1sK3htbFwiOltcInNibWxcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLWN2LXJlcXVlc3RcIjpbXCJzY3FcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLWN2LXJlc3BvbnNlXCI6W1wic2NzXCJdLFwiYXBwbGljYXRpb24vc2N2cC12cC1yZXF1ZXN0XCI6W1wic3BxXCJdLFwiYXBwbGljYXRpb24vc2N2cC12cC1yZXNwb25zZVwiOltcInNwcFwiXSxcImFwcGxpY2F0aW9uL3NkcFwiOltcInNkcFwiXSxcImFwcGxpY2F0aW9uL3NldC1wYXltZW50LWluaXRpYXRpb25cIjpbXCJzZXRwYXlcIl0sXCJhcHBsaWNhdGlvbi9zZXQtcmVnaXN0cmF0aW9uLWluaXRpYXRpb25cIjpbXCJzZXRyZWdcIl0sXCJhcHBsaWNhdGlvbi9zaGYreG1sXCI6W1wic2hmXCJdLFwiYXBwbGljYXRpb24vc2lldmVcIjpbXCJzaXZcIixcInNpZXZlXCJdLFwiYXBwbGljYXRpb24vc21pbCt4bWxcIjpbXCJzbWlcIixcInNtaWxcIl0sXCJhcHBsaWNhdGlvbi9zcGFycWwtcXVlcnlcIjpbXCJycVwiXSxcImFwcGxpY2F0aW9uL3NwYXJxbC1yZXN1bHRzK3htbFwiOltcInNyeFwiXSxcImFwcGxpY2F0aW9uL3NyZ3NcIjpbXCJncmFtXCJdLFwiYXBwbGljYXRpb24vc3Jncyt4bWxcIjpbXCJncnhtbFwiXSxcImFwcGxpY2F0aW9uL3NydSt4bWxcIjpbXCJzcnVcIl0sXCJhcHBsaWNhdGlvbi9zc2RsK3htbFwiOltcInNzZGxcIl0sXCJhcHBsaWNhdGlvbi9zc21sK3htbFwiOltcInNzbWxcIl0sXCJhcHBsaWNhdGlvbi90ZWkreG1sXCI6W1widGVpXCIsXCJ0ZWljb3JwdXNcIl0sXCJhcHBsaWNhdGlvbi90aHJhdWQreG1sXCI6W1widGZpXCJdLFwiYXBwbGljYXRpb24vdGltZXN0YW1wZWQtZGF0YVwiOltcInRzZFwiXSxcImFwcGxpY2F0aW9uL3ZvaWNleG1sK3htbFwiOltcInZ4bWxcIl0sXCJhcHBsaWNhdGlvbi93YXNtXCI6W1wid2FzbVwiXSxcImFwcGxpY2F0aW9uL3dpZGdldFwiOltcIndndFwiXSxcImFwcGxpY2F0aW9uL3dpbmhscFwiOltcImhscFwiXSxcImFwcGxpY2F0aW9uL3dzZGwreG1sXCI6W1wid3NkbFwiXSxcImFwcGxpY2F0aW9uL3dzcG9saWN5K3htbFwiOltcIndzcG9saWN5XCJdLFwiYXBwbGljYXRpb24veGFtbCt4bWxcIjpbXCJ4YW1sXCJdLFwiYXBwbGljYXRpb24veGNhcC1kaWZmK3htbFwiOltcInhkZlwiXSxcImFwcGxpY2F0aW9uL3hlbmMreG1sXCI6W1wieGVuY1wiXSxcImFwcGxpY2F0aW9uL3hodG1sK3htbFwiOltcInhodG1sXCIsXCJ4aHRcIl0sXCJhcHBsaWNhdGlvbi94bWxcIjpbXCJ4bWxcIixcInhzbFwiLFwieHNkXCIsXCJybmdcIl0sXCJhcHBsaWNhdGlvbi94bWwtZHRkXCI6W1wiZHRkXCJdLFwiYXBwbGljYXRpb24veG9wK3htbFwiOltcInhvcFwiXSxcImFwcGxpY2F0aW9uL3hwcm9jK3htbFwiOltcInhwbFwiXSxcImFwcGxpY2F0aW9uL3hzbHQreG1sXCI6W1wieHNsdFwiXSxcImFwcGxpY2F0aW9uL3hzcGYreG1sXCI6W1wieHNwZlwiXSxcImFwcGxpY2F0aW9uL3h2K3htbFwiOltcIm14bWxcIixcInhodm1sXCIsXCJ4dm1sXCIsXCJ4dm1cIl0sXCJhcHBsaWNhdGlvbi95YW5nXCI6W1wieWFuZ1wiXSxcImFwcGxpY2F0aW9uL3lpbit4bWxcIjpbXCJ5aW5cIl0sXCJhcHBsaWNhdGlvbi96aXBcIjpbXCJ6aXBcIl0sXCJhdWRpby8zZ3BwXCI6W1wiKjNncHBcIl0sXCJhdWRpby9hZHBjbVwiOltcImFkcFwiXSxcImF1ZGlvL2Jhc2ljXCI6W1wiYXVcIixcInNuZFwiXSxcImF1ZGlvL21pZGlcIjpbXCJtaWRcIixcIm1pZGlcIixcImthclwiLFwicm1pXCJdLFwiYXVkaW8vbXAzXCI6W1wiKm1wM1wiXSxcImF1ZGlvL21wNFwiOltcIm00YVwiLFwibXA0YVwiXSxcImF1ZGlvL21wZWdcIjpbXCJtcGdhXCIsXCJtcDJcIixcIm1wMmFcIixcIm1wM1wiLFwibTJhXCIsXCJtM2FcIl0sXCJhdWRpby9vZ2dcIjpbXCJvZ2FcIixcIm9nZ1wiLFwic3B4XCJdLFwiYXVkaW8vczNtXCI6W1wiczNtXCJdLFwiYXVkaW8vc2lsa1wiOltcInNpbFwiXSxcImF1ZGlvL3dhdlwiOltcIndhdlwiXSxcImF1ZGlvL3dhdmVcIjpbXCIqd2F2XCJdLFwiYXVkaW8vd2VibVwiOltcIndlYmFcIl0sXCJhdWRpby94bVwiOltcInhtXCJdLFwiZm9udC9jb2xsZWN0aW9uXCI6W1widHRjXCJdLFwiZm9udC9vdGZcIjpbXCJvdGZcIl0sXCJmb250L3R0ZlwiOltcInR0ZlwiXSxcImZvbnQvd29mZlwiOltcIndvZmZcIl0sXCJmb250L3dvZmYyXCI6W1wid29mZjJcIl0sXCJpbWFnZS9hY2VzXCI6W1wiZXhyXCJdLFwiaW1hZ2UvYXBuZ1wiOltcImFwbmdcIl0sXCJpbWFnZS9ibXBcIjpbXCJibXBcIl0sXCJpbWFnZS9jZ21cIjpbXCJjZ21cIl0sXCJpbWFnZS9kaWNvbS1ybGVcIjpbXCJkcmxlXCJdLFwiaW1hZ2UvZW1mXCI6W1wiZW1mXCJdLFwiaW1hZ2UvZml0c1wiOltcImZpdHNcIl0sXCJpbWFnZS9nM2ZheFwiOltcImczXCJdLFwiaW1hZ2UvZ2lmXCI6W1wiZ2lmXCJdLFwiaW1hZ2UvaGVpY1wiOltcImhlaWNcIl0sXCJpbWFnZS9oZWljLXNlcXVlbmNlXCI6W1wiaGVpY3NcIl0sXCJpbWFnZS9oZWlmXCI6W1wiaGVpZlwiXSxcImltYWdlL2hlaWYtc2VxdWVuY2VcIjpbXCJoZWlmc1wiXSxcImltYWdlL2llZlwiOltcImllZlwiXSxcImltYWdlL2psc1wiOltcImpsc1wiXSxcImltYWdlL2pwMlwiOltcImpwMlwiLFwianBnMlwiXSxcImltYWdlL2pwZWdcIjpbXCJqcGVnXCIsXCJqcGdcIixcImpwZVwiXSxcImltYWdlL2pwbVwiOltcImpwbVwiXSxcImltYWdlL2pweFwiOltcImpweFwiLFwianBmXCJdLFwiaW1hZ2UvanhyXCI6W1wianhyXCJdLFwiaW1hZ2Uva3R4XCI6W1wia3R4XCJdLFwiaW1hZ2UvcG5nXCI6W1wicG5nXCJdLFwiaW1hZ2Uvc2dpXCI6W1wic2dpXCJdLFwiaW1hZ2Uvc3ZnK3htbFwiOltcInN2Z1wiLFwic3ZnelwiXSxcImltYWdlL3QzOFwiOltcInQzOFwiXSxcImltYWdlL3RpZmZcIjpbXCJ0aWZcIixcInRpZmZcIl0sXCJpbWFnZS90aWZmLWZ4XCI6W1widGZ4XCJdLFwiaW1hZ2Uvd2VicFwiOltcIndlYnBcIl0sXCJpbWFnZS93bWZcIjpbXCJ3bWZcIl0sXCJtZXNzYWdlL2Rpc3Bvc2l0aW9uLW5vdGlmaWNhdGlvblwiOltcImRpc3Bvc2l0aW9uLW5vdGlmaWNhdGlvblwiXSxcIm1lc3NhZ2UvZ2xvYmFsXCI6W1widThtc2dcIl0sXCJtZXNzYWdlL2dsb2JhbC1kZWxpdmVyeS1zdGF0dXNcIjpbXCJ1OGRzblwiXSxcIm1lc3NhZ2UvZ2xvYmFsLWRpc3Bvc2l0aW9uLW5vdGlmaWNhdGlvblwiOltcInU4bWRuXCJdLFwibWVzc2FnZS9nbG9iYWwtaGVhZGVyc1wiOltcInU4aGRyXCJdLFwibWVzc2FnZS9yZmM4MjJcIjpbXCJlbWxcIixcIm1pbWVcIl0sXCJtb2RlbC8zbWZcIjpbXCIzbWZcIl0sXCJtb2RlbC9nbHRmK2pzb25cIjpbXCJnbHRmXCJdLFwibW9kZWwvZ2x0Zi1iaW5hcnlcIjpbXCJnbGJcIl0sXCJtb2RlbC9pZ2VzXCI6W1wiaWdzXCIsXCJpZ2VzXCJdLFwibW9kZWwvbWVzaFwiOltcIm1zaFwiLFwibWVzaFwiLFwic2lsb1wiXSxcIm1vZGVsL3N0bFwiOltcInN0bFwiXSxcIm1vZGVsL3ZybWxcIjpbXCJ3cmxcIixcInZybWxcIl0sXCJtb2RlbC94M2QrYmluYXJ5XCI6W1wiKngzZGJcIixcIngzZGJ6XCJdLFwibW9kZWwveDNkK2Zhc3RpbmZvc2V0XCI6W1wieDNkYlwiXSxcIm1vZGVsL3gzZCt2cm1sXCI6W1wiKngzZHZcIixcIngzZHZ6XCJdLFwibW9kZWwveDNkK3htbFwiOltcIngzZFwiLFwieDNkelwiXSxcIm1vZGVsL3gzZC12cm1sXCI6W1wieDNkdlwiXSxcInRleHQvY2FjaGUtbWFuaWZlc3RcIjpbXCJhcHBjYWNoZVwiLFwibWFuaWZlc3RcIl0sXCJ0ZXh0L2NhbGVuZGFyXCI6W1wiaWNzXCIsXCJpZmJcIl0sXCJ0ZXh0L2NvZmZlZXNjcmlwdFwiOltcImNvZmZlZVwiLFwibGl0Y29mZmVlXCJdLFwidGV4dC9jc3NcIjpbXCJjc3NcIl0sXCJ0ZXh0L2NzdlwiOltcImNzdlwiXSxcInRleHQvaHRtbFwiOltcImh0bWxcIixcImh0bVwiLFwic2h0bWxcIl0sXCJ0ZXh0L2phZGVcIjpbXCJqYWRlXCJdLFwidGV4dC9qc3hcIjpbXCJqc3hcIl0sXCJ0ZXh0L2xlc3NcIjpbXCJsZXNzXCJdLFwidGV4dC9tYXJrZG93blwiOltcIm1hcmtkb3duXCIsXCJtZFwiXSxcInRleHQvbWF0aG1sXCI6W1wibW1sXCJdLFwidGV4dC9tZHhcIjpbXCJtZHhcIl0sXCJ0ZXh0L24zXCI6W1wibjNcIl0sXCJ0ZXh0L3BsYWluXCI6W1widHh0XCIsXCJ0ZXh0XCIsXCJjb25mXCIsXCJkZWZcIixcImxpc3RcIixcImxvZ1wiLFwiaW5cIixcImluaVwiXSxcInRleHQvcmljaHRleHRcIjpbXCJydHhcIl0sXCJ0ZXh0L3J0ZlwiOltcIipydGZcIl0sXCJ0ZXh0L3NnbWxcIjpbXCJzZ21sXCIsXCJzZ21cIl0sXCJ0ZXh0L3NoZXhcIjpbXCJzaGV4XCJdLFwidGV4dC9zbGltXCI6W1wic2xpbVwiLFwic2xtXCJdLFwidGV4dC9zdHlsdXNcIjpbXCJzdHlsdXNcIixcInN0eWxcIl0sXCJ0ZXh0L3RhYi1zZXBhcmF0ZWQtdmFsdWVzXCI6W1widHN2XCJdLFwidGV4dC90cm9mZlwiOltcInRcIixcInRyXCIsXCJyb2ZmXCIsXCJtYW5cIixcIm1lXCIsXCJtc1wiXSxcInRleHQvdHVydGxlXCI6W1widHRsXCJdLFwidGV4dC91cmktbGlzdFwiOltcInVyaVwiLFwidXJpc1wiLFwidXJsc1wiXSxcInRleHQvdmNhcmRcIjpbXCJ2Y2FyZFwiXSxcInRleHQvdnR0XCI6W1widnR0XCJdLFwidGV4dC94bWxcIjpbXCIqeG1sXCJdLFwidGV4dC95YW1sXCI6W1wieWFtbFwiLFwieW1sXCJdLFwidmlkZW8vM2dwcFwiOltcIjNncFwiLFwiM2dwcFwiXSxcInZpZGVvLzNncHAyXCI6W1wiM2cyXCJdLFwidmlkZW8vaDI2MVwiOltcImgyNjFcIl0sXCJ2aWRlby9oMjYzXCI6W1wiaDI2M1wiXSxcInZpZGVvL2gyNjRcIjpbXCJoMjY0XCJdLFwidmlkZW8vanBlZ1wiOltcImpwZ3ZcIl0sXCJ2aWRlby9qcG1cIjpbXCIqanBtXCIsXCJqcGdtXCJdLFwidmlkZW8vbWoyXCI6W1wibWoyXCIsXCJtanAyXCJdLFwidmlkZW8vbXAydFwiOltcInRzXCJdLFwidmlkZW8vbXA0XCI6W1wibXA0XCIsXCJtcDR2XCIsXCJtcGc0XCJdLFwidmlkZW8vbXBlZ1wiOltcIm1wZWdcIixcIm1wZ1wiLFwibXBlXCIsXCJtMXZcIixcIm0ydlwiXSxcInZpZGVvL29nZ1wiOltcIm9ndlwiXSxcInZpZGVvL3F1aWNrdGltZVwiOltcInF0XCIsXCJtb3ZcIl0sXCJ2aWRlby93ZWJtXCI6W1wid2VibVwiXX07XG5cbnZhciBsaXRlID0gbmV3IE1pbWVfMShzdGFuZGFyZCk7XG5cbmZ1bmN0aW9uIGdldF9zZXJ2ZXJfcm91dGVfaGFuZGxlcihyb3V0ZXMpIHtcblx0YXN5bmMgZnVuY3Rpb24gaGFuZGxlX3JvdXRlKHJvdXRlLCByZXEsIHJlcywgbmV4dCkge1xuXHRcdHJlcS5wYXJhbXMgPSByb3V0ZS5wYXJhbXMocm91dGUucGF0dGVybi5leGVjKHJlcS5wYXRoKSk7XG5cblx0XHRjb25zdCBtZXRob2QgPSByZXEubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cdFx0Ly8gJ2RlbGV0ZScgY2Fubm90IGJlIGV4cG9ydGVkIGZyb20gYSBtb2R1bGUgYmVjYXVzZSBpdCBpcyBhIGtleXdvcmQsXG5cdFx0Ly8gc28gY2hlY2sgZm9yICdkZWwnIGluc3RlYWRcblx0XHRjb25zdCBtZXRob2RfZXhwb3J0ID0gbWV0aG9kID09PSAnZGVsZXRlJyA/ICdkZWwnIDogbWV0aG9kO1xuXHRcdGNvbnN0IGhhbmRsZV9tZXRob2QgPSByb3V0ZS5oYW5kbGVyc1ttZXRob2RfZXhwb3J0XTtcblx0XHRpZiAoaGFuZGxlX21ldGhvZCkge1xuXHRcdFx0aWYgKHByb2Nlc3MuZW52LlNBUFBFUl9FWFBPUlQpIHtcblx0XHRcdFx0Y29uc3QgeyB3cml0ZSwgZW5kLCBzZXRIZWFkZXIgfSA9IHJlcztcblx0XHRcdFx0Y29uc3QgY2h1bmtzID0gW107XG5cdFx0XHRcdGNvbnN0IGhlYWRlcnMgPSB7fTtcblxuXHRcdFx0XHQvLyBpbnRlcmNlcHQgZGF0YSBzbyB0aGF0IGl0IGNhbiBiZSBleHBvcnRlZFxuXHRcdFx0XHRyZXMud3JpdGUgPSBmdW5jdGlvbihjaHVuaykge1xuXHRcdFx0XHRcdGNodW5rcy5wdXNoKEJ1ZmZlci5mcm9tKGNodW5rKSk7XG5cdFx0XHRcdFx0d3JpdGUuYXBwbHkocmVzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdHJlcy5zZXRIZWFkZXIgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuXHRcdFx0XHRcdGhlYWRlcnNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlO1xuXHRcdFx0XHRcdHNldEhlYWRlci5hcHBseShyZXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmVzLmVuZCA9IGZ1bmN0aW9uKGNodW5rKSB7XG5cdFx0XHRcdFx0aWYgKGNodW5rKSBjaHVua3MucHVzaChCdWZmZXIuZnJvbShjaHVuaykpO1xuXHRcdFx0XHRcdGVuZC5hcHBseShyZXMsIGFyZ3VtZW50cyk7XG5cblx0XHRcdFx0XHRwcm9jZXNzLnNlbmQoe1xuXHRcdFx0XHRcdFx0X19zYXBwZXJfXzogdHJ1ZSxcblx0XHRcdFx0XHRcdGV2ZW50OiAnZmlsZScsXG5cdFx0XHRcdFx0XHR1cmw6IHJlcS51cmwsXG5cdFx0XHRcdFx0XHRtZXRob2Q6IHJlcS5tZXRob2QsXG5cdFx0XHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRcdFx0dHlwZTogaGVhZGVyc1snY29udGVudC10eXBlJ10sXG5cdFx0XHRcdFx0XHRib2R5OiBCdWZmZXIuY29uY2F0KGNodW5rcykudG9TdHJpbmcoKVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBoYW5kbGVfbmV4dCA9IChlcnIpID0+IHtcblx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuXHRcdFx0XHRcdHJlcy5lbmQoZXJyLm1lc3NhZ2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHByb2Nlc3MubmV4dFRpY2sobmV4dCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IGhhbmRsZV9tZXRob2QocmVxLCByZXMsIGhhbmRsZV9uZXh0KTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdGhhbmRsZV9uZXh0KGVycik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIG5vIG1hdGNoaW5nIGhhbmRsZXIgZm9yIG1ldGhvZFxuXHRcdFx0cHJvY2Vzcy5uZXh0VGljayhuZXh0KTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24gZmluZF9yb3V0ZShyZXEsIHJlcywgbmV4dCkge1xuXHRcdGZvciAoY29uc3Qgcm91dGUgb2Ygcm91dGVzKSB7XG5cdFx0XHRpZiAocm91dGUucGF0dGVybi50ZXN0KHJlcS5wYXRoKSkge1xuXHRcdFx0XHRoYW5kbGVfcm91dGUocm91dGUsIHJlcSwgcmVzLCBuZXh0KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdG5leHQoKTtcblx0fTtcbn1cblxuLyohXG4gKiBjb29raWVcbiAqIENvcHlyaWdodChjKSAyMDEyLTIwMTQgUm9tYW4gU2h0eWxtYW5cbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbnZhciBwYXJzZV8xID0gcGFyc2U7XG52YXIgc2VyaWFsaXplXzEgPSBzZXJpYWxpemU7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcbnZhciBlbmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQ7XG52YXIgcGFpclNwbGl0UmVnRXhwID0gLzsgKi87XG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGZpZWxkLWNvbnRlbnQgaW4gUkZDIDcyMzAgc2VjIDMuMlxuICpcbiAqIGZpZWxkLWNvbnRlbnQgPSBmaWVsZC12Y2hhciBbIDEqKCBTUCAvIEhUQUIgKSBmaWVsZC12Y2hhciBdXG4gKiBmaWVsZC12Y2hhciAgID0gVkNIQVIgLyBvYnMtdGV4dFxuICogb2JzLXRleHQgICAgICA9ICV4ODAtRkZcbiAqL1xuXG52YXIgZmllbGRDb250ZW50UmVnRXhwID0gL15bXFx1MDAwOVxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC87XG5cbi8qKlxuICogUGFyc2UgYSBjb29raWUgaGVhZGVyLlxuICpcbiAqIFBhcnNlIHRoZSBnaXZlbiBjb29raWUgaGVhZGVyIHN0cmluZyBpbnRvIGFuIG9iamVjdFxuICogVGhlIG9iamVjdCBoYXMgdGhlIHZhcmlvdXMgY29va2llcyBhcyBrZXlzKG5hbWVzKSA9PiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gIH1cblxuICB2YXIgb2JqID0ge307XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQocGFpclNwbGl0UmVnRXhwKTtcbiAgdmFyIGRlYyA9IG9wdC5kZWNvZGUgfHwgZGVjb2RlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgIHZhciBlcV9pZHggPSBwYWlyLmluZGV4T2YoJz0nKTtcblxuICAgIC8vIHNraXAgdGhpbmdzIHRoYXQgZG9uJ3QgbG9vayBsaWtlIGtleT12YWx1ZVxuICAgIGlmIChlcV9pZHggPCAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIga2V5ID0gcGFpci5zdWJzdHIoMCwgZXFfaWR4KS50cmltKCk7XG4gICAgdmFyIHZhbCA9IHBhaXIuc3Vic3RyKCsrZXFfaWR4LCBwYWlyLmxlbmd0aCkudHJpbSgpO1xuXG4gICAgLy8gcXVvdGVkIHZhbHVlc1xuICAgIGlmICgnXCInID09IHZhbFswXSkge1xuICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IGFzc2lnbiBvbmNlXG4gICAgaWYgKHVuZGVmaW5lZCA9PSBvYmpba2V5XSkge1xuICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGRhdGEgaW50byBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogU2VyaWFsaXplIHRoZSBhIG5hbWUgdmFsdWUgcGFpciBpbnRvIGEgY29va2llIHN0cmluZyBzdWl0YWJsZSBmb3JcbiAqIGh0dHAgaGVhZGVycy4gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVkIGNvb2tpZSBwYXJhbWV0ZXJzLlxuICpcbiAqIHNlcmlhbGl6ZSgnZm9vJywgJ2JhcicsIHsgaHR0cE9ubHk6IHRydWUgfSlcbiAqICAgPT4gXCJmb289YmFyOyBodHRwT25seVwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUobmFtZSwgdmFsLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZW5jID0gb3B0LmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHR5cGVvZiBlbmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZW5jb2RlIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVuYyh2YWwpO1xuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdmFsIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciBzdHIgPSBuYW1lICsgJz0nICsgdmFsdWU7XG5cbiAgaWYgKG51bGwgIT0gb3B0Lm1heEFnZSkge1xuICAgIHZhciBtYXhBZ2UgPSBvcHQubWF4QWdlIC0gMDtcbiAgICBpZiAoaXNOYU4obWF4QWdlKSkgdGhyb3cgbmV3IEVycm9yKCdtYXhBZ2Ugc2hvdWxkIGJlIGEgTnVtYmVyJyk7XG4gICAgc3RyICs9ICc7IE1heC1BZ2U9JyArIE1hdGguZmxvb3IobWF4QWdlKTtcbiAgfVxuXG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcGF0aCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IFBhdGg9JyArIG9wdC5wYXRoO1xuICB9XG5cbiAgaWYgKG9wdC5leHBpcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgc3RyICs9ICc7IFNhbWVTaXRlPU5vbmUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBzYW1lU2l0ZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBUcnkgZGVjb2RpbmcgYSBzdHJpbmcgdXNpbmcgYSBkZWNvZGluZyBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkZWNvZGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdHJ5RGVjb2RlKHN0ciwgZGVjb2RlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZShzdHIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuXG52YXIgY29va2llID0ge1xuXHRwYXJzZTogcGFyc2VfMSxcblx0c2VyaWFsaXplOiBzZXJpYWxpemVfMVxufTtcblxudmFyIGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpfJCc7XG52YXIgdW5zYWZlQ2hhcnMgPSAvWzw+XFxiXFxmXFxuXFxyXFx0XFwwXFx1MjAyOFxcdTIwMjldL2c7XG52YXIgcmVzZXJ2ZWQgPSAvXig/OmRvfGlmfGlufGZvcnxpbnR8bGV0fG5ld3x0cnl8dmFyfGJ5dGV8Y2FzZXxjaGFyfGVsc2V8ZW51bXxnb3RvfGxvbmd8dGhpc3x2b2lkfHdpdGh8YXdhaXR8YnJlYWt8Y2F0Y2h8Y2xhc3N8Y29uc3R8ZmluYWx8ZmxvYXR8c2hvcnR8c3VwZXJ8dGhyb3d8d2hpbGV8eWllbGR8ZGVsZXRlfGRvdWJsZXxleHBvcnR8aW1wb3J0fG5hdGl2ZXxyZXR1cm58c3dpdGNofHRocm93c3x0eXBlb2Z8Ym9vbGVhbnxkZWZhdWx0fGV4dGVuZHN8ZmluYWxseXxwYWNrYWdlfHByaXZhdGV8YWJzdHJhY3R8Y29udGludWV8ZGVidWdnZXJ8ZnVuY3Rpb258dm9sYXRpbGV8aW50ZXJmYWNlfHByb3RlY3RlZHx0cmFuc2llbnR8aW1wbGVtZW50c3xpbnN0YW5jZW9mfHN5bmNocm9uaXplZCkkLztcbnZhciBlc2NhcGVkID0ge1xuICAgICc8JzogJ1xcXFx1MDAzQycsXG4gICAgJz4nOiAnXFxcXHUwMDNFJyxcbiAgICAnLyc6ICdcXFxcdTAwMkYnLFxuICAgICdcXFxcJzogJ1xcXFxcXFxcJyxcbiAgICAnXFxiJzogJ1xcXFxiJyxcbiAgICAnXFxmJzogJ1xcXFxmJyxcbiAgICAnXFxuJzogJ1xcXFxuJyxcbiAgICAnXFxyJzogJ1xcXFxyJyxcbiAgICAnXFx0JzogJ1xcXFx0JyxcbiAgICAnXFwwJzogJ1xcXFwwJyxcbiAgICAnXFx1MjAyOCc6ICdcXFxcdTIwMjgnLFxuICAgICdcXHUyMDI5JzogJ1xcXFx1MjAyOSdcbn07XG52YXIgb2JqZWN0UHJvdG9Pd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LnByb3RvdHlwZSkuc29ydCgpLmpvaW4oJ1xcMCcpO1xuZnVuY3Rpb24gZGV2YWx1ZSh2YWx1ZSkge1xuICAgIHZhciBjb3VudHMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gd2Fsayh0aGluZykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3RyaW5naWZ5IGEgZnVuY3Rpb25cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvdW50cy5oYXModGhpbmcpKSB7XG4gICAgICAgICAgICBjb3VudHMuc2V0KHRoaW5nLCBjb3VudHMuZ2V0KHRoaW5nKSArIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvdW50cy5zZXQodGhpbmcsIDEpO1xuICAgICAgICBpZiAoIWlzUHJpbWl0aXZlKHRoaW5nKSkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlKHRoaW5nKTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgICAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICAgICAgICAgICAgICB0aGluZy5mb3JFYWNoKHdhbGspO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTZXQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ01hcCc6XG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpbmcpLmZvckVhY2god2Fsayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGluZyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm90byAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG8gIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb3RvKS5zb3J0KCkuam9pbignXFwwJykgIT09IG9iamVjdFByb3RvT3duUHJvcGVydHlOYW1lcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN0cmluZ2lmeSBhcmJpdHJhcnkgbm9uLVBPSk9zXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRoaW5nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3RyaW5naWZ5IFBPSk9zIHdpdGggc3ltYm9saWMga2V5c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGluZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiB3YWxrKHRoaW5nW2tleV0pOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB3YWxrKHZhbHVlKTtcbiAgICB2YXIgbmFtZXMgPSBuZXcgTWFwKCk7XG4gICAgQXJyYXkuZnJvbShjb3VudHMpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGVudHJ5KSB7IHJldHVybiBlbnRyeVsxXSA+IDE7IH0pXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiWzFdIC0gYVsxXTsgfSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGVudHJ5LCBpKSB7XG4gICAgICAgIG5hbWVzLnNldChlbnRyeVswXSwgZ2V0TmFtZShpKSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gc3RyaW5naWZ5KHRoaW5nKSB7XG4gICAgICAgIGlmIChuYW1lcy5oYXModGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZXMuZ2V0KHRoaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcmltaXRpdmUodGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5naWZ5UHJpbWl0aXZlKHRoaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUodGhpbmcpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgY2FzZSAnQm9vbGVhbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiT2JqZWN0KFwiICsgc3RyaW5naWZ5KHRoaW5nLnZhbHVlT2YoKSkgKyBcIilcIjtcbiAgICAgICAgICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaW5nLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJuZXcgRGF0ZShcIiArIHRoaW5nLmdldFRpbWUoKSArIFwiKVwiO1xuICAgICAgICAgICAgY2FzZSAnQXJyYXknOlxuICAgICAgICAgICAgICAgIHZhciBtZW1iZXJzID0gdGhpbmcubWFwKGZ1bmN0aW9uICh2LCBpKSB7IHJldHVybiBpIGluIHRoaW5nID8gc3RyaW5naWZ5KHYpIDogJyc7IH0pO1xuICAgICAgICAgICAgICAgIHZhciB0YWlsID0gdGhpbmcubGVuZ3RoID09PSAwIHx8ICh0aGluZy5sZW5ndGggLSAxIGluIHRoaW5nKSA/ICcnIDogJywnO1xuICAgICAgICAgICAgICAgIHJldHVybiBcIltcIiArIG1lbWJlcnMuam9pbignLCcpICsgdGFpbCArIFwiXVwiO1xuICAgICAgICAgICAgY2FzZSAnU2V0JzpcbiAgICAgICAgICAgIGNhc2UgJ01hcCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibmV3IFwiICsgdHlwZSArIFwiKFtcIiArIEFycmF5LmZyb20odGhpbmcpLm1hcChzdHJpbmdpZnkpLmpvaW4oJywnKSArIFwiXSlcIjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IFwie1wiICsgT2JqZWN0LmtleXModGhpbmcpLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBzYWZlS2V5KGtleSkgKyBcIjpcIiArIHN0cmluZ2lmeSh0aGluZ1trZXldKTsgfSkuam9pbignLCcpICsgXCJ9XCI7XG4gICAgICAgICAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaW5nKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaW5nKS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKG51bGwpLFwiICsgb2JqICsgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCJPYmplY3QuY3JlYXRlKG51bGwpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIHN0ciA9IHN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgaWYgKG5hbWVzLnNpemUpIHtcbiAgICAgICAgdmFyIHBhcmFtc18xID0gW107XG4gICAgICAgIHZhciBzdGF0ZW1lbnRzXzEgPSBbXTtcbiAgICAgICAgdmFyIHZhbHVlc18xID0gW107XG4gICAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIHRoaW5nKSB7XG4gICAgICAgICAgICBwYXJhbXNfMS5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgaWYgKGlzUHJpbWl0aXZlKHRoaW5nKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goc3RyaW5naWZ5UHJpbWl0aXZlKHRoaW5nKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlKHRoaW5nKTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ051bWJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnU3RyaW5nJzpcbiAgICAgICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIk9iamVjdChcIiArIHN0cmluZ2lmeSh0aGluZy52YWx1ZU9mKCkpICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdSZWdFeHAnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKHRoaW5nLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdEYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIm5ldyBEYXRlKFwiICsgdGhpbmcuZ2V0VGltZSgpICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJBcnJheShcIiArIHRoaW5nLmxlbmd0aCArIFwiKVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpbmcuZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50c18xLnB1c2gobmFtZSArIFwiW1wiICsgaSArIFwiXT1cIiArIHN0cmluZ2lmeSh2KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTZXQnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwibmV3IFNldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50c18xLnB1c2gobmFtZSArIFwiLlwiICsgQXJyYXkuZnJvbSh0aGluZykubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiBcImFkZChcIiArIHN0cmluZ2lmeSh2KSArIFwiKVwiOyB9KS5qb2luKCcuJykpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdNYXAnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwibmV3IE1hcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50c18xLnB1c2gobmFtZSArIFwiLlwiICsgQXJyYXkuZnJvbSh0aGluZykubWFwKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGsgPSBfYVswXSwgdiA9IF9hWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwic2V0KFwiICsgc3RyaW5naWZ5KGspICsgXCIsIFwiICsgc3RyaW5naWZ5KHYpICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJy4nKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaW5nKSA9PT0gbnVsbCA/ICdPYmplY3QuY3JlYXRlKG51bGwpJyA6ICd7fScpO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh0aGluZykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChcIlwiICsgbmFtZSArIHNhZmVQcm9wKGtleSkgKyBcIj1cIiArIHN0cmluZ2lmeSh0aGluZ1trZXldKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgc3RhdGVtZW50c18xLnB1c2goXCJyZXR1cm4gXCIgKyBzdHIpO1xuICAgICAgICByZXR1cm4gXCIoZnVuY3Rpb24oXCIgKyBwYXJhbXNfMS5qb2luKCcsJykgKyBcIil7XCIgKyBzdGF0ZW1lbnRzXzEuam9pbignOycpICsgXCJ9KFwiICsgdmFsdWVzXzEuam9pbignLCcpICsgXCIpKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXROYW1lKG51bSkge1xuICAgIHZhciBuYW1lID0gJyc7XG4gICAgZG8ge1xuICAgICAgICBuYW1lID0gY2hhcnNbbnVtICUgY2hhcnMubGVuZ3RoXSArIG5hbWU7XG4gICAgICAgIG51bSA9IH5+KG51bSAvIGNoYXJzLmxlbmd0aCkgLSAxO1xuICAgIH0gd2hpbGUgKG51bSA+PSAwKTtcbiAgICByZXR1cm4gcmVzZXJ2ZWQudGVzdChuYW1lKSA/IG5hbWUgKyBcIl9cIiA6IG5hbWU7XG59XG5mdW5jdGlvbiBpc1ByaW1pdGl2ZSh0aGluZykge1xuICAgIHJldHVybiBPYmplY3QodGhpbmcpICE9PSB0aGluZztcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVByaW1pdGl2ZSh0aGluZykge1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gc3RyaW5naWZ5U3RyaW5nKHRoaW5nKTtcbiAgICBpZiAodGhpbmcgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuICd2b2lkIDAnO1xuICAgIGlmICh0aGluZyA9PT0gMCAmJiAxIC8gdGhpbmcgPCAwKVxuICAgICAgICByZXR1cm4gJy0wJztcbiAgICB2YXIgc3RyID0gU3RyaW5nKHRoaW5nKTtcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSAnbnVtYmVyJylcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eKC0pPzBcXC4vLCAnJDEuJyk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmZ1bmN0aW9uIGdldFR5cGUodGhpbmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKS5zbGljZSg4LCAtMSk7XG59XG5mdW5jdGlvbiBlc2NhcGVVbnNhZmVDaGFyKGMpIHtcbiAgICByZXR1cm4gZXNjYXBlZFtjXSB8fCBjO1xufVxuZnVuY3Rpb24gZXNjYXBlVW5zYWZlQ2hhcnMoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKHVuc2FmZUNoYXJzLCBlc2NhcGVVbnNhZmVDaGFyKTtcbn1cbmZ1bmN0aW9uIHNhZmVLZXkoa2V5KSB7XG4gICAgcmV0dXJuIC9eW18kYS16QS1aXVtfJGEtekEtWjAtOV0qJC8udGVzdChrZXkpID8ga2V5IDogZXNjYXBlVW5zYWZlQ2hhcnMoSlNPTi5zdHJpbmdpZnkoa2V5KSk7XG59XG5mdW5jdGlvbiBzYWZlUHJvcChrZXkpIHtcbiAgICByZXR1cm4gL15bXyRhLXpBLVpdW18kYS16QS1aMC05XSokLy50ZXN0KGtleSkgPyBcIi5cIiArIGtleSA6IFwiW1wiICsgZXNjYXBlVW5zYWZlQ2hhcnMoSlNPTi5zdHJpbmdpZnkoa2V5KSkgKyBcIl1cIjtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeVN0cmluZyhzdHIpIHtcbiAgICB2YXIgcmVzdWx0ID0gJ1wiJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgY2hhciA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICAgIHZhciBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICdcXFxcXCInO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoYXIgaW4gZXNjYXBlZCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGVzY2FwZWRbY2hhcl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRmZmYpIHtcbiAgICAgICAgICAgIHZhciBuZXh0ID0gc3RyLmNoYXJDb2RlQXQoaSArIDEpO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgYmVnaW5uaW5nIG9mIGEgW2hpZ2gsIGxvd10gc3Vycm9nYXRlIHBhaXIsXG4gICAgICAgICAgICAvLyBhZGQgdGhlIG5leHQgdHdvIGNoYXJhY3RlcnMsIG90aGVyd2lzZSBlc2NhcGVcbiAgICAgICAgICAgIGlmIChjb2RlIDw9IDB4ZGJmZiAmJiAobmV4dCA+PSAweGRjMDAgJiYgbmV4dCA8PSAweGRmZmYpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXIgKyBzdHJbKytpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIlxcXFx1XCIgKyBjb2RlLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0ICs9ICdcIic7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gQmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3RtcHZhci9qc2RvbS9ibG9iL2FhODViMmFiZjA3NzY2ZmY3YmY1YzFmNmRhYWZiMzcyNmYyZjJkYjUvbGliL2pzZG9tL2xpdmluZy9ibG9iLmpzXG5cbi8vIGZpeCBmb3IgXCJSZWFkYWJsZVwiIGlzbid0IGEgbmFtZWQgZXhwb3J0IGlzc3VlXG5jb25zdCBSZWFkYWJsZSA9IFN0cmVhbS5SZWFkYWJsZTtcblxuY29uc3QgQlVGRkVSID0gU3ltYm9sKCdidWZmZXInKTtcbmNvbnN0IFRZUEUgPSBTeW1ib2woJ3R5cGUnKTtcblxuY2xhc3MgQmxvYiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXNbVFlQRV0gPSAnJztcblxuXHRcdGNvbnN0IGJsb2JQYXJ0cyA9IGFyZ3VtZW50c1swXTtcblx0XHRjb25zdCBvcHRpb25zID0gYXJndW1lbnRzWzFdO1xuXG5cdFx0Y29uc3QgYnVmZmVycyA9IFtdO1xuXHRcdGxldCBzaXplID0gMDtcblxuXHRcdGlmIChibG9iUGFydHMpIHtcblx0XHRcdGNvbnN0IGEgPSBibG9iUGFydHM7XG5cdFx0XHRjb25zdCBsZW5ndGggPSBOdW1iZXIoYS5sZW5ndGgpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCBlbGVtZW50ID0gYVtpXTtcblx0XHRcdFx0bGV0IGJ1ZmZlcjtcblx0XHRcdFx0aWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBCdWZmZXIpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBlbGVtZW50O1xuXHRcdFx0XHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhlbGVtZW50KSkge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGVsZW1lbnQuYnVmZmVyLCBlbGVtZW50LmJ5dGVPZmZzZXQsIGVsZW1lbnQuYnl0ZUxlbmd0aCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20oZWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJsb2IpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBlbGVtZW50W0JVRkZFUl07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20odHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZWxlbWVudCA6IFN0cmluZyhlbGVtZW50KSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0c2l6ZSArPSBidWZmZXIubGVuZ3RoO1xuXHRcdFx0XHRidWZmZXJzLnB1c2goYnVmZmVyKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzW0JVRkZFUl0gPSBCdWZmZXIuY29uY2F0KGJ1ZmZlcnMpO1xuXG5cdFx0bGV0IHR5cGUgPSBvcHRpb25zICYmIG9wdGlvbnMudHlwZSAhPT0gdW5kZWZpbmVkICYmIFN0cmluZyhvcHRpb25zLnR5cGUpLnRvTG93ZXJDYXNlKCk7XG5cdFx0aWYgKHR5cGUgJiYgIS9bXlxcdTAwMjAtXFx1MDA3RV0vLnRlc3QodHlwZSkpIHtcblx0XHRcdHRoaXNbVFlQRV0gPSB0eXBlO1xuXHRcdH1cblx0fVxuXHRnZXQgc2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpc1tCVUZGRVJdLmxlbmd0aDtcblx0fVxuXHRnZXQgdHlwZSgpIHtcblx0XHRyZXR1cm4gdGhpc1tUWVBFXTtcblx0fVxuXHR0ZXh0KCkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpc1tCVUZGRVJdLnRvU3RyaW5nKCkpO1xuXHR9XG5cdGFycmF5QnVmZmVyKCkge1xuXHRcdGNvbnN0IGJ1ZiA9IHRoaXNbQlVGRkVSXTtcblx0XHRjb25zdCBhYiA9IGJ1Zi5idWZmZXIuc2xpY2UoYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlT2Zmc2V0ICsgYnVmLmJ5dGVMZW5ndGgpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoYWIpO1xuXHR9XG5cdHN0cmVhbSgpIHtcblx0XHRjb25zdCByZWFkYWJsZSA9IG5ldyBSZWFkYWJsZSgpO1xuXHRcdHJlYWRhYmxlLl9yZWFkID0gZnVuY3Rpb24gKCkge307XG5cdFx0cmVhZGFibGUucHVzaCh0aGlzW0JVRkZFUl0pO1xuXHRcdHJlYWRhYmxlLnB1c2gobnVsbCk7XG5cdFx0cmV0dXJuIHJlYWRhYmxlO1xuXHR9XG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnW29iamVjdCBCbG9iXSc7XG5cdH1cblx0c2xpY2UoKSB7XG5cdFx0Y29uc3Qgc2l6ZSA9IHRoaXMuc2l6ZTtcblxuXHRcdGNvbnN0IHN0YXJ0ID0gYXJndW1lbnRzWzBdO1xuXHRcdGNvbnN0IGVuZCA9IGFyZ3VtZW50c1sxXTtcblx0XHRsZXQgcmVsYXRpdmVTdGFydCwgcmVsYXRpdmVFbmQ7XG5cdFx0aWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlbGF0aXZlU3RhcnQgPSAwO1xuXHRcdH0gZWxzZSBpZiAoc3RhcnQgPCAwKSB7XG5cdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gTWF0aC5tYXgoc2l6ZSArIHN0YXJ0LCAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVsYXRpdmVTdGFydCA9IE1hdGgubWluKHN0YXJ0LCBzaXplKTtcblx0XHR9XG5cdFx0aWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZWxhdGl2ZUVuZCA9IHNpemU7XG5cdFx0fSBlbHNlIGlmIChlbmQgPCAwKSB7XG5cdFx0XHRyZWxhdGl2ZUVuZCA9IE1hdGgubWF4KHNpemUgKyBlbmQsIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWxhdGl2ZUVuZCA9IE1hdGgubWluKGVuZCwgc2l6ZSk7XG5cdFx0fVxuXHRcdGNvbnN0IHNwYW4gPSBNYXRoLm1heChyZWxhdGl2ZUVuZCAtIHJlbGF0aXZlU3RhcnQsIDApO1xuXG5cdFx0Y29uc3QgYnVmZmVyID0gdGhpc1tCVUZGRVJdO1xuXHRcdGNvbnN0IHNsaWNlZEJ1ZmZlciA9IGJ1ZmZlci5zbGljZShyZWxhdGl2ZVN0YXJ0LCByZWxhdGl2ZVN0YXJ0ICsgc3Bhbik7XG5cdFx0Y29uc3QgYmxvYiA9IG5ldyBCbG9iKFtdLCB7IHR5cGU6IGFyZ3VtZW50c1syXSB9KTtcblx0XHRibG9iW0JVRkZFUl0gPSBzbGljZWRCdWZmZXI7XG5cdFx0cmV0dXJuIGJsb2I7XG5cdH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQmxvYi5wcm90b3R5cGUsIHtcblx0c2l6ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHR5cGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzbGljZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQmxvYi5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ0Jsb2InLFxuXHR3cml0YWJsZTogZmFsc2UsXG5cdGVudW1lcmFibGU6IGZhbHNlLFxuXHRjb25maWd1cmFibGU6IHRydWVcbn0pO1xuXG4vKipcbiAqIGZldGNoLWVycm9yLmpzXG4gKlxuICogRmV0Y2hFcnJvciBpbnRlcmZhY2UgZm9yIG9wZXJhdGlvbmFsIGVycm9yc1xuICovXG5cbi8qKlxuICogQ3JlYXRlIEZldGNoRXJyb3IgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICBtZXNzYWdlICAgICAgRXJyb3IgbWVzc2FnZSBmb3IgaHVtYW5cbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIHR5cGUgICAgICAgICBFcnJvciB0eXBlIGZvciBtYWNoaW5lXG4gKiBAcGFyYW0gICBTdHJpbmcgICAgICBzeXN0ZW1FcnJvciAgRm9yIE5vZGUuanMgc3lzdGVtIGVycm9yXG4gKiBAcmV0dXJuICBGZXRjaEVycm9yXG4gKi9cbmZ1bmN0aW9uIEZldGNoRXJyb3IobWVzc2FnZSwgdHlwZSwgc3lzdGVtRXJyb3IpIHtcbiAgRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gIC8vIHdoZW4gZXJyLnR5cGUgaXMgYHN5c3RlbWAsIGVyci5jb2RlIGNvbnRhaW5zIHN5c3RlbSBlcnJvciBjb2RlXG4gIGlmIChzeXN0ZW1FcnJvcikge1xuICAgIHRoaXMuY29kZSA9IHRoaXMuZXJybm8gPSBzeXN0ZW1FcnJvci5jb2RlO1xuICB9XG5cbiAgLy8gaGlkZSBjdXN0b20gZXJyb3IgaW1wbGVtZW50YXRpb24gZGV0YWlscyBmcm9tIGVuZC11c2Vyc1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbn1cblxuRmV0Y2hFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5GZXRjaEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEZldGNoRXJyb3I7XG5GZXRjaEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0ZldGNoRXJyb3InO1xuXG5sZXQgY29udmVydDtcbnRyeSB7XG5cdGNvbnZlcnQgPSByZXF1aXJlKCdlbmNvZGluZycpLmNvbnZlcnQ7XG59IGNhdGNoIChlKSB7fVxuXG5jb25zdCBJTlRFUk5BTFMgPSBTeW1ib2woJ0JvZHkgaW50ZXJuYWxzJyk7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcIlBhc3NUaHJvdWdoXCIgaXNuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBQYXNzVGhyb3VnaCA9IFN0cmVhbS5QYXNzVGhyb3VnaDtcblxuLyoqXG4gKiBCb2R5IG1peGluXG4gKlxuICogUmVmOiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jYm9keVxuICpcbiAqIEBwYXJhbSAgIFN0cmVhbSAgYm9keSAgUmVhZGFibGUgc3RyZWFtXG4gKiBAcGFyYW0gICBPYmplY3QgIG9wdHMgIFJlc3BvbnNlIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuZnVuY3Rpb24gQm9keShib2R5KSB7XG5cdHZhciBfdGhpcyA9IHRoaXM7XG5cblx0dmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuXHQgICAgX3JlZiRzaXplID0gX3JlZi5zaXplO1xuXG5cdGxldCBzaXplID0gX3JlZiRzaXplID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRzaXplO1xuXHR2YXIgX3JlZiR0aW1lb3V0ID0gX3JlZi50aW1lb3V0O1xuXHRsZXQgdGltZW91dCA9IF9yZWYkdGltZW91dCA9PT0gdW5kZWZpbmVkID8gMCA6IF9yZWYkdGltZW91dDtcblxuXHRpZiAoYm9keSA9PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyB1bmRlZmluZWQgb3IgbnVsbFxuXHRcdGJvZHkgPSBudWxsO1xuXHR9IGVsc2UgaWYgKGlzVVJMU2VhcmNoUGFyYW1zKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBhIFVSTFNlYXJjaFBhcmFtc1xuXHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5LnRvU3RyaW5nKCkpO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkgOyBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIDsgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG5cdFx0Ly8gYm9keSBpcyBBcnJheUJ1ZmZlclxuXHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5KTtcblx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyVmlld1xuXHRcdGJvZHkgPSBCdWZmZXIuZnJvbShib2R5LmJ1ZmZlciwgYm9keS5ieXRlT2Zmc2V0LCBib2R5LmJ5dGVMZW5ndGgpO1xuXHR9IGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIDsgZWxzZSB7XG5cdFx0Ly8gbm9uZSBvZiB0aGUgYWJvdmVcblx0XHQvLyBjb2VyY2UgdG8gc3RyaW5nIHRoZW4gYnVmZmVyXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKFN0cmluZyhib2R5KSk7XG5cdH1cblx0dGhpc1tJTlRFUk5BTFNdID0ge1xuXHRcdGJvZHksXG5cdFx0ZGlzdHVyYmVkOiBmYWxzZSxcblx0XHRlcnJvcjogbnVsbFxuXHR9O1xuXHR0aGlzLnNpemUgPSBzaXplO1xuXHR0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuXG5cdGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSB7XG5cdFx0Ym9keS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRjb25zdCBlcnJvciA9IGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicgPyBlcnIgOiBuZXcgRmV0Y2hFcnJvcihgSW52YWxpZCByZXNwb25zZSBib2R5IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke190aGlzLnVybH06ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycik7XG5cdFx0XHRfdGhpc1tJTlRFUk5BTFNdLmVycm9yID0gZXJyb3I7XG5cdFx0fSk7XG5cdH1cbn1cblxuQm9keS5wcm90b3R5cGUgPSB7XG5cdGdldCBib2R5KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMU10uYm9keTtcblx0fSxcblxuXHRnZXQgYm9keVVzZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5kaXN0dXJiZWQ7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIEFycmF5QnVmZmVyXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdGFycmF5QnVmZmVyKCkge1xuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1Zikge1xuXHRcdFx0cmV0dXJuIGJ1Zi5idWZmZXIuc2xpY2UoYnVmLmJ5dGVPZmZzZXQsIGJ1Zi5ieXRlT2Zmc2V0ICsgYnVmLmJ5dGVMZW5ndGgpO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIFJldHVybiByYXcgcmVzcG9uc2UgYXMgQmxvYlxuICAqXG4gICogQHJldHVybiBQcm9taXNlXG4gICovXG5cdGJsb2IoKSB7XG5cdFx0bGV0IGN0ID0gdGhpcy5oZWFkZXJzICYmIHRoaXMuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpIHx8ICcnO1xuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1Zikge1xuXHRcdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oXG5cdFx0XHQvLyBQcmV2ZW50IGNvcHlpbmdcblx0XHRcdG5ldyBCbG9iKFtdLCB7XG5cdFx0XHRcdHR5cGU6IGN0LnRvTG93ZXJDYXNlKClcblx0XHRcdH0pLCB7XG5cdFx0XHRcdFtCVUZGRVJdOiBidWZcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyBqc29uXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdGpzb24oKSB7XG5cdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJldHVybiBKU09OLnBhcnNlKGJ1ZmZlci50b1N0cmluZygpKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlamVjdChuZXcgRmV0Y2hFcnJvcihgaW52YWxpZCBqc29uIHJlc3BvbnNlIGJvZHkgYXQgJHtfdGhpczIudXJsfSByZWFzb246ICR7ZXJyLm1lc3NhZ2V9YCwgJ2ludmFsaWQtanNvbicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgdGV4dFxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHR0ZXh0KCkge1xuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHRcdFx0cmV0dXJuIGJ1ZmZlci50b1N0cmluZygpO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyBidWZmZXIgKG5vbi1zcGVjIGFwaSlcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0YnVmZmVyKCkge1xuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyB0ZXh0LCB3aGlsZSBhdXRvbWF0aWNhbGx5IGRldGVjdGluZyB0aGUgZW5jb2RpbmcgYW5kXG4gICogdHJ5aW5nIHRvIGRlY29kZSB0byBVVEYtOCAobm9uLXNwZWMgYXBpKVxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHR0ZXh0Q29udmVydGVkKCkge1xuXHRcdHZhciBfdGhpczMgPSB0aGlzO1xuXG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHRyZXR1cm4gY29udmVydEJvZHkoYnVmZmVyLCBfdGhpczMuaGVhZGVycyk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbi8vIEluIGJyb3dzZXJzLCBhbGwgcHJvcGVydGllcyBhcmUgZW51bWVyYWJsZS5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEJvZHkucHJvdG90eXBlLCB7XG5cdGJvZHk6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRib2R5VXNlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGFycmF5QnVmZmVyOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0YmxvYjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGpzb246IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR0ZXh0OiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbkJvZHkubWl4SW4gPSBmdW5jdGlvbiAocHJvdG8pIHtcblx0Zm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEJvZHkucHJvdG90eXBlKSkge1xuXHRcdC8vIGlzdGFuYnVsIGlnbm9yZSBlbHNlOiBmdXR1cmUgcHJvb2Zcblx0XHRpZiAoIShuYW1lIGluIHByb3RvKSkge1xuXHRcdFx0Y29uc3QgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoQm9keS5wcm90b3R5cGUsIG5hbWUpO1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBuYW1lLCBkZXNjKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogQ29uc3VtZSBhbmQgY29udmVydCBhbiBlbnRpcmUgQm9keSB0byBhIEJ1ZmZlci5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHktY29uc3VtZS1ib2R5XG4gKlxuICogQHJldHVybiAgUHJvbWlzZVxuICovXG5mdW5jdGlvbiBjb25zdW1lQm9keSgpIHtcblx0dmFyIF90aGlzNCA9IHRoaXM7XG5cblx0aWYgKHRoaXNbSU5URVJOQUxTXS5kaXN0dXJiZWQpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKGBib2R5IHVzZWQgYWxyZWFkeSBmb3I6ICR7dGhpcy51cmx9YCkpO1xuXHR9XG5cblx0dGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZCA9IHRydWU7XG5cblx0aWYgKHRoaXNbSU5URVJOQUxTXS5lcnJvcikge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KHRoaXNbSU5URVJOQUxTXS5lcnJvcik7XG5cdH1cblxuXHRsZXQgYm9keSA9IHRoaXMuYm9keTtcblxuXHQvLyBib2R5IGlzIG51bGxcblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoQnVmZmVyLmFsbG9jKDApKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgYmxvYlxuXHRpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0Ym9keSA9IGJvZHkuc3RyZWFtKCk7XG5cdH1cblxuXHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRpZiAoQnVmZmVyLmlzQnVmZmVyKGJvZHkpKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZXNvbHZlKGJvZHkpO1xuXHR9XG5cblx0Ly8gaXN0YW5idWwgaWdub3JlIGlmOiBzaG91bGQgbmV2ZXIgaGFwcGVuXG5cdGlmICghKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZXNvbHZlKEJ1ZmZlci5hbGxvYygwKSk7XG5cdH1cblxuXHQvLyBib2R5IGlzIHN0cmVhbVxuXHQvLyBnZXQgcmVhZHkgdG8gYWN0dWFsbHkgY29uc3VtZSB0aGUgYm9keVxuXHRsZXQgYWNjdW0gPSBbXTtcblx0bGV0IGFjY3VtQnl0ZXMgPSAwO1xuXHRsZXQgYWJvcnQgPSBmYWxzZTtcblxuXHRyZXR1cm4gbmV3IEJvZHkuUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0bGV0IHJlc1RpbWVvdXQ7XG5cblx0XHQvLyBhbGxvdyB0aW1lb3V0IG9uIHNsb3cgcmVzcG9uc2UgYm9keVxuXHRcdGlmIChfdGhpczQudGltZW91dCkge1xuXHRcdFx0cmVzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhYm9ydCA9IHRydWU7XG5cdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgUmVzcG9uc2UgdGltZW91dCB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtfdGhpczQudXJsfSAob3ZlciAke190aGlzNC50aW1lb3V0fW1zKWAsICdib2R5LXRpbWVvdXQnKSk7XG5cdFx0XHR9LCBfdGhpczQudGltZW91dCk7XG5cdFx0fVxuXG5cdFx0Ly8gaGFuZGxlIHN0cmVhbSBlcnJvcnNcblx0XHRib2R5Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGlmIChlcnIubmFtZSA9PT0gJ0Fib3J0RXJyb3InKSB7XG5cdFx0XHRcdC8vIGlmIHRoZSByZXF1ZXN0IHdhcyBhYm9ydGVkLCByZWplY3Qgd2l0aCB0aGlzIEVycm9yXG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBvdGhlciBlcnJvcnMsIHN1Y2ggYXMgaW5jb3JyZWN0IGNvbnRlbnQtZW5jb2Rpbmdcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7X3RoaXM0LnVybH06ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ym9keS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuXHRcdFx0aWYgKGFib3J0IHx8IGNodW5rID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKF90aGlzNC5zaXplICYmIGFjY3VtQnl0ZXMgKyBjaHVuay5sZW5ndGggPiBfdGhpczQuc2l6ZSkge1xuXHRcdFx0XHRhYm9ydCA9IHRydWU7XG5cdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgY29udGVudCBzaXplIGF0ICR7X3RoaXM0LnVybH0gb3ZlciBsaW1pdDogJHtfdGhpczQuc2l6ZX1gLCAnbWF4LXNpemUnKSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0YWNjdW1CeXRlcyArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHRhY2N1bS5wdXNoKGNodW5rKTtcblx0XHR9KTtcblxuXHRcdGJvZHkub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChhYm9ydCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNsZWFyVGltZW91dChyZXNUaW1lb3V0KTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmVzb2x2ZShCdWZmZXIuY29uY2F0KGFjY3VtLCBhY2N1bUJ5dGVzKSk7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0Ly8gaGFuZGxlIHN0cmVhbXMgdGhhdCBoYXZlIGFjY3VtdWxhdGVkIHRvbyBtdWNoIGRhdGEgKGlzc3VlICM0MTQpXG5cdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgQ291bGQgbm90IGNyZWF0ZSBCdWZmZXIgZnJvbSByZXNwb25zZSBib2R5IGZvciAke190aGlzNC51cmx9OiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG5cbi8qKlxuICogRGV0ZWN0IGJ1ZmZlciBlbmNvZGluZyBhbmQgY29udmVydCB0byB0YXJnZXQgZW5jb2RpbmdcbiAqIHJlZjogaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9XRC1odG1sNS0yMDExMDExMy9wYXJzaW5nLmh0bWwjZGV0ZXJtaW5pbmctdGhlLWNoYXJhY3Rlci1lbmNvZGluZ1xuICpcbiAqIEBwYXJhbSAgIEJ1ZmZlciAgYnVmZmVyICAgIEluY29taW5nIGJ1ZmZlclxuICogQHBhcmFtICAgU3RyaW5nICBlbmNvZGluZyAgVGFyZ2V0IGVuY29kaW5nXG4gKiBAcmV0dXJuICBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gY29udmVydEJvZHkoYnVmZmVyLCBoZWFkZXJzKSB7XG5cdGlmICh0eXBlb2YgY29udmVydCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignVGhlIHBhY2thZ2UgYGVuY29kaW5nYCBtdXN0IGJlIGluc3RhbGxlZCB0byB1c2UgdGhlIHRleHRDb252ZXJ0ZWQoKSBmdW5jdGlvbicpO1xuXHR9XG5cblx0Y29uc3QgY3QgPSBoZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG5cdGxldCBjaGFyc2V0ID0gJ3V0Zi04Jztcblx0bGV0IHJlcywgc3RyO1xuXG5cdC8vIGhlYWRlclxuXHRpZiAoY3QpIHtcblx0XHRyZXMgPSAvY2hhcnNldD0oW147XSopL2kuZXhlYyhjdCk7XG5cdH1cblxuXHQvLyBubyBjaGFyc2V0IGluIGNvbnRlbnQgdHlwZSwgcGVlayBhdCByZXNwb25zZSBib2R5IGZvciBhdCBtb3N0IDEwMjQgYnl0ZXNcblx0c3RyID0gYnVmZmVyLnNsaWNlKDAsIDEwMjQpLnRvU3RyaW5nKCk7XG5cblx0Ly8gaHRtbDVcblx0aWYgKCFyZXMgJiYgc3RyKSB7XG5cdFx0cmVzID0gLzxtZXRhLis/Y2hhcnNldD0oWydcIl0pKC4rPylcXDEvaS5leGVjKHN0cik7XG5cdH1cblxuXHQvLyBodG1sNFxuXHRpZiAoIXJlcyAmJiBzdHIpIHtcblx0XHRyZXMgPSAvPG1ldGFbXFxzXSs/aHR0cC1lcXVpdj0oWydcIl0pY29udGVudC10eXBlXFwxW1xcc10rP2NvbnRlbnQ9KFsnXCJdKSguKz8pXFwyL2kuZXhlYyhzdHIpO1xuXG5cdFx0aWYgKHJlcykge1xuXHRcdFx0cmVzID0gL2NoYXJzZXQ9KC4qKS9pLmV4ZWMocmVzLnBvcCgpKTtcblx0XHR9XG5cdH1cblxuXHQvLyB4bWxcblx0aWYgKCFyZXMgJiYgc3RyKSB7XG5cdFx0cmVzID0gLzxcXD94bWwuKz9lbmNvZGluZz0oWydcIl0pKC4rPylcXDEvaS5leGVjKHN0cik7XG5cdH1cblxuXHQvLyBmb3VuZCBjaGFyc2V0XG5cdGlmIChyZXMpIHtcblx0XHRjaGFyc2V0ID0gcmVzLnBvcCgpO1xuXG5cdFx0Ly8gcHJldmVudCBkZWNvZGUgaXNzdWVzIHdoZW4gc2l0ZXMgdXNlIGluY29ycmVjdCBlbmNvZGluZ1xuXHRcdC8vIHJlZjogaHR0cHM6Ly9oc2l2b25lbi5maS9lbmNvZGluZy1tZW51L1xuXHRcdGlmIChjaGFyc2V0ID09PSAnZ2IyMzEyJyB8fCBjaGFyc2V0ID09PSAnZ2JrJykge1xuXHRcdFx0Y2hhcnNldCA9ICdnYjE4MDMwJztcblx0XHR9XG5cdH1cblxuXHQvLyB0dXJuIHJhdyBidWZmZXJzIGludG8gYSBzaW5nbGUgdXRmLTggYnVmZmVyXG5cdHJldHVybiBjb252ZXJ0KGJ1ZmZlciwgJ1VURi04JywgY2hhcnNldCkudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKiByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9iaXRpbm4vbm9kZS1mZXRjaC9pc3N1ZXMvMjk2I2lzc3VlY29tbWVudC0zMDc1OTgxNDNcbiAqXG4gKiBAcGFyYW0gICBPYmplY3QgIG9iaiAgICAgT2JqZWN0IHRvIGRldGVjdCBieSB0eXBlIG9yIGJyYW5kXG4gKiBAcmV0dXJuICBTdHJpbmdcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXMob2JqKSB7XG5cdC8vIER1Y2stdHlwaW5nIGFzIGEgbmVjZXNzYXJ5IGNvbmRpdGlvbi5cblx0aWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IHR5cGVvZiBvYmouYXBwZW5kICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZGVsZXRlICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZ2V0ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouZ2V0QWxsICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouaGFzICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBvYmouc2V0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gQnJhbmQtY2hlY2tpbmcgYW5kIG1vcmUgZHVjay10eXBpbmcgYXMgb3B0aW9uYWwgY29uZGl0aW9uLlxuXHRyZXR1cm4gb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdVUkxTZWFyY2hQYXJhbXMnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBVUkxTZWFyY2hQYXJhbXNdJyB8fCB0eXBlb2Ygb2JqLnNvcnQgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYG9iamAgaXMgYSBXM0MgYEJsb2JgIG9iamVjdCAod2hpY2ggYEZpbGVgIGluaGVyaXRzIGZyb20pXG4gKiBAcGFyYW0gIHsqfSBvYmpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQmxvYihvYmopIHtcblx0cmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmouYXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai50eXBlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb2JqLnN0cmVhbSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ3N0cmluZycgJiYgL14oQmxvYnxGaWxlKSQvLnRlc3Qob2JqLmNvbnN0cnVjdG9yLm5hbWUpICYmIC9eKEJsb2J8RmlsZSkkLy50ZXN0KG9ialtTeW1ib2wudG9TdHJpbmdUYWddKTtcbn1cblxuLyoqXG4gKiBDbG9uZSBib2R5IGdpdmVuIFJlcy9SZXEgaW5zdGFuY2VcbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgaW5zdGFuY2UgIFJlc3BvbnNlIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEByZXR1cm4gIE1peGVkXG4gKi9cbmZ1bmN0aW9uIGNsb25lKGluc3RhbmNlKSB7XG5cdGxldCBwMSwgcDI7XG5cdGxldCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXHQvLyBkb24ndCBhbGxvdyBjbG9uaW5nIGEgdXNlZCBib2R5XG5cdGlmIChpbnN0YW5jZS5ib2R5VXNlZCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2Fubm90IGNsb25lIGJvZHkgYWZ0ZXIgaXQgaXMgdXNlZCcpO1xuXHR9XG5cblx0Ly8gY2hlY2sgdGhhdCBib2R5IGlzIGEgc3RyZWFtIGFuZCBub3QgZm9ybS1kYXRhIG9iamVjdFxuXHQvLyBub3RlOiB3ZSBjYW4ndCBjbG9uZSB0aGUgZm9ybS1kYXRhIG9iamVjdCB3aXRob3V0IGhhdmluZyBpdCBhcyBhIGRlcGVuZGVuY3lcblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0gJiYgdHlwZW9mIGJvZHkuZ2V0Qm91bmRhcnkgIT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyB0ZWUgaW5zdGFuY2UgYm9keVxuXHRcdHAxID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdFx0cDIgPSBuZXcgUGFzc1Rocm91Z2goKTtcblx0XHRib2R5LnBpcGUocDEpO1xuXHRcdGJvZHkucGlwZShwMik7XG5cdFx0Ly8gc2V0IGluc3RhbmNlIGJvZHkgdG8gdGVlZCBib2R5IGFuZCByZXR1cm4gdGhlIG90aGVyIHRlZWQgYm9keVxuXHRcdGluc3RhbmNlW0lOVEVSTkFMU10uYm9keSA9IHAxO1xuXHRcdGJvZHkgPSBwMjtcblx0fVxuXG5cdHJldHVybiBib2R5O1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIHRoZSBvcGVyYXRpb24gXCJleHRyYWN0IGEgYENvbnRlbnQtVHlwZWAgdmFsdWUgZnJvbSB8b2JqZWN0fFwiIGFzXG4gKiBzcGVjaWZpZWQgaW4gdGhlIHNwZWNpZmljYXRpb246XG4gKiBodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jY29uY2VwdC1ib2R5aW5pdC1leHRyYWN0XG4gKlxuICogVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgaW5zdGFuY2UuYm9keSBpcyBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSAgIE1peGVkICBpbnN0YW5jZSAgQW55IG9wdGlvbnMuYm9keSBpbnB1dFxuICovXG5mdW5jdGlvbiBleHRyYWN0Q29udGVudFR5cGUoYm9keSkge1xuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgbnVsbFxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuXHRcdC8vIGJvZHkgaXMgc3RyaW5nXG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9IGVsc2UgaWYgKGlzVVJMU2VhcmNoUGFyYW1zKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBhIFVSTFNlYXJjaFBhcmFtc1xuXHRcdHJldHVybiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9VVRGLTgnO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYmxvYlxuXHRcdHJldHVybiBib2R5LnR5cGUgfHwgbnVsbDtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIGlmIChBcnJheUJ1ZmZlci5pc1ZpZXcoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyVmlld1xuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBib2R5LmdldEJvdW5kYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0Ly8gZGV0ZWN0IGZvcm0gZGF0YSBpbnB1dCBmcm9tIGZvcm0tZGF0YSBtb2R1bGVcblx0XHRyZXR1cm4gYG11bHRpcGFydC9mb3JtLWRhdGE7Ym91bmRhcnk9JHtib2R5LmdldEJvdW5kYXJ5KCl9YDtcblx0fSBlbHNlIGlmIChib2R5IGluc3RhbmNlb2YgU3RyZWFtKSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJlYW1cblx0XHQvLyBjYW4ndCByZWFsbHkgZG8gbXVjaCBhYm91dCB0aGlzXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQm9keSBjb25zdHJ1Y3RvciBkZWZhdWx0cyBvdGhlciB0aGluZ3MgdG8gc3RyaW5nXG5cdFx0cmV0dXJuICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnO1xuXHR9XG59XG5cbi8qKlxuICogVGhlIEZldGNoIFN0YW5kYXJkIHRyZWF0cyB0aGlzIGFzIGlmIFwidG90YWwgYnl0ZXNcIiBpcyBhIHByb3BlcnR5IG9uIHRoZSBib2R5LlxuICogRm9yIHVzLCB3ZSBoYXZlIHRvIGV4cGxpY2l0bHkgZ2V0IGl0IHdpdGggYSBmdW5jdGlvbi5cbiAqXG4gKiByZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHktdG90YWwtYnl0ZXNcbiAqXG4gKiBAcGFyYW0gICBCb2R5ICAgIGluc3RhbmNlICAgSW5zdGFuY2Ugb2YgQm9keVxuICogQHJldHVybiAgTnVtYmVyPyAgICAgICAgICAgIE51bWJlciBvZiBieXRlcywgb3IgbnVsbCBpZiBub3QgcG9zc2libGVcbiAqL1xuZnVuY3Rpb24gZ2V0VG90YWxCeXRlcyhpbnN0YW5jZSkge1xuXHRjb25zdCBib2R5ID0gaW5zdGFuY2UuYm9keTtcblxuXG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyBudWxsXG5cdFx0cmV0dXJuIDA7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0cmV0dXJuIGJvZHkuc2l6ZTtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdHJldHVybiBib2R5Lmxlbmd0aDtcblx0fSBlbHNlIGlmIChib2R5ICYmIHR5cGVvZiBib2R5LmdldExlbmd0aFN5bmMgPT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBkZXRlY3QgZm9ybSBkYXRhIGlucHV0IGZyb20gZm9ybS1kYXRhIG1vZHVsZVxuXHRcdGlmIChib2R5Ll9sZW5ndGhSZXRyaWV2ZXJzICYmIGJvZHkuX2xlbmd0aFJldHJpZXZlcnMubGVuZ3RoID09IDAgfHwgLy8gMS54XG5cdFx0Ym9keS5oYXNLbm93bkxlbmd0aCAmJiBib2R5Lmhhc0tub3duTGVuZ3RoKCkpIHtcblx0XHRcdC8vIDIueFxuXHRcdFx0cmV0dXJuIGJvZHkuZ2V0TGVuZ3RoU3luYygpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogV3JpdGUgYSBCb2R5IHRvIGEgTm9kZS5qcyBXcml0YWJsZVN0cmVhbSAoZS5nLiBodHRwLlJlcXVlc3QpIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gICBCb2R5ICAgIGluc3RhbmNlICAgSW5zdGFuY2Ugb2YgQm9keVxuICogQHJldHVybiAgVm9pZFxuICovXG5mdW5jdGlvbiB3cml0ZVRvU3RyZWFtKGRlc3QsIGluc3RhbmNlKSB7XG5cdGNvbnN0IGJvZHkgPSBpbnN0YW5jZS5ib2R5O1xuXG5cblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIG51bGxcblx0XHRkZXN0LmVuZCgpO1xuXHR9IGVsc2UgaWYgKGlzQmxvYihib2R5KSkge1xuXHRcdGJvZHkuc3RyZWFtKCkucGlwZShkZXN0KTtcblx0fSBlbHNlIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGJ1ZmZlclxuXHRcdGRlc3Qud3JpdGUoYm9keSk7XG5cdFx0ZGVzdC5lbmQoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdGJvZHkucGlwZShkZXN0KTtcblx0fVxufVxuXG4vLyBleHBvc2UgUHJvbWlzZVxuQm9keS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbi8qKlxuICogaGVhZGVycy5qc1xuICpcbiAqIEhlYWRlcnMgY2xhc3Mgb2ZmZXJzIGNvbnZlbmllbnQgaGVscGVyc1xuICovXG5cbmNvbnN0IGludmFsaWRUb2tlblJlZ2V4ID0gL1teXFxeX2BhLXpBLVpcXC0wLTkhIyQlJicqKy58fl0vO1xuY29uc3QgaW52YWxpZEhlYWRlckNoYXJSZWdleCA9IC9bXlxcdFxceDIwLVxceDdlXFx4ODAtXFx4ZmZdLztcblxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcblx0bmFtZSA9IGAke25hbWV9YDtcblx0aWYgKGludmFsaWRUb2tlblJlZ2V4LnRlc3QobmFtZSkgfHwgbmFtZSA9PT0gJycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke25hbWV9IGlzIG5vdCBhIGxlZ2FsIEhUVFAgaGVhZGVyIG5hbWVgKTtcblx0fVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XG5cdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0aWYgKGludmFsaWRIZWFkZXJDaGFyUmVnZXgudGVzdCh2YWx1ZSkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGAke3ZhbHVlfSBpcyBub3QgYSBsZWdhbCBIVFRQIGhlYWRlciB2YWx1ZWApO1xuXHR9XG59XG5cbi8qKlxuICogRmluZCB0aGUga2V5IGluIHRoZSBtYXAgb2JqZWN0IGdpdmVuIGEgaGVhZGVyIG5hbWUuXG4gKlxuICogUmV0dXJucyB1bmRlZmluZWQgaWYgbm90IGZvdW5kLlxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgSGVhZGVyIG5hbWVcbiAqIEByZXR1cm4gIFN0cmluZ3xVbmRlZmluZWRcbiAqL1xuZnVuY3Rpb24gZmluZChtYXAsIG5hbWUpIHtcblx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0Zm9yIChjb25zdCBrZXkgaW4gbWFwKSB7XG5cdFx0aWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBuYW1lKSB7XG5cdFx0XHRyZXR1cm4ga2V5O1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5jb25zdCBNQVAgPSBTeW1ib2woJ21hcCcpO1xuY2xhc3MgSGVhZGVycyB7XG5cdC8qKlxuICAqIEhlYWRlcnMgY2xhc3NcbiAgKlxuICAqIEBwYXJhbSAgIE9iamVjdCAgaGVhZGVycyAgUmVzcG9uc2UgaGVhZGVyc1xuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGluaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZDtcblxuXHRcdHRoaXNbTUFQXSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0XHRpZiAoaW5pdCBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcblx0XHRcdGNvbnN0IHJhd0hlYWRlcnMgPSBpbml0LnJhdygpO1xuXHRcdFx0Y29uc3QgaGVhZGVyTmFtZXMgPSBPYmplY3Qua2V5cyhyYXdIZWFkZXJzKTtcblxuXHRcdFx0Zm9yIChjb25zdCBoZWFkZXJOYW1lIG9mIGhlYWRlck5hbWVzKSB7XG5cdFx0XHRcdGZvciAoY29uc3QgdmFsdWUgb2YgcmF3SGVhZGVyc1toZWFkZXJOYW1lXSkge1xuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGhlYWRlck5hbWUsIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gV2UgZG9uJ3Qgd29ycnkgYWJvdXQgY29udmVydGluZyBwcm9wIHRvIEJ5dGVTdHJpbmcgaGVyZSBhcyBhcHBlbmQoKVxuXHRcdC8vIHdpbGwgaGFuZGxlIGl0LlxuXHRcdGlmIChpbml0ID09IG51bGwpIDsgZWxzZSBpZiAodHlwZW9mIGluaXQgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRjb25zdCBtZXRob2QgPSBpbml0W1N5bWJvbC5pdGVyYXRvcl07XG5cdFx0XHRpZiAobWV0aG9kICE9IG51bGwpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBtZXRob2QgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdIZWFkZXIgcGFpcnMgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gc2VxdWVuY2U8c2VxdWVuY2U8Qnl0ZVN0cmluZz4+XG5cdFx0XHRcdC8vIE5vdGU6IHBlciBzcGVjIHdlIGhhdmUgdG8gZmlyc3QgZXhoYXVzdCB0aGUgbGlzdHMgdGhlbiBwcm9jZXNzIHRoZW1cblx0XHRcdFx0Y29uc3QgcGFpcnMgPSBbXTtcblx0XHRcdFx0Zm9yIChjb25zdCBwYWlyIG9mIGluaXQpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHBhaXIgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBwYWlyW1N5bWJvbC5pdGVyYXRvcl0gIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VhY2ggaGVhZGVyIHBhaXIgbXVzdCBiZSBpdGVyYWJsZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwYWlycy5wdXNoKEFycmF5LmZyb20ocGFpcikpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCBwYWlyIG9mIHBhaXJzKSB7XG5cdFx0XHRcdFx0aWYgKHBhaXIubGVuZ3RoICE9PSAyKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFYWNoIGhlYWRlciBwYWlyIG11c3QgYmUgYSBuYW1lL3ZhbHVlIHR1cGxlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKHBhaXJbMF0sIHBhaXJbMV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZWNvcmQ8Qnl0ZVN0cmluZywgQnl0ZVN0cmluZz5cblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaW5pdCkpIHtcblx0XHRcdFx0XHRjb25zdCB2YWx1ZSA9IGluaXRba2V5XTtcblx0XHRcdFx0XHR0aGlzLmFwcGVuZChrZXksIHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm92aWRlZCBpbml0aWFsaXplciBtdXN0IGJlIGFuIG9iamVjdCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIFJldHVybiBjb21iaW5lZCBoZWFkZXIgdmFsdWUgZ2l2ZW4gbmFtZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICBIZWFkZXIgbmFtZVxuICAqIEByZXR1cm4gIE1peGVkXG4gICovXG5cdGdldChuYW1lKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdGlmIChrZXkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXNbTUFQXVtrZXldLmpvaW4oJywgJyk7XG5cdH1cblxuXHQvKipcbiAgKiBJdGVyYXRlIG92ZXIgYWxsIGhlYWRlcnNcbiAgKlxuICAqIEBwYXJhbSAgIEZ1bmN0aW9uICBjYWxsYmFjayAgRXhlY3V0ZWQgZm9yIGVhY2ggaXRlbSB3aXRoIHBhcmFtZXRlcnMgKHZhbHVlLCBuYW1lLCB0aGlzQXJnKVxuICAqIEBwYXJhbSAgIEJvb2xlYW4gICB0aGlzQXJnICAgYHRoaXNgIGNvbnRleHQgZm9yIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRmb3JFYWNoKGNhbGxiYWNrKSB7XG5cdFx0bGV0IHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcblxuXHRcdGxldCBwYWlycyA9IGdldEhlYWRlcnModGhpcyk7XG5cdFx0bGV0IGkgPSAwO1xuXHRcdHdoaWxlIChpIDwgcGFpcnMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgX3BhaXJzJGkgPSBwYWlyc1tpXTtcblx0XHRcdGNvbnN0IG5hbWUgPSBfcGFpcnMkaVswXSxcblx0XHRcdCAgICAgIHZhbHVlID0gX3BhaXJzJGlbMV07XG5cblx0XHRcdGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuXHRcdFx0cGFpcnMgPSBnZXRIZWFkZXJzKHRoaXMpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIE92ZXJ3cml0ZSBoZWFkZXIgdmFsdWVzIGdpdmVuIG5hbWVcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgIEhlYWRlciBuYW1lXG4gICogQHBhcmFtICAgU3RyaW5nICB2YWx1ZSAgSGVhZGVyIHZhbHVlXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRzZXQobmFtZSwgdmFsdWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0dmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdHRoaXNbTUFQXVtrZXkgIT09IHVuZGVmaW5lZCA/IGtleSA6IG5hbWVdID0gW3ZhbHVlXTtcblx0fVxuXG5cdC8qKlxuICAqIEFwcGVuZCBhIHZhbHVlIG9udG8gZXhpc3RpbmcgaGVhZGVyXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgICBIZWFkZXIgbmFtZVxuICAqIEBwYXJhbSAgIFN0cmluZyAgdmFsdWUgIEhlYWRlciB2YWx1ZVxuICAqIEByZXR1cm4gIFZvaWRcbiAgKi9cblx0YXBwZW5kKG5hbWUsIHZhbHVlKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWx1ZSA9IGAke3ZhbHVlfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHZhbGlkYXRlVmFsdWUodmFsdWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXNbTUFQXVtrZXldLnB1c2godmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzW01BUF1bbmFtZV0gPSBbdmFsdWVdO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIENoZWNrIGZvciBoZWFkZXIgbmFtZSBleGlzdGVuY2VcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgQm9vbGVhblxuICAqL1xuXHRoYXMobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdHJldHVybiBmaW5kKHRoaXNbTUFQXSwgbmFtZSkgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdC8qKlxuICAqIERlbGV0ZSBhbGwgaGVhZGVyIHZhbHVlcyBnaXZlbiBuYW1lXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRkZWxldGUobmFtZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsaWRhdGVOYW1lKG5hbWUpO1xuXHRcdGNvbnN0IGtleSA9IGZpbmQodGhpc1tNQVBdLCBuYW1lKTtcblx0XHRpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRlbGV0ZSB0aGlzW01BUF1ba2V5XTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBSZXR1cm4gcmF3IGhlYWRlcnMgKG5vbi1zcGVjIGFwaSlcbiAgKlxuICAqIEByZXR1cm4gIE9iamVjdFxuICAqL1xuXHRyYXcoKSB7XG5cdFx0cmV0dXJuIHRoaXNbTUFQXTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiBrZXlzLlxuICAqXG4gICogQHJldHVybiAgSXRlcmF0b3JcbiAgKi9cblx0a2V5cygpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICdrZXknKTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiB2YWx1ZXMuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHR2YWx1ZXMoKSB7XG5cdFx0cmV0dXJuIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0aGlzLCAndmFsdWUnKTtcblx0fVxuXG5cdC8qKlxuICAqIEdldCBhbiBpdGVyYXRvciBvbiBlbnRyaWVzLlxuICAqXG4gICogVGhpcyBpcyB0aGUgZGVmYXVsdCBpdGVyYXRvciBvZiB0aGUgSGVhZGVycyBvYmplY3QuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHRbU3ltYm9sLml0ZXJhdG9yXSgpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICdrZXkrdmFsdWUnKTtcblx0fVxufVxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFkZXJzLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnSGVhZGVycycsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEhlYWRlcnMucHJvdG90eXBlLCB7XG5cdGdldDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGZvckVhY2g6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzZXQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRhcHBlbmQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRoYXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRkZWxldGU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRrZXlzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dmFsdWVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0ZW50cmllczogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRIZWFkZXJzKGhlYWRlcnMpIHtcblx0bGV0IGtpbmQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdrZXkrdmFsdWUnO1xuXG5cdGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhoZWFkZXJzW01BUF0pLnNvcnQoKTtcblx0cmV0dXJuIGtleXMubWFwKGtpbmQgPT09ICdrZXknID8gZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gay50b0xvd2VyQ2FzZSgpO1xuXHR9IDoga2luZCA9PT0gJ3ZhbHVlJyA/IGZ1bmN0aW9uIChrKSB7XG5cdFx0cmV0dXJuIGhlYWRlcnNbTUFQXVtrXS5qb2luKCcsICcpO1xuXHR9IDogZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gW2sudG9Mb3dlckNhc2UoKSwgaGVhZGVyc1tNQVBdW2tdLmpvaW4oJywgJyldO1xuXHR9KTtcbn1cblxuY29uc3QgSU5URVJOQUwgPSBTeW1ib2woJ2ludGVybmFsJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcnNJdGVyYXRvcih0YXJnZXQsIGtpbmQpIHtcblx0Y29uc3QgaXRlcmF0b3IgPSBPYmplY3QuY3JlYXRlKEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSk7XG5cdGl0ZXJhdG9yW0lOVEVSTkFMXSA9IHtcblx0XHR0YXJnZXQsXG5cdFx0a2luZCxcblx0XHRpbmRleDogMFxuXHR9O1xuXHRyZXR1cm4gaXRlcmF0b3I7XG59XG5cbmNvbnN0IEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZih7XG5cdG5leHQoKSB7XG5cdFx0Ly8gaXN0YW5idWwgaWdub3JlIGlmXG5cdFx0aWYgKCF0aGlzIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKSAhPT0gSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBvZiBgdGhpc2AgaXMgbm90IGEgSGVhZGVyc0l0ZXJhdG9yJyk7XG5cdFx0fVxuXG5cdFx0dmFyIF9JTlRFUk5BTCA9IHRoaXNbSU5URVJOQUxdO1xuXHRcdGNvbnN0IHRhcmdldCA9IF9JTlRFUk5BTC50YXJnZXQsXG5cdFx0ICAgICAga2luZCA9IF9JTlRFUk5BTC5raW5kLFxuXHRcdCAgICAgIGluZGV4ID0gX0lOVEVSTkFMLmluZGV4O1xuXG5cdFx0Y29uc3QgdmFsdWVzID0gZ2V0SGVhZGVycyh0YXJnZXQsIGtpbmQpO1xuXHRcdGNvbnN0IGxlbiA9IHZhbHVlcy5sZW5ndGg7XG5cdFx0aWYgKGluZGV4ID49IGxlbikge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dmFsdWU6IHVuZGVmaW5lZCxcblx0XHRcdFx0ZG9uZTogdHJ1ZVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMXS5pbmRleCA9IGluZGV4ICsgMTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHR2YWx1ZTogdmFsdWVzW2luZGV4XSxcblx0XHRcdGRvbmU6IGZhbHNlXG5cdFx0fTtcblx0fVxufSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9iamVjdC5nZXRQcm90b3R5cGVPZihbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ0hlYWRlcnNJdGVyYXRvcicsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogRXhwb3J0IHRoZSBIZWFkZXJzIG9iamVjdCBpbiBhIGZvcm0gdGhhdCBOb2RlLmpzIGNhbiBjb25zdW1lLlxuICpcbiAqIEBwYXJhbSAgIEhlYWRlcnMgIGhlYWRlcnNcbiAqIEByZXR1cm4gIE9iamVjdFxuICovXG5mdW5jdGlvbiBleHBvcnROb2RlQ29tcGF0aWJsZUhlYWRlcnMoaGVhZGVycykge1xuXHRjb25zdCBvYmogPSBPYmplY3QuYXNzaWduKHsgX19wcm90b19fOiBudWxsIH0sIGhlYWRlcnNbTUFQXSk7XG5cblx0Ly8gaHR0cC5yZXF1ZXN0KCkgb25seSBzdXBwb3J0cyBzdHJpbmcgYXMgSG9zdCBoZWFkZXIuIFRoaXMgaGFjayBtYWtlc1xuXHQvLyBzcGVjaWZ5aW5nIGN1c3RvbSBIb3N0IGhlYWRlciBwb3NzaWJsZS5cblx0Y29uc3QgaG9zdEhlYWRlcktleSA9IGZpbmQoaGVhZGVyc1tNQVBdLCAnSG9zdCcpO1xuXHRpZiAoaG9zdEhlYWRlcktleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0b2JqW2hvc3RIZWFkZXJLZXldID0gb2JqW2hvc3RIZWFkZXJLZXldWzBdO1xuXHR9XG5cblx0cmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBIZWFkZXJzIG9iamVjdCBmcm9tIGFuIG9iamVjdCBvZiBoZWFkZXJzLCBpZ25vcmluZyB0aG9zZSB0aGF0IGRvXG4gKiBub3QgY29uZm9ybSB0byBIVFRQIGdyYW1tYXIgcHJvZHVjdGlvbnMuXG4gKlxuICogQHBhcmFtICAgT2JqZWN0ICBvYmogIE9iamVjdCBvZiBoZWFkZXJzXG4gKiBAcmV0dXJuICBIZWFkZXJzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcnNMZW5pZW50KG9iaikge1xuXHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcblx0Zm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKG9iaikpIHtcblx0XHRpZiAoaW52YWxpZFRva2VuUmVnZXgudGVzdChuYW1lKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmIChBcnJheS5pc0FycmF5KG9ialtuYW1lXSkpIHtcblx0XHRcdGZvciAoY29uc3QgdmFsIG9mIG9ialtuYW1lXSkge1xuXHRcdFx0XHRpZiAoaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KHZhbCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaGVhZGVyc1tNQVBdW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0gPSBbdmFsXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRoZWFkZXJzW01BUF1bbmFtZV0ucHVzaCh2YWwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICghaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KG9ialtuYW1lXSkpIHtcblx0XHRcdGhlYWRlcnNbTUFQXVtuYW1lXSA9IFtvYmpbbmFtZV1dO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gaGVhZGVycztcbn1cblxuY29uc3QgSU5URVJOQUxTJDEgPSBTeW1ib2woJ1Jlc3BvbnNlIGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJTVEFUVVNfQ09ERVNcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBTVEFUVVNfQ09ERVMgPSBodHRwLlNUQVRVU19DT0RFUztcblxuLyoqXG4gKiBSZXNwb25zZSBjbGFzc1xuICpcbiAqIEBwYXJhbSAgIFN0cmVhbSAgYm9keSAgUmVhZGFibGUgc3RyZWFtXG4gKiBAcGFyYW0gICBPYmplY3QgIG9wdHMgIFJlc3BvbnNlIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuY2xhc3MgUmVzcG9uc2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgYm9keSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblx0XHRsZXQgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cblx0XHRCb2R5LmNhbGwodGhpcywgYm9keSwgb3B0cyk7XG5cblx0XHRjb25zdCBzdGF0dXMgPSBvcHRzLnN0YXR1cyB8fCAyMDA7XG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdHMuaGVhZGVycyk7XG5cblx0XHRpZiAoYm9keSAhPSBudWxsICYmICFoZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykpIHtcblx0XHRcdGNvbnN0IGNvbnRlbnRUeXBlID0gZXh0cmFjdENvbnRlbnRUeXBlKGJvZHkpO1xuXHRcdFx0aWYgKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpc1tJTlRFUk5BTFMkMV0gPSB7XG5cdFx0XHR1cmw6IG9wdHMudXJsLFxuXHRcdFx0c3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogb3B0cy5zdGF0dXNUZXh0IHx8IFNUQVRVU19DT0RFU1tzdGF0dXNdLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdGNvdW50ZXI6IG9wdHMuY291bnRlclxuXHRcdH07XG5cdH1cblxuXHRnZXQgdXJsKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS51cmwgfHwgJyc7XG5cdH1cblxuXHRnZXQgc3RhdHVzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXM7XG5cdH1cblxuXHQvKipcbiAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSByZXByZXNlbnRpbmcgaWYgdGhlIHJlcXVlc3QgZW5kZWQgbm9ybWFsbHlcbiAgKi9cblx0Z2V0IG9rKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXMgPj0gMjAwICYmIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cyA8IDMwMDtcblx0fVxuXG5cdGdldCByZWRpcmVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5jb3VudGVyID4gMDtcblx0fVxuXG5cdGdldCBzdGF0dXNUZXh0KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQxXS5zdGF0dXNUZXh0O1xuXHR9XG5cblx0Z2V0IGhlYWRlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLmhlYWRlcnM7XG5cdH1cblxuXHQvKipcbiAgKiBDbG9uZSB0aGlzIHJlc3BvbnNlXG4gICpcbiAgKiBAcmV0dXJuICBSZXNwb25zZVxuICAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlc3BvbnNlKGNsb25lKHRoaXMpLCB7XG5cdFx0XHR1cmw6IHRoaXMudXJsLFxuXHRcdFx0c3RhdHVzOiB0aGlzLnN0YXR1cyxcblx0XHRcdHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcblx0XHRcdGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcblx0XHRcdG9rOiB0aGlzLm9rLFxuXHRcdFx0cmVkaXJlY3RlZDogdGhpcy5yZWRpcmVjdGVkXG5cdFx0fSk7XG5cdH1cbn1cblxuQm9keS5taXhJbihSZXNwb25zZS5wcm90b3R5cGUpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhSZXNwb25zZS5wcm90b3R5cGUsIHtcblx0dXJsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c3RhdHVzOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0b2s6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRyZWRpcmVjdGVkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c3RhdHVzVGV4dDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhlYWRlcnM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRjbG9uZTogeyBlbnVtZXJhYmxlOiB0cnVlIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVzcG9uc2UucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdSZXNwb25zZScsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbmNvbnN0IElOVEVSTkFMUyQyID0gU3ltYm9sKCdSZXF1ZXN0IGludGVybmFscycpO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJmb3JtYXRcIiwgXCJwYXJzZVwiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IHBhcnNlX3VybCA9IFVybC5wYXJzZTtcbmNvbnN0IGZvcm1hdF91cmwgPSBVcmwuZm9ybWF0O1xuXG5jb25zdCBzdHJlYW1EZXN0cnVjdGlvblN1cHBvcnRlZCA9ICdkZXN0cm95JyBpbiBTdHJlYW0uUmVhZGFibGUucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgUmVxdWVzdC5cbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgIGlucHV0XG4gKiBAcmV0dXJuICBCb29sZWFuXG4gKi9cbmZ1bmN0aW9uIGlzUmVxdWVzdChpbnB1dCkge1xuXHRyZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgaW5wdXRbSU5URVJOQUxTJDJdID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNBYm9ydFNpZ25hbChzaWduYWwpIHtcblx0Y29uc3QgcHJvdG8gPSBzaWduYWwgJiYgdHlwZW9mIHNpZ25hbCA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNpZ25hbCk7XG5cdHJldHVybiAhIShwcm90byAmJiBwcm90by5jb25zdHJ1Y3Rvci5uYW1lID09PSAnQWJvcnRTaWduYWwnKTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IGNsYXNzXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICBpbnB1dCAgVXJsIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIE9iamVjdCAgaW5pdCAgIEN1c3RvbSBvcHRpb25zXG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmNsYXNzIFJlcXVlc3Qge1xuXHRjb25zdHJ1Y3RvcihpbnB1dCkge1xuXHRcdGxldCBpbml0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuXHRcdGxldCBwYXJzZWRVUkw7XG5cblx0XHQvLyBub3JtYWxpemUgaW5wdXRcblx0XHRpZiAoIWlzUmVxdWVzdChpbnB1dCkpIHtcblx0XHRcdGlmIChpbnB1dCAmJiBpbnB1dC5ocmVmKSB7XG5cdFx0XHRcdC8vIGluIG9yZGVyIHRvIHN1cHBvcnQgTm9kZS5qcycgVXJsIG9iamVjdHM7IHRob3VnaCBXSEFUV0cncyBVUkwgb2JqZWN0c1xuXHRcdFx0XHQvLyB3aWxsIGZhbGwgaW50byB0aGlzIGJyYW5jaCBhbHNvIChzaW5jZSB0aGVpciBgdG9TdHJpbmcoKWAgd2lsbCByZXR1cm5cblx0XHRcdFx0Ly8gYGhyZWZgIHByb3BlcnR5IGFueXdheSlcblx0XHRcdFx0cGFyc2VkVVJMID0gcGFyc2VfdXJsKGlucHV0LmhyZWYpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY29lcmNlIGlucHV0IHRvIGEgc3RyaW5nIGJlZm9yZSBhdHRlbXB0aW5nIHRvIHBhcnNlXG5cdFx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlX3VybChgJHtpbnB1dH1gKTtcblx0XHRcdH1cblx0XHRcdGlucHV0ID0ge307XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBhcnNlZFVSTCA9IHBhcnNlX3VybChpbnB1dC51cmwpO1xuXHRcdH1cblxuXHRcdGxldCBtZXRob2QgPSBpbml0Lm1ldGhvZCB8fCBpbnB1dC5tZXRob2QgfHwgJ0dFVCc7XG5cdFx0bWV0aG9kID0gbWV0aG9kLnRvVXBwZXJDYXNlKCk7XG5cblx0XHRpZiAoKGluaXQuYm9keSAhPSBudWxsIHx8IGlzUmVxdWVzdChpbnB1dCkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCkgJiYgKG1ldGhvZCA9PT0gJ0dFVCcgfHwgbWV0aG9kID09PSAnSEVBRCcpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdSZXF1ZXN0IHdpdGggR0VUL0hFQUQgbWV0aG9kIGNhbm5vdCBoYXZlIGJvZHknKTtcblx0XHR9XG5cblx0XHRsZXQgaW5wdXRCb2R5ID0gaW5pdC5ib2R5ICE9IG51bGwgPyBpbml0LmJvZHkgOiBpc1JlcXVlc3QoaW5wdXQpICYmIGlucHV0LmJvZHkgIT09IG51bGwgPyBjbG9uZShpbnB1dCkgOiBudWxsO1xuXG5cdFx0Qm9keS5jYWxsKHRoaXMsIGlucHV0Qm9keSwge1xuXHRcdFx0dGltZW91dDogaW5pdC50aW1lb3V0IHx8IGlucHV0LnRpbWVvdXQgfHwgMCxcblx0XHRcdHNpemU6IGluaXQuc2l6ZSB8fCBpbnB1dC5zaXplIHx8IDBcblx0XHR9KTtcblxuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbml0LmhlYWRlcnMgfHwgaW5wdXQuaGVhZGVycyB8fCB7fSk7XG5cblx0XHRpZiAoaW5wdXRCb2R5ICE9IG51bGwgJiYgIWhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoaW5wdXRCb2R5KTtcblx0XHRcdGlmIChjb250ZW50VHlwZSkge1xuXHRcdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBzaWduYWwgPSBpc1JlcXVlc3QoaW5wdXQpID8gaW5wdXQuc2lnbmFsIDogbnVsbDtcblx0XHRpZiAoJ3NpZ25hbCcgaW4gaW5pdCkgc2lnbmFsID0gaW5pdC5zaWduYWw7XG5cblx0XHRpZiAoc2lnbmFsICE9IG51bGwgJiYgIWlzQWJvcnRTaWduYWwoc2lnbmFsKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgc2lnbmFsIHRvIGJlIGFuIGluc3RhbmNlb2YgQWJvcnRTaWduYWwnKTtcblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMUyQyXSA9IHtcblx0XHRcdG1ldGhvZCxcblx0XHRcdHJlZGlyZWN0OiBpbml0LnJlZGlyZWN0IHx8IGlucHV0LnJlZGlyZWN0IHx8ICdmb2xsb3cnLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdHBhcnNlZFVSTCxcblx0XHRcdHNpZ25hbFxuXHRcdH07XG5cblx0XHQvLyBub2RlLWZldGNoLW9ubHkgb3B0aW9uc1xuXHRcdHRoaXMuZm9sbG93ID0gaW5pdC5mb2xsb3cgIT09IHVuZGVmaW5lZCA/IGluaXQuZm9sbG93IDogaW5wdXQuZm9sbG93ICE9PSB1bmRlZmluZWQgPyBpbnB1dC5mb2xsb3cgOiAyMDtcblx0XHR0aGlzLmNvbXByZXNzID0gaW5pdC5jb21wcmVzcyAhPT0gdW5kZWZpbmVkID8gaW5pdC5jb21wcmVzcyA6IGlucHV0LmNvbXByZXNzICE9PSB1bmRlZmluZWQgPyBpbnB1dC5jb21wcmVzcyA6IHRydWU7XG5cdFx0dGhpcy5jb3VudGVyID0gaW5pdC5jb3VudGVyIHx8IGlucHV0LmNvdW50ZXIgfHwgMDtcblx0XHR0aGlzLmFnZW50ID0gaW5pdC5hZ2VudCB8fCBpbnB1dC5hZ2VudDtcblx0fVxuXG5cdGdldCBtZXRob2QoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLm1ldGhvZDtcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIGZvcm1hdF91cmwodGhpc1tJTlRFUk5BTFMkMl0ucGFyc2VkVVJMKTtcblx0fVxuXG5cdGdldCBoZWFkZXJzKCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5oZWFkZXJzO1xuXHR9XG5cblx0Z2V0IHJlZGlyZWN0KCkge1xuXHRcdHJldHVybiB0aGlzW0lOVEVSTkFMUyQyXS5yZWRpcmVjdDtcblx0fVxuXG5cdGdldCBzaWduYWwoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLnNpZ25hbDtcblx0fVxuXG5cdC8qKlxuICAqIENsb25lIHRoaXMgcmVxdWVzdFxuICAqXG4gICogQHJldHVybiAgUmVxdWVzdFxuICAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFJlcXVlc3QodGhpcyk7XG5cdH1cbn1cblxuQm9keS5taXhJbihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXF1ZXN0LnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnUmVxdWVzdCcsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlcXVlc3QucHJvdG90eXBlLCB7XG5cdG1ldGhvZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHVybDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhlYWRlcnM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRyZWRpcmVjdDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGNsb25lOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0c2lnbmFsOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbi8qKlxuICogQ29udmVydCBhIFJlcXVlc3QgdG8gTm9kZS5qcyBodHRwIHJlcXVlc3Qgb3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gICBSZXF1ZXN0ICBBIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEByZXR1cm4gIE9iamVjdCAgIFRoZSBvcHRpb25zIG9iamVjdCB0byBiZSBwYXNzZWQgdG8gaHR0cC5yZXF1ZXN0XG4gKi9cbmZ1bmN0aW9uIGdldE5vZGVSZXF1ZXN0T3B0aW9ucyhyZXF1ZXN0KSB7XG5cdGNvbnN0IHBhcnNlZFVSTCA9IHJlcXVlc3RbSU5URVJOQUxTJDJdLnBhcnNlZFVSTDtcblx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlcXVlc3RbSU5URVJOQUxTJDJdLmhlYWRlcnMpO1xuXG5cdC8vIGZldGNoIHN0ZXAgMS4zXG5cdGlmICghaGVhZGVycy5oYXMoJ0FjY2VwdCcpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0FjY2VwdCcsICcqLyonKTtcblx0fVxuXG5cdC8vIEJhc2ljIGZldGNoXG5cdGlmICghcGFyc2VkVVJMLnByb3RvY29sIHx8ICFwYXJzZWRVUkwuaG9zdG5hbWUpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IGFic29sdXRlIFVSTHMgYXJlIHN1cHBvcnRlZCcpO1xuXHR9XG5cblx0aWYgKCEvXmh0dHBzPzokLy50ZXN0KHBhcnNlZFVSTC5wcm90b2NvbCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPbmx5IEhUVFAoUykgcHJvdG9jb2xzIGFyZSBzdXBwb3J0ZWQnKTtcblx0fVxuXG5cdGlmIChyZXF1ZXN0LnNpZ25hbCAmJiByZXF1ZXN0LmJvZHkgaW5zdGFuY2VvZiBTdHJlYW0uUmVhZGFibGUgJiYgIXN0cmVhbURlc3RydWN0aW9uU3VwcG9ydGVkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDYW5jZWxsYXRpb24gb2Ygc3RyZWFtZWQgcmVxdWVzdHMgd2l0aCBBYm9ydFNpZ25hbCBpcyBub3Qgc3VwcG9ydGVkIGluIG5vZGUgPCA4Jyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcHMgMi40LTIuN1xuXHRsZXQgY29udGVudExlbmd0aFZhbHVlID0gbnVsbDtcblx0aWYgKHJlcXVlc3QuYm9keSA9PSBudWxsICYmIC9eKFBPU1R8UFVUKSQvaS50ZXN0KHJlcXVlc3QubWV0aG9kKSkge1xuXHRcdGNvbnRlbnRMZW5ndGhWYWx1ZSA9ICcwJztcblx0fVxuXHRpZiAocmVxdWVzdC5ib2R5ICE9IG51bGwpIHtcblx0XHRjb25zdCB0b3RhbEJ5dGVzID0gZ2V0VG90YWxCeXRlcyhyZXF1ZXN0KTtcblx0XHRpZiAodHlwZW9mIHRvdGFsQnl0ZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRjb250ZW50TGVuZ3RoVmFsdWUgPSBTdHJpbmcodG90YWxCeXRlcyk7XG5cdFx0fVxuXHR9XG5cdGlmIChjb250ZW50TGVuZ3RoVmFsdWUpIHtcblx0XHRoZWFkZXJzLnNldCgnQ29udGVudC1MZW5ndGgnLCBjb250ZW50TGVuZ3RoVmFsdWUpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXAgMi4xMVxuXHRpZiAoIWhlYWRlcnMuaGFzKCdVc2VyLUFnZW50JykpIHtcblx0XHRoZWFkZXJzLnNldCgnVXNlci1BZ2VudCcsICdub2RlLWZldGNoLzEuMCAoK2h0dHBzOi8vZ2l0aHViLmNvbS9iaXRpbm4vbm9kZS1mZXRjaCknKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwIDIuMTVcblx0aWYgKHJlcXVlc3QuY29tcHJlc3MgJiYgIWhlYWRlcnMuaGFzKCdBY2NlcHQtRW5jb2RpbmcnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdBY2NlcHQtRW5jb2RpbmcnLCAnZ3ppcCxkZWZsYXRlJyk7XG5cdH1cblxuXHRsZXQgYWdlbnQgPSByZXF1ZXN0LmFnZW50O1xuXHRpZiAodHlwZW9mIGFnZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0YWdlbnQgPSBhZ2VudChwYXJzZWRVUkwpO1xuXHR9XG5cblx0aWYgKCFoZWFkZXJzLmhhcygnQ29ubmVjdGlvbicpICYmICFhZ2VudCkge1xuXHRcdGhlYWRlcnMuc2V0KCdDb25uZWN0aW9uJywgJ2Nsb3NlJyk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCA0LjJcblx0Ly8gY2h1bmtlZCBlbmNvZGluZyBpcyBoYW5kbGVkIGJ5IE5vZGUuanNcblxuXHRyZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkVVJMLCB7XG5cdFx0bWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcblx0XHRoZWFkZXJzOiBleHBvcnROb2RlQ29tcGF0aWJsZUhlYWRlcnMoaGVhZGVycyksXG5cdFx0YWdlbnRcblx0fSk7XG59XG5cbi8qKlxuICogYWJvcnQtZXJyb3IuanNcbiAqXG4gKiBBYm9ydEVycm9yIGludGVyZmFjZSBmb3IgY2FuY2VsbGVkIHJlcXVlc3RzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgQWJvcnRFcnJvciBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIG1lc3NhZ2UgICAgICBFcnJvciBtZXNzYWdlIGZvciBodW1hblxuICogQHJldHVybiAgQWJvcnRFcnJvclxuICovXG5mdW5jdGlvbiBBYm9ydEVycm9yKG1lc3NhZ2UpIHtcbiAgRXJyb3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICB0aGlzLnR5cGUgPSAnYWJvcnRlZCc7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cbiAgLy8gaGlkZSBjdXN0b20gZXJyb3IgaW1wbGVtZW50YXRpb24gZGV0YWlscyBmcm9tIGVuZC11c2Vyc1xuICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbn1cblxuQWJvcnRFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5BYm9ydEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEFib3J0RXJyb3I7XG5BYm9ydEVycm9yLnByb3RvdHlwZS5uYW1lID0gJ0Fib3J0RXJyb3InO1xuXG4vLyBmaXggYW4gaXNzdWUgd2hlcmUgXCJQYXNzVGhyb3VnaFwiLCBcInJlc29sdmVcIiBhcmVuJ3QgYSBuYW1lZCBleHBvcnQgZm9yIG5vZGUgPDEwXG5jb25zdCBQYXNzVGhyb3VnaCQxID0gU3RyZWFtLlBhc3NUaHJvdWdoO1xuY29uc3QgcmVzb2x2ZV91cmwgPSBVcmwucmVzb2x2ZTtcblxuLyoqXG4gKiBGZXRjaCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgIHVybCAgIEFic29sdXRlIHVybCBvciBSZXF1ZXN0IGluc3RhbmNlXG4gKiBAcGFyYW0gICBPYmplY3QgICBvcHRzICBGZXRjaCBvcHRpb25zXG4gKiBAcmV0dXJuICBQcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGZldGNoKHVybCwgb3B0cykge1xuXG5cdC8vIGFsbG93IGN1c3RvbSBwcm9taXNlXG5cdGlmICghZmV0Y2guUHJvbWlzZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignbmF0aXZlIHByb21pc2UgbWlzc2luZywgc2V0IGZldGNoLlByb21pc2UgdG8geW91ciBmYXZvcml0ZSBhbHRlcm5hdGl2ZScpO1xuXHR9XG5cblx0Qm9keS5Qcm9taXNlID0gZmV0Y2guUHJvbWlzZTtcblxuXHQvLyB3cmFwIGh0dHAucmVxdWVzdCBpbnRvIGZldGNoXG5cdHJldHVybiBuZXcgZmV0Y2guUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0Ly8gYnVpbGQgcmVxdWVzdCBvYmplY3Rcblx0XHRjb25zdCByZXF1ZXN0ID0gbmV3IFJlcXVlc3QodXJsLCBvcHRzKTtcblx0XHRjb25zdCBvcHRpb25zID0gZ2V0Tm9kZVJlcXVlc3RPcHRpb25zKHJlcXVlc3QpO1xuXG5cdFx0Y29uc3Qgc2VuZCA9IChvcHRpb25zLnByb3RvY29sID09PSAnaHR0cHM6JyA/IGh0dHBzIDogaHR0cCkucmVxdWVzdDtcblx0XHRjb25zdCBzaWduYWwgPSByZXF1ZXN0LnNpZ25hbDtcblxuXHRcdGxldCByZXNwb25zZSA9IG51bGw7XG5cblx0XHRjb25zdCBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuXHRcdFx0bGV0IGVycm9yID0gbmV3IEFib3J0RXJyb3IoJ1RoZSB1c2VyIGFib3J0ZWQgYSByZXF1ZXN0LicpO1xuXHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdGlmIChyZXF1ZXN0LmJvZHkgJiYgcmVxdWVzdC5ib2R5IGluc3RhbmNlb2YgU3RyZWFtLlJlYWRhYmxlKSB7XG5cdFx0XHRcdHJlcXVlc3QuYm9keS5kZXN0cm95KGVycm9yKTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmJvZHkpIHJldHVybjtcblx0XHRcdHJlc3BvbnNlLmJvZHkuZW1pdCgnZXJyb3InLCBlcnJvcik7XG5cdFx0fTtcblxuXHRcdGlmIChzaWduYWwgJiYgc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdGFib3J0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgYWJvcnRBbmRGaW5hbGl6ZSA9IGZ1bmN0aW9uIGFib3J0QW5kRmluYWxpemUoKSB7XG5cdFx0XHRhYm9ydCgpO1xuXHRcdFx0ZmluYWxpemUoKTtcblx0XHR9O1xuXG5cdFx0Ly8gc2VuZCByZXF1ZXN0XG5cdFx0Y29uc3QgcmVxID0gc2VuZChvcHRpb25zKTtcblx0XHRsZXQgcmVxVGltZW91dDtcblxuXHRcdGlmIChzaWduYWwpIHtcblx0XHRcdHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZpbmFsaXplKCkge1xuXHRcdFx0cmVxLmFib3J0KCk7XG5cdFx0XHRpZiAoc2lnbmFsKSBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdGNsZWFyVGltZW91dChyZXFUaW1lb3V0KTtcblx0XHR9XG5cblx0XHRpZiAocmVxdWVzdC50aW1lb3V0KSB7XG5cdFx0XHRyZXEub25jZSgnc29ja2V0JywgZnVuY3Rpb24gKHNvY2tldCkge1xuXHRcdFx0XHRyZXFUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBuZXR3b3JrIHRpbWVvdXQgYXQ6ICR7cmVxdWVzdC51cmx9YCwgJ3JlcXVlc3QtdGltZW91dCcpKTtcblx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHR9LCByZXF1ZXN0LnRpbWVvdXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVxdWVzdCB0byAke3JlcXVlc3QudXJsfSBmYWlsZWQsIHJlYXNvbjogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdH0pO1xuXG5cdFx0cmVxLm9uKCdyZXNwb25zZScsIGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdGNsZWFyVGltZW91dChyZXFUaW1lb3V0KTtcblxuXHRcdFx0Y29uc3QgaGVhZGVycyA9IGNyZWF0ZUhlYWRlcnNMZW5pZW50KHJlcy5oZWFkZXJzKTtcblxuXHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDVcblx0XHRcdGlmIChmZXRjaC5pc1JlZGlyZWN0KHJlcy5zdGF0dXNDb2RlKSkge1xuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS4yXG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gaGVhZGVycy5nZXQoJ0xvY2F0aW9uJyk7XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuM1xuXHRcdFx0XHRjb25zdCBsb2NhdGlvblVSTCA9IGxvY2F0aW9uID09PSBudWxsID8gbnVsbCA6IHJlc29sdmVfdXJsKHJlcXVlc3QudXJsLCBsb2NhdGlvbik7XG5cblx0XHRcdFx0Ly8gSFRUUCBmZXRjaCBzdGVwIDUuNVxuXHRcdFx0XHRzd2l0Y2ggKHJlcXVlc3QucmVkaXJlY3QpIHtcblx0XHRcdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYHJlZGlyZWN0IG1vZGUgaXMgc2V0IHRvIGVycm9yOiAke3JlcXVlc3QudXJsfWAsICduby1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0Y2FzZSAnbWFudWFsJzpcblx0XHRcdFx0XHRcdC8vIG5vZGUtZmV0Y2gtc3BlY2lmaWMgc3RlcDogbWFrZSBtYW51YWwgcmVkaXJlY3QgYSBiaXQgZWFzaWVyIHRvIHVzZSBieSBzZXR0aW5nIHRoZSBMb2NhdGlvbiBoZWFkZXIgdmFsdWUgdG8gdGhlIHJlc29sdmVkIFVSTC5cblx0XHRcdFx0XHRcdGlmIChsb2NhdGlvblVSTCAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHQvLyBoYW5kbGUgY29ycnVwdGVkIGhlYWRlclxuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdGhlYWRlcnMuc2V0KCdMb2NhdGlvbicsIGxvY2F0aW9uVVJMKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gaXN0YW5idWwgaWdub3JlIG5leHQ6IG5vZGVqcyBzZXJ2ZXIgcHJldmVudCBpbnZhbGlkIHJlc3BvbnNlIGhlYWRlcnMsIHdlIGNhbid0IHRlc3QgdGhpcyB0aHJvdWdoIG5vcm1hbCByZXF1ZXN0XG5cdFx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2ZvbGxvdyc6XG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMlxuXHRcdFx0XHRcdFx0aWYgKGxvY2F0aW9uVVJMID09PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgNVxuXHRcdFx0XHRcdFx0aWYgKHJlcXVlc3QuY291bnRlciA+PSByZXF1ZXN0LmZvbGxvdykge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYG1heGltdW0gcmVkaXJlY3QgcmVhY2hlZCBhdDogJHtyZXF1ZXN0LnVybH1gLCAnbWF4LXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA2IChjb3VudGVyIGluY3JlbWVudClcblx0XHRcdFx0XHRcdC8vIENyZWF0ZSBhIG5ldyBSZXF1ZXN0IG9iamVjdC5cblx0XHRcdFx0XHRcdGNvbnN0IHJlcXVlc3RPcHRzID0ge1xuXHRcdFx0XHRcdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpLFxuXHRcdFx0XHRcdFx0XHRmb2xsb3c6IHJlcXVlc3QuZm9sbG93LFxuXHRcdFx0XHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXIgKyAxLFxuXHRcdFx0XHRcdFx0XHRhZ2VudDogcmVxdWVzdC5hZ2VudCxcblx0XHRcdFx0XHRcdFx0Y29tcHJlc3M6IHJlcXVlc3QuY29tcHJlc3MsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG5cdFx0XHRcdFx0XHRcdGJvZHk6IHJlcXVlc3QuYm9keSxcblx0XHRcdFx0XHRcdFx0c2lnbmFsOiByZXF1ZXN0LnNpZ25hbCxcblx0XHRcdFx0XHRcdFx0dGltZW91dDogcmVxdWVzdC50aW1lb3V0XG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgOVxuXHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlICE9PSAzMDMgJiYgcmVxdWVzdC5ib2R5ICYmIGdldFRvdGFsQnl0ZXMocmVxdWVzdCkgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKCdDYW5ub3QgZm9sbG93IHJlZGlyZWN0IHdpdGggYm9keSBiZWluZyBhIHJlYWRhYmxlIHN0cmVhbScsICd1bnN1cHBvcnRlZC1yZWRpcmVjdCcpKTtcblx0XHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTFcblx0XHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzQ29kZSA9PT0gMzAzIHx8IChyZXMuc3RhdHVzQ29kZSA9PT0gMzAxIHx8IHJlcy5zdGF0dXNDb2RlID09PSAzMDIpICYmIHJlcXVlc3QubWV0aG9kID09PSAnUE9TVCcpIHtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdHMubWV0aG9kID0gJ0dFVCc7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLmJvZHkgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdHJlcXVlc3RPcHRzLmhlYWRlcnMuZGVsZXRlKCdjb250ZW50LWxlbmd0aCcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBIVFRQLXJlZGlyZWN0IGZldGNoIHN0ZXAgMTVcblx0XHRcdFx0XHRcdHJlc29sdmUoZmV0Y2gobmV3IFJlcXVlc3QobG9jYXRpb25VUkwsIHJlcXVlc3RPcHRzKSkpO1xuXHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBwcmVwYXJlIHJlc3BvbnNlXG5cdFx0XHRyZXMub25jZSgnZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRpZiAoc2lnbmFsKSBzaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEFuZEZpbmFsaXplKTtcblx0XHRcdH0pO1xuXHRcdFx0bGV0IGJvZHkgPSByZXMucGlwZShuZXcgUGFzc1Rocm91Z2gkMSgpKTtcblxuXHRcdFx0Y29uc3QgcmVzcG9uc2Vfb3B0aW9ucyA9IHtcblx0XHRcdFx0dXJsOiByZXF1ZXN0LnVybCxcblx0XHRcdFx0c3RhdHVzOiByZXMuc3RhdHVzQ29kZSxcblx0XHRcdFx0c3RhdHVzVGV4dDogcmVzLnN0YXR1c01lc3NhZ2UsXG5cdFx0XHRcdGhlYWRlcnM6IGhlYWRlcnMsXG5cdFx0XHRcdHNpemU6IHJlcXVlc3Quc2l6ZSxcblx0XHRcdFx0dGltZW91dDogcmVxdWVzdC50aW1lb3V0LFxuXHRcdFx0XHRjb3VudGVyOiByZXF1ZXN0LmNvdW50ZXJcblx0XHRcdH07XG5cblx0XHRcdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDEyLjEuMS4zXG5cdFx0XHRjb25zdCBjb2RpbmdzID0gaGVhZGVycy5nZXQoJ0NvbnRlbnQtRW5jb2RpbmcnKTtcblxuXHRcdFx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgMTIuMS4xLjQ6IGhhbmRsZSBjb250ZW50IGNvZGluZ3NcblxuXHRcdFx0Ly8gaW4gZm9sbG93aW5nIHNjZW5hcmlvcyB3ZSBpZ25vcmUgY29tcHJlc3Npb24gc3VwcG9ydFxuXHRcdFx0Ly8gMS4gY29tcHJlc3Npb24gc3VwcG9ydCBpcyBkaXNhYmxlZFxuXHRcdFx0Ly8gMi4gSEVBRCByZXF1ZXN0XG5cdFx0XHQvLyAzLiBubyBDb250ZW50LUVuY29kaW5nIGhlYWRlclxuXHRcdFx0Ly8gNC4gbm8gY29udGVudCByZXNwb25zZSAoMjA0KVxuXHRcdFx0Ly8gNS4gY29udGVudCBub3QgbW9kaWZpZWQgcmVzcG9uc2UgKDMwNClcblx0XHRcdGlmICghcmVxdWVzdC5jb21wcmVzcyB8fCByZXF1ZXN0Lm1ldGhvZCA9PT0gJ0hFQUQnIHx8IGNvZGluZ3MgPT09IG51bGwgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDIwNCB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMzA0KSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGb3IgTm9kZSB2Nitcblx0XHRcdC8vIEJlIGxlc3Mgc3RyaWN0IHdoZW4gZGVjb2RpbmcgY29tcHJlc3NlZCByZXNwb25zZXMsIHNpbmNlIHNvbWV0aW1lc1xuXHRcdFx0Ly8gc2VydmVycyBzZW5kIHNsaWdodGx5IGludmFsaWQgcmVzcG9uc2VzIHRoYXQgYXJlIHN0aWxsIGFjY2VwdGVkXG5cdFx0XHQvLyBieSBjb21tb24gYnJvd3NlcnMuXG5cdFx0XHQvLyBBbHdheXMgdXNpbmcgWl9TWU5DX0ZMVVNIIGlzIHdoYXQgY1VSTCBkb2VzLlxuXHRcdFx0Y29uc3QgemxpYk9wdGlvbnMgPSB7XG5cdFx0XHRcdGZsdXNoOiB6bGliLlpfU1lOQ19GTFVTSCxcblx0XHRcdFx0ZmluaXNoRmx1c2g6IHpsaWIuWl9TWU5DX0ZMVVNIXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBmb3IgZ3ppcFxuXHRcdFx0aWYgKGNvZGluZ3MgPT0gJ2d6aXAnIHx8IGNvZGluZ3MgPT0gJ3gtZ3ppcCcpIHtcblx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUd1bnppcCh6bGliT3B0aW9ucykpO1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9yIGRlZmxhdGVcblx0XHRcdGlmIChjb2RpbmdzID09ICdkZWZsYXRlJyB8fCBjb2RpbmdzID09ICd4LWRlZmxhdGUnKSB7XG5cdFx0XHRcdC8vIGhhbmRsZSB0aGUgaW5mYW1vdXMgcmF3IGRlZmxhdGUgcmVzcG9uc2UgZnJvbSBvbGQgc2VydmVyc1xuXHRcdFx0XHQvLyBhIGhhY2sgZm9yIG9sZCBJSVMgYW5kIEFwYWNoZSBzZXJ2ZXJzXG5cdFx0XHRcdGNvbnN0IHJhdyA9IHJlcy5waXBlKG5ldyBQYXNzVGhyb3VnaCQxKCkpO1xuXHRcdFx0XHRyYXcub25jZSgnZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuXHRcdFx0XHRcdC8vIHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3NTE5ODI4XG5cdFx0XHRcdFx0aWYgKChjaHVua1swXSAmIDB4MEYpID09PSAweDA4KSB7XG5cdFx0XHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlSW5mbGF0ZSgpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ym9keSA9IGJvZHkucGlwZSh6bGliLmNyZWF0ZUluZmxhdGVSYXcoKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBmb3IgYnJcblx0XHRcdGlmIChjb2RpbmdzID09ICdicicgJiYgdHlwZW9mIHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlQnJvdGxpRGVjb21wcmVzcygpKTtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIG90aGVyd2lzZSwgdXNlIHJlc3BvbnNlIGFzLWlzXG5cdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdH0pO1xuXG5cdFx0d3JpdGVUb1N0cmVhbShyZXEsIHJlcXVlc3QpO1xuXHR9KTtcbn1cbi8qKlxuICogUmVkaXJlY3QgY29kZSBtYXRjaGluZ1xuICpcbiAqIEBwYXJhbSAgIE51bWJlciAgIGNvZGUgIFN0YXR1cyBjb2RlXG4gKiBAcmV0dXJuICBCb29sZWFuXG4gKi9cbmZldGNoLmlzUmVkaXJlY3QgPSBmdW5jdGlvbiAoY29kZSkge1xuXHRyZXR1cm4gY29kZSA9PT0gMzAxIHx8IGNvZGUgPT09IDMwMiB8fCBjb2RlID09PSAzMDMgfHwgY29kZSA9PT0gMzA3IHx8IGNvZGUgPT09IDMwODtcbn07XG5cbi8vIGV4cG9zZSBQcm9taXNlXG5mZXRjaC5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbmZ1bmN0aW9uIGdldF9wYWdlX2hhbmRsZXIoXG5cdG1hbmlmZXN0LFxuXHRzZXNzaW9uX2dldHRlclxuKSB7XG5cdGNvbnN0IGdldF9idWlsZF9pbmZvID0gZGV2XG5cdFx0PyAoKSA9PiBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnYnVpbGQuanNvbicpLCAndXRmLTgnKSlcblx0XHQ6IChhc3NldHMgPT4gKCkgPT4gYXNzZXRzKShKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnYnVpbGQuanNvbicpLCAndXRmLTgnKSkpO1xuXG5cdGNvbnN0IHRlbXBsYXRlID0gZGV2XG5cdFx0PyAoKSA9PiByZWFkX3RlbXBsYXRlKHNyY19kaXIpXG5cdFx0OiAoc3RyID0+ICgpID0+IHN0cikocmVhZF90ZW1wbGF0ZShidWlsZF9kaXIpKTtcblxuXHRjb25zdCBoYXNfc2VydmljZV93b3JrZXIgPSBmcy5leGlzdHNTeW5jKHBhdGguam9pbihidWlsZF9kaXIsICdzZXJ2aWNlLXdvcmtlci5qcycpKTtcblxuXHRjb25zdCB7IHNlcnZlcl9yb3V0ZXMsIHBhZ2VzIH0gPSBtYW5pZmVzdDtcblx0Y29uc3QgZXJyb3Jfcm91dGUgPSBtYW5pZmVzdC5lcnJvcjtcblxuXHRmdW5jdGlvbiBiYWlsKHJlcSwgcmVzLCBlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cblx0XHRjb25zdCBtZXNzYWdlID0gZGV2ID8gZXNjYXBlX2h0bWwoZXJyLm1lc3NhZ2UpIDogJ0ludGVybmFsIHNlcnZlciBlcnJvcic7XG5cblx0XHRyZXMuc3RhdHVzQ29kZSA9IDUwMDtcblx0XHRyZXMuZW5kKGA8cHJlPiR7bWVzc2FnZX08L3ByZT5gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZV9lcnJvcihyZXEsIHJlcywgc3RhdHVzQ29kZSwgZXJyb3IpIHtcblx0XHRoYW5kbGVfcGFnZSh7XG5cdFx0XHRwYXR0ZXJuOiBudWxsLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBudWxsLCBjb21wb25lbnQ6IGVycm9yX3JvdXRlIH1cblx0XHRcdF1cblx0XHR9LCByZXEsIHJlcywgc3RhdHVzQ29kZSwgZXJyb3IgfHwgbmV3IEVycm9yKCdVbmtub3duIGVycm9yIGluIHByZWxvYWQgZnVuY3Rpb24nKSk7XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVfcGFnZShwYWdlLCByZXEsIHJlcywgc3RhdHVzID0gMjAwLCBlcnJvciA9IG51bGwpIHtcblx0XHRjb25zdCBpc19zZXJ2aWNlX3dvcmtlcl9pbmRleCA9IHJlcS5wYXRoID09PSAnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnO1xuXHRcdGNvbnN0IGJ1aWxkX2luZm9cblxuXG5cblxuID0gZ2V0X2J1aWxkX2luZm8oKTtcblxuXHRcdHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2h0bWwnKTtcblx0XHRyZXMuc2V0SGVhZGVyKCdDYWNoZS1Db250cm9sJywgZGV2ID8gJ25vLWNhY2hlJyA6ICdtYXgtYWdlPTYwMCcpO1xuXG5cdFx0Ly8gcHJlbG9hZCBtYWluLmpzIGFuZCBjdXJyZW50IHJvdXRlXG5cdFx0Ly8gVE9ETyBkZXRlY3Qgb3RoZXIgc3R1ZmYgd2UgY2FuIHByZWxvYWQ/IGltYWdlcywgQ1NTLCBmb250cz9cblx0XHRsZXQgcHJlbG9hZGVkX2NodW5rcyA9IEFycmF5LmlzQXJyYXkoYnVpbGRfaW5mby5hc3NldHMubWFpbikgPyBidWlsZF9pbmZvLmFzc2V0cy5tYWluIDogW2J1aWxkX2luZm8uYXNzZXRzLm1haW5dO1xuXHRcdGlmICghZXJyb3IgJiYgIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRwYWdlLnBhcnRzLmZvckVhY2gocGFydCA9PiB7XG5cdFx0XHRcdGlmICghcGFydCkgcmV0dXJuO1xuXG5cdFx0XHRcdC8vIHVzaW5nIGNvbmNhdCBiZWNhdXNlIGl0IGNvdWxkIGJlIGEgc3RyaW5nIG9yIGFuIGFycmF5LiB0aGFua3Mgd2VicGFjayFcblx0XHRcdFx0cHJlbG9hZGVkX2NodW5rcyA9IHByZWxvYWRlZF9jaHVua3MuY29uY2F0KGJ1aWxkX2luZm8uYXNzZXRzW3BhcnQubmFtZV0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKGJ1aWxkX2luZm8uYnVuZGxlciA9PT0gJ3JvbGx1cCcpIHtcblx0XHRcdC8vIFRPRE8gYWRkIGRlcGVuZGVuY2llcyBhbmQgQ1NTXG5cdFx0XHRjb25zdCBsaW5rID0gcHJlbG9hZGVkX2NodW5rc1xuXHRcdFx0XHQuZmlsdGVyKGZpbGUgPT4gZmlsZSAmJiAhZmlsZS5tYXRjaCgvXFwubWFwJC8pKVxuXHRcdFx0XHQubWFwKGZpbGUgPT4gYDwke3JlcS5iYXNlVXJsfS9jbGllbnQvJHtmaWxlfT47cmVsPVwibW9kdWxlcHJlbG9hZFwiYClcblx0XHRcdFx0LmpvaW4oJywgJyk7XG5cblx0XHRcdHJlcy5zZXRIZWFkZXIoJ0xpbmsnLCBsaW5rKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgbGluayA9IHByZWxvYWRlZF9jaHVua3Ncblx0XHRcdFx0LmZpbHRlcihmaWxlID0+IGZpbGUgJiYgIWZpbGUubWF0Y2goL1xcLm1hcCQvKSlcblx0XHRcdFx0Lm1hcCgoZmlsZSkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGFzID0gL1xcLmNzcyQvLnRlc3QoZmlsZSkgPyAnc3R5bGUnIDogJ3NjcmlwdCc7XG5cdFx0XHRcdFx0cmV0dXJuIGA8JHtyZXEuYmFzZVVybH0vY2xpZW50LyR7ZmlsZX0+O3JlbD1cInByZWxvYWRcIjthcz1cIiR7YXN9XCJgO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuam9pbignLCAnKTtcblxuXHRcdFx0cmVzLnNldEhlYWRlcignTGluaycsIGxpbmspO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlc3Npb24gPSBzZXNzaW9uX2dldHRlcihyZXEsIHJlcyk7XG5cblx0XHRsZXQgcmVkaXJlY3Q7XG5cdFx0bGV0IHByZWxvYWRfZXJyb3I7XG5cblx0XHRjb25zdCBwcmVsb2FkX2NvbnRleHQgPSB7XG5cdFx0XHRyZWRpcmVjdDogKHN0YXR1c0NvZGUsIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdGlmIChyZWRpcmVjdCAmJiAocmVkaXJlY3Quc3RhdHVzQ29kZSAhPT0gc3RhdHVzQ29kZSB8fCByZWRpcmVjdC5sb2NhdGlvbiAhPT0gbG9jYXRpb24pKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb25mbGljdGluZyByZWRpcmVjdHNgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2NhdGlvbiA9IGxvY2F0aW9uLnJlcGxhY2UoL15cXC8vZywgJycpOyAvLyBsZWFkaW5nIHNsYXNoIChvbmx5KVxuXHRcdFx0XHRyZWRpcmVjdCA9IHsgc3RhdHVzQ29kZSwgbG9jYXRpb24gfTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogKHN0YXR1c0NvZGUsIG1lc3NhZ2UpID0+IHtcblx0XHRcdFx0cHJlbG9hZF9lcnJvciA9IHsgc3RhdHVzQ29kZSwgbWVzc2FnZSB9O1xuXHRcdFx0fSxcblx0XHRcdGZldGNoOiAodXJsLCBvcHRzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IG5ldyBVcmwuVVJMKHVybCwgYGh0dHA6Ly8xMjcuMC4wLjE6JHtwcm9jZXNzLmVudi5QT1JUfSR7cmVxLmJhc2VVcmwgPyByZXEuYmFzZVVybCArICcvJyA6Jyd9YCk7XG5cblx0XHRcdFx0aWYgKG9wdHMpIHtcblx0XHRcdFx0XHRvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cyk7XG5cblx0XHRcdFx0XHRjb25zdCBpbmNsdWRlX2Nvb2tpZXMgPSAoXG5cdFx0XHRcdFx0XHRvcHRzLmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScgfHxcblx0XHRcdFx0XHRcdG9wdHMuY3JlZGVudGlhbHMgPT09ICdzYW1lLW9yaWdpbicgJiYgcGFyc2VkLm9yaWdpbiA9PT0gYGh0dHA6Ly8xMjcuMC4wLjE6JHtwcm9jZXNzLmVudi5QT1JUfWBcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0aWYgKGluY2x1ZGVfY29va2llcykge1xuXHRcdFx0XHRcdFx0b3B0cy5oZWFkZXJzID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0cy5oZWFkZXJzKTtcblxuXHRcdFx0XHRcdFx0Y29uc3QgY29va2llcyA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHRcdHt9LFxuXHRcdFx0XHRcdFx0XHRjb29raWUucGFyc2UocmVxLmhlYWRlcnMuY29va2llIHx8ICcnKSxcblx0XHRcdFx0XHRcdFx0Y29va2llLnBhcnNlKG9wdHMuaGVhZGVycy5jb29raWUgfHwgJycpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRjb25zdCBzZXRfY29va2llID0gcmVzLmdldEhlYWRlcignU2V0LUNvb2tpZScpO1xuXHRcdFx0XHRcdFx0KEFycmF5LmlzQXJyYXkoc2V0X2Nvb2tpZSkgPyBzZXRfY29va2llIDogW3NldF9jb29raWVdKS5mb3JFYWNoKHN0ciA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG1hdGNoID0gLyhbXj1dKyk9KFteO10rKS8uZXhlYyhzdHIpO1xuXHRcdFx0XHRcdFx0XHRpZiAobWF0Y2gpIGNvb2tpZXNbbWF0Y2hbMV1dID0gbWF0Y2hbMl07XG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Y29uc3Qgc3RyID0gT2JqZWN0LmtleXMoY29va2llcylcblx0XHRcdFx0XHRcdFx0Lm1hcChrZXkgPT4gYCR7a2V5fT0ke2Nvb2tpZXNba2V5XX1gKVxuXHRcdFx0XHRcdFx0XHQuam9pbignOyAnKTtcblxuXHRcdFx0XHRcdFx0b3B0cy5oZWFkZXJzLmNvb2tpZSA9IHN0cjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmV0Y2gocGFyc2VkLmhyZWYsIG9wdHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgcHJlbG9hZGVkO1xuXHRcdGxldCBtYXRjaDtcblx0XHRsZXQgcGFyYW1zO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJvb3RfcHJlbG9hZGVkID0gbWFuaWZlc3Qucm9vdF9wcmVsb2FkXG5cdFx0XHRcdD8gbWFuaWZlc3Qucm9vdF9wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0aG9zdDogcmVxLmhlYWRlcnMuaG9zdCxcblx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRxdWVyeTogcmVxLnF1ZXJ5LFxuXHRcdFx0XHRcdHBhcmFtczoge31cblx0XHRcdFx0fSwgc2Vzc2lvbilcblx0XHRcdFx0OiB7fTtcblxuXHRcdFx0bWF0Y2ggPSBlcnJvciA/IG51bGwgOiBwYWdlLnBhdHRlcm4uZXhlYyhyZXEucGF0aCk7XG5cblxuXHRcdFx0bGV0IHRvUHJlbG9hZCA9IFtyb290X3ByZWxvYWRlZF07XG5cdFx0XHRpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRcdHRvUHJlbG9hZCA9IHRvUHJlbG9hZC5jb25jYXQocGFnZS5wYXJ0cy5tYXAocGFydCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm4gbnVsbDtcblxuXHRcdFx0XHRcdC8vIHRoZSBkZWVwZXN0IGxldmVsIGlzIHVzZWQgYmVsb3csIHRvIGluaXRpYWxpc2UgdGhlIHN0b3JlXG5cdFx0XHRcdFx0cGFyYW1zID0gcGFydC5wYXJhbXMgPyBwYXJ0LnBhcmFtcyhtYXRjaCkgOiB7fTtcblxuXHRcdFx0XHRcdHJldHVybiBwYXJ0LnByZWxvYWRcblx0XHRcdFx0XHRcdD8gcGFydC5wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0XHRcdGhvc3Q6IHJlcS5oZWFkZXJzLmhvc3QsXG5cdFx0XHRcdFx0XHRcdHBhdGg6IHJlcS5wYXRoLFxuXHRcdFx0XHRcdFx0XHRxdWVyeTogcmVxLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0XHRwYXJhbXNcblx0XHRcdFx0XHRcdH0sIHNlc3Npb24pXG5cdFx0XHRcdFx0XHQ6IHt9O1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cblx0XHRcdHByZWxvYWRlZCA9IGF3YWl0IFByb21pc2UuYWxsKHRvUHJlbG9hZCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIGJhaWwocmVxLCByZXMsIGVycilcblx0XHRcdH1cblxuXHRcdFx0cHJlbG9hZF9lcnJvciA9IHsgc3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIgfTtcblx0XHRcdHByZWxvYWRlZCA9IFtdOyAvLyBhcHBlYXNlIFR5cGVTY3JpcHRcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKHJlZGlyZWN0KSB7XG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gVXJsLnJlc29sdmUoKHJlcS5iYXNlVXJsIHx8ICcnKSArICcvJywgcmVkaXJlY3QubG9jYXRpb24pO1xuXG5cdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gcmVkaXJlY3Quc3RhdHVzQ29kZTtcblx0XHRcdFx0cmVzLnNldEhlYWRlcignTG9jYXRpb24nLCBsb2NhdGlvbik7XG5cdFx0XHRcdHJlcy5lbmQoKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmVsb2FkX2Vycm9yKSB7XG5cdFx0XHRcdGhhbmRsZV9lcnJvcihyZXEsIHJlcywgcHJlbG9hZF9lcnJvci5zdGF0dXNDb2RlLCBwcmVsb2FkX2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlZ21lbnRzID0gcmVxLnBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cblx0XHRcdC8vIFRPRE8gbWFrZSB0aGlzIGxlc3MgY29uZnVzaW5nXG5cdFx0XHRjb25zdCBsYXlvdXRfc2VnbWVudHMgPSBbc2VnbWVudHNbMF1dO1xuXHRcdFx0bGV0IGwgPSAxO1xuXG5cdFx0XHRwYWdlLnBhcnRzLmZvckVhY2goKHBhcnQsIGkpID0+IHtcblx0XHRcdFx0bGF5b3V0X3NlZ21lbnRzW2xdID0gc2VnbWVudHNbaSArIDFdO1xuXHRcdFx0XHRpZiAoIXBhcnQpIHJldHVybiBudWxsO1xuXHRcdFx0XHRsKys7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgcHJvcHMgPSB7XG5cdFx0XHRcdHN0b3Jlczoge1xuXHRcdFx0XHRcdHBhZ2U6IHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogd3JpdGFibGUoe1xuXHRcdFx0XHRcdFx0XHRob3N0OiByZXEuaGVhZGVycy5ob3N0LFxuXHRcdFx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRcdFx0cXVlcnk6IHJlcS5xdWVyeSxcblx0XHRcdFx0XHRcdFx0cGFyYW1zXG5cdFx0XHRcdFx0XHR9KS5zdWJzY3JpYmVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHByZWxvYWRpbmc6IHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogd3JpdGFibGUobnVsbCkuc3Vic2NyaWJlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXNzaW9uOiB3cml0YWJsZShzZXNzaW9uKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZWdtZW50czogbGF5b3V0X3NlZ21lbnRzLFxuXHRcdFx0XHRzdGF0dXM6IGVycm9yID8gc3RhdHVzIDogMjAwLFxuXHRcdFx0XHRlcnJvcjogZXJyb3IgPyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiB7IG1lc3NhZ2U6IGVycm9yIH0gOiBudWxsLFxuXHRcdFx0XHRsZXZlbDA6IHtcblx0XHRcdFx0XHRwcm9wczogcHJlbG9hZGVkWzBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxldmVsMToge1xuXHRcdFx0XHRcdHNlZ21lbnQ6IHNlZ21lbnRzWzBdLFxuXHRcdFx0XHRcdHByb3BzOiB7fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRcdGxldCBsID0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlLnBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGFydCA9IHBhZ2UucGFydHNbaV07XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSBjb250aW51ZTtcblxuXHRcdFx0XHRcdHByb3BzW2BsZXZlbCR7bCsrfWBdID0ge1xuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBwYXJ0LmNvbXBvbmVudCxcblx0XHRcdFx0XHRcdHByb3BzOiBwcmVsb2FkZWRbaSArIDFdIHx8IHt9LFxuXHRcdFx0XHRcdFx0c2VnbWVudDogc2VnbWVudHNbaV1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHsgaHRtbCwgaGVhZCwgY3NzIH0gPSBBcHAucmVuZGVyKHByb3BzKTtcblxuXHRcdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHtcblx0XHRcdFx0cHJlbG9hZGVkOiBgWyR7cHJlbG9hZGVkLm1hcChkYXRhID0+IHRyeV9zZXJpYWxpemUoZGF0YSkpLmpvaW4oJywnKX1dYCxcblx0XHRcdFx0c2Vzc2lvbjogc2Vzc2lvbiAmJiB0cnlfc2VyaWFsaXplKHNlc3Npb24sIGVyciA9PiB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc2VyaWFsaXplIHNlc3Npb24gZGF0YTogJHtlcnIubWVzc2FnZX1gKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVycm9yOiBlcnJvciAmJiB0cnlfc2VyaWFsaXplKHByb3BzLmVycm9yKVxuXHRcdFx0fTtcblxuXHRcdFx0bGV0IHNjcmlwdCA9IGBfX1NBUFBFUl9fPXske1tcblx0XHRcdFx0ZXJyb3IgJiYgYGVycm9yOiR7c2VyaWFsaXplZC5lcnJvcn0sc3RhdHVzOiR7c3RhdHVzfWAsXG5cdFx0XHRcdGBiYXNlVXJsOlwiJHtyZXEuYmFzZVVybH1cImAsXG5cdFx0XHRcdHNlcmlhbGl6ZWQucHJlbG9hZGVkICYmIGBwcmVsb2FkZWQ6JHtzZXJpYWxpemVkLnByZWxvYWRlZH1gLFxuXHRcdFx0XHRzZXJpYWxpemVkLnNlc3Npb24gJiYgYHNlc3Npb246JHtzZXJpYWxpemVkLnNlc3Npb259YFxuXHRcdFx0XS5maWx0ZXIoQm9vbGVhbikuam9pbignLCcpfX07YDtcblxuXHRcdFx0aWYgKGhhc19zZXJ2aWNlX3dvcmtlcikge1xuXHRcdFx0XHRzY3JpcHQgKz0gYGlmKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJyR7cmVxLmJhc2VVcmx9L3NlcnZpY2Utd29ya2VyLmpzJyk7YDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZmlsZSA9IFtdLmNvbmNhdChidWlsZF9pbmZvLmFzc2V0cy5tYWluKS5maWx0ZXIoZmlsZSA9PiBmaWxlICYmIC9cXC5qcyQvLnRlc3QoZmlsZSkpWzBdO1xuXHRcdFx0Y29uc3QgbWFpbiA9IGAke3JlcS5iYXNlVXJsfS9jbGllbnQvJHtmaWxlfWA7XG5cblx0XHRcdGlmIChidWlsZF9pbmZvLmJ1bmRsZXIgPT09ICdyb2xsdXAnKSB7XG5cdFx0XHRcdGlmIChidWlsZF9pbmZvLmxlZ2FjeV9hc3NldHMpIHtcblx0XHRcdFx0XHRjb25zdCBsZWdhY3lfbWFpbiA9IGAke3JlcS5iYXNlVXJsfS9jbGllbnQvbGVnYWN5LyR7YnVpbGRfaW5mby5sZWdhY3lfYXNzZXRzLm1haW59YDtcblx0XHRcdFx0XHRzY3JpcHQgKz0gYChmdW5jdGlvbigpe3RyeXtldmFsKFwiYXN5bmMgZnVuY3Rpb24geCgpe31cIik7dmFyIG1haW49XCIke21haW59XCJ9Y2F0Y2goZSl7bWFpbj1cIiR7bGVnYWN5X21haW59XCJ9O3ZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7dHJ5e25ldyBGdW5jdGlvbihcImlmKDApaW1wb3J0KCcnKVwiKSgpO3Muc3JjPW1haW47cy50eXBlPVwibW9kdWxlXCI7cy5jcm9zc09yaWdpbj1cInVzZS1jcmVkZW50aWFsc1wiO31jYXRjaChlKXtzLnNyYz1cIiR7cmVxLmJhc2VVcmx9L2NsaWVudC9zaGltcG9ydEAke2J1aWxkX2luZm8uc2hpbXBvcnR9LmpzXCI7cy5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1haW5cIixtYWluKTt9ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzKTt9KCkpO2A7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2NyaXB0ICs9IGB2YXIgcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3RyeXtuZXcgRnVuY3Rpb24oXCJpZigwKWltcG9ydCgnJylcIikoKTtzLnNyYz1cIiR7bWFpbn1cIjtzLnR5cGU9XCJtb2R1bGVcIjtzLmNyb3NzT3JpZ2luPVwidXNlLWNyZWRlbnRpYWxzXCI7fWNhdGNoKGUpe3Muc3JjPVwiJHtyZXEuYmFzZVVybH0vY2xpZW50L3NoaW1wb3J0QCR7YnVpbGRfaW5mby5zaGltcG9ydH0uanNcIjtzLnNldEF0dHJpYnV0ZShcImRhdGEtbWFpblwiLFwiJHttYWlufVwiKX1kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpYDtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2NyaXB0ICs9IGA8L3NjcmlwdD48c2NyaXB0IHNyYz1cIiR7bWFpbn1cIj5gO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgc3R5bGVzO1xuXG5cdFx0XHQvLyBUT0RPIG1ha2UgdGhpcyBjb25zaXN0ZW50IGFjcm9zcyBhcHBzXG5cdFx0XHQvLyBUT0RPIGVtYmVkIGJ1aWxkX2luZm8gaW4gcGxhY2Vob2xkZXIudHNcblx0XHRcdGlmIChidWlsZF9pbmZvLmNzcyAmJiBidWlsZF9pbmZvLmNzcy5tYWluKSB7XG5cdFx0XHRcdGNvbnN0IGNzc19jaHVua3MgPSBuZXcgU2V0KCk7XG5cdFx0XHRcdGlmIChidWlsZF9pbmZvLmNzcy5tYWluKSBjc3NfY2h1bmtzLmFkZChidWlsZF9pbmZvLmNzcy5tYWluKTtcblx0XHRcdFx0cGFnZS5wYXJ0cy5mb3JFYWNoKHBhcnQgPT4ge1xuXHRcdFx0XHRcdGlmICghcGFydCkgcmV0dXJuO1xuXHRcdFx0XHRcdGNvbnN0IGNzc19jaHVua3NfZm9yX3BhcnQgPSBidWlsZF9pbmZvLmNzcy5jaHVua3NbcGFydC5maWxlXTtcblxuXHRcdFx0XHRcdGlmIChjc3NfY2h1bmtzX2Zvcl9wYXJ0KSB7XG5cdFx0XHRcdFx0XHRjc3NfY2h1bmtzX2Zvcl9wYXJ0LmZvckVhY2goZmlsZSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNzc19jaHVua3MuYWRkKGZpbGUpO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRzdHlsZXMgPSBBcnJheS5mcm9tKGNzc19jaHVua3MpXG5cdFx0XHRcdFx0Lm1hcChocmVmID0+IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNsaWVudC8ke2hyZWZ9XCI+YClcblx0XHRcdFx0XHQuam9pbignJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdHlsZXMgPSAoY3NzICYmIGNzcy5jb2RlID8gYDxzdHlsZT4ke2Nzcy5jb2RlfTwvc3R5bGU+YCA6ICcnKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gdXNlcnMgY2FuIHNldCBhIENTUCBub25jZSB1c2luZyByZXMubG9jYWxzLm5vbmNlXG5cdFx0XHRjb25zdCBub25jZV9hdHRyID0gKHJlcy5sb2NhbHMgJiYgcmVzLmxvY2Fscy5ub25jZSkgPyBgIG5vbmNlPVwiJHtyZXMubG9jYWxzLm5vbmNlfVwiYCA6ICcnO1xuXG5cdFx0XHRjb25zdCBib2R5ID0gdGVtcGxhdGUoKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5iYXNlJScsICgpID0+IGA8YmFzZSBocmVmPVwiJHtyZXEuYmFzZVVybH0vXCI+YClcblx0XHRcdFx0LnJlcGxhY2UoJyVzYXBwZXIuc2NyaXB0cyUnLCAoKSA9PiBgPHNjcmlwdCR7bm9uY2VfYXR0cn0+JHtzY3JpcHR9PC9zY3JpcHQ+YClcblx0XHRcdFx0LnJlcGxhY2UoJyVzYXBwZXIuaHRtbCUnLCAoKSA9PiBodG1sKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5oZWFkJScsICgpID0+IGA8bm9zY3JpcHQgaWQ9J3NhcHBlci1oZWFkLXN0YXJ0Jz48L25vc2NyaXB0PiR7aGVhZH08bm9zY3JpcHQgaWQ9J3NhcHBlci1oZWFkLWVuZCc+PC9ub3NjcmlwdD5gKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5zdHlsZXMlJywgKCkgPT4gc3R5bGVzKTtcblxuXHRcdFx0cmVzLnN0YXR1c0NvZGUgPSBzdGF0dXM7XG5cdFx0XHRyZXMuZW5kKGJvZHkpO1xuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0YmFpbChyZXEsIHJlcywgZXJyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhbmRsZV9lcnJvcihyZXEsIHJlcywgNTAwLCBlcnIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbiBmaW5kX3JvdXRlKHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0aWYgKHJlcS5wYXRoID09PSAnL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWwnKSB7XG5cdFx0XHRjb25zdCBob21lUGFnZSA9IHBhZ2VzLmZpbmQocGFnZSA9PiBwYWdlLnBhdHRlcm4udGVzdCgnLycpKTtcblx0XHRcdGhhbmRsZV9wYWdlKGhvbWVQYWdlLCByZXEsIHJlcyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBwYWdlIG9mIHBhZ2VzKSB7XG5cdFx0XHRpZiAocGFnZS5wYXR0ZXJuLnRlc3QocmVxLnBhdGgpKSB7XG5cdFx0XHRcdGhhbmRsZV9wYWdlKHBhZ2UsIHJlcSwgcmVzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZV9lcnJvcihyZXEsIHJlcywgNDA0LCAnTm90IGZvdW5kJyk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIHJlYWRfdGVtcGxhdGUoZGlyID0gYnVpbGRfZGlyKSB7XG5cdHJldHVybiBmcy5yZWFkRmlsZVN5bmMoYCR7ZGlyfS90ZW1wbGF0ZS5odG1sYCwgJ3V0Zi04Jyk7XG59XG5cbmZ1bmN0aW9uIHRyeV9zZXJpYWxpemUoZGF0YSwgZmFpbCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkZXZhbHVlKGRhdGEpO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRpZiAoZmFpbCkgZmFpbChlcnIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVzY2FwZV9odG1sKGh0bWwpIHtcblx0Y29uc3QgY2hhcnMgPSB7XG5cdFx0J1wiJyA6ICdxdW90Jyxcblx0XHRcIidcIjogJyMzOScsXG5cdFx0JyYnOiAnYW1wJyxcblx0XHQnPCcgOiAnbHQnLFxuXHRcdCc+JyA6ICdndCdcblx0fTtcblxuXHRyZXR1cm4gaHRtbC5yZXBsYWNlKC9bXCInJjw+XS9nLCBjID0+IGAmJHtjaGFyc1tjXX07YCk7XG59XG5cbmZ1bmN0aW9uIG1pZGRsZXdhcmUob3B0c1xuXG5cbiA9IHt9KSB7XG5cdGNvbnN0IHsgc2Vzc2lvbiwgaWdub3JlIH0gPSBvcHRzO1xuXG5cdGxldCBlbWl0dGVkX2Jhc2VwYXRoID0gZmFsc2U7XG5cblx0cmV0dXJuIGNvbXBvc2VfaGFuZGxlcnMoaWdub3JlLCBbXG5cdFx0KHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cdFx0XHRpZiAocmVxLmJhc2VVcmwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsZXQgeyBvcmlnaW5hbFVybCB9ID0gcmVxO1xuXHRcdFx0XHRpZiAocmVxLnVybCA9PT0gJy8nICYmIG9yaWdpbmFsVXJsW29yaWdpbmFsVXJsLmxlbmd0aCAtIDFdICE9PSAnLycpIHtcblx0XHRcdFx0XHRvcmlnaW5hbFVybCArPSAnLyc7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXEuYmFzZVVybCA9IG9yaWdpbmFsVXJsXG5cdFx0XHRcdFx0PyBvcmlnaW5hbFVybC5zbGljZSgwLCAtcmVxLnVybC5sZW5ndGgpXG5cdFx0XHRcdFx0OiAnJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFlbWl0dGVkX2Jhc2VwYXRoICYmIHByb2Nlc3Muc2VuZCkge1xuXHRcdFx0XHRwcm9jZXNzLnNlbmQoe1xuXHRcdFx0XHRcdF9fc2FwcGVyX186IHRydWUsXG5cdFx0XHRcdFx0ZXZlbnQ6ICdiYXNlcGF0aCcsXG5cdFx0XHRcdFx0YmFzZXBhdGg6IHJlcS5iYXNlVXJsXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGVtaXR0ZWRfYmFzZXBhdGggPSB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmVxLnBhdGggPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXEucGF0aCA9IHJlcS51cmwucmVwbGFjZSgvXFw/LiovLCAnJyk7XG5cdFx0XHR9XG5cblx0XHRcdG5leHQoKTtcblx0XHR9LFxuXG5cdFx0ZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnc2VydmljZS13b3JrZXIuanMnKSkgJiYgc2VydmUoe1xuXHRcdFx0cGF0aG5hbWU6ICcvc2VydmljZS13b3JrZXIuanMnLFxuXHRcdFx0Y2FjaGVfY29udHJvbDogJ25vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlJ1xuXHRcdH0pLFxuXG5cdFx0ZnMuZXhpc3RzU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCAnc2VydmljZS13b3JrZXIuanMubWFwJykpICYmIHNlcnZlKHtcblx0XHRcdHBhdGhuYW1lOiAnL3NlcnZpY2Utd29ya2VyLmpzLm1hcCcsXG5cdFx0XHRjYWNoZV9jb250cm9sOiAnbm8tY2FjaGUsIG5vLXN0b3JlLCBtdXN0LXJldmFsaWRhdGUnXG5cdFx0fSksXG5cblx0XHRzZXJ2ZSh7XG5cdFx0XHRwcmVmaXg6ICcvY2xpZW50LycsXG5cdFx0XHRjYWNoZV9jb250cm9sOiBkZXYgPyAnbm8tY2FjaGUnIDogJ21heC1hZ2U9MzE1MzYwMDAsIGltbXV0YWJsZSdcblx0XHR9KSxcblxuXHRcdGdldF9zZXJ2ZXJfcm91dGVfaGFuZGxlcihtYW5pZmVzdC5zZXJ2ZXJfcm91dGVzKSxcblxuXHRcdGdldF9wYWdlX2hhbmRsZXIobWFuaWZlc3QsIHNlc3Npb24gfHwgbm9vcClcblx0XS5maWx0ZXIoQm9vbGVhbikpO1xufVxuXG5mdW5jdGlvbiBjb21wb3NlX2hhbmRsZXJzKGlnbm9yZSwgaGFuZGxlcnMpIHtcblx0Y29uc3QgdG90YWwgPSBoYW5kbGVycy5sZW5ndGg7XG5cblx0ZnVuY3Rpb24gbnRoX2hhbmRsZXIobiwgcmVxLCByZXMsIG5leHQpIHtcblx0XHRpZiAobiA+PSB0b3RhbCkge1xuXHRcdFx0cmV0dXJuIG5leHQoKTtcblx0XHR9XG5cblx0XHRoYW5kbGVyc1tuXShyZXEsIHJlcywgKCkgPT4gbnRoX2hhbmRsZXIobisxLCByZXEsIHJlcywgbmV4dCkpO1xuXHR9XG5cblx0cmV0dXJuICFpZ25vcmVcblx0XHQ/IChyZXEsIHJlcywgbmV4dCkgPT4gbnRoX2hhbmRsZXIoMCwgcmVxLCByZXMsIG5leHQpXG5cdFx0OiAocmVxLCByZXMsIG5leHQpID0+IHtcblx0XHRcdGlmIChzaG91bGRfaWdub3JlKHJlcS5wYXRoLCBpZ25vcmUpKSB7XG5cdFx0XHRcdG5leHQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG50aF9oYW5kbGVyKDAsIHJlcSwgcmVzLCBuZXh0KTtcblx0XHRcdH1cblx0XHR9O1xufVxuXG5mdW5jdGlvbiBzaG91bGRfaWdub3JlKHVyaSwgdmFsKSB7XG5cdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHJldHVybiB2YWwuc29tZSh4ID0+IHNob3VsZF9pZ25vcmUodXJpLCB4KSk7XG5cdGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiB2YWwudGVzdCh1cmkpO1xuXHRpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbCh1cmkpO1xuXHRyZXR1cm4gdXJpLnN0YXJ0c1dpdGgodmFsLmNoYXJDb2RlQXQoMCkgPT09IDQ3ID8gdmFsIDogYC8ke3ZhbH1gKTtcbn1cblxuZnVuY3Rpb24gc2VydmUoeyBwcmVmaXgsIHBhdGhuYW1lLCBjYWNoZV9jb250cm9sIH1cblxuXG5cbikge1xuXHRjb25zdCBmaWx0ZXIgPSBwYXRobmFtZVxuXHRcdD8gKHJlcSkgPT4gcmVxLnBhdGggPT09IHBhdGhuYW1lXG5cdFx0OiAocmVxKSA9PiByZXEucGF0aC5zdGFydHNXaXRoKHByZWZpeCk7XG5cblx0Y29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cblx0Y29uc3QgcmVhZCA9IGRldlxuXHRcdD8gKGZpbGUpID0+IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCBmaWxlKSlcblx0XHQ6IChmaWxlKSA9PiAoY2FjaGUuaGFzKGZpbGUpID8gY2FjaGUgOiBjYWNoZS5zZXQoZmlsZSwgZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihidWlsZF9kaXIsIGZpbGUpKSkpLmdldChmaWxlKTtcblxuXHRyZXR1cm4gKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cdFx0aWYgKGZpbHRlcihyZXEpKSB7XG5cdFx0XHRjb25zdCB0eXBlID0gbGl0ZS5nZXRUeXBlKHJlcS5wYXRoKTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZmlsZSA9IHBhdGgucG9zaXgubm9ybWFsaXplKGRlY29kZVVSSUNvbXBvbmVudChyZXEucGF0aCkpO1xuXHRcdFx0XHRjb25zdCBkYXRhID0gcmVhZChmaWxlKTtcblxuXHRcdFx0XHRyZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCB0eXBlKTtcblx0XHRcdFx0cmVzLnNldEhlYWRlcignQ2FjaGUtQ29udHJvbCcsIGNhY2hlX2NvbnRyb2wpO1xuXHRcdFx0XHRyZXMuZW5kKGRhdGEpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuXHRcdFx0XHRyZXMuZW5kKCdub3QgZm91bmQnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV4dCgpO1xuXHRcdH1cblx0fTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpe31cblxuZXhwb3J0IHsgbWlkZGxld2FyZSB9O1xuIiwiaW1wb3J0IHNpcnYgZnJvbSAnc2lydic7XG5pbXBvcnQgcG9sa2EgZnJvbSAncG9sa2EnO1xuaW1wb3J0IGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCAqIGFzIHNhcHBlciBmcm9tICdAc2FwcGVyL3NlcnZlcic7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5cblxuY29uc3QgeyBQT1JULCBOT0RFX0VOViB9ID0gcHJvY2Vzcy5lbnY7XG5jb25zdCBkZXYgPSBOT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcblxucG9sa2EoKSAvLyBZb3UgY2FuIGFsc28gdXNlIEV4cHJlc3Ncblx0LnVzZShcblx0XHRjb21wcmVzc2lvbih7IHRocmVzaG9sZDogMCB9KSxcblx0XHRzaXJ2KCdzdGF0aWMnLCB7IGRldiB9KSxcblx0XHRib2R5UGFyc2VyLmpzb24oKSxcblx0XHRzYXBwZXIubWlkZGxld2FyZSgpXG5cdClcblx0Lmxpc3RlbihQT1JULCBlcnIgPT4ge1xuXHRcdGlmIChlcnIpIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycik7XG5cdH0pO1xuXG5cbiBcbiJdLCJuYW1lcyI6WyJnZXQiLCJwb3N0IiwicHJlbG9hZCIsImN1c3RvbV9zb3J0IiwiZ2V0X2xhc3RfbmJfc2Vzc2lvbnMiLCJkaXZpZGV2ZWN0b3IiLCJ2YXJpYXRpb24iLCJyb3VuZF8yX2RlY2ltYWwiLCJjb21wb25lbnRfMCIsInByZWxvYWRfMCIsImNvbXBvbmVudF8xIiwicHJlbG9hZF8xIiwiY29tcG9uZW50XzIiLCJwcmVsb2FkXzIiLCJjb21wb25lbnRfMyIsInByZWxvYWRfMyIsImNvbXBvbmVudF80IiwicHJlbG9hZF80IiwiY29tcG9uZW50XzUiLCJjb21wb25lbnRfNiIsImNvbXBvbmVudF83IiwiY29tcG9uZW50XzgiLCJjb21wb25lbnRfOSIsInByZWxvYWRfOSIsImNvbXBvbmVudF8xMCIsImNvbXBvbmVudF8xMSIsInByZWxvYWRfMTEiLCJjb21wb25lbnRfMTIiLCJjb21wb25lbnRfMTMiLCJwcmVsb2FkXzEzIiwiY29tcG9uZW50XzE0IiwiY29tcG9uZW50XzE1IiwiY29tcG9uZW50XzE2IiwiY29tcG9uZW50XzE3IiwiY29tcG9uZW50XzE4IiwicHJlbG9hZF8xOCIsImNvbXBvbmVudF8xOSIsImNvbXBvbmVudF8yMCIsInJvb3QiLCJlcnJvciIsImVzY2FwZWQiLCJub29wIiwic2FwcGVyLm1pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQztBQUNBLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUNsQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDZDtBQUNPLGVBQWUsSUFBSSxFQUFFO0FBQzVCLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUNmLFFBQVEsTUFBTSxHQUFHLEdBQUcsNkdBQTZHLENBQUM7QUFDbEksUUFBUSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUM7QUFDckQsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzlDLEtBQUs7QUFDTCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0FBQ3ZCOztBQ1RPLGVBQWUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDcEM7QUFDQSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzNCLENBQUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0Y7QUFDQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3BCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjtBQUNwQyxFQUFFLENBQUMsQ0FBQztBQUNKO0FBQ0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNuQztBQUNBLEVBQUU7QUFDRjtBQUNPLGVBQWUsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDcEMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxJQUFJLEdBQUU7QUFDM0IsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLENBQUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3BDLEVBQUUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7QUN2Qk8sZUFBZUEsS0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDcEM7QUFDQSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzNCLENBQUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDNUY7QUFDQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3BCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjtBQUNwQyxFQUFFLENBQUMsQ0FBQztBQUNKO0FBQ0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNuQztBQUNBLEVBQUU7QUFDRjtBQUNPLGVBQWVDLE1BQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQ3BDLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sSUFBSSxHQUFFO0FBQzNCLENBQUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztBQUN2QixDQUFDLE1BQU0sTUFBTSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3BCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjtBQUNwQyxFQUFFLENBQUMsQ0FBQztBQUNKLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7O0FDdkJPLGVBQWVELEtBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3BDO0FBQ0EsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUMzQixDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVGO0FBQ0EsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNwQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7QUFDcEMsRUFBRSxDQUFDLENBQUM7QUFDSjtBQUNBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbkM7QUFDQSxFQUFFO0FBQ0Y7QUFDTyxlQUFlQyxNQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUNwQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLElBQUksR0FBRTtBQUMzQixDQUFDLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNwQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7QUFDcEMsRUFBRSxDQUFDLENBQUM7QUFDSixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFDRDtBQUNBOzs7Ozs7OztBQ3ZCTyxlQUFlRCxLQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNwQztBQUNBLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RjtBQUNBLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3BDLEVBQUUsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsRUFBRTtBQUNGO0FBQ08sZUFBZUMsTUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7QUFDcEMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxJQUFJLEdBQUU7QUFDM0IsQ0FBQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLENBQUMsTUFBTSxNQUFNLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3BDLEVBQUUsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7QUN2Qk8sZUFBZUQsS0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDcEM7QUFDQSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzNCLENBQUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDN0Y7QUFDQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO0FBQ3BCLEVBQUUsY0FBYyxFQUFFLGtCQUFrQjtBQUNwQyxFQUFFLENBQUMsQ0FBQztBQUNKO0FBQ0EsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNuQzs7Ozs7OztBQ1hPLGVBQWVBLEtBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3BDO0FBQ0EsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUMzQixDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVGO0FBQ0EsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNwQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7QUFDcEMsRUFBRSxDQUFDLENBQUM7QUFDSjtBQUNBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbkM7QUFDQTs7Ozs7OztBQ1ZPLGVBQWVBLEtBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3BDO0FBQ0EsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUMzQixDQUFDLE1BQU0sUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzVGO0FBQ0EsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNwQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7QUFDcEMsRUFBRSxDQUFDLENBQUM7QUFDSjtBQUNBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbkM7Ozs7Ozs7QUNWTyxlQUFlQSxLQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRTtBQUNwQztBQUNBLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUM1RjtBQUNBLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDcEIsRUFBRSxjQUFjLEVBQUUsa0JBQWtCO0FBQ3BDLEVBQUUsQ0FBQyxDQUFDO0FBQ0o7QUFDQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ25DOzs7Ozs7O0FDVk8sZUFBZUEsS0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDcEM7QUFDQSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQzNCLENBQUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzdFO0FBQ0EsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUNwQixFQUFFLGNBQWMsRUFBRSxrQkFBa0I7QUFDcEMsRUFBRSxDQUFDLENBQUM7QUFDSjtBQUNBLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDbkM7Ozs7Ozs7QUNiQSxTQUFTLElBQUksR0FBRyxHQUFHO0FBZ0JuQixTQUFTLEdBQUcsQ0FBQyxFQUFFLEVBQUU7QUFDakIsSUFBSSxPQUFPLEVBQUUsRUFBRSxDQUFDO0FBQ2hCLENBQUM7QUFDRCxTQUFTLFlBQVksR0FBRztBQUN4QixJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixDQUFDO0FBQ0QsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ3RCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBSUQsU0FBUyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUM5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxLQUFLLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDO0FBQ2xHLENBQUM7QUFpakJEO0FBQ0EsSUFBSSxpQkFBaUIsQ0FBQztBQUN0QixTQUFTLHFCQUFxQixDQUFDLFNBQVMsRUFBRTtBQUMxQyxJQUFJLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztBQUNsQyxDQUFDO0FBQ0QsU0FBUyxxQkFBcUIsR0FBRztBQUNqQyxJQUFJLElBQUksQ0FBQyxpQkFBaUI7QUFDMUIsUUFBUSxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO0FBQzVFLElBQUksT0FBTyxpQkFBaUIsQ0FBQztBQUM3QixDQUFDO0FBSUQsU0FBUyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ3JCLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBQ0QsU0FBUyxXQUFXLENBQUMsRUFBRSxFQUFFO0FBQ3pCLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBa0JELFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDbEMsSUFBSSxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBc25CRCxNQUFNLE9BQU8sR0FBRztBQUNoQixJQUFJLEdBQUcsRUFBRSxRQUFRO0FBQ2pCLElBQUksR0FBRyxFQUFFLE9BQU87QUFDaEIsSUFBSSxHQUFHLEVBQUUsT0FBTztBQUNoQixJQUFJLEdBQUcsRUFBRSxNQUFNO0FBQ2YsSUFBSSxHQUFHLEVBQUUsTUFBTTtBQUNmLENBQUMsQ0FBQztBQUNGLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUN0QixJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLENBQUM7QUFDRCxTQUFTLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO0FBQ3pCLElBQUksSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUM5QyxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLEtBQUs7QUFDTCxJQUFJLE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQztBQUNELE1BQU0saUJBQWlCLEdBQUc7QUFDMUIsSUFBSSxRQUFRLEVBQUUsTUFBTSxFQUFFO0FBQ3RCLENBQUMsQ0FBQztBQUNGLFNBQVMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRTtBQUM3QyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO0FBQzNDLFFBQVEsSUFBSSxJQUFJLEtBQUssa0JBQWtCO0FBQ3ZDLFlBQVksSUFBSSxJQUFJLGFBQWEsQ0FBQztBQUNsQyxRQUFRLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLCtKQUErSixDQUFDLENBQUMsQ0FBQztBQUNuTSxLQUFLO0FBQ0wsSUFBSSxPQUFPLFNBQVMsQ0FBQztBQUNyQixDQUFDO0FBTUQsSUFBSSxVQUFVLENBQUM7QUFDZixTQUFTLG9CQUFvQixDQUFDLEVBQUUsRUFBRTtBQUNsQyxJQUFJLFNBQVMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtBQUN0RCxRQUFRLE1BQU0sZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7QUFDbkQsUUFBUSxNQUFNLEVBQUUsR0FBRztBQUNuQixZQUFZLFVBQVU7QUFDdEIsWUFBWSxPQUFPLEVBQUUsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDakY7QUFDQSxZQUFZLFFBQVEsRUFBRSxFQUFFO0FBQ3hCLFlBQVksYUFBYSxFQUFFLEVBQUU7QUFDN0IsWUFBWSxZQUFZLEVBQUUsRUFBRTtBQUM1QixZQUFZLFNBQVMsRUFBRSxZQUFZLEVBQUU7QUFDckMsU0FBUyxDQUFDO0FBQ1YsUUFBUSxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdEMsUUFBUSxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEQsUUFBUSxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hELFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsS0FBSztBQUNMLElBQUksT0FBTztBQUNYLFFBQVEsTUFBTSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsRUFBRSxLQUFLO0FBQzlDLFlBQVksVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUM1QixZQUFZLE1BQU0sTUFBTSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFDbkUsWUFBWSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDOUQsWUFBWSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEMsWUFBWSxPQUFPO0FBQ25CLGdCQUFnQixJQUFJO0FBQ3BCLGdCQUFnQixHQUFHLEVBQUU7QUFDckIsb0JBQW9CLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ2hGLG9CQUFvQixHQUFHLEVBQUUsSUFBSTtBQUM3QixpQkFBaUI7QUFDakIsZ0JBQWdCLElBQUksRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJO0FBQ2hELGFBQWEsQ0FBQztBQUNkLFNBQVM7QUFDVCxRQUFRLFFBQVE7QUFDaEIsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELFNBQVMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO0FBQzdDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztBQUM1QyxRQUFRLE9BQU8sRUFBRSxDQUFDO0FBQ2xCLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEtBQUssS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3SDs7Ozs7Ozs7O1NDbHpDaUIsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRO1dBQ3RELFFBQVE7Ozs7U0FTUCxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTzs7O1NBYTNELFlBQVksQ0FBQyxJQUFJO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxlQUFlOzs7O09BakI5QyxRQUFRO0NBS2xCLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVc7S0FFakMsU0FBUztLQUNULFVBQVU7O0NBQ2QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ2pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7RUFDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBbUhaLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsZ0VBRU0sVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQzsrQ0FDdEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7OztTQzNJMURFLFNBQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSywrQkFBK0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1dBQ3RFLE9BQU87Ozs7O0tBT1gsSUFBSSxHQUFHLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLE9BQU8sR0FBRyxJQUFJLEVBQUUsVUFBVSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozt3T0FpRTFDLElBQUk7Ozs7a09BS0osTUFBTTs7Ozs7b09BTU4sT0FBTzs7OztpUEFLUCxVQUFVOzs7Ozs7Ozs7Ozs7U0MxRnBCQSxTQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7UUFDL0IsSUFBSSxDQUFDLEtBQUssOEJBQThCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztXQUNyRSxPQUFPOzs7OztLQU9YLElBQUksR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozt3T0FpRXpDLElBQUk7Ozs7a09BS0osTUFBTTs7Ozs7b09BTU4sT0FBTzs7Ozt3T0FLUCxTQUFTOzs7Ozs7Ozs7Ozs7OztTQzFGbkJBLFNBQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSyw4QkFBOEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1dBQ3JFLE9BQU87Ozs7O0tBT1gsSUFBSSxHQUFHLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLE9BQU8sR0FBRyxJQUFJLEVBQUUsU0FBUyxHQUFHLElBQUk7Ozs7Ozs7Ozt3T0FpRXpDLElBQUk7Ozs7a09BS0osTUFBTTs7Ozs7b09BTU4sT0FBTzs7Ozt3T0FLUCxTQUFTOzs7Ozs7Ozs7Ozs7O1NDMUZuQkEsU0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxLQUFLLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87V0FDckUsT0FBTzs7Ozs7S0FRWCxJQUFJLEdBQUcsSUFBSTtLQUdYLGFBQWEsR0FBRyxDQUFDO0tBQ2pCLG1CQUFtQixHQUFHLENBQUM7S0FDdkIsbUJBQW1CLEdBQUcsQ0FBQztLQUN2QixnQkFBZ0IsR0FBRyxDQUFDO0tBQ3BCLGNBQWMsR0FBRyxDQUFDO0tBQ2xCLHNCQUFzQixHQUFHLENBQUM7S0FDMUIsc0JBQXNCLEdBQUcsQ0FBQztLQUMxQixzQkFBc0IsR0FBRyxDQUFDO0tBQzFCLHFCQUFxQixHQUFHLENBQUM7S0FDekIsZ0JBQWdCLEdBQUcsQ0FBQztLQUNwQix3QkFBd0IsR0FBRyxDQUFDO0tBQzVCLHFCQUFxQixHQUFHLENBQUM7S0FDekIsWUFBWSxHQUFHLENBQUM7S0FDaEIsb0JBQW9CLEdBQUcsQ0FBQztLQUN4QixjQUFjLEdBQUcsQ0FBQztLQUVsQixhQUFhLEdBQUcsQ0FBQztLQUNqQixtQkFBbUIsR0FBRyxDQUFDO0tBQ3ZCLG1CQUFtQixHQUFHLENBQUM7S0FDdkIsZ0JBQWdCLEdBQUcsQ0FBQztLQUNwQixjQUFjLEdBQUcsQ0FBQztLQUNsQixzQkFBc0IsR0FBRyxDQUFDO0tBQzFCLHNCQUFzQixHQUFHLENBQUM7S0FDMUIsc0JBQXNCLEdBQUcsQ0FBQztLQUMxQixxQkFBcUIsR0FBRyxDQUFDO0tBQ3pCLGdCQUFnQixHQUFHLENBQUM7S0FDcEIsd0JBQXdCLEdBQUcsQ0FBQztLQUM1QixxQkFBcUIsR0FBRyxDQUFDO0tBQ3pCLFlBQVksR0FBRyxDQUFDO0tBQ2hCLG9CQUFvQixHQUFHLENBQUM7S0FDeEIsY0FBYyxHQUFHLENBQUM7S0FFbEIsUUFBUSxHQUFHLElBQUk7Ozs7Ozs7Ozs7O3NRQTBIaUIsSUFBSTs7Ozs7K09BWUksUUFBUTtvUEFHUixRQUFROzs7OztzT0FhakIsYUFBYTsyT0FHYixhQUFhOzs7c09BVWIsbUJBQW1COzJPQUduQixtQkFBbUI7OztzT0FVbkIsbUJBQW1COzJPQUduQixtQkFBbUI7OztzT0FVbkIsZ0JBQWdCOzJPQUdoQixnQkFBZ0I7Ozs7Ozs7Ozs7c09Ba0JoQixjQUFjOzJPQUdkLGNBQWM7Ozs7Ozs7O3NPQWVkLHNCQUFzQjsyT0FHdEIsc0JBQXNCOzs7OztzT0FZdEIsc0JBQXNCOzJPQUd0QixzQkFBc0I7OztzT0FVdEIsc0JBQXNCOzJPQUd0QixzQkFBc0I7OztzT0FVdEIscUJBQXFCOzJPQUdyQixxQkFBcUI7Ozs7Ozs7O3NPQWdCckIsZ0JBQWdCOzJPQUdoQixnQkFBZ0I7OztzT0FVaEIsd0JBQXdCOzJPQUd4Qix3QkFBd0I7OztzT0FVeEIscUJBQXFCOzJPQUdyQixxQkFBcUI7Ozs7Ozs7O3NPQWdCckIsWUFBWTsyT0FHWixZQUFZOzs7c09BVVosb0JBQW9COzJPQUdwQixvQkFBb0I7OztzT0FVcEIsY0FBYzsyT0FHZCxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQ25aMUMsSUFBSTs7VUFDQyxXQUFXO01BQ3JCLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVM7O01BQ3JDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRzs7SUFDdkIsSUFBSSxFQUFFLE1BQU07SUFDTixJQUFJO0lBQ1YsT0FBTztLQUNILE1BQU07TUFDRixLQUFLOztRQUViLEVBQUUsRUFBRSxVQUFVO1FBQ2QsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVTtTQUNSLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGNBQWM7U0FDM0IsV0FBVyxFQUFFLElBQUk7Ozs7UUFHbkIsRUFBRSxFQUFFLFNBQVM7UUFDYixRQUFRLEVBQUUsT0FBTztRQUNmLFVBQVU7U0FDVixPQUFPLEVBQUUsSUFBSTtTQUNiLFdBQVcsRUFBRSxTQUFTO1NBQ3RCLFdBQVcsRUFBRSxJQUFJOztRQUVuQixTQUFTLElBQ0UsT0FBTyxFQUFFLEtBQUs7OztRQUd6QixFQUFFLEVBQUUsT0FBTztRQUNYLFFBQVEsRUFBRSxPQUFPO1FBQ2YsVUFBVTtTQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGNBQWM7U0FDM0IsV0FBVyxFQUFFLElBQUk7O1FBRW5CLFNBQVMsSUFDRSxPQUFPLEVBQUUsS0FBSzs7Ozs7Ozs7Q0FRakMsT0FBTyxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7U0NoREZBLFNBQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSyx5QkFBeUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRO1dBQ2pFLFFBQVE7Ozs7O1NBbUJQQyxhQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTzs7O1NBSTNELG9CQUFvQixDQUFDLEdBQUcsRUFBRSxJQUFJO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDOzs7U0FLMUMsWUFBWSxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ2QsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7O1NBR3hCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSztPQUNyQixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUMsS0FBSyxJQUFFLEtBQUssR0FBQyxHQUFHO1FBQzdDLFNBQVM7OztTQU9YLGVBQWUsQ0FBQyxLQUFLO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsSUFBSSxHQUFHOzs7O09BNUJ6QixRQUFRO0NBTW5CLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDQSxhQUFXOztVQUsvQixZQUFZLENBQUMsSUFBSTtTQUNsQixNQUFNLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsZUFBZTs7OztLQXFCakQsV0FBVzs7S0FDWCxTQUFTO0tBQ1QsV0FBVztLQUNYLFlBQVk7S0FDWixVQUFVOztDQUVkLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07RUFDekIsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtFQUNyQixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO0VBQzVCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87TUFDdkIsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJO0VBQ3ZDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUs7OztPQUc1QixJQUFJO0VBQ2pCLE1BQU0sRUFBRSxTQUFTO0VBQ2pCLFFBQVE7O0lBQ0osS0FBSyxFQUFFLFVBQVU7SUFDakIsT0FBTyxFQUFHLFVBQVU7SUFDcEIsSUFBSSxFQUFDLFdBQVc7SUFDaEIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsSUFBSSxFQUFFLEtBQUs7OztJQUdYLEtBQUssRUFBRSxTQUFTO0lBQ2hCLElBQUksRUFBQyxXQUFXO0lBQ2hCLE9BQU8sRUFBRyxTQUFTO0lBQ25CLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBRSxLQUFLOzs7SUFHWCxLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBQyxVQUFVO0lBQ2YsT0FBTyxFQUFHLE9BQU87SUFDakIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsSUFBSSxFQUFFLEtBQUs7Ozs7OztPQU1iLE9BQU8sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFLLEdBQUcsQ0FBQyxNQUFNOzs7Ozs7T0FVaEUsYUFBYSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFDLENBQUM7O09BQ2hELFVBQVUsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUUsRUFBRTtPQUNuRCxVQUFVLEdBQUcsYUFBYSxHQUFDLElBQUksR0FBQyxVQUFVO09BQzFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDOzs7O09BTTlDLGtCQUFrQixHQUFHLG9CQUFvQixDQUFDLENBQUMsRUFBRSxXQUFXOztPQUN4RCxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsWUFBWTtPQUN4RCxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxDQUFDLEVBQUUsV0FBVztPQUN0RCxjQUFjLEdBQUcsb0JBQW9CLENBQUMsQ0FBQyxFQUFFLFNBQVM7T0FJbEQsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQjtPQUMvQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsZ0JBQWdCO09BQzNDLGVBQWUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFHLGlCQUFpQixLQUFLLEVBQUUsR0FBQyxJQUFJO09BRXpGLG9CQUFvQixHQUFHLFNBQVMsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCO09BQ2xFLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxVQUFVLEVBQUUsZUFBZTtPQUN6RCxrQkFBa0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLGdCQUFnQjs7O09BRzVELG1CQUFtQixHQUFHLG9CQUFvQixDQUFDLEVBQUUsRUFBRSxXQUFXOztPQUMxRCxrQkFBa0IsR0FBRyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsWUFBWTtPQUMxRCxpQkFBaUIsR0FBRyxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsV0FBVztPQUV4RCxtQkFBbUIsR0FBRyxPQUFPLENBQUMsbUJBQW1CO09BQ2pELGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxpQkFBaUI7T0FDN0MsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRyxrQkFBa0IsS0FBSyxFQUFFLEdBQUMsSUFBSTtPQUU1RixxQkFBcUIsR0FBRyxTQUFTLENBQUMsYUFBYSxFQUFFLG1CQUFtQjtPQUNwRSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsVUFBVSxFQUFFLGdCQUFnQjtPQUMzRCxtQkFBbUIsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLGlCQUFpQjs7Ozs7Ozs7Ozs7OztrRkE0QmpELG9CQUFvQixDQUFDLENBQUMsRUFBRSxTQUFTLG1EQUNkLFlBQVksQ0FBQyxJQUFJOzs7Ozs7Ozs7MkRBcUJULGFBQWE7MkRBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7OztHQUNoQixvQkFBb0IsSUFBRSxDQUFDLDBCQUFlLG9CQUFvQixHQUFDLENBQUM7K0JBQUksb0JBQW9COzJEQUNqRyxlQUFlLENBQUMsbUJBQW1COzs7R0FDdEIscUJBQXFCLElBQUUsQ0FBQywwQkFBZSxxQkFBcUIsR0FBQyxDQUFDOytCQUFJLHFCQUFxQjs7MkRBSXBHLGVBQWUsQ0FBQyxVQUFVOzJEQUMxQixlQUFlLENBQUMsZUFBZTs7O0dBQ2xCLGlCQUFpQixJQUFFLENBQUMsMEJBQWUsaUJBQWlCLEdBQUMsQ0FBQzsrQkFBSSxpQkFBaUI7MkRBQ3hGLGVBQWUsQ0FBQyxnQkFBZ0I7OztHQUNuQixrQkFBa0IsSUFBRSxDQUFDLDBCQUFlLGtCQUFrQixHQUFDLENBQUM7K0JBQUksa0JBQWtCOzsyREFJM0YsV0FBVzsyREFDWCxlQUFlLENBQUMsZ0JBQWdCOzs7R0FDbkIsa0JBQWtCLElBQUUsQ0FBQywwQkFBZSxrQkFBa0IsR0FBQyxDQUFDOytCQUFJLGtCQUFrQjsyREFDM0YsZUFBZSxDQUFDLGlCQUFpQjs7O0dBQ3BCLG1CQUFtQixJQUFFLENBQUMsMEJBQWUsbUJBQW1CLEdBQUMsQ0FBQzsrQkFBSSxtQkFBbUI7Ozs7Ozs7Ozs7OzBCQXlCckgsa0JBQWtCLG1FQUVLLGNBQWMsQ0FBQyxDQUFDOzJEQUNoQixRQUFROzJEQUNSLGlCQUFpQixDQUFDLENBQUM7MkRBQ25CLGVBQWUsQ0FBRSxRQUFRLEdBQUMsSUFBSSxJQUFLLGlCQUFpQixDQUFDLENBQUMsSUFBRSxFQUFFOzJEQUMxRCxnQkFBZ0IsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztPQzVPckQsSUFBSTs7VUFDQyxXQUFXO01BQ3JCLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVM7O01BQ3JDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRzs7SUFDdkIsSUFBSSxFQUFFLE1BQU07SUFDTixJQUFJO0lBQ1YsT0FBTztLQUNILE1BQU07TUFDRixLQUFLOztRQUViLEVBQUUsRUFBRSxVQUFVO1FBQ2QsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVTtTQUNSLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGNBQWM7U0FDM0IsV0FBVyxFQUFFLElBQUk7Ozs7UUFHbkIsRUFBRSxFQUFFLFdBQVc7UUFDZixRQUFRLEVBQUUsT0FBTztRQUNmLFVBQVU7U0FDVixPQUFPLEVBQUUsSUFBSTtTQUNiLFdBQVcsRUFBRSxlQUFlO1NBQzVCLFdBQVcsRUFBRSxJQUFJOztRQUVuQixTQUFTLElBQ0UsT0FBTyxFQUFFLEtBQUs7OztRQUd6QixFQUFFLEVBQUUsT0FBTztRQUNYLFFBQVEsRUFBRSxPQUFPO1FBQ2YsVUFBVTtTQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGNBQWM7U0FDM0IsV0FBVyxFQUFFLElBQUk7O1FBRW5CLFNBQVMsSUFDRSxPQUFPLEVBQUUsS0FBSzs7Ozs7Ozs7Q0FRakMsT0FBTyxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7U0MvQ0ZELFNBQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSyx3QkFBd0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRO1dBQ2hFLFFBQVE7Ozs7U0FrQlBFLHNCQUFvQixDQUFDLEdBQUcsRUFBRSxJQUFJO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDOzs7U0FLMUNDLGNBQVksQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUNkLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztTQUd4QkMsV0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLO09BQ3JCLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBQyxLQUFLLElBQUUsS0FBSyxHQUFDLEdBQUc7UUFDN0MsU0FBUzs7O1NBT1hDLGlCQUFlLENBQUMsS0FBSztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLElBQUksR0FBRzs7OztTQUczQkosYUFBVyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU87Ozs7T0F6QnJELFFBQVE7O1VBSWQsWUFBWSxDQUFDLElBQUk7U0FDbEIsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLGVBQWU7OztDQXNCckQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUNBLGFBQVc7OztLQUloQyxXQUFXOztLQUNYLFNBQVM7S0FDVCxjQUFjO0tBQ2QsWUFBWTtLQUNaLFVBQVU7O0NBRWQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ2QsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTTtFQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0VBQ3JCLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7RUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTztNQUN2QixLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUk7RUFDdkMsVUFBVSxDQUFDLElBQUksQ0FBQ0ksaUJBQWUsQ0FBQyxLQUFLOzs7T0FHNUIsSUFBSTtFQUNqQixNQUFNLEVBQUUsU0FBUztFQUNqQixRQUFROztJQUNKLEtBQUssRUFBRSxVQUFVO0lBQ2pCLE9BQU8sRUFBRyxVQUFVO0lBQ3BCLElBQUksRUFBQyxXQUFXO0lBQ2hCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBRSxLQUFLOzs7SUFHWCxLQUFLLEVBQUUsV0FBVztJQUNsQixJQUFJLEVBQUMsY0FBYztJQUNuQixPQUFPLEVBQUcsV0FBVztJQUNyQixXQUFXLEVBQUUsU0FBUztJQUN0QixJQUFJLEVBQUUsS0FBSzs7O0lBR1gsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUMsVUFBVTtJQUNmLE9BQU8sRUFBRyxPQUFPO0lBQ2pCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBRSxLQUFLOzs7Ozs7T0FNYixPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUksQ0FBQyxFQUFFLENBQUMsS0FBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSyxHQUFHLENBQUMsTUFBTTs7Ozs7O09BVWhFLGFBQWEsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBQyxDQUFDOztPQUNoRCxVQUFVLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFFLEVBQUU7T0FDbkQsVUFBVSxHQUFHLGFBQWEsR0FBQyxJQUFJLEdBQUMsVUFBVTtPQUMxQyxjQUFjLEdBQUcsY0FBYyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7OztPQU12RCxrQkFBa0IsR0FBR0gsc0JBQW9CLENBQUMsQ0FBQyxFQUFFLFdBQVc7O09BQ3hELGlCQUFpQixHQUFHQSxzQkFBb0IsQ0FBQyxDQUFDLEVBQUUsWUFBWTtPQUN4RCxtQkFBbUIsR0FBR0Esc0JBQW9CLENBQUMsQ0FBQyxFQUFFLGNBQWM7T0FDNUQsY0FBYyxHQUFHQSxzQkFBb0IsQ0FBQyxDQUFDLEVBQUUsU0FBUztPQUlsRCxrQkFBa0IsR0FBRyxPQUFPLENBQUMsa0JBQWtCO09BQy9DLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUI7T0FDakQsZUFBZSxHQUFHLE9BQU8sQ0FBQ0MsY0FBWSxDQUFDLGtCQUFrQixFQUFHLGlCQUFpQixLQUFLLEVBQUUsR0FBQyxJQUFJO09BRXpGLG9CQUFvQixHQUFHQyxXQUFTLENBQUMsYUFBYSxFQUFFLGtCQUFrQjtPQUNsRSxpQkFBaUIsR0FBR0EsV0FBUyxDQUFDLFVBQVUsRUFBRSxlQUFlO09BQ3pELHFCQUFxQixHQUFHQSxXQUFTLENBQUMsY0FBYyxFQUFFLG1CQUFtQjs7O09BR3JFLG1CQUFtQixHQUFHRixzQkFBb0IsQ0FBQyxFQUFFLEVBQUUsV0FBVzs7T0FDMUQsa0JBQWtCLEdBQUdBLHNCQUFvQixDQUFDLEVBQUUsRUFBRSxZQUFZO09BQzFELG9CQUFvQixHQUFHQSxzQkFBb0IsQ0FBQyxFQUFFLEVBQUUsY0FBYztPQUU5RCxtQkFBbUIsR0FBRyxPQUFPLENBQUMsbUJBQW1CO09BQ2pELG9CQUFvQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0I7T0FDbkQsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDQyxjQUFZLENBQUMsbUJBQW1CLEVBQUcsa0JBQWtCLEtBQUssRUFBRSxHQUFDLElBQUk7T0FFNUYscUJBQXFCLEdBQUdDLFdBQVMsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CO09BQ3BFLGtCQUFrQixHQUFHQSxXQUFTLENBQUMsVUFBVSxFQUFFLGdCQUFnQjtPQUMzRCxzQkFBc0IsR0FBR0EsV0FBUyxDQUFDLGNBQWMsRUFBRSxvQkFBb0I7Ozs7Ozs7Ozs7OztrRkF5QjFERixzQkFBb0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxtREFDZCxZQUFZLENBQUMsSUFBSTs7Ozs7Ozs7OzJEQXFCVCxhQUFhOzJEQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCOzs7R0FDaEIsb0JBQW9CLElBQUUsQ0FBQywwQkFBZSxvQkFBb0IsR0FBQyxDQUFDOytCQUFJLG9CQUFvQjsyREFDakdHLGlCQUFlLENBQUMsbUJBQW1COzs7R0FDdEIscUJBQXFCLElBQUUsQ0FBQywwQkFBZSxxQkFBcUIsR0FBQyxDQUFDOytCQUFJLHFCQUFxQjs7MkRBSXBHQSxpQkFBZSxDQUFDLFVBQVU7MkRBQzFCQSxpQkFBZSxDQUFDLGVBQWU7OztHQUNsQixpQkFBaUIsSUFBRSxDQUFDLDBCQUFlLGlCQUFpQixHQUFDLENBQUM7K0JBQUksaUJBQWlCOzJEQUN4RkEsaUJBQWUsQ0FBQyxnQkFBZ0I7OztHQUNuQixrQkFBa0IsSUFBRSxDQUFDLDBCQUFlLGtCQUFrQixHQUFDLENBQUM7K0JBQUksa0JBQWtCOzsyREFJM0YsY0FBYzsyREFDZEEsaUJBQWUsQ0FBQyxtQkFBbUI7OztHQUN0QixxQkFBcUIsSUFBRSxDQUFDLDBCQUFlLHFCQUFxQixHQUFDLENBQUM7K0JBQUkscUJBQXFCOzJEQUNwR0EsaUJBQWUsQ0FBQyxvQkFBb0I7OztHQUN2QixzQkFBc0IsSUFBRSxDQUFDLDBCQUFlLHNCQUFzQixHQUFDLENBQUM7K0JBQUksc0JBQXNCOzs7Ozs7Ozs7OzswQkF5QjlILGtCQUFrQixtRUFFSyxjQUFjLENBQUMsQ0FBQzsyREFDaEIsUUFBUTsyREFDUixpQkFBaUIsQ0FBQyxDQUFDOzJEQUNuQkEsaUJBQWUsQ0FBRSxRQUFRLEdBQUMsSUFBSSxJQUFLLGlCQUFpQixDQUFDLENBQUMsSUFBRSxFQUFFOzJEQUMxRCxtQkFBbUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztPQ3pPeEQsSUFBSTs7VUFDQyxXQUFXO01BQ3JCLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVM7O01BQ3JDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRzs7SUFDdkIsSUFBSSxFQUFFLE1BQU07SUFDTixJQUFJO0lBQ1YsT0FBTztLQUNILE1BQU07TUFDRixLQUFLOztRQUViLEVBQUUsRUFBRSxVQUFVO1FBQ2QsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVTtTQUNSLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGNBQWM7U0FDM0IsV0FBVyxFQUFFLElBQUk7Ozs7UUFHbkIsRUFBRSxFQUFFLFdBQVc7UUFDZixRQUFRLEVBQUUsT0FBTztRQUNmLFVBQVU7U0FDVixPQUFPLEVBQUUsSUFBSTtTQUNiLFdBQVcsRUFBRSxlQUFlO1NBQzVCLFdBQVcsRUFBRSxJQUFJOztRQUVuQixTQUFTLElBQ0UsT0FBTyxFQUFFLEtBQUs7OztRQUd6QixFQUFFLEVBQUUsT0FBTztRQUNYLFFBQVEsRUFBRSxPQUFPO1FBQ2YsVUFBVTtTQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGNBQWM7U0FDM0IsV0FBVyxFQUFFLElBQUk7O1FBRW5CLFNBQVMsSUFDRSxPQUFPLEVBQUUsS0FBSzs7Ozs7Ozs7Q0FRakMsT0FBTyxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7U0MvQ0ZMLFNBQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSyx3QkFBd0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRO1dBQ2hFLFFBQVE7Ozs7O1NBa0JQQyxhQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTzs7O1NBRzNEQyxzQkFBb0IsQ0FBQyxHQUFHLEVBQUUsSUFBSTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQzs7O1NBSzFDQyxjQUFZLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDZCxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7U0FHeEJDLFdBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSztPQUNyQixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUMsS0FBSyxJQUFFLEtBQUssR0FBQyxHQUFHO1FBQzdDLFNBQVM7OztTQU9YQyxpQkFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxJQUFJLEdBQUc7Ozs7T0ExQnpCLFFBQVE7Q0FLbkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUNKLGFBQVc7O1VBSS9CLFlBQVksQ0FBQyxJQUFJO1NBQ2xCLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxlQUFlOzs7O0tBb0JqRCxXQUFXOztLQUNYLFNBQVM7S0FDVCxjQUFjO0tBQ2QsWUFBWTtLQUNaLFVBQVU7O0NBRWQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ2QsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTTtFQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0VBQ3JCLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVM7RUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTztNQUN2QixLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUk7RUFDdkMsVUFBVSxDQUFDLElBQUksQ0FBQ0ksaUJBQWUsQ0FBQyxLQUFLOzs7T0FHNUIsSUFBSTtFQUNqQixNQUFNLEVBQUUsU0FBUztFQUNqQixRQUFROztJQUNKLEtBQUssRUFBRSxVQUFVO0lBQ2pCLE9BQU8sRUFBRyxVQUFVO0lBQ3BCLElBQUksRUFBQyxXQUFXO0lBQ2hCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBRSxLQUFLOzs7SUFHWCxLQUFLLEVBQUUsV0FBVztJQUNsQixJQUFJLEVBQUMsY0FBYztJQUNuQixPQUFPLEVBQUcsV0FBVztJQUNyQixXQUFXLEVBQUUsU0FBUztJQUN0QixJQUFJLEVBQUUsS0FBSzs7O0lBR1gsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUMsVUFBVTtJQUNmLE9BQU8sRUFBRyxPQUFPO0lBQ2pCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBRSxLQUFLOzs7Ozs7T0FNYixPQUFPLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUksQ0FBQyxFQUFFLENBQUMsS0FBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSyxHQUFHLENBQUMsTUFBTTs7Ozs7OztPQWNoRSxhQUFhLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUMsQ0FBQzs7T0FDaEQsVUFBVSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFDLENBQUMsSUFBRSxFQUFFO09BQ25ELFVBQVUsR0FBRyxhQUFhLEdBQUMsSUFBSSxHQUFDLFVBQVU7T0FDMUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7T0FNdkQsa0JBQWtCLEdBQUdILHNCQUFvQixDQUFDLENBQUMsRUFBRSxXQUFXOztPQUN4RCxpQkFBaUIsR0FBR0Esc0JBQW9CLENBQUMsQ0FBQyxFQUFFLFlBQVk7T0FDeEQsbUJBQW1CLEdBQUdBLHNCQUFvQixDQUFDLENBQUMsRUFBRSxjQUFjO09BQzVELGNBQWMsR0FBR0Esc0JBQW9CLENBQUMsQ0FBQyxFQUFFLFNBQVM7T0FJbEQsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQjtPQUMvQyxtQkFBbUIsR0FBRyxPQUFPLENBQUMsbUJBQW1CO09BQ2pELGVBQWUsR0FBRyxPQUFPLENBQUNDLGNBQVksQ0FBQyxrQkFBa0IsRUFBRyxpQkFBaUIsS0FBSyxFQUFFLEdBQUMsSUFBSTtPQUV6RixvQkFBb0IsR0FBR0MsV0FBUyxDQUFDLGFBQWEsRUFBRSxrQkFBa0I7T0FDbEUsaUJBQWlCLEdBQUdBLFdBQVMsQ0FBQyxVQUFVLEVBQUUsZUFBZTtPQUN6RCxxQkFBcUIsR0FBR0EsV0FBUyxDQUFDLGNBQWMsRUFBRSxtQkFBbUI7OztPQUdyRSxtQkFBbUIsR0FBR0Ysc0JBQW9CLENBQUMsRUFBRSxFQUFFLFdBQVc7O09BQzFELGtCQUFrQixHQUFHQSxzQkFBb0IsQ0FBQyxFQUFFLEVBQUUsWUFBWTtPQUMxRCxvQkFBb0IsR0FBR0Esc0JBQW9CLENBQUMsRUFBRSxFQUFFLGNBQWM7T0FFOUQsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLG1CQUFtQjtPQUNqRCxvQkFBb0IsR0FBRyxPQUFPLENBQUMsb0JBQW9CO09BQ25ELGdCQUFnQixHQUFHLE9BQU8sQ0FBQ0MsY0FBWSxDQUFDLG1CQUFtQixFQUFHLGtCQUFrQixLQUFLLEVBQUUsR0FBQyxJQUFJO09BRTVGLHFCQUFxQixHQUFHQyxXQUFTLENBQUMsYUFBYSxFQUFFLG1CQUFtQjtPQUNwRSxrQkFBa0IsR0FBR0EsV0FBUyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0I7T0FDM0Qsc0JBQXNCLEdBQUdBLFdBQVMsQ0FBQyxjQUFjLEVBQUUsb0JBQW9COzs7Ozs7Ozs7OztrRkEwQjFERixzQkFBb0IsQ0FBQyxDQUFDLEVBQUUsU0FBUyxtREFDZCxZQUFZLENBQUMsSUFBSTs7Ozs7Ozs7OzsyREFzQlQsYUFBYTsyREFDYixJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQjs7O0dBQ2hCLG9CQUFvQixJQUFFLENBQUMsMEJBQWUsb0JBQW9CLEdBQUMsQ0FBQzsrQkFBSSxvQkFBb0I7MkRBQ2pHRyxpQkFBZSxDQUFDLG1CQUFtQjs7O0dBQ3RCLHFCQUFxQixJQUFFLENBQUMsMEJBQWUscUJBQXFCLEdBQUMsQ0FBQzsrQkFBSSxxQkFBcUI7OzJEQUlwR0EsaUJBQWUsQ0FBQyxVQUFVOzJEQUMxQkEsaUJBQWUsQ0FBQyxlQUFlOzs7R0FDbEIsaUJBQWlCLElBQUUsQ0FBQywwQkFBZSxpQkFBaUIsR0FBQyxDQUFDOytCQUFJLGlCQUFpQjsyREFDeEZBLGlCQUFlLENBQUMsZ0JBQWdCOzs7R0FDbkIsa0JBQWtCLElBQUUsQ0FBQywwQkFBZSxrQkFBa0IsR0FBQyxDQUFDOytCQUFJLGtCQUFrQjs7MkRBSTNGLGNBQWM7MkRBQ2RBLGlCQUFlLENBQUMsbUJBQW1COzs7R0FDdEIscUJBQXFCLElBQUUsQ0FBQywwQkFBZSxxQkFBcUIsR0FBQyxDQUFDOytCQUFJLHFCQUFxQjsyREFDcEdBLGlCQUFlLENBQUMsb0JBQW9COzs7R0FDdkIsc0JBQXNCLElBQUUsQ0FBQywwQkFBZSxzQkFBc0IsR0FBQyxDQUFDOytCQUFJLHNCQUFzQjs7Ozs7Ozs7OzBCQXVCOUgsa0JBQWtCLG1FQUVLLGNBQWMsQ0FBQyxDQUFDOzJEQUNoQixRQUFROzJEQUNSLGlCQUFpQixDQUFDLENBQUM7MkRBQ25CQSxpQkFBZSxDQUFFLFFBQVEsR0FBQyxJQUFJLElBQUssaUJBQWlCLENBQUMsQ0FBQyxJQUFFLEVBQUU7MkRBQzFELG1CQUFtQixDQUFDLENBQUM7Ozs7Ozs7Ozs7O09DM094RCxrQkFBa0I7O1VBQ2IsWUFBWTtNQUN0QixHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXOztNQUN2QyxPQUFPLE9BQU8sS0FBSyxDQUFDLEdBQUc7O0lBQ3ZCLElBQUksRUFBRSxPQUFPO0lBQ2IsSUFBSSxFQUFFLGtCQUFrQjtJQUN4QixPQUFPO0tBQ1gsS0FBSztNQUNPLEtBQUs7T0FDbEIsR0FBRyxFQUFFLENBQUM7T0FDTixXQUFXLEVBQUUsS0FBSzs7Ozs7Ozs7O0NBTXJCLE9BQU8sQ0FBQyxZQUFZOzs7Ozs7Ozs7T0NoQlQsaUJBQWlCOztVQUNaLFlBQVk7TUFDdEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVzs7TUFDdkMsT0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHOztJQUN2QixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxpQkFBaUI7SUFDdkIsT0FBTztLQUNYLEtBQUs7TUFDTyxLQUFLO09BQ2xCLEdBQUcsRUFBRSxDQUFDO09BQ04sV0FBVyxFQUFFLEtBQUs7Ozs7Ozs7OztDQU1yQixPQUFPLENBQUMsWUFBWTs7Ozs7Ozs7O09DaEJULG9CQUFvQjs7VUFDZixZQUFZO01BQ3RCLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVc7O01BQ3ZDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRzs7SUFDdkIsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsb0JBQW9CO0lBQzFCLE9BQU87S0FDWCxLQUFLO01BQ08sS0FBSztPQUNsQixHQUFHLEVBQUUsQ0FBQztPQUNOLFdBQVcsRUFBRSxLQUFLOzs7Ozs7Ozs7Q0FNckIsT0FBTyxDQUFDLFlBQVk7Ozs7Ozs7OztPQ2hCVCxjQUFjOztVQUNULFlBQVk7TUFDdEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVTs7TUFDdEMsT0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHOztJQUN2QixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxjQUFjO0lBQ3BCLE9BQU87S0FDWCxLQUFLO01BQ08sS0FBSztPQUNsQixHQUFHLEVBQUUsQ0FBQztPQUNOLFdBQVcsRUFBRSxLQUFLOzs7Ozs7Ozs7Q0FPckIsT0FBTyxDQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7U0NwQkhMLFNBQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSyx3QkFBd0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRO1dBQ2hFLFFBQVE7Ozs7U0FxQlBDLGFBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPOzs7U0FrQ3ZELFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUTtLQUN4QixRQUFRLElBQUksQ0FBQztTQUNOLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUTtlQUN6QyxDQUFDOzs7U0FFVixZQUFZLENBQUMsSUFBSTtRQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUM7OztTQUVwQixZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUs7S0FDMUIsS0FBSyxHQUFHLENBQUM7S0FDVCxNQUFNLEdBQUcsQ0FBQzs7VUFDTCxDQUFDLElBQUksS0FBSztNQUNYLEtBQUssQ0FBQyxDQUFDLElBQUcsQ0FBQztHQUNYLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFFLEtBQUssQ0FBQyxDQUFDO0dBQ3pCLE1BQU0sSUFBRyxDQUFDOzs7O1FBR1gsS0FBSyxHQUFDLE1BQU0sR0FBRSxHQUFHOzs7U0FHbkIsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxJQUFHLEVBQUU7OztTQUc1QixpQkFBaUIsQ0FBQyxJQUFJO0tBQ3ZCLEtBQUssR0FBRyxDQUFDO0tBQ1QsTUFBTSxHQUFHLENBQUM7O0NBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJO01BQ1QsSUFBSSxHQUFHLENBQUM7R0FDUixLQUFLLElBQUksSUFBSTtHQUNiLE1BQU0sSUFBSSxDQUFDOzs7O1FBRVosS0FBSyxHQUFHLE1BQU07OztTQUVwQkMsc0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7Ozs7T0F4RXBDLFFBQVE7Q0FLbkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUNELGFBQVc7S0FDaEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDOztPQXdCdkQsVUFBVTtFQUFJLE1BQU0sR0FBRyxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxXQUFXO0VBQ2xGLFVBQVU7R0FBSSxVQUFVO0dBQUUsa0JBQWtCO0dBQUUsa0JBQWtCO0dBQUUsZ0JBQWdCO0dBQUUsaUJBQWlCOztFQUNyRyxZQUFZLEdBQUcsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQjtFQUNqRSxRQUFRLEdBQUcsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVOzs7VUFDdEMsWUFBWSxDQUFDLElBQUk7U0FDdEIsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLGVBQWU7Ozs7S0F5Q2pELE1BQU07O0tBQ04sWUFBWTtLQUNaLFlBQVk7S0FDWixTQUFTO0tBQ1QsU0FBUzs7Q0FFYixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNO0VBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRO0VBQ25DLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxjQUFjO0VBQy9DLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxjQUFjO0VBQy9DLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxXQUFXOzs7S0FJekMsU0FBUztFQUFJLFlBQVksQ0FBQyxNQUFNO0VBQ3BDLFlBQVksQ0FBQyxZQUFZO0VBQ3pCLFlBQVksQ0FBQyxZQUFZO0VBQ3pCLFlBQVksQ0FBQyxTQUFTOzs7S0FFbEIsU0FBUztFQUFJLGlCQUFpQixDQUFDLE1BQU07RUFDekMsaUJBQWlCLENBQUMsWUFBWTtFQUM5QixpQkFBaUIsQ0FBQyxZQUFZO0VBQzlCLGlCQUFpQixDQUFDLFNBQVM7OztPQUViLGNBQWM7RUFDNUIsTUFBTSxFQUFFLFVBQVUsQ0FBQyxNQUFNO0VBQ3pCLFFBQVE7O0lBQ0osS0FBSyxFQUFFLGNBQWM7SUFDckIsSUFBSSxFQUFDLFNBQVM7SUFDZCxXQUFXLEVBQUUsU0FBUztJQUN0QixJQUFJLEVBQUMsS0FBSzs7O0lBR1YsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixJQUFJLEVBQUMsU0FBUztJQUNkLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBQyxLQUFLOzs7OztLQUlWLG9CQUFvQixHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVM7S0FFeEUsT0FBTztLQUNQLGVBQWU7S0FDZixlQUFlO0tBQ2YsYUFBYTtLQUNiLGNBQWM7O0NBRWxCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxVQUFVO0VBQ3RDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxrQkFBa0I7RUFDdEQsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLGtCQUFrQjtFQUN0RCxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCO0VBQ2xELGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxpQkFBaUI7OztLQUdwRCxZQUFZO0VBQUksWUFBWSxDQUFDLE9BQU87RUFDeEMsWUFBWSxDQUFDLGVBQWU7RUFDNUIsWUFBWSxDQUFDLGVBQWU7RUFDNUIsWUFBWSxDQUFDLGFBQWE7RUFDMUIsWUFBWSxDQUFDLGNBQWM7OztLQUd2QixZQUFZO0VBQUksaUJBQWlCLENBQUMsT0FBTztFQUM3QyxpQkFBaUIsQ0FBQyxlQUFlO0VBQ2pDLGlCQUFpQixDQUFDLGVBQWU7RUFDakMsaUJBQWlCLENBQUMsYUFBYTtFQUMvQixpQkFBaUIsQ0FBQyxjQUFjOzs7T0FFbEIsa0JBQWtCO0VBQ2hDLE1BQU0sRUFBRSxVQUFVLENBQUMsVUFBVTtFQUM3QixRQUFROztJQUNKLEtBQUssRUFBRSxjQUFjO0lBQ3JCLElBQUksRUFBQyxZQUFZO0lBQ2pCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBQyxLQUFLOzs7SUFLVixLQUFLLEVBQUUsaUJBQWlCO0lBQ3hCLElBQUksRUFBQyxZQUFZO0lBQ2pCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBQyxLQUFLOzs7OztLQU1WLHdCQUF3QixHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLFlBQVk7S0FFbEYsU0FBUztLQUNULGlCQUFpQjtLQUNqQixjQUFjOztDQUVsQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDZCxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVztFQUN6QyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxtQkFBbUI7RUFDekQsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLGdCQUFnQjs7O0tBR25ELGNBQWM7RUFBSSxZQUFZLENBQUMsU0FBUztFQUM1QyxZQUFZLENBQUMsaUJBQWlCO0VBQzlCLFlBQVksQ0FBQyxjQUFjOzs7S0FHdkIsY0FBYztFQUFJLGlCQUFpQixDQUFDLFNBQVM7RUFDakQsaUJBQWlCLENBQUMsaUJBQWlCO0VBQ25DLGlCQUFpQixDQUFDLGNBQWM7OztPQUdsQixvQkFBb0I7RUFDbEMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxZQUFZO0VBQy9CLFFBQVE7O0lBQ0osS0FBSyxFQUFFLGNBQWM7SUFDckIsSUFBSSxFQUFDLGNBQWM7SUFDbkIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsSUFBSSxFQUFDLEtBQUs7OztJQUtWLEtBQUssRUFBRSxpQkFBaUI7SUFDeEIsSUFBSSxFQUFDLGNBQWM7SUFDbkIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsSUFBSSxFQUFDLEtBQUs7Ozs7O0tBTVYsMEJBQTBCLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsY0FBYzs7OztLQU14RixLQUFLOztLQUNMLGFBQWE7S0FDYixPQUFPOztDQUVYLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxPQUFPO0VBQ2pDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxlQUFlO0VBQ2pELE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxVQUFVOzs7S0FHdEMsV0FBVyxJQUFJLFlBQVksQ0FBQyxLQUFLLEdBQ3JDLFlBQVksQ0FBQyxhQUFhLEdBQzFCLFlBQVksQ0FBQyxPQUFPOztLQUdoQixXQUFXO0VBQUksaUJBQWlCLENBQUMsS0FBSztFQUMxQyxpQkFBaUIsQ0FBQyxhQUFhO0VBQy9CLGlCQUFpQixDQUFDLE9BQU87OztPQUdYLGlCQUFpQjtFQUMvQixNQUFNLEVBQUUsVUFBVSxDQUFDLFFBQVE7RUFDM0IsUUFBUTs7SUFDSixLQUFLLEVBQUUsY0FBYztJQUNyQixJQUFJLEVBQUMsV0FBVztJQUNoQixXQUFXLEVBQUUsU0FBUztJQUN0QixJQUFJLEVBQUMsS0FBSzs7O0lBSVYsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixJQUFJLEVBQUMsV0FBVztJQUNoQixXQUFXLEVBQUUsU0FBUztJQUN0QixJQUFJLEVBQUMsS0FBSzs7Ozs7S0FLVix1QkFBdUIsR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxXQUFXOzs7Ozs7Ozs7Ozs7O2tGQXlCcEVDLHNCQUFvQixDQUFDLENBQUMsRUFBRSxTQUFTLG1EQUNkLFlBQVksQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBdUNwQyxVQUFVLDBEQUVhLElBQUksQ0FBQyxNQUFNO3VEQUNYLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUTt1REFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRO3VEQUN2QixJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVE7dURBQzdCLElBQUksQ0FBQyxjQUFjLEVBQUUsUUFBUTt1REFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxRQUFRO3VEQUM3QixJQUFJLENBQUMsY0FBYyxFQUFFLFFBQVE7dURBQzdCLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUTt1REFDMUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxRQUFROzs7OztHQVFBLG9CQUFvQixJQUFFLEdBQUcsMEJBQWUsb0JBQW9CLEdBQUMsR0FBRzsrQkFBSSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkE0Q3pJLFVBQVUsK0RBRWEsSUFBSSxDQUFDLE1BQU07dURBQ1gsSUFBSSxDQUFDLFVBQVUsRUFBRSxRQUFRO3VEQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVE7dURBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxRQUFRO3VEQUNqQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsUUFBUTt1REFDakMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLFFBQVE7dURBQ2pDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxRQUFRO3VEQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUTt1REFDL0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVE7dURBQy9CLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRO3VEQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsUUFBUTs7OztHQU9OLHdCQUF3QixJQUFFLEdBQUcsMEJBQWUsd0JBQXdCLEdBQUMsR0FBRzsrQkFBSSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQXdDckosVUFBVSwwREFFYSxJQUFJLENBQUMsTUFBTTt1REFDWCxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVE7dURBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUTt1REFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLFFBQVE7dURBQ2xDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxRQUFRO3VEQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsUUFBUTt1REFDL0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVE7Ozs7R0FPTCwwQkFBMEIsSUFBRSxHQUFHLDBCQUFlLDBCQUEwQixHQUFDLEdBQUc7K0JBQUksMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkF1QzNKLFVBQVUsMERBRWEsSUFBSSxDQUFDLE1BQU07dURBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRO3VEQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVE7dURBQ3RCLElBQUksQ0FBQyxlQUFlLEVBQUUsUUFBUTt1REFDOUIsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRO3VEQUM5QixJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVE7dURBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUTs7OztHQU9DLHVCQUF1QixJQUFFLEdBQUcsMEJBQWUsdUJBQXVCLEdBQUMsR0FBRzsrQkFBSSx1QkFBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0NsaEJ6SixPQUFPOzs7Ozs7OzBOQStENEMsT0FBTyxLQUFLLFNBQVMsR0FBRyxNQUFNLEdBQUcsU0FBUzt3SUFHMUMsT0FBTyxLQUFLLGFBQWEsR0FBRyxNQUFNLEdBQUcsU0FBUzt3SUFHOUMsT0FBTyxLQUFLLGFBQWEsR0FBRyxNQUFNLEdBQUcsU0FBUzt3SUFHOUMsT0FBTyxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsU0FBUzt3SUFHeEMsT0FBTyxLQUFLLFVBQVUsR0FBRyxNQUFNLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7T0N6RTlGLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7T0NGUCxNQUFNO09BQ04sS0FBSzs7Ozs7bUVBNEJSLE1BQU07O3dDQUdWLE1BQU07O3VDQUVQLEtBQUssQ0FBQyxPQUFPOztHQUVMLEtBQUssQ0FBQyxLQUFLO2tCQUNoQixLQUFLLENBQUMsS0FBSzs7OztBQ3RDbEI7QUFtQ0E7QUFDTyxNQUFNLFFBQVEsR0FBRztBQUN4QixDQUFDLGFBQWEsRUFBRTtBQUNoQixFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxrQ0FBa0M7QUFDOUMsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxpQ0FBaUM7QUFDN0MsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxpQ0FBaUM7QUFDN0MsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxpQ0FBaUM7QUFDN0MsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSw0QkFBNEI7QUFDeEMsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSwyQkFBMkI7QUFDdkMsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSwyQkFBMkI7QUFDdkMsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSwyQkFBMkI7QUFDdkMsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxnQkFBZ0I7QUFDNUIsR0FBRyxRQUFRLEVBQUUsT0FBTztBQUNwQixHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQztBQUNyQixHQUFHO0FBQ0gsRUFBRTtBQUNGO0FBQ0EsQ0FBQyxLQUFLLEVBQUU7QUFDUixFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxNQUFNO0FBQ2xCLEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUVJLE1BQVcsRUFBRSxPQUFPLEVBQUVDLE9BQVMsRUFBRTtBQUN2RixJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsR0FBRyxPQUFPLEVBQUUsNkNBQTZDO0FBQ3pELEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxFQUFFLElBQUksRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLEVBQUUsMkNBQTJDLEVBQUUsU0FBUyxFQUFFQyxZQUFXLEVBQUUsT0FBTyxFQUFFQyxTQUFTLEVBQUU7QUFDakosSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsT0FBTyxFQUFFLDJDQUEyQztBQUN2RCxHQUFHLEtBQUssRUFBRTtBQUNWLElBQUksSUFBSTtBQUNSLElBQUksSUFBSTtBQUNSLElBQUksRUFBRSxJQUFJLEVBQUUsa0NBQWtDLEVBQUUsSUFBSSxFQUFFLHlDQUF5QyxFQUFFLFNBQVMsRUFBRUMsV0FBVyxFQUFFLE9BQU8sRUFBRUMsU0FBUyxFQUFFO0FBQzdJLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSwyQ0FBMkM7QUFDdkQsR0FBRyxLQUFLLEVBQUU7QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLElBQUk7QUFDUixJQUFJLEVBQUUsSUFBSSxFQUFFLGtDQUFrQyxFQUFFLElBQUksRUFBRSx5Q0FBeUMsRUFBRSxTQUFTLEVBQUVDLFdBQVcsRUFBRSxPQUFPLEVBQUVDLFNBQVMsRUFBRTtBQUM3SSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsR0FBRyxPQUFPLEVBQUUsMkNBQTJDO0FBQ3ZELEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxFQUFFLElBQUksRUFBRSxrQ0FBa0MsRUFBRSxJQUFJLEVBQUUseUNBQXlDLEVBQUUsU0FBUyxFQUFFQyxXQUFXLEVBQUUsT0FBTyxFQUFFQyxTQUFTLEVBQUU7QUFDN0ksSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsT0FBTyxFQUFFLG9CQUFvQjtBQUNoQyxHQUFHLEtBQUssRUFBRTtBQUNWLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUVDLFdBQVcsRUFBRTtBQUMvRSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsR0FBRyxPQUFPLEVBQUUsb0JBQW9CO0FBQ2hDLEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRUMsV0FBVyxFQUFFO0FBQy9FLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxpQkFBaUI7QUFDN0IsR0FBRyxLQUFLLEVBQUU7QUFDVixJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFQyxRQUFXLEVBQUU7QUFDekUsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsT0FBTyxFQUFFLDBDQUEwQztBQUN0RCxHQUFHLEtBQUssRUFBRTtBQUNWLElBQUksSUFBSTtBQUNSLElBQUksSUFBSTtBQUNSLElBQUksRUFBRSxJQUFJLEVBQUUsbUNBQW1DLEVBQUUsSUFBSSxFQUFFLHdDQUF3QyxFQUFFLFNBQVMsRUFBRUMsZUFBVyxFQUFFO0FBQ3pILElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxtQ0FBbUM7QUFDL0MsR0FBRyxLQUFLLEVBQUU7QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLElBQUk7QUFDUixJQUFJLEVBQUUsSUFBSSxFQUFFLDBCQUEwQixFQUFFLElBQUksRUFBRSxpQ0FBaUMsRUFBRSxTQUFTLEVBQUVDLFFBQVcsRUFBRSxPQUFPLEVBQUVDLFNBQVMsRUFBRTtBQUM3SCxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsR0FBRyxPQUFPLEVBQUUsd0NBQXdDO0FBQ3BELEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxFQUFFLElBQUksRUFBRSxpQ0FBaUMsRUFBRSxJQUFJLEVBQUUsc0NBQXNDLEVBQUUsU0FBUyxFQUFFQyxjQUFZLEVBQUU7QUFDdEgsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsT0FBTyxFQUFFLGlDQUFpQztBQUM3QyxHQUFHLEtBQUssRUFBRTtBQUNWLElBQUksSUFBSTtBQUNSLElBQUksSUFBSTtBQUNSLElBQUksRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsSUFBSSxFQUFFLCtCQUErQixFQUFFLFNBQVMsRUFBRUMsT0FBWSxFQUFFLE9BQU8sRUFBRUMsU0FBVSxFQUFFO0FBQzNILElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSx3Q0FBd0M7QUFDcEQsR0FBRyxLQUFLLEVBQUU7QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLElBQUk7QUFDUixJQUFJLEVBQUUsSUFBSSxFQUFFLGlDQUFpQyxFQUFFLElBQUksRUFBRSxzQ0FBc0MsRUFBRSxTQUFTLEVBQUVDLGNBQVksRUFBRTtBQUN0SCxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsR0FBRyxPQUFPLEVBQUUsaUNBQWlDO0FBQzdDLEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUUsU0FBUyxFQUFFQyxPQUFZLEVBQUUsT0FBTyxFQUFFQyxTQUFVLEVBQUU7QUFDM0gsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsT0FBTyxFQUFFLDhDQUE4QztBQUMxRCxHQUFHLEtBQUssRUFBRTtBQUNWLElBQUksSUFBSTtBQUNSLElBQUksSUFBSTtBQUNSLElBQUksRUFBRSxJQUFJLEVBQUUsdUNBQXVDLEVBQUUsSUFBSSxFQUFFLDRDQUE0QyxFQUFFLFNBQVMsRUFBRUMsb0JBQVksRUFBRTtBQUNsSSxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsR0FBRyxPQUFPLEVBQUUsNkNBQTZDO0FBQ3pELEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxFQUFFLElBQUksRUFBRSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsMkNBQTJDLEVBQUUsU0FBUyxFQUFFQyxtQkFBWSxFQUFFO0FBQ2hJLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSwyQ0FBMkM7QUFDdkQsR0FBRyxLQUFLLEVBQUU7QUFDVixJQUFJLElBQUk7QUFDUixJQUFJLElBQUk7QUFDUixJQUFJLEVBQUUsSUFBSSxFQUFFLG9DQUFvQyxFQUFFLElBQUksRUFBRSx5Q0FBeUMsRUFBRSxTQUFTLEVBQUVDLGlCQUFZLEVBQUU7QUFDNUgsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsT0FBTyxFQUFFLDJDQUEyQztBQUN2RCxHQUFHLEtBQUssRUFBRTtBQUNWLElBQUksSUFBSTtBQUNSLElBQUksSUFBSTtBQUNSLElBQUksRUFBRSxJQUFJLEVBQUUsb0NBQW9DLEVBQUUsSUFBSSxFQUFFLHlDQUF5QyxFQUFFLFNBQVMsRUFBRUMsaUJBQVksRUFBRTtBQUM1SCxJQUFJO0FBQ0osR0FBRztBQUNIO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsR0FBRyxPQUFPLEVBQUUsaUNBQWlDO0FBQzdDLEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxJQUFJO0FBQ1IsSUFBSSxJQUFJO0FBQ1IsSUFBSSxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUUsU0FBUyxFQUFFQyxPQUFZLEVBQUUsT0FBTyxFQUFFQyxTQUFVLEVBQUU7QUFDM0gsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBLEdBQUcsT0FBTyxFQUFFLGNBQWM7QUFDMUIsR0FBRyxLQUFLLEVBQUU7QUFDVixJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRUMsS0FBWSxFQUFFO0FBQ3BFLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxHQUFHLE9BQU8sRUFBRSxZQUFZO0FBQ3hCLEdBQUcsS0FBSyxFQUFFO0FBQ1YsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUVDLEdBQVksRUFBRTtBQUNoRSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBLE9BQUNDLE1BQUk7QUFDTCxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUU7QUFDdkIsUUFBQ0MsT0FBSztBQUNOLENBQUMsQ0FBQztBQUNGO0FBQ08sTUFBTSxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7QUFDMUM7QUFDTyxNQUFNLE9BQU8sR0FBRyxLQUFLOztBQ2xUNUIsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFXNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFO0FBQ3ZDLElBQUksSUFBSSxJQUFJLENBQUM7QUFDYixJQUFJLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUMzQixJQUFJLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRTtBQUM1QixRQUFRLElBQUksY0FBYyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRTtBQUM5QyxZQUFZLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDOUIsWUFBWSxJQUFJLElBQUksRUFBRTtBQUN0QixnQkFBZ0IsTUFBTSxTQUFTLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7QUFDM0QsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDaEUsb0JBQW9CLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDM0Isb0JBQW9CLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEQsaUJBQWlCO0FBQ2pCLGdCQUFnQixJQUFJLFNBQVMsRUFBRTtBQUMvQixvQkFBb0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3pFLHdCQUF3QixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RSxxQkFBcUI7QUFDckIsb0JBQW9CLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDaEQsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksU0FBUyxNQUFNLENBQUMsRUFBRSxFQUFFO0FBQ3hCLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJLFNBQVMsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFVLEdBQUcsSUFBSSxFQUFFO0FBQy9DLFFBQVEsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDN0MsUUFBUSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLFFBQVEsSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QyxZQUFZLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ3RDLFNBQVM7QUFDVCxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixRQUFRLE9BQU8sTUFBTTtBQUNyQixZQUFZLE1BQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUQsWUFBWSxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtBQUM5QixnQkFBZ0IsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsYUFBYTtBQUNiLFlBQVksSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMxQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUM7QUFDdkIsZ0JBQWdCLElBQUksR0FBRyxJQUFJLENBQUM7QUFDNUIsYUFBYTtBQUNiLFNBQVMsQ0FBQztBQUNWLEtBQUs7QUFDTCxJQUFJLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxDQUFDO0FBQ3RDOztBQzdETyxNQUFNLFdBQVcsR0FBRyxFQUFFOzs7OztPQ0tqQixNQUFNO09BQ04sS0FBSztPQUNMLE1BQU07T0FDTixRQUFRO09BQ1IsTUFBTTtPQUNOLE1BQU0sR0FBRyxJQUFJO09BQ2IsTUFBTTtDQUVqQixXQUFXLENBQUMsTUFBTTtDQUNsQixVQUFVLENBQUMsV0FBVyxFQUFFLE1BQU07Ozs7Ozs7Ozs7OzttRkFHYixRQUFRLENBQUMsQ0FBQyxLQUFRLE1BQU0sQ0FBQyxLQUFLO29CQUMxQyxLQUFLOzswQkFHZ0IsTUFBTSxDQUFDLFNBQVMsNEVBQU8sTUFBTSxDQUFDLEtBQUs7Ozs7QUNaOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksR0FBRztBQUNoQixFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QztBQUNBLEVBQUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsRUFBRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ2pELEVBQUUsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFPLEVBQUU7QUFDNUIsSUFBSSxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM5QjtBQUNBLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEQsTUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDekIsUUFBUSxTQUFTO0FBQ2pCLE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxDQUFDLEtBQUssS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzFDLFFBQVEsTUFBTSxJQUFJLEtBQUs7QUFDdkIsVUFBVSxpQ0FBaUMsR0FBRyxHQUFHO0FBQ2pELFVBQVUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsSUFBSTtBQUNuRSxVQUFVLHdEQUF3RCxHQUFHLEdBQUc7QUFDeEUsVUFBVSxxQ0FBcUMsR0FBRyxJQUFJLEdBQUcsSUFBSTtBQUM3RCxTQUFTLENBQUM7QUFDVixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDMUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxJQUFJLEVBQUU7QUFDeEMsRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RCLEVBQUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDeEQsRUFBRSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNwRDtBQUNBLEVBQUUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzFDLEVBQUUsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUM1QztBQUNBLEVBQUUsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUMxRCxDQUFDLENBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFNBQVMsSUFBSSxFQUFFO0FBQzdDLEVBQUUsSUFBSSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUNqRCxFQUFFLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQzlELENBQUMsQ0FBQztBQUNGO0FBQ0EsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2xCO0FBQ0EsSUFBSSxRQUFRLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMseUNBQXlDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3c1A7QUFDQSxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQztBQUNBLFNBQVMsd0JBQXdCLENBQUMsTUFBTSxFQUFFO0FBQzFDLENBQUMsZUFBZSxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ3BELEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FB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
