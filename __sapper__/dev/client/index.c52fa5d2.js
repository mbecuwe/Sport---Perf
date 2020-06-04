import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.5cb79774.js';
import './_commonjsHelpers.1e235def.js';
import Frappe_charts from './frappe-charts.d7fc12de.js';
import Chart from './chart.90ca99da.js';

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
	let p0;
	let t1;
	let t2;
	let br0;
	let t3;
	let div3;
	let div1;
	let t4;
	let t5;
	let div2;
	let t6;
	let t7;
	let br1;
	let t8;
	let br2;
	let t9;
	let br3;
	let t10;
	let br4;
	let t11;
	let br5;
	let t12;
	let p1;
	let t13;
	let t14;
	let p2;
	let t15;
	let t16;
	let p3;
	let t17;
	let t18;
	let p4;
	let t19;
	let t20;
	let p5;
	let t21;
	let t22;
	let p6;
	let t23;
	let t24;
	let p7;
	let t25;
	let t26;
	let p8;
	let t27;

	const block = {
		c: function create() {
			t0 = space();
			div0 = element("div");
			p0 = element("p");
			t1 = text("Welcome to the Sport Performance Assistant !");
			t2 = space();
			br0 = element("br");
			t3 = space();
			div3 = element("div");
			div1 = element("div");
			t4 = text("Calendar of last sessions");
			t5 = space();
			div2 = element("div");
			t6 = text("Radar Chart of Global performance");
			t7 = space();
			br1 = element("br");
			t8 = space();
			br2 = element("br");
			t9 = space();
			br3 = element("br");
			t10 = space();
			br4 = element("br");
			t11 = space();
			br5 = element("br");
			t12 = space();
			p1 = element("p");
			t13 = text("Todo list:");
			t14 = space();
			p2 = element("p");
			t15 = text("Weight");
			t16 = space();
			p3 = element("p");
			t17 = text("Radar chart of sports");
			t18 = space();
			p4 = element("p");
			t19 = text("Calendar of last sessions");
			t20 = space();
			p5 = element("p");
			t21 = text("Options pour supprimer des données de la base en cas d'erreur");
			t22 = space();
			p6 = element("p");
			t23 = text("Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/");
			t24 = space();
			p7 = element("p");
			t25 = text("Verifier ordre date correspond a ordre json");
			t26 = space();
			p8 = element("p");
			t27 = text("Work out");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-je8uop\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "Welcome to the Sport Performance Assistant !");
			p0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			br0 = claim_element(nodes, "BR", {});
			t3 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t4 = claim_text(div1_nodes, "Calendar of last sessions");
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, "Radar Chart of Global performance");
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			br1 = claim_element(nodes, "BR", {});
			t8 = claim_space(nodes);
			br2 = claim_element(nodes, "BR", {});
			t9 = claim_space(nodes);
			br3 = claim_element(nodes, "BR", {});
			t10 = claim_space(nodes);
			br4 = claim_element(nodes, "BR", {});
			t11 = claim_space(nodes);
			br5 = claim_element(nodes, "BR", {});
			t12 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t13 = claim_text(p1_nodes, "Todo list:");
			p1_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t15 = claim_text(p2_nodes, "Weight");
			p2_nodes.forEach(detach_dev);
			t16 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t17 = claim_text(p3_nodes, "Radar chart of sports");
			p3_nodes.forEach(detach_dev);
			t18 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t19 = claim_text(p4_nodes, "Calendar of last sessions");
			p4_nodes.forEach(detach_dev);
			t20 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t21 = claim_text(p5_nodes, "Options pour supprimer des données de la base en cas d'erreur");
			p5_nodes.forEach(detach_dev);
			t22 = claim_space(nodes);
			p6 = claim_element(nodes, "P", {});
			var p6_nodes = children(p6);
			t23 = claim_text(p6_nodes, "Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/");
			p6_nodes.forEach(detach_dev);
			t24 = claim_space(nodes);
			p7 = claim_element(nodes, "P", {});
			var p7_nodes = children(p7);
			t25 = claim_text(p7_nodes, "Verifier ordre date correspond a ordre json");
			p7_nodes.forEach(detach_dev);
			t26 = claim_space(nodes);
			p8 = claim_element(nodes, "P", {});
			var p8_nodes = children(p8);
			t27 = claim_text(p8_nodes, "Work out");
			p8_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sport App - LogIn";
			attr_dev(p0, "class", "text-xl text-center");
			add_location(p0, file, 31, 1, 440);
			attr_dev(div0, "class", "text-center p-10");
			add_location(div0, file, 30, 0, 408);
			add_location(br0, file, 34, 0, 528);
			attr_dev(div1, "class", " w-1/3 p-4");
			add_location(div1, file, 37, 2, 558);
			attr_dev(div2, "class", "flex-initial w-2/3 p-4");
			add_location(div2, file, 41, 2, 626);
			attr_dev(div3, "class", "flex ");
			add_location(div3, file, 36, 0, 536);
			add_location(br1, file, 46, 0, 715);
			add_location(br2, file, 47, 0, 722);
			add_location(br3, file, 48, 0, 729);
			add_location(br4, file, 49, 0, 736);
			add_location(br5, file, 50, 0, 743);
			add_location(p1, file, 53, 0, 752);
			add_location(p2, file, 55, 0, 771);
			add_location(p3, file, 57, 0, 786);
			add_location(p4, file, 59, 0, 816);
			add_location(p5, file, 61, 0, 850);
			add_location(p6, file, 63, 0, 920);
			add_location(p7, file, 65, 0, 1024);
			add_location(p8, file, 67, 0, 1076);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div0, anchor);
			append_dev(div0, p0);
			append_dev(p0, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, br0, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div1);
			append_dev(div1, t4);
			append_dev(div3, t5);
			append_dev(div3, div2);
			append_dev(div2, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, br1, anchor);
			insert_dev(target, t8, anchor);
			insert_dev(target, br2, anchor);
			insert_dev(target, t9, anchor);
			insert_dev(target, br3, anchor);
			insert_dev(target, t10, anchor);
			insert_dev(target, br4, anchor);
			insert_dev(target, t11, anchor);
			insert_dev(target, br5, anchor);
			insert_dev(target, t12, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t13);
			insert_dev(target, t14, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t15);
			insert_dev(target, t16, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t17);
			insert_dev(target, t18, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t19);
			insert_dev(target, t20, anchor);
			insert_dev(target, p5, anchor);
			append_dev(p5, t21);
			insert_dev(target, t22, anchor);
			insert_dev(target, p6, anchor);
			append_dev(p6, t23);
			insert_dev(target, t24, anchor);
			insert_dev(target, p7, anchor);
			append_dev(p7, t25);
			insert_dev(target, t26, anchor);
			insert_dev(target, p8, anchor);
			append_dev(p8, t27);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(br0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(br1);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(br2);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(br3);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(br4);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(br5);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t16);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t18);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t20);
			if (detaching) detach_dev(p5);
			if (detaching) detach_dev(t22);
			if (detaching) detach_dev(p6);
			if (detaching) detach_dev(t24);
			if (detaching) detach_dev(p7);
			if (detaching) detach_dev(t26);
			if (detaching) detach_dev(p8);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzUyZmE1ZDIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIGNvbnN0IHVzZXJfbGlzdCA9IFtcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjEnLFxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQxXCIsXG4vLyAgICAgJ1VzZXJJZCcgOiAxfSxcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjInLFxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQyXCJcbi8vICAgICAnVXNlcklkJyA6IDJ9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyMycsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDNcIixcbi8vICAgICAnVXNlcklkJyA6IDN9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNCcsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDRcIixcbi8vICAgICAnVXNlcklkJyA6IDR9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNScsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDVcIixcbi8vICAgICAnVXNlcklkJyA6IDV9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNicsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDZcIixcbi8vICAgICAnVXNlcklkJyA6IDZ9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNycsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDdcIixcbi8vICAgICAnVXNlcklkJyA6IDd9XVxuXG5cblxuXG5cblxuY29uc3QgZXhlcmNpc2VfbGlzdCA9IFtcbiAgICB7J3Nwb3J0JzogJ3N3aW1taW5nJywgXG4gICAgJ2ltZ19zcmMnIDogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAncnVubmluZycsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAnY3ljbGluZycsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAnd29ya291dCcsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnc2Vzc2lvbl9kYXRhJywgJ2RhdGUnXX0sXG4gIF1cblxuY29uc3Qgd29ya291dF9leGVyY2lzZV9saXN0ID0gW1xuJycsICcnLCAnJ1xuXVxuXG5cblxuY29uc3QgcGVyZl91c2VyMSA9IFt7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMSxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ21ldGVycycgOiAxNTAwLFxuICAgICdtaW51dGVzJyA6IDYwLFxuICAgICduYl9zcHJpbnQnIDogM1xufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMixcbiAgICAnZGF0ZScgOiAnMDEtMDQtMjAyMCcsXG4gICAgJ21ldGVycycgOiAxNjAwLFxuICAgICdtaW51dGVzJyA6IDUxLFxuICAgICduYl9zcHJpbnQnIDogM1xufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMyxcbiAgICAnZGF0ZScgOiBcIjAyLTA0LTIwMjBcIixcbiAgICAnbWV0ZXJzJyA6IDE1MDAsXG4gICAgJ21pbnV0ZXMnIDogNTQsXG4gICAgJ25iX3NwcmludCcgOiA0XG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiA0LFxuICAgICdkYXRlJyA6ICcwMy0wNC0yMDIwJyxcbiAgICAnbWV0ZXJzJyA6IDE3MDAsXG4gICAgJ21pbnV0ZXMnIDogNzAsXG4gICAgJ25iX3NwcmludCcgOiAzXG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiA1LFxuICAgICdkYXRlJyA6IFwiMDUtMDQtMjAyMFwiLFxuICAgICdtZXRlcnMnIDogMTIwMCxcbiAgICAnbWludXRlcycgOiA0MCxcbiAgICAnbmJfc3ByaW50JyA6IDJcbn0se1xuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxuICAgICdpZF9zZXNzaW9uJyA6IDYsXG4gICAgJ2RhdGUnIDogXCIwNy0wNC0yMDIwXCIsXG4gICAgJ21ldGVycycgOiAxNDAwLFxuICAgICdtaW51dGVzJyA6IDUwLFxuICAgICduYl9zcHJpbnQnIDogM1xufVxuXG5dXG5cblxuY29uc3Qgd29ya291dF9leGVyY2lzZSA9IFtcbiAgICB7J25hbWUnOiAnU3F1YXRzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnU3RhaXIgQ2xpbWJzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ051bWJlciddLCAnZ3JvdXAnIDogJ0xlZ3MnfSxcbiAgICB7J25hbWUnOiAnUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwnZ3JvdXAnIDogJ1B1c2gtVXBzJ30sXG4gICAgeyduYW1lJzogJ0xhdGVyYWwgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdKdW1waW5nIFB1c2gtVXBzJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnUHVzaC1VcHMnfSxcbiAgICB7J25hbWUnOiAnQ2xvc2UgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdSYWlzZWQgUHVzaC1VcHMnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdQdXNoLVVwcyd9LFxuICAgIHsnbmFtZSc6ICdBYmRvbWluYWwnLCdmZWF0dXJlcycgOiBbJ1NlcmllcycsICdOdW1iZXInXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0FiZG9taW5hbCBMYXRlcmFsJywnZmVhdHVyZXMnIDogWydTZXJpZXMnLCAnTnVtYmVyJ10sICdncm91cCcgOiAnQWJkb21pbmFscyd9LFxuICAgIHsnbmFtZSc6ICdDb3JlIEFiZG9taW5hbCcsJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1NlY29uZHMnXSwgJ2dyb3VwJyA6ICdBYmRvbWluYWxzJ30sXG4gICAgeyduYW1lJzogJ0JlbmNoJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCAnZ3JvdXAnIDogJyd9LFxuICAgIHsnbmFtZSc6ICdCaWNlcHMgV2VpZ2h0JywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCdncm91cCcgOiAnJ30sXG4gICAgeyduYW1lJzogJ1B1bGwgVXBzJywgJ2ZlYXR1cmVzJyA6IFsnU2VyaWVzJywgJ1dlaWdodCddLCdncm91cCcgOiAnJ30sXG4gICAgIFxuXVxuXG5cblxuY29uc3QgcGVyZjF3b3Jrb3V0ID0ge1xuICAgICdzcG9ydCcgOiAnd29ya291dCcsXG4gICAgJ1NxdWF0cycgOiB7J1NlcmllcycgOiAzLCAnTnVtYmVyJyA6IDMwfSxcbidQdXNoLVVwcycgOiB7J1NlcmllcycgOiAzLCAnTnVtYmVyJyA6IDI1fSxcbidMYXRlcmFsIFB1c2gtVXBzJyA6IHsnU2VyaWVzJyA6IDEsICdOdW1iZXInIDogMjV9LFxuJ0p1bXBpbmcgUHVzaC1VcHMnIDogeydTZXJpZXMnIDogMSwgJ051bWJlcicgOiAyNX0sXG4nQWJkb21pbmFsJyA6IHsnU2VyaWVzJyA6IDMsICdOdW1iZXInIDogMzB9LFxuJ0FiZG9taW5hbCBMYXRlcmFsJyA6IHsnU2VyaWVzJyA6IDMsICdOdW1iZXInIDogMzB9LFxuJ0JpY2VwcyBXZWlnaHQnOiB7J1NlcmllcycgOiAzLCAnV2VpZ2h0JyA6IDE1fVxufVxuXG5cblxuXG5cbmNvbnN0IHBlcmZfVXNlcklkID0gXG4gICAgeydzd2ltbWluZyc6IFtcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDEsXG4gICAgICAgICdtZXRlcnMnOiAxNTAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNTAsXG4gICAgJ3NwcmludCc6IDIsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICAgICAgfSxcdFx0XG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAyLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbicgOiAzLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgJ3J1bm5pbmcnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnbWV0ZXJzJyA6IDQ1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiA1MDAsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnbWV0ZXJzJyA6IDU1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiAyMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcblxuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzozLFxuICAgICdtZXRlcnMnIDogNjAwMCxcbiAgICAnZWxldmF0aW9uJyA6IDQwMCxcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgIH0sXG5dLFxuICAgICd3b3Jrb3V0JyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19LFxuICAgIHsnaWRfc2Vzc2lvbic6MyxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfVxuXSxcbidjeWNsaW5nJyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ21ldGVycycgOiAxNTAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdtZXRlcnMnIDogMTQwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6NCxcbiAgICAnbWV0ZXJzJyA6IDE4MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgfV19XG5cblxuY29uc3QgcGVyZm9ybWFuY2VfZGF0YSA9IFtcbiAgICB7J3VzZXInIDogJ1VzZXIxJyxcbiAgICAnc3dpbW1pbmcnOiBbXG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAxLFxuICAgICAgICAnbWV0ZXJzJzogMTUwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDUwLFxuICAgICdzcHJpbnQnOiAyLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgICAgIH0sXHRcdFxuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMixcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxuICAgICAgICAnbWludXRlcycgOiA2MCxcbiAgICAnc3ByaW50cycgOiAyLCAgXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbiAgICAgICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nIDogMyxcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxuICAgICAgICAnbWludXRlcycgOiA2MCxcbiAgICAnc3ByaW50cycgOiAyLCAgXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICAgICAgfSxcbiAgICBdLFxuICAgICdydW5uaW5nJyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ21ldGVycycgOiA0NTAwLFxuICAgICdlbGV2YXRpb24nIDogNTAwLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ21ldGVycycgOiA1NTAwLFxuICAgICdlbGV2YXRpb24nIDogMjAwLFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG5cbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MyxcbiAgICAnbWV0ZXJzJyA6IDYwMDAsXG4gICAgJ2VsZXZhdGlvbicgOiA0MDAsXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICB9LFxuXSxcbiAgICAnd29ya291dCcgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfSxcbiAgICB7J2lkX3Nlc3Npb24nOjMsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX1cbl0sXG4nY3ljbGluZycgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdtZXRlcnMnIDogMTUwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnbWV0ZXJzJyA6IDE0MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjQsXG4gICAgJ21ldGVycycgOiAxODAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgIH1dfSxcblxuXVxuXG5mdW5jdGlvbiBnZXRQZXJmb3JtYW5jZURhdGEoKXtcbnJldHVybiBwZXJmb3JtYW5jZV9kYXRhXG59XG5cbmZ1bmN0aW9uIGdldEV4ZXJjaXNlTGlzdCgpe1xucmV0dXJuIGV4ZXJjaXNlX2xpc3Rcbn1cblxuLy9jb25zb2xlLmxvZyhnZXRQZXJmb3JtYW5jZURhdGEoKSlcbi8vY29uc29sZS5sb2coZ2V0RXhlcmNpc2VMaXN0KCkpXG5cblxuXG5mdW5jdGlvbiBjaGVja0FsbElucHV0UHJvdmlkZWQoc3BvcnQsIGxpc3RPZklucHV0cyl7XG5leGVyY2lzZV9saXN0ID0gZ2V0RXhlcmNpc2VMaXN0KClcbi8vIEZpbmQgcmlnaHQgc3BvcnQgZGF0YVxubmVjZXNzYXJ5X2lucHV0ID0gZXhlcmNpc2VfbGlzdC5maWx0ZXIoZWwgPT4gZWxbJ3Nwb3J0J10gPT0gc3BvcnQpWzBdXG5uZWNlc3NhcnlfaW5wdXQgPSBuZWNlc3NhcnlfaW5wdXQuZmVhdHVyZXNcbi8vIERvbnQgbmVlZCB0byBjaGVjayBmb3IgaWRfc2Vzc2lvblxuaW5kZXggPSBuZWNlc3NhcnlfaW5wdXQuaW5kZXhPZignaWRfc2Vzc2lvbicpXG5uZWNlc3NhcnlfaW5wdXQuc3BsaWNlKGluZGV4LCAxKVxuLy9jb25zb2xlLmxvZyhsaXN0T2ZJbnB1dHMpXG5naXZlbnBhcmFtID0gW11cbmxpc3RPZklucHV0cy5mb3JFYWNoKGVsID0+IGdpdmVucGFyYW0ucHVzaChlbC5wYXJhbSkpXG5pZiAobmVjZXNzYXJ5X2lucHV0LmV2ZXJ5KGVsID0+IGdpdmVucGFyYW0uaW5jbHVkZXMoZWwpKSl7XG4gICAgcmV0dXJuIHRydWVcbn1cbmVsc2UgcmV0dXJuIG5lY2Vzc2FyeV9pbnB1dFxufVxuXG4vKlxuY29uc29sZS5sb2coY2hlY2tBbGxJbnB1dFByb3ZpZGVkKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKGNoZWNrQWxsSW5wdXRQcm92aWRlZCgnc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtaW51dGVzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ3NwcmludHMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnZGF0ZScsICd2YWx1ZScgOiA0fV0pKSBcbiovXG5cblxuZnVuY3Rpb24gbmV3U2Vzc2lvbihzcG9ydCwgbGlzdE9mSW5wdXRzKXsgXG5jaGVjayA9IGNoZWNrQWxsSW5wdXRQcm92aWRlZChzcG9ydCwgbGlzdE9mSW5wdXRzKVxuaWYgKGNoZWNrID09IHRydWUpe1xuICAgIGRpY3QgPSB7fVxuICAgIGxpc3RPZklucHV0cy5mb3JFYWNoKGVsID0+IGRpY3RbZWwucGFyYW1dID0gZWwudmFsdWUpXG4gICAgcGVyZm9ybWFuY2VfZGF0YVtzcG9ydF0ucHVzaChkaWN0KVxuICAgIHJldHVybiAnQWRkZWQgbmV3IHNlc3Npb24gc3VjY2Vzc2Z1bGx5J1xufVxuZWxzZXtcbiAgICByZXR1cm4gYFNvbWUgYXJndW1lbnRzIGFyZSBtaXNzaW5nIHRvIGFkZCBuZXcgc2Vzc2lvbiBmb3IgJHtzcG9ydH06ICR7Y2hlY2t9YFxufVxufVxuXG4vKlxuY29uc29sZS5sb2cobmV3U2Vzc2lvbignc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fV0pKVxuXG5jb25zb2xlLmxvZyhuZXdTZXNzaW9uKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21pbnV0ZXMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnc3ByaW50cycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdkYXRlJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKHBlcmZvcm1hbmNlX2RhdGEpXG4qL1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDdXN0b21TcG9ydChzcG9ydCwgLi4uYXJncyl7XG5yZXR1cm4gJ3llYWggb3V0cHV0J1xufVxuXG5cbi8qXG5cblxuZnVuY3Rpb24gYWRkQ3VzdG9tRXhlcmNpc2Uoc3BvcnQsIC4uLmFyZ3Mpe1xuXG59XG5cblxuKi9cblxuXG5cblxuY29uc29sZS5sb2coJ2V2ZXJ5dGhpbmcgd29ya2luZycpXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRlc3Qoc3RyaW5nKXtcbiAgICByZXR1cm4gc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IHthZGRDdXN0b21TcG9ydCwgdGVzdH0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFzVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzlDLE9BQU8sYUFBYTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQztBQUNqQztBQUNBO0FBQ08sU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQUksT0FBTyxNQUFNO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
