import { S as SvelteComponentDev, i as init, d as dispatch_dev, F as globals, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, w as create_component, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, x as claim_component, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as mount_component, n as noop, z as transition_in, A as transition_out, B as destroy_component } from './client.a194b382.js';
import './_commonjsHelpers.1e235def.js';
import './Chart.b2015135.js';
import Cycling_charts from './cycling-charts.91dc49c1.js';

/* src/routes/sports/cycling/cycling.svelte generated by Svelte v3.22.3 */

const { console: console_1 } = globals;
const file = "src/routes/sports/cycling/cycling.svelte";

function create_fragment(ctx) {
	let div4;
	let div1;
	let div0;
	let t0;
	let t1;
	let div3;
	let div2;
	let img;
	let img_src_value;
	let t2;
	let div5;
	let table;
	let thead;
	let tr0;
	let th0;
	let t3;
	let t4;
	let th1;
	let t5;
	let t6;
	let th2;
	let t7;
	let t8;
	let th3;
	let t9;
	let t10;
	let tbody;
	let tr1;
	let td0;
	let t11;
	let t12;
	let td1;
	let t13;
	let t14;
	let td2;
	let t15;
	let t16;
	let td3;
	let t17;
	let td4;
	let t18;
	let td5;
	let t19;
	let tr2;
	let td6;
	let t20;
	let t21;
	let td7;
	let t22;
	let t23;
	let td8;
	let t24;
	let t25;
	let td9;
	let t26;
	let td10;
	let t27;
	let td11;
	let t28;
	let tr3;
	let td12;
	let t29;
	let t30;
	let td13;
	let t31;
	let t32;
	let td14;
	let t33;
	let t34;
	let td15;
	let t35;
	let td16;
	let t36;
	let td17;
	let t37;
	let div6;
	let h3;
	let t38;
	let t39;
	let current;

	const charts = new Cycling_charts({
			props: { data: /*data*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			div4 = element("div");
			div1 = element("div");
			div0 = element("div");
			t0 = text("Cycling Performance");
			t1 = space();
			div3 = element("div");
			div2 = element("div");
			img = element("img");
			t2 = space();
			div5 = element("div");
			table = element("table");
			thead = element("thead");
			tr0 = element("tr");
			th0 = element("th");
			t3 = text("Metrics");
			t4 = space();
			th1 = element("th");
			t5 = text("Value");
			t6 = space();
			th2 = element("th");
			t7 = text("vs. Last 3 sessions");
			t8 = space();
			th3 = element("th");
			t9 = text("vs. Last month");
			t10 = space();
			tbody = element("tbody");
			tr1 = element("tr");
			td0 = element("td");
			t11 = text("Distance (m)");
			t12 = space();
			td1 = element("td");
			t13 = text(/*last_distance*/ ctx[1]);
			t14 = space();
			td2 = element("td");
			t15 = text(/*average_3_distance*/ ctx[4]);
			t16 = space();
			td3 = element("td");
			t17 = space();
			td4 = element("td");
			t18 = space();
			td5 = element("td");
			t19 = space();
			tr2 = element("tr");
			td6 = element("td");
			t20 = text("Speed (km/h)");
			t21 = space();
			td7 = element("td");
			t22 = text(/*last_speed*/ ctx[2]);
			t23 = space();
			td8 = element("td");
			t24 = text(/*average_3_speed*/ ctx[6]);
			t25 = space();
			td9 = element("td");
			t26 = space();
			td10 = element("td");
			t27 = space();
			td11 = element("td");
			t28 = space();
			tr3 = element("tr");
			td12 = element("td");
			t29 = text("Elevation (m)");
			t30 = space();
			td13 = element("td");
			t31 = text(/*last_elevation*/ ctx[3]);
			t32 = space();
			td14 = element("td");
			t33 = text(/*average_3_elevation*/ ctx[5]);
			t34 = space();
			td15 = element("td");
			t35 = space();
			td16 = element("td");
			t36 = space();
			td17 = element("td");
			t37 = space();
			div6 = element("div");
			h3 = element("h3");
			t38 = text("See your evolution in this chart:");
			t39 = space();
			create_component(charts.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Cycling Performance");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img = claim_element(div2_nodes, "IMG", { src: true, alt: true });
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			table = claim_element(div5_nodes, "TABLE", { class: true });
			var table_nodes = children(table);
			thead = claim_element(table_nodes, "THEAD", {});
			var thead_nodes = children(thead);
			tr0 = claim_element(thead_nodes, "TR", {});
			var tr0_nodes = children(tr0);
			th0 = claim_element(tr0_nodes, "TH", { class: true });
			var th0_nodes = children(th0);
			t3 = claim_text(th0_nodes, "Metrics");
			th0_nodes.forEach(detach_dev);
			t4 = claim_space(tr0_nodes);
			th1 = claim_element(tr0_nodes, "TH", { class: true });
			var th1_nodes = children(th1);
			t5 = claim_text(th1_nodes, "Value");
			th1_nodes.forEach(detach_dev);
			t6 = claim_space(tr0_nodes);
			th2 = claim_element(tr0_nodes, "TH", { colspan: true, class: true });
			var th2_nodes = children(th2);
			t7 = claim_text(th2_nodes, "vs. Last 3 sessions");
			th2_nodes.forEach(detach_dev);
			t8 = claim_space(tr0_nodes);
			th3 = claim_element(tr0_nodes, "TH", { colspan: true, class: true });
			var th3_nodes = children(th3);
			t9 = claim_text(th3_nodes, "vs. Last month");
			th3_nodes.forEach(detach_dev);
			tr0_nodes.forEach(detach_dev);
			thead_nodes.forEach(detach_dev);
			t10 = claim_space(table_nodes);
			tbody = claim_element(table_nodes, "TBODY", {});
			var tbody_nodes = children(tbody);
			tr1 = claim_element(tbody_nodes, "TR", {});
			var tr1_nodes = children(tr1);
			td0 = claim_element(tr1_nodes, "TD", { class: true });
			var td0_nodes = children(td0);
			t11 = claim_text(td0_nodes, "Distance (m)");
			td0_nodes.forEach(detach_dev);
			t12 = claim_space(tr1_nodes);
			td1 = claim_element(tr1_nodes, "TD", { class: true });
			var td1_nodes = children(td1);
			t13 = claim_text(td1_nodes, /*last_distance*/ ctx[1]);
			td1_nodes.forEach(detach_dev);
			t14 = claim_space(tr1_nodes);
			td2 = claim_element(tr1_nodes, "TD", { class: true });
			var td2_nodes = children(td2);
			t15 = claim_text(td2_nodes, /*average_3_distance*/ ctx[4]);
			td2_nodes.forEach(detach_dev);
			t16 = claim_space(tr1_nodes);
			td3 = claim_element(tr1_nodes, "TD", { class: true });
			children(td3).forEach(detach_dev);
			t17 = claim_space(tr1_nodes);
			td4 = claim_element(tr1_nodes, "TD", { class: true });
			children(td4).forEach(detach_dev);
			t18 = claim_space(tr1_nodes);
			td5 = claim_element(tr1_nodes, "TD", { class: true });
			children(td5).forEach(detach_dev);
			tr1_nodes.forEach(detach_dev);
			t19 = claim_space(tbody_nodes);
			tr2 = claim_element(tbody_nodes, "TR", { class: true });
			var tr2_nodes = children(tr2);
			td6 = claim_element(tr2_nodes, "TD", { class: true });
			var td6_nodes = children(td6);
			t20 = claim_text(td6_nodes, "Speed (km/h)");
			td6_nodes.forEach(detach_dev);
			t21 = claim_space(tr2_nodes);
			td7 = claim_element(tr2_nodes, "TD", { class: true });
			var td7_nodes = children(td7);
			t22 = claim_text(td7_nodes, /*last_speed*/ ctx[2]);
			td7_nodes.forEach(detach_dev);
			t23 = claim_space(tr2_nodes);
			td8 = claim_element(tr2_nodes, "TD", { class: true });
			var td8_nodes = children(td8);
			t24 = claim_text(td8_nodes, /*average_3_speed*/ ctx[6]);
			td8_nodes.forEach(detach_dev);
			t25 = claim_space(tr2_nodes);
			td9 = claim_element(tr2_nodes, "TD", { class: true });
			children(td9).forEach(detach_dev);
			t26 = claim_space(tr2_nodes);
			td10 = claim_element(tr2_nodes, "TD", { class: true });
			children(td10).forEach(detach_dev);
			t27 = claim_space(tr2_nodes);
			td11 = claim_element(tr2_nodes, "TD", { class: true });
			children(td11).forEach(detach_dev);
			tr2_nodes.forEach(detach_dev);
			t28 = claim_space(tbody_nodes);
			tr3 = claim_element(tbody_nodes, "TR", {});
			var tr3_nodes = children(tr3);
			td12 = claim_element(tr3_nodes, "TD", { class: true });
			var td12_nodes = children(td12);
			t29 = claim_text(td12_nodes, "Elevation (m)");
			td12_nodes.forEach(detach_dev);
			t30 = claim_space(tr3_nodes);
			td13 = claim_element(tr3_nodes, "TD", { class: true });
			var td13_nodes = children(td13);
			t31 = claim_text(td13_nodes, /*last_elevation*/ ctx[3]);
			td13_nodes.forEach(detach_dev);
			t32 = claim_space(tr3_nodes);
			td14 = claim_element(tr3_nodes, "TD", { class: true });
			var td14_nodes = children(td14);
			t33 = claim_text(td14_nodes, /*average_3_elevation*/ ctx[5]);
			td14_nodes.forEach(detach_dev);
			t34 = claim_space(tr3_nodes);
			td15 = claim_element(tr3_nodes, "TD", { class: true });
			children(td15).forEach(detach_dev);
			t35 = claim_space(tr3_nodes);
			td16 = claim_element(tr3_nodes, "TD", { class: true });
			children(td16).forEach(detach_dev);
			t36 = claim_space(tr3_nodes);
			td17 = claim_element(tr3_nodes, "TD", { class: true });
			children(td17).forEach(detach_dev);
			tr3_nodes.forEach(detach_dev);
			tbody_nodes.forEach(detach_dev);
			table_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t37 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", {});
			var div6_nodes = children(div6);
			h3 = claim_element(div6_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t38 = claim_text(h3_nodes, "See your evolution in this chart:");
			h3_nodes.forEach(detach_dev);
			t39 = claim_space(div6_nodes);
			claim_component(charts.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "text-center p-2 text-2xl font-semibold bg-gray-100");
			add_location(div0, file, 89, 4, 2100);
			attr_dev(div1, "class", "flex-initial w-2/3 p-2");
			add_location(div1, file, 88, 2, 2059);
			if (img.src !== (img_src_value = "cycling.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			add_location(img, file, 95, 4, 2286);
			attr_dev(div2, "class", " text-right p-2");
			add_location(div2, file, 94, 4, 2252);
			attr_dev(div3, "class", "flex-initial w-1/3 p-2");
			add_location(div3, file, 93, 2, 2211);
			attr_dev(div4, "class", "flex h-48");
			add_location(div4, file, 87, 0, 2033);
			attr_dev(th0, "class", "px-4 py-2");
			add_location(th0, file, 106, 8, 2450);
			attr_dev(th1, "class", "px-4 py-2");
			add_location(th1, file, 107, 8, 2493);
			attr_dev(th2, "colspan", "2");
			attr_dev(th2, "class", "px-4 py-2 ");
			add_location(th2, file, 108, 8, 2534);
			attr_dev(th3, "colspan", "2");
			attr_dev(th3, "class", "px-4 py-2");
			add_location(th3, file, 109, 8, 2600);
			add_location(tr0, file, 105, 8, 2437);
			add_location(thead, file, 104, 4, 2421);
			attr_dev(td0, "class", "border px-4 py-2");
			add_location(td0, file, 114, 8, 2712);
			attr_dev(td1, "class", "border px-4 py-2");
			add_location(td1, file, 115, 8, 2767);
			attr_dev(td2, "class", "border px-4 py-2");
			add_location(td2, file, 116, 8, 2825);
			attr_dev(td3, "class", "border px-4 py-2");
			add_location(td3, file, 117, 16, 2896);
			attr_dev(td4, "class", "border px-4 py-2");
			add_location(td4, file, 118, 16, 2947);
			attr_dev(td5, "class", "border px-4 py-2");
			add_location(td5, file, 119, 16, 2998);
			add_location(tr1, file, 113, 8, 2699);
			attr_dev(td6, "class", "border px-4 py-2");
			add_location(td6, file, 122, 8, 3088);
			attr_dev(td7, "class", "border px-4 py-2");
			add_location(td7, file, 123, 8, 3143);
			attr_dev(td8, "class", "border px-4 py-2");
			add_location(td8, file, 124, 8, 3198);
			attr_dev(td9, "class", "border px-4 py-2");
			add_location(td9, file, 125, 16, 3266);
			attr_dev(td10, "class", "border px-4 py-2");
			add_location(td10, file, 126, 16, 3317);
			attr_dev(td11, "class", "border px-4 py-2");
			add_location(td11, file, 127, 16, 3368);
			attr_dev(tr2, "class", "bg-gray-100");
			add_location(tr2, file, 121, 8, 3055);
			attr_dev(td12, "class", "border px-4 py-2");
			add_location(td12, file, 130, 8, 3438);
			attr_dev(td13, "class", "border px-4 py-2");
			add_location(td13, file, 131, 8, 3494);
			attr_dev(td14, "class", "border px-4 py-2");
			add_location(td14, file, 132, 8, 3553);
			attr_dev(td15, "class", "border px-4 py-2");
			add_location(td15, file, 133, 16, 3625);
			attr_dev(td16, "class", "border px-4 py-2");
			add_location(td16, file, 134, 16, 3676);
			attr_dev(td17, "class", "border px-4 py-2");
			add_location(td17, file, 135, 16, 3727);
			add_location(tr3, file, 129, 8, 3425);
			add_location(tbody, file, 112, 4, 2683);
			attr_dev(table, "class", "table-auto text-center ");
			add_location(table, file, 103, 4, 2377);
			attr_dev(div5, "class", "p-10");
			add_location(div5, file, 102, 0, 2354);
			attr_dev(h3, "class", "px-10 py-5");
			add_location(h3, file, 144, 1, 3820);
			add_location(div6, file, 143, 0, 3812);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div1);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div4, t1);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, img);
			insert_dev(target, t2, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, table);
			append_dev(table, thead);
			append_dev(thead, tr0);
			append_dev(tr0, th0);
			append_dev(th0, t3);
			append_dev(tr0, t4);
			append_dev(tr0, th1);
			append_dev(th1, t5);
			append_dev(tr0, t6);
			append_dev(tr0, th2);
			append_dev(th2, t7);
			append_dev(tr0, t8);
			append_dev(tr0, th3);
			append_dev(th3, t9);
			append_dev(table, t10);
			append_dev(table, tbody);
			append_dev(tbody, tr1);
			append_dev(tr1, td0);
			append_dev(td0, t11);
			append_dev(tr1, t12);
			append_dev(tr1, td1);
			append_dev(td1, t13);
			append_dev(tr1, t14);
			append_dev(tr1, td2);
			append_dev(td2, t15);
			append_dev(tr1, t16);
			append_dev(tr1, td3);
			append_dev(tr1, t17);
			append_dev(tr1, td4);
			append_dev(tr1, t18);
			append_dev(tr1, td5);
			append_dev(tbody, t19);
			append_dev(tbody, tr2);
			append_dev(tr2, td6);
			append_dev(td6, t20);
			append_dev(tr2, t21);
			append_dev(tr2, td7);
			append_dev(td7, t22);
			append_dev(tr2, t23);
			append_dev(tr2, td8);
			append_dev(td8, t24);
			append_dev(tr2, t25);
			append_dev(tr2, td9);
			append_dev(tr2, t26);
			append_dev(tr2, td10);
			append_dev(tr2, t27);
			append_dev(tr2, td11);
			append_dev(tbody, t28);
			append_dev(tbody, tr3);
			append_dev(tr3, td12);
			append_dev(td12, t29);
			append_dev(tr3, t30);
			append_dev(tr3, td13);
			append_dev(td13, t31);
			append_dev(tr3, t32);
			append_dev(tr3, td14);
			append_dev(td14, t33);
			append_dev(tr3, t34);
			append_dev(tr3, td15);
			append_dev(tr3, t35);
			append_dev(tr3, td16);
			append_dev(tr3, t36);
			append_dev(tr3, td17);
			insert_dev(target, t37, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, h3);
			append_dev(h3, t38);
			append_dev(div6, t39);
			mount_component(charts, div6, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(charts.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(charts.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div5);
			if (detaching) detach_dev(t37);
			if (detaching) detach_dev(div6);
			destroy_component(charts);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function preload({ params, query }) {
	return this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function dividevector(a, b) {
	return a.map((e, i) => e / b[i]);
}

function instance($$self, $$props, $$invalidate) {
	let { data_raw } = $$props;

	// Compute data for charts
	let list_meters = [];

	let list_date = [];
	let list_elevation = [];
	let list_minutes = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_elevation.push(x.elevation);
		list_minutes.push(x.minutes);
	});

	const data = {
		labels: list_date,
		datasets: [
			{
				label: "Meters covered",
				yAxisID: "Meters covered",
				data: list_meters,
				borderColor: "#3e95cd",
				fill: false
			},
			{
				label: "elevation",
				data: list_elevation,
				yAxisID: "elevation",
				borderColor: "#8e5ea2",
				fill: false
			}
		]
	};

	// TODO: verifiy ordering of dates and sessions
	// Compute average distance, speed, elevation, 
	// Last session
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_elevation = list_elevation[list_elevation.length - 1];

	// Last 3 sessions
	const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0));

	const minutes_3_session = list_minutes.slice(Math.max(list_minutes.length - 3, 0));
	const elevation_3_session = list_elevation.slice(Math.max(list_elevation.length - 3, 0));
	const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
	const average_3_distance = average(distance_3_session);
	const average_3_elevation = average(elevation_3_session);
	const average_3_speed = average(dividevector(distance_3_session, minutes_3_session)) * 60 / 1000;
	console.log(average_3_speed);
	const writable_props = ["data_raw"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Cycling> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Cycling", $$slots, []);

	$$self.$set = $$props => {
		if ("data_raw" in $$props) $$invalidate(7, data_raw = $$props.data_raw);
	};

	$$self.$capture_state = () => ({
		preload,
		Charts: Cycling_charts,
		data_raw,
		list_meters,
		list_date,
		list_elevation,
		list_minutes,
		data,
		last_distance,
		last_hours,
		last_speed,
		last_elevation,
		distance_3_session,
		minutes_3_session,
		elevation_3_session,
		average,
		average_3_distance,
		average_3_elevation,
		dividevector,
		average_3_speed
	});

	$$self.$inject_state = $$props => {
		if ("data_raw" in $$props) $$invalidate(7, data_raw = $$props.data_raw);
		if ("list_meters" in $$props) list_meters = $$props.list_meters;
		if ("list_date" in $$props) list_date = $$props.list_date;
		if ("list_elevation" in $$props) list_elevation = $$props.list_elevation;
		if ("list_minutes" in $$props) list_minutes = $$props.list_minutes;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		data,
		last_distance,
		last_speed,
		last_elevation,
		average_3_distance,
		average_3_elevation,
		average_3_speed,
		data_raw
	];
}

class Cycling extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_raw: 7, data: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cycling",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_raw*/ ctx[7] === undefined && !("data_raw" in props)) {
			console_1.warn("<Cycling> was created without expected prop 'data_raw'");
		}
	}

	get data_raw() {
		throw new Error("<Cycling>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data_raw(value) {
		throw new Error("<Cycling>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get data() {
		return this.$$.ctx[0];
	}

	set data(value) {
		throw new Error("<Cycling>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Cycling;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGluZy5kYmZhNTI1OC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvY3ljbGluZy9jeWNsaW5nLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBzcG9ydHMvY3ljbGluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuICAgIFxuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQ2hhcnRzIGZyb20gJy4vY3ljbGluZy1jaGFydHMuc3ZlbHRlJ1xuICAgIGV4cG9ydCBsZXQgZGF0YV9yYXdcblxuXG4vLyBDb21wdXRlIGRhdGEgZm9yIGNoYXJ0c1xuXG4gICAgbGV0IGxpc3RfbWV0ZXJzID0gW107XG4gICAgbGV0IGxpc3RfZGF0ZSA9IFtdO1xuICAgIGxldCBsaXN0X2VsZXZhdGlvbiA9IFtdO1xuICAgIGxldCBsaXN0X21pbnV0ZXMgPSBbXTtcblxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpXG4gICAgICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSlcbiAgICAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbilcbiAgICAgICAgbGlzdF9taW51dGVzLnB1c2goeC5taW51dGVzKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICB5QXhpc0lEIDogJ01ldGVycyBjb3ZlcmVkJyxcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNlOTVjZFwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ2VsZXZhdGlvbicsXG4gICAgICAgIGRhdGE6bGlzdF9lbGV2YXRpb24sXG4gICAgICAgIHlBeGlzSUQgOiAnZWxldmF0aW9uJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhlNWVhMlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH1dXG59XG5cbi8vIFRPRE86IHZlcmlmaXkgb3JkZXJpbmcgb2YgZGF0ZXMgYW5kIHNlc3Npb25zXG5cbi8vIENvbXB1dGUgYXZlcmFnZSBkaXN0YW5jZSwgc3BlZWQsIGVsZXZhdGlvbiwgXG4vLyBMYXN0IHNlc3Npb25cbmNvbnN0IGxhc3RfZGlzdGFuY2UgPSBsaXN0X21ldGVyc1tsaXN0X21ldGVycy5sZW5ndGgtMV1cbmNvbnN0IGxhc3RfaG91cnMgPSBsaXN0X21pbnV0ZXNbbGlzdF9taW51dGVzLmxlbmd0aC0xXS82MFxuY29uc3QgbGFzdF9zcGVlZCA9IGxhc3RfZGlzdGFuY2UvMTAwMC9sYXN0X2hvdXJzXG5jb25zdCBsYXN0X2VsZXZhdGlvbiA9IGxpc3RfZWxldmF0aW9uW2xpc3RfZWxldmF0aW9uLmxlbmd0aC0xXVxuXG5cbi8vIExhc3QgMyBzZXNzaW9uc1xuY29uc3QgZGlzdGFuY2VfM19zZXNzaW9uID0gbGlzdF9tZXRlcnMuc2xpY2UoTWF0aC5tYXgobGlzdF9tZXRlcnMubGVuZ3RoIC0gMywgMCkpXG5jb25zdCBtaW51dGVzXzNfc2Vzc2lvbiA9IGxpc3RfbWludXRlcy5zbGljZShNYXRoLm1heChsaXN0X21pbnV0ZXMubGVuZ3RoIC0gMywgMCkpXG5jb25zdCBlbGV2YXRpb25fM19zZXNzaW9uID0gbGlzdF9lbGV2YXRpb24uc2xpY2UoTWF0aC5tYXgobGlzdF9lbGV2YXRpb24ubGVuZ3RoIC0gMywgMCkpXG5cbmNvbnN0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XG5cbmNvbnN0IGF2ZXJhZ2VfM19kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX2VsZXZhdGlvbiA9IGF2ZXJhZ2UoZWxldmF0aW9uXzNfc2Vzc2lvbilcblxuZnVuY3Rpb24gZGl2aWRldmVjdG9yKGEsYil7XG4gICAgcmV0dXJuIGEubWFwKChlLGkpID0+IGUgLyBiW2ldKTtcbn1cblxuY29uc3QgYXZlcmFnZV8zX3NwZWVkID0gYXZlcmFnZShkaXZpZGV2ZWN0b3IoZGlzdGFuY2VfM19zZXNzaW9uICwgbWludXRlc18zX3Nlc3Npb24pKSAqIDYwLzEwMDBcblxuXG5jb25zb2xlLmxvZyhhdmVyYWdlXzNfc3BlZWQpXG5cbi8vIExhc3QgbW9udGhcblxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG48ZGl2IGNsYXNzPVwiZmxleCBoLTQ4XCI+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0yLzMgcC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHAtMiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGJnLWdyYXktMTAwXCI+XG4gICAgQ3ljbGluZyBQZXJmb3JtYW5jZVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImZsZXgtaW5pdGlhbCB3LTEvMyBwLTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiIHRleHQtcmlnaHQgcC0yXCI+XG4gICAgPGltZyBzcmM9XCJjeWNsaW5nLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuXG5cbjxkaXYgY2xhc3M9J3AtMTAnPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLWF1dG8gdGV4dC1jZW50ZXIgXCI+XG4gICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgIDx0aCBjbGFzcz1cInB4LTQgcHktMlwiPk1ldHJpY3M8L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5WYWx1ZTwvdGg+XG4gICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC00IHB5LTIgXCI+dnMuIExhc3QgMyBzZXNzaW9uczwvdGg+XG4gICAgICAgIDx0aCBjb2xzcGFuPTIgY2xhc3M9XCJweC00IHB5LTJcIj52cy4gTGFzdCBtb250aDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG4gICAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkRpc3RhbmNlIChtKTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bGFzdF9kaXN0YW5jZX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2F2ZXJhZ2VfM19kaXN0YW5jZX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X3NwZWVkfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57YXZlcmFnZV8zX3NwZWVkfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkVsZXZhdGlvbiAobSk8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3RfZWxldmF0aW9ufTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57YXZlcmFnZV8zX2VsZXZhdGlvbn08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvZGl2PlxuXG5cblxuPGRpdiA+XG5cdDxoMyBjbGFzcz1cInB4LTEwIHB5LTVcIj5TZWUgeW91ciBldm9sdXRpb24gaW4gdGhpcyBjaGFydDo8L2gzPlxuICAgICA8Q2hhcnRzIHtkYXRhfSAvPiBcbjwvZGl2PlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FtSHNDLEdBQWE7OztxQ0FDYixHQUFrQjs7Ozs7Ozs7Ozs7Ozs2QkFPbEIsR0FBVTs7O2tDQUNWLEdBQWU7Ozs7Ozs7Ozs7Ozs7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
