import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, w as create_component, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, x as claim_component, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as mount_component, n as noop, z as transition_in, A as transition_out, B as destroy_component } from './client.c530b55e.js';
import './_commonjsHelpers.1e235def.js';
import './Chart.b2015135.js';
import Running_charts from './running-charts.83df54bd.js';

/* src/routes/sports/running/running.svelte generated by Svelte v3.22.3 */
const file = "src/routes/sports/running/running.svelte";

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
	let tbody;
	let tr1;
	let td0;
	let t9;
	let t10;
	let td1;
	let t11;
	let td2;
	let t12;
	let tr2;
	let td3;
	let t13;
	let t14;
	let td4;
	let t15;
	let td5;
	let t16;
	let tr3;
	let td6;
	let t17;
	let t18;
	let td7;
	let t19;
	let td8;
	let t20;
	let div6;
	let h3;
	let t21;
	let t22;
	let current;

	const charts = new Running_charts({
			props: { data: /*data*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			div4 = element("div");
			div1 = element("div");
			div0 = element("div");
			t0 = text("Running Performance");
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
			t7 = text("Variation");
			t8 = space();
			tbody = element("tbody");
			tr1 = element("tr");
			td0 = element("td");
			t9 = text("Average speed at last session");
			t10 = space();
			td1 = element("td");
			t11 = space();
			td2 = element("td");
			t12 = space();
			tr2 = element("tr");
			td3 = element("td");
			t13 = text("Average speed on last three sessions");
			t14 = space();
			td4 = element("td");
			t15 = space();
			td5 = element("td");
			t16 = space();
			tr3 = element("tr");
			td6 = element("td");
			t17 = text("Average speed on all sessions");
			t18 = space();
			td7 = element("td");
			t19 = space();
			td8 = element("td");
			t20 = space();
			div6 = element("div");
			h3 = element("h3");
			t21 = text("See your evolution in this chart:");
			t22 = space();
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
			t0 = claim_text(div0_nodes, "Running Performance");
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
			t7 = claim_text(th2_nodes, "Variation");
			th2_nodes.forEach(detach_dev);
			tr0_nodes.forEach(detach_dev);
			thead_nodes.forEach(detach_dev);
			t8 = claim_space(table_nodes);
			tbody = claim_element(table_nodes, "TBODY", {});
			var tbody_nodes = children(tbody);
			tr1 = claim_element(tbody_nodes, "TR", {});
			var tr1_nodes = children(tr1);
			td0 = claim_element(tr1_nodes, "TD", { class: true });
			var td0_nodes = children(td0);
			t9 = claim_text(td0_nodes, "Average speed at last session");
			td0_nodes.forEach(detach_dev);
			t10 = claim_space(tr1_nodes);
			td1 = claim_element(tr1_nodes, "TD", { class: true });
			children(td1).forEach(detach_dev);
			t11 = claim_space(tr1_nodes);
			td2 = claim_element(tr1_nodes, "TD", { class: true });
			children(td2).forEach(detach_dev);
			tr1_nodes.forEach(detach_dev);
			t12 = claim_space(tbody_nodes);
			tr2 = claim_element(tbody_nodes, "TR", { class: true });
			var tr2_nodes = children(tr2);
			td3 = claim_element(tr2_nodes, "TD", { class: true });
			var td3_nodes = children(td3);
			t13 = claim_text(td3_nodes, "Average speed on last three sessions");
			td3_nodes.forEach(detach_dev);
			t14 = claim_space(tr2_nodes);
			td4 = claim_element(tr2_nodes, "TD", { class: true });
			children(td4).forEach(detach_dev);
			t15 = claim_space(tr2_nodes);
			td5 = claim_element(tr2_nodes, "TD", { class: true });
			children(td5).forEach(detach_dev);
			tr2_nodes.forEach(detach_dev);
			t16 = claim_space(tbody_nodes);
			tr3 = claim_element(tbody_nodes, "TR", {});
			var tr3_nodes = children(tr3);
			td6 = claim_element(tr3_nodes, "TD", { class: true });
			var td6_nodes = children(td6);
			t17 = claim_text(td6_nodes, "Average speed on all sessions");
			td6_nodes.forEach(detach_dev);
			t18 = claim_space(tr3_nodes);
			td7 = claim_element(tr3_nodes, "TD", { class: true });
			children(td7).forEach(detach_dev);
			t19 = claim_space(tr3_nodes);
			td8 = claim_element(tr3_nodes, "TD", { class: true });
			children(td8).forEach(detach_dev);
			tr3_nodes.forEach(detach_dev);
			tbody_nodes.forEach(detach_dev);
			table_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t20 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", {});
			var div6_nodes = children(div6);
			h3 = claim_element(div6_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t21 = claim_text(h3_nodes, "See your evolution in this chart:");
			h3_nodes.forEach(detach_dev);
			t22 = claim_space(div6_nodes);
			claim_component(charts.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "text-center p-2 text-2xl font-semibold bg-gray-100");
			add_location(div0, file, 54, 4, 996);
			attr_dev(div1, "class", "flex-initial w-2/3 p-2");
			add_location(div1, file, 53, 2, 955);
			if (img.src !== (img_src_value = "running.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "running");
			add_location(img, file, 60, 4, 1182);
			attr_dev(div2, "class", " text-right p-2");
			add_location(div2, file, 59, 4, 1148);
			attr_dev(div3, "class", "flex-initial w-1/3 p-2");
			add_location(div3, file, 58, 2, 1107);
			attr_dev(div4, "class", "flex h-48");
			add_location(div4, file, 52, 0, 929);
			attr_dev(th0, "class", "px-4 py-2");
			add_location(th0, file, 71, 8, 1334);
			attr_dev(th1, "class", "px-4 py-2");
			add_location(th1, file, 72, 8, 1377);
			attr_dev(th2, "class", "px-4 py-2");
			add_location(th2, file, 73, 8, 1418);
			add_location(tr0, file, 70, 8, 1321);
			add_location(thead, file, 69, 4, 1305);
			attr_dev(td0, "class", "border px-4 py-2");
			add_location(td0, file, 78, 8, 1515);
			attr_dev(td1, "class", "border px-4 py-2");
			add_location(td1, file, 79, 8, 1587);
			attr_dev(td2, "class", "border px-4 py-2");
			add_location(td2, file, 80, 8, 1630);
			add_location(tr1, file, 77, 8, 1502);
			attr_dev(td3, "class", "border px-4 py-2");
			add_location(td3, file, 83, 8, 1720);
			attr_dev(td4, "class", "border px-4 py-2");
			add_location(td4, file, 84, 8, 1799);
			attr_dev(td5, "class", "border px-4 py-2");
			add_location(td5, file, 85, 8, 1842);
			attr_dev(tr2, "class", "bg-gray-100");
			add_location(tr2, file, 82, 8, 1687);
			attr_dev(td6, "class", "border px-4 py-2");
			add_location(td6, file, 88, 8, 1912);
			attr_dev(td7, "class", "border px-4 py-2");
			add_location(td7, file, 89, 8, 1984);
			attr_dev(td8, "class", "border px-4 py-2");
			add_location(td8, file, 90, 8, 2027);
			add_location(tr3, file, 87, 8, 1899);
			add_location(tbody, file, 76, 4, 1486);
			attr_dev(table, "class", "table-auto ");
			add_location(table, file, 68, 4, 1273);
			attr_dev(div5, "class", "p-10");
			add_location(div5, file, 67, 0, 1250);
			attr_dev(h3, "class", "px-10 py-5");
			add_location(h3, file, 99, 1, 2120);
			add_location(div6, file, 98, 0, 2112);
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
			append_dev(table, t8);
			append_dev(table, tbody);
			append_dev(tbody, tr1);
			append_dev(tr1, td0);
			append_dev(td0, t9);
			append_dev(tr1, t10);
			append_dev(tr1, td1);
			append_dev(tr1, t11);
			append_dev(tr1, td2);
			append_dev(tbody, t12);
			append_dev(tbody, tr2);
			append_dev(tr2, td3);
			append_dev(td3, t13);
			append_dev(tr2, t14);
			append_dev(tr2, td4);
			append_dev(tr2, t15);
			append_dev(tr2, td5);
			append_dev(tbody, t16);
			append_dev(tbody, tr3);
			append_dev(tr3, td6);
			append_dev(td6, t17);
			append_dev(tr3, t18);
			append_dev(tr3, td7);
			append_dev(tr3, t19);
			append_dev(tr3, td8);
			insert_dev(target, t20, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, h3);
			append_dev(h3, t21);
			append_dev(div6, t22);
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
			if (detaching) detach_dev(t20);
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
	return this.fetch(`sports/running.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function instance($$self, $$props, $$invalidate) {
	let { data_raw } = $$props;
	let list_meters = [];
	let list_date = [];
	let list_elevation = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_elevation.push(x.elevation);
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
				label: "Elevation",
				data: list_elevation,
				yAxisID: "Elevation",
				borderColor: "#8e5ea2",
				fill: false
			}
		]
	};

	const writable_props = ["data_raw"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Running> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Running", $$slots, []);

	$$self.$set = $$props => {
		if ("data_raw" in $$props) $$invalidate(1, data_raw = $$props.data_raw);
	};

	$$self.$capture_state = () => ({
		preload,
		Charts: Running_charts,
		data_raw,
		list_meters,
		list_date,
		list_elevation,
		data
	});

	$$self.$inject_state = $$props => {
		if ("data_raw" in $$props) $$invalidate(1, data_raw = $$props.data_raw);
		if ("list_meters" in $$props) list_meters = $$props.list_meters;
		if ("list_date" in $$props) list_date = $$props.list_date;
		if ("list_elevation" in $$props) list_elevation = $$props.list_elevation;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [data, data_raw];
}

class Running extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_raw: 1, data: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Running",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_raw*/ ctx[1] === undefined && !("data_raw" in props)) {
			console.warn("<Running> was created without expected prop 'data_raw'");
		}
	}

	get data_raw() {
		throw new Error("<Running>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data_raw(value) {
		throw new Error("<Running>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get data() {
		return this.$$.ctx[0];
	}

	set data(value) {
		throw new Error("<Running>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Running;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmluZy5mNGVlNDk1YS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvcnVubmluZy9ydW5uaW5nLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBzcG9ydHMvcnVubmluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuICAgIFxuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQ2hhcnRzIGZyb20gJy4vcnVubmluZy1jaGFydHMuc3ZlbHRlJ1xuXG4gICAgZXhwb3J0IGxldCBkYXRhX3Jhd1xuICAgIFxuICAgIGxldCBsaXN0X21ldGVycyA9IFtdO1xuICAgIGxldCBsaXN0X2RhdGUgPSBbXTtcbiAgICBsZXQgbGlzdF9lbGV2YXRpb24gPSBbXTtcbiAgICBcbiAgICBkYXRhX3Jhdy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBsaXN0X21ldGVycy5wdXNoKHgubWV0ZXJzKVxuICAgICAgICBsaXN0X2RhdGUucHVzaCh4LmRhdGUpXG4gICAgICAgIGxpc3RfZWxldmF0aW9uLnB1c2goeC5lbGV2YXRpb24pXG4gICAgfSlcblxuICAgIGV4cG9ydCBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVsczogbGlzdF9kYXRlLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICBsYWJlbDogJ01ldGVycyBjb3ZlcmVkJyxcbiAgICAgICAgeUF4aXNJRCA6ICdNZXRlcnMgY292ZXJlZCcsXG4gICAgICAgIGRhdGE6bGlzdF9tZXRlcnMsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiMzZTk1Y2RcIixcbiAgICAgICAgZmlsbDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdFbGV2YXRpb24nLFxuICAgICAgICBkYXRhOmxpc3RfZWxldmF0aW9uLFxuICAgICAgICB5QXhpc0lEIDogJ0VsZXZhdGlvbicsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiM4ZTVlYTJcIixcbiAgICAgICAgZmlsbDogZmFsc2VcbiAgICB9XVxufVxuXG5cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cImZsZXggaC00OFwiPlxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTEwMFwiPlxuICAgIFJ1bm5pbmcgUGVyZm9ybWFuY2VcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0xLzMgcC0yXCI+XG4gICAgPGRpdiBjbGFzcz1cIiB0ZXh0LXJpZ2h0IHAtMlwiPlxuICAgIDxpbWcgc3JjPVwicnVubmluZy5qcGdcIiBhbHQ9XCJydW5uaW5nXCI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuXG48ZGl2IGNsYXNzPSdwLTEwJz5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIFwiPlxuICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5NZXRyaWNzPC90aD5cbiAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VmFsdWU8L3RoPlxuICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5WYXJpYXRpb248L3RoPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5BdmVyYWdlIHNwZWVkIGF0IGxhc3Qgc2Vzc2lvbjwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyIGNsYXNzPVwiYmctZ3JheS0xMDBcIj5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPkF2ZXJhZ2Ugc3BlZWQgb24gbGFzdCB0aHJlZSBzZXNzaW9uczwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj48L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+QXZlcmFnZSBzcGVlZCBvbiBhbGwgc2Vzc2lvbnM8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuPC9kaXY+XG5cblxuXG48ZGl2ID5cblx0PGgzIGNsYXNzPVwicHgtMTAgcHktNVwiPlNlZSB5b3VyIGV2b2x1dGlvbiBpbiB0aGlzIGNoYXJ0OjwvaDM+XG4gICAgIDxDaGFydHMge2RhdGF9IC8+IFxuPC9kaXY+XG5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFaUIsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxLQUFLLHdCQUF3QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVE7V0FDaEUsUUFBUTs7Ozs7T0FVTCxRQUFRO0tBRWYsV0FBVztLQUNYLFNBQVM7S0FDVCxjQUFjOztDQUVsQixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNO0VBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7RUFDckIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O09BR3RCLElBQUk7RUFDakIsTUFBTSxFQUFFLFNBQVM7RUFDakIsUUFBUTs7SUFDSixLQUFLLEVBQUUsZ0JBQWdCO0lBQ3ZCLE9BQU8sRUFBRyxnQkFBZ0I7SUFDMUIsSUFBSSxFQUFDLFdBQVc7SUFDaEIsV0FBVyxFQUFFLFNBQVM7SUFDdEIsSUFBSSxFQUFFLEtBQUs7OztJQUdYLEtBQUssRUFBRSxXQUFXO0lBQ2xCLElBQUksRUFBQyxjQUFjO0lBQ25CLE9BQU8sRUFBRyxXQUFXO0lBQ3JCLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLElBQUksRUFBRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
