import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, a as space, t as text, f as claim_element, g as children, b as detach_dev, c as claim_space, h as claim_text, j as attr_dev, k as add_location, O as set_style, l as insert_dev, m as append_dev, n as noop } from './client.4bb630a9.js';

/* src/routes/about.svelte generated by Svelte v3.22.3 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let div0;
	let img0;
	let img0_src_value;
	let t0;
	let div1;
	let h1;
	let t1;
	let t2;
	let div16;
	let div8;
	let div2;
	let img1;
	let img1_src_value;
	let t3;
	let div7;
	let div6;
	let div3;
	let t4;
	let t5;
	let div4;
	let span0;
	let t6;
	let t7;
	let div5;
	let t8;
	let b0;
	let t9;
	let t10;
	let div15;
	let div9;
	let img2;
	let img2_src_value;
	let t11;
	let div14;
	let div13;
	let div10;
	let t12;
	let t13;
	let div11;
	let span1;
	let t14;
	let t15;
	let div12;
	let t16;
	let b1;
	let t17;
	let t18;
	let div17;
	let t19;
	let t20;
	let form;
	let h2;
	let t21;
	let t22;
	let div19;
	let div18;
	let input0;
	let t23;
	let label0;
	let t24;
	let t25;
	let div21;
	let div20;
	let input1;
	let t26;
	let label1;
	let t27;
	let t28;
	let div23;
	let div22;
	let textarea;
	let t29;
	let label2;
	let t30;
	let t31;
	let div24;
	let button;
	let t32;

	const block = {
		c: function create() {
			div0 = element("div");
			img0 = element("img");
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text("About Us");
			t2 = space();
			div16 = element("div");
			div8 = element("div");
			div2 = element("div");
			img1 = element("img");
			t3 = space();
			div7 = element("div");
			div6 = element("div");
			div3 = element("div");
			t4 = text("Martin");
			t5 = space();
			div4 = element("div");
			span0 = element("span");
			t6 = text("Death Star Supervisor");
			t7 = space();
			div5 = element("div");
			t8 = text("Last Seen: ");
			b0 = element("b");
			t9 = text("3 days ago");
			t10 = space();
			div15 = element("div");
			div9 = element("div");
			img2 = element("img");
			t11 = space();
			div14 = element("div");
			div13 = element("div");
			div10 = element("div");
			t12 = text("Valentin");
			t13 = space();
			div11 = element("div");
			span1 = element("span");
			t14 = text("Chaos Master");
			t15 = space();
			div12 = element("div");
			t16 = text("Last Seen: ");
			b1 = element("b");
			t17 = text("2 days ago");
			t18 = space();
			div17 = element("div");
			t19 = text("Do you have questions?");
			t20 = space();
			form = element("form");
			h2 = element("h2");
			t21 = text("Contact form");
			t22 = space();
			div19 = element("div");
			div18 = element("div");
			input0 = element("input");
			t23 = space();
			label0 = element("label");
			t24 = text("Your name");
			t25 = space();
			div21 = element("div");
			div20 = element("div");
			input1 = element("input");
			t26 = space();
			label1 = element("label");
			t27 = text("Your email");
			t28 = space();
			div23 = element("div");
			div22 = element("div");
			textarea = element("textarea");
			t29 = space();
			label2 = element("label");
			t30 = text("Message...");
			t31 = space();
			div24 = element("div");
			button = element("button");
			t32 = text("Send");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img0 = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "About Us");
			h1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div16 = claim_element(nodes, "DIV", { class: true });
			var div16_nodes = children(div16);
			div8 = claim_element(div16_nodes, "DIV", { class: true, style: true });
			var div8_nodes = children(div8);
			div2 = claim_element(div8_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img1 = claim_element(div2_nodes, "IMG", { class: true, src: true });
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div3 = claim_element(div6_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			t4 = claim_text(div3_nodes, "Martin");
			div3_nodes.forEach(detach_dev);
			t5 = claim_space(div6_nodes);
			div4 = claim_element(div6_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			span0 = claim_element(div4_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t6 = claim_text(span0_nodes, "Death Star Supervisor");
			span0_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t7 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			t8 = claim_text(div5_nodes, "Last Seen: ");
			b0 = claim_element(div5_nodes, "B", {});
			var b0_nodes = children(b0);
			t9 = claim_text(b0_nodes, "3 days ago");
			b0_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			t10 = claim_space(div16_nodes);
			div15 = claim_element(div16_nodes, "DIV", { class: true, style: true });
			var div15_nodes = children(div15);
			div9 = claim_element(div15_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			img2 = claim_element(div9_nodes, "IMG", { class: true, src: true });
			div9_nodes.forEach(detach_dev);
			t11 = claim_space(div15_nodes);
			div14 = claim_element(div15_nodes, "DIV", { class: true });
			var div14_nodes = children(div14);
			div13 = claim_element(div14_nodes, "DIV", { class: true });
			var div13_nodes = children(div13);
			div10 = claim_element(div13_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			t12 = claim_text(div10_nodes, "Valentin");
			div10_nodes.forEach(detach_dev);
			t13 = claim_space(div13_nodes);
			div11 = claim_element(div13_nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			span1 = claim_element(div11_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t14 = claim_text(span1_nodes, "Chaos Master");
			span1_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			t15 = claim_space(div13_nodes);
			div12 = claim_element(div13_nodes, "DIV", { class: true });
			var div12_nodes = children(div12);
			t16 = claim_text(div12_nodes, "Last Seen: ");
			b1 = claim_element(div12_nodes, "B", {});
			var b1_nodes = children(b1);
			t17 = claim_text(b1_nodes, "2 days ago");
			b1_nodes.forEach(detach_dev);
			div12_nodes.forEach(detach_dev);
			div13_nodes.forEach(detach_dev);
			div14_nodes.forEach(detach_dev);
			div15_nodes.forEach(detach_dev);
			div16_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			div17 = claim_element(nodes, "DIV", { class: true });
			var div17_nodes = children(div17);
			t19 = claim_text(div17_nodes, "Do you have questions?");
			div17_nodes.forEach(detach_dev);
			t20 = claim_space(nodes);
			form = claim_element(nodes, "FORM", { id: true, class: true });
			var form_nodes = children(form);
			h2 = claim_element(form_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t21 = claim_text(h2_nodes, "Contact form");
			h2_nodes.forEach(detach_dev);
			t22 = claim_space(form_nodes);
			div19 = claim_element(form_nodes, "DIV", { class: true });
			var div19_nodes = children(div19);
			div18 = claim_element(div19_nodes, "DIV", { class: true });
			var div18_nodes = children(div18);

			input0 = claim_element(div18_nodes, "INPUT", {
				class: true,
				id: true,
				type: true,
				placeholder: true,
				required: true
			});

			t23 = claim_space(div18_nodes);
			label0 = claim_element(div18_nodes, "LABEL", { for: true, class: true });
			var label0_nodes = children(label0);
			t24 = claim_text(label0_nodes, "Your name");
			label0_nodes.forEach(detach_dev);
			div18_nodes.forEach(detach_dev);
			div19_nodes.forEach(detach_dev);
			t25 = claim_space(form_nodes);
			div21 = claim_element(form_nodes, "DIV", { class: true });
			var div21_nodes = children(div21);
			div20 = claim_element(div21_nodes, "DIV", { class: true });
			var div20_nodes = children(div20);

			input1 = claim_element(div20_nodes, "INPUT", {
				class: true,
				id: true,
				type: true,
				placeholder: true,
				required: true
			});

			t26 = claim_space(div20_nodes);
			label1 = claim_element(div20_nodes, "LABEL", { for: true, class: true });
			var label1_nodes = children(label1);
			t27 = claim_text(label1_nodes, "Your email");
			label1_nodes.forEach(detach_dev);
			div20_nodes.forEach(detach_dev);
			div21_nodes.forEach(detach_dev);
			t28 = claim_space(form_nodes);
			div23 = claim_element(form_nodes, "DIV", { class: true });
			var div23_nodes = children(div23);
			div22 = claim_element(div23_nodes, "DIV", { class: true });
			var div22_nodes = children(div22);

			textarea = claim_element(div22_nodes, "TEXTAREA", {
				class: true,
				id: true,
				type: true,
				placeholder: true
			});

			children(textarea).forEach(detach_dev);
			t29 = claim_space(div22_nodes);
			label2 = claim_element(div22_nodes, "LABEL", { for: true, class: true });
			var label2_nodes = children(label2);
			t30 = claim_text(label2_nodes, "Message...");
			label2_nodes.forEach(detach_dev);
			div22_nodes.forEach(detach_dev);
			div23_nodes.forEach(detach_dev);
			t31 = claim_space(form_nodes);
			div24 = claim_element(form_nodes, "DIV", { class: true });
			var div24_nodes = children(div24);
			button = claim_element(div24_nodes, "BUTTON", { class: true, type: true });
			var button_nodes = children(button);
			t32 = claim_text(button_nodes, "Send");
			button_nodes.forEach(detach_dev);
			div24_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = "work_hader.jpg")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "work harder sign");
			attr_dev(img0, "class", "antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md opacity-75");
			add_location(img0, file, 1, 4, 31);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 0, 0, 0);
			attr_dev(h1, "class", "text-4xl text-blue-700 font-semibold tracking-widest");
			add_location(h1, file, 5, 8, 322);
			attr_dev(div1, "class", "flex justify-center mb-8");
			add_location(div1, file, 4, 4, 275);
			attr_dev(img1, "class", "rounded-lg shadow-lg antialiased");
			if (img1.src !== (img1_src_value = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")) attr_dev(img1, "src", img1_src_value);
			add_location(img1, file, 15, 16, 864);
			attr_dev(div2, "class", "w-1/3");
			add_location(div2, file, 14, 12, 828);
			attr_dev(div3, "class", "text-2xl text-white leading-tight");
			add_location(div3, file, 19, 16, 1211);
			attr_dev(span0, "class", "border-b border-dashed border-gray-500 pb-1");
			add_location(span0, file, 20, 90, 1361);
			attr_dev(div4, "class", "text-normal text-gray-300 hover:text-gray-400 cursor-pointer");
			add_location(div4, file, 20, 16, 1287);
			add_location(b0, file, 21, 139, 1593);
			attr_dev(div5, "class", "text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0");
			add_location(div5, file, 21, 16, 1470);
			attr_dev(div6, "class", "w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0");
			add_location(div6, file, 18, 16, 1113);
			attr_dev(div7, "class", "md:w-2/3 w-full px-3 flex flex-row flex-wrap");
			add_location(div7, file, 17, 12, 1038);
			attr_dev(div8, "class", "m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased");
			set_style(div8, "background-image", "url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')");
			set_style(div8, "background-repeat", "no-repat");
			set_style(div8, "background-size", "cover");
			add_location(div8, file, 9, 8, 462);
			attr_dev(img2, "class", "rounded-lg shadow-lg antialiased");
			if (img2.src !== (img2_src_value = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png")) attr_dev(img2, "src", img2_src_value);
			add_location(img2, file, 31, 16, 2086);
			attr_dev(div9, "class", "w-1/3");
			add_location(div9, file, 30, 12, 2050);
			attr_dev(div10, "class", "text-2xl text-white leading-tight");
			add_location(div10, file, 35, 16, 2433);
			attr_dev(span1, "class", "border-b border-dashed border-gray-500 pb-1");
			add_location(span1, file, 36, 90, 2585);
			attr_dev(div11, "class", "text-normal text-gray-300 hover:text-gray-400 cursor-pointer");
			add_location(div11, file, 36, 16, 2511);
			add_location(b1, file, 37, 139, 2808);
			attr_dev(div12, "class", "text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0");
			add_location(div12, file, 37, 16, 2685);
			attr_dev(div13, "class", "w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0");
			add_location(div13, file, 34, 16, 2335);
			attr_dev(div14, "class", "md:w-2/3 w-full px-3 flex flex-row flex-wrap");
			add_location(div14, file, 33, 12, 2260);
			attr_dev(div15, "class", "m-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased");
			set_style(div15, "background-image", "url('https://images.unsplash.com/photo-1500856056008-859079534e9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80')");
			set_style(div15, "background-repeat", "no-repat");
			set_style(div15, "background-size", "cover");
			add_location(div15, file, 25, 8, 1684);
			attr_dev(div16, "class", "md:flex justify-center");
			add_location(div16, file, 8, 4, 417);
			attr_dev(div17, "class", "mt-16 mb-8 text-center text-2xl text-blue-800");
			add_location(div17, file, 43, 4, 2905);
			attr_dev(h2, "class", "w-full my-2 text-3xl font-bold leading-tight my-5 text-blue-800 tracking-widest");
			add_location(h2, file, 50, 8, 3189);
			attr_dev(input0, "class", "tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500");
			attr_dev(input0, "id", "name");
			attr_dev(input0, "type", "text");
			attr_dev(input0, "placeholder", "Your name");
			input0.required = true;
			add_location(input0, file, 54, 16, 3458);
			attr_dev(label0, "for", "name");
			attr_dev(label0, "class", "absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text");
			add_location(label0, file, 56, 16, 3733);
			attr_dev(div18, "class", "relative w-full appearance-none label-floating");
			add_location(div18, file, 53, 12, 3381);
			attr_dev(div19, "class", "flex flex-wrap mb-6");
			add_location(div19, file, 52, 8, 3335);
			attr_dev(input1, "class", "tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500");
			attr_dev(input1, "id", "name");
			attr_dev(input1, "type", "text");
			attr_dev(input1, "placeholder", "Your email");
			input1.required = true;
			add_location(input1, file, 64, 16, 4102);
			attr_dev(label1, "for", "name");
			attr_dev(label1, "class", "absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text");
			add_location(label1, file, 66, 16, 4378);
			attr_dev(div20, "class", "relative w-full appearance-none label-floating");
			add_location(div20, file, 63, 12, 4025);
			attr_dev(div21, "class", "flex flex-wrap mb-6");
			add_location(div21, file, 62, 8, 3979);
			attr_dev(textarea, "class", "autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500");
			attr_dev(textarea, "id", "message");
			attr_dev(textarea, "type", "text");
			attr_dev(textarea, "placeholder", "Message...");
			add_location(textarea, file, 74, 16, 4750);
			attr_dev(label2, "for", "message");
			attr_dev(label2, "class", "absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text");
			add_location(label2, file, 76, 20, 5054);
			attr_dev(div22, "class", "relative w-full appearance-none label-floating");
			add_location(div22, file, 73, 12, 4673);
			attr_dev(div23, "class", "flex flex-wrap mb-6");
			add_location(div23, file, 72, 8, 4627);
			attr_dev(button, "class", "w-full shadow bg-blue-700 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded");
			attr_dev(button, "type", "submit");
			add_location(button, file, 82, 12, 5282);
			attr_dev(div24, "class", "");
			add_location(div24, file, 81, 8, 5255);
			attr_dev(form, "id", "contact-me");
			attr_dev(form, "class", "w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 ");
			add_location(form, file, 47, 4, 3088);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, img0);
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div16, anchor);
			append_dev(div16, div8);
			append_dev(div8, div2);
			append_dev(div2, img1);
			append_dev(div8, t3);
			append_dev(div8, div7);
			append_dev(div7, div6);
			append_dev(div6, div3);
			append_dev(div3, t4);
			append_dev(div6, t5);
			append_dev(div6, div4);
			append_dev(div4, span0);
			append_dev(span0, t6);
			append_dev(div6, t7);
			append_dev(div6, div5);
			append_dev(div5, t8);
			append_dev(div5, b0);
			append_dev(b0, t9);
			append_dev(div16, t10);
			append_dev(div16, div15);
			append_dev(div15, div9);
			append_dev(div9, img2);
			append_dev(div15, t11);
			append_dev(div15, div14);
			append_dev(div14, div13);
			append_dev(div13, div10);
			append_dev(div10, t12);
			append_dev(div13, t13);
			append_dev(div13, div11);
			append_dev(div11, span1);
			append_dev(span1, t14);
			append_dev(div13, t15);
			append_dev(div13, div12);
			append_dev(div12, t16);
			append_dev(div12, b1);
			append_dev(b1, t17);
			insert_dev(target, t18, anchor);
			insert_dev(target, div17, anchor);
			append_dev(div17, t19);
			insert_dev(target, t20, anchor);
			insert_dev(target, form, anchor);
			append_dev(form, h2);
			append_dev(h2, t21);
			append_dev(form, t22);
			append_dev(form, div19);
			append_dev(div19, div18);
			append_dev(div18, input0);
			append_dev(div18, t23);
			append_dev(div18, label0);
			append_dev(label0, t24);
			append_dev(form, t25);
			append_dev(form, div21);
			append_dev(div21, div20);
			append_dev(div20, input1);
			append_dev(div20, t26);
			append_dev(div20, label1);
			append_dev(label1, t27);
			append_dev(form, t28);
			append_dev(form, div23);
			append_dev(div23, div22);
			append_dev(div22, textarea);
			append_dev(div22, t29);
			append_dev(div22, label2);
			append_dev(label2, t30);
			append_dev(form, t31);
			append_dev(form, div24);
			append_dev(div24, button);
			append_dev(button, t32);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div16);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(div17);
			if (detaching) detach_dev(t20);
			if (detaching) detach_dev(form);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuZjQxZDgyODUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
