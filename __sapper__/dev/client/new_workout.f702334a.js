import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, C as globals, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, D as set_input_value, E as run_all, F as listen_dev, G as prevent_default, H as to_number, n as noop } from './client.143c30bd.js';

/* src/routes/new_sessions/workout/new_workout.svelte generated by Svelte v3.22.3 */

const { console: console_1 } = globals;
const file = "src/routes/new_sessions/workout/new_workout.svelte";

function create_fragment(ctx) {
	let div11;
	let div0;
	let img;
	let img_src_value;
	let t0;
	let div10;
	let div1;
	let t1;
	let t2;
	let div9;
	let form;
	let div3;
	let label0;
	let t3;
	let t4;
	let div2;
	let input0;
	let t5;
	let br0;
	let t6;
	let label1;
	let t7;
	let t8;
	let div6;
	let label2;
	let t9;
	let t10;
	let div4;
	let input1;
	let t11;
	let div5;
	let input2;
	let t12;
	let div7;
	let button;
	let t13;
	let t14;
	let br1;
	let t15;
	let div8;
	let dispose;

	const block = {
		c: function create() {
			div11 = element("div");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div10 = element("div");
			div1 = element("div");
			t1 = text("Workout New Session");
			t2 = space();
			div9 = element("div");
			form = element("form");
			div3 = element("div");
			label0 = element("label");
			t3 = text("Date");
			t4 = space();
			div2 = element("div");
			input0 = element("input");
			t5 = space();
			br0 = element("br");
			t6 = space();
			label1 = element("label");
			t7 = text("Legs");
			t8 = space();
			div6 = element("div");
			label2 = element("label");
			t9 = text("Squats");
			t10 = space();
			div4 = element("div");
			input1 = element("input");
			t11 = space();
			div5 = element("div");
			input2 = element("input");
			t12 = space();
			div7 = element("div");
			button = element("button");
			t13 = text("Add Session");
			t14 = space();
			br1 = element("br");
			t15 = space();
			div8 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div11 = claim_element(nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div0 = claim_element(div11_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			div1 = claim_element(div10_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t1 = claim_text(div1_nodes, "Workout New Session");
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div10_nodes);
			div9 = claim_element(div10_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			form = claim_element(div9_nodes, "FORM", {});
			var form_nodes = children(form);
			div3 = claim_element(form_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			label0 = claim_element(div3_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = children(label0);
			t3 = claim_text(label0_nodes, "Date");
			label0_nodes.forEach(detach_dev);
			t4 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);

			input0 = claim_element(div2_nodes, "INPUT", {
				placeholder: true,
				required: true,
				type: true,
				id: true,
				class: true
			});

			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t5 = claim_space(form_nodes);
			br0 = claim_element(form_nodes, "BR", {});
			t6 = claim_space(form_nodes);
			label1 = claim_element(form_nodes, "LABEL", { class: true });
			var label1_nodes = children(label1);
			t7 = claim_text(label1_nodes, "Legs");
			label1_nodes.forEach(detach_dev);
			t8 = claim_space(form_nodes);
			div6 = claim_element(form_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			label2 = claim_element(div6_nodes, "LABEL", { class: true });
			var label2_nodes = children(label2);
			t9 = claim_text(label2_nodes, "Squats");
			label2_nodes.forEach(detach_dev);
			t10 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);

			input1 = claim_element(div4_nodes, "INPUT", {
				placeholder: true,
				type: true,
				class: true
			});

			div4_nodes.forEach(detach_dev);
			t11 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);

			input2 = claim_element(div5_nodes, "INPUT", {
				placeholder: true,
				type: true,
				class: true
			});

			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t12 = claim_space(form_nodes);
			div7 = claim_element(form_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			button = claim_element(div7_nodes, "BUTTON", { type: true, class: true });
			var button_nodes = children(button);
			t13 = claim_text(button_nodes, "Add Session");
			button_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t14 = claim_space(div9_nodes);
			br1 = claim_element(div9_nodes, "BR", {});
			t15 = claim_space(div9_nodes);
			div8 = claim_element(div9_nodes, "DIV", { id: true });
			var div8_nodes = children(div8);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(img, "class", "w-full");
			if (img.src !== (img_src_value = "workout_draw.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			add_location(img, file, 111, 4, 4368);
			attr_dev(div0, "class", " w-1/3 p-4");
			add_location(div0, file, 108, 2, 4272);
			attr_dev(div1, "class", "block uppercase text-center p-2 text-2xl font-semibold mb-5");
			add_location(div1, file, 116, 2, 4504);
			attr_dev(label0, "for", "date");
			attr_dev(label0, "class", "block uppercase tracking-wide text-grey-darker text-xs font-bold m-2 p-2");
			add_location(label0, file, 128, 16, 4901);
			attr_dev(input0, "placeholder", "date");
			input0.required = true;
			attr_dev(input0, "type", "date");
			attr_dev(input0, "id", "date");
			attr_dev(input0, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2 m-2");
			add_location(input0, file, 132, 21, 5105);
			attr_dev(div2, "class", "flex-1");
			add_location(div2, file, 131, 16, 5063);
			attr_dev(div3, "class", "flex");
			add_location(div3, file, 127, 12, 4866);
			add_location(br0, file, 135, 12, 5345);
			attr_dev(label1, "class", "block uppercase p-2 tracking-wide text-grey-darker text-xl font-bold m-2");
			add_location(label1, file, 137, 12, 5365);
			attr_dev(label2, "class", "block uppercase p-2 tracking-wide text-grey-darker text-xs font-bold m-3");
			add_location(label2, file, 141, 16, 5535);
			attr_dev(input1, "placeholder", "series");
			attr_dev(input1, "type", "number");
			attr_dev(input1, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2");
			add_location(input1, file, 145, 20, 5741);
			attr_dev(div4, "class", "flex w-1/2 m-2");
			add_location(div4, file, 144, 16, 5692);
			attr_dev(input2, "placeholder", "repetitions");
			attr_dev(input2, "type", "number");
			attr_dev(input2, "class", "appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded p-2");
			add_location(input2, file, 148, 20, 6000);
			attr_dev(div5, "class", "flex w-1/2 m-2");
			add_location(div5, file, 147, 16, 5951);
			attr_dev(div6, "class", "flex");
			add_location(div6, file, 140, 12, 5500);
			attr_dev(button, "type", "submit");
			attr_dev(button, "class", "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded");
			add_location(button, file, 159, 8, 6263);
			attr_dev(div7, "class", "content-center");
			add_location(div7, file, 158, 8, 6226);
			add_location(form, file, 120, 8, 4644);
			add_location(br1, file, 165, 12, 6520);
			attr_dev(div8, "id", "add_to_me");
			add_location(div8, file, 169, 8, 6538);
			attr_dev(div9, "class", " p-2");
			add_location(div9, file, 119, 4, 4617);
			attr_dev(div10, "class", "flex-initial w-2/3 p-2");
			add_location(div10, file, 115, 2, 4465);
			attr_dev(div11, "class", "flex ");
			add_location(div11, file, 107, 0, 4250);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, div11, anchor);
			append_dev(div11, div0);
			append_dev(div0, img);
			append_dev(div11, t0);
			append_dev(div11, div10);
			append_dev(div10, div1);
			append_dev(div1, t1);
			append_dev(div10, t2);
			append_dev(div10, div9);
			append_dev(div9, form);
			append_dev(form, div3);
			append_dev(div3, label0);
			append_dev(label0, t3);
			append_dev(div3, t4);
			append_dev(div3, div2);
			append_dev(div2, input0);
			set_input_value(input0, /*date*/ ctx[0]);
			append_dev(form, t5);
			append_dev(form, br0);
			append_dev(form, t6);
			append_dev(form, label1);
			append_dev(label1, t7);
			append_dev(form, t8);
			append_dev(form, div6);
			append_dev(div6, label2);
			append_dev(label2, t9);
			append_dev(div6, t10);
			append_dev(div6, div4);
			append_dev(div4, input1);
			set_input_value(input1, /*meters*/ ctx[1]);
			append_dev(div6, t11);
			append_dev(div6, div5);
			append_dev(div5, input2);
			set_input_value(input2, /*meters*/ ctx[1]);
			append_dev(form, t12);
			append_dev(form, div7);
			append_dev(div7, button);
			append_dev(button, t13);
			append_dev(div9, t14);
			append_dev(div9, br1);
			append_dev(div9, t15);
			append_dev(div9, div8);
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(input0, "input", /*input0_input_handler*/ ctx[39]),
				listen_dev(input1, "input", /*input1_input_handler*/ ctx[40]),
				listen_dev(input2, "input", /*input2_input_handler*/ ctx[41]),
				listen_dev(form, "submit", prevent_default(/*handleSubmit*/ ctx[2]), false, true, false),
				listen_dev(form, "invalid", /*validateMessageEmail*/ ctx[3], false, false, false),
				listen_dev(form, "changed", /*validateMessageEmail*/ ctx[3], false, false, false),
				listen_dev(form, "input", /*validateMessageEmail*/ ctx[3], false, false, false)
			];
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*date*/ 1) {
				set_input_value(input0, /*date*/ ctx[0]);
			}

			if (dirty[0] & /*meters*/ 2 && to_number(input1.value) !== /*meters*/ ctx[1]) {
				set_input_value(input1, /*meters*/ ctx[1]);
			}

			if (dirty[0] & /*meters*/ 2 && to_number(input2.value) !== /*meters*/ ctx[1]) {
				set_input_value(input2, /*meters*/ ctx[1]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div11);
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
	return this.fetch(`new_sessions/workout.json`).then(r => r.json()).then(options => {
		return { options };
	});
}

function instance($$self, $$props, $$invalidate) {
	let sport = "workout";
	let date = null, meters = null, minutes = null, elevation = null;
	let error_boolean = false;
	let squats_series = null;
	let stair_climbs_series = null;
	let bench_climbs_series = null;
	let leg_press_series = null;
	let pushups_series = null;
	let pushups_lateral_series = null;
	let pushups_jumping_series = null;
	let pushups_closing_series = null;
	let pushups_raised_series = null;
	let abdominal_series = null;
	let abdominal_lateral_series = null;
	let abdominal_core_series = null;
	let bench_series = null;
	let biceps_weight_series = null;
	let pullups_series = null;
	let squats_number = null;
	let stair_climbs_number = null;
	let bench_climbs_number = null;
	let leg_press_number = null;
	let pushups_number = null;
	let pushups_lateral_number = null;
	let pushups_jumping_number = null;
	let pushups_closing_number = null;
	let pushups_raised_number = null;
	let abdominal_number = null;
	let abdominal_lateral_number = null;
	let abdominal_core_number = null;
	let bench_number = null;
	let biceps_weight_number = null;
	let pullups_number = null;

	const workout_exercise = [
		{
			"name": "Squats",
			"features": ["Series", "Number"],
			"group": "Legs"
		},
		{
			"name": "Stair Climbs",
			"features": ["Series", "Number"],
			"group": "Legs"
		},
		{
			"name": "Bench Climbs",
			"features": ["Series", "Number"],
			"group": "Legs"
		},
		{
			"name": "Leg Press",
			"features": ["Series", "Number"],
			"group": "Legs"
		},
		{
			"name": "Push-Ups",
			"features": ["Series", "Number"],
			"group": "Push-Ups"
		},
		{
			"name": "Lateral Push-Ups",
			"features": ["Series", "Number"],
			"group": "Push-Ups"
		},
		{
			"name": "Jumping Push-Ups",
			"features": ["Series", "Number"],
			"group": "Push-Ups"
		},
		{
			"name": "Close Push-Ups",
			"features": ["Series", "Number"],
			"group": "Push-Ups"
		},
		{
			"name": "Raised Push-Ups",
			"features": ["Series", "Number"],
			"group": "Push-Ups"
		},
		{
			"name": "Abdominal",
			"features": ["Series", "Number"],
			"group": "Abdominals"
		},
		{
			"name": "Abdominal Lateral",
			"features": ["Series", "Number"],
			"group": "Abdominals"
		},
		{
			"name": "Core Abdominal",
			"features": ["Series", "Number"],
			"group": "Abdominals"
		},
		{
			"name": "Bench",
			"features": ["Series", "Number"],
			"group": "Weight"
		},
		{
			"name": "Biceps Weight",
			"features": ["Series", "Number"],
			"group": "Weight"
		},
		{
			"name": "Pull-Ups",
			"features": ["Series", "Number"],
			"group": "Pull-Ups"
		}
	];

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
		meters = to_number(this.value);
		$$invalidate(1, meters);
	}

	$$self.$capture_state = () => ({
		preload,
		sport,
		date,
		meters,
		minutes,
		elevation,
		error_boolean,
		squats_series,
		stair_climbs_series,
		bench_climbs_series,
		leg_press_series,
		pushups_series,
		pushups_lateral_series,
		pushups_jumping_series,
		pushups_closing_series,
		pushups_raised_series,
		abdominal_series,
		abdominal_lateral_series,
		abdominal_core_series,
		bench_series,
		biceps_weight_series,
		pullups_series,
		squats_number,
		stair_climbs_number,
		bench_climbs_number,
		leg_press_number,
		pushups_number,
		pushups_lateral_number,
		pushups_jumping_number,
		pushups_closing_number,
		pushups_raised_number,
		abdominal_number,
		abdominal_lateral_number,
		abdominal_core_number,
		bench_number,
		biceps_weight_number,
		pullups_number,
		workout_exercise,
		handleSubmit,
		validateMessageEmail
	});

	$$self.$inject_state = $$props => {
		if ("sport" in $$props) sport = $$props.sport;
		if ("date" in $$props) $$invalidate(0, date = $$props.date);
		if ("meters" in $$props) $$invalidate(1, meters = $$props.meters);
		if ("minutes" in $$props) minutes = $$props.minutes;
		if ("elevation" in $$props) elevation = $$props.elevation;
		if ("error_boolean" in $$props) error_boolean = $$props.error_boolean;
		if ("squats_series" in $$props) squats_series = $$props.squats_series;
		if ("stair_climbs_series" in $$props) stair_climbs_series = $$props.stair_climbs_series;
		if ("bench_climbs_series" in $$props) bench_climbs_series = $$props.bench_climbs_series;
		if ("leg_press_series" in $$props) leg_press_series = $$props.leg_press_series;
		if ("pushups_series" in $$props) pushups_series = $$props.pushups_series;
		if ("pushups_lateral_series" in $$props) pushups_lateral_series = $$props.pushups_lateral_series;
		if ("pushups_jumping_series" in $$props) pushups_jumping_series = $$props.pushups_jumping_series;
		if ("pushups_closing_series" in $$props) pushups_closing_series = $$props.pushups_closing_series;
		if ("pushups_raised_series" in $$props) pushups_raised_series = $$props.pushups_raised_series;
		if ("abdominal_series" in $$props) abdominal_series = $$props.abdominal_series;
		if ("abdominal_lateral_series" in $$props) abdominal_lateral_series = $$props.abdominal_lateral_series;
		if ("abdominal_core_series" in $$props) abdominal_core_series = $$props.abdominal_core_series;
		if ("bench_series" in $$props) bench_series = $$props.bench_series;
		if ("biceps_weight_series" in $$props) biceps_weight_series = $$props.biceps_weight_series;
		if ("pullups_series" in $$props) pullups_series = $$props.pullups_series;
		if ("squats_number" in $$props) squats_number = $$props.squats_number;
		if ("stair_climbs_number" in $$props) stair_climbs_number = $$props.stair_climbs_number;
		if ("bench_climbs_number" in $$props) bench_climbs_number = $$props.bench_climbs_number;
		if ("leg_press_number" in $$props) leg_press_number = $$props.leg_press_number;
		if ("pushups_number" in $$props) pushups_number = $$props.pushups_number;
		if ("pushups_lateral_number" in $$props) pushups_lateral_number = $$props.pushups_lateral_number;
		if ("pushups_jumping_number" in $$props) pushups_jumping_number = $$props.pushups_jumping_number;
		if ("pushups_closing_number" in $$props) pushups_closing_number = $$props.pushups_closing_number;
		if ("pushups_raised_number" in $$props) pushups_raised_number = $$props.pushups_raised_number;
		if ("abdominal_number" in $$props) abdominal_number = $$props.abdominal_number;
		if ("abdominal_lateral_number" in $$props) abdominal_lateral_number = $$props.abdominal_lateral_number;
		if ("abdominal_core_number" in $$props) abdominal_core_number = $$props.abdominal_core_number;
		if ("bench_number" in $$props) bench_number = $$props.bench_number;
		if ("biceps_weight_number" in $$props) biceps_weight_number = $$props.biceps_weight_number;
		if ("pullups_number" in $$props) pullups_number = $$props.pullups_number;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		date,
		meters,
		handleSubmit,
		validateMessageEmail,
		error_boolean,
		sport,
		minutes,
		elevation,
		squats_series,
		stair_climbs_series,
		bench_climbs_series,
		leg_press_series,
		pushups_series,
		pushups_lateral_series,
		pushups_jumping_series,
		pushups_closing_series,
		pushups_raised_series,
		abdominal_series,
		abdominal_lateral_series,
		abdominal_core_series,
		bench_series,
		biceps_weight_series,
		pullups_series,
		squats_number,
		stair_climbs_number,
		bench_climbs_number,
		leg_press_number,
		pushups_number,
		pushups_lateral_number,
		pushups_jumping_number,
		pushups_closing_number,
		pushups_raised_number,
		abdominal_number,
		abdominal_lateral_number,
		abdominal_core_number,
		bench_number,
		biceps_weight_number,
		pullups_number,
		workout_exercise,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler
	];
}

class New_workout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {}, [-1, -1]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X3dvcmtvdXQuZjcwMjMzNGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvbmV3X3Nlc3Npb25zL3dvcmtvdXQvbmV3X3dvcmtvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBuZXdfc2Vzc2lvbnMvd29ya291dC5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKG9wdGlvbnMgPT4ge1xuXHRcdFx0cmV0dXJuIHsgb3B0aW9ucyB9O1xuXHRcdH0pO1xuXHR9XHRcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGxldCBzcG9ydCA9ICd3b3Jrb3V0J1xuXG4gICAgbGV0IGRhdGUgPSBudWxsLCBtZXRlcnMgPSBudWxsLCBtaW51dGVzID0gbnVsbCwgZWxldmF0aW9uID0gbnVsbDsgICAgXG4gICAgbGV0IGVycm9yX2Jvb2xlYW4gPSBmYWxzZTtcblxuICAgIGxldCBzcXVhdHNfc2VyaWVzID0gbnVsbDtcbiAgICBsZXQgc3RhaXJfY2xpbWJzX3NlcmllcyA9IG51bGw7XG4gICAgbGV0IGJlbmNoX2NsaW1ic19zZXJpZXMgPSBudWxsO1xuICAgIGxldCBsZWdfcHJlc3Nfc2VyaWVzID0gbnVsbDtcbiAgICBsZXQgcHVzaHVwc19zZXJpZXMgPSBudWxsO1xuICAgIGxldCBwdXNodXBzX2xhdGVyYWxfc2VyaWVzID0gbnVsbDtcbiAgICBsZXQgcHVzaHVwc19qdW1waW5nX3NlcmllcyA9IG51bGw7XG4gICAgbGV0IHB1c2h1cHNfY2xvc2luZ19zZXJpZXMgPSBudWxsO1xuICAgIGxldCBwdXNodXBzX3JhaXNlZF9zZXJpZXMgPSBudWxsO1xuICAgIGxldCBhYmRvbWluYWxfc2VyaWVzID0gbnVsbDtcbiAgICBsZXQgYWJkb21pbmFsX2xhdGVyYWxfc2VyaWVzID0gbnVsbDtcbiAgICBsZXQgYWJkb21pbmFsX2NvcmVfc2VyaWVzID0gbnVsbDtcbiAgICBsZXQgYmVuY2hfc2VyaWVzID0gbnVsbDtcbiAgICBsZXQgYmljZXBzX3dlaWdodF9zZXJpZXMgPSBudWxsO1xuICAgIGxldCBwdWxsdXBzX3NlcmllcyA9IG51bGw7XG5cbiAgICBsZXQgc3F1YXRzX251bWJlciA9IG51bGw7XG4gICAgbGV0IHN0YWlyX2NsaW1ic19udW1iZXIgPSBudWxsO1xuICAgIGxldCBiZW5jaF9jbGltYnNfbnVtYmVyID0gbnVsbDtcbiAgICBsZXQgbGVnX3ByZXNzX251bWJlciA9IG51bGw7XG4gICAgbGV0IHB1c2h1cHNfbnVtYmVyID0gbnVsbDtcbiAgICBsZXQgcHVzaHVwc19sYXRlcmFsX251bWJlciA9IG51bGw7XG4gICAgbGV0IHB1c2h1cHNfanVtcGluZ19udW1iZXIgPSBudWxsO1xuICAgIGxldCBwdXNodXBzX2Nsb3NpbmdfbnVtYmVyID0gbnVsbDtcbiAgICBsZXQgcHVzaHVwc19yYWlzZWRfbnVtYmVyID0gbnVsbDtcbiAgICBsZXQgYWJkb21pbmFsX251bWJlciA9IG51bGw7XG4gICAgbGV0IGFiZG9taW5hbF9sYXRlcmFsX251bWJlciA9IG51bGw7XG4gICAgbGV0IGFiZG9taW5hbF9jb3JlX251bWJlciA9IG51bGw7XG4gICAgbGV0IGJlbmNoX251bWJlciA9IG51bGw7XG4gICAgbGV0IGJpY2Vwc193ZWlnaHRfbnVtYmVyID0gbnVsbDtcbiAgICBsZXQgcHVsbHVwc19udW1iZXIgPSBudWxsO1xuICAgIFxuICAgICAgICBjb25zdCB3b3Jrb3V0X2V4ZXJjaXNlID0gW1xuICAgIHsnbmFtZSc6ICdTcXVhdHMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIHsnbmFtZSc6ICdTdGFpciBDbGltYnMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIHsnbmFtZSc6ICdCZW5jaCBDbGltYnMnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIHsnbmFtZSc6ICdMZWcgUHJlc3MnLCAnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnTGVncyd9LFxuICAgIFxuICAgIHsnbmFtZSc6ICdQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnTGF0ZXJhbCBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0p1bXBpbmcgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdDbG9zZSBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ1JhaXNlZCBQdXNoLVVwcycsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG5cbiAgICB7J25hbWUnOiAnQWJkb21pbmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnQWJkb21pbmFscyd9LFxuICAgIHsnbmFtZSc6ICdBYmRvbWluYWwgTGF0ZXJhbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0FiZG9taW5hbHMnfSxcbiAgICB7J25hbWUnOiAnQ29yZSBBYmRvbWluYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgXG4gICAgXG4gICAgeyduYW1lJzogJ0JlbmNoJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ1dlaWdodCd9LFxuICAgIHsnbmFtZSc6ICdCaWNlcHMgV2VpZ2h0JywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCdncm91cCcgOiAnV2VpZ2h0J30sXG4gICAgeyduYW1lJzogJ1B1bGwtVXBzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCdncm91cCcgOiAnUHVsbC1VcHMnfSxcbiAgICBdXG4gICAgXG4gICAgXG5cblxuICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgY29uc3QgcG9zdCA9IHtzcG9ydCwgZGF0ZSwgbWV0ZXJzLCBtaW51dGVzLCBlbGV2YXRpb259XG4gICAgICAgIGF3YWl0IGZldGNoKGBuZXdfc2Vzc2lvbnMuanNvbmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfdG9fbWVcIikuaW5uZXJIVE1MICs9ICBcbiAgICAgICAgICAgICAgXCI8ZGl2IGNsYXNzPSdiZy10ZWFsLTEwMCBib3JkZXItdC00IGJvcmRlci10ZWFsLTUwMCByb3VuZGVkLWIgdGV4dC10ZWFsLTkwMCBweC00IHB5LTMgc2hhZG93LW1kJyByb2xlPSdhbGVydCc+PGRpdiBjbGFzcz0nZmxleCc+PGRpdiBjbGFzcz0ncHktMSc+PHN2ZyBjbGFzcz0nZmlsbC1jdXJyZW50IGgtNiB3LTYgdGV4dC10ZWFsLTUwMCBtci00JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZD0nTTIuOTMgMTcuMDdBMTAgMTAgMCAxIDEgMTcuMDcgMi45MyAxMCAxMCAwIDAgMSAyLjkzIDE3LjA3em0xMi43My0xLjQxQTggOCAwIDEgMCA0LjM0IDQuMzRhOCA4IDAgMCAwIDExLjMyIDExLjMyek05IDExVjloMnY2SDl2LTR6bTAtNmgydjJIOVY1eicvPjwvc3ZnPjwvZGl2PjxkaXY+PHAgY2xhc3M9J2ZvbnQtYm9sZCc+U2Vzc2lvbiB3YXMgc3VjY2Vzc2Z1bGx5IGFkZGVkPC9wPjwvZGl2PjwvZGl2PjwvZGl2Pjxici8+XCI7IFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spe1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICBmdW5jdGlvbiB2YWxpZGF0ZU1lc3NhZ2VFbWFpbChldmVudCkge1xuICAgICAgIGxldCB0ZXh0Ym94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgIGVycm9yX2Jvb2xlYW4gPSBmYWxzZTtcbiAgICAgICBpZiAodGV4dGJveC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHRleHRib3guc2V0Q3VzdG9tVmFsaWRpdHkoJ051bWJlciByZXF1aXJlZCcpO1xuICAgICAgICB9IGVsc2UgaWYgKHRleHRib3gudmFsaWRpdHkudHlwZU1pc21hdGNoKXtcbiAgICAgICAgICAgIGVycm9yX2Jvb2xlYW4gPSB0cnVlO1xuICAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgncGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgdGV4dGJveC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG5cblxuPGRpdiBjbGFzcz1cImZsZXggXCI+XG4gIDxkaXYgY2xhc3M9XCIgdy0xLzMgcC00XCI+XG5cbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPiAtLT5cbiAgICA8aW1nIGNsYXNzPSd3LWZ1bGwnIHNyYz1cIndvcmtvdXRfZHJhdy5wbmdcIiBhbHQ9XCJjeWNsaW5nXCIgID4gXG4gICAgICAgIDwhLS0gPC9kaXY+IC0tPlxuXG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMi8zIHAtMlwiPlxuICA8ZGl2IGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHRleHQtY2VudGVyIHAtMiB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTVcIj5cbiAgICBXb3Jrb3V0IE5ldyBTZXNzaW9uXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIiBwLTJcIj5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD1cIntoYW5kbGVTdWJtaXR9XCJcbiAgICAgICAgICAgIG9uOmludmFsaWQ9e3ZhbGlkYXRlTWVzc2FnZUVtYWlsfVxuICAgICAgICAgICAgb246Y2hhbmdlZD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgICAgICBvbjppbnB1dD17dmFsaWRhdGVNZXNzYWdlRW1haWx9XG4gICAgICAgID4gICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nZmxleCc+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIiBjbGFzcz1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14cyBmb250LWJvbGQgbS0yIHAtMlwiPlxuICAgICAgICAgICAgICAgIERhdGVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXgtMSc+XG4gICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYmluZDp2YWx1ZT17ZGF0ZX0gcGxhY2Vob2xkZXI9J2RhdGUnIHJlcXVpcmVkIHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yIG0tMlwiLz5cbiAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdXBwZXJjYXNlIHAtMiB0cmFja2luZy13aWRlIHRleHQtZ3JleS1kYXJrZXIgdGV4dC14bCBmb250LWJvbGQgbS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIExlZ3M8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB1cHBlcmNhc2UgcC0yIHRyYWNraW5nLXdpZGUgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXhzIGZvbnQtYm9sZCBtLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgU3F1YXRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdmbGV4IHctMS8yIG0tMic+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBiaW5kOnZhbHVlPXttZXRlcnN9IHBsYWNlaG9sZGVyPSdzZXJpZXMnIHR5cGU9XCJudW1iZXJcImNsYXNzPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlciBib3JkZXIgYm9yZGVyLXJlZCByb3VuZGVkIHAtMlwiLz4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2ZsZXggdy0xLzIgbS0yJz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGJpbmQ6dmFsdWU9e21ldGVyc30gcGxhY2Vob2xkZXI9J3JlcGV0aXRpb25zJyB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyIGJvcmRlciBib3JkZXItcmVkIHJvdW5kZWQgcC0yXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuXG5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz0nY29udGVudC1jZW50ZXInPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJnLXRyYW5zcGFyZW50IGhvdmVyOmJnLWJsdWUtNTAwIHRleHQtYmx1ZS03MDAgZm9udC1zZW1pYm9sZCBob3Zlcjp0ZXh0LXdoaXRlIHB5LTIgcHgtNCBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIGhvdmVyOmJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkXCI+XG4gICAgICAgIEFkZCBTZXNzaW9uPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIFxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8YnIgLz5cblxuXG5cbiAgICAgICAgPGRpdiBpZD1cImFkZF90b19tZVwiPiBcbiAgICAgICAgPC9kaXY+IFxuICAgIDwvZGl2PiBcbiAgPC9kaXY+XG48L2Rpdj5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQW9Jd0MsR0FBSTs7Ozs7Ozs7Ozs7OztzQ0FhTCxHQUFNOzs7O3NDQUdOLEdBQU07Ozs7Ozs7Ozs7Ozs7OztnRUEzQk4sR0FBWTt5REFDM0IsR0FBb0I7eURBQ3BCLEdBQW9CO3VEQUN0QixHQUFvQjs7Ozs7cUNBUUYsR0FBSTs7O3lFQWFMLEdBQU07dUNBQU4sR0FBTTs7O3lFQUdOLEdBQU07dUNBQU4sR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQW5KNUIsT0FBTyxHQUFHLE1BQU0sRUFBRSxLQUFLO1FBQy9CLElBQUksQ0FBQyxLQUFLLDhCQUE4QixJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU87V0FDckUsT0FBTzs7Ozs7S0FNWCxLQUFLLEdBQUcsU0FBUztLQUVqQixJQUFJLEdBQUcsSUFBSSxFQUFFLE1BQU0sR0FBRyxJQUFJLEVBQUUsT0FBTyxHQUFHLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSTtLQUM1RCxhQUFhLEdBQUcsS0FBSztLQUVyQixhQUFhLEdBQUcsSUFBSTtLQUNwQixtQkFBbUIsR0FBRyxJQUFJO0tBQzFCLG1CQUFtQixHQUFHLElBQUk7S0FDMUIsZ0JBQWdCLEdBQUcsSUFBSTtLQUN2QixjQUFjLEdBQUcsSUFBSTtLQUNyQixzQkFBc0IsR0FBRyxJQUFJO0tBQzdCLHNCQUFzQixHQUFHLElBQUk7S0FDN0Isc0JBQXNCLEdBQUcsSUFBSTtLQUM3QixxQkFBcUIsR0FBRyxJQUFJO0tBQzVCLGdCQUFnQixHQUFHLElBQUk7S0FDdkIsd0JBQXdCLEdBQUcsSUFBSTtLQUMvQixxQkFBcUIsR0FBRyxJQUFJO0tBQzVCLFlBQVksR0FBRyxJQUFJO0tBQ25CLG9CQUFvQixHQUFHLElBQUk7S0FDM0IsY0FBYyxHQUFHLElBQUk7S0FFckIsYUFBYSxHQUFHLElBQUk7S0FDcEIsbUJBQW1CLEdBQUcsSUFBSTtLQUMxQixtQkFBbUIsR0FBRyxJQUFJO0tBQzFCLGdCQUFnQixHQUFHLElBQUk7S0FDdkIsY0FBYyxHQUFHLElBQUk7S0FDckIsc0JBQXNCLEdBQUcsSUFBSTtLQUM3QixzQkFBc0IsR0FBRyxJQUFJO0tBQzdCLHNCQUFzQixHQUFHLElBQUk7S0FDN0IscUJBQXFCLEdBQUcsSUFBSTtLQUM1QixnQkFBZ0IsR0FBRyxJQUFJO0tBQ3ZCLHdCQUF3QixHQUFHLElBQUk7S0FDL0IscUJBQXFCLEdBQUcsSUFBSTtLQUM1QixZQUFZLEdBQUcsSUFBSTtLQUNuQixvQkFBb0IsR0FBRyxJQUFJO0tBQzNCLGNBQWMsR0FBRyxJQUFJOztPQUVmLGdCQUFnQjs7R0FDekIsTUFBTSxFQUFFLFFBQVE7R0FBRSxVQUFVLEdBQUksUUFBUSxFQUFFLFFBQVE7R0FBRyxPQUFPLEVBQUcsTUFBTTs7O0dBQ3JFLE1BQU0sRUFBRSxjQUFjO0dBQUUsVUFBVSxHQUFJLFFBQVEsRUFBRSxRQUFRO0dBQUcsT0FBTyxFQUFHLE1BQU07OztHQUMzRSxNQUFNLEVBQUUsY0FBYztHQUFFLFVBQVUsR0FBSSxRQUFRLEVBQUUsUUFBUTtHQUFHLE9BQU8sRUFBRyxNQUFNOzs7R0FDM0UsTUFBTSxFQUFFLFdBQVc7R0FBRSxVQUFVLEdBQUksUUFBUSxFQUFFLFFBQVE7R0FBRyxPQUFPLEVBQUcsTUFBTTs7O0dBRXhFLE1BQU0sRUFBRSxVQUFVO0dBQUMsVUFBVSxHQUFJLFFBQVEsRUFBRSxRQUFRO0dBQUUsT0FBTyxFQUFHLFVBQVU7OztHQUN6RSxNQUFNLEVBQUUsa0JBQWtCO0dBQUMsVUFBVSxHQUFJLFFBQVEsRUFBRSxRQUFRO0dBQUcsT0FBTyxFQUFHLFVBQVU7OztHQUNsRixNQUFNLEVBQUUsa0JBQWtCO0dBQUMsVUFBVSxHQUFJLFFBQVEsRUFBRSxRQUFRO0dBQUcsT0FBTyxFQUFHLFVBQVU7OztHQUNsRixNQUFNLEVBQUUsZ0JBQWdCO0dBQUMsVUFBVSxHQUFJLFFBQVEsRUFBRSxRQUFRO0dBQUcsT0FBTyxFQUFHLFVBQVU7OztHQUNoRixNQUFNLEVBQUUsaUJBQWlCO0dBQUMsVUFBVSxHQUFJLFFBQVEsRUFBRSxRQUFRO0dBQUcsT0FBTyxFQUFHLFVBQVU7OztHQUVqRixNQUFNLEVBQUUsV0FBVztHQUFDLFVBQVUsR0FBSSxRQUFRLEVBQUUsUUFBUTtHQUFHLE9BQU8sRUFBRyxZQUFZOzs7R0FDN0UsTUFBTSxFQUFFLG1CQUFtQjtHQUFDLFVBQVUsR0FBSSxRQUFRLEVBQUUsUUFBUTtHQUFHLE9BQU8sRUFBRyxZQUFZOzs7R0FDckYsTUFBTSxFQUFFLGdCQUFnQjtHQUFDLFVBQVUsR0FBSSxRQUFRLEVBQUUsUUFBUTtHQUFHLE9BQU8sRUFBRyxZQUFZOzs7R0FHbEYsTUFBTSxFQUFFLE9BQU87R0FBRSxVQUFVLEdBQUksUUFBUSxFQUFFLFFBQVE7R0FBRyxPQUFPLEVBQUcsUUFBUTs7O0dBQ3RFLE1BQU0sRUFBRSxlQUFlO0dBQUUsVUFBVSxHQUFJLFFBQVEsRUFBRSxRQUFRO0dBQUUsT0FBTyxFQUFHLFFBQVE7OztHQUM3RSxNQUFNLEVBQUUsVUFBVTtHQUFFLFVBQVUsR0FBSSxRQUFRLEVBQUUsUUFBUTtHQUFFLE9BQU8sRUFBRyxVQUFVOzs7O2dCQU03RCxZQUFZLENBQUMsS0FBSztRQUN2QixJQUFJLEtBQUksS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVM7O1FBQzlDLEtBQUs7R0FDUCxNQUFNLEVBQUUsTUFBTTtHQUNkLE9BQU8sSUFDSCxjQUFjLEVBQUUsa0JBQWtCO0dBRXRDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUk7OztFQUU3QixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxTQUFTLElBQ3hDLHdmQUF3Zjs7TUFDMWYsUUFBUSxDQUFDLEVBQUU7U0FDTCxNQUFNLFNBQVMsUUFBUSxDQUFDLElBQUk7R0FDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTTs7OztVQUk1QixvQkFBb0IsQ0FBQyxLQUFLO01BQzNCLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTTtFQUMxQixhQUFhLEdBQUcsS0FBSzs7TUFDakIsT0FBTyxDQUFDLEtBQUssS0FBSyxFQUFFO0dBQ25CLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUI7YUFDcEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZO0dBQ3BDLGFBQWEsR0FBRyxJQUFJO0dBQ3BCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyw0QkFBNEI7O0dBRXZELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFOzs7U0FFeEIsSUFBSTs7Ozs7Ozs7Ozs7OztFQWlDcUIsSUFBSTs7Ozs7RUFhTCxNQUFNOzs7OztFQUdOLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
