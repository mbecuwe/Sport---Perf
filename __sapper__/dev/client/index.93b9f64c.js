import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_each_argument, a as validate_slots, e as element, t as text, c as claim_element, b as children, f as claim_text, g as detach_dev, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, n as noop, m as space, q as query_selector_all, o as claim_space, p as destroy_each } from './client.81ee4d1b.js';

/* src/routes/index.svelte generated by Svelte v3.22.3 */

const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (112:1) {#each [1,2,3,4,5] as i}
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
			add_location(li, file, 112, 1, 2784);
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
		source: "(112:1) {#each [1,2,3,4,5] as i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div11;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let div10;
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
			div11 = element("div");
			div0 = element("div");
			img = element("img");
			t1 = space();
			div10 = element("div");
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
			div11 = claim_element(nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div0 = claim_element(div11_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
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
			div11_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sport App";
			if (img.src !== (img_src_value = "index.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "work harder sign");
			attr_dev(img, "class", "antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md");
			add_location(img, file, 39, 4, 693);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 38, 0, 662);
			attr_dev(h10, "class", "text-4xl text-center text-blue-700 font-semibold tracking-widest");
			add_location(h10, file, 47, 8, 898);
			attr_dev(div1, "class", "flex justify-center mb-8");
			add_location(div1, file, 46, 4, 851);
			add_location(br0, file, 52, 0, 1041);
			attr_dev(h11, "class", "text-blue-800");
			add_location(h11, file, 59, 1, 1156);
			add_location(br1, file, 63, 74, 1313);
			add_location(br2, file, 64, 114, 1432);
			attr_dev(p0, "class", "p-4");
			add_location(p0, file, 63, 1, 1240);
			attr_dev(div2, "class", "");
			add_location(div2, file, 58, 1, 1140);
			attr_dev(h12, "class", "text-blue-800");
			add_location(h12, file, 70, 1, 1565);
			add_location(br3, file, 73, 104, 1735);
			add_location(br4, file, 74, 80, 1820);
			attr_dev(p1, "class", "p-4");
			add_location(p1, file, 73, 1, 1632);
			attr_dev(div3, "class", "pt-8");
			add_location(div3, file, 69, 0, 1545);
			attr_dev(h13, "class", "text-blue-800");
			add_location(h13, file, 80, 1, 1929);
			add_location(br5, file, 84, 132, 2140);
			add_location(p2, file, 84, 1, 2009);
			add_location(li0, file, 87, 1, 2201);
			add_location(li1, file, 89, 1, 2229);
			add_location(li2, file, 91, 1, 2283);
			add_location(li3, file, 93, 1, 2326);
			add_location(lu0, file, 86, 1, 2195);
			add_location(br6, file, 96, 70, 2450);
			add_location(p3, file, 96, 1, 2381);
			attr_dev(div4, "class", "p-4");
			add_location(div4, file, 83, 2, 1990);
			attr_dev(div5, "class", "pt-8");
			add_location(div5, file, 79, 0, 1909);
			attr_dev(div6, "class", "divide-y divide-gray-400 ");
			add_location(div6, file, 56, 1, 1097);
			attr_dev(div7, "class", " w-2/3 p-4");
			add_location(div7, file, 55, 2, 1071);
			attr_dev(h14, "class", "text-blue-800");
			add_location(h14, file, 107, 1, 2635);
			add_location(lu1, file, 110, 1, 2752);
			attr_dev(p4, "class", "flex justify-center");
			add_location(p4, file, 109, 9, 2719);
			attr_dev(div8, "class", "flex-initial w-1/3 p-4");
			add_location(div8, file, 105, 2, 2593);
			attr_dev(div9, "class", "flex ");
			add_location(div9, file, 54, 0, 1049);
			attr_dev(div10, "class", "p-8");
			add_location(div10, file, 44, 1, 827);
			attr_dev(div11, "class", "");
			add_location(div11, file, 35, 0, 645);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div11, anchor);
			append_dev(div11, div0);
			append_dev(div0, img);
			append_dev(div11, t1);
			append_dev(div11, div10);
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
			if (detaching) detach_dev(div11);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTNiOWY2NGMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG5cdFx0cmV0dXJuIHRoaXMuZmV0Y2goYGhvbWUuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihkYXRhX3JhdyA9PiB7XG5cdFx0XHRyZXR1cm4geyBkYXRhX3JhdyB9O1xuXHRcdH0pO1xuXHR9XHRcblxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5leHBvcnQgbGV0IGRhdGFfcmF3XG4gICAgICAgIC8vIFNvcnQgbGlzdCBvZiBKc29uIGJ5IGRhdGVzIChjbG9zZXN0IGRhdGVzIHRvIGxhc3QgcG9zaXRpb25zKVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9zb3J0KGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoYi5kYXRlKS5nZXRUaW1lKCk7XG4gICAgfVxuXHRkYXRhX3JhdyA9IGRhdGFfcmF3LnNvcnQoY3VzdG9tX3NvcnQpXG5cdFxubGV0IGxpc3RfZGF0ZSA9IFtdXG5sZXQgbGlzdF9zcG9ydCA9IFtdXG5kYXRhX3Jhdy5mb3JFYWNoKHg9Pntcblx0bGlzdF9kYXRlLnB1c2goeC5kYXRlKVxuXHRsaXN0X3Nwb3J0LnB1c2goeC5zcG9ydClcbn0pXG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNwb3J0IEFwcDwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiXCI+XG5cblxuPGRpdiBjbGFzcz1cIm1iLTYgc2hhZG93IFwiPlxuICAgIDxpbWcgc3JjPVwiaW5kZXguanBnXCIgYWx0PVwid29yayBoYXJkZXIgc2lnblwiIGNsYXNzPVwiYW50aWFsaWFzZWQgYmctZ3JheS02MDAgb2JqZWN0LWNvdmVyIGgtNDggdy1mdWxsIHNoYWRvdyByb3VuZGVkLW1kXCI+XG48L2Rpdj5cblx0XG5cdFxuXHRcblx0PGRpdiBjbGFzcz0ncC04Jz5cblx0XG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItOFwiPlxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciB0ZXh0LWJsdWUtNzAwIGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXN0XCI+V2VsY29tZSB0byB0aGUgU3BvcnQgUGVyZm9ybWFuY2UgQXNzaXN0YW50ICE8L2gxPlxuICAgIDwvZGl2PlxuXHRcblxuIFxuPGJyIC8+XG5cbjxkaXYgY2xhc3M9XCJmbGV4IFwiPlxuICA8ZGl2IGNsYXNzPVwiIHctMi8zIHAtNFwiPlxuXHQ8ZGl2IGNsYXNzPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktNDAwIFwiPlxuXHRcblx0PGRpdiBjbGFzcz0nJz5cblx0PGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBXaHkgdXNpbmcgdGhlIFNwb3J0IEFzc2lzdGFudCBBcHA/IFxuICAgIDwvaDE+XG5cdFxuXHQ8cCBjbGFzcz0ncC00Jz5JdCBjYW4gYmUgaGFyZCB0byBtZWFzdXJlIHByb2dyZXNzIGluIHNwb3J0cyBwZXJmb3JtYW5jZS4gPGJyPlxuXHRXZSB0aGluayB0aGlzIGV2b2x1dGlvbiB0b3dhcmRzIGJldHRlciBwZXJmb3JtYW5jZSBpcyB3aGF0IHRydWx5IG1vdGl2YXRlIHVzIHRvIGdpdmUgb3VyIGJlc3QgaW4gc3BvcnRzIHNlc3Npb25zLjxicj5cblx0VGhpcyBhcHBsaWNhdGlvbiBpcyBoZXJlIHRvIGhlbHAgeW91IHRyYWNrIHlvdXIgcHJvZ3Jlc3MgZnJvbSBvbmUgc3BvcnQgc2Vzc2lvbiB0byBhbm90aGVyLlxuXHQ8L3A+XG5cdDwvZGl2PlxuXG48ZGl2IGNsYXNzPSdwdC04Jz5cblx0PGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBIb3cgdG8gdXNlIHRoZSBBcHA/IFxuICAgIDwvaDE+XG5cdDxwIGNsYXNzPSdwLTQnPk9uY2UgeW91IGZpbmlzaGVkIHlvdXIgc3BvcnQgc2Vzc2lvbiwgcmVjb3JkIHlvdXIgcGVyZm9ybWFuY2UgaW4gdGhlICdOZXcgU2Vzc2lvbicgdGFiLiA8YnI+XG5cdEZvciBub3csIHlvdSBjYW4gc2F2ZSBzZXNzaW9ucyBmb3IgcnVubmluZywgY3ljbGluZywgc3dpbW1pbmcgYW5kIHdvcmtpbmcgb3V0LiA8YnI+XG5cdFRoZW4sIGdvIHRvIHRoZSAnUGVyZm9ybWFuY2UnIHRhYiBhbmQgb2JzZXJ2ZSB0aGUgcHJvZ3Jlc3MgeW91IG1hZGUuXG5cdDwvcD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPSdwdC04Jz5cblx0PGgxIGNsYXNzPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICBXaGF0J3MgbmV4dD8gXG4gICAgPC9oMT5cbiAgPGRpdiBjbGFzcz0ncC00Jz5cblx0PHAgPiBUaGlzIGlzIGEgZmlyc3QgdmVyc2lvbiBvZiBvdXIgd2Vic2l0ZSBhbmQgd2UgaW50ZW5kIHRvIGltcHJvdmUgaXQgZnVydGhlciB0byBhbGxvdyBmb3IgbW9yZSBmZWF0dXJlcyBhbmQgYSBiZXR0ZXIgZXhwZXJpZW5jZS48YnI+XG5cdFdlIGFyZSB0aGlua2luZyBvZiBpbXBsZW1lbnRpbmcgb3B0aW9ucyB0bzo8L3A+XG5cdDxsdT5cblx0PGxpPkFkZCBtb3JlIHNwb3J0c1xuXHQ8L2xpPlxuXHQ8bGk+RGVsZXRlIHNlc3Npb25zIHRoYXQgd2VyZSB3cm9uZ2x5IGVudGVyZWRcblx0PC9saT5cblx0PGxpPkFkZCBhbiBhdXRoZW50aWZpY2F0aW9uIHN5c3RlbVxuXHQ8L2xpPlxuXHQ8bGk+SW1wcm92ZSBhbmQgYWRkIG5ldyB2aXN1YWxpemF0aW9ucy5cblx0PC9saT5cblx0PC9sdT5cblx0PHA+V2UgaG9wZSB5b3UgZW5qb3kgb3VyIEFwcCBhbmQgdGhhdCBpdCBoZWxwcyB5b3Ugc3RheWluZyBtb3RpdmF0ZWQhPGJyPlxuXHRGZWVsIGZyZWUgdG8gY29udGFjdCB1cyB0byBnaXZlIHlvdXIgdGhvdWdodHMgYWJvdXQgZmVhdHVyZXMgeW91IHdvdWxkIGxpa2UgdG8gc2VlIGluIHRoZSBBcHAuPC9wPiBcblx0PC9kaXY+XG48L2Rpdj48L2Rpdj5cblx0XG5cblxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMS8zIHAtNFwiPlxuXHQgIFxuXHQ8aDEgY2xhc3M9XCJ0ZXh0LWJsdWUtODAwXCI+XG4gICAgICAgIENhbGVuZGFyIG9mIHlvdXIgbGFzdCBzcG9ydCBzZXNzaW9ucyA6IFxuICAgIDwvaDE+PHAgY2xhc3M9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuXHQ8bHU+XG5cdHsjZWFjaCBbMSwyLDMsNCw1XSBhcyBpfVxuXHQ8bGkgY2xhc3M9J3AtMic+e2xpc3RfZGF0ZVtsaXN0X2RhdGUubGVuZ3RoLWldfSAvIHtsaXN0X3Nwb3J0W2xpc3Rfc3BvcnQubGVuZ3RoLWldfTwvbGk+XG5cblx0ey9lYWNofVxuXHQ8L2x1PjwvcD5cbjwvZGl2PlxuXG5cbiAgPC9kaXY+XG5cbjwvZGl2PlxuXHRcblxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzhCQWdIa0IsR0FBUyxrQkFBQyxHQUFTLElBQUMsTUFBTSxTQUFDLEdBQUM7OzsrQkFBTSxHQUFVLG1CQUFDLEdBQVUsSUFBQyxNQUFNLFNBQUMsR0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBRHpFLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBQVQsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBN0dELE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSyxjQUFjLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUTtXQUN0RCxRQUFROzs7O1NBU1AsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU87Ozs7T0FIekQsUUFBUTtDQUtsQixRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXO0tBRWpDLFNBQVM7S0FDVCxVQUFVOztDQUNkLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNqQixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO0VBQ3JCLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
