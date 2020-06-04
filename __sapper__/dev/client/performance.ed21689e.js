import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.0e936bf3.js';
import Box from './Box.6e6e7dbf.js';

/* src/routes/performance.svelte generated by Svelte v3.22.3 */
const file = "src/routes/performance.svelte";

function create_fragment(ctx) {
	let body;
	let div11;
	let div0;
	let h1;
	let t0;
	let t1;
	let div5;
	let div2;
	let p0;
	let t2;
	let t3;
	let div1;
	let a0;
	let img0;
	let img0_src_value;
	let t4;
	let div4;
	let p1;
	let t5;
	let t6;
	let div3;
	let a1;
	let img1;
	let img1_src_value;
	let t7;
	let div10;
	let div7;
	let p2;
	let t8;
	let t9;
	let div6;
	let a2;
	let img2;
	let img2_src_value;
	let t10;
	let div9;
	let p3;
	let t11;
	let t12;
	let div8;
	let a3;
	let img3;
	let img3_src_value;

	const block = {
		c: function create() {
			body = element("body");
			div11 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text("Performance");
			t1 = space();
			div5 = element("div");
			div2 = element("div");
			p0 = element("p");
			t2 = text("Cycling");
			t3 = space();
			div1 = element("div");
			a0 = element("a");
			img0 = element("img");
			t4 = space();
			div4 = element("div");
			p1 = element("p");
			t5 = text("Running");
			t6 = space();
			div3 = element("div");
			a1 = element("a");
			img1 = element("img");
			t7 = space();
			div10 = element("div");
			div7 = element("div");
			p2 = element("p");
			t8 = text("Work-out");
			t9 = space();
			div6 = element("div");
			a2 = element("a");
			img2 = element("img");
			t10 = space();
			div9 = element("div");
			p3 = element("p");
			t11 = text("Swimming");
			t12 = space();
			div8 = element("div");
			a3 = element("a");
			img3 = element("img");
			this.h();
		},
		l: function claim(nodes) {
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			div11 = claim_element(body_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div0 = claim_element(div11_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Performance");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div11_nodes);
			div5 = claim_element(div11_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p0 = claim_element(div2_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Cycling");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a0 = claim_element(div1_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			img0 = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
			a0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			p1 = claim_element(div4_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Running");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			a1 = claim_element(div3_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			img1 = claim_element(a1_nodes, "IMG", { src: true, alt: true, class: true });
			a1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t7 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div7 = claim_element(div10_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			p2 = claim_element(div7_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t8 = claim_text(p2_nodes, "Work-out");
			p2_nodes.forEach(detach_dev);
			t9 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			a2 = claim_element(div6_nodes, "A", { href: true });
			var a2_nodes = children(a2);
			img2 = claim_element(a2_nodes, "IMG", { src: true, alt: true, class: true });
			a2_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t10 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			p3 = claim_element(div9_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "Swimming");
			p3_nodes.forEach(detach_dev);
			t12 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			a3 = claim_element(div8_nodes, "A", { href: true });
			var a3_nodes = children(a3);
			img3 = claim_element(a3_nodes, "IMG", { src: true, alt: true, class: true });
			a3_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "text-4xl text-blue-700 font-semibold tracking-widest");
			add_location(h1, file, 11, 8, 205);
			attr_dev(div0, "class", "flex justify-center mb-8");
			add_location(div0, file, 10, 4, 158);
			attr_dev(p0, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p0, file, 16, 3, 387);
			if (img0.src !== (img0_src_value = "bycicle21.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "cycling");
			attr_dev(img0, "class", "rounded-lg");
			add_location(img0, file, 19, 4, 564);
			attr_dev(a0, "href", "sports/cycling/cycling");
			add_location(a0, file, 18, 4, 526);
			attr_dev(div1, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div1, file, 17, 3, 469);
			attr_dev(div2, "class", "text-center mx-4 md:w-1/2");
			add_location(div2, file, 15, 2, 344);
			attr_dev(p1, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p1, file, 24, 3, 700);
			if (img1.src !== (img1_src_value = "running1.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "running");
			attr_dev(img1, "class", "rounded-lg");
			add_location(img1, file, 27, 4, 877);
			attr_dev(a1, "href", "sports/running/running");
			add_location(a1, file, 26, 4, 839);
			attr_dev(div3, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div3, file, 25, 3, 782);
			attr_dev(div4, "class", " text-center mx-4  md:w-1/2 ");
			add_location(div4, file, 23, 2, 654);
			attr_dev(div5, "class", "md:flex justify-center mb-8");
			add_location(div5, file, 14, 1, 300);
			attr_dev(p2, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p2, file, 34, 3, 1057);
			if (img2.src !== (img2_src_value = "workout3.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "workout");
			attr_dev(img2, "class", "rounded-lg");
			add_location(img2, file, 37, 4, 1235);
			attr_dev(a2, "href", "sports/workout/workout");
			add_location(a2, file, 36, 4, 1197);
			attr_dev(div6, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div6, file, 35, 3, 1140);
			attr_dev(div7, "class", " text-center mx-4 md:w-1/2");
			add_location(div7, file, 33, 2, 1013);
			attr_dev(p3, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p3, file, 42, 3, 1369);
			if (img3.src !== (img3_src_value = "swimming2.jpg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", "swimming");
			attr_dev(img3, "class", "rounded-lg");
			add_location(img3, file, 45, 4, 1549);
			attr_dev(a3, "href", "sports/swimming/swimming");
			add_location(a3, file, 44, 4, 1509);
			attr_dev(div8, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div8, file, 43, 3, 1452);
			attr_dev(div9, "class", " text-center mx-4  md:w-1/2 ");
			add_location(div9, file, 41, 2, 1323);
			attr_dev(div10, "class", "md:flex justify-center");
			add_location(div10, file, 32, 1, 974);
			attr_dev(div11, "class", "bg-blue-100 max-w-4xl justify-center");
			add_location(div11, file, 9, 1, 103);
			attr_dev(body, "class", "bg-gray-100 ");
			add_location(body, file, 8, 0, 74);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, div11);
			append_dev(div11, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div11, t1);
			append_dev(div11, div5);
			append_dev(div5, div2);
			append_dev(div2, p0);
			append_dev(p0, t2);
			append_dev(div2, t3);
			append_dev(div2, div1);
			append_dev(div1, a0);
			append_dev(a0, img0);
			append_dev(div5, t4);
			append_dev(div5, div4);
			append_dev(div4, p1);
			append_dev(p1, t5);
			append_dev(div4, t6);
			append_dev(div4, div3);
			append_dev(div3, a1);
			append_dev(a1, img1);
			append_dev(div11, t7);
			append_dev(div11, div10);
			append_dev(div10, div7);
			append_dev(div7, p2);
			append_dev(p2, t8);
			append_dev(div7, t9);
			append_dev(div7, div6);
			append_dev(div6, a2);
			append_dev(a2, img2);
			append_dev(div10, t10);
			append_dev(div10, div9);
			append_dev(div9, p3);
			append_dev(p3, t11);
			append_dev(div9, t12);
			append_dev(div9, div8);
			append_dev(div8, a3);
			append_dev(a3, img3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(body);
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

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Performance> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Performance", $$slots, []);
	$$self.$capture_state = () => ({ Box });
	return [];
}

class Performance extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Performance",
			options,
			id: create_fragment.name
		});
	}
}

export default Performance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UuZWQyMTY4OWUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
