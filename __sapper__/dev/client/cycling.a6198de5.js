import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, e as element, t as text, a as space, w as create_component, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, x as claim_component, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, y as mount_component, n as noop, z as transition_in, A as transition_out, B as destroy_component } from './client.bb09a659.js';
import './_commonjsHelpers.1e235def.js';
import './Chart.b2015135.js';
import Cycling_charts from './cycling-charts.ef003966.js';

/* src/routes/sports/cycling/cycling.svelte generated by Svelte v3.22.3 */
const file = "src/routes/sports/cycling/cycling.svelte";

function create_fragment(ctx) {
	let div4;
	let div1;
	let div0;
	let t0;
	let t1;
	let div3;
	let div2;
	let img;
	let img_src_value;
	let t2;
	let div5;
	let t3;
	let lu;
	let li0;
	let t4;
	let t5;
	let li1;
	let t6;
	let t7;
	let div6;
	let table;
	let thead;
	let tr0;
	let th0;
	let t8;
	let t9;
	let th1;
	let t10;
	let t11;
	let th2;
	let t12;
	let t13;
	let th3;
	let t14;
	let t15;
	let tbody;
	let tr1;
	let td0;
	let t16;
	let t17;
	let td1;
	let t18;
	let t19;
	let td2;
	let t20;
	let t21;
	let td3;
	let t22;
	let t23;
	let t24;
	let td4;
	let t25;
	let t26;
	let td5;
	let t27;
	let t28;
	let t29;
	let tr2;
	let td6;
	let t30;
	let t31;
	let td7;
	let t32;
	let t33;
	let td8;
	let t34;
	let t35;
	let td9;
	let t36;
	let t37;
	let t38;
	let td10;
	let t39;
	let t40;
	let td11;
	let t41;
	let t42;
	let t43;
	let tr3;
	let td12;
	let t44;
	let t45;
	let td13;
	let t46;
	let t47;
	let td14;
	let t48;
	let t49;
	let td15;
	let t50;
	let t51;
	let t52;
	let td16;
	let t53;
	let t54;
	let td17;
	let t55;
	let t56;
	let t57;
	let div7;
	let h3;
	let t58;
	let t59;
	let t60;
	let div8;
	let t61;
	let current;

	const charts = new Cycling_charts({
			props: { data: /*data*/ ctx[0] },
			$$inline: true
		});

	const block = {
		c: function create() {
			div4 = element("div");
			div1 = element("div");
			div0 = element("div");
			t0 = text("Cycling Performance");
			t1 = space();
			div3 = element("div");
			div2 = element("div");
			img = element("img");
			t2 = space();
			div5 = element("div");
			t3 = text("Your last sessions took place on: \n    ");
			lu = element("lu");
			li0 = element("li");
			t4 = text("yo");
			t5 = space();
			li1 = element("li");
			t6 = text("yo");
			t7 = space();
			div6 = element("div");
			table = element("table");
			thead = element("thead");
			tr0 = element("tr");
			th0 = element("th");
			t8 = text("Metrics");
			t9 = space();
			th1 = element("th");
			t10 = text("Value");
			t11 = space();
			th2 = element("th");
			t12 = text("vs. Last 3 sessions");
			t13 = space();
			th3 = element("th");
			t14 = text("vs. Last 10 sessions");
			t15 = space();
			tbody = element("tbody");
			tr1 = element("tr");
			td0 = element("td");
			t16 = text("Distance (m)");
			t17 = space();
			td1 = element("td");
			t18 = text(/*last_distance*/ ctx[1]);
			t19 = space();
			td2 = element("td");
			t20 = text(/*average_3_distance*/ ctx[4]);
			t21 = space();
			td3 = element("td");
			t22 = text(/*variation_3_distance*/ ctx[7]);
			t23 = text("%");
			t24 = space();
			td4 = element("td");
			t25 = text(/*average_10_distance*/ ctx[10]);
			t26 = space();
			td5 = element("td");
			t27 = text(/*variation_10_distance*/ ctx[13]);
			t28 = text("%");
			t29 = space();
			tr2 = element("tr");
			td6 = element("td");
			t30 = text("Speed (km/h)");
			t31 = space();
			td7 = element("td");
			t32 = text(/*last_speed*/ ctx[2]);
			t33 = space();
			td8 = element("td");
			t34 = text(/*average_3_speed*/ ctx[6]);
			t35 = space();
			td9 = element("td");
			t36 = text(/*variation_3_speed*/ ctx[8]);
			t37 = text("%");
			t38 = space();
			td10 = element("td");
			t39 = text(/*average_10_speed*/ ctx[12]);
			t40 = space();
			td11 = element("td");
			t41 = text(/*variation_10_speed*/ ctx[14]);
			t42 = text("%");
			t43 = space();
			tr3 = element("tr");
			td12 = element("td");
			t44 = text("Elevation (m)");
			t45 = space();
			td13 = element("td");
			t46 = text(/*last_elevation*/ ctx[3]);
			t47 = space();
			td14 = element("td");
			t48 = text(/*average_3_elevation*/ ctx[5]);
			t49 = space();
			td15 = element("td");
			t50 = text(/*variation_3_elevation*/ ctx[9]);
			t51 = text("%");
			t52 = space();
			td16 = element("td");
			t53 = text(/*average_10_elevation*/ ctx[11]);
			t54 = space();
			td17 = element("td");
			t55 = text(/*variation_10_elevation*/ ctx[15]);
			t56 = text("%");
			t57 = space();
			div7 = element("div");
			h3 = element("h3");
			t58 = text("See your evolution in this chart:");
			t59 = space();
			create_component(charts.$$.fragment);
			t60 = space();
			div8 = element("div");
			t61 = text("Get the data available in table");
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, "Cycling Performance");
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			img = claim_element(div2_nodes, "IMG", { src: true, alt: true });
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			t3 = claim_text(div5_nodes, "Your last sessions took place on: \n    ");
			lu = claim_element(div5_nodes, "LU", {});
			var lu_nodes = children(lu);
			li0 = claim_element(lu_nodes, "LI", {});
			var li0_nodes = children(li0);
			t4 = claim_text(li0_nodes, "yo");
			li0_nodes.forEach(detach_dev);
			t5 = claim_space(lu_nodes);
			li1 = claim_element(lu_nodes, "LI", {});
			var li1_nodes = children(li1);
			t6 = claim_text(li1_nodes, "yo");
			li1_nodes.forEach(detach_dev);
			lu_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			table = claim_element(div6_nodes, "TABLE", { class: true });
			var table_nodes = children(table);
			thead = claim_element(table_nodes, "THEAD", {});
			var thead_nodes = children(thead);
			tr0 = claim_element(thead_nodes, "TR", {});
			var tr0_nodes = children(tr0);
			th0 = claim_element(tr0_nodes, "TH", { class: true });
			var th0_nodes = children(th0);
			t8 = claim_text(th0_nodes, "Metrics");
			th0_nodes.forEach(detach_dev);
			t9 = claim_space(tr0_nodes);
			th1 = claim_element(tr0_nodes, "TH", { class: true });
			var th1_nodes = children(th1);
			t10 = claim_text(th1_nodes, "Value");
			th1_nodes.forEach(detach_dev);
			t11 = claim_space(tr0_nodes);
			th2 = claim_element(tr0_nodes, "TH", { colspan: true, class: true });
			var th2_nodes = children(th2);
			t12 = claim_text(th2_nodes, "vs. Last 3 sessions");
			th2_nodes.forEach(detach_dev);
			t13 = claim_space(tr0_nodes);
			th3 = claim_element(tr0_nodes, "TH", { colspan: true, class: true });
			var th3_nodes = children(th3);
			t14 = claim_text(th3_nodes, "vs. Last 10 sessions");
			th3_nodes.forEach(detach_dev);
			tr0_nodes.forEach(detach_dev);
			thead_nodes.forEach(detach_dev);
			t15 = claim_space(table_nodes);
			tbody = claim_element(table_nodes, "TBODY", {});
			var tbody_nodes = children(tbody);
			tr1 = claim_element(tbody_nodes, "TR", {});
			var tr1_nodes = children(tr1);
			td0 = claim_element(tr1_nodes, "TD", { class: true });
			var td0_nodes = children(td0);
			t16 = claim_text(td0_nodes, "Distance (m)");
			td0_nodes.forEach(detach_dev);
			t17 = claim_space(tr1_nodes);
			td1 = claim_element(tr1_nodes, "TD", { class: true });
			var td1_nodes = children(td1);
			t18 = claim_text(td1_nodes, /*last_distance*/ ctx[1]);
			td1_nodes.forEach(detach_dev);
			t19 = claim_space(tr1_nodes);
			td2 = claim_element(tr1_nodes, "TD", { class: true });
			var td2_nodes = children(td2);
			t20 = claim_text(td2_nodes, /*average_3_distance*/ ctx[4]);
			td2_nodes.forEach(detach_dev);
			t21 = claim_space(tr1_nodes);
			td3 = claim_element(tr1_nodes, "TD", { class: true });
			var td3_nodes = children(td3);
			t22 = claim_text(td3_nodes, /*variation_3_distance*/ ctx[7]);
			t23 = claim_text(td3_nodes, "%");
			td3_nodes.forEach(detach_dev);
			t24 = claim_space(tr1_nodes);
			td4 = claim_element(tr1_nodes, "TD", { class: true });
			var td4_nodes = children(td4);
			t25 = claim_text(td4_nodes, /*average_10_distance*/ ctx[10]);
			td4_nodes.forEach(detach_dev);
			t26 = claim_space(tr1_nodes);
			td5 = claim_element(tr1_nodes, "TD", { class: true });
			var td5_nodes = children(td5);
			t27 = claim_text(td5_nodes, /*variation_10_distance*/ ctx[13]);
			t28 = claim_text(td5_nodes, "%");
			td5_nodes.forEach(detach_dev);
			tr1_nodes.forEach(detach_dev);
			t29 = claim_space(tbody_nodes);
			tr2 = claim_element(tbody_nodes, "TR", { class: true });
			var tr2_nodes = children(tr2);
			td6 = claim_element(tr2_nodes, "TD", { class: true });
			var td6_nodes = children(td6);
			t30 = claim_text(td6_nodes, "Speed (km/h)");
			td6_nodes.forEach(detach_dev);
			t31 = claim_space(tr2_nodes);
			td7 = claim_element(tr2_nodes, "TD", { class: true });
			var td7_nodes = children(td7);
			t32 = claim_text(td7_nodes, /*last_speed*/ ctx[2]);
			td7_nodes.forEach(detach_dev);
			t33 = claim_space(tr2_nodes);
			td8 = claim_element(tr2_nodes, "TD", { class: true });
			var td8_nodes = children(td8);
			t34 = claim_text(td8_nodes, /*average_3_speed*/ ctx[6]);
			td8_nodes.forEach(detach_dev);
			t35 = claim_space(tr2_nodes);
			td9 = claim_element(tr2_nodes, "TD", { class: true });
			var td9_nodes = children(td9);
			t36 = claim_text(td9_nodes, /*variation_3_speed*/ ctx[8]);
			t37 = claim_text(td9_nodes, "%");
			td9_nodes.forEach(detach_dev);
			t38 = claim_space(tr2_nodes);
			td10 = claim_element(tr2_nodes, "TD", { class: true });
			var td10_nodes = children(td10);
			t39 = claim_text(td10_nodes, /*average_10_speed*/ ctx[12]);
			td10_nodes.forEach(detach_dev);
			t40 = claim_space(tr2_nodes);
			td11 = claim_element(tr2_nodes, "TD", { class: true });
			var td11_nodes = children(td11);
			t41 = claim_text(td11_nodes, /*variation_10_speed*/ ctx[14]);
			t42 = claim_text(td11_nodes, "%");
			td11_nodes.forEach(detach_dev);
			tr2_nodes.forEach(detach_dev);
			t43 = claim_space(tbody_nodes);
			tr3 = claim_element(tbody_nodes, "TR", {});
			var tr3_nodes = children(tr3);
			td12 = claim_element(tr3_nodes, "TD", { class: true });
			var td12_nodes = children(td12);
			t44 = claim_text(td12_nodes, "Elevation (m)");
			td12_nodes.forEach(detach_dev);
			t45 = claim_space(tr3_nodes);
			td13 = claim_element(tr3_nodes, "TD", { class: true });
			var td13_nodes = children(td13);
			t46 = claim_text(td13_nodes, /*last_elevation*/ ctx[3]);
			td13_nodes.forEach(detach_dev);
			t47 = claim_space(tr3_nodes);
			td14 = claim_element(tr3_nodes, "TD", { class: true });
			var td14_nodes = children(td14);
			t48 = claim_text(td14_nodes, /*average_3_elevation*/ ctx[5]);
			td14_nodes.forEach(detach_dev);
			t49 = claim_space(tr3_nodes);
			td15 = claim_element(tr3_nodes, "TD", { class: true });
			var td15_nodes = children(td15);
			t50 = claim_text(td15_nodes, /*variation_3_elevation*/ ctx[9]);
			t51 = claim_text(td15_nodes, "%");
			td15_nodes.forEach(detach_dev);
			t52 = claim_space(tr3_nodes);
			td16 = claim_element(tr3_nodes, "TD", { class: true });
			var td16_nodes = children(td16);
			t53 = claim_text(td16_nodes, /*average_10_elevation*/ ctx[11]);
			td16_nodes.forEach(detach_dev);
			t54 = claim_space(tr3_nodes);
			td17 = claim_element(tr3_nodes, "TD", { class: true });
			var td17_nodes = children(td17);
			t55 = claim_text(td17_nodes, /*variation_10_elevation*/ ctx[15]);
			t56 = claim_text(td17_nodes, "%");
			td17_nodes.forEach(detach_dev);
			tr3_nodes.forEach(detach_dev);
			tbody_nodes.forEach(detach_dev);
			table_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			t57 = claim_space(nodes);
			div7 = claim_element(nodes, "DIV", {});
			var div7_nodes = children(div7);
			h3 = claim_element(div7_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t58 = claim_text(h3_nodes, "See your evolution in this chart:");
			h3_nodes.forEach(detach_dev);
			t59 = claim_space(div7_nodes);
			claim_component(charts.$$.fragment, div7_nodes);
			div7_nodes.forEach(detach_dev);
			t60 = claim_space(nodes);
			div8 = claim_element(nodes, "DIV", {});
			var div8_nodes = children(div8);
			t61 = claim_text(div8_nodes, "Get the data available in table");
			div8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "text-center p-2 text-2xl font-semibold bg-gray-100");
			add_location(div0, file, 111, 4, 3112);
			attr_dev(div1, "class", "flex-initial w-2/3 p-2");
			add_location(div1, file, 110, 2, 3071);
			if (img.src !== (img_src_value = "cycling.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "cycling");
			add_location(img, file, 117, 4, 3298);
			attr_dev(div2, "class", " text-right p-2");
			add_location(div2, file, 116, 4, 3264);
			attr_dev(div3, "class", "flex-initial w-1/3 p-2");
			add_location(div3, file, 115, 2, 3223);
			attr_dev(div4, "class", "flex h-48");
			add_location(div4, file, 109, 0, 3045);
			add_location(li0, file, 126, 4, 3433);
			add_location(li1, file, 127, 8, 3453);
			add_location(lu, file, 125, 4, 3424);
			attr_dev(div5, "class", "px-10");
			add_location(div5, file, 123, 0, 3365);
			attr_dev(th0, "class", "px-4 py-2");
			add_location(th0, file, 137, 8, 3581);
			attr_dev(th1, "class", "px-4 py-2");
			add_location(th1, file, 138, 8, 3624);
			attr_dev(th2, "colspan", "2");
			attr_dev(th2, "class", "px-4 py-2 ");
			add_location(th2, file, 139, 8, 3665);
			attr_dev(th3, "colspan", "2");
			attr_dev(th3, "class", "px-4 py-2");
			add_location(th3, file, 140, 8, 3731);
			add_location(tr0, file, 136, 8, 3568);
			add_location(thead, file, 135, 4, 3552);
			attr_dev(td0, "class", "border px-4 py-2");
			add_location(td0, file, 145, 8, 3849);
			attr_dev(td1, "class", "border px-4 py-2");
			add_location(td1, file, 146, 8, 3904);
			attr_dev(td2, "class", "border px-4 py-2");
			add_location(td2, file, 147, 8, 3962);
			attr_dev(td3, "class", "border px-4 py-2");
			add_location(td3, file, 148, 8, 4025);
			attr_dev(td4, "class", "border px-4 py-2");
			add_location(td4, file, 149, 8, 4091);
			attr_dev(td5, "class", "border px-4 py-2");
			add_location(td5, file, 150, 8, 4155);
			add_location(tr1, file, 144, 8, 3836);
			attr_dev(td6, "class", "border px-4 py-2");
			add_location(td6, file, 153, 8, 4269);
			attr_dev(td7, "class", "border px-4 py-2");
			add_location(td7, file, 154, 8, 4324);
			attr_dev(td8, "class", "border px-4 py-2");
			add_location(td8, file, 155, 8, 4379);
			attr_dev(td9, "class", "border px-4 py-2");
			add_location(td9, file, 156, 8, 4439);
			attr_dev(td10, "class", "border px-4 py-2");
			add_location(td10, file, 157, 8, 4502);
			attr_dev(td11, "class", "border px-4 py-2");
			add_location(td11, file, 158, 8, 4563);
			attr_dev(tr2, "class", "bg-gray-100");
			add_location(tr2, file, 152, 8, 4236);
			attr_dev(td12, "class", "border px-4 py-2");
			add_location(td12, file, 161, 8, 4654);
			attr_dev(td13, "class", "border px-4 py-2");
			add_location(td13, file, 162, 8, 4710);
			attr_dev(td14, "class", "border px-4 py-2");
			add_location(td14, file, 163, 8, 4769);
			attr_dev(td15, "class", "border px-4 py-2");
			add_location(td15, file, 164, 8, 4833);
			attr_dev(td16, "class", "border px-4 py-2");
			add_location(td16, file, 165, 8, 4900);
			attr_dev(td17, "class", "border px-4 py-2");
			add_location(td17, file, 166, 8, 4965);
			add_location(tr3, file, 160, 8, 4641);
			add_location(tbody, file, 143, 4, 3820);
			attr_dev(table, "class", "table-auto text-center ");
			add_location(table, file, 134, 4, 3508);
			attr_dev(div6, "class", "p-10");
			add_location(div6, file, 133, 0, 3485);
			attr_dev(h3, "class", "px-10 py-5");
			add_location(h3, file, 176, 1, 5085);
			add_location(div7, file, 175, 0, 5077);
			add_location(div8, file, 180, 0, 5179);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div1);
			append_dev(div1, div0);
			append_dev(div0, t0);
			append_dev(div4, t1);
			append_dev(div4, div3);
			append_dev(div3, div2);
			append_dev(div2, img);
			insert_dev(target, t2, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, t3);
			append_dev(div5, lu);
			append_dev(lu, li0);
			append_dev(li0, t4);
			append_dev(lu, t5);
			append_dev(lu, li1);
			append_dev(li1, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, table);
			append_dev(table, thead);
			append_dev(thead, tr0);
			append_dev(tr0, th0);
			append_dev(th0, t8);
			append_dev(tr0, t9);
			append_dev(tr0, th1);
			append_dev(th1, t10);
			append_dev(tr0, t11);
			append_dev(tr0, th2);
			append_dev(th2, t12);
			append_dev(tr0, t13);
			append_dev(tr0, th3);
			append_dev(th3, t14);
			append_dev(table, t15);
			append_dev(table, tbody);
			append_dev(tbody, tr1);
			append_dev(tr1, td0);
			append_dev(td0, t16);
			append_dev(tr1, t17);
			append_dev(tr1, td1);
			append_dev(td1, t18);
			append_dev(tr1, t19);
			append_dev(tr1, td2);
			append_dev(td2, t20);
			append_dev(tr1, t21);
			append_dev(tr1, td3);
			append_dev(td3, t22);
			append_dev(td3, t23);
			append_dev(tr1, t24);
			append_dev(tr1, td4);
			append_dev(td4, t25);
			append_dev(tr1, t26);
			append_dev(tr1, td5);
			append_dev(td5, t27);
			append_dev(td5, t28);
			append_dev(tbody, t29);
			append_dev(tbody, tr2);
			append_dev(tr2, td6);
			append_dev(td6, t30);
			append_dev(tr2, t31);
			append_dev(tr2, td7);
			append_dev(td7, t32);
			append_dev(tr2, t33);
			append_dev(tr2, td8);
			append_dev(td8, t34);
			append_dev(tr2, t35);
			append_dev(tr2, td9);
			append_dev(td9, t36);
			append_dev(td9, t37);
			append_dev(tr2, t38);
			append_dev(tr2, td10);
			append_dev(td10, t39);
			append_dev(tr2, t40);
			append_dev(tr2, td11);
			append_dev(td11, t41);
			append_dev(td11, t42);
			append_dev(tbody, t43);
			append_dev(tbody, tr3);
			append_dev(tr3, td12);
			append_dev(td12, t44);
			append_dev(tr3, t45);
			append_dev(tr3, td13);
			append_dev(td13, t46);
			append_dev(tr3, t47);
			append_dev(tr3, td14);
			append_dev(td14, t48);
			append_dev(tr3, t49);
			append_dev(tr3, td15);
			append_dev(td15, t50);
			append_dev(td15, t51);
			append_dev(tr3, t52);
			append_dev(tr3, td16);
			append_dev(td16, t53);
			append_dev(tr3, t54);
			append_dev(tr3, td17);
			append_dev(td17, t55);
			append_dev(td17, t56);
			insert_dev(target, t57, anchor);
			insert_dev(target, div7, anchor);
			append_dev(div7, h3);
			append_dev(h3, t58);
			append_dev(div7, t59);
			mount_component(charts, div7, null);
			insert_dev(target, t60, anchor);
			insert_dev(target, div8, anchor);
			append_dev(div8, t61);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(charts.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(charts.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div5);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(div6);
			if (detaching) detach_dev(t57);
			if (detaching) detach_dev(div7);
			destroy_component(charts);
			if (detaching) detach_dev(t60);
			if (detaching) detach_dev(div8);
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
	return this.fetch(`sports/cycling.json`).then(r => r.json()).then(data_raw => {
		return { data_raw };
	});
}

function dividevector(a, b) {
	return a.map((e, i) => e / b[i]);
}

function variation(x_new, x_old) {
	const variation = Math.round((x_new - x_old) / x_old * 100);
	return variation;
}

function instance($$self, $$props, $$invalidate) {
	let { data_raw } = $$props;

	// Compute data for charts
	let list_meters = [];

	let list_date = [];
	let list_elevation = [];
	let list_minutes = [];

	data_raw.forEach(x => {
		list_meters.push(x.meters);
		list_date.push(x.date);
		list_elevation.push(x.elevation);
		list_minutes.push(x.minutes);
	});

	const data = {
		labels: list_date,
		datasets: [
			{
				label: "Meters covered",
				yAxisID: "Meters covered",
				data: list_meters,
				borderColor: "#3e95cd",
				fill: false
			},
			{
				label: "elevation",
				data: list_elevation,
				yAxisID: "elevation",
				borderColor: "#8e5ea2",
				fill: false
			}
		]
	};

	// TODO: verifiy ordering of dates and sessions
	const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

	// Compute average distance, speed, elevation, 
	// Last session
	const last_distance = list_meters[list_meters.length - 1];

	const last_hours = list_minutes[list_minutes.length - 1] / 60;
	const last_speed = last_distance / 1000 / last_hours;
	const last_elevation = list_elevation[list_elevation.length - 1];

	// Last 3 sessions
	const distance_3_session = list_meters.slice(Math.max(list_meters.length - 3, 0));

	const minutes_3_session = list_minutes.slice(Math.max(list_minutes.length - 3, 0));
	const elevation_3_session = list_elevation.slice(Math.max(list_elevation.length - 3, 0));
	const average_3_distance = average(distance_3_session);
	const average_3_elevation = average(elevation_3_session);
	const average_3_speed = average(dividevector(distance_3_session, minutes_3_session)) * 60 / 1000;
	const variation_3_distance = variation(last_distance, average_3_distance);
	const variation_3_speed = variation(last_speed, average_3_speed);
	const variation_3_elevation = variation(last_elevation, average_3_elevation);

	// Last 10 sessions
	const distance_10_session = list_meters.slice(Math.max(list_meters.length - 10, 0));

	const minutes_10_session = list_minutes.slice(Math.max(list_minutes.length - 10, 0));
	const elevation_10_session = list_elevation.slice(Math.max(list_elevation.length - 10, 0));
	const average_10_distance = average(distance_10_session);
	const average_10_elevation = average(elevation_10_session);
	const average_10_speed = average(dividevector(distance_10_session, minutes_10_session)) * 60 / 1000;
	const variation_10_distance = variation(last_distance, average_10_distance);
	const variation_10_speed = variation(last_speed, average_10_speed);
	const variation_10_elevation = variation(last_elevation, average_10_elevation);
	const writable_props = ["data_raw"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Cycling> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Cycling", $$slots, []);

	$$self.$set = $$props => {
		if ("data_raw" in $$props) $$invalidate(16, data_raw = $$props.data_raw);
	};

	$$self.$capture_state = () => ({
		preload,
		Charts: Cycling_charts,
		data_raw,
		list_meters,
		list_date,
		list_elevation,
		list_minutes,
		data,
		average,
		dividevector,
		variation,
		last_distance,
		last_hours,
		last_speed,
		last_elevation,
		distance_3_session,
		minutes_3_session,
		elevation_3_session,
		average_3_distance,
		average_3_elevation,
		average_3_speed,
		variation_3_distance,
		variation_3_speed,
		variation_3_elevation,
		distance_10_session,
		minutes_10_session,
		elevation_10_session,
		average_10_distance,
		average_10_elevation,
		average_10_speed,
		variation_10_distance,
		variation_10_speed,
		variation_10_elevation
	});

	$$self.$inject_state = $$props => {
		if ("data_raw" in $$props) $$invalidate(16, data_raw = $$props.data_raw);
		if ("list_meters" in $$props) list_meters = $$props.list_meters;
		if ("list_date" in $$props) list_date = $$props.list_date;
		if ("list_elevation" in $$props) list_elevation = $$props.list_elevation;
		if ("list_minutes" in $$props) list_minutes = $$props.list_minutes;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		data,
		last_distance,
		last_speed,
		last_elevation,
		average_3_distance,
		average_3_elevation,
		average_3_speed,
		variation_3_distance,
		variation_3_speed,
		variation_3_elevation,
		average_10_distance,
		average_10_elevation,
		average_10_speed,
		variation_10_distance,
		variation_10_speed,
		variation_10_elevation,
		data_raw
	];
}

class Cycling extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_raw: 16, data: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cycling",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_raw*/ ctx[16] === undefined && !("data_raw" in props)) {
			console.warn("<Cycling> was created without expected prop 'data_raw'");
		}
	}

	get data_raw() {
		throw new Error("<Cycling>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data_raw(value) {
		throw new Error("<Cycling>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get data() {
		return this.$$.ctx[0];
	}

	set data(value) {
		throw new Error("<Cycling>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Cycling;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3ljbGluZy5hNjE5OGRlNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvY3ljbGluZy9jeWNsaW5nLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdHJldHVybiB0aGlzLmZldGNoKGBzcG9ydHMvY3ljbGluZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGFfcmF3ID0+IHtcblx0XHRcdHJldHVybiB7IGRhdGFfcmF3IH07XG5cdFx0fSk7XG5cdH1cdFxuICAgIFxuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgQ2hhcnRzIGZyb20gJy4vY3ljbGluZy1jaGFydHMuc3ZlbHRlJ1xuICAgIGV4cG9ydCBsZXQgZGF0YV9yYXdcblxuXG4vLyBDb21wdXRlIGRhdGEgZm9yIGNoYXJ0c1xuXG4gICAgbGV0IGxpc3RfbWV0ZXJzID0gW107XG4gICAgbGV0IGxpc3RfZGF0ZSA9IFtdO1xuICAgIGxldCBsaXN0X2VsZXZhdGlvbiA9IFtdO1xuICAgIGxldCBsaXN0X21pbnV0ZXMgPSBbXTtcblxuICAgIGRhdGFfcmF3LmZvckVhY2goeCA9PiB7XG4gICAgICAgIGxpc3RfbWV0ZXJzLnB1c2goeC5tZXRlcnMpXG4gICAgICAgIGxpc3RfZGF0ZS5wdXNoKHguZGF0ZSlcbiAgICAgICAgbGlzdF9lbGV2YXRpb24ucHVzaCh4LmVsZXZhdGlvbilcbiAgICAgICAgbGlzdF9taW51dGVzLnB1c2goeC5taW51dGVzKVxuICAgICAgICBcbiAgICB9KVxuXG4gICAgZXhwb3J0IGNvbnN0IGRhdGEgPSB7XG4gICAgbGFiZWxzOiBsaXN0X2RhdGUsXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICAgIGxhYmVsOiAnTWV0ZXJzIGNvdmVyZWQnLFxuICAgICAgICB5QXhpc0lEIDogJ01ldGVycyBjb3ZlcmVkJyxcbiAgICAgICAgZGF0YTpsaXN0X21ldGVycyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNlOTVjZFwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ2VsZXZhdGlvbicsXG4gICAgICAgIGRhdGE6bGlzdF9lbGV2YXRpb24sXG4gICAgICAgIHlBeGlzSUQgOiAnZWxldmF0aW9uJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzhlNWVhMlwiLFxuICAgICAgICBmaWxsOiBmYWxzZVxuICAgIH1dXG59XG5cbi8vIFRPRE86IHZlcmlmaXkgb3JkZXJpbmcgb2YgZGF0ZXMgYW5kIHNlc3Npb25zXG5cbmNvbnN0IGF2ZXJhZ2UgPSBhcnIgPT4gYXJyLnJlZHVjZSggKCBwLCBjICkgPT4gcCArIGMsIDAgKSAvIGFyci5sZW5ndGg7XG5cbmZ1bmN0aW9uIGRpdmlkZXZlY3RvcihhLGIpe1xuICAgIHJldHVybiBhLm1hcCgoZSxpKSA9PiBlIC8gYltpXSk7XG59XG5cbmZ1bmN0aW9uIHZhcmlhdGlvbih4X25ldywgeF9vbGQpe1xuICAgIGNvbnN0IHZhcmlhdGlvbiA9IE1hdGgucm91bmQoKHhfbmV3LXhfb2xkKS94X29sZCoxMDApXG4gICAgcmV0dXJuIHZhcmlhdGlvblxufVxuXG4vLyBDb21wdXRlIGF2ZXJhZ2UgZGlzdGFuY2UsIHNwZWVkLCBlbGV2YXRpb24sIFxuLy8gTGFzdCBzZXNzaW9uXG5jb25zdCBsYXN0X2Rpc3RhbmNlID0gbGlzdF9tZXRlcnNbbGlzdF9tZXRlcnMubGVuZ3RoLTFdXG5jb25zdCBsYXN0X2hvdXJzID0gbGlzdF9taW51dGVzW2xpc3RfbWludXRlcy5sZW5ndGgtMV0vNjBcbmNvbnN0IGxhc3Rfc3BlZWQgPSBsYXN0X2Rpc3RhbmNlLzEwMDAvbGFzdF9ob3Vyc1xuY29uc3QgbGFzdF9lbGV2YXRpb24gPSBsaXN0X2VsZXZhdGlvbltsaXN0X2VsZXZhdGlvbi5sZW5ndGgtMV1cblxuXG4vLyBMYXN0IDMgc2Vzc2lvbnNcbmNvbnN0IGRpc3RhbmNlXzNfc2Vzc2lvbiA9IGxpc3RfbWV0ZXJzLnNsaWNlKE1hdGgubWF4KGxpc3RfbWV0ZXJzLmxlbmd0aCAtIDMsIDApKVxuY29uc3QgbWludXRlc18zX3Nlc3Npb24gPSBsaXN0X21pbnV0ZXMuc2xpY2UoTWF0aC5tYXgobGlzdF9taW51dGVzLmxlbmd0aCAtIDMsIDApKVxuY29uc3QgZWxldmF0aW9uXzNfc2Vzc2lvbiA9IGxpc3RfZWxldmF0aW9uLnNsaWNlKE1hdGgubWF4KGxpc3RfZWxldmF0aW9uLmxlbmd0aCAtIDMsIDApKVxuXG5cbmNvbnN0IGF2ZXJhZ2VfM19kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfM19zZXNzaW9uKVxuY29uc3QgYXZlcmFnZV8zX2VsZXZhdGlvbiA9IGF2ZXJhZ2UoZWxldmF0aW9uXzNfc2Vzc2lvbilcbmNvbnN0IGF2ZXJhZ2VfM19zcGVlZCA9IGF2ZXJhZ2UoZGl2aWRldmVjdG9yKGRpc3RhbmNlXzNfc2Vzc2lvbiAsIG1pbnV0ZXNfM19zZXNzaW9uKSkgKiA2MC8xMDAwXG5cbmNvbnN0IHZhcmlhdGlvbl8zX2Rpc3RhbmNlID0gdmFyaWF0aW9uKGxhc3RfZGlzdGFuY2UsIGF2ZXJhZ2VfM19kaXN0YW5jZSlcbmNvbnN0IHZhcmlhdGlvbl8zX3NwZWVkID0gdmFyaWF0aW9uKGxhc3Rfc3BlZWQsIGF2ZXJhZ2VfM19zcGVlZClcbmNvbnN0IHZhcmlhdGlvbl8zX2VsZXZhdGlvbiA9IHZhcmlhdGlvbihsYXN0X2VsZXZhdGlvbiwgYXZlcmFnZV8zX2VsZXZhdGlvbilcblxuLy8gTGFzdCAxMCBzZXNzaW9uc1xuY29uc3QgZGlzdGFuY2VfMTBfc2Vzc2lvbiA9IGxpc3RfbWV0ZXJzLnNsaWNlKE1hdGgubWF4KGxpc3RfbWV0ZXJzLmxlbmd0aCAtIDEwLCAwKSlcbmNvbnN0IG1pbnV0ZXNfMTBfc2Vzc2lvbiA9IGxpc3RfbWludXRlcy5zbGljZShNYXRoLm1heChsaXN0X21pbnV0ZXMubGVuZ3RoIC0gMTAsIDApKVxuY29uc3QgZWxldmF0aW9uXzEwX3Nlc3Npb24gPSBsaXN0X2VsZXZhdGlvbi5zbGljZShNYXRoLm1heChsaXN0X2VsZXZhdGlvbi5sZW5ndGggLSAxMCwgMCkpXG5cblxuY29uc3QgYXZlcmFnZV8xMF9kaXN0YW5jZSA9IGF2ZXJhZ2UoZGlzdGFuY2VfMTBfc2Vzc2lvbilcbmNvbnN0IGF2ZXJhZ2VfMTBfZWxldmF0aW9uID0gYXZlcmFnZShlbGV2YXRpb25fMTBfc2Vzc2lvbilcbmNvbnN0IGF2ZXJhZ2VfMTBfc3BlZWQgPSBhdmVyYWdlKGRpdmlkZXZlY3RvcihkaXN0YW5jZV8xMF9zZXNzaW9uICwgbWludXRlc18xMF9zZXNzaW9uKSkgKiA2MC8xMDAwXG5cbmNvbnN0IHZhcmlhdGlvbl8xMF9kaXN0YW5jZSA9IHZhcmlhdGlvbihsYXN0X2Rpc3RhbmNlLCBhdmVyYWdlXzEwX2Rpc3RhbmNlKVxuY29uc3QgdmFyaWF0aW9uXzEwX3NwZWVkID0gdmFyaWF0aW9uKGxhc3Rfc3BlZWQsIGF2ZXJhZ2VfMTBfc3BlZWQpXG5jb25zdCB2YXJpYXRpb25fMTBfZWxldmF0aW9uID0gdmFyaWF0aW9uKGxhc3RfZWxldmF0aW9uLCBhdmVyYWdlXzEwX2VsZXZhdGlvbilcblxuXG5cblxuXG48L3NjcmlwdD5cblxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG5cbjxkaXYgY2xhc3M9XCJmbGV4IGgtNDhcIj5cbiAgPGRpdiBjbGFzcz1cImZsZXgtaW5pdGlhbCB3LTIvMyBwLTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcC0yIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgYmctZ3JheS0xMDBcIj5cbiAgICBDeWNsaW5nIFBlcmZvcm1hbmNlXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZmxleC1pbml0aWFsIHctMS8zIHAtMlwiPlxuICAgIDxkaXYgY2xhc3M9XCIgdGV4dC1yaWdodCBwLTJcIj5cbiAgICA8aW1nIHNyYz1cImN5Y2xpbmcuanBnXCIgYWx0PVwiY3ljbGluZ1wiPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG5cbjxkaXYgY2xhc3M9J3B4LTEwJz5cbllvdXIgbGFzdCBzZXNzaW9ucyB0b29rIHBsYWNlIG9uOiBcbiAgICA8bHU+XG4gICAgPGxpPnlvPC9saT5cbiAgICAgICAgPGxpPnlvPC9saT5cblxuICAgIDwvbHU+XG48L2Rpdj5cblxuXG48ZGl2IGNsYXNzPSdwLTEwJz5cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS1hdXRvIHRleHQtY2VudGVyIFwiPlxuICAgIDx0aGVhZD5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGggY2xhc3M9XCJweC00IHB5LTJcIj5NZXRyaWNzPC90aD5cbiAgICAgICAgPHRoIGNsYXNzPVwicHgtNCBweS0yXCI+VmFsdWU8L3RoPlxuICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtNCBweS0yIFwiPnZzLiBMYXN0IDMgc2Vzc2lvbnM8L3RoPlxuICAgICAgICA8dGggY29sc3Bhbj0yIGNsYXNzPVwicHgtNCBweS0yXCI+dnMuIExhc3QgMTAgc2Vzc2lvbnM8L3RoPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG4gICAgPHRib2R5PlxuICAgICAgICA8dHI+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj5EaXN0YW5jZSAobSk8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2xhc3RfZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnthdmVyYWdlXzNfZGlzdGFuY2V9PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnt2YXJpYXRpb25fM19kaXN0YW5jZX0lPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnthdmVyYWdlXzEwX2Rpc3RhbmNlfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzEwX2Rpc3RhbmNlfSU8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgY2xhc3M9XCJiZy1ncmF5LTEwMFwiPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+U3BlZWQgKGttL2gpPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPntsYXN0X3NwZWVkfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57YXZlcmFnZV8zX3NwZWVkfTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfc3BlZWR9JTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57YXZlcmFnZV8xMF9zcGVlZH08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e3ZhcmlhdGlvbl8xMF9zcGVlZH0lPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPHRyPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+RWxldmF0aW9uIChtKTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57bGFzdF9lbGV2YXRpb259PC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIHB4LTQgcHktMlwiPnthdmVyYWdlXzNfZWxldmF0aW9ufTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzNfZWxldmF0aW9ufSU8L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgcHgtNCBweS0yXCI+e2F2ZXJhZ2VfMTBfZWxldmF0aW9ufTwvdGQ+XG4gICAgICAgIDx0ZCBjbGFzcz1cImJvcmRlciBweC00IHB5LTJcIj57dmFyaWF0aW9uXzEwX2VsZXZhdGlvbn0lPC90ZD5cbiBcbiAgICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG48L2Rpdj5cblxuXG5cbjxkaXYgPlxuXHQ8aDMgY2xhc3M9XCJweC0xMCBweS01XCI+U2VlIHlvdXIgZXZvbHV0aW9uIGluIHRoaXMgY2hhcnQ6PC9oMz5cbiAgICAgPENoYXJ0cyB7ZGF0YX0gLz4gXG48L2Rpdj5cblxuPGRpdj5cbkdldCB0aGUgZGF0YSBhdmFpbGFibGUgaW4gdGFibGVcbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FrSnNDLEdBQWE7OztxQ0FDYixHQUFrQjs7O3VDQUNsQixHQUFvQjs7OztzQ0FDcEIsR0FBbUI7Ozt3Q0FDbkIsR0FBcUI7Ozs7Ozs7OzZCQUlyQixHQUFVOzs7a0NBQ1YsR0FBZTs7O29DQUNmLEdBQWlCOzs7O21DQUNqQixHQUFnQjs7O3FDQUNoQixHQUFrQjs7Ozs7Ozs7aUNBSWxCLEdBQWM7OztzQ0FDZCxHQUFtQjs7O3dDQUNuQixHQUFxQjs7Ozt1Q0FDckIsR0FBb0I7Ozt5Q0FDcEIsR0FBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBcEJ0QixHQUFhOzs7OztzREFDYixHQUFrQjs7Ozs7d0RBQ2xCLEdBQW9COzs7Ozs7dURBQ3BCLEdBQW1COzs7Ozt5REFDbkIsR0FBcUI7Ozs7Ozs7Ozs7Ozs7OzhDQUlyQixHQUFVOzs7OzttREFDVixHQUFlOzs7OztxREFDZixHQUFpQjs7Ozs7O3FEQUNqQixHQUFnQjs7Ozs7dURBQ2hCLEdBQWtCOzs7Ozs7Ozs7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
