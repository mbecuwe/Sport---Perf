import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, C as globals, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, D as set_input_value, E as run_all, F as listen_dev, G as prevent_default, H as to_number, n as noop } from './client.9e9982cc.js';

/* src/routes/new_sessions/workout/new_workout.svelte generated by Svelte v3.22.3 */

const { console: console_1 } = globals;
const file = "src/routes/new_sessions/workout/new_workout.svelte";

function create_fragment(ctx) {
	let div5;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div4;
	let div1;
	let t1;
	let t2;
	let div3;
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
	let button;
	let t19;
	let t20;
	let br4;
	let t21;
	let div2;
	let dispose;

	const block = {
		c: function create() {
			div5 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div4 = element("div");
			div1 = element("div");
			t1 = text("Cycling New Session");
			t2 = space();
			div3 = element("div");
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
			button = element("button");
			t19 = text("Add Session");
			t20 = space();
			br4 = element("br");
			t21 = space();
			div2 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t1 = claim_text(div1_nodes, "Cycling New Session");
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			form = claim_element(div3_nodes, "FORM", {});
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
			button = claim_element(form_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t19 = claim_text(button_nodes, "Add Session");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t20 = claim_space(div3_nodes);
			br4 = claim_element(div3_nodes, "BR", {});
			t21 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { id: true });
			var div2_nodes = children(div2);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "w-full");
			if (img.src !== (img_src_value = "swimming_draw.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			add_location(img, file, 54, 4, 1960);
			attr_dev(div0, "class", " w-1/3 p-4");
			add_location(div0, file, 51, 2, 1864);
			attr_dev(div1, "class", "block uppercase text-center p-2 text-2xl font-semibold");
			add_location(div1, file, 59, 2, 2097);
			attr_dev(label0, "for", "date");
			attr_dev(label0, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label0, file, 70, 12, 2451);
			attr_dev(input0, "placeholder", "date");
			input0.required = true;
			attr_dev(input0, "type", "date");
			attr_dev(input0, "id", "date");
			attr_dev(input0, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input0, file, 73, 8, 2594);
			add_location(br0, file, 74, 12, 2794);
			attr_dev(label1, "for", "meters");
			attr_dev(label1, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label1, file, 76, 8, 2810);
			attr_dev(input1, "placeholder", "meters");
			input1.required = true;
			attr_dev(input1, "type", "number");
			attr_dev(input1, "id", "meters");
			attr_dev(input1, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input1, file, 78, 8, 2946);
			add_location(br1, file, 79, 12, 3154);
			attr_dev(label2, "for", "minutes");
			attr_dev(label2, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label2, file, 82, 8, 3171);
			attr_dev(input2, "placeholder", "minutes");
			input2.required = true;
			attr_dev(input2, "type", "number");
			attr_dev(input2, "id", "minutes");
			attr_dev(input2, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input2, file, 84, 8, 3303);
			add_location(br2, file, 85, 12, 3514);
			attr_dev(label3, "for", "elevation");
			attr_dev(label3, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2");
			add_location(label3, file, 87, 8, 3530);
			attr_dev(input3, "placeholder", "elevation");
			input3.required = true;
			attr_dev(input3, "type", "number");
			attr_dev(input3, "id", "elevation");
			attr_dev(input3, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3");
			add_location(input3, file, 89, 8, 3670);
			add_location(br3, file, 90, 12, 3887);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded");
			add_location(button, file, 92, 8, 3903);
			add_location(form, file, 63, 8, 2232);
			add_location(br4, file, 95, 12, 4135);
			attr_dev(div2, "id", "add_to_me");
			add_location(div2, file, 99, 8, 4153);
			attr_dev(div3, "class", " p-2");
			add_location(div3, file, 62, 4, 2205);
			attr_dev(div4, "class", "flex-initial w-2/3 p-2");
			add_location(div4, file, 58, 2, 2058);
			attr_dev(div5, "class", "flex ");
			add_location(div5, file, 50, 0, 1842);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div0);
			append_dev(div0, img);
			append_dev(div5, t0);
			append_dev(div5, div4);
			append_dev(div4, div1);
			append_dev(div1, t1);
			append_dev(div4, t2);
			append_dev(div4, div3);
			append_dev(div3, form);
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
			append_dev(form, button);
			append_dev(button, t19);
			append_dev(div3, t20);
			append_dev(div3, br4);
			append_dev(div3, t21);
			append_dev(div3, div2);
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
			if (detaching) detach_dev(div5);
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
	let sport = "cycling";
	let date = null, meters = null, minutes = null, elevation = null;
	let error_boolean = false;

	async function handleSubmit(event) {
		const post = { sport, date, meters, minutes, elevation };

		await fetch(`new_sessions.json`, {
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<New_workout> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("New_workout", $$slots, []);

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

class New_workout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "New_workout",
			options,
			id: create_fragment.name
		});
	}
}

export default New_workout;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X3dvcmtvdXQuZmYxMDZhMTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3X3Nlc3Npb25zL3dvcmtvdXQvbmV3X3dvcmtvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBuZXdfc2Vzc2lvbnMvc3dpbW1pbmcuanNvbmApLnRoZW4ociA9PiByLmpzb24oKSkudGhlbihvcHRpb25zID0+IHtcblx0XHRcdHJldHVybiB7IG9wdGlvbnMgfTtcblx0XHR9KTtcblx0fVx0XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBsZXQgc3BvcnQgPSAnY3ljbGluZydcbiAgICBsZXQgZGF0ZSA9IG51bGwsIG1ldGVycyA9IG51bGwsIG1pbnV0ZXMgPSBudWxsLCBlbGV2YXRpb24gPSBudWxsOyAgICBcbiAgICBsZXQgZXJyb3JfYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgIGNvbnN0IHBvc3QgPSB7c3BvcnQsIGRhdGUsIG1ldGVycywgbWludXRlcywgZWxldmF0aW9ufVxuICAgICAgICBhd2FpdCBmZXRjaChgbmV3X3Nlc3Npb25zLmpzb25gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLCBcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwb3N0KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX3RvX21lXCIpLmlubmVySFRNTCArPSAgXG4gICAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0nYmctdGVhbC0xMDAgYm9yZGVyLXQtNCBib3JkZXItdGVhbC01MDAgcm91bmRlZC1iIHRleHQtdGVhbC05MDAgcHgtNCBweS0zIHNoYWRvdy1tZCcgcm9sZT0nYWxlcnQnPjxkaXYgY2xhc3M9J2ZsZXgnPjxkaXYgY2xhc3M9J3B5LTEnPjxzdmcgY2xhc3M9J2ZpbGwtY3VycmVudCBoLTYgdy02IHRleHQtdGVhbC01MDAgbXItNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGQ9J00yLjkzIDE3LjA3QTEwIDEwIDAgMSAxIDE3LjA3IDIuOTMgMTAgMTAgMCAwIDEgMi45MyAxNy4wN3ptMTIuNzMtMS40MUE4IDggMCAxIDAgNC4zNCA0LjM0YTggOCAwIDAgMCAxMS4zMiAxMS4zMnpNOSAxMVY5aDJ2Nkg5di00em0wLTZoMnYySDlWNXonLz48L3N2Zz48L2Rpdj48ZGl2PjxwIGNsYXNzPSdmb250LWJvbGQnPlNlc3Npb24gd2FzIHN1Y2Nlc3NmdWxseSBhZGRlZDwvcD48L2Rpdj48L2Rpdj48L2Rpdj48YnIvPlwiOyBcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgZnVuY3Rpb24gdmFsaWRhdGVNZXNzYWdlRW1haWwoZXZlbnQpIHtcbiAgICAgICBsZXQgdGV4dGJveCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICBlcnJvcl9ib29sZWFuID0gZmFsc2U7XG4gICAgICAgaWYgKHRleHRib3gudmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICB0ZXh0Ym94LnNldEN1c3RvbVZhbGlkaXR5KCdOdW1iZXIgcmVxdWlyZWQnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0ZXh0Ym94LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCl7XG4gICAgICAgICAgICBlcnJvcl9ib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ3BsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuXG5cbjxkaXYgY2xhc3M9XCJmbGV4IFwiPlxuICA8ZGl2IGNsYXNzPVwiIHctMS8zIHAtNFwiPlxuXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcC0yIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj4gLS0+XG4gICAgPGltZyBjbGFzcz0ndy1mdWxsJyBzcmM9XCJzd2ltbWluZ19kcmF3LmpwZ1wiIGFsdD1cImN5Y2xpbmdcIiAgPiBcbiAgICAgICAgPCEtLSA8L2Rpdj4gLS0+XG5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJmbGV4LWluaXRpYWwgdy0yLzMgcC0yXCI+XG4gIDxkaXYgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgcC0yIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICBDeWNsaW5nIE5ldyBTZXNzaW9uXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIiBwLTJcIj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD1cIntoYW5kbGVTdWJtaXR9XCJcbiAgICAgICAgICAgIG9uOmludmFsaWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246Y2hhbmdlZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgICAgICBvbjppbnB1dD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgID5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICAgICAgRGF0ZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2RhdGV9IHBsYWNlaG9sZGVyPSdkYXRlJyByZXF1aXJlZCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1ldGVyc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIERpc3RhbmNlIChtKTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttZXRlcnN9IHBsYWNlaG9sZGVyPSdtZXRlcnMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1ldGVyc1wiIGNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zXCIvPlxuICAgICAgICAgICAgPGJyIC8+XG5cblxuICAgICAgICA8bGFiZWwgZm9yPVwibWludXRlc1wiIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCI+XG4gICAgICAgIE1pbnV0ZXM8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17bWludXRlc30gcGxhY2Vob2xkZXI9J21pbnV0ZXMnIHJlcXVpcmVkIHR5cGU9XCJudW1iZXJcIiBpZD1cIm1pbnV0ZXNcIiBjbGFzcz1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXIgYm9yZGVyIGJvcmRlci1yZWQgcm91bmRlZCBweS0zIHB4LTQgbWItM1wiLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJlbGV2YXRpb25cIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbWItMlwiPlxuICAgICAgICBFbGV2YXRpb24gKG0pPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e2VsZXZhdGlvbn0gcGxhY2Vob2xkZXI9J2VsZXZhdGlvbicgcmVxdWlyZWQgdHlwZT1cIm51bWJlclwiIGlkPVwiZWxldmF0aW9uXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcHktMyBweC00IG1iLTNcIi8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCI+XG4gICAgICAgIEFkZCBTZXNzaW9uPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxiciAvPlxuXG5cblxuICAgICAgICA8ZGl2IGlkPVwiYWRkX3RvX21lXCI+IFxuICAgICAgICA8L2Rpdj4gXG4gICAgPC9kaXY+IFxuICA8L2Rpdj5cbjwvZGl2PlxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBeUUyQixHQUFJOzs7Ozs7OztzQ0FLSixHQUFNOzs7Ozs7Ozt1Q0FNTixHQUFPOzs7Ozs7Ozt5Q0FLUCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztnRUF6QkcsR0FBWTt5REFDM0IsR0FBb0I7eURBQ3BCLEdBQW9CO3VEQUN0QixHQUFvQjs7Ozs7cUNBTWYsR0FBSTs7O3NFQUtKLEdBQU07dUNBQU4sR0FBTTs7O3dFQU1OLEdBQU87d0NBQVAsR0FBTzs7OzRFQUtQLEdBQVM7MENBQVQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXhGbkIsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxLQUFLLCtCQUErQixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87V0FDdEUsT0FBTzs7Ozs7S0FNWCxLQUFLLEdBQUcsU0FBUztLQUNqQixJQUFJLEdBQUcsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsT0FBTyxHQUFHLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSTtLQUM1RCxhQUFhLEdBQUcsS0FBSzs7Z0JBR1gsWUFBWSxDQUFDLEtBQUs7UUFDdkIsSUFBSSxLQUFJLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTOztRQUM5QyxLQUFLO0dBQ1AsTUFBTSxFQUFFLE1BQU07R0FDZCxPQUFPLElBQ0gsY0FBYyxFQUFFLGtCQUFrQjtHQUV0QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJOzs7RUFFN0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxJQUN4Qyx3ZkFBd2Y7O01BQzFmLFFBQVEsQ0FBQyxFQUFFO1NBQ0wsTUFBTSxTQUFTLFFBQVEsQ0FBQyxJQUFJO0dBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU07Ozs7VUFJNUIsb0JBQW9CLENBQUMsS0FBSztNQUMzQixPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU07RUFDMUIsYUFBYSxHQUFHLEtBQUs7O01BQ2pCLE9BQU8sQ0FBQyxLQUFLLEtBQUssRUFBRTtHQUNuQixPQUFPLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCO2FBQ3BDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWTtHQUNwQyxhQUFhLEdBQUcsSUFBSTtHQUNwQixPQUFPLENBQUMsaUJBQWlCLENBQUMsNEJBQTRCOztHQUV2RCxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRTs7O1NBRXhCLElBQUk7Ozs7Ozs7Ozs7Ozs7RUErQlEsSUFBSTs7Ozs7RUFLSixNQUFNOzs7OztFQU1OLE9BQU87Ozs7O0VBS1AsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
