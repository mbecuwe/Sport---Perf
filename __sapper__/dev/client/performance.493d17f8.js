import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, w as create_component, a as space, f as claim_element, g as children, x as claim_component, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as mount_component, z as transition_in, A as transition_out, B as destroy_component, t as text, h as claim_text } from './client.9389ce54.js';
import Box from './Box.e7293b4c.js';

/* src\routes\performance.svelte generated by Svelte v3.22.3 */
const file = "src\\routes\\performance.svelte";

// (14:2) <Box>
function create_default_slot_3(ctx) {
	let a;
	let p;
	let t0;
	let t1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			a = element("a");
			p = element("p");
			t0 = text("Cycling");
			t1 = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			p = claim_element(a_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Cycling");
			p_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			img = claim_element(a_nodes, "IMG", { src: true, alt: true });
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", " font-bold pb-2");
			add_location(p, file, 15, 3, 248);
			if (img.src !== (img_src_value = "cycling.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			add_location(img, file, 16, 3, 291);
			attr_dev(a, "href", "sports/cycling/cycling");
			add_location(a, file, 14, 3, 210);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, p);
			append_dev(p, t0);
			append_dev(a, t1);
			append_dev(a, img);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(14:2) <Box>",
		ctx
	});

	return block;
}

// (25:2) <Box>
function create_default_slot_2(ctx) {
	let a;
	let p;
	let t0;
	let t1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			a = element("a");
			p = element("p");
			t0 = text("Running");
			t1 = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			p = claim_element(a_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Running");
			p_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			img = claim_element(a_nodes, "IMG", { src: true, alt: true });
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", " font-bold pb-2");
			add_location(p, file, 26, 3, 483);
			if (img.src !== (img_src_value = "running.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "running");
			add_location(img, file, 27, 3, 526);
			attr_dev(a, "href", "sports/running/running");
			add_location(a, file, 25, 3, 445);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, p);
			append_dev(p, t0);
			append_dev(a, t1);
			append_dev(a, img);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(25:2) <Box>",
		ctx
	});

	return block;
}

// (36:2) <Box>
function create_default_slot_1(ctx) {
	let a;
	let p;
	let t0;
	let t1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			a = element("a");
			p = element("p");
			t0 = text("Work-out");
			t1 = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			p = claim_element(a_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Work-out");
			p_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			img = claim_element(a_nodes, "IMG", { src: true, alt: true });
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", " font-bold pb-2");
			add_location(p, file, 37, 2, 716);
			if (img.src !== (img_src_value = "workout.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "workout");
			add_location(img, file, 38, 2, 759);
			attr_dev(a, "href", "sports/workout/workout");
			add_location(a, file, 36, 2, 679);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, p);
			append_dev(p, t0);
			append_dev(a, t1);
			append_dev(a, img);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(36:2) <Box>",
		ctx
	});

	return block;
}

// (47:2) <Box>
function create_default_slot(ctx) {
	let a;
	let p;
	let t0;
	let t1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			a = element("a");
			p = element("p");
			t0 = text("Swimming");
			t1 = space();
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			p = claim_element(a_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Swimming");
			p_nodes.forEach(detach_dev);
			t1 = claim_space(a_nodes);
			img = claim_element(a_nodes, "IMG", { src: true, alt: true });
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", " font-bold pb-2");
			add_location(p, file, 48, 2, 952);
			if (img.src !== (img_src_value = "swimming.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "swimming");
			add_location(img, file, 49, 2, 995);
			attr_dev(a, "href", "sports/swimming/swimming");
			add_location(a, file, 47, 2, 913);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, p);
			append_dev(p, t0);
			append_dev(a, t1);
			append_dev(a, img);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(47:2) <Box>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div8;
	let div1;
	let div0;
	let t0;
	let div3;
	let div2;
	let t1;
	let div5;
	let div4;
	let t2;
	let div7;
	let div6;
	let current;

	const box0 = new Box({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const box1 = new Box({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const box2 = new Box({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const box3 = new Box({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div8 = element("div");
			div1 = element("div");
			div0 = element("div");
			create_component(box0.$$.fragment);
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			create_component(box1.$$.fragment);
			t1 = space();
			div5 = element("div");
			div4 = element("div");
			create_component(box2.$$.fragment);
			t2 = space();
			div7 = element("div");
			div6 = element("div");
			create_component(box3.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div8 = claim_element(nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div1 = claim_element(div8_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(box0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t0 = claim_space(div8_nodes);
			div3 = claim_element(div8_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(box1.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t1 = claim_space(div8_nodes);
			div5 = claim_element(div8_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(box2.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t2 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			claim_component(box3.$$.fragment, div6_nodes);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "text-center  p-2");
			add_location(div0, file, 12, 4, 166);
			attr_dev(div1, "class", "w-1/2 p-2");
			add_location(div1, file, 11, 2, 137);
			attr_dev(div2, "class", " text-center p-2");
			add_location(div2, file, 23, 4, 401);
			attr_dev(div3, "class", "w-1/2 p-2");
			add_location(div3, file, 22, 2, 372);
			attr_dev(div4, "class", " text-center p-2");
			add_location(div4, file, 34, 4, 636);
			attr_dev(div5, "class", "w-1/2 p-2");
			add_location(div5, file, 33, 2, 607);
			attr_dev(div6, "class", " text-center p-2");
			add_location(div6, file, 45, 4, 870);
			attr_dev(div7, "class", "w-1/2 p-2");
			add_location(div7, file, 44, 2, 841);
			attr_dev(div8, "class", "flex content-start flex-wrap h-48");
			add_location(div8, file, 10, 0, 86);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div8, anchor);
			append_dev(div8, div1);
			append_dev(div1, div0);
			mount_component(box0, div0, null);
			append_dev(div8, t0);
			append_dev(div8, div3);
			append_dev(div3, div2);
			mount_component(box1, div2, null);
			append_dev(div8, t1);
			append_dev(div8, div5);
			append_dev(div5, div4);
			mount_component(box2, div4, null);
			append_dev(div8, t2);
			append_dev(div8, div7);
			append_dev(div7, div6);
			mount_component(box3, div6, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const box0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				box0_changes.$$scope = { dirty, ctx };
			}

			box0.$set(box0_changes);
			const box1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				box1_changes.$$scope = { dirty, ctx };
			}

			box1.$set(box1_changes);
			const box2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				box2_changes.$$scope = { dirty, ctx };
			}

			box2.$set(box2_changes);
			const box3_changes = {};

			if (dirty & /*$$scope*/ 1) {
				box3_changes.$$scope = { dirty, ctx };
			}

			box3.$set(box3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(box0.$$.fragment, local);
			transition_in(box1.$$.fragment, local);
			transition_in(box2.$$.fragment, local);
			transition_in(box3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(box0.$$.fragment, local);
			transition_out(box1.$$.fragment, local);
			transition_out(box2.$$.fragment, local);
			transition_out(box3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div8);
			destroy_component(box0);
			destroy_component(box1);
			destroy_component(box2);
			destroy_component(box3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZm9ybWFuY2UuNDkzZDE3ZjguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
