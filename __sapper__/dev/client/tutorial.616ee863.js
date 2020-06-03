import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.eb23d396.js';

/* src\routes\tutorial.svelte generated by Svelte v3.22.3 */

const file = "src\\routes\\tutorial.svelte";

function create_fragment(ctx) {
	let div6;
	let div0;
	let h10;
	let t0;
	let t1;
	let div5;
	let div2;
	let p0;
	let t2;
	let t3;
	let div1;
	let iframe0;
	let iframe0_src_value;
	let t4;
	let div4;
	let p1;
	let t5;
	let t6;
	let div3;
	let iframe1;
	let iframe1_src_value;
	let t7;
	let div13;
	let div7;
	let h11;
	let t8;
	let t9;
	let div12;
	let div9;
	let p2;
	let t10;
	let t11;
	let div8;
	let iframe2;
	let iframe2_src_value;
	let t12;
	let div11;
	let p3;
	let t13;
	let t14;
	let div10;
	let iframe3;
	let iframe3_src_value;

	const block = {
		c: function create() {
			div6 = element("div");
			div0 = element("div");
			h10 = element("h1");
			t0 = text("Tutorial");
			t1 = space();
			div5 = element("div");
			div2 = element("div");
			p0 = element("p");
			t2 = text("Where it all starts");
			t3 = space();
			div1 = element("div");
			iframe0 = element("iframe");
			t4 = space();
			div4 = element("div");
			p1 = element("p");
			t5 = text("How to use the application");
			t6 = space();
			div3 = element("div");
			iframe1 = element("iframe");
			t7 = space();
			div13 = element("div");
			div7 = element("div");
			h11 = element("h1");
			t8 = text("Tutorial");
			t9 = space();
			div12 = element("div");
			div9 = element("div");
			p2 = element("p");
			t10 = text("Where it all starts");
			t11 = space();
			div8 = element("div");
			iframe2 = element("iframe");
			t12 = space();
			div11 = element("div");
			p3 = element("p");
			t13 = text("How to use the application");
			t14 = space();
			div10 = element("div");
			iframe3 = element("iframe");
			this.h();
		},
		l: function claim(nodes) {
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h10 = claim_element(div0_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t0 = claim_text(h10_nodes, "Tutorial");
			h10_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p0 = claim_element(div2_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Where it all starts");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			iframe0 = claim_element(div1_nodes, "IFRAME", {
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true,
				controls: true,
				autoplay: true
			});

			children(iframe0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			p1 = claim_element(div4_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "How to use the application");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);

			iframe1 = claim_element(div3_nodes, "IFRAME", {
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true,
				controls: true,
				autoplay: true
			});

			children(iframe1).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			div13 = claim_element(nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div7 = claim_element(div13_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			h11 = claim_element(div7_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t8 = claim_text(h11_nodes, "Tutorial");
			h11_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			t9 = claim_space(div13_nodes);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			div9 = claim_element(div12_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			p2 = claim_element(div9_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t10 = claim_text(p2_nodes, "Where it all starts");
			p2_nodes.forEach(detach_dev);
			t11 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);

			iframe2 = claim_element(div8_nodes, "IFRAME", {
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true,
				controls: true,
				autoplay: true
			});

			children(iframe2).forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t12 = claim_space(div12_nodes);
			div11 = claim_element(div12_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			p3 = claim_element(div11_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "How to use the application");
			p3_nodes.forEach(detach_dev);
			t14 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);

			iframe3 = claim_element(div10_nodes, "IFRAME", {
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true,
				controls: true,
				autoplay: true
			});

			children(iframe3).forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h10, "class", "font-bold text-4xl text-blue-800");
			add_location(h10, file, 5, 8, 72);
			attr_dev(div0, "class", "flex justify-center");
			add_location(div0, file, 4, 4, 29);
			attr_dev(p0, "class", "flex justify-center mb-6 text-gray-500 text-xl");
			add_location(p0, file, 9, 12, 259);
			attr_dev(iframe0, "width", "560");
			attr_dev(iframe0, "height", "315");
			if (iframe0.src !== (iframe0_src_value = "https://www.youtube.com/embed/6uG9lsx-EMo")) attr_dev(iframe0, "src", iframe0_src_value);
			attr_dev(iframe0, "frameborder", "0");
			attr_dev(iframe0, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe0.allowFullscreen = true;
			attr_dev(iframe0, "controls", "");
			attr_dev(iframe0, "autoplay", "");
			add_location(iframe0, file, 11, 16, 419);
			attr_dev(div1, "class", "flex justify-center pb-6 mx-auto");
			add_location(div1, file, 10, 12, 354);
			attr_dev(div2, "class", "container mx-auto py-16");
			add_location(div2, file, 8, 8, 207);
			attr_dev(p1, "class", "flex justify-center mb-6 text-gray-500 text-xl");
			add_location(p1, file, 15, 12, 740);
			attr_dev(iframe1, "width", "560");
			attr_dev(iframe1, "height", "315");
			if (iframe1.src !== (iframe1_src_value = "https://www.youtube.com/embed/6uG9lsx-EMo")) attr_dev(iframe1, "src", iframe1_src_value);
			attr_dev(iframe1, "frameborder", "0");
			attr_dev(iframe1, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe1.allowFullscreen = true;
			attr_dev(iframe1, "controls", "");
			attr_dev(iframe1, "autoplay", "");
			add_location(iframe1, file, 17, 16, 907);
			attr_dev(div3, "class", "flex justify-center pb-6 mx-auto");
			add_location(div3, file, 16, 12, 842);
			attr_dev(div4, "class", "container mx-auto py-16");
			add_location(div4, file, 14, 8, 688);
			attr_dev(div5, "class", " mt-12 items-center justify-center");
			add_location(div5, file, 7, 4, 148);
			attr_dev(div6, "class", "m-8");
			add_location(div6, file, 3, 0, 6);
			attr_dev(h11, "class", "font-bold text-4xl text-blue-800");
			add_location(h11, file, 25, 8, 1256);
			attr_dev(div7, "class", "flex justify-center");
			add_location(div7, file, 24, 4, 1213);
			attr_dev(p2, "class", "flex justify-center mb-6 text-gray-500 text-xl");
			add_location(p2, file, 29, 12, 1420);
			attr_dev(iframe2, "width", "560");
			attr_dev(iframe2, "height", "315");
			if (iframe2.src !== (iframe2_src_value = "https://www.youtube.com/embed/6uG9lsx-EMo")) attr_dev(iframe2, "src", iframe2_src_value);
			attr_dev(iframe2, "frameborder", "0");
			attr_dev(iframe2, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe2.allowFullscreen = true;
			attr_dev(iframe2, "controls", "");
			attr_dev(iframe2, "autoplay", "");
			add_location(iframe2, file, 31, 16, 1573);
			attr_dev(div8, "class", "flex justify-center pb-6 ");
			add_location(div8, file, 30, 12, 1515);
			attr_dev(div9, "class", " m-16");
			add_location(div9, file, 28, 8, 1386);
			attr_dev(p3, "class", "flex justify-center mb-6 text-gray-500 text-xl");
			add_location(p3, file, 35, 12, 1875);
			attr_dev(iframe3, "width", "560");
			attr_dev(iframe3, "height", "315");
			if (iframe3.src !== (iframe3_src_value = "https://www.youtube.com/embed/6uG9lsx-EMo")) attr_dev(iframe3, "src", iframe3_src_value);
			attr_dev(iframe3, "frameborder", "0");
			attr_dev(iframe3, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe3.allowFullscreen = true;
			attr_dev(iframe3, "controls", "");
			attr_dev(iframe3, "autoplay", "");
			add_location(iframe3, file, 37, 16, 2035);
			attr_dev(div10, "class", "flex justify-center pb-6 ");
			add_location(div10, file, 36, 12, 1977);
			attr_dev(div11, "class", "m-16");
			add_location(div11, file, 34, 8, 1842);
			attr_dev(div12, "class", " mt-12 lg:flex justify-around");
			add_location(div12, file, 27, 4, 1332);
			attr_dev(div13, "class", "m-8");
			add_location(div13, file, 23, 0, 1190);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div6, anchor);
			append_dev(div6, div0);
			append_dev(div0, h10);
			append_dev(h10, t0);
			append_dev(div6, t1);
			append_dev(div6, div5);
			append_dev(div5, div2);
			append_dev(div2, p0);
			append_dev(p0, t2);
			append_dev(div2, t3);
			append_dev(div2, div1);
			append_dev(div1, iframe0);
			append_dev(div5, t4);
			append_dev(div5, div4);
			append_dev(div4, p1);
			append_dev(p1, t5);
			append_dev(div4, t6);
			append_dev(div4, div3);
			append_dev(div3, iframe1);
			insert_dev(target, t7, anchor);
			insert_dev(target, div13, anchor);
			append_dev(div13, div7);
			append_dev(div7, h11);
			append_dev(h11, t8);
			append_dev(div13, t9);
			append_dev(div13, div12);
			append_dev(div12, div9);
			append_dev(div9, p2);
			append_dev(p2, t10);
			append_dev(div9, t11);
			append_dev(div9, div8);
			append_dev(div8, iframe2);
			append_dev(div12, t12);
			append_dev(div12, div11);
			append_dev(div11, p3);
			append_dev(p3, t13);
			append_dev(div11, t14);
			append_dev(div11, div10);
			append_dev(div10, iframe3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div6);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(div13);
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

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tutorial> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Tutorial", $$slots, []);
	return [];
}

class Tutorial extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tutorial",
			options,
			id: create_fragment.name
		});
	}
}

export default Tutorial;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuNjE2ZWU4NjMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
