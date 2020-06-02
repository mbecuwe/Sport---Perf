import { S as SvelteComponentDev, i as init, d as dispatch_dev, F as globals, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, w as create_component, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, x as claim_component, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as mount_component, n as noop, z as transition_in, A as transition_out, B as destroy_component } from './client.76db5183.js';
import './_commonjsHelpers.1e235def.js';
import './Chart.b2015135.js';
import Cycling_charts from './cycling-charts.27ba6e7e.js';

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
	let td3;
	let t16;
	let tr2;
	let td4;
	let t17;
	let t18;
	let td5;
	let t19;
	let t20;
	let td6;
	let t21;
	let td7;
	let t22;
	let tr3;
	let td8;
	let t23;
	let t24;
	let td9;
	let t25;
	let t26;
	let td10;
	let t27;
	let td11;
	let t28;
	let div6;
	let h3;
	let t29;
	let t30;
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
			t15 = space();
			td3 = element("td");
			t16 = space();
			tr2 = element("tr");
			td4 = element("td");
			t17 = text("Speed (km/h)");
			t18 = space();
			td5 = element("td");
			t19 = text(/*last_speed*/ ctx[2]);
			t20 = space();
			td6 = element("td");
			t21 = space();
			td7 = element("td");
			t22 = space();
			tr3 = element("tr");
			td8 = element("td");
			t23 = text("Elevation (m)");
			t24 = space();
			td9 = element("td");
			t25 = text(/*last_elevation*/ ctx[3]);
			t26 = space();
			td10 = element("td");
			t27 = space();
			td11 = element("td");
			t28 = space();
			div6 = element("div");
			h3 = element("h3");
			t29 = text("See your evolution in this chart:");
			t30 = space();
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
			th2 = claim_element(tr0_nodes, "TH", { class: true });
			var th2_nodes = children(th2);
			t7 = claim_text(th2_nodes, "vs. Last 3 sessions");
			th2_nodes.forEach(detach_dev);
			t8 = claim_space(tr0_nodes);
			th3 = claim_element(tr0_nodes, "TH", { class: true });
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
			children(td2).forEach(detach_dev);
			t15 = claim_space(tr1_nodes);
			td3 = claim_element(tr1_nodes, "TD", { class: true });
			children(td3).forEach(detach_dev);
			tr1_nodes.forEach(detach_dev);
			t16 = claim_space(tbody_nodes);
			tr2 = claim_element(tbody_nodes, "TR", { class: true });
			var tr2_nodes = children(tr2);
			td4 = claim_element(tr2_nodes, "TD", { class: true });
			var td4_nodes = children(td4);
			t17 = claim_text(td4_nodes, "Speed (km/h)");
			td4_nodes.forEach(detach_dev);
			t18 = claim_space(tr2_nodes);
			td5 = claim_element(tr2_nodes, "TD", { class: true });
			var td5_nodes = children(td5);
			t19 = claim_text(td5_nodes, /*last_speed*/ ctx[2]);
			td5_nodes.forEach(detach_dev);
			t20 = claim_space(tr2_nodes);
			td6 = claim_element(tr2_nodes, "TD", { class: true });
			children(td6).forEach(detach_dev);
			t21 = claim_space(tr2_nodes);
			td7 = claim_element(tr2_nodes, "TD", { class: true });
			children(td7).forEach(detach_dev);
			tr2_nodes.forEach(detach_dev);
			t22 = claim_space(tbody_nodes);
			tr3 = claim_element(tbody_nodes, "TR", {});
			var tr3_nodes = children(tr3);
			td8 = claim_element(tr3_nodes, "TD", { class: true });
			var td8_nodes = children(td8);
			t23 = claim_text(td8_nodes, "Elevation (m)");
			td8_nodes.forEach(detach_dev);
			t24 = claim_space(tr3_nodes);
			td9 = claim_element(tr3_nodes, "TD", { class: true });
			var td9_nodes = children(td9);
			t25 = claim_text(td9_nodes, /*last_elevation*/ ctx[3]);
			td9_nodes.forEach(detach_dev);
			t26 = claim_space(tr3_nodes);
			td10 = claim_element(tr3_nodes, "TD", { class: true });
			children(td10).forEach(detach_dev);
			t27 = claim_space(tr3_nodes);
			td11 = claim_element(tr3_nodes, "TD", { class: true });
			children(td11).forEach(detach_dev);
			tr3_nodes.forEach(detach_dev);
			tbody_nodes.forEach(detach_dev);
			table_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t28 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", {});
			var div6_nodes = children(div6);
			h3 = claim_element(div6_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t29 = claim_text(h3_nodes, "See your evolution in this chart:");
			h3_nodes.forEach(detach_dev);
			t30 = claim_space(div6_nodes);
			claim_component(charts.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "text-center p-2 text-2xl font-semibold bg-gray-100");
			add_location(div0, file, 67, 4, 1448);
			attr_dev(div1, "class", "flex-initial w-2/3 p-2");
			add_location(div1, file, 66, 2, 1407);
			if (img.src !== (img_src_value = "cycling.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			add_location(img, file, 73, 4, 1634);
			attr_dev(div2, "class", " text-right p-2");
			add_location(div2, file, 72, 4, 1600);
			attr_dev(div3, "class", "flex-initial w-1/3 p-2");
			add_location(div3, file, 71, 2, 1559);
			attr_dev(div4, "class", "flex h-48");
			add_location(div4, file, 65, 0, 1381);
			attr_dev(th0, "class", "px-4 py-2");
			add_location(th0, file, 84, 8, 1798);
			attr_dev(th1, "class", "px-4 py-2");
			add_location(th1, file, 85, 8, 1841);
			attr_dev(th2, "class", "px-4 py-2");
			add_location(th2, file, 86, 8, 1882);
			attr_dev(th3, "class", "px-4 py-2");
			add_location(th3, file, 87, 8, 1937);
			add_location(tr0, file, 83, 8, 1785);
			add_location(thead, file, 82, 4, 1769);
			attr_dev(td0, "class", "border px-4 py-2");
			add_location(td0, file, 92, 8, 2039);
			attr_dev(td1, "class", "border px-4 py-2");
			add_location(td1, file, 93, 8, 2094);
			attr_dev(td2, "class", "border px-4 py-2");
			add_location(td2, file, 94, 8, 2152);
			attr_dev(td3, "class", "border px-4 py-2");
			add_location(td3, file, 95, 16, 2203);
			add_location(tr1, file, 91, 8, 2026);
			attr_dev(td4, "class", "border px-4 py-2");
			add_location(td4, file, 98, 8, 2293);
			attr_dev(td5, "class", "border px-4 py-2");
			add_location(td5, file, 99, 8, 2348);
			attr_dev(td6, "class", "border px-4 py-2");
			add_location(td6, file, 100, 8, 2403);
			attr_dev(td7, "class", "border px-4 py-2");
			add_location(td7, file, 101, 16, 2454);
			attr_dev(tr2, "class", "bg-gray-100");
			add_location(tr2, file, 97, 8, 2260);
			attr_dev(td8, "class", "border px-4 py-2");
			add_location(td8, file, 104, 8, 2524);
			attr_dev(td9, "class", "border px-4 py-2");
			add_location(td9, file, 105, 8, 2580);
			attr_dev(td10, "class", "border px-4 py-2");
			add_location(td10, file, 106, 8, 2639);
			attr_dev(td11, "class", "border px-4 py-2");
			add_location(td11, file, 107, 16, 2690);
			add_location(tr3, file, 103, 8, 2511);
			add_location(tbody, file, 90, 4, 2010);
			attr_dev(table, "class", "table-auto text-center ");
			add_location(table, file, 81, 4, 1725);
			attr_dev(div5, "class", "p-10");
			add_location(div5, file, 80, 0, 1702);
			attr_dev(h3, "class", "px-10 py-5");
			add_location(h3, file, 116, 1, 2783);
			add_location(div6, file, 115, 0, 2775);
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
			append_dev(tr1, t15);
			append_dev(tr1, td3);
			append_dev(tbody, t16);
			append_dev(tbody, tr2);
			append_dev(tr2, td4);
			append_dev(td4, t17);
			append_dev(tr2, t18);
			append_dev(tr2, td5);
			append_dev(td5, t19);
			append_dev(tr2, t20);
			append_dev(tr2, td6);
			append_dev(tr2, t21);
			append_dev(tr2, td7);
			append_dev(tbody, t22);
			append_dev(tbody, tr3);
			append_dev(tr3, td8);
			append_dev(td8, t23);
			append_dev(tr3, t24);
			append_dev(tr3, td9);
			append_dev(td9, t25);
			append_dev(tr3, t26);
			append_dev(tr3, td10);
			append_dev(tr3, t27);
			append_dev(tr3, td11);
			insert_dev(target, t28, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, h3);
			append_dev(h3, t29);
			append_dev(div6, t30);
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
			if (detaching) detach_dev(t28);
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

	// Compute average distance, speed, elevation, 
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_elevation = list_elevation[list_elevation.length - 1];
	console.log(list_elevation.slice(list_elevation.length - 2, list_elevation.length - 1));
	const writable_props = ["data_raw"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Cycling> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Cycling", $$slots, []);

	$$self.$set = $$props => {
		if ("data_raw" in $$props) $$invalidate(4, data_raw = $$props.data_raw);
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
		last_elevation
	});

	$$self.$inject_state = $$props => {
		if ("data_raw" in $$props) $$invalidate(4, data_raw = $$props.data_raw);
		if ("list_meters" in $$props) list_meters = $$props.list_meters;
		if ("list_date" in $$props) list_date = $$props.list_date;
		if ("list_elevation" in $$props) list_elevation = $$props.list_elevation;
		if ("list_minutes" in $$props) list_minutes = $$props.list_minutes;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [data, last_distance, last_speed, last_elevation, data_raw];
}

class Cycling extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_raw: 4, data: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cycling",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_raw*/ ctx[4] === undefined && !("data_raw" in props)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGluZy5hNGM2N2Q1Ni5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvY3ljbGluZy9jeWNsaW5nLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBzcG9ydHMvY3ljbGluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuICAgIFxuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQ2hhcnRzIGZyb20gJy4vY3ljbGluZy1jaGFydHMuc3ZlbHRlJ1xuICAgIGV4cG9ydCBsZXQgZGF0YV9yYXdcblxuXG4vLyBDb21wdXRlIGRhdGEgZm9yIGNoYXJ0c1xuXG4gICAgbGV0IGxpc3RfbWV0ZXJzID0gW107XG4gICAgbGV0IGxpc3RfZGF0ZSA9IFtdO1xuICAgIGxldCBsaXN0X2VsZXZhdGlvbiA9IFtdO1xuICAgIGxldCBsaXN0X21pbnV0ZXMgPSBbXTtcblxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpXG4gICAgICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSlcbiAgICAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbilcbiAgICAgICAgbGlzdF9taW51dGVzLnB1c2goeC5taW51dGVzKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICB5QXhpc0lEIDogJ01ldGVycyBjb3ZlcmVkJyxcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNlOTVjZFwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ2VsZXZhdGlvbicsXG4gICAgICAgIGRhdGE6bGlzdF9lbGV2YXRpb24sXG4gICAgICAgIHlBeGlzSUQgOiAnZWxldmF0aW9uJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhlNWVhMlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH1dXG59XG5cblxuLy8gQ29tcHV0ZSBhdmVyYWdlIGRpc3RhbmNlLCBzcGVlZCwgZWxldmF0aW9uLCBcblxuY29uc3QgbGFzdF9kaXN0YW5jZSA9IGxpc3RfbWV0ZXJzW2xpc3RfbWV0ZXJzLmxlbmd0aC0xXVxuY29uc3QgbGFzdF9ob3VycyA9IGxpc3RfbWludXRlc1tsaXN0X21pbnV0ZXMubGVuZ3RoLTFdLzYwXG5jb25zdCBsYXN0X3NwZWVkID0gbGFzdF9kaXN0YW5jZS8xMDAwL2xhc3RfaG91cnNcbmNvbnN0IGxhc3RfZWxldmF0aW9uID0gbGlzdF9lbGV2YXRpb25bbGlzdF9lbGV2YXRpb24ubGVuZ3RoLTFdXG5cbmNvbnNvbGUubG9nKGxpc3RfZWxldmF0aW9uLnNsaWNlKGxpc3RfZWxldmF0aW9uLmxlbmd0aC0yLGxpc3RfZWxldmF0aW9uLmxlbmd0aC0xKSlcbjwvc2NyaXB0PlxuXG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImZsZXggaC00OFwiPlxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTEwMFwiPlxuICAgIEN5Y2xpbmcgUGVyZm9ybWFuY2VcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0xLzMgcC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cIiB0ZXh0LXJpZ2h0IHAtMlwiPlxuICAgIDxpbWcgc3JjPVwiY3ljbGluZy5qcGdcIiBhbHQ9XCJjeWNsaW5nXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuXG48ZGl2IGNsYXNzPSdwLTEwJz5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIFwiPlxuICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5NZXRyaWNzPC90aD5cbiAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VmFsdWU8L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj52cy4gTGFzdCAzIHNlc3Npb25zPC90aD5cbiAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+dnMuIExhc3QgbW9udGg8L3RoPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5EaXN0YW5jZSAobSk8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3RfZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0ciBjbGFzcz1cImJnLWdyYXktMTAwXCI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5TcGVlZCAoa20vaCk8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3Rfc3BlZWR9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkVsZXZhdGlvbiAobSk8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3RfZWxldmF0aW9ufTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbjwvZGl2PlxuXG5cblxuPGRpdiA+XG5cdDxoMyBjbGFzcz1cInB4LTEwIHB5LTVcIj5TZWUgeW91ciBldm9sdXRpb24gaW4gdGhpcyBjaGFydDo8L2gzPlxuICAgICA8Q2hhcnRzIHtkYXRhfSAvPiBcbjwvZGl2PlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0E2RnNDLEdBQWE7Ozs7Ozs7Ozs7OzZCQU1iLEdBQVU7Ozs7Ozs7Ozs7O2lDQU1WLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lEQVpkLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBTWIsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFNVixHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F2R25DLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSyx3QkFBd0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRO1dBQ2hFLFFBQVE7Ozs7O09BU0wsUUFBUTs7O0tBS2YsV0FBVzs7S0FDWCxTQUFTO0tBQ1QsY0FBYztLQUNkLFlBQVk7O0NBRWhCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNkLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU07RUFDekIsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtFQUNyQixjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTO0VBQy9CLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87OztPQUlsQixJQUFJO0VBQ2pCLE1BQU0sRUFBRSxTQUFTO0VBQ2pCLFFBQVE7O0lBQ0osS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixPQUFPLEVBQUcsZ0JBQWdCO0lBQzFCLElBQUksRUFBQyxXQUFXO0lBQ2hCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBRSxLQUFLOzs7SUFHWCxLQUFLLEVBQUUsV0FBVztJQUNsQixJQUFJLEVBQUMsY0FBYztJQUNuQixPQUFPLEVBQUcsV0FBVztJQUNyQixXQUFXLEVBQUUsU0FBUztJQUN0QixJQUFJLEVBQUUsS0FBSzs7Ozs7O09BT2IsYUFBYSxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFDLENBQUM7O09BQ2hELFVBQVUsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBQyxDQUFDLElBQUUsRUFBRTtPQUNuRCxVQUFVLEdBQUcsYUFBYSxHQUFDLElBQUksR0FBQyxVQUFVO09BQzFDLGNBQWMsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBQyxDQUFDO0NBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxjQUFjLENBQUMsTUFBTSxHQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
