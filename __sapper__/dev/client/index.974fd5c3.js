import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_each_argument, a as validate_slots, e as element, t as text, c as claim_element, b as children, f as claim_text, g as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, n as noop, m as space, q as query_selector_all, o as claim_space, p as destroy_each } from './client.82a672bc.js';
import Chart from './chart.0d7c25e4.js';
import './_commonjsHelpers.1e235def.js';
import Frappe_charts from './frappe-charts.df7cbb8a.js';

/*
console.log(newSession('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}]))

console.log(newSession('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}, {'param': 'minutes', 'value' : 4}, {'param': 'sprints', 'value' : 4}, {'param': 'date', 'value' : 4}]))

console.log(performance_data)
*/


function addCustomSport(sport, ...args){
return 'yeah output'
}


/*


function addCustomExercise(sport, ...args){

}


*/




console.log('everything working');


function test(string){
    return string
}

/* src/routes/index.svelte generated by Svelte v3.22.3 */
const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (116:1) {#each [1,2,3,4,5] as i}
function create_each_block(ctx) {
	let li;
	let t0_value = /*list_date*/ ctx[0][/*list_date*/ ctx[0].length - /*i*/ ctx[3]] + "";
	let t0;
	let t1;
	let t2_value = /*list_sport*/ ctx[1][/*list_sport*/ ctx[1].length - /*i*/ ctx[3]] + "";
	let t2;

	const block = {
		c: function create() {
			li = element("li");
			t0 = text(t0_value);
			t1 = text(" / ");
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			t0 = claim_text(li_nodes, t0_value);
			t1 = claim_text(li_nodes, " / ");
			t2 = claim_text(li_nodes, t2_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li, "class", "p-2");
			add_location(li, file, 116, 1, 2917);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t0);
			append_dev(li, t1);
			append_dev(li, t2);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(116:1) {#each [1,2,3,4,5] as i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div10;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let div1;
	let h10;
	let t2;
	let t3;
	let br0;
	let t4;
	let div9;
	let div7;
	let div6;
	let div2;
	let h11;
	let t5;
	let t6;
	let p0;
	let t7;
	let br1;
	let t8;
	let br2;
	let t9;
	let t10;
	let div3;
	let h12;
	let t11;
	let t12;
	let p1;
	let t13;
	let br3;
	let t14;
	let br4;
	let t15;
	let t16;
	let div5;
	let h13;
	let t17;
	let t18;
	let div4;
	let p2;
	let t19;
	let br5;
	let t20;
	let t21;
	let lu0;
	let li0;
	let t22;
	let t23;
	let li1;
	let t24;
	let t25;
	let li2;
	let t26;
	let t27;
	let li3;
	let t28;
	let t29;
	let p3;
	let t30;
	let br6;
	let t31;
	let t32;
	let div8;
	let h14;
	let t33;
	let p4;
	let lu1;
	let each_value = [1, 2, 3, 4, 5];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < 5; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div10 = element("div");
			div0 = element("div");
			img = element("img");
			t1 = space();
			div1 = element("div");
			h10 = element("h1");
			t2 = text("Welcome to the Sport Performance Assistant !");
			t3 = space();
			br0 = element("br");
			t4 = space();
			div9 = element("div");
			div7 = element("div");
			div6 = element("div");
			div2 = element("div");
			h11 = element("h1");
			t5 = text("Why using the Sport Assistant App?");
			t6 = space();
			p0 = element("p");
			t7 = text("It can be hard to measure progress in sports performance. ");
			br1 = element("br");
			t8 = text("\n\tWe think this evolution towards better performance is what truly motivate us to give our best in sports sessions.");
			br2 = element("br");
			t9 = text("\n\tThis application is here to help you track your progress from one sport session to another.");
			t10 = space();
			div3 = element("div");
			h12 = element("h1");
			t11 = text("How to use the App?");
			t12 = space();
			p1 = element("p");
			t13 = text("Once you finished your sport session, record your performance in the 'New Session' tab. ");
			br3 = element("br");
			t14 = text("\n\tFor now, you can save sessions for running, cycling, swimming and working out. ");
			br4 = element("br");
			t15 = text("\n\tThen, go to the 'Performance' tab and observe the progress you made.");
			t16 = space();
			div5 = element("div");
			h13 = element("h1");
			t17 = text("What's next?");
			t18 = space();
			div4 = element("div");
			p2 = element("p");
			t19 = text("This is a first version of our website and we intend to improve it further to allow for more features and a better experience.");
			br5 = element("br");
			t20 = text("\n\tWe are thinking of implementing options to:");
			t21 = space();
			lu0 = element("lu");
			li0 = element("li");
			t22 = text("Add more sports");
			t23 = space();
			li1 = element("li");
			t24 = text("Delete sessions that were wrongly entered");
			t25 = space();
			li2 = element("li");
			t26 = text("Add an authentification system");
			t27 = space();
			li3 = element("li");
			t28 = text("Improve and add new visualizations.");
			t29 = space();
			p3 = element("p");
			t30 = text("We hope you enjoy our App and that it helps you staying motivated!");
			br6 = element("br");
			t31 = text("\n\tFeel free to contact us to give your thoughts about features you would like to see in the App.");
			t32 = space();
			div8 = element("div");
			h14 = element("h1");
			t33 = text("Calendar of your last sport sessions : \n    ");
			p4 = element("p");
			lu1 = element("lu");

			for (let i = 0; i < 5; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-rblobr\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div10 = claim_element(nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div0 = claim_element(div10_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div10_nodes);
			div1 = claim_element(div10_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h10 = claim_element(div1_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t2 = claim_text(h10_nodes, "Welcome to the Sport Performance Assistant !");
			h10_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div10_nodes);
			br0 = claim_element(div10_nodes, "BR", {});
			t4 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div7 = claim_element(div9_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div2 = claim_element(div6_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h11 = claim_element(div2_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t5 = claim_text(h11_nodes, "Why using the Sport Assistant App?");
			h11_nodes.forEach(detach_dev);
			t6 = claim_space(div2_nodes);
			p0 = claim_element(div2_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t7 = claim_text(p0_nodes, "It can be hard to measure progress in sports performance. ");
			br1 = claim_element(p0_nodes, "BR", {});
			t8 = claim_text(p0_nodes, "\n\tWe think this evolution towards better performance is what truly motivate us to give our best in sports sessions.");
			br2 = claim_element(p0_nodes, "BR", {});
			t9 = claim_text(p0_nodes, "\n\tThis application is here to help you track your progress from one sport session to another.");
			p0_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t10 = claim_space(div6_nodes);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h12 = claim_element(div3_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t11 = claim_text(h12_nodes, "How to use the App?");
			h12_nodes.forEach(detach_dev);
			t12 = claim_space(div3_nodes);
			p1 = claim_element(div3_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t13 = claim_text(p1_nodes, "Once you finished your sport session, record your performance in the 'New Session' tab. ");
			br3 = claim_element(p1_nodes, "BR", {});
			t14 = claim_text(p1_nodes, "\n\tFor now, you can save sessions for running, cycling, swimming and working out. ");
			br4 = claim_element(p1_nodes, "BR", {});
			t15 = claim_text(p1_nodes, "\n\tThen, go to the 'Performance' tab and observe the progress you made.");
			p1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t16 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			h13 = claim_element(div5_nodes, "H1", { class: true });
			var h13_nodes = children(h13);
			t17 = claim_text(h13_nodes, "What's next?");
			h13_nodes.forEach(detach_dev);
			t18 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			p2 = claim_element(div4_nodes, "P", {});
			var p2_nodes = children(p2);
			t19 = claim_text(p2_nodes, "This is a first version of our website and we intend to improve it further to allow for more features and a better experience.");
			br5 = claim_element(p2_nodes, "BR", {});
			t20 = claim_text(p2_nodes, "\n\tWe are thinking of implementing options to:");
			p2_nodes.forEach(detach_dev);
			t21 = claim_space(div4_nodes);
			lu0 = claim_element(div4_nodes, "LU", {});
			var lu0_nodes = children(lu0);
			li0 = claim_element(lu0_nodes, "LI", {});
			var li0_nodes = children(li0);
			t22 = claim_text(li0_nodes, "Add more sports");
			li0_nodes.forEach(detach_dev);
			t23 = claim_space(lu0_nodes);
			li1 = claim_element(lu0_nodes, "LI", {});
			var li1_nodes = children(li1);
			t24 = claim_text(li1_nodes, "Delete sessions that were wrongly entered");
			li1_nodes.forEach(detach_dev);
			t25 = claim_space(lu0_nodes);
			li2 = claim_element(lu0_nodes, "LI", {});
			var li2_nodes = children(li2);
			t26 = claim_text(li2_nodes, "Add an authentification system");
			li2_nodes.forEach(detach_dev);
			t27 = claim_space(lu0_nodes);
			li3 = claim_element(lu0_nodes, "LI", {});
			var li3_nodes = children(li3);
			t28 = claim_text(li3_nodes, "Improve and add new visualizations.");
			li3_nodes.forEach(detach_dev);
			lu0_nodes.forEach(detach_dev);
			t29 = claim_space(div4_nodes);
			p3 = claim_element(div4_nodes, "P", {});
			var p3_nodes = children(p3);
			t30 = claim_text(p3_nodes, "We hope you enjoy our App and that it helps you staying motivated!");
			br6 = claim_element(p3_nodes, "BR", {});
			t31 = claim_text(p3_nodes, "\n\tFeel free to contact us to give your thoughts about features you would like to see in the App.");
			p3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t32 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			h14 = claim_element(div8_nodes, "H1", { class: true });
			var h14_nodes = children(h14);
			t33 = claim_text(h14_nodes, "Calendar of your last sport sessions : \n    ");
			h14_nodes.forEach(detach_dev);
			p4 = claim_element(div8_nodes, "P", { class: true });
			var p4_nodes = children(p4);
			lu1 = claim_element(p4_nodes, "LU", {});
			var lu1_nodes = children(lu1);

			for (let i = 0; i < 5; i += 1) {
				each_blocks[i].l(lu1_nodes);
			}

			lu1_nodes.forEach(detach_dev);
			p4_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sport App";
			if (img.src !== (img_src_value = "index.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "work harder sign");
			attr_dev(img, "class", "antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md opacity-75");
			add_location(img, file, 42, 4, 830);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 41, 0, 799);
			attr_dev(h10, "class", "text-4xl text-center text-blue-700 font-semibold tracking-widest");
			add_location(h10, file, 51, 8, 1031);
			attr_dev(div1, "class", "flex justify-center mb-8");
			add_location(div1, file, 50, 4, 984);
			add_location(br0, file, 56, 0, 1174);
			attr_dev(h11, "class", "text-blue-800");
			add_location(h11, file, 63, 1, 1289);
			add_location(br1, file, 67, 74, 1446);
			add_location(br2, file, 68, 114, 1565);
			attr_dev(p0, "class", "p-4");
			add_location(p0, file, 67, 1, 1373);
			attr_dev(div2, "class", "");
			add_location(div2, file, 62, 1, 1273);
			attr_dev(h12, "class", "text-blue-800");
			add_location(h12, file, 74, 1, 1698);
			add_location(br3, file, 77, 104, 1868);
			add_location(br4, file, 78, 80, 1953);
			attr_dev(p1, "class", "p-4");
			add_location(p1, file, 77, 1, 1765);
			attr_dev(div3, "class", "pt-8");
			add_location(div3, file, 73, 0, 1678);
			attr_dev(h13, "class", "text-blue-800");
			add_location(h13, file, 84, 1, 2062);
			add_location(br5, file, 88, 132, 2273);
			add_location(p2, file, 88, 1, 2142);
			add_location(li0, file, 91, 1, 2334);
			add_location(li1, file, 93, 1, 2362);
			add_location(li2, file, 95, 1, 2416);
			add_location(li3, file, 97, 1, 2459);
			add_location(lu0, file, 90, 1, 2328);
			add_location(br6, file, 100, 70, 2583);
			add_location(p3, file, 100, 1, 2514);
			attr_dev(div4, "class", "p-4");
			add_location(div4, file, 87, 2, 2123);
			attr_dev(div5, "class", "pt-8");
			add_location(div5, file, 83, 0, 2042);
			attr_dev(div6, "class", "divide-y divide-gray-400 ");
			add_location(div6, file, 60, 1, 1230);
			attr_dev(div7, "class", " w-2/3 p-4");
			add_location(div7, file, 59, 2, 1204);
			attr_dev(h14, "class", "text-blue-800");
			add_location(h14, file, 111, 1, 2768);
			add_location(lu1, file, 114, 1, 2885);
			attr_dev(p4, "class", "flex justify-center");
			add_location(p4, file, 113, 9, 2852);
			attr_dev(div8, "class", "flex-initial w-1/3 p-4");
			add_location(div8, file, 109, 2, 2726);
			attr_dev(div9, "class", "flex ");
			add_location(div9, file, 58, 0, 1182);
			attr_dev(div10, "class", "");
			add_location(div10, file, 38, 0, 782);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div10, anchor);
			append_dev(div10, div0);
			append_dev(div0, img);
			append_dev(div10, t1);
			append_dev(div10, div1);
			append_dev(div1, h10);
			append_dev(h10, t2);
			append_dev(div10, t3);
			append_dev(div10, br0);
			append_dev(div10, t4);
			append_dev(div10, div9);
			append_dev(div9, div7);
			append_dev(div7, div6);
			append_dev(div6, div2);
			append_dev(div2, h11);
			append_dev(h11, t5);
			append_dev(div2, t6);
			append_dev(div2, p0);
			append_dev(p0, t7);
			append_dev(p0, br1);
			append_dev(p0, t8);
			append_dev(p0, br2);
			append_dev(p0, t9);
			append_dev(div6, t10);
			append_dev(div6, div3);
			append_dev(div3, h12);
			append_dev(h12, t11);
			append_dev(div3, t12);
			append_dev(div3, p1);
			append_dev(p1, t13);
			append_dev(p1, br3);
			append_dev(p1, t14);
			append_dev(p1, br4);
			append_dev(p1, t15);
			append_dev(div6, t16);
			append_dev(div6, div5);
			append_dev(div5, h13);
			append_dev(h13, t17);
			append_dev(div5, t18);
			append_dev(div5, div4);
			append_dev(div4, p2);
			append_dev(p2, t19);
			append_dev(p2, br5);
			append_dev(p2, t20);
			append_dev(div4, t21);
			append_dev(div4, lu0);
			append_dev(lu0, li0);
			append_dev(li0, t22);
			append_dev(lu0, t23);
			append_dev(lu0, li1);
			append_dev(li1, t24);
			append_dev(lu0, t25);
			append_dev(lu0, li2);
			append_dev(li2, t26);
			append_dev(lu0, t27);
			append_dev(lu0, li3);
			append_dev(li3, t28);
			append_dev(div4, t29);
			append_dev(div4, p3);
			append_dev(p3, t30);
			append_dev(p3, br6);
			append_dev(p3, t31);
			append_dev(div9, t32);
			append_dev(div9, div8);
			append_dev(div8, h14);
			append_dev(h14, t33);
			append_dev(div8, p4);
			append_dev(p4, lu1);

			for (let i = 0; i < 5; i += 1) {
				each_blocks[i].m(lu1, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*list_sport, list_date*/ 3) {
				each_value = [1, 2, 3, 4, 5];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < 5; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(lu1, null);
					}
				}

				for (; i < 5; i += 1) {
					each_blocks[i].d(1);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div10);
			destroy_each(each_blocks, detaching);
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
	return this.fetch(`home.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function custom_sort(a, b) {
	return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function instance($$self, $$props, $$invalidate) {
	let { data_raw } = $$props;
	data_raw = data_raw.sort(custom_sort);
	let list_date = [];
	let list_sport = [];

	data_raw.forEach(x => {
		list_date.push(x.date);
		list_sport.push(x.sport);
	});

	const writable_props = ["data_raw"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	$$self.$set = $$props => {
		if ("data_raw" in $$props) $$invalidate(2, data_raw = $$props.data_raw);
	};

	$$self.$capture_state = () => ({
		FrappeChart: Frappe_charts,
		ChartJS: Chart,
		addCustomSport,
		test,
		preload,
		data_raw,
		custom_sort,
		list_date,
		list_sport
	});

	$$self.$inject_state = $$props => {
		if ("data_raw" in $$props) $$invalidate(2, data_raw = $$props.data_raw);
		if ("list_date" in $$props) $$invalidate(0, list_date = $$props.list_date);
		if ("list_sport" in $$props) $$invalidate(1, list_sport = $$props.list_sport);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [list_date, list_sport, data_raw];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_raw: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_raw*/ ctx[2] === undefined && !("data_raw" in props)) {
			console.warn("<Routes> was created without expected prop 'data_raw'");
		}
	}

	get data_raw() {
		throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data_raw(value) {
		throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTc0ZmQ1YzMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnQuanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gY29uc3QgdXNlcl9saXN0ID0gW1xuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyMScsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDFcIixcbi8vICAgICAnVXNlcklkJyA6IDF9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyMicsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDJcIlxuLy8gICAgICdVc2VySWQnIDogMn0sXG4vLyAgICAge1wibmFtZVwiIDogJ1VzZXIzJyxcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkM1wiLFxuLy8gICAgICdVc2VySWQnIDogM30sXG4vLyAgICAge1wibmFtZVwiIDogJ1VzZXI0Jyxcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkNFwiLFxuLy8gICAgICdVc2VySWQnIDogNH0sXG4vLyAgICAge1wibmFtZVwiIDogJ1VzZXI1Jyxcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkNVwiLFxuLy8gICAgICdVc2VySWQnIDogNX0sXG4vLyAgICAge1wibmFtZVwiIDogJ1VzZXI2Jyxcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkNlwiLFxuLy8gICAgICdVc2VySWQnIDogNn0sXG4vLyAgICAge1wibmFtZVwiIDogJ1VzZXI3Jyxcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkN1wiLFxuLy8gICAgICdVc2VySWQnIDogN31dXG5cblxuXG5cblxuXG5jb25zdCBleGVyY2lzZV9saXN0ID0gW1xuICAgIHsnc3BvcnQnOiAnc3dpbW1pbmcnLCBcbiAgICAnaW1nX3NyYycgOiAnJyxcbiAgICAnZmVhdHVyZXMnOlsnaWRfc2Vzc2lvbicsICdtZXRlcnMnLCAnbWludXRlcycsICdzcHJpbnRzJywgJ2RhdGUnXX0sXG4gICAgeydzcG9ydCc6ICdydW5uaW5nJywgXG4gICAgJ2ltZ19zcmMnOiAnJyxcbiAgICAnZmVhdHVyZXMnOlsnaWRfc2Vzc2lvbicsICdtZXRlcnMnLCAnbWludXRlcycsICdzcHJpbnRzJywgJ2RhdGUnXX0sXG4gICAgeydzcG9ydCc6ICdjeWNsaW5nJywgXG4gICAgJ2ltZ19zcmMnOiAnJyxcbiAgICAnZmVhdHVyZXMnOlsnaWRfc2Vzc2lvbicsICdtZXRlcnMnLCAnbWludXRlcycsICdzcHJpbnRzJywgJ2RhdGUnXX0sXG4gICAgeydzcG9ydCc6ICd3b3Jrb3V0JywgXG4gICAgJ2ltZ19zcmMnOiAnJyxcbiAgICAnZmVhdHVyZXMnOlsnaWRfc2Vzc2lvbicsICdzZXNzaW9uX2RhdGEnLCAnZGF0ZSddfSxcbiAgXVxuXG5jb25zdCB3b3Jrb3V0X2V4ZXJjaXNlX2xpc3QgPSBbXG4nJywgJycsICcnXG5dXG5cblxuXG5jb25zdCBwZXJmX3VzZXIxID0gW3tcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiAxLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnbWV0ZXJzJyA6IDE1MDAsXG4gICAgJ21pbnV0ZXMnIDogNjAsXG4gICAgJ25iX3NwcmludCcgOiAzXG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiAyLFxuICAgICdkYXRlJyA6ICcwMS0wNC0yMDIwJyxcbiAgICAnbWV0ZXJzJyA6IDE2MDAsXG4gICAgJ21pbnV0ZXMnIDogNTEsXG4gICAgJ25iX3NwcmludCcgOiAzXG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiAzLFxuICAgICdkYXRlJyA6IFwiMDItMDQtMjAyMFwiLFxuICAgICdtZXRlcnMnIDogMTUwMCxcbiAgICAnbWludXRlcycgOiA1NCxcbiAgICAnbmJfc3ByaW50JyA6IDRcbn0se1xuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxuICAgICdpZF9zZXNzaW9uJyA6IDQsXG4gICAgJ2RhdGUnIDogJzAzLTA0LTIwMjAnLFxuICAgICdtZXRlcnMnIDogMTcwMCxcbiAgICAnbWludXRlcycgOiA3MCxcbiAgICAnbmJfc3ByaW50JyA6IDNcbn0se1xuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxuICAgICdpZF9zZXNzaW9uJyA6IDUsXG4gICAgJ2RhdGUnIDogXCIwNS0wNC0yMDIwXCIsXG4gICAgJ21ldGVycycgOiAxMjAwLFxuICAgICdtaW51dGVzJyA6IDQwLFxuICAgICduYl9zcHJpbnQnIDogMlxufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogNixcbiAgICAnZGF0ZScgOiBcIjA3LTA0LTIwMjBcIixcbiAgICAnbWV0ZXJzJyA6IDE0MDAsXG4gICAgJ21pbnV0ZXMnIDogNTAsXG4gICAgJ25iX3NwcmludCcgOiAzXG59XG5cbl1cblxuXG5jb25zdCB3b3Jrb3V0X2V4ZXJjaXNlID0gW1xuICAgIHsnbmFtZSc6ICdTcXVhdHMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIHsnbmFtZSc6ICdTdGFpciBDbGltYnMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIHsnbmFtZSc6ICdQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnTGF0ZXJhbCBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0p1bXBpbmcgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdDbG9zZSBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ1JhaXNlZCBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0FiZG9taW5hbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0FiZG9taW5hbHMnfSxcbiAgICB7J25hbWUnOiAnQWJkb21pbmFsIExhdGVyYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0NvcmUgQWJkb21pbmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnU2Vjb25kcyddLCAnZ3JvdXAnIDogJ0FiZG9taW5hbHMnfSxcbiAgICB7J25hbWUnOiAnQmVuY2gnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnV2VpZ2h0J10sICdncm91cCcgOiAnJ30sXG4gICAgeyduYW1lJzogJ0JpY2VwcyBXZWlnaHQnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnV2VpZ2h0J10sJ2dyb3VwJyA6ICcnfSxcbiAgICB7J25hbWUnOiAnUHVsbCBVcHMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnV2VpZ2h0J10sJ2dyb3VwJyA6ICcnfSxcbiAgICAgXG5dXG5cblxuXG5jb25zdCBwZXJmMXdvcmtvdXQgPSB7XG4gICAgJ3Nwb3J0JyA6ICd3b3Jrb3V0JyxcbiAgICAnU3F1YXRzJyA6IHsnU2VyaWVzJyA6IDMsICdOdW1iZXInIDogMzB9LFxuJ1B1c2gtVXBzJyA6IHsnU2VyaWVzJyA6IDMsICdOdW1iZXInIDogMjV9LFxuJ0xhdGVyYWwgUHVzaC1VcHMnIDogeydTZXJpZXMnIDogMSwgJ051bWJlcicgOiAyNX0sXG4nSnVtcGluZyBQdXNoLVVwcycgOiB7J1NlcmllcycgOiAxLCAnTnVtYmVyJyA6IDI1fSxcbidBYmRvbWluYWwnIDogeydTZXJpZXMnIDogMywgJ051bWJlcicgOiAzMH0sXG4nQWJkb21pbmFsIExhdGVyYWwnIDogeydTZXJpZXMnIDogMywgJ051bWJlcicgOiAzMH0sXG4nQmljZXBzIFdlaWdodCc6IHsnU2VyaWVzJyA6IDMsICdXZWlnaHQnIDogMTV9XG59XG5cblxuXG5cblxuY29uc3QgcGVyZl9Vc2VySWQgPSBcbiAgICB7J3N3aW1taW5nJzogW1xuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMSxcbiAgICAgICAgJ21ldGVycyc6IDE1MDAsIFxuICAgICAgICAnbWludXRlcycgOiA1MCxcbiAgICAnc3ByaW50JzogMixcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgICAgICB9LFx0XHRcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDIsXG4gICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4gICAgJ3NwcmludHMnIDogMiwgIFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG4gICAgICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJyA6IDMsXG4gICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4gICAgJ3NwcmludHMnIDogMiwgIFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICAncnVubmluZycgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdtZXRlcnMnIDogNDUwMCxcbiAgICAnZWxldmF0aW9uJyA6IDUwMCxcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdtZXRlcnMnIDogNTUwMCxcbiAgICAnZWxldmF0aW9uJyA6IDIwMCxcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjMsXG4gICAgJ21ldGVycycgOiA2MDAwLFxuICAgICdlbGV2YXRpb24nIDogNDAwLFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgfSxcbl0sXG4gICAgJ3dvcmtvdXQnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX0sXG4gICAgeydpZF9zZXNzaW9uJzozLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19XG5dLFxuJ2N5Y2xpbmcnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnbWV0ZXJzJyA6IDE1MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ21ldGVycycgOiAxNDAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzo0LFxuICAgICdtZXRlcnMnIDogMTgwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICB9XX1cblxuXG5jb25zdCBwZXJmb3JtYW5jZV9kYXRhID0gW1xuICAgIHsndXNlcicgOiAnVXNlcjEnLFxuICAgICdzd2ltbWluZyc6IFtcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDEsXG4gICAgICAgICdtZXRlcnMnOiAxNTAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNTAsXG4gICAgJ3NwcmludCc6IDIsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICAgICAgfSxcdFx0XG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAyLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbicgOiAzLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgJ3J1bm5pbmcnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnbWV0ZXJzJyA6IDQ1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiA1MDAsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnbWV0ZXJzJyA6IDU1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiAyMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcblxuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzozLFxuICAgICdtZXRlcnMnIDogNjAwMCxcbiAgICAnZWxldmF0aW9uJyA6IDQwMCxcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgIH0sXG5dLFxuICAgICd3b3Jrb3V0JyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19LFxuICAgIHsnaWRfc2Vzc2lvbic6MyxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfVxuXSxcbidjeWNsaW5nJyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ21ldGVycycgOiAxNTAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdtZXRlcnMnIDogMTQwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6NCxcbiAgICAnbWV0ZXJzJyA6IDE4MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgfV19LFxuXG5dXG5cbmZ1bmN0aW9uIGdldFBlcmZvcm1hbmNlRGF0YSgpe1xucmV0dXJuIHBlcmZvcm1hbmNlX2RhdGFcbn1cblxuZnVuY3Rpb24gZ2V0RXhlcmNpc2VMaXN0KCl7XG5yZXR1cm4gZXhlcmNpc2VfbGlzdFxufVxuXG4vL2NvbnNvbGUubG9nKGdldFBlcmZvcm1hbmNlRGF0YSgpKVxuLy9jb25zb2xlLmxvZyhnZXRFeGVyY2lzZUxpc3QoKSlcblxuXG5cbmZ1bmN0aW9uIGNoZWNrQWxsSW5wdXRQcm92aWRlZChzcG9ydCwgbGlzdE9mSW5wdXRzKXtcbmV4ZXJjaXNlX2xpc3QgPSBnZXRFeGVyY2lzZUxpc3QoKVxuLy8gRmluZCByaWdodCBzcG9ydCBkYXRhXG5uZWNlc3NhcnlfaW5wdXQgPSBleGVyY2lzZV9saXN0LmZpbHRlcihlbCA9PiBlbFsnc3BvcnQnXSA9PSBzcG9ydClbMF1cbm5lY2Vzc2FyeV9pbnB1dCA9IG5lY2Vzc2FyeV9pbnB1dC5mZWF0dXJlc1xuLy8gRG9udCBuZWVkIHRvIGNoZWNrIGZvciBpZF9zZXNzaW9uXG5pbmRleCA9IG5lY2Vzc2FyeV9pbnB1dC5pbmRleE9mKCdpZF9zZXNzaW9uJylcbm5lY2Vzc2FyeV9pbnB1dC5zcGxpY2UoaW5kZXgsIDEpXG4vL2NvbnNvbGUubG9nKGxpc3RPZklucHV0cylcbmdpdmVucGFyYW0gPSBbXVxubGlzdE9mSW5wdXRzLmZvckVhY2goZWwgPT4gZ2l2ZW5wYXJhbS5wdXNoKGVsLnBhcmFtKSlcbmlmIChuZWNlc3NhcnlfaW5wdXQuZXZlcnkoZWwgPT4gZ2l2ZW5wYXJhbS5pbmNsdWRlcyhlbCkpKXtcbiAgICByZXR1cm4gdHJ1ZVxufVxuZWxzZSByZXR1cm4gbmVjZXNzYXJ5X2lucHV0XG59XG5cbi8qXG5jb25zb2xlLmxvZyhjaGVja0FsbElucHV0UHJvdmlkZWQoJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH1dKSlcblxuY29uc29sZS5sb2coY2hlY2tBbGxJbnB1dFByb3ZpZGVkKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21pbnV0ZXMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnc3ByaW50cycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdkYXRlJywgJ3ZhbHVlJyA6IDR9XSkpIFxuKi9cblxuXG5mdW5jdGlvbiBuZXdTZXNzaW9uKHNwb3J0LCBsaXN0T2ZJbnB1dHMpeyBcbmNoZWNrID0gY2hlY2tBbGxJbnB1dFByb3ZpZGVkKHNwb3J0LCBsaXN0T2ZJbnB1dHMpXG5pZiAoY2hlY2sgPT0gdHJ1ZSl7XG4gICAgZGljdCA9IHt9XG4gICAgbGlzdE9mSW5wdXRzLmZvckVhY2goZWwgPT4gZGljdFtlbC5wYXJhbV0gPSBlbC52YWx1ZSlcbiAgICBwZXJmb3JtYW5jZV9kYXRhW3Nwb3J0XS5wdXNoKGRpY3QpXG4gICAgcmV0dXJuICdBZGRlZCBuZXcgc2Vzc2lvbiBzdWNjZXNzZnVsbHknXG59XG5lbHNle1xuICAgIHJldHVybiBgU29tZSBhcmd1bWVudHMgYXJlIG1pc3NpbmcgdG8gYWRkIG5ldyBzZXNzaW9uIGZvciAke3Nwb3J0fTogJHtjaGVja31gXG59XG59XG5cbi8qXG5jb25zb2xlLmxvZyhuZXdTZXNzaW9uKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKG5ld1Nlc3Npb24oJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWludXRlcycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdzcHJpbnRzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ2RhdGUnLCAndmFsdWUnIDogNH1dKSlcblxuY29uc29sZS5sb2cocGVyZm9ybWFuY2VfZGF0YSlcbiovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEN1c3RvbVNwb3J0KHNwb3J0LCAuLi5hcmdzKXtcbnJldHVybiAneWVhaCBvdXRwdXQnXG59XG5cblxuLypcblxuXG5mdW5jdGlvbiBhZGRDdXN0b21FeGVyY2lzZShzcG9ydCwgLi4uYXJncyl7XG5cbn1cblxuXG4qL1xuXG5cblxuXG5jb25zb2xlLmxvZygnZXZlcnl0aGluZyB3b3JraW5nJylcblxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdChzdHJpbmcpe1xuICAgIHJldHVybiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQge2FkZEN1c3RvbVNwb3J0LCB0ZXN0fSIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRpbXBvcnQgRnJhcHBlQ2hhcnQgZnJvbSAnLi9mcmFwcGUtY2hhcnRzLnN2ZWx0ZSdcblx0aW1wb3J0IENoYXJ0SlMgZnJvbSAnLi9jaGFydC5zdmVsdGUnXG5cdGltcG9ydCB7YWRkQ3VzdG9tU3BvcnQsIHRlc3R9IGZyb20gJy4vc3BvcnQuanMnXG5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgaG9tZS5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbmV4cG9ydCBsZXQgZGF0YV9yYXdcbiAgICAgICAgLy8gU29ydCBsaXN0IG9mIEpzb24gYnkgZGF0ZXMgKGNsb3Nlc3QgZGF0ZXMgdG8gbGFzdCBwb3NpdGlvbnMpXG4gICAgZnVuY3Rpb24gY3VzdG9tX3NvcnQoYSwgYikge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoYS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShiLmRhdGUpLmdldFRpbWUoKTtcbiAgICB9XG5cdGRhdGFfcmF3ID0gZGF0YV9yYXcuc29ydChjdXN0b21fc29ydClcblx0XG5sZXQgbGlzdF9kYXRlID0gW11cbmxldCBsaXN0X3Nwb3J0ID0gW11cbmRhdGFfcmF3LmZvckVhY2goeD0+e1xuXHRsaXN0X2RhdGUucHVzaCh4LmRhdGUpXG5cdGxpc3Rfc3BvcnQucHVzaCh4LnNwb3J0KVxufSlcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U3BvcnQgQXBwPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxkaXYgY2xhc3M9XCJcIj5cblxuXG48ZGl2IGNsYXNzPVwibWItNiBzaGFkb3cgXCI+XG4gICAgPGltZyBzcmM9XCJpbmRleC5qcGdcIiBhbHQ9XCJ3b3JrIGhhcmRlciBzaWduXCIgY2xhc3M9XCJhbnRpYWxpYXNlZCBiZy1ncmF5LTYwMCBvYmplY3QtY292ZXIgaC00OCB3LWZ1bGwgc2hhZG93IHJvdW5kZWQtbWQgb3BhY2l0eS03NVwiPlxuPC9kaXY+XG5cdFxuXHRcblx0XG5cdFxuXHRcblx0XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItOFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXN0XCI+V2VsY29tZSB0byB0aGUgU3BvcnQgUGVyZm9ybWFuY2UgQXNzaXN0YW50ICE8L2gxPlxuICAgIDwvZGl2PlxuXHRcblxuIFxuPGJyIC8+XG5cbjxkaXYgY2xhc3M9XCJmbGV4IFwiPlxuICA8ZGl2IGNsYXNzPVwiIHctMi8zIHAtNFwiPlxuXHQ8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktNDAwIFwiPlxuXHRcblx0PGRpdiBjbGFzcz0nJz5cblx0PGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBXaHkgdXNpbmcgdGhlIFNwb3J0IEFzc2lzdGFudCBBcHA/IFxuICAgIDwvaDE+XG5cdFxuXHQ8cCBjbGFzcz0ncC00Jz5JdCBjYW4gYmUgaGFyZCB0byBtZWFzdXJlIHByb2dyZXNzIGluIHNwb3J0cyBwZXJmb3JtYW5jZS4gPGJyPlxuXHRXZSB0aGluayB0aGlzIGV2b2x1dGlvbiB0b3dhcmRzIGJldHRlciBwZXJmb3JtYW5jZSBpcyB3aGF0IHRydWx5IG1vdGl2YXRlIHVzIHRvIGdpdmUgb3VyIGJlc3QgaW4gc3BvcnRzIHNlc3Npb25zLjxicj5cblx0VGhpcyBhcHBsaWNhdGlvbiBpcyBoZXJlIHRvIGhlbHAgeW91IHRyYWNrIHlvdXIgcHJvZ3Jlc3MgZnJvbSBvbmUgc3BvcnQgc2Vzc2lvbiB0byBhbm90aGVyLlxuXHQ8L3A+XG5cdDwvZGl2PlxuXG48ZGl2IGNsYXNzPSdwdC04Jz5cblx0PGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBIb3cgdG8gdXNlIHRoZSBBcHA/IFxuICAgIDwvaDE+XG5cdDxwIGNsYXNzPSdwLTQnPk9uY2UgeW91IGZpbmlzaGVkIHlvdXIgc3BvcnQgc2Vzc2lvbiwgcmVjb3JkIHlvdXIgcGVyZm9ybWFuY2UgaW4gdGhlICdOZXcgU2Vzc2lvbicgdGFiLiA8YnI+XG5cdEZvciBub3csIHlvdSBjYW4gc2F2ZSBzZXNzaW9ucyBmb3IgcnVubmluZywgY3ljbGluZywgc3dpbW1pbmcgYW5kIHdvcmtpbmcgb3V0LiA8YnI+XG5cdFRoZW4sIGdvIHRvIHRoZSAnUGVyZm9ybWFuY2UnIHRhYiBhbmQgb2JzZXJ2ZSB0aGUgcHJvZ3Jlc3MgeW91IG1hZGUuXG5cdDwvcD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPSdwdC04Jz5cblx0PGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBXaGF0J3MgbmV4dD8gXG4gICAgPC9oMT5cbiAgPGRpdiBjbGFzcz0ncC00Jz5cblx0PHAgPiBUaGlzIGlzIGEgZmlyc3QgdmVyc2lvbiBvZiBvdXIgd2Vic2l0ZSBhbmQgd2UgaW50ZW5kIHRvIGltcHJvdmUgaXQgZnVydGhlciB0byBhbGxvdyBmb3IgbW9yZSBmZWF0dXJlcyBhbmQgYSBiZXR0ZXIgZXhwZXJpZW5jZS48YnI+XG5cdFdlIGFyZSB0aGlua2luZyBvZiBpbXBsZW1lbnRpbmcgb3B0aW9ucyB0bzo8L3A+XG5cdDxsdT5cblx0PGxpPkFkZCBtb3JlIHNwb3J0c1xuXHQ8L2xpPlxuXHQ8bGk+RGVsZXRlIHNlc3Npb25zIHRoYXQgd2VyZSB3cm9uZ2x5IGVudGVyZWRcblx0PC9saT5cblx0PGxpPkFkZCBhbiBhdXRoZW50aWZpY2F0aW9uIHN5c3RlbVxuXHQ8L2xpPlxuXHQ8bGk+SW1wcm92ZSBhbmQgYWRkIG5ldyB2aXN1YWxpemF0aW9ucy5cblx0PC9saT5cblx0PC9sdT5cblx0PHA+V2UgaG9wZSB5b3UgZW5qb3kgb3VyIEFwcCBhbmQgdGhhdCBpdCBoZWxwcyB5b3Ugc3RheWluZyBtb3RpdmF0ZWQhPGJyPlxuXHRGZWVsIGZyZWUgdG8gY29udGFjdCB1cyB0byBnaXZlIHlvdXIgdGhvdWdodHMgYWJvdXQgZmVhdHVyZXMgeW91IHdvdWxkIGxpa2UgdG8gc2VlIGluIHRoZSBBcHAuPC9wPiBcblx0PC9kaXY+XG48L2Rpdj48L2Rpdj5cblx0XG5cblxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMS8zIHAtNFwiPlxuXHQgIFxuXHQ8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwXCI+XG4gICAgICAgIENhbGVuZGFyIG9mIHlvdXIgbGFzdCBzcG9ydCBzZXNzaW9ucyA6IFxuICAgIDwvaDE+PHAgY2xhc3M9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuXHQ8bHU+XG5cdHsjZWFjaCBbMSwyLDMsNCw1XSBhcyBpfVxuXHQ8bGkgY2xhc3M9J3AtMic+e2xpc3RfZGF0ZVtsaXN0X2RhdGUubGVuZ3RoLWldfSAvIHtsaXN0X3Nwb3J0W2xpc3Rfc3BvcnQubGVuZ3RoLWldfTwvbGk+XG5cblx0ey9lYWNofVxuXHQ8L2x1PjwvcD5cbjwvZGl2PlxuXG5cbiAgPC9kaXY+XG5cblxuXG48L2Rpdj5cblxuPCEtLSBcbjxoMiBjbGFzcz0nZm9udC1zZW1pYm9sZCc+VG9kbyBsaXN0IGltcG9ydGFudDo8L2gyPlxuPHA+bGF5b3V0IHdvcmtvdXQ8L3A+XG48cD4gaW50ZWdyZXIgbGF5b3V0IHBlcmZvcm1hbmNlIHZhbGVudGluPC9wPlxuPHA+Q2FsZW5kYXIgb2YgbGFzdCBzZXNzaW9ucyBob21lIHBhZ2U8L3A+XG48cD5Ib21lIHBhZ2UgOiBxdSdlc3QgY2UgcXVlIGxlIHNpdGU/PC9wPlxuPHA+VmVyaWZpZXIgb3JkcmUgZGF0ZSBjb3JyZXNwb25kIGEgb3JkcmUganNvbjwvcD5cbjxwPiBWYXJpYXRpb24gdmVydCByb3VnZSBwYWxlIGRvdXg8L3A+XG48cD5SYWpvdXRlciBpY29ucyBjYWxlbmRyaWVyIHBlcmZvcm1hbmNlPC9wPlxuPGJyLz5cblxuPGgyIGNsYXNzPSdmb250LXNlbWlib2xkJz5Ub2RvbGlzdCBtb2lucyBpbXBvcnRhbnQgOiA8L2gyPlxuPHA+UmFkYXIgY2hhcnQgb2Ygc3BvcnRzPC9wPlxuPHA+T3B0aW9ucyBwb3VyIHN1cHByaW1lciBkZXMgZG9ubsOpZXMgZGUgbGEgYmFzZSBlbiBjYXMgZCdlcnJldXI8L3A+XG48cD5Mb2dpbiAvIGF1dGhlbnRoaWZpY2F0aW9uIGh0dHBzOi8vd3d3Lm5pZWxzdmFuZGVybW9sZW4uY29tL3NpZ251cC1mb3JtLWh0bWw1LXZhbGlkYXRpb24tc3ZlbHRlLzwvcD5cblxuXG48YnIvPlxuXG5cbjxoMiBjbGFzcz0nZm9udC1zZW1pYm9sZCc+RG9uZTogPC9oMj5cbjxwPldvcmsgb3V0IHBlcmZvcm1hbmNlIGV0IG5ldyBzZXNzaW9uPC9wPlxuPHA+RGF0YSBXT3Jrb3V0IDwvcD4gLS0+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFzVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzlDLE9BQU8sYUFBYTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQztBQUNqQztBQUNBO0FBQ08sU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQUksT0FBTyxNQUFNO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs4QkNsUGtCLEdBQVMsa0JBQUMsR0FBUyxJQUFDLE1BQU0sU0FBQyxHQUFDOzs7K0JBQU0sR0FBVSxtQkFBQyxHQUFVLElBQUMsTUFBTSxTQUFDLEdBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRHpFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFBVCxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E5R0QsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRO1dBQ3RELFFBQVE7Ozs7U0FTUCxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTzs7OztPQUh6RCxRQUFRO0NBS2xCLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVc7S0FFakMsU0FBUztLQUNULFVBQVU7O0NBQ2QsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0VBQ2pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7RUFDckIsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
