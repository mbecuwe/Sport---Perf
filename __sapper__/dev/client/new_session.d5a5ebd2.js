import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, e as element, m as space, t as text, c as claim_element, b as children, g as detach_dev, o as claim_space, f as claim_text, h as attr_dev, j as add_location, k as insert_dev, l as append_dev, n as noop } from './client.987d78cb.js';
import Box from './Box.2bb782d9.js';

/* src/routes/new_session.svelte generated by Svelte v3.22.3 */
const file = "src/routes/new_session.svelte";

function create_fragment(ctx) {
	let body;
	let div14;
	let div0;
	let img0;
	let img0_src_value;
	let t0;
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
			div14 = element("div");
			div0 = element("div");
			img0 = element("img");
			t0 = space();
			div13 = element("div");
			div12 = element("div");
			div1 = element("div");
			h1 = element("h1");
			t1 = text("Add a new Session");
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
			div14 = claim_element(body_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div0 = claim_element(div14_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div14_nodes);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div1 = claim_element(div12_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Add a new Session");
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
			if (img0.src !== (img0_src_value = "workout_3.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "new_session");
			attr_dev(img0, "class", "antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md ");
			add_location(img0, file, 12, 4, 148);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 11, 0, 117);
			attr_dev(h1, "class", "text-4xl text-blue-700 font-semibold tracking-widest");
			add_location(h1, file, 21, 8, 370);
			attr_dev(div1, "class", "flex justify-center mb-8");
			add_location(div1, file, 20, 4, 323);
			attr_dev(p0, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p0, file, 26, 3, 558);
			if (img1.src !== (img1_src_value = "bycicle21.jpg")) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "cycling");
			attr_dev(img1, "class", "rounded-lg");
			add_location(img1, file, 29, 4, 745);
			attr_dev(a0, "href", "new_sessions/cycling/new_cycling");
			add_location(a0, file, 28, 4, 697);
			attr_dev(div2, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div2, file, 27, 3, 640);
			attr_dev(div3, "class", "text-center mx-4 md:w-1/2");
			add_location(div3, file, 25, 2, 515);
			attr_dev(p1, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p1, file, 34, 3, 881);
			if (img2.src !== (img2_src_value = "running1.jpg")) attr_dev(img2, "src", img2_src_value);
			attr_dev(img2, "alt", "running");
			attr_dev(img2, "class", "rounded-lg");
			add_location(img2, file, 37, 4, 1068);
			attr_dev(a1, "href", "new_sessions/running/new_running");
			add_location(a1, file, 36, 4, 1020);
			attr_dev(div4, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div4, file, 35, 3, 963);
			attr_dev(div5, "class", " text-center mx-4  md:w-1/2 ");
			add_location(div5, file, 33, 2, 835);
			attr_dev(div6, "class", "md:flex justify-center mb-8");
			add_location(div6, file, 24, 1, 471);
			attr_dev(p2, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p2, file, 44, 3, 1248);
			if (img3.src !== (img3_src_value = "workout3.jpg")) attr_dev(img3, "src", img3_src_value);
			attr_dev(img3, "alt", "workout");
			attr_dev(img3, "class", "rounded-lg");
			add_location(img3, file, 47, 4, 1436);
			attr_dev(a2, "href", "new_sessions/workout/new_workout");
			add_location(a2, file, 46, 4, 1388);
			attr_dev(div7, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div7, file, 45, 3, 1331);
			attr_dev(div8, "class", " text-center mx-4 md:w-1/2");
			add_location(div8, file, 43, 2, 1204);
			attr_dev(p3, "class", "font-semibold tracking-wider text-xl text-blue-700 pb-6");
			add_location(p3, file, 52, 3, 1570);
			if (img4.src !== (img4_src_value = "swimming2.jpg")) attr_dev(img4, "src", img4_src_value);
			attr_dev(img4, "alt", "swimming");
			attr_dev(img4, "class", "rounded-lg");
			add_location(img4, file, 55, 4, 1760);
			attr_dev(a3, "href", "new_sessions/swimming/new_swimming");
			add_location(a3, file, 54, 4, 1710);
			attr_dev(div9, "class", "hover:shadow-2xl hover:border-blue-800");
			add_location(div9, file, 53, 3, 1653);
			attr_dev(div10, "class", " text-center mx-4  md:w-1/2 ");
			add_location(div10, file, 51, 2, 1524);
			attr_dev(div11, "class", "md:flex justify-center");
			add_location(div11, file, 42, 1, 1165);
			attr_dev(div12, "class", "");
			add_location(div12, file, 16, 1, 297);
			attr_dev(div13, "class", "p-8");
			add_location(div13, file, 14, 1, 276);
			attr_dev(div14, "class", "bg-blue-100");
			add_location(div14, file, 10, 0, 91);
			attr_dev(body, "class", "");
			add_location(body, file, 8, 0, 74);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, div14);
			append_dev(div14, div0);
			append_dev(div0, img0);
			append_dev(div14, t0);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<New_session> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("New_session", $$slots, []);
	$$self.$capture_state = () => ({ Box });
	return [];
}

class New_session extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "New_session",
			options,
			id: create_fragment.name
		});
	}
}

export default New_session;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X3Nlc3Npb24uZDVhNWViZDIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
