import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, e as element, b as space, t as text, c as claim_element, f as children, g as detach_dev, h as claim_space, j as claim_text, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as noop } from './client.5496ea3c.js';

/* src/routes/tutorial.svelte generated by Svelte v3.22.3 */

const file = "src/routes/tutorial.svelte";

function create_fragment(ctx) {
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div1;
	let h1;
	let t1;
	let t2;
	let div7;
	let div6;
	let div3;
	let p0;
	let t3;
	let t4;
	let div2;
	let iframe0;
	let iframe0_src_value;
	let t5;
	let div5;
	let p1;
	let t6;
	let t7;
	let div4;
	let iframe1;
	let iframe1_src_value;

	const block = {
		c: function create() {
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text("Tutorial");
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			div3 = element("div");
			p0 = element("p");
			t3 = text("Where it all starts");
			t4 = space();
			div2 = element("div");
			iframe0 = element("iframe");
			t5 = space();
			div5 = element("div");
			p1 = element("p");
			t6 = text("How to use the application");
			t7 = space();
			div4 = element("div");
			iframe1 = element("iframe");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Tutorial");
			h1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div7 = claim_element(nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			p0 = claim_element(div3_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Where it all starts");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			iframe0 = claim_element(div2_nodes, "IFRAME", {
				title: true,
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
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t5 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			p1 = claim_element(div5_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "How to use the application");
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);

			iframe1 = claim_element(div4_nodes, "IFRAME", {
				title: true,
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
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "mountains");
			attr_dev(img, "class", "antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md");
			add_location(img, file, 6, 4, 36);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 5, 0, 5);
			attr_dev(h1, "class", "text-4xl text-blue-700 font-semibold tracking-widest");
			add_location(h1, file, 12, 4, 326);
			attr_dev(div1, "class", "flex justify-center p-8");
			add_location(div1, file, 11, 0, 284);
			attr_dev(p0, "class", "flex justify-center mb-6 font-semibold mb-6 text-xl text-blue-700");
			add_location(p0, file, 18, 16, 531);
			attr_dev(iframe0, "title", "videotutorial1");
			attr_dev(iframe0, "width", "560");
			attr_dev(iframe0, "height", "315");
			if (iframe0.src !== (iframe0_src_value = "https://www.youtube.com/embed/6uG9lsx-EMo?autoplay=1&loop=1&autopause=1")) attr_dev(iframe0, "src", iframe0_src_value);
			attr_dev(iframe0, "frameborder", "0");
			attr_dev(iframe0, "allow", "fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe0.allowFullscreen = true;
			attr_dev(iframe0, "controls", "");
			attr_dev(iframe0, "autoplay", "");
			add_location(iframe0, file, 20, 20, 709);
			attr_dev(div2, "class", "flex justify-center pb-6 ");
			add_location(div2, file, 19, 16, 648);
			attr_dev(div3, "class", "m-16");
			add_location(div3, file, 17, 12, 495);
			attr_dev(p1, "class", "flex justify-center mb-6 font-semibold mb-6 text-xl text-blue-700");
			add_location(p1, file, 24, 16, 1088);
			attr_dev(iframe1, "title", "videotutorial2");
			attr_dev(iframe1, "width", "560");
			attr_dev(iframe1, "height", "315");
			if (iframe1.src !== (iframe1_src_value = "https://www.youtube.com/embed/6uG9lsx-EMo")) attr_dev(iframe1, "src", iframe1_src_value);
			attr_dev(iframe1, "frameborder", "0");
			attr_dev(iframe1, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe1.allowFullscreen = true;
			attr_dev(iframe1, "controls", "");
			attr_dev(iframe1, "autoplay", "");
			add_location(iframe1, file, 26, 20, 1273);
			attr_dev(div4, "class", "flex justify-center pb-6 ");
			add_location(div4, file, 25, 16, 1212);
			attr_dev(div5, "class", "m-16");
			add_location(div5, file, 23, 12, 1052);
			attr_dev(div6, "class", " mt-12 justify-center");
			add_location(div6, file, 16, 8, 446);
			attr_dev(div7, "class", "");
			add_location(div7, file, 14, 4, 416);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, img);
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div7, anchor);
			append_dev(div7, div6);
			append_dev(div6, div3);
			append_dev(div3, p0);
			append_dev(p0, t3);
			append_dev(div3, t4);
			append_dev(div3, div2);
			append_dev(div2, iframe0);
			append_dev(div6, t5);
			append_dev(div6, div5);
			append_dev(div5, p1);
			append_dev(p1, t6);
			append_dev(div5, t7);
			append_dev(div5, div4);
			append_dev(div4, iframe1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHV0b3JpYWwuMGY1YWRkZjkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
