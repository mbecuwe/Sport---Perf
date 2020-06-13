import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as validate_slots, r as globals, e as element, b as space, t as text, c as claim_element, f as children, g as detach_dev, h as claim_space, j as claim_text, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, u as set_input_value, w as run_all, x as listen_dev, y as prevent_default, z as to_number, o as noop } from './client.09cfed00.js';

/* src/routes/new_sessions/running/new_running.svelte generated by Svelte v3.22.3 */

const { console: console_1 } = globals;
const file = "src/routes/new_sessions/running/new_running.svelte";

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
			t1 = text("Running Performance");
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
			t15 = text("Elevation (m)");
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
			t1 = claim_text(div1_nodes, "Running Performance");
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
			t15 = claim_text(label3_nodes, "Elevation (m)");
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
			if (img.src !== (img_src_value = "running1.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			attr_dev(img, "class", "object-cover h-48 w-full shadow rounded-md");
			add_location(img, file, 51, 8, 1907);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 50, 4, 1872);
			attr_dev(div1, "class", "font-sans Arial text-center p-2 text-3xl text-blue-700 font-semibold bg-blue-100 px-8 tracking-widest");
			add_location(div1, file, 55, 8, 2121);
			attr_dev(div2, "class", "flex justify-center mb-16 bg-blue-700 border-2 border-gray-300 shadow-lg rounded-t-md");
			add_location(div2, file, 54, 4, 2013);
			attr_dev(div3, "class", "mb-20");
			add_location(div3, file, 48, 0, 1847);
			attr_dev(label0, "for", "date");
			attr_dev(label0, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label0, file, 72, 12, 2642);
			attr_dev(input0, "placeholder", "date");
			input0.required = true;
			attr_dev(input0, "type", "date");
			attr_dev(input0, "id", "date");
			attr_dev(input0, "class", "text-center appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input0, file, 75, 8, 2785);
			add_location(br0, file, 76, 12, 2997);
			attr_dev(label1, "for", "meters");
			attr_dev(label1, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label1, file, 78, 8, 3013);
			attr_dev(input1, "placeholder", "meters");
			input1.required = true;
			attr_dev(input1, "type", "number");
			attr_dev(input1, "id", "meters");
			attr_dev(input1, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input1, file, 80, 8, 3149);
			add_location(br1, file, 81, 12, 3357);
			attr_dev(label2, "for", "minutes");
			attr_dev(label2, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label2, file, 84, 8, 3374);
			attr_dev(input2, "placeholder", "minutes");
			input2.required = true;
			attr_dev(input2, "type", "number");
			attr_dev(input2, "id", "minutes");
			attr_dev(input2, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input2, file, 86, 8, 3506);
			add_location(br2, file, 87, 12, 3717);
			attr_dev(label3, "for", "elevation");
			attr_dev(label3, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label3, file, 89, 8, 3733);
			attr_dev(input3, "placeholder", "elevation");
			input3.required = true;
			attr_dev(input3, "type", "number");
			attr_dev(input3, "id", "elevation");
			attr_dev(input3, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input3, file, 91, 8, 3873);
			add_location(br3, file, 92, 12, 4090);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded");
			add_location(button, file, 96, 8, 4177);
			attr_dev(div4, "class", "flex");
			add_location(div4, file, 95, 8, 4150);
			attr_dev(div5, "class", "flex justify-end my-8");
			add_location(div5, file, 94, 8, 4106);
			add_location(form, file, 65, 8, 2423);
			add_location(br4, file, 101, 12, 4447);
			attr_dev(div6, "id", "add_to_me");
			add_location(div6, file, 105, 8, 4465);
			attr_dev(div7, "class", " p-2");
			add_location(div7, file, 64, 4, 2396);
			attr_dev(div8, "class", "flex-initial w-2/3 p-2");
			add_location(div8, file, 62, 2, 2354);
			attr_dev(div9, "class", "flex justify-center text-blue-700 ");
			add_location(div9, file, 61, 0, 2303);
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
			set_input_value(input3, /*elevation*/ ctx[3]);
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

			if (dirty & /*elevation*/ 8 && to_number(input3.value) !== /*elevation*/ ctx[3]) {
				set_input_value(input3, /*elevation*/ ctx[3]);
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
	return this.fetch(`new_sessions/running.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

function instance($$self, $$props, $$invalidate) {
	let sport = "running";
	let date = null, meters = null, minutes = null, elevation = null;
	let error_boolean = false;

	async function handleSubmit(event) {
		const post = { sport, date, meters, minutes, elevation };

		await fetch(`new_sessions/running.json`, {
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<New_running> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("New_running", $$slots, []);

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
		elevation = to_number(this.value);
		$$invalidate(3, elevation);
	}

	$$self.$capture_state = () => ({
		preload,
		sport,
		date,
		meters,
		minutes,
		elevation,
		error_boolean,
		handleSubmit,
		validateMessageEmail
	});

	$$self.$inject_state = $$props => {
		if ("sport" in $$props) sport = $$props.sport;
		if ("date" in $$props) $$invalidate(0, date = $$props.date);
		if ("meters" in $$props) $$invalidate(1, meters = $$props.meters);
		if ("minutes" in $$props) $$invalidate(2, minutes = $$props.minutes);
		if ("elevation" in $$props) $$invalidate(3, elevation = $$props.elevation);
		if ("error_boolean" in $$props) error_boolean = $$props.error_boolean;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		date,
		meters,
		minutes,
		elevation,
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

class New_running extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "New_running",
			options,
			id: create_fragment.name
		});
	}
}

export default New_running;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X3J1bm5pbmcuMjBkMjQ4ZDQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3X3Nlc3Npb25zL3J1bm5pbmcvbmV3X3J1bm5pbmcuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBuZXdfc2Vzc2lvbnMvcnVubmluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKG9wdGlvbnMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgb3B0aW9ucyB9O1xuXHRcdH0pO1xuXHR9XHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGxldCBzcG9ydCA9ICdydW5uaW5nJ1xuICAgIGxldCBkYXRlID0gbnVsbCwgbWV0ZXJzID0gbnVsbCwgbWludXRlcyA9IG51bGwsIGVsZXZhdGlvbiA9IG51bGw7ICAgIFxuICAgIGxldCBlcnJvcl9ib29sZWFuID0gZmFsc2U7XG5cblxuICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgY29uc3QgcG9zdCA9IHtzcG9ydCwgZGF0ZSwgbWV0ZXJzLCBtaW51dGVzLCBlbGV2YXRpb259XG4gICAgICAgIGF3YWl0IGZldGNoKGBuZXdfc2Vzc2lvbnMvcnVubmluZy5qc29uYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF90b19tZVwiKS5pbm5lckhUTUwgKz0gIFxuICAgICAgICAgICAgICBcIjxkaXYgY2xhc3M9J2JnLXRlYWwtMTAwIGJvcmRlci10LTQgYm9yZGVyLXRlYWwtNTAwIHJvdW5kZWQtYiB0ZXh0LXRlYWwtOTAwIHB4LTQgcHktMyBzaGFkb3ctbWQnIHJvbGU9J2FsZXJ0Jz48ZGl2IGNsYXNzPSdmbGV4Jz48ZGl2IGNsYXNzPSdweS0xJz48c3ZnIGNsYXNzPSdmaWxsLWN1cnJlbnQgaC02IHctNiB0ZXh0LXRlYWwtNTAwIG1yLTQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDIwIDIwJz48cGF0aCBkPSdNMi45MyAxNy4wN0ExMCAxMCAwIDEgMSAxNy4wNyAyLjkzIDEwIDEwIDAgMCAxIDIuOTMgMTcuMDd6bTEyLjczLTEuNDFBOCA4IDAgMSAwIDQuMzQgNC4zNGE4IDggMCAwIDAgMTEuMzIgMTEuMzJ6TTkgMTFWOWgydjZIOXYtNHptMC02aDJ2Mkg5VjV6Jy8+PC9zdmc+PC9kaXY+PGRpdj48cCBjbGFzcz0nZm9udC1ib2xkJz5TZXNzaW9uIHdhcyBzdWNjZXNzZnVsbHkgYWRkZWQ8L3A+PC9kaXY+PC9kaXY+PC9kaXY+PGJyLz5cIjsgXG4gICAgICAgIGlmIChyZXNwb25zZS5vayl7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgIGZ1bmN0aW9uIHZhbGlkYXRlTWVzc2FnZUVtYWlsKGV2ZW50KSB7XG4gICAgICAgbGV0IHRleHRib3ggPSBldmVudC50YXJnZXQ7XG4gICAgICAgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgIGlmICh0ZXh0Ym94LnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnTnVtYmVyIHJlcXVpcmVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGV4dGJveC52YWxpZGl0eS50eXBlTWlzbWF0Y2gpe1xuICAgICAgICAgICAgZXJyb3JfYm9vbGVhbiA9IHRydWU7XG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdwbGVhc2UgZW50ZXIgYSB2YWxpZCBpbnB1dCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG48L3NjcmlwdD5cblxuXG5cbjxkaXYgY2xhc3M9XCJtYi0yMFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cIm1iLTYgc2hhZG93IFwiPlxuICAgICAgICA8aW1nIHNyYz1cInJ1bm5pbmcxLmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiBjbGFzcz1cIm9iamVjdC1jb3ZlciBoLTQ4IHctZnVsbCBzaGFkb3cgcm91bmRlZC1tZFwiPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgbWItMTYgYmctYmx1ZS03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHNoYWRvdy1sZyByb3VuZGVkLXQtbWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtc2FucyBBcmlhbCB0ZXh0LWNlbnRlciBwLTIgdGV4dC0zeGwgdGV4dC1ibHVlLTcwMCBmb250LXNlbWlib2xkIGJnLWJsdWUtMTAwIHB4LTggdHJhY2tpbmctd2lkZXN0XCI+XG4gICAgICAgICAgICBSdW5uaW5nIFBlcmZvcm1hbmNlXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtYmx1ZS03MDAgXCI+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0yLzMgcC0yXCI+XG5cbiAgICA8ZGl2IGNsYXNzPVwiIHAtMlwiPlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgb246c3VibWl0fHByZXZlbnREZWZhdWx0PVwie2hhbmRsZVN1Ym1pdH1cIlxuICAgICAgICAgICAgb246aW52YWxpZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgICAgICBvbjpjaGFuZ2VkPXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cbiAgICAgICAgICAgIG9uOmlucHV0PXt2YWxpZGF0ZU1lc3NhZ2VFbWFpbH1cbiAgICAgICAgPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgICAgICBEYXRlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZGF0ZX0gcGxhY2Vob2xkZXI9J2RhdGUnIHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICA8bGFiZWwgZm9yPVwibWV0ZXJzXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgRGlzdGFuY2UgKG0pPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e21ldGVyc30gcGxhY2Vob2xkZXI9J21ldGVycycgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwibWV0ZXJzXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJtaW51dGVzXCIgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyZXktZGFya2VyIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIj5cbiAgICAgICAgTWludXRlczwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttaW51dGVzfSBwbGFjZWhvbGRlcj0nbWludXRlcycgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwibWludXRlc1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cImVsZXZhdGlvblwiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIEVsZXZhdGlvbiAobSk8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZWxldmF0aW9ufSBwbGFjZWhvbGRlcj0nZWxldmF0aW9uJyByZXF1aXJlZCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJlbGV2YXRpb25cIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgganVzdGlmeS1lbmQgbXktOCc+XG4gICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgnPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCI+XG4gICAgICAgIEFkZCBTZXNzaW9uPC9idXR0b24+XG4gICAgICAgIDwvZGl2PiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnIgLz5cblxuXG5cbiAgICAgICAgPGRpdiBpZD1cImFkZF90b19tZVwiPiBcbiAgICAgICAgPC9kaXY+IFxuICAgIDwvZGl2PiBcbiAgPC9kaXY+XG48L2Rpdj5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQTJFMkIsR0FBSTs7Ozs7Ozs7c0NBS0osR0FBTTs7Ozs7Ozs7dUNBTU4sR0FBTzs7Ozs7Ozs7eUNBS1AsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRUF6QkcsR0FBWTt5REFDM0IsR0FBb0I7eURBQ3BCLEdBQW9CO3VEQUN0QixHQUFvQjs7Ozs7cUNBTWYsR0FBSTs7O3NFQUtKLEdBQU07dUNBQU4sR0FBTTs7O3dFQU1OLEdBQU87d0NBQVAsR0FBTzs7OzRFQUtQLEdBQVM7MENBQVQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBMUZuQixPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7UUFDL0IsSUFBSSxDQUFDLEtBQUssOEJBQThCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTztXQUNyRSxPQUFPOzs7OztLQU1YLEtBQUssR0FBRyxTQUFTO0tBQ2pCLElBQUksR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLElBQUksRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJO0tBQzVELGFBQWEsR0FBRyxLQUFLOztnQkFHWCxZQUFZLENBQUMsS0FBSztRQUN2QixJQUFJLEtBQUksS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVM7O1FBQzlDLEtBQUs7R0FDUCxNQUFNLEVBQUUsTUFBTTtHQUNkLE9BQU8sSUFDSCxjQUFjLEVBQUUsa0JBQWtCO0dBRXRDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7OztFQUU3QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxTQUFTLElBQ3hDLHdmQUF3Zjs7TUFDMWYsUUFBUSxDQUFDLEVBQUU7U0FDTCxNQUFNLFNBQVMsUUFBUSxDQUFDLElBQUk7R0FDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTTs7OztVQUk1QixvQkFBb0IsQ0FBQyxLQUFLO01BQzNCLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTTtFQUMxQixhQUFhLEdBQUcsS0FBSzs7TUFDakIsT0FBTyxDQUFDLEtBQUssS0FBSyxFQUFFO0dBQ25CLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUI7YUFDcEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZO0dBQ3BDLGFBQWEsR0FBRyxJQUFJO0dBQ3BCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyw0QkFBNEI7O0dBRXZELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFOzs7U0FFeEIsSUFBSTs7Ozs7Ozs7Ozs7OztFQWlDUSxJQUFJOzs7OztFQUtKLE1BQU07Ozs7O0VBTU4sT0FBTzs7Ozs7RUFLUCxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
