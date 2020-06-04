import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.e1fb3faa.js';

/* src/routes/tutorial.svelte generated by Svelte v3.22.3 */

const file = "src/routes/tutorial.svelte";

function create_fragment(ctx) {
	let body;
	let div6;
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

	const block = {
		c: function create() {
			body = element("body");
			div6 = element("div");
			div0 = element("div");
			h1 = element("h1");
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
			this.h();
		},
		l: function claim(nodes) {
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			div6 = claim_element(body_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Tutorial");
			h1_nodes.forEach(detach_dev);
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
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "font-bold text-4xl text-blue-800");
			add_location(h1, file, 5, 16, 139);
			attr_dev(div0, "class", "flex justify-center");
			add_location(div0, file, 4, 12, 89);
			attr_dev(p0, "class", "flex justify-center mb-6 text-gray-500 text-xl");
			add_location(p0, file, 9, 20, 354);
			attr_dev(iframe0, "width", "560");
			attr_dev(iframe0, "height", "315");
			if (iframe0.src !== (iframe0_src_value = "https://www.youtube.com/embed/6uG9lsx-EMo")) attr_dev(iframe0, "src", iframe0_src_value);
			attr_dev(iframe0, "frameborder", "0");
			attr_dev(iframe0, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe0.allowFullscreen = true;
			attr_dev(iframe0, "controls", "");
			attr_dev(iframe0, "autoplay", "");
			add_location(iframe0, file, 11, 24, 528);
			attr_dev(div1, "class", "flex justify-center pb-6 mx-auto");
			add_location(div1, file, 10, 20, 456);
			attr_dev(div2, "class", "container mx-auto py-16");
			add_location(div2, file, 8, 16, 295);
			attr_dev(p1, "class", "flex justify-center mb-6 text-gray-500 text-xl");
			add_location(p1, file, 15, 20, 877);
			attr_dev(iframe1, "width", "560");
			attr_dev(iframe1, "height", "315");
			if (iframe1.src !== (iframe1_src_value = "https://www.youtube.com/embed/6uG9lsx-EMo")) attr_dev(iframe1, "src", iframe1_src_value);
			attr_dev(iframe1, "frameborder", "0");
			attr_dev(iframe1, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe1.allowFullscreen = true;
			attr_dev(iframe1, "controls", "");
			attr_dev(iframe1, "autoplay", "");
			add_location(iframe1, file, 17, 24, 1058);
			attr_dev(div3, "class", "flex justify-center pb-6 mx-auto");
			add_location(div3, file, 16, 20, 986);
			attr_dev(div4, "class", "container mx-auto py-16");
			add_location(div4, file, 14, 16, 818);
			attr_dev(div5, "class", " mt-12 items-center justify-center");
			add_location(div5, file, 7, 12, 229);
			attr_dev(div6, "class", "m-8");
			add_location(div6, file, 3, 8, 59);
			attr_dev(body, "class", "bg-blue-100 w-screen h-screen m-8");
			add_location(body, file, 2, 0, 2);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, div6);
			append_dev(div6, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuNmEwZGE2MDAuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
