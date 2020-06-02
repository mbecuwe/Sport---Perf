import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.ed1b3a7a.js';

/* src/routes/new_session.svelte generated by Svelte v3.22.3 */

const file = "src/routes/new_session.svelte";

function create_fragment(ctx) {
	let body;
	let div6;
	let div0;
	let h1;
	let t0;
	let t1;
	let div5;
	let div1;
	let p0;
	let t2;
	let t3;
	let input0;
	let t4;
	let div2;
	let p1;
	let t5;
	let t6;
	let input1;
	let t7;
	let datalist0;
	let option0;
	let option1;
	let option2;
	let option3;
	let t8;
	let div3;
	let p2;
	let t9;
	let t10;
	let input2;
	let t11;
	let datalist1;
	let option4;
	let option5;
	let option6;
	let option7;
	let option8;
	let option9;
	let option10;
	let option11;
	let t12;
	let div4;
	let p3;
	let t13;
	let t14;
	let input3;

	const block = {
		c: function create() {
			body = element("body");
			div6 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text("New Session");
			t1 = space();
			div5 = element("div");
			div1 = element("div");
			p0 = element("p");
			t2 = text("Date");
			t3 = space();
			input0 = element("input");
			t4 = space();
			div2 = element("div");
			p1 = element("p");
			t5 = text("Sports");
			t6 = space();
			input1 = element("input");
			t7 = space();
			datalist0 = element("datalist");
			option0 = element("option");
			option1 = element("option");
			option2 = element("option");
			option3 = element("option");
			t8 = space();
			div3 = element("div");
			p2 = element("p");
			t9 = text("Exercice");
			t10 = space();
			input2 = element("input");
			t11 = space();
			datalist1 = element("datalist");
			option4 = element("option");
			option5 = element("option");
			option6 = element("option");
			option7 = element("option");
			option8 = element("option");
			option9 = element("option");
			option10 = element("option");
			option11 = element("option");
			t12 = space();
			div4 = element("div");
			p3 = element("p");
			t13 = text("Metrics");
			t14 = space();
			input3 = element("input");
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
			t0 = claim_text(h1_nodes, "New Session");
			h1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div1 = claim_element(div5_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p0 = claim_element(div1_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Date");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);

			input0 = claim_element(div1_nodes, "INPUT", {
				type: true,
				id: true,
				name: true,
				class: true
			});

			div1_nodes.forEach(detach_dev);
			t4 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p1 = claim_element(div2_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Sports");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div2_nodes);

			input1 = claim_element(div2_nodes, "INPUT", {
				type: true,
				list: true,
				id: true,
				name: true,
				class: true
			});

			t7 = claim_space(div2_nodes);
			datalist0 = claim_element(div2_nodes, "DATALIST", { id: true });
			var datalist0_nodes = children(datalist0);
			option0 = claim_element(datalist0_nodes, "OPTION", { value: true });
			children(option0).forEach(detach_dev);
			option1 = claim_element(datalist0_nodes, "OPTION", { value: true });
			children(option1).forEach(detach_dev);
			option2 = claim_element(datalist0_nodes, "OPTION", { value: true });
			children(option2).forEach(detach_dev);
			option3 = claim_element(datalist0_nodes, "OPTION", { value: true });
			children(option3).forEach(detach_dev);
			datalist0_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t8 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			p2 = claim_element(div3_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Exercice");
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(div3_nodes);

			input2 = claim_element(div3_nodes, "INPUT", {
				type: true,
				list: true,
				id: true,
				name: true,
				class: true
			});

			t11 = claim_space(div3_nodes);
			datalist1 = claim_element(div3_nodes, "DATALIST", { id: true });
			var datalist1_nodes = children(datalist1);
			option4 = claim_element(datalist1_nodes, "OPTION", { value: true });
			children(option4).forEach(detach_dev);
			option5 = claim_element(datalist1_nodes, "OPTION", { value: true });
			children(option5).forEach(detach_dev);
			option6 = claim_element(datalist1_nodes, "OPTION", { value: true });
			children(option6).forEach(detach_dev);
			option7 = claim_element(datalist1_nodes, "OPTION", { value: true });
			children(option7).forEach(detach_dev);
			option8 = claim_element(datalist1_nodes, "OPTION", { value: true });
			children(option8).forEach(detach_dev);
			option9 = claim_element(datalist1_nodes, "OPTION", { value: true });
			children(option9).forEach(detach_dev);
			option10 = claim_element(datalist1_nodes, "OPTION", { value: true });
			children(option10).forEach(detach_dev);
			option11 = claim_element(datalist1_nodes, "OPTION", { value: true });
			children(option11).forEach(detach_dev);
			datalist1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t12 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			p3 = claim_element(div4_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t13 = claim_text(p3_nodes, "Metrics");
			p3_nodes.forEach(detach_dev);
			t14 = claim_space(div4_nodes);

			input3 = claim_element(div4_nodes, "INPUT", {
				type: true,
				list: true,
				id: true,
				name: true,
				class: true
			});

			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "font-bold text-3xl text-blue-800");
			add_location(h1, file, 3, 16, 146);
			attr_dev(div0, "class", "md:flex justify-center");
			add_location(div0, file, 2, 12, 93);
			attr_dev(p0, "class", "pb-2");
			add_location(p0, file, 7, 20, 346);
			attr_dev(input0, "type", "date");
			attr_dev(input0, "id", "date");
			attr_dev(input0, "name", "date");
			attr_dev(input0, "class", "shadow hover:shadow-md");
			add_location(input0, file, 8, 20, 391);
			attr_dev(div1, "class", "pb-6");
			add_location(div1, file, 6, 16, 306);
			attr_dev(p1, "class", "pb-2");
			add_location(p1, file, 11, 20, 542);
			attr_dev(input1, "type", "text");
			attr_dev(input1, "list", "sports");
			attr_dev(input1, "id", "sport");
			attr_dev(input1, "name", "sport");
			attr_dev(input1, "class", "shadow hover:shadow-md");
			add_location(input1, file, 12, 20, 589);
			option0.__value = "Fitness";
			option0.value = option0.__value;
			add_location(option0, file, 14, 24, 745);
			option1.__value = "Jogging";
			option1.value = option1.__value;
			add_location(option1, file, 15, 24, 803);
			option2.__value = "Swimming";
			option2.value = option2.__value;
			add_location(option2, file, 16, 24, 861);
			option3.__value = "Racing Bike";
			option3.value = option3.__value;
			add_location(option3, file, 17, 24, 920);
			attr_dev(datalist0, "id", "sports");
			add_location(datalist0, file, 13, 20, 698);
			attr_dev(div2, "class", "pb-6");
			add_location(div2, file, 10, 16, 503);
			attr_dev(p2, "class", "pb-2");
			add_location(p2, file, 21, 20, 1068);
			attr_dev(input2, "type", "text");
			attr_dev(input2, "list", "exercices");
			attr_dev(input2, "id", "exercice");
			attr_dev(input2, "name", "exercice");
			attr_dev(input2, "class", "shadow hover:shadow-md");
			add_location(input2, file, 22, 20, 1117);
			option4.__value = "Biceps";
			option4.value = option4.__value;
			add_location(option4, file, 24, 24, 1285);
			option5.__value = "Chest";
			option5.value = option5.__value;
			add_location(option5, file, 25, 24, 1342);
			option6.__value = "Core";
			option6.value = option6.__value;
			add_location(option6, file, 26, 24, 1398);
			option7.__value = "Quads";
			option7.value = option7.__value;
			add_location(option7, file, 27, 24, 1453);
			option8.__value = "Shoulders";
			option8.value = option8.__value;
			add_location(option8, file, 28, 24, 1509);
			option9.__value = "Back";
			option9.value = option9.__value;
			add_location(option9, file, 29, 24, 1569);
			option10.__value = "Triceps";
			option10.value = option10.__value;
			add_location(option10, file, 30, 24, 1624);
			option11.__value = "Glutes";
			option11.value = option11.__value;
			add_location(option11, file, 31, 24, 1682);
			attr_dev(datalist1, "id", "exercices");
			add_location(datalist1, file, 23, 20, 1235);
			attr_dev(div3, "class", "pb-6");
			add_location(div3, file, 20, 16, 1029);
			attr_dev(p3, "class", "pb-2");
			add_location(p3, file, 35, 20, 1825);
			attr_dev(input3, "type", "text");
			attr_dev(input3, "list", "metrics");
			attr_dev(input3, "id", "metrics");
			attr_dev(input3, "name", "metrics");
			attr_dev(input3, "class", "shadow hover:shadow-md");
			add_location(input3, file, 36, 20, 1873);
			attr_dev(div4, "class", "pb-6");
			add_location(div4, file, 34, 16, 1786);
			attr_dev(div5, "class", "md:flex mt-12 w-full justify-around");
			add_location(div5, file, 5, 12, 239);
			attr_dev(div6, "class", "mx-5 my-5");
			add_location(div6, file, 1, 8, 57);
			attr_dev(body, "class", "bg-blue-100 w-screen h-screen");
			add_location(body, file, 0, 4, 4);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, div6);
			append_dev(div6, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div6, t1);
			append_dev(div6, div5);
			append_dev(div5, div1);
			append_dev(div1, p0);
			append_dev(p0, t2);
			append_dev(div1, t3);
			append_dev(div1, input0);
			append_dev(div5, t4);
			append_dev(div5, div2);
			append_dev(div2, p1);
			append_dev(p1, t5);
			append_dev(div2, t6);
			append_dev(div2, input1);
			append_dev(div2, t7);
			append_dev(div2, datalist0);
			append_dev(datalist0, option0);
			append_dev(datalist0, option1);
			append_dev(datalist0, option2);
			append_dev(datalist0, option3);
			append_dev(div5, t8);
			append_dev(div5, div3);
			append_dev(div3, p2);
			append_dev(p2, t9);
			append_dev(div3, t10);
			append_dev(div3, input2);
			append_dev(div3, t11);
			append_dev(div3, datalist1);
			append_dev(datalist1, option4);
			append_dev(datalist1, option5);
			append_dev(datalist1, option6);
			append_dev(datalist1, option7);
			append_dev(datalist1, option8);
			append_dev(datalist1, option9);
			append_dev(datalist1, option10);
			append_dev(datalist1, option11);
			append_dev(div5, t12);
			append_dev(div5, div4);
			append_dev(div4, p3);
			append_dev(p3, t13);
			append_dev(div4, t14);
			append_dev(div4, input3);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<New_session> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("New_session", $$slots, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3X3Nlc3Npb24uZmQ5YTU3NGIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
