import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, r as globals, e as element, b as space, t as text, c as claim_element, f as children, g as detach_dev, h as claim_space, j as claim_text, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, u as set_input_value, w as run_all, x as listen_dev, y as prevent_default, z as to_number, o as noop } from './client.dc7c2334.js';

/* src\routes\new_sessions\swimming\new_swimming.svelte generated by Svelte v3.22.3 */

const { console: console_1 } = globals;
const file = "src\\routes\\new_sessions\\swimming\\new_swimming.svelte";

function create_fragment(ctx) {
	let div3;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div2;
	let div1;
	let t1;
	let t2;
	let div9;
	let div8;
	let div7;
	let form;
	let label0;
	let t3;
	let t4;
	let input0;
	let t5;
	let br0;
	let t6;
	let label1;
	let t7;
	let t8;
	let input1;
	let t9;
	let br1;
	let t10;
	let label2;
	let t11;
	let t12;
	let input2;
	let t13;
	let br2;
	let t14;
	let label3;
	let t15;
	let t16;
	let input3;
	let t17;
	let br3;
	let t18;
	let div5;
	let div4;
	let button;
	let t19;
	let t20;
	let br4;
	let t21;
	let div6;
	let dispose;

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div2 = element("div");
			div1 = element("div");
			t1 = text("Swimming New Session");
			t2 = space();
			div9 = element("div");
			div8 = element("div");
			div7 = element("div");
			form = element("form");
			label0 = element("label");
			t3 = text("Date");
			t4 = space();
			input0 = element("input");
			t5 = space();
			br0 = element("br");
			t6 = space();
			label1 = element("label");
			t7 = text("Distance (m)");
			t8 = space();
			input1 = element("input");
			t9 = space();
			br1 = element("br");
			t10 = space();
			label2 = element("label");
			t11 = text("Minutes");
			t12 = space();
			input2 = element("input");
			t13 = space();
			br2 = element("br");
			t14 = space();
			label3 = element("label");
			t15 = text("Sprints");
			t16 = space();
			input3 = element("input");
			t17 = space();
			br3 = element("br");
			t18 = space();
			div5 = element("div");
			div4 = element("div");
			button = element("button");
			t19 = text("Add Session");
			t20 = space();
			br4 = element("br");
			t21 = space();
			div6 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t1 = claim_text(div1_nodes, "Swimming New Session");
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div9 = claim_element(nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			form = claim_element(div7_nodes, "FORM", {});
			var form_nodes = children(form);
			label0 = claim_element(form_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = children(label0);
			t3 = claim_text(label0_nodes, "Date");
			label0_nodes.forEach(detach_dev);
			t4 = claim_space(form_nodes);

			input0 = claim_element(form_nodes, "INPUT", {
				placeholder: true,
				required: true,
				type: true,
				id: true,
				class: true
			});

			t5 = claim_space(form_nodes);
			br0 = claim_element(form_nodes, "BR", {});
			t6 = claim_space(form_nodes);
			label1 = claim_element(form_nodes, "LABEL", { for: true, class: true });
			var label1_nodes = children(label1);
			t7 = claim_text(label1_nodes, "Distance (m)");
			label1_nodes.forEach(detach_dev);
			t8 = claim_space(form_nodes);

			input1 = claim_element(form_nodes, "INPUT", {
				placeholder: true,
				required: true,
				type: true,
				id: true,
				class: true
			});

			t9 = claim_space(form_nodes);
			br1 = claim_element(form_nodes, "BR", {});
			t10 = claim_space(form_nodes);
			label2 = claim_element(form_nodes, "LABEL", { for: true, class: true });
			var label2_nodes = children(label2);
			t11 = claim_text(label2_nodes, "Minutes");
			label2_nodes.forEach(detach_dev);
			t12 = claim_space(form_nodes);

			input2 = claim_element(form_nodes, "INPUT", {
				placeholder: true,
				required: true,
				type: true,
				id: true,
				class: true
			});

			t13 = claim_space(form_nodes);
			br2 = claim_element(form_nodes, "BR", {});
			t14 = claim_space(form_nodes);
			label3 = claim_element(form_nodes, "LABEL", { for: true, class: true });
			var label3_nodes = children(label3);
			t15 = claim_text(label3_nodes, "Sprints");
			label3_nodes.forEach(detach_dev);
			t16 = claim_space(form_nodes);

			input3 = claim_element(form_nodes, "INPUT", {
				placeholder: true,
				required: true,
				type: true,
				id: true,
				class: true
			});

			t17 = claim_space(form_nodes);
			br3 = claim_element(form_nodes, "BR", {});
			t18 = claim_space(form_nodes);
			div5 = claim_element(form_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			button = claim_element(div4_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t19 = claim_text(button_nodes, "Add Session");
			button_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t20 = claim_space(div7_nodes);
			br4 = claim_element(div7_nodes, "BR", {});
			t21 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { id: true });
			var div6_nodes = children(div6);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "swimming2.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			attr_dev(img, "class", "object-cover h-48 w-full shadow rounded-md");
			add_location(img, file, 48, 8, 1957);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 47, 4, 1921);
			attr_dev(div1, "class", "font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest");
			add_location(div1, file, 53, 8, 2178);
			attr_dev(div2, "class", "flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md");
			add_location(div2, file, 52, 4, 2069);
			attr_dev(div3, "class", "mb-20");
			add_location(div3, file, 46, 0, 1896);
			attr_dev(label0, "for", "date");
			attr_dev(label0, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label0, file, 72, 12, 2721);
			attr_dev(input0, "placeholder", "date");
			input0.required = true;
			attr_dev(input0, "type", "date");
			attr_dev(input0, "id", "date");
			attr_dev(input0, "class", "text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input0, file, 75, 8, 2867);
			add_location(br0, file, 76, 12, 3080);
			attr_dev(label1, "for", "meters");
			attr_dev(label1, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label1, file, 78, 8, 3098);
			attr_dev(input1, "placeholder", "meters");
			input1.required = true;
			attr_dev(input1, "type", "number");
			attr_dev(input1, "id", "meters");
			attr_dev(input1, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input1, file, 80, 8, 3236);
			add_location(br1, file, 81, 12, 3445);
			attr_dev(label2, "for", "minutes");
			attr_dev(label2, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label2, file, 84, 8, 3465);
			attr_dev(input2, "placeholder", "minutes");
			input2.required = true;
			attr_dev(input2, "type", "number");
			attr_dev(input2, "id", "minutes");
			attr_dev(input2, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input2, file, 86, 8, 3599);
			add_location(br2, file, 87, 12, 3811);
			attr_dev(label3, "for", "nb_sprints");
			attr_dev(label3, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label3, file, 89, 8, 3829);
			attr_dev(input3, "placeholder", "number of sprints");
			input3.required = true;
			attr_dev(input3, "type", "number");
			attr_dev(input3, "id", "nb_sprints");
			attr_dev(input3, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input3, file, 91, 8, 3966);
			add_location(br3, file, 92, 12, 4194);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded");
			add_location(button, file, 95, 8, 4283);
			attr_dev(div4, "class", "flex");
			add_location(div4, file, 94, 8, 4255);
			attr_dev(div5, "class", "flex justify-end my-8");
			add_location(div5, file, 93, 8, 4210);
			add_location(form, file, 65, 8, 2495);
			add_location(br4, file, 100, 12, 4558);
			attr_dev(div6, "id", "add_to_me");
			add_location(div6, file, 104, 8, 4580);
			attr_dev(div7, "class", " p-2");
			add_location(div7, file, 64, 4, 2467);
			attr_dev(div8, "class", "flex-initial w-2/3 p-2");
			add_location(div8, file, 63, 2, 2425);
			attr_dev(div9, "class", "flex justify-center text-blue-700 ");
			add_location(div9, file, 61, 0, 2371);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div0, img);
			append_dev(div3, t0);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div9, anchor);
			append_dev(div9, div8);
			append_dev(div8, div7);
			append_dev(div7, form);
			append_dev(form, label0);
			append_dev(label0, t3);
			append_dev(form, t4);
			append_dev(form, input0);
			set_input_value(input0, /*date*/ ctx[0]);
			append_dev(form, t5);
			append_dev(form, br0);
			append_dev(form, t6);
			append_dev(form, label1);
			append_dev(label1, t7);
			append_dev(form, t8);
			append_dev(form, input1);
			set_input_value(input1, /*meters*/ ctx[1]);
			append_dev(form, t9);
			append_dev(form, br1);
			append_dev(form, t10);
			append_dev(form, label2);
			append_dev(label2, t11);
			append_dev(form, t12);
			append_dev(form, input2);
			set_input_value(input2, /*minutes*/ ctx[2]);
			append_dev(form, t13);
			append_dev(form, br2);
			append_dev(form, t14);
			append_dev(form, label3);
			append_dev(label3, t15);
			append_dev(form, t16);
			append_dev(form, input3);
			set_input_value(input3, /*nb_sprints*/ ctx[3]);
			append_dev(form, t17);
			append_dev(form, br3);
			append_dev(form, t18);
			append_dev(form, div5);
			append_dev(div5, div4);
			append_dev(div4, button);
			append_dev(button, t19);
			append_dev(div7, t20);
			append_dev(div7, br4);
			append_dev(div7, t21);
			append_dev(div7, div6);
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(input0, "input", /*input0_input_handler*/ ctx[8]),
				listen_dev(input1, "input", /*input1_input_handler*/ ctx[9]),
				listen_dev(input2, "input", /*input2_input_handler*/ ctx[10]),
				listen_dev(input3, "input", /*input3_input_handler*/ ctx[11]),
				listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[4]), false, true, false),
				listen_dev(form, "invalid", /*validateMessageEmail*/ ctx[5], false, false, false),
				listen_dev(form, "changed", /*validateMessageEmail*/ ctx[5], false, false, false),
				listen_dev(form, "input", /*validateMessageEmail*/ ctx[5], false, false, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*date*/ 1) {
				set_input_value(input0, /*date*/ ctx[0]);
			}

			if (dirty & /*meters*/ 2 && to_number(input1.value) !== /*meters*/ ctx[1]) {
				set_input_value(input1, /*meters*/ ctx[1]);
			}

			if (dirty & /*minutes*/ 4 && to_number(input2.value) !== /*minutes*/ ctx[2]) {
				set_input_value(input2, /*minutes*/ ctx[2]);
			}

			if (dirty & /*nb_sprints*/ 8 && to_number(input3.value) !== /*nb_sprints*/ ctx[3]) {
				set_input_value(input3, /*nb_sprints*/ ctx[3]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div9);
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
	return this.fetch(`new_sessions/swimming.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

function instance($$self, $$props, $$invalidate) {
	let sport = "swimming";
	let date = null, meters = null, minutes = null, nb_sprints = null;
	let error_boolean = false;

	async function handleSubmit(event) {
		const post = { sport, date, meters, minutes, nb_sprints };

		await fetch(`new_sessions/swimming.json`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(post)
		});

		document.getElementById("add_to_me").innerHTML += "<div class='bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md' role='alert'><div class='flex'><div class='py-1'><svg class='fill-current h-6 w-6 text-teal-500 mr-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z'/></svg></div><div><p class='font-bold'>Session was successfully added</p></div></div></div><br/>";

		if (response.ok) {
			const result = await response.json();
			console.log("result", result);
		}
	}

	function validateMessageEmail(event) {
		let textbox = event.target;
		error_boolean = false;

		if (textbox.value === "") {
			textbox.setCustomValidity("Number required");
		} else if (textbox.validity.typeMismatch) {
			error_boolean = true;
			textbox.setCustomValidity("please enter a valid input");
		} else {
			textbox.setCustomValidity("");
		}

		return true;
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<New_swimming> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("New_swimming", $$slots, []);

	function input0_input_handler() {
		date = this.value;
		$$invalidate(0, date);
	}

	function input1_input_handler() {
		meters = to_number(this.value);
		$$invalidate(1, meters);
	}

	function input2_input_handler() {
		minutes = to_number(this.value);
		$$invalidate(2, minutes);
	}

	function input3_input_handler() {
		nb_sprints = to_number(this.value);
		$$invalidate(3, nb_sprints);
	}

	$$self.$capture_state = () => ({
		preload,
		sport,
		date,
		meters,
		minutes,
		nb_sprints,
		error_boolean,
		handleSubmit,
		validateMessageEmail
	});

	$$self.$inject_state = $$props => {
		if ("sport" in $$props) sport = $$props.sport;
		if ("date" in $$props) $$invalidate(0, date = $$props.date);
		if ("meters" in $$props) $$invalidate(1, meters = $$props.meters);
		if ("minutes" in $$props) $$invalidate(2, minutes = $$props.minutes);
		if ("nb_sprints" in $$props) $$invalidate(3, nb_sprints = $$props.nb_sprints);
		if ("error_boolean" in $$props) error_boolean = $$props.error_boolean;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		date,
		meters,
		minutes,
		nb_sprints,
		handleSubmit,
		validateMessageEmail,
		error_boolean,
		sport,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler,
		input3_input_handler
	];
}

class New_swimming extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "New_swimming",
			options,
			id: create_fragment.name
		});
	}
}

export default New_swimming;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X3N3aW1taW5nLjdmN2U3YTQzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL25ld19zZXNzaW9ucy9zd2ltbWluZy9uZXdfc3dpbW1pbmcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG5cdGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgbmV3X3Nlc3Npb25zL3N3aW1taW5nLmpzb25gKS50aGVuKHIgPT4gci5qc29uKCkpLnRoZW4ob3B0aW9ucyA9PiB7XHJcblx0XHRcdHJldHVybiB7IG9wdGlvbnMgfTtcclxuXHRcdH0pO1xyXG5cdH1cdFxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBsZXQgc3BvcnQgPSAnc3dpbW1pbmcnXHJcbiAgICBsZXQgZGF0ZSA9IG51bGwsIG1ldGVycyA9IG51bGwsIG1pbnV0ZXMgPSBudWxsLCBuYl9zcHJpbnRzID0gbnVsbDsgICAgXHJcbiAgICBsZXQgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xyXG4gICAgICAgY29uc3QgcG9zdCA9IHtzcG9ydCwgZGF0ZSwgbWV0ZXJzLCBtaW51dGVzLCBuYl9zcHJpbnRzfVxyXG4gICAgICAgIGF3YWl0IGZldGNoKGBuZXdfc2Vzc2lvbnMvc3dpbW1pbmcuanNvbmAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90b19tZVwiKS5pbm5lckhUTUwgKz0gIFxyXG4gICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nYmctdGVhbC0xMDAgYm9yZGVyLXQtNCBib3JkZXItdGVhbC01MDAgcm91bmRlZC1iIHRleHQtdGVhbC05MDAgcHgtNCBweS0zIHNoYWRvdy1tZCcgcm9sZT0nYWxlcnQnPjxkaXYgY2xhc3M9J2ZsZXgnPjxkaXYgY2xhc3M9J3B5LTEnPjxzdmcgY2xhc3M9J2ZpbGwtY3VycmVudCBoLTYgdy02IHRleHQtdGVhbC01MDAgbXItNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGQ9J00yLjkzIDE3LjA3QTEwIDEwIDAgMSAxIDE3LjA3IDIuOTMgMTAgMTAgMCAwIDEgMi45MyAxNy4wN3ptMTIuNzMtMS40MUE4IDggMCAxIDAgNC4zNCA0LjM0YTggOCAwIDAgMCAxMS4zMiAxMS4zMnpNOSAxMVY5aDJ2Nkg5di00em0wLTZoMnYySDlWNXonLz48L3N2Zz48L2Rpdj48ZGl2PjxwIGNsYXNzPSdmb250LWJvbGQnPlNlc3Npb24gd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YnIvPlwiOyBcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2VFbWFpbChldmVudCkge1xyXG4gICAgICAgbGV0IHRleHRib3ggPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICBlcnJvcl9ib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICBpZiAodGV4dGJveC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnTnVtYmVyIHJlcXVpcmVkJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZXh0Ym94LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCl7XHJcbiAgICAgICAgICAgIGVycm9yX2Jvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBpbnB1dCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJtYi0yMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1iLTYgc2hhZG93IFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwic3dpbW1pbmcyLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTE2IGJnLWJsdWUtNzAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBzaGFkb3ctbGcgcm91bmRlZC10LW1kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2FucyBBcmlhbCB0ZXh0LWNlbnRlciBwLTIgdGV4dC0zeGwgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGJnLWJsdWUtMTAwIHB4LTggdHJhY2tpbmctd2lkZXN0XCI+XHJcbiAgICAgICAgICAgIFN3aW1taW5nIE5ldyBTZXNzaW9uXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtYmx1ZS03MDAgXCI+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0yLzMgcC0yXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiIHAtMlwiPlxyXG4gICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD1cIntoYW5kbGVTdWJtaXR9XCJcclxuICAgICAgICAgICAgb246aW52YWxpZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XHJcbiAgICAgICAgICAgIG9uOmNoYW5nZWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxyXG4gICAgICAgICAgICBvbjppbnB1dD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxyXG4gICAgICAgICAgICBEYXRlXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2RhdGV9IHBsYWNlaG9sZGVyPSdkYXRlJyByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzPVwidGV4dC1jZW50ZXIgYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm1ldGVyc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgRGlzdGFuY2UgKG0pPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17bWV0ZXJzfSBwbGFjZWhvbGRlcj0nbWV0ZXJzJyByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtZXRlcnNcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibWludXRlc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgTWludXRlczwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e21pbnV0ZXN9IHBsYWNlaG9sZGVyPSdtaW51dGVzJyByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJtaW51dGVzXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmJfc3ByaW50c1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XHJcbiAgICAgICAgU3ByaW50czwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e25iX3NwcmludHN9IHBsYWNlaG9sZGVyPSdudW1iZXIgb2Ygc3ByaW50cycgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwibmJfc3ByaW50c1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IGp1c3RpZnktZW5kIG15LTgnPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYmctdHJhbnNwYXJlbnQgaG92ZXI6YmctYmx1ZS01MDAgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtd2hpdGUgcHktMiBweC00IGJvcmRlciBib3JkZXItYmx1ZS01MDAgaG92ZXI6Ym9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWRcIj5cclxuICAgICAgICBBZGQgU2Vzc2lvbjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcblxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwiYWRkX3RvX21lXCI+IFxyXG4gICAgICAgIDwvZGl2PiBcclxuICAgIDwvZGl2PiBcclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBMkUyQixHQUFJOzs7Ozs7OztzQ0FLSixHQUFNOzs7Ozs7Ozt1Q0FNTixHQUFPOzs7Ozs7OzswQ0FLUCxHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dFQXpCRSxHQUFZO3lEQUMzQixHQUFvQjt5REFDcEIsR0FBb0I7dURBQ3RCLEdBQW9COzs7OztxQ0FNZixHQUFJOzs7c0VBS0osR0FBTTt1Q0FBTixHQUFNOzs7d0VBTU4sR0FBTzt3Q0FBUCxHQUFPOzs7OEVBS1AsR0FBVTsyQ0FBVixHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0ExRnBCLE9BQU8sR0FBRyxNQUFNLEVBQUUsS0FBSztRQUMvQixJQUFJLENBQUMsS0FBSywrQkFBK0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPO1dBQ3RFLE9BQU87Ozs7O0tBTVgsS0FBSyxHQUFHLFVBQVU7S0FDbEIsSUFBSSxHQUFHLElBQUksRUFBRSxNQUFNLEdBQUcsSUFBSSxFQUFFLE9BQU8sR0FBRyxJQUFJLEVBQUUsVUFBVSxHQUFHLElBQUk7S0FDN0QsYUFBYSxHQUFHLEtBQUs7O2dCQUdYLFlBQVksQ0FBQyxLQUFLO1FBQ3ZCLElBQUksS0FBSSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVTs7UUFDL0MsS0FBSztHQUNQLE1BQU0sRUFBRSxNQUFNO0dBQ2QsT0FBTyxJQUNILGNBQWMsRUFBRSxrQkFBa0I7R0FFdEMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTs7O0VBRTdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFNBQVMsSUFDeEMsd2ZBQXdmOztNQUMxZixRQUFRLENBQUMsRUFBRTtTQUNMLE1BQU0sU0FBUyxRQUFRLENBQUMsSUFBSTtHQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNOzs7O1VBSTVCLG9CQUFvQixDQUFDLEtBQUs7TUFDM0IsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNO0VBQzFCLGFBQWEsR0FBRyxLQUFLOztNQUNqQixPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUU7R0FDbkIsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQjthQUNwQyxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVk7R0FDcEMsYUFBYSxHQUFHLElBQUk7R0FDcEIsT0FBTyxDQUFDLGlCQUFpQixDQUFDLDRCQUE0Qjs7R0FFdkQsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7OztTQUV4QixJQUFJOzs7Ozs7Ozs7Ozs7O0VBaUNRLElBQUk7Ozs7O0VBS0osTUFBTTs7Ozs7RUFNTixPQUFPOzs7OztFQUtQLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
