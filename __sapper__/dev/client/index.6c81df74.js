import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.636e3a57.js';
import './_commonjsHelpers.1e235def.js';
import Frappe_charts from './frappe-charts.03562775.js';
import Chart from './chart.4173372d.js';

/*
console.log(newSession('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}]))

console.log(newSession('swimming', [{'param': 'id_session', 'value' : 4}, {'param': 'meters', 'value' : 4}, {'param': 'minutes', 'value' : 4}, {'param': 'sprints', 'value' : 4}, {'param': 'date', 'value' : 4}]))

console.log(performance_data)
*/


function addCustomSport(sport, ...args){
return 'yeah output'
}


/*


function addCustomExercise(sport, ...args){

}


*/




console.log('everything working');


function test(string){
    return string
}

/* src/routes/index.svelte generated by Svelte v3.22.3 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let div3;
	let div2;
	let div1;
	let h10;
	let t2;
	let t3;
	let br0;
	let t4;
	let div11;
	let div9;
	let div8;
	let div4;
	let h11;
	let t5;
	let t6;
	let p0;
	let t7;
	let t8;
	let div5;
	let h12;
	let t9;
	let t10;
	let p1;
	let t11;
	let t12;
	let div7;
	let h13;
	let t13;
	let t14;
	let div6;
	let p2;
	let t15;
	let t16;
	let lu;
	let li0;
	let t17;
	let t18;
	let li1;
	let t19;
	let t20;
	let li2;
	let t21;
	let t22;
	let li3;
	let t23;
	let t24;
	let p3;
	let t25;
	let t26;
	let div10;
	let t27;
	let t28;
	let br1;
	let t29;
	let br2;
	let t30;
	let br3;
	let t31;
	let br4;
	let t32;
	let br5;
	let t33;
	let h20;
	let t34;
	let t35;
	let p4;
	let t36;
	let t37;
	let p5;
	let t38;
	let t39;
	let p6;
	let t40;
	let t41;
	let p7;
	let t42;
	let t43;
	let p8;
	let t44;
	let t45;
	let p9;
	let t46;
	let t47;
	let p10;
	let t48;
	let t49;
	let br6;
	let t50;
	let h21;
	let t51;
	let t52;
	let p11;
	let t53;
	let t54;
	let p12;
	let t55;
	let t56;
	let p13;
	let t57;
	let t58;
	let br7;
	let t59;
	let h22;
	let t60;
	let t61;
	let p14;
	let t62;
	let t63;
	let p15;
	let t64;

	const block = {
		c: function create() {
			t0 = space();
			div0 = element("div");
			img = element("img");
			t1 = space();
			div3 = element("div");
			div2 = element("div");
			div1 = element("div");
			h10 = element("h1");
			t2 = text("Welcome to the Sport Performance Assistant !");
			t3 = space();
			br0 = element("br");
			t4 = space();
			div11 = element("div");
			div9 = element("div");
			div8 = element("div");
			div4 = element("div");
			h11 = element("h1");
			t5 = text("Why using the Sport Assistant App?");
			t6 = space();
			p0 = element("p");
			t7 = text("It can be hard to measure progress in sports performance. \n\tWe think this evolution towards better performance is what truly motivate us to give our best in sports sessions.\n\tThis application is here to help you track your progress from one sport session to another.");
			t8 = space();
			div5 = element("div");
			h12 = element("h1");
			t9 = text("How to use the App?");
			t10 = space();
			p1 = element("p");
			t11 = text("Once you finished your sport session, record your performance in the 'New Session' tab. \n\tFor now, you can save sessions for running, cycling, swimming and working out. \n\tThen, go to the 'Performance' tab and observe the progress you made.");
			t12 = space();
			div7 = element("div");
			h13 = element("h1");
			t13 = text("What's next?");
			t14 = space();
			div6 = element("div");
			p2 = element("p");
			t15 = text("This is a first version of our website and we intend to improve it further to allow for more features and a better experience.\n\tWe are thinking of implementing options to:");
			t16 = space();
			lu = element("lu");
			li0 = element("li");
			t17 = text("Add more sports");
			t18 = space();
			li1 = element("li");
			t19 = text("Delete sessions that were wrongly entered");
			t20 = space();
			li2 = element("li");
			t21 = text("Add an authentification system");
			t22 = space();
			li3 = element("li");
			t23 = text("Improve and add new visualizations.");
			t24 = space();
			p3 = element("p");
			t25 = text("We hope you enjoy our App and that it helps you staying motivated!\n\tFeel free to contact us to give your thoughts about features you would like to see in the App.");
			t26 = space();
			div10 = element("div");
			t27 = text("Calendar of your last sport sessions :");
			t28 = space();
			br1 = element("br");
			t29 = space();
			br2 = element("br");
			t30 = space();
			br3 = element("br");
			t31 = space();
			br4 = element("br");
			t32 = space();
			br5 = element("br");
			t33 = space();
			h20 = element("h2");
			t34 = text("Todo list important:");
			t35 = space();
			p4 = element("p");
			t36 = text("layout workout");
			t37 = space();
			p5 = element("p");
			t38 = text("integrer layout performance valentin");
			t39 = space();
			p6 = element("p");
			t40 = text("Calendar of last sessions home page");
			t41 = space();
			p7 = element("p");
			t42 = text("Home page : qu'est ce que le site?");
			t43 = space();
			p8 = element("p");
			t44 = text("Verifier ordre date correspond a ordre json");
			t45 = space();
			p9 = element("p");
			t46 = text("Variation vert rouge pale doux");
			t47 = space();
			p10 = element("p");
			t48 = text("Rajouter icons calendrier performance");
			t49 = space();
			br6 = element("br");
			t50 = space();
			h21 = element("h2");
			t51 = text("Todolist moins important :");
			t52 = space();
			p11 = element("p");
			t53 = text("Radar chart of sports");
			t54 = space();
			p12 = element("p");
			t55 = text("Options pour supprimer des données de la base en cas d'erreur");
			t56 = space();
			p13 = element("p");
			t57 = text("Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/");
			t58 = space();
			br7 = element("br");
			t59 = space();
			h22 = element("h2");
			t60 = text("Done:");
			t61 = space();
			p14 = element("p");
			t62 = text("Work out performance et new session");
			t63 = space();
			p15 = element("p");
			t64 = text("Data WOrkout");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-rblobr\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h10 = claim_element(div1_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t2 = claim_text(h10_nodes, "Welcome to the Sport Performance Assistant !");
			h10_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", {});
			t4 = claim_space(nodes);
			div11 = claim_element(nodes, "DIV", { class: true });
			var div11_nodes = children(div11);
			div9 = claim_element(div11_nodes, "DIV", { class: true });
			var div9_nodes = children(div9);
			div8 = claim_element(div9_nodes, "DIV", { class: true });
			var div8_nodes = children(div8);
			div4 = claim_element(div8_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			h11 = claim_element(div4_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t5 = claim_text(h11_nodes, "Why using the Sport Assistant App?");
			h11_nodes.forEach(detach_dev);
			t6 = claim_space(div4_nodes);
			p0 = claim_element(div4_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t7 = claim_text(p0_nodes, "It can be hard to measure progress in sports performance. \n\tWe think this evolution towards better performance is what truly motivate us to give our best in sports sessions.\n\tThis application is here to help you track your progress from one sport session to another.");
			p0_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t8 = claim_space(div8_nodes);
			div5 = claim_element(div8_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			h12 = claim_element(div5_nodes, "H1", { class: true });
			var h12_nodes = children(h12);
			t9 = claim_text(h12_nodes, "How to use the App?");
			h12_nodes.forEach(detach_dev);
			t10 = claim_space(div5_nodes);
			p1 = claim_element(div5_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t11 = claim_text(p1_nodes, "Once you finished your sport session, record your performance in the 'New Session' tab. \n\tFor now, you can save sessions for running, cycling, swimming and working out. \n\tThen, go to the 'Performance' tab and observe the progress you made.");
			p1_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t12 = claim_space(div8_nodes);
			div7 = claim_element(div8_nodes, "DIV", { class: true });
			var div7_nodes = children(div7);
			h13 = claim_element(div7_nodes, "H1", { class: true });
			var h13_nodes = children(h13);
			t13 = claim_text(h13_nodes, "What's next?");
			h13_nodes.forEach(detach_dev);
			t14 = claim_space(div7_nodes);
			div6 = claim_element(div7_nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			p2 = claim_element(div6_nodes, "P", {});
			var p2_nodes = children(p2);
			t15 = claim_text(p2_nodes, "This is a first version of our website and we intend to improve it further to allow for more features and a better experience.\n\tWe are thinking of implementing options to:");
			p2_nodes.forEach(detach_dev);
			t16 = claim_space(div6_nodes);
			lu = claim_element(div6_nodes, "LU", {});
			var lu_nodes = children(lu);
			li0 = claim_element(lu_nodes, "LI", {});
			var li0_nodes = children(li0);
			t17 = claim_text(li0_nodes, "Add more sports");
			li0_nodes.forEach(detach_dev);
			t18 = claim_space(lu_nodes);
			li1 = claim_element(lu_nodes, "LI", {});
			var li1_nodes = children(li1);
			t19 = claim_text(li1_nodes, "Delete sessions that were wrongly entered");
			li1_nodes.forEach(detach_dev);
			t20 = claim_space(lu_nodes);
			li2 = claim_element(lu_nodes, "LI", {});
			var li2_nodes = children(li2);
			t21 = claim_text(li2_nodes, "Add an authentification system");
			li2_nodes.forEach(detach_dev);
			t22 = claim_space(lu_nodes);
			li3 = claim_element(lu_nodes, "LI", {});
			var li3_nodes = children(li3);
			t23 = claim_text(li3_nodes, "Improve and add new visualizations.");
			li3_nodes.forEach(detach_dev);
			lu_nodes.forEach(detach_dev);
			t24 = claim_space(div6_nodes);
			p3 = claim_element(div6_nodes, "P", {});
			var p3_nodes = children(p3);
			t25 = claim_text(p3_nodes, "We hope you enjoy our App and that it helps you staying motivated!\n\tFeel free to contact us to give your thoughts about features you would like to see in the App.");
			p3_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			div9_nodes.forEach(detach_dev);
			t26 = claim_space(div11_nodes);
			div10 = claim_element(div11_nodes, "DIV", { class: true });
			var div10_nodes = children(div10);
			t27 = claim_text(div10_nodes, "Calendar of your last sport sessions :");
			div10_nodes.forEach(detach_dev);
			div11_nodes.forEach(detach_dev);
			t28 = claim_space(nodes);
			br1 = claim_element(nodes, "BR", {});
			t29 = claim_space(nodes);
			br2 = claim_element(nodes, "BR", {});
			t30 = claim_space(nodes);
			br3 = claim_element(nodes, "BR", {});
			t31 = claim_space(nodes);
			br4 = claim_element(nodes, "BR", {});
			t32 = claim_space(nodes);
			br5 = claim_element(nodes, "BR", {});
			t33 = claim_space(nodes);
			h20 = claim_element(nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t34 = claim_text(h20_nodes, "Todo list important:");
			h20_nodes.forEach(detach_dev);
			t35 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t36 = claim_text(p4_nodes, "layout workout");
			p4_nodes.forEach(detach_dev);
			t37 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t38 = claim_text(p5_nodes, "integrer layout performance valentin");
			p5_nodes.forEach(detach_dev);
			t39 = claim_space(nodes);
			p6 = claim_element(nodes, "P", {});
			var p6_nodes = children(p6);
			t40 = claim_text(p6_nodes, "Calendar of last sessions home page");
			p6_nodes.forEach(detach_dev);
			t41 = claim_space(nodes);
			p7 = claim_element(nodes, "P", {});
			var p7_nodes = children(p7);
			t42 = claim_text(p7_nodes, "Home page : qu'est ce que le site?");
			p7_nodes.forEach(detach_dev);
			t43 = claim_space(nodes);
			p8 = claim_element(nodes, "P", {});
			var p8_nodes = children(p8);
			t44 = claim_text(p8_nodes, "Verifier ordre date correspond a ordre json");
			p8_nodes.forEach(detach_dev);
			t45 = claim_space(nodes);
			p9 = claim_element(nodes, "P", {});
			var p9_nodes = children(p9);
			t46 = claim_text(p9_nodes, "Variation vert rouge pale doux");
			p9_nodes.forEach(detach_dev);
			t47 = claim_space(nodes);
			p10 = claim_element(nodes, "P", {});
			var p10_nodes = children(p10);
			t48 = claim_text(p10_nodes, "Rajouter icons calendrier performance");
			p10_nodes.forEach(detach_dev);
			t49 = claim_space(nodes);
			br6 = claim_element(nodes, "BR", {});
			t50 = claim_space(nodes);
			h21 = claim_element(nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t51 = claim_text(h21_nodes, "Todolist moins important :");
			h21_nodes.forEach(detach_dev);
			t52 = claim_space(nodes);
			p11 = claim_element(nodes, "P", {});
			var p11_nodes = children(p11);
			t53 = claim_text(p11_nodes, "Radar chart of sports");
			p11_nodes.forEach(detach_dev);
			t54 = claim_space(nodes);
			p12 = claim_element(nodes, "P", {});
			var p12_nodes = children(p12);
			t55 = claim_text(p12_nodes, "Options pour supprimer des données de la base en cas d'erreur");
			p12_nodes.forEach(detach_dev);
			t56 = claim_space(nodes);
			p13 = claim_element(nodes, "P", {});
			var p13_nodes = children(p13);
			t57 = claim_text(p13_nodes, "Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/");
			p13_nodes.forEach(detach_dev);
			t58 = claim_space(nodes);
			br7 = claim_element(nodes, "BR", {});
			t59 = claim_space(nodes);
			h22 = claim_element(nodes, "H2", { class: true });
			var h22_nodes = children(h22);
			t60 = claim_text(h22_nodes, "Done:");
			h22_nodes.forEach(detach_dev);
			t61 = claim_space(nodes);
			p14 = claim_element(nodes, "P", {});
			var p14_nodes = children(p14);
			t62 = claim_text(p14_nodes, "Work out performance et new session");
			p14_nodes.forEach(detach_dev);
			t63 = claim_space(nodes);
			p15 = claim_element(nodes, "P", {});
			var p15_nodes = children(p15);
			t64 = claim_text(p15_nodes, "Data WOrkout");
			p15_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sport App";
			if (img.src !== (img_src_value = "index.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "work harder sign");
			attr_dev(img, "class", "antialiased bg-gray-600 object-cover h-48 w-full shadow rounded-md opacity-75");
			add_location(img, file, 16, 4, 264);
			attr_dev(div0, "class", "mb-6 shadow ");
			add_location(div0, file, 15, 0, 233);
			attr_dev(h10, "class", "text-4xl text-center text-blue-700 font-semibold tracking-widest");
			add_location(h10, file, 25, 8, 494);
			attr_dev(div1, "class", "flex justify-center mb-8");
			add_location(div1, file, 24, 4, 447);
			attr_dev(div2, "class", "");
			add_location(div2, file, 20, 1, 421);
			attr_dev(div3, "class", "");
			add_location(div3, file, 18, 1, 403);
			add_location(br0, file, 31, 0, 651);
			attr_dev(h11, "class", "text-blue-800");
			add_location(h11, file, 38, 1, 766);
			attr_dev(p0, "class", "p-4");
			add_location(p0, file, 42, 1, 850);
			attr_dev(div4, "class", "");
			add_location(div4, file, 37, 1, 750);
			attr_dev(h12, "class", "text-blue-800");
			add_location(h12, file, 49, 1, 1167);
			attr_dev(p1, "class", "p-4");
			add_location(p1, file, 52, 1, 1234);
			attr_dev(div5, "class", "pt-8");
			add_location(div5, file, 48, 0, 1147);
			attr_dev(h13, "class", "text-blue-800");
			add_location(h13, file, 59, 1, 1523);
			add_location(p2, file, 63, 1, 1603);
			add_location(li0, file, 66, 1, 1791);
			add_location(li1, file, 68, 1, 1819);
			add_location(li2, file, 70, 1, 1873);
			add_location(li3, file, 72, 1, 1916);
			add_location(lu, file, 65, 1, 1785);
			add_location(p3, file, 75, 1, 1971);
			attr_dev(div6, "class", "p-4");
			add_location(div6, file, 62, 2, 1584);
			attr_dev(div7, "class", "pt-8");
			add_location(div7, file, 58, 0, 1503);
			attr_dev(div8, "class", "divide-y divide-gray-400 ");
			add_location(div8, file, 35, 1, 707);
			attr_dev(div9, "class", " w-2/3 p-4");
			add_location(div9, file, 34, 2, 681);
			attr_dev(div10, "class", "flex-initial w-1/3 p-4");
			add_location(div10, file, 83, 2, 2178);
			attr_dev(div11, "class", "flex ");
			add_location(div11, file, 33, 0, 659);
			add_location(br1, file, 89, 0, 2274);
			add_location(br2, file, 90, 0, 2281);
			add_location(br3, file, 91, 0, 2288);
			add_location(br4, file, 92, 0, 2295);
			add_location(br5, file, 93, 0, 2302);
			attr_dev(h20, "class", "font-semibold");
			add_location(h20, file, 96, 0, 2311);
			add_location(p4, file, 97, 0, 2363);
			add_location(p5, file, 98, 0, 2385);
			add_location(p6, file, 99, 0, 2430);
			add_location(p7, file, 100, 0, 2473);
			add_location(p8, file, 101, 0, 2515);
			add_location(p9, file, 102, 0, 2566);
			add_location(p10, file, 103, 0, 2605);
			add_location(br6, file, 104, 0, 2650);
			attr_dev(h21, "class", "font-semibold");
			add_location(h21, file, 106, 0, 2657);
			add_location(p11, file, 107, 0, 2716);
			add_location(p12, file, 108, 0, 2745);
			add_location(p13, file, 109, 0, 2814);
			add_location(br7, file, 112, 0, 2919);
			attr_dev(h22, "class", "font-semibold");
			add_location(h22, file, 115, 0, 2927);
			add_location(p14, file, 116, 0, 2965);
			add_location(p15, file, 117, 0, 3008);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, img);
			insert_dev(target, t1, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div1, h10);
			append_dev(h10, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, br0, anchor);
			insert_dev(target, t4, anchor);
			insert_dev(target, div11, anchor);
			append_dev(div11, div9);
			append_dev(div9, div8);
			append_dev(div8, div4);
			append_dev(div4, h11);
			append_dev(h11, t5);
			append_dev(div4, t6);
			append_dev(div4, p0);
			append_dev(p0, t7);
			append_dev(div8, t8);
			append_dev(div8, div5);
			append_dev(div5, h12);
			append_dev(h12, t9);
			append_dev(div5, t10);
			append_dev(div5, p1);
			append_dev(p1, t11);
			append_dev(div8, t12);
			append_dev(div8, div7);
			append_dev(div7, h13);
			append_dev(h13, t13);
			append_dev(div7, t14);
			append_dev(div7, div6);
			append_dev(div6, p2);
			append_dev(p2, t15);
			append_dev(div6, t16);
			append_dev(div6, lu);
			append_dev(lu, li0);
			append_dev(li0, t17);
			append_dev(lu, t18);
			append_dev(lu, li1);
			append_dev(li1, t19);
			append_dev(lu, t20);
			append_dev(lu, li2);
			append_dev(li2, t21);
			append_dev(lu, t22);
			append_dev(lu, li3);
			append_dev(li3, t23);
			append_dev(div6, t24);
			append_dev(div6, p3);
			append_dev(p3, t25);
			append_dev(div11, t26);
			append_dev(div11, div10);
			append_dev(div10, t27);
			insert_dev(target, t28, anchor);
			insert_dev(target, br1, anchor);
			insert_dev(target, t29, anchor);
			insert_dev(target, br2, anchor);
			insert_dev(target, t30, anchor);
			insert_dev(target, br3, anchor);
			insert_dev(target, t31, anchor);
			insert_dev(target, br4, anchor);
			insert_dev(target, t32, anchor);
			insert_dev(target, br5, anchor);
			insert_dev(target, t33, anchor);
			insert_dev(target, h20, anchor);
			append_dev(h20, t34);
			insert_dev(target, t35, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t36);
			insert_dev(target, t37, anchor);
			insert_dev(target, p5, anchor);
			append_dev(p5, t38);
			insert_dev(target, t39, anchor);
			insert_dev(target, p6, anchor);
			append_dev(p6, t40);
			insert_dev(target, t41, anchor);
			insert_dev(target, p7, anchor);
			append_dev(p7, t42);
			insert_dev(target, t43, anchor);
			insert_dev(target, p8, anchor);
			append_dev(p8, t44);
			insert_dev(target, t45, anchor);
			insert_dev(target, p9, anchor);
			append_dev(p9, t46);
			insert_dev(target, t47, anchor);
			insert_dev(target, p10, anchor);
			append_dev(p10, t48);
			insert_dev(target, t49, anchor);
			insert_dev(target, br6, anchor);
			insert_dev(target, t50, anchor);
			insert_dev(target, h21, anchor);
			append_dev(h21, t51);
			insert_dev(target, t52, anchor);
			insert_dev(target, p11, anchor);
			append_dev(p11, t53);
			insert_dev(target, t54, anchor);
			insert_dev(target, p12, anchor);
			append_dev(p12, t55);
			insert_dev(target, t56, anchor);
			insert_dev(target, p13, anchor);
			append_dev(p13, t57);
			insert_dev(target, t58, anchor);
			insert_dev(target, br7, anchor);
			insert_dev(target, t59, anchor);
			insert_dev(target, h22, anchor);
			append_dev(h22, t60);
			insert_dev(target, t61, anchor);
			insert_dev(target, p14, anchor);
			append_dev(p14, t62);
			insert_dev(target, t63, anchor);
			insert_dev(target, p15, anchor);
			append_dev(p15, t64);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(br0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(div11);
			if (detaching) detach_dev(t28);
			if (detaching) detach_dev(br1);
			if (detaching) detach_dev(t29);
			if (detaching) detach_dev(br2);
			if (detaching) detach_dev(t30);
			if (detaching) detach_dev(br3);
			if (detaching) detach_dev(t31);
			if (detaching) detach_dev(br4);
			if (detaching) detach_dev(t32);
			if (detaching) detach_dev(br5);
			if (detaching) detach_dev(t33);
			if (detaching) detach_dev(h20);
			if (detaching) detach_dev(t35);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t37);
			if (detaching) detach_dev(p5);
			if (detaching) detach_dev(t39);
			if (detaching) detach_dev(p6);
			if (detaching) detach_dev(t41);
			if (detaching) detach_dev(p7);
			if (detaching) detach_dev(t43);
			if (detaching) detach_dev(p8);
			if (detaching) detach_dev(t45);
			if (detaching) detach_dev(p9);
			if (detaching) detach_dev(t47);
			if (detaching) detach_dev(p10);
			if (detaching) detach_dev(t49);
			if (detaching) detach_dev(br6);
			if (detaching) detach_dev(t50);
			if (detaching) detach_dev(h21);
			if (detaching) detach_dev(t52);
			if (detaching) detach_dev(p11);
			if (detaching) detach_dev(t54);
			if (detaching) detach_dev(p12);
			if (detaching) detach_dev(t56);
			if (detaching) detach_dev(p13);
			if (detaching) detach_dev(t58);
			if (detaching) detach_dev(br7);
			if (detaching) detach_dev(t59);
			if (detaching) detach_dev(h22);
			if (detaching) detach_dev(t61);
			if (detaching) detach_dev(p14);
			if (detaching) detach_dev(t63);
			if (detaching) detach_dev(p15);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	$$self.$capture_state = () => ({
		FrappeChart: Frappe_charts,
		ChartJS: Chart,
		addCustomSport,
		test
	});

	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmM4MWRmNzQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIGNvbnN0IHVzZXJfbGlzdCA9IFtcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjEnLFxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQxXCIsXG4vLyAgICAgJ1VzZXJJZCcgOiAxfSxcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjInLFxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQyXCJcbi8vICAgICAnVXNlcklkJyA6IDJ9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyMycsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDNcIixcbi8vICAgICAnVXNlcklkJyA6IDN9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNCcsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDRcIixcbi8vICAgICAnVXNlcklkJyA6IDR9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNScsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDVcIixcbi8vICAgICAnVXNlcklkJyA6IDV9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNicsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDZcIixcbi8vICAgICAnVXNlcklkJyA6IDZ9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNycsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDdcIixcbi8vICAgICAnVXNlcklkJyA6IDd9XVxuXG5cblxuXG5cblxuY29uc3QgZXhlcmNpc2VfbGlzdCA9IFtcbiAgICB7J3Nwb3J0JzogJ3N3aW1taW5nJywgXG4gICAgJ2ltZ19zcmMnIDogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAncnVubmluZycsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAnY3ljbGluZycsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAnd29ya291dCcsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnc2Vzc2lvbl9kYXRhJywgJ2RhdGUnXX0sXG4gIF1cblxuY29uc3Qgd29ya291dF9leGVyY2lzZV9saXN0ID0gW1xuJycsICcnLCAnJ1xuXVxuXG5cblxuY29uc3QgcGVyZl91c2VyMSA9IFt7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMSxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ21ldGVycycgOiAxNTAwLFxuICAgICdtaW51dGVzJyA6IDYwLFxuICAgICduYl9zcHJpbnQnIDogM1xufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMixcbiAgICAnZGF0ZScgOiAnMDEtMDQtMjAyMCcsXG4gICAgJ21ldGVycycgOiAxNjAwLFxuICAgICdtaW51dGVzJyA6IDUxLFxuICAgICduYl9zcHJpbnQnIDogM1xufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMyxcbiAgICAnZGF0ZScgOiBcIjAyLTA0LTIwMjBcIixcbiAgICAnbWV0ZXJzJyA6IDE1MDAsXG4gICAgJ21pbnV0ZXMnIDogNTQsXG4gICAgJ25iX3NwcmludCcgOiA0XG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiA0LFxuICAgICdkYXRlJyA6ICcwMy0wNC0yMDIwJyxcbiAgICAnbWV0ZXJzJyA6IDE3MDAsXG4gICAgJ21pbnV0ZXMnIDogNzAsXG4gICAgJ25iX3NwcmludCcgOiAzXG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiA1LFxuICAgICdkYXRlJyA6IFwiMDUtMDQtMjAyMFwiLFxuICAgICdtZXRlcnMnIDogMTIwMCxcbiAgICAnbWludXRlcycgOiA0MCxcbiAgICAnbmJfc3ByaW50JyA6IDJcbn0se1xuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxuICAgICdpZF9zZXNzaW9uJyA6IDYsXG4gICAgJ2RhdGUnIDogXCIwNy0wNC0yMDIwXCIsXG4gICAgJ21ldGVycycgOiAxNDAwLFxuICAgICdtaW51dGVzJyA6IDUwLFxuICAgICduYl9zcHJpbnQnIDogM1xufVxuXG5dXG5cblxuY29uc3Qgd29ya291dF9leGVyY2lzZSA9IFtcbiAgICB7J25hbWUnOiAnU3F1YXRzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnU3RhaXIgQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0xhdGVyYWwgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdKdW1waW5nIFB1c2gtVXBzJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnQ2xvc2UgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdSYWlzZWQgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdBYmRvbWluYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0FiZG9taW5hbCBMYXRlcmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnQWJkb21pbmFscyd9LFxuICAgIHsnbmFtZSc6ICdDb3JlIEFiZG9taW5hbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1NlY29uZHMnXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0JlbmNoJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCAnZ3JvdXAnIDogJyd9LFxuICAgIHsnbmFtZSc6ICdCaWNlcHMgV2VpZ2h0JywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCdncm91cCcgOiAnJ30sXG4gICAgeyduYW1lJzogJ1B1bGwgVXBzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCdncm91cCcgOiAnJ30sXG4gICAgIFxuXVxuXG5cblxuY29uc3QgcGVyZjF3b3Jrb3V0ID0ge1xuICAgICdzcG9ydCcgOiAnd29ya291dCcsXG4gICAgJ1NxdWF0cycgOiB7J1NlcmllcycgOiAzLCAnTnVtYmVyJyA6IDMwfSxcbidQdXNoLVVwcycgOiB7J1NlcmllcycgOiAzLCAnTnVtYmVyJyA6IDI1fSxcbidMYXRlcmFsIFB1c2gtVXBzJyA6IHsnU2VyaWVzJyA6IDEsICdOdW1iZXInIDogMjV9LFxuJ0p1bXBpbmcgUHVzaC1VcHMnIDogeydTZXJpZXMnIDogMSwgJ051bWJlcicgOiAyNX0sXG4nQWJkb21pbmFsJyA6IHsnU2VyaWVzJyA6IDMsICdOdW1iZXInIDogMzB9LFxuJ0FiZG9taW5hbCBMYXRlcmFsJyA6IHsnU2VyaWVzJyA6IDMsICdOdW1iZXInIDogMzB9LFxuJ0JpY2VwcyBXZWlnaHQnOiB7J1NlcmllcycgOiAzLCAnV2VpZ2h0JyA6IDE1fVxufVxuXG5cblxuXG5cbmNvbnN0IHBlcmZfVXNlcklkID0gXG4gICAgeydzd2ltbWluZyc6IFtcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDEsXG4gICAgICAgICdtZXRlcnMnOiAxNTAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNTAsXG4gICAgJ3NwcmludCc6IDIsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICAgICAgfSxcdFx0XG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAyLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbicgOiAzLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgJ3J1bm5pbmcnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnbWV0ZXJzJyA6IDQ1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiA1MDAsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnbWV0ZXJzJyA6IDU1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiAyMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcblxuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzozLFxuICAgICdtZXRlcnMnIDogNjAwMCxcbiAgICAnZWxldmF0aW9uJyA6IDQwMCxcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgIH0sXG5dLFxuICAgICd3b3Jrb3V0JyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19LFxuICAgIHsnaWRfc2Vzc2lvbic6MyxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfVxuXSxcbidjeWNsaW5nJyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ21ldGVycycgOiAxNTAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdtZXRlcnMnIDogMTQwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6NCxcbiAgICAnbWV0ZXJzJyA6IDE4MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgfV19XG5cblxuY29uc3QgcGVyZm9ybWFuY2VfZGF0YSA9IFtcbiAgICB7J3VzZXInIDogJ1VzZXIxJyxcbiAgICAnc3dpbW1pbmcnOiBbXG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAxLFxuICAgICAgICAnbWV0ZXJzJzogMTUwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDUwLFxuICAgICdzcHJpbnQnOiAyLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgICAgIH0sXHRcdFxuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMixcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxuICAgICAgICAnbWludXRlcycgOiA2MCxcbiAgICAnc3ByaW50cycgOiAyLCAgXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbiAgICAgICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nIDogMyxcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxuICAgICAgICAnbWludXRlcycgOiA2MCxcbiAgICAnc3ByaW50cycgOiAyLCAgXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICAgICAgfSxcbiAgICBdLFxuICAgICdydW5uaW5nJyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ21ldGVycycgOiA0NTAwLFxuICAgICdlbGV2YXRpb24nIDogNTAwLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ21ldGVycycgOiA1NTAwLFxuICAgICdlbGV2YXRpb24nIDogMjAwLFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG5cbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MyxcbiAgICAnbWV0ZXJzJyA6IDYwMDAsXG4gICAgJ2VsZXZhdGlvbicgOiA0MDAsXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICB9LFxuXSxcbiAgICAnd29ya291dCcgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfSxcbiAgICB7J2lkX3Nlc3Npb24nOjMsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX1cbl0sXG4nY3ljbGluZycgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdtZXRlcnMnIDogMTUwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnbWV0ZXJzJyA6IDE0MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjQsXG4gICAgJ21ldGVycycgOiAxODAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgIH1dfSxcblxuXVxuXG5mdW5jdGlvbiBnZXRQZXJmb3JtYW5jZURhdGEoKXtcbnJldHVybiBwZXJmb3JtYW5jZV9kYXRhXG59XG5cbmZ1bmN0aW9uIGdldEV4ZXJjaXNlTGlzdCgpe1xucmV0dXJuIGV4ZXJjaXNlX2xpc3Rcbn1cblxuLy9jb25zb2xlLmxvZyhnZXRQZXJmb3JtYW5jZURhdGEoKSlcbi8vY29uc29sZS5sb2coZ2V0RXhlcmNpc2VMaXN0KCkpXG5cblxuXG5mdW5jdGlvbiBjaGVja0FsbElucHV0UHJvdmlkZWQoc3BvcnQsIGxpc3RPZklucHV0cyl7XG5leGVyY2lzZV9saXN0ID0gZ2V0RXhlcmNpc2VMaXN0KClcbi8vIEZpbmQgcmlnaHQgc3BvcnQgZGF0YVxubmVjZXNzYXJ5X2lucHV0ID0gZXhlcmNpc2VfbGlzdC5maWx0ZXIoZWwgPT4gZWxbJ3Nwb3J0J10gPT0gc3BvcnQpWzBdXG5uZWNlc3NhcnlfaW5wdXQgPSBuZWNlc3NhcnlfaW5wdXQuZmVhdHVyZXNcbi8vIERvbnQgbmVlZCB0byBjaGVjayBmb3IgaWRfc2Vzc2lvblxuaW5kZXggPSBuZWNlc3NhcnlfaW5wdXQuaW5kZXhPZignaWRfc2Vzc2lvbicpXG5uZWNlc3NhcnlfaW5wdXQuc3BsaWNlKGluZGV4LCAxKVxuLy9jb25zb2xlLmxvZyhsaXN0T2ZJbnB1dHMpXG5naXZlbnBhcmFtID0gW11cbmxpc3RPZklucHV0cy5mb3JFYWNoKGVsID0+IGdpdmVucGFyYW0ucHVzaChlbC5wYXJhbSkpXG5pZiAobmVjZXNzYXJ5X2lucHV0LmV2ZXJ5KGVsID0+IGdpdmVucGFyYW0uaW5jbHVkZXMoZWwpKSl7XG4gICAgcmV0dXJuIHRydWVcbn1cbmVsc2UgcmV0dXJuIG5lY2Vzc2FyeV9pbnB1dFxufVxuXG4vKlxuY29uc29sZS5sb2coY2hlY2tBbGxJbnB1dFByb3ZpZGVkKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKGNoZWNrQWxsSW5wdXRQcm92aWRlZCgnc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtaW51dGVzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ3NwcmludHMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnZGF0ZScsICd2YWx1ZScgOiA0fV0pKSBcbiovXG5cblxuZnVuY3Rpb24gbmV3U2Vzc2lvbihzcG9ydCwgbGlzdE9mSW5wdXRzKXsgXG5jaGVjayA9IGNoZWNrQWxsSW5wdXRQcm92aWRlZChzcG9ydCwgbGlzdE9mSW5wdXRzKVxuaWYgKGNoZWNrID09IHRydWUpe1xuICAgIGRpY3QgPSB7fVxuICAgIGxpc3RPZklucHV0cy5mb3JFYWNoKGVsID0+IGRpY3RbZWwucGFyYW1dID0gZWwudmFsdWUpXG4gICAgcGVyZm9ybWFuY2VfZGF0YVtzcG9ydF0ucHVzaChkaWN0KVxuICAgIHJldHVybiAnQWRkZWQgbmV3IHNlc3Npb24gc3VjY2Vzc2Z1bGx5J1xufVxuZWxzZXtcbiAgICByZXR1cm4gYFNvbWUgYXJndW1lbnRzIGFyZSBtaXNzaW5nIHRvIGFkZCBuZXcgc2Vzc2lvbiBmb3IgJHtzcG9ydH06ICR7Y2hlY2t9YFxufVxufVxuXG4vKlxuY29uc29sZS5sb2cobmV3U2Vzc2lvbignc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fV0pKVxuXG5jb25zb2xlLmxvZyhuZXdTZXNzaW9uKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21pbnV0ZXMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnc3ByaW50cycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdkYXRlJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKHBlcmZvcm1hbmNlX2RhdGEpXG4qL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDdXN0b21TcG9ydChzcG9ydCwgLi4uYXJncyl7XG5yZXR1cm4gJ3llYWggb3V0cHV0J1xufVxuXG5cbi8qXG5cblxuZnVuY3Rpb24gYWRkQ3VzdG9tRXhlcmNpc2Uoc3BvcnQsIC4uLmFyZ3Mpe1xuXG59XG5cblxuKi9cblxuXG5cblxuY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgd29ya2luZycpXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3Qoc3RyaW5nKXtcbiAgICByZXR1cm4gc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IHthZGRDdXN0b21TcG9ydCwgdGVzdH0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFzVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzlDLE9BQU8sYUFBYTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQztBQUNqQztBQUNBO0FBQ08sU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQUksT0FBTyxNQUFNO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
