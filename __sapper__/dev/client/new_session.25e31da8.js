import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, w as create_component, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, x as claim_component, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, y as mount_component, z as transition_in, A as transition_out, B as destroy_component } from './client.a1ba4988.js';
import Box from './Box.3bd1c38b.js';

/* src/routes/new_session.svelte generated by Svelte v3.22.3 */
const file = "src/routes/new_session.svelte";

// (27:2) <Box>
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
			add_location(p, file, 28, 3, 539);
			if (img.src !== (img_src_value = "cycling.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			add_location(img, file, 29, 3, 581);
			attr_dev(a, "href", "new_sessions/cycling/new_cycling");
			add_location(a, file, 27, 3, 492);
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
		source: "(27:2) <Box>",
		ctx
	});

	return block;
}

// (38:2) <Box>
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
			add_location(p, file, 39, 3, 773);
			if (img.src !== (img_src_value = "running.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "running");
			add_location(img, file, 40, 3, 815);
			attr_dev(a, "href", "new_sessions/running/new_running");
			add_location(a, file, 38, 3, 726);
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
		source: "(38:2) <Box>",
		ctx
	});

	return block;
}

// (49:2) <Box>
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
			add_location(p, file, 50, 2, 1005);
			if (img.src !== (img_src_value = "workout.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "workout");
			add_location(img, file, 51, 2, 1047);
			attr_dev(a, "href", "new_sessions/workout/new_workout");
			add_location(a, file, 49, 2, 959);
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
		source: "(49:2) <Box>",
		ctx
	});

	return block;
}

// (60:2) <Box>
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
			add_location(p, file, 61, 2, 1240);
			if (img.src !== (img_src_value = "swimming.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "swimming");
			add_location(img, file, 62, 2, 1282);
			attr_dev(a, "href", "new_sessions/swimming/new_swimming");
			add_location(a, file, 60, 2, 1192);
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
		source: "(60:2) <Box>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div0;
	let h1;
	let t0;
	let t1;
	let div9;
	let div2;
	let div1;
	let t2;
	let div4;
	let div3;
	let t3;
	let div6;
	let div5;
	let t4;
	let div8;
	let div7;
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
			div0 = element("div");
			h1 = element("h1");
			t0 = text("Click sports to add new sessions");
			t1 = space();
			div9 = element("div");
			div2 = element("div");
			div1 = element("div");
			create_component(box0.$$.fragment);
			t2 = space();
			div4 = element("div");
			div3 = element("div");
			create_component(box1.$$.fragment);
			t3 = space();
			div6 = element("div");
			div5 = element("div");
			create_component(box2.$$.fragment);
			t4 = space();
			div8 = element("div");
			div7 = element("div");
			create_component(box3.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Click sports to add new sessions");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div9 = claim_element(nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div2 = claim_element(div9_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(box0.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t2 = claim_space(div9_nodes);
			div4 = claim_element(div9_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(box1.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t3 = claim_space(div9_nodes);
			div6 = claim_element(div9_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(box2.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t4 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			claim_component(box3.$$.fragment, div7_nodes);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 16, 0, 318);
			attr_dev(div0, "class", "text-center p-10");
			add_location(div0, file, 15, 0, 287);
			attr_dev(div1, "class", "text-center  p-2");
			add_location(div1, file, 25, 4, 450);
			attr_dev(div2, "class", "w-1/2 p-2");
			add_location(div2, file, 24, 2, 422);
			attr_dev(div3, "class", " text-center p-2");
			add_location(div3, file, 36, 4, 684);
			attr_dev(div4, "class", "w-1/2 p-2");
			add_location(div4, file, 35, 2, 656);
			attr_dev(div5, "class", " text-center p-2");
			add_location(div5, file, 47, 4, 918);
			attr_dev(div6, "class", "w-1/2 p-2");
			add_location(div6, file, 46, 2, 890);
			attr_dev(div7, "class", " text-center p-2");
			add_location(div7, file, 58, 4, 1151);
			attr_dev(div8, "class", "w-1/2 p-2");
			add_location(div8, file, 57, 2, 1123);
			attr_dev(div9, "class", "flex content-start flex-wrap h-48");
			add_location(div9, file, 23, 0, 372);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, h1);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div9, anchor);
			append_dev(div9, div2);
			append_dev(div2, div1);
			mount_component(box0, div1, null);
			append_dev(div9, t2);
			append_dev(div9, div4);
			append_dev(div4, div3);
			mount_component(box1, div3, null);
			append_dev(div9, t3);
			append_dev(div9, div6);
			append_dev(div6, div5);
			mount_component(box2, div5, null);
			append_dev(div9, t4);
			append_dev(div9, div8);
			append_dev(div8, div7);
			mount_component(box3, div7, null);
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
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div9);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X3Nlc3Npb24uMjVlMzFkYTguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
