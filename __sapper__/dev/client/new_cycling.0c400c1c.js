import { S as SvelteComponentDev, i as init, d as dispatch_dev, D as globals, s as safe_not_equal, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as add_location, m as insert_dev, n as append_dev, a as space, c as claim_space, k as attr_dev, E as run_all, F as listen_dev, o as noop, G as prevent_default } from './client.419cff38.js';

/* src\routes\new_sessions\new_cycling.svelte generated by Svelte v3.22.3 */

const { console: console_1 } = globals;
const file = "src\\routes\\new_sessions\\new_cycling.svelte";

// (65:2) {#if error_boolean}
function create_if_block(ctx) {
	let h1;
	let t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("OH NO! AN ERRROR!");
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t = claim_text(h1_nodes, "OH NO! AN ERRROR!");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 65, 4, 1498);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(65:2) {#if error_boolean}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let form;
	let label0;
	let t0;
	let t1;
	let input0;
	let t2;
	let t3;
	let label1;
	let t4;
	let t5;
	let input1;
	let t6;
	let button;
	let t7;
	let t8;
	let div4;
	let div1;
	let div0;
	let t9;
	let t10;
	let div3;
	let div2;
	let img;
	let img_src_value;
	let t11;
	let body;
	let div11;
	let div5;
	let h1;
	let t12;
	let t13;
	let div10;
	let div6;
	let p0;
	let t14;
	let t15;
	let input2;
	let t16;
	let div7;
	let p1;
	let t17;
	let t18;
	let input3;
	let t19;
	let div8;
	let p2;
	let t20;
	let t21;
	let input4;
	let t22;
	let div9;
	let p3;
	let t23;
	let t24;
	let input5;
	let dispose;
	let if_block = /*error_boolean*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			form = element("form");
			label0 = element("label");
			t0 = text("Email");
			t1 = space();
			input0 = element("input");
			t2 = space();
			if (if_block) if_block.c();
			t3 = space();
			label1 = element("label");
			t4 = text("Password");
			t5 = space();
			input1 = element("input");
			t6 = space();
			button = element("button");
			t7 = text("Create account");
			t8 = space();
			div4 = element("div");
			div1 = element("div");
			div0 = element("div");
			t9 = text("Cycling New Session");
			t10 = space();
			div3 = element("div");
			div2 = element("div");
			img = element("img");
			t11 = space();
			body = element("body");
			div11 = element("div");
			div5 = element("div");
			h1 = element("h1");
			t12 = text("New Session");
			t13 = space();
			div10 = element("div");
			div6 = element("div");
			p0 = element("p");
			t14 = text("Date");
			t15 = space();
			input2 = element("input");
			t16 = space();
			div7 = element("div");
			p1 = element("p");
			t17 = text("Meters");
			t18 = space();
			input3 = element("input");
			t19 = space();
			div8 = element("div");
			p2 = element("p");
			t20 = text("Minutes");
			t21 = space();
			input4 = element("input");
			t22 = space();
			div9 = element("div");
			p3 = element("p");
			t23 = text("Elevation");
			t24 = space();
			input5 = element("input");
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", {});
			var form_nodes = children(form);
			label0 = claim_element(form_nodes, "LABEL", { for: true });
			var label0_nodes = children(label0);
			t0 = claim_text(label0_nodes, "Email");
			label0_nodes.forEach(detach_dev);
			t1 = claim_space(form_nodes);
			input0 = claim_element(form_nodes, "INPUT", { required: true, type: true, id: true });
			t2 = claim_space(form_nodes);
			if (if_block) if_block.l(form_nodes);
			t3 = claim_space(form_nodes);
			label1 = claim_element(form_nodes, "LABEL", { for: true });
			var label1_nodes = children(label1);
			t4 = claim_text(label1_nodes, "Password");
			label1_nodes.forEach(detach_dev);
			t5 = claim_space(form_nodes);
			input1 = claim_element(form_nodes, "INPUT", { required: true, type: true, id: true });
			t6 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true });
			var button_nodes = children(button);
			t7 = claim_text(button_nodes, "Create account");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t9 = claim_text(div0_nodes, "Cycling New Session");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t10 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img = claim_element(div2_nodes, "IMG", { src: true, alt: true });
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			div11 = claim_element(body_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div5 = claim_element(div11_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			h1 = claim_element(div5_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t12 = claim_text(h1_nodes, "New Session");
			h1_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t13 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div6 = claim_element(div10_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			p0 = claim_element(div6_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t14 = claim_text(p0_nodes, "Date");
			p0_nodes.forEach(detach_dev);
			t15 = claim_space(div6_nodes);

			input2 = claim_element(div6_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div6_nodes.forEach(detach_dev);
			t16 = claim_space(div10_nodes);
			div7 = claim_element(div10_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			p1 = claim_element(div7_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t17 = claim_text(p1_nodes, "Meters");
			p1_nodes.forEach(detach_dev);
			t18 = claim_space(div7_nodes);

			input3 = claim_element(div7_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div7_nodes.forEach(detach_dev);
			t19 = claim_space(div10_nodes);
			div8 = claim_element(div10_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			p2 = claim_element(div8_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t20 = claim_text(p2_nodes, "Minutes");
			p2_nodes.forEach(detach_dev);
			t21 = claim_space(div8_nodes);

			input4 = claim_element(div8_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div8_nodes.forEach(detach_dev);
			t22 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			p3 = claim_element(div9_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t23 = claim_text(p3_nodes, "Elevation");
			p3_nodes.forEach(detach_dev);
			t24 = claim_space(div9_nodes);

			input5 = claim_element(div9_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label0, "for", "email");
			add_location(label0, file, 62, 2, 1390);
			input0.required = true;
			attr_dev(input0, "type", "number");
			attr_dev(input0, "id", "email");
			add_location(input0, file, 63, 2, 1426);
			attr_dev(label1, "for", "password");
			add_location(label1, file, 68, 2, 1540);
			input1.required = true;
			attr_dev(input1, "type", "number");
			attr_dev(input1, "id", "password");
			add_location(input1, file, 69, 2, 1582);
			attr_dev(button, "type", "submit");
			add_location(button, file, 71, 2, 1634);
			add_location(form, file, 56, 0, 1216);
			attr_dev(div0, "class", "text-center p-2 text-2xl font-semibold bg-gray-100");
			add_location(div0, file, 82, 4, 1773);
			attr_dev(div1, "class", "flex-initial w-2/3 p-2");
			add_location(div1, file, 81, 2, 1731);
			if (img.src !== (img_src_value = "cycling.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			add_location(img, file, 88, 4, 1965);
			attr_dev(div2, "class", " text-right p-2");
			add_location(div2, file, 87, 4, 1930);
			attr_dev(div3, "class", "flex-initial w-1/3 p-2");
			add_location(div3, file, 86, 2, 1888);
			attr_dev(div4, "class", "flex h-48");
			add_location(div4, file, 80, 0, 1704);
			attr_dev(h1, "class", "font-bold text-3xl text-blue-800");
			add_location(h1, file, 98, 16, 2189);
			attr_dev(div5, "class", "md:flex justify-center");
			add_location(div5, file, 97, 12, 2135);
			attr_dev(p0, "class", "pb-2");
			add_location(p0, file, 103, 20, 2411);
			attr_dev(input2, "type", "date");
			attr_dev(input2, "id", "date");
			attr_dev(input2, "name", "date");
			attr_dev(input2, "class", "shadow hover:shadow-md");
			add_location(input2, file, 104, 20, 2457);
			attr_dev(div6, "class", "pb-6");
			add_location(div6, file, 102, 16, 2370);
			attr_dev(p1, "class", "pb-2");
			add_location(p1, file, 121, 20, 3229);
			attr_dev(input3, "type", "number");
			attr_dev(input3, "id", "meters");
			attr_dev(input3, "name", "meters");
			attr_dev(input3, "class", "shadow hover:shadow-md");
			add_location(input3, file, 122, 16, 3273);
			attr_dev(div7, "class", "pb-6");
			add_location(div7, file, 120, 16, 3189);
			attr_dev(p2, "class", "pb-2");
			add_location(p2, file, 127, 20, 3441);
			attr_dev(input4, "type", "number");
			attr_dev(input4, "id", "minutes");
			attr_dev(input4, "name", "minutes");
			attr_dev(input4, "class", "shadow hover:shadow-md");
			add_location(input4, file, 128, 16, 3486);
			attr_dev(div8, "class", "pb-6");
			add_location(div8, file, 126, 16, 3401);
			attr_dev(p3, "class", "pb-2");
			add_location(p3, file, 132, 20, 3654);
			attr_dev(input5, "type", "number");
			attr_dev(input5, "id", "elevation");
			attr_dev(input5, "name", "elevation");
			attr_dev(input5, "class", "shadow hover:shadow-md");
			add_location(input5, file, 133, 16, 3701);
			attr_dev(div9, "class", "pb-6");
			add_location(div9, file, 131, 16, 3614);
			attr_dev(div10, "class", "md:flex mt-12 w-full justify-around");
			add_location(div10, file, 100, 12, 2284);
			attr_dev(div11, "class", "mx-5 my-5");
			add_location(div11, file, 96, 8, 2098);
			attr_dev(body, "class", "bg-blue-100 w-screen h-screen");
			add_location(body, file, 95, 4, 2044);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, form, anchor);
			append_dev(form, label0);
			append_dev(label0, t0);
			append_dev(form, t1);
			append_dev(form, input0);
			append_dev(form, t2);
			if (if_block) if_block.m(form, null);
			append_dev(form, t3);
			append_dev(form, label1);
			append_dev(label1, t4);
			append_dev(form, t5);
			append_dev(form, input1);
			append_dev(form, t6);
			append_dev(form, button);
			append_dev(button, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, div1);
			append_dev(div1, div0);
			append_dev(div0, t9);
			append_dev(div4, t10);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, img);
			insert_dev(target, t11, anchor);
			insert_dev(target, body, anchor);
			append_dev(body, div11);
			append_dev(div11, div5);
			append_dev(div5, h1);
			append_dev(h1, t12);
			append_dev(div11, t13);
			append_dev(div11, div10);
			append_dev(div10, div6);
			append_dev(div6, p0);
			append_dev(p0, t14);
			append_dev(div6, t15);
			append_dev(div6, input2);
			append_dev(div10, t16);
			append_dev(div10, div7);
			append_dev(div7, p1);
			append_dev(p1, t17);
			append_dev(div7, t18);
			append_dev(div7, input3);
			append_dev(div10, t19);
			append_dev(div10, div8);
			append_dev(div8, p2);
			append_dev(p2, t20);
			append_dev(div8, t21);
			append_dev(div8, input4);
			append_dev(div10, t22);
			append_dev(div10, div9);
			append_dev(div9, p3);
			append_dev(p3, t23);
			append_dev(div9, t24);
			append_dev(div9, input5);
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(form, "submit", prevent_default(handleSubmit), false, true, false),
				listen_dev(form, "invalid", /*validateMessageEmail*/ ctx[1], false, false, false),
				listen_dev(form, "changed", /*validateMessageEmail*/ ctx[1], false, false, false),
				listen_dev(form, "input", /*validateMessageEmail*/ ctx[1], false, false, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (/*error_boolean*/ ctx[0]) {
				if (if_block) ; else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(form, t3);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			if (if_block) if_block.d();
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(div4);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(body);
			run_all(dispose);
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
	return this.fetch(`new_sessions.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

async function handleSubmit(event) {
	console.log(1);
	console.log(event);
	console.log(1);
	console.log(event.target);
	console.log(1);
	console.log(event.target.email.value);
	console.log(1);
	console.log(event.target.password.value);
}

function instance($$self, $$props, $$invalidate) {
	let { options } = $$props;
	let list = [];

	options.forEach(x => {
		list.push(x.features);
	});

	console.log(list);
	let error_boolean = false;

	function validateMessageEmail(event) {
		let textbox = event.target;
		$$invalidate(0, error_boolean = false);

		if (textbox.value === "") {
			textbox.setCustomValidity("Required email address");
		} else if (textbox.validity.typeMismatch) {
			$$invalidate(0, error_boolean = true);
			textbox.setCustomValidity("please enter a valid email address");
		} else {
			textbox.setCustomValidity("");
		}

		return true;
	}

	const writable_props = ["options"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<New_cycling> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("New_cycling", $$slots, []);

	$$self.$set = $$props => {
		if ("options" in $$props) $$invalidate(2, options = $$props.options);
	};

	$$self.$capture_state = () => ({
		preload,
		options,
		list,
		error_boolean,
		handleSubmit,
		validateMessageEmail
	});

	$$self.$inject_state = $$props => {
		if ("options" in $$props) $$invalidate(2, options = $$props.options);
		if ("list" in $$props) list = $$props.list;
		if ("error_boolean" in $$props) $$invalidate(0, error_boolean = $$props.error_boolean);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [error_boolean, validateMessageEmail, options];
}

class New_cycling extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { options: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "New_cycling",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*options*/ ctx[2] === undefined && !("options" in props)) {
			console_1.warn("<New_cycling> was created without expected prop 'options'");
		}
	}

	get options() {
		throw new Error("<New_cycling>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set options(value) {
		throw new Error("<New_cycling>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default New_cycling;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X2N5Y2xpbmcuMGM0MDBjMWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3X3Nlc3Npb25zL25ld19jeWNsaW5nLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgbmV3X3Nlc3Npb25zLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ob3B0aW9ucyA9PiB7XHJcblx0XHRcdHJldHVybiB7IG9wdGlvbnMgfTtcclxuXHRcdH0pO1xyXG5cdH1cdFxyXG4gICAgXHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gICAgZXhwb3J0IGxldCBvcHRpb25zO1xyXG5cclxuXHJcbiAgICBsZXQgbGlzdCA9IFtdXHJcblxyXG4gICAgb3B0aW9ucy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgIGxpc3QucHVzaCh4LmZlYXR1cmVzKVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBsZXQgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgY29uc29sZS5sb2coMSlcclxuICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmVtYWlsLnZhbHVlKTtcclxuICAgICAgIGNvbnNvbGUubG9nKDEpXHJcbiAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQucGFzc3dvcmQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlRW1haWwoZXZlbnQpIHtcclxuICAgICAgIGxldCB0ZXh0Ym94ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgaWYgKHRleHRib3gudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ1JlcXVpcmVkIGVtYWlsIGFkZHJlc3MnKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRleHRib3gudmFsaWRpdHkudHlwZU1pc21hdGNoKXtcclxuICAgICAgICAgICAgZXJyb3JfYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuXHJcbjxmb3JtXHJcbiAgICBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9XCJ7aGFuZGxlU3VibWl0fVwiXHJcbiAgICBvbjppbnZhbGlkPXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cclxuICAgIG9uOmNoYW5nZWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxyXG4gICAgb246aW5wdXQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxyXG4+XHJcbiAgPGxhYmVsIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJlbWFpbFwiIC8+XHJcbiAgeyNpZiBlcnJvcl9ib29sZWFufVxyXG4gICAgPGgxPiBPSCBOTyEgQU4gRVJSUk9SITwvaDE+XHJcbiAgey9pZn1cclxuXHJcbiAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwYXNzd29yZFwiIC8+XHJcblxyXG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBhY2NvdW50PC9idXR0b24+XHJcbjwvZm9ybT5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJmbGV4IGgtNDhcIj5cclxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHAtMiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIGJnLWdyYXktMTAwXCI+XHJcbiAgICBDeWNsaW5nIE5ldyBTZXNzaW9uXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMS8zIHAtMlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIiB0ZXh0LXJpZ2h0IHAtMlwiPlxyXG4gICAgPGltZyBzcmM9XCJjeWNsaW5nLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcblxyXG5cclxuICAgIDxib2R5IGNsYXNzPVwiYmctYmx1ZS0xMDAgdy1zY3JlZW4gaC1zY3JlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXgtNSBteS01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1ibHVlLTgwMFwiPk5ldyBTZXNzaW9uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZDpmbGV4IG10LTEyIHctZnVsbCBqdXN0aWZ5LWFyb3VuZFwiPiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBiLTZcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYi0yXCI+RGF0ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiIGNsYXNzPVwic2hhZG93IGhvdmVyOnNoYWRvdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYi0yXCI+U3BvcnRzPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBsaXN0PVwic3BvcnRzXCIgaWQ9XCJzcG9ydFwiIG5hbWU9XCJzcG9ydFwiIGNsYXNzPVwic2hhZG93IGhvdmVyOnNoYWRvdy1tZFwiIHZhbHVlPXtuYW1lfSBvbjpjaGFuZ2U9XCJ7KCkgPT4gYW5zd2VyID0gJyd9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwic3BvcnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGaXRuZXNzXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKb2dnaW5nXCI+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTd2ltbWluZ1wiPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUmFjaW5nIEJpa2VcIj48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2RhdGFsaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGItMlwiPk1ldGVyczwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtZXRlcnNcIiBuYW1lPVwibWV0ZXJzXCIgY2xhc3M9XCJzaGFkb3cgaG92ZXI6c2hhZG93LW1kXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJwYi0yXCI+TWludXRlczwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtaW51dGVzXCIgbmFtZT1cIm1pbnV0ZXNcIiBjbGFzcz1cInNoYWRvdyBob3ZlcjpzaGFkb3ctbWRcIj4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGItNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicGItMlwiPkVsZXZhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJlbGV2YXRpb25cIiBuYW1lPVwiZWxldmF0aW9uXCIgY2xhc3M9XCJzaGFkb3cgaG92ZXI6c2hhZG93LW1kXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvYm9keT4gXHJcblxyXG48IS0tIENoZWNrIHRoYXQgYWxsIGlucHV0cyBhcmUgcHJvdmlkZWQgOiAtLT5cclxuXHJcblxyXG5cclxuXHJcbjwhLS0gXHJcbjxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD1cIntoYW5kbGVTdWJtaXR9XCIgPlxyXG4gIDxsYWJlbCBjbGFzcz0nYmctYmx1ZS0xMDAnIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gIDxpbnB1dCByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJlbWFpbFwiIC8+XHJcblxyXG4gIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwicGFzc3dvcmRcIiAvPlxyXG4gIFxyXG4gIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBhY2NvdW50PC9idXR0b24+XHJcbjwvZm9ybT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5lbWFpbC52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnBhc3N3b3JkLnZhbHVlKTtcclxuICAgIH1cclxuPC9zY3JpcHQ+IC0tPlxyXG5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FnRU8sR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBUFcsWUFBWTt5REFDM0IsR0FBb0I7eURBQ3BCLEdBQW9CO3VEQUN0QixHQUFvQjs7Ozt5QkFJM0IsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0E3REgsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxLQUFLLHNCQUFzQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87V0FDN0QsT0FBTzs7OztlQXVCRCxZQUFZLENBQUMsS0FBSztDQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUs7Q0FDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTTtDQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUs7Q0FDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLOzs7O09BdEIvQixPQUFPO0tBR2QsSUFBSTs7Q0FFUixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7RUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFROzs7Q0FFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO0tBSVosYUFBYSxHQUFHLEtBQUs7O1VBYWpCLG9CQUFvQixDQUFDLEtBQUs7TUFDM0IsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNO2tCQUMxQixhQUFhLEdBQUcsS0FBSzs7TUFDakIsT0FBTyxDQUFDLEtBQUssS0FBSyxFQUFFO0dBQ25CLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0I7YUFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZO21CQUNwQyxhQUFhLEdBQUcsSUFBSTtHQUNwQixPQUFPLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DOztHQUUvRCxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTs7O1NBRXhCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
