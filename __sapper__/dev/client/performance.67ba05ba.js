import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, e as element, b as space, t as text, c as claim_element, f as children, g as detach_dev, h as claim_space, j as claim_text, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as noop } from './client.9962ea37.js';
import Box from './Box.e4ef3a82.js';

/* src/routes/performance.svelte generated by Svelte v3.22.3 */
const file = "src/routes/performance.svelte";

function create_fragment(ctx) {
	let body;
	let div0;
	let img0;
	let img0_src_value;
	let t0;
	let div14;
	let div13;
	let div12;
	let div1;
	let h1;
	let t1;
	let t2;
	let div6;
	let div3;
	let p0;
	let t3;
	let t4;
	let div2;
	let a0;
	let img1;
	let img1_src_value;
	let t5;
	let div5;
	let p1;
	let t6;
	let t7;
	let div4;
	let a1;
	let img2;
	let img2_src_value;
	let t8;
	let div11;
	let div8;
	let p2;
	let t9;
	let t10;
	let div7;
	let a2;
	let img3;
	let img3_src_value;
	let t11;
	let div10;
	let p3;
	let t12;
	let t13;
	let div9;
	let a3;
	let img4;
	let img4_src_value;

	const block = {
		c: function create() {
			body = element("body");
			div0 = element("div");
			img0 = element("img");
			t0 = space();
			div14 = element("div");
			div13 = element("div");
			div12 = element("div");
			div1 = element("div");
			h1 = element("h1");
			t1 = text("See your Performance");
			t2 = space();
			div6 = element("div");
			div3 = element("div");
			p0 = element("p");
			t3 = text("Cycling");
			t4 = space();
			div2 = element("div");
			a0 = element("a");
			img1 = element("img");
			t5 = space();
			div5 = element("div");
			p1 = element("p");
			t6 = text("Running");
			t7 = space();
			div4 = element("div");
			a1 = element("a");
			img2 = element("img");
			t8 = space();
			div11 = element("div");
			div8 = element("div");
			p2 = element("p");
			t9 = text("Work-out");
			t10 = space();
			div7 = element("div");
			a2 = element("a");
			img3 = element("img");
			t11 = space();
			div10 = element("div");
			p3 = element("p");
			t12 = text("Swimming");
			t13 = space();
			div9 = element("div");
			a3 = element("a");
			img4 = element("img");
			this.h();
		},
		l: function claim(nodes) {
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			div0 = claim_element(body_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(body_nodes);
			div14 = claim_element(body_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div1 = claim_element(div12_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "See your Performance");
			h1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div12_nodes);
			div6 = claim_element(div12_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			p0 = claim_element(div3_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Cycling");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			a0 = claim_element(div2_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			img1 = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
			a0_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t5 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p1 = claim_element(div5_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "Running");
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			a1 = claim_element(div4_nodes, "A", { href: true });
			var a1_nodes = children(a1);
			img2 = claim_element(a1_nodes, "IMG", { src: true, alt: true, class: true });
			a1_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t8 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div8 = claim_element(div11_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			p2 = claim_element(div8_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Work-out");
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			a2 = claim_element(div7_nodes, "A", { href: true });
			var a2_nodes = children(a2);
			img3 = claim_element(a2_nodes, "IMG", { src: true, alt: true, class: true });
			a2_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t11 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			p3 = claim_element(div10_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t12 = claim_text(p3_nodes, "Swimming");
			p3_nodes.forEach(detach_dev);
			t13 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			a3 = claim_element(div9_nodes, "A", { href: true });
			var a3_nodes = children(a3);
			img4 = claim_element(a3_nodes, "IMG", { src: true, alt: true, class: true });
			a3_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = "performance.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "work harder sign");
			attr_dev(img0, "class", "antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md ");
			add_location(img0, file, 13, 4, 124);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 12, 0, 93);
			attr_dev(h1, "class", "text-4xl text-blue-700 font-semibold tracking-widest");
			add_location(h1, file, 27, 8, 372);
			attr_dev(div1, "class", "flex justify-center mb-8");
			add_location(div1, file, 26, 4, 325);
			attr_dev(p0, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p0, file, 32, 3, 563);
			if (img1.src !== (img1_src_value = "bycicle21.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "cycling");
			attr_dev(img1, "class", "rounded-lg");
			add_location(img1, file, 35, 4, 740);
			attr_dev(a0, "href", "sports/cycling/cycling");
			add_location(a0, file, 34, 4, 702);
			attr_dev(div2, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div2, file, 33, 3, 645);
			attr_dev(div3, "class", "text-center mx-4 md:w-1/2");
			add_location(div3, file, 31, 2, 520);
			attr_dev(p1, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p1, file, 40, 3, 876);
			if (img2.src !== (img2_src_value = "running1.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "running");
			attr_dev(img2, "class", "rounded-lg");
			add_location(img2, file, 43, 4, 1053);
			attr_dev(a1, "href", "sports/running/running");
			add_location(a1, file, 42, 4, 1015);
			attr_dev(div4, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div4, file, 41, 3, 958);
			attr_dev(div5, "class", " text-center mx-4  md:w-1/2 ");
			add_location(div5, file, 39, 2, 830);
			attr_dev(div6, "class", "md:flex justify-center mb-8");
			add_location(div6, file, 30, 1, 476);
			attr_dev(p2, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p2, file, 50, 3, 1233);
			if (img3.src !== (img3_src_value = "workout3.jpg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", "workout");
			attr_dev(img3, "class", "rounded-lg");
			add_location(img3, file, 53, 4, 1411);
			attr_dev(a2, "href", "sports/workout/workout");
			add_location(a2, file, 52, 4, 1373);
			attr_dev(div7, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div7, file, 51, 3, 1316);
			attr_dev(div8, "class", " text-center mx-4 md:w-1/2");
			add_location(div8, file, 49, 2, 1189);
			attr_dev(p3, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p3, file, 58, 3, 1545);
			if (img4.src !== (img4_src_value = "swimming2.jpg")) attr_dev(img4, "src", img4_src_value);
			attr_dev(img4, "alt", "swimming");
			attr_dev(img4, "class", "rounded-lg");
			add_location(img4, file, 61, 4, 1725);
			attr_dev(a3, "href", "sports/swimming/swimming");
			add_location(a3, file, 60, 4, 1685);
			attr_dev(div9, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div9, file, 59, 3, 1628);
			attr_dev(div10, "class", " text-center mx-4  md:w-1/2 ");
			add_location(div10, file, 57, 2, 1499);
			attr_dev(div11, "class", "md:flex justify-center");
			add_location(div11, file, 48, 1, 1150);
			attr_dev(div12, "class", "");
			add_location(div12, file, 22, 1, 299);
			attr_dev(div13, "class", "");
			add_location(div13, file, 20, 1, 281);
			attr_dev(div14, "class", "p-8");
			add_location(div14, file, 16, 0, 259);
			attr_dev(body, "class", "");
			add_location(body, file, 8, 0, 74);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, div0);
			append_dev(div0, img0);
			append_dev(body, t0);
			append_dev(body, div14);
			append_dev(div14, div13);
			append_dev(div13, div12);
			append_dev(div12, div1);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div12, t2);
			append_dev(div12, div6);
			append_dev(div6, div3);
			append_dev(div3, p0);
			append_dev(p0, t3);
			append_dev(div3, t4);
			append_dev(div3, div2);
			append_dev(div2, a0);
			append_dev(a0, img1);
			append_dev(div6, t5);
			append_dev(div6, div5);
			append_dev(div5, p1);
			append_dev(p1, t6);
			append_dev(div5, t7);
			append_dev(div5, div4);
			append_dev(div4, a1);
			append_dev(a1, img2);
			append_dev(div12, t8);
			append_dev(div12, div11);
			append_dev(div11, div8);
			append_dev(div8, p2);
			append_dev(p2, t9);
			append_dev(div8, t10);
			append_dev(div8, div7);
			append_dev(div7, a2);
			append_dev(a2, img3);
			append_dev(div11, t11);
			append_dev(div11, div10);
			append_dev(div10, p3);
			append_dev(p3, t12);
			append_dev(div10, t13);
			append_dev(div10, div9);
			append_dev(div9, a3);
			append_dev(a3, img4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UuNjdiYTA1YmEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
