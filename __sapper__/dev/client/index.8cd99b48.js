import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.367fe15e.js';
import './_commonjsHelpers.1e235def.js';
import Frappe_charts from './frappe-charts.c1174c47.js';
import Chart from './chart.e1c15e3b.js';

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

/* src\routes\index.svelte generated by Svelte v3.22.3 */
const file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
	let t0;
	let p0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let p2;
	let t5;
	let t6;
	let p3;
	let t7;
	let t8;
	let p4;
	let t9;
	let t10;
	let p5;
	let t11;

	const block = {
		c: function create() {
			t0 = space();
			p0 = element("p");
			t1 = text("Logged in as Martin!");
			t2 = space();
			p1 = element("p");
			t3 = text("Weight");
			t4 = space();
			p2 = element("p");
			t5 = text("Radar chart of sports");
			t6 = space();
			p3 = element("p");
			t7 = text("Calendar of last sessions");
			t8 = space();
			p4 = element("p");
			t9 = text("Options pour supprimer des données de la base en cas d'erreur");
			t10 = space();
			p5 = element("p");
			t11 = text("Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ljm881\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			p0 = claim_element(nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "Logged in as Martin!");
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, "Weight");
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t5 = claim_text(p2_nodes, "Radar chart of sports");
			p2_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t7 = claim_text(p3_nodes, "Calendar of last sessions");
			p3_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t9 = claim_text(p4_nodes, "Options pour supprimer des données de la base en cas d'erreur");
			p4_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t11 = claim_text(p5_nodes, "Login / authenthification https://www.nielsvandermolen.com/signup-form-html5-validation-svelte/");
			p5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sport App - LogIn";
			attr_dev(p0, "class", "text-xl");
			add_location(p0, file, 29, 0, 436);
			add_location(p1, file, 31, 0, 483);
			add_location(p2, file, 33, 0, 500);
			add_location(p3, file, 35, 0, 532);
			add_location(p4, file, 38, 0, 570);
			add_location(p5, file, 40, 0, 642);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t9);
			insert_dev(target, t10, anchor);
			insert_dev(target, p5, anchor);
			append_dev(p5, t11);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(p5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOGNkOTliNDguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vLyBjb25zdCB1c2VyX2xpc3QgPSBbXHJcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjEnLFxyXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDFcIixcclxuLy8gICAgICdVc2VySWQnIDogMX0sXHJcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjInLFxyXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDJcIlxyXG4vLyAgICAgJ1VzZXJJZCcgOiAyfSxcclxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyMycsXHJcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkM1wiLFxyXG4vLyAgICAgJ1VzZXJJZCcgOiAzfSxcclxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNCcsXHJcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkNFwiLFxyXG4vLyAgICAgJ1VzZXJJZCcgOiA0fSxcclxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNScsXHJcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkNVwiLFxyXG4vLyAgICAgJ1VzZXJJZCcgOiA1fSxcclxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNicsXHJcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkNlwiLFxyXG4vLyAgICAgJ1VzZXJJZCcgOiA2fSxcclxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNycsXHJcbi8vICAgICBcInBhc3N3b3JkXCIgOiBcInBhc3N3b3JkN1wiLFxyXG4vLyAgICAgJ1VzZXJJZCcgOiA3fV1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgZXhlcmNpc2VfbGlzdCA9IFtcclxuICAgIHsnc3BvcnQnOiAnc3dpbW1pbmcnLCBcclxuICAgICdpbWdfc3JjJyA6ICcnLFxyXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxyXG4gICAgeydzcG9ydCc6ICdydW5uaW5nJywgXHJcbiAgICAnaW1nX3NyYyc6ICcnLFxyXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxyXG4gICAgeydzcG9ydCc6ICdjeWNsaW5nJywgXHJcbiAgICAnaW1nX3NyYyc6ICcnLFxyXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxyXG4gICAgeydzcG9ydCc6ICd3b3Jrb3V0JywgXHJcbiAgICAnaW1nX3NyYyc6ICcnLFxyXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnc2Vzc2lvbl9kYXRhJywgJ2RhdGUnXX0sXHJcbiAgXVxyXG5cclxuY29uc3Qgd29ya291dF9leGVyY2lzZV9saXN0ID0gW1xyXG4nJywgJycsICcnXHJcbl1cclxuXHJcblxyXG5cclxuY29uc3QgcGVyZl91c2VyMSA9IFt7XHJcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcclxuICAgICdpZF9zZXNzaW9uJyA6IDEsXHJcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXHJcbiAgICAnbWV0ZXJzJyA6IDE1MDAsXHJcbiAgICAnbWludXRlcycgOiA2MCxcclxuICAgICduYl9zcHJpbnQnIDogM1xyXG59LHtcclxuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxyXG4gICAgJ2lkX3Nlc3Npb24nIDogMixcclxuICAgICdkYXRlJyA6ICcwMS0wNC0yMDIwJyxcclxuICAgICdtZXRlcnMnIDogMTYwMCxcclxuICAgICdtaW51dGVzJyA6IDUxLFxyXG4gICAgJ25iX3NwcmludCcgOiAzXHJcbn0se1xyXG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXHJcbiAgICAnaWRfc2Vzc2lvbicgOiAzLFxyXG4gICAgJ2RhdGUnIDogXCIwMi0wNC0yMDIwXCIsXHJcbiAgICAnbWV0ZXJzJyA6IDE1MDAsXHJcbiAgICAnbWludXRlcycgOiA1NCxcclxuICAgICduYl9zcHJpbnQnIDogNFxyXG59LHtcclxuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxyXG4gICAgJ2lkX3Nlc3Npb24nIDogNCxcclxuICAgICdkYXRlJyA6ICcwMy0wNC0yMDIwJyxcclxuICAgICdtZXRlcnMnIDogMTcwMCxcclxuICAgICdtaW51dGVzJyA6IDcwLFxyXG4gICAgJ25iX3NwcmludCcgOiAzXHJcbn0se1xyXG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXHJcbiAgICAnaWRfc2Vzc2lvbicgOiA1LFxyXG4gICAgJ2RhdGUnIDogXCIwNS0wNC0yMDIwXCIsXHJcbiAgICAnbWV0ZXJzJyA6IDEyMDAsXHJcbiAgICAnbWludXRlcycgOiA0MCxcclxuICAgICduYl9zcHJpbnQnIDogMlxyXG59LHtcclxuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxyXG4gICAgJ2lkX3Nlc3Npb24nIDogNixcclxuICAgICdkYXRlJyA6IFwiMDctMDQtMjAyMFwiLFxyXG4gICAgJ21ldGVycycgOiAxNDAwLFxyXG4gICAgJ21pbnV0ZXMnIDogNTAsXHJcbiAgICAnbmJfc3ByaW50JyA6IDNcclxufVxyXG5cclxuXVxyXG5cclxuXHJcbmNvbnN0IHBlcmZfVXNlcklkID0gXHJcbiAgICB7J3N3aW1taW5nJzogW1xyXG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAxLFxyXG4gICAgICAgICdtZXRlcnMnOiAxNTAwLCBcclxuICAgICAgICAnbWludXRlcycgOiA1MCxcclxuICAgICdzcHJpbnQnOiAyLFxyXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcclxuICAgICAgICB9LFx0XHRcclxuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMixcclxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXHJcbiAgICAgICAgJ21pbnV0ZXMnIDogNjAsXHJcbiAgICAnc3ByaW50cycgOiAyLCAgXHJcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xyXG4gICAgICAgIH0sXHJcbiAgICB7J2lkX3Nlc3Npb24nIDogMyxcclxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXHJcbiAgICAgICAgJ21pbnV0ZXMnIDogNjAsXHJcbiAgICAnc3ByaW50cycgOiAyLCAgXHJcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgJ3J1bm5pbmcnIDogW1xyXG4gICAgeydpZF9zZXNzaW9uJzoxLFxyXG4gICAgJ21ldGVycycgOiA0NTAwLFxyXG4gICAgJ2VsZXZhdGlvbicgOiA1MDAsXHJcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xyXG4gICAgfSxcclxuICAgIHsnaWRfc2Vzc2lvbic6MixcclxuICAgICdtZXRlcnMnIDogNTUwMCxcclxuICAgICdlbGV2YXRpb24nIDogMjAwLFxyXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcclxuXHJcbiAgICB9LFxyXG4gICAgeydpZF9zZXNzaW9uJzozLFxyXG4gICAgJ21ldGVycycgOiA2MDAwLFxyXG4gICAgJ2VsZXZhdGlvbicgOiA0MDAsXHJcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xyXG4gICAgfSxcclxuXSxcclxuICAgICd3b3Jrb3V0JyA6IFtcclxuICAgIHsnaWRfc2Vzc2lvbic6MSxcclxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcclxuICAgICdzZXNzaW9uX2RhdGEnOiBbXHJcbiAgICBdfSxcclxuICAgIHsnaWRfc2Vzc2lvbic6MixcclxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcclxuICAgICdzZXNzaW9uX2RhdGEnOiBbXHJcbiAgICBdfSxcclxuICAgIHsnaWRfc2Vzc2lvbic6MyxcclxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcclxuICAgICdzZXNzaW9uX2RhdGEnOiBbXHJcbiAgICBdfVxyXG5dLFxyXG4nY3ljbGluZycgOiBbXHJcbiAgICB7J2lkX3Nlc3Npb24nOjEsXHJcbiAgICAnbWV0ZXJzJyA6IDE1MDAwLFxyXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXHJcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xyXG4gICAgfSxcclxuICAgIHsnaWRfc2Vzc2lvbic6MixcclxuICAgICdtZXRlcnMnIDogMTQwMDAsXHJcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcclxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXHJcbiAgICB9LFxyXG4gICAgeydpZF9zZXNzaW9uJzo0LFxyXG4gICAgJ21ldGVycycgOiAxODAwMCxcclxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxyXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcclxuICAgIH1dfVxyXG5cclxuXHJcbmNvbnN0IHBlcmZvcm1hbmNlX2RhdGEgPSBbXHJcbiAgICB7J3VzZXInIDogJ1VzZXIxJyxcclxuICAgICdzd2ltbWluZyc6IFtcclxuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMSxcclxuICAgICAgICAnbWV0ZXJzJzogMTUwMCwgXHJcbiAgICAgICAgJ21pbnV0ZXMnIDogNTAsXHJcbiAgICAnc3ByaW50JzogMixcclxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXHJcbiAgICAgICAgfSxcdFx0XHJcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDIsXHJcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxyXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxyXG4gICAgJ3NwcmludHMnIDogMiwgIFxyXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcclxuICAgICAgICB9LFxyXG4gICAgeydpZF9zZXNzaW9uJyA6IDMsXHJcbiAgICAgICAgJ21ldGVycyc6IDE0MDAsIFxyXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxyXG4gICAgJ3NwcmludHMnIDogMiwgIFxyXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgICdydW5uaW5nJyA6IFtcclxuICAgIHsnaWRfc2Vzc2lvbic6MSxcclxuICAgICdtZXRlcnMnIDogNDUwMCxcclxuICAgICdlbGV2YXRpb24nIDogNTAwLFxyXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcclxuICAgIH0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjIsXHJcbiAgICAnbWV0ZXJzJyA6IDU1MDAsXHJcbiAgICAnZWxldmF0aW9uJyA6IDIwMCxcclxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXHJcblxyXG4gICAgfSxcclxuICAgIHsnaWRfc2Vzc2lvbic6MyxcclxuICAgICdtZXRlcnMnIDogNjAwMCxcclxuICAgICdlbGV2YXRpb24nIDogNDAwLFxyXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcclxuICAgIH0sXHJcbl0sXHJcbiAgICAnd29ya291dCcgOiBbXHJcbiAgICB7J2lkX3Nlc3Npb24nOjEsXHJcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXHJcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xyXG4gICAgXX0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjIsXHJcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXHJcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xyXG4gICAgXX0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjMsXHJcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXHJcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xyXG4gICAgXX1cclxuXSxcclxuJ2N5Y2xpbmcnIDogW1xyXG4gICAgeydpZF9zZXNzaW9uJzoxLFxyXG4gICAgJ21ldGVycycgOiAxNTAwMCxcclxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxyXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcclxuICAgIH0sXHJcbiAgICB7J2lkX3Nlc3Npb24nOjIsXHJcbiAgICAnbWV0ZXJzJyA6IDE0MDAwLFxyXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXHJcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xyXG4gICAgfSxcclxuICAgIHsnaWRfc2Vzc2lvbic6NCxcclxuICAgICdtZXRlcnMnIDogMTgwMDAsXHJcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcclxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXHJcbiAgICB9XX0sXHJcblxyXG5dXHJcblxyXG5mdW5jdGlvbiBnZXRQZXJmb3JtYW5jZURhdGEoKXtcclxucmV0dXJuIHBlcmZvcm1hbmNlX2RhdGFcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXhlcmNpc2VMaXN0KCl7XHJcbnJldHVybiBleGVyY2lzZV9saXN0XHJcbn1cclxuXHJcbi8vY29uc29sZS5sb2coZ2V0UGVyZm9ybWFuY2VEYXRhKCkpXHJcbi8vY29uc29sZS5sb2coZ2V0RXhlcmNpc2VMaXN0KCkpXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQWxsSW5wdXRQcm92aWRlZChzcG9ydCwgbGlzdE9mSW5wdXRzKXtcclxuZXhlcmNpc2VfbGlzdCA9IGdldEV4ZXJjaXNlTGlzdCgpXHJcbi8vIEZpbmQgcmlnaHQgc3BvcnQgZGF0YVxyXG5uZWNlc3NhcnlfaW5wdXQgPSBleGVyY2lzZV9saXN0LmZpbHRlcihlbCA9PiBlbFsnc3BvcnQnXSA9PSBzcG9ydClbMF1cclxubmVjZXNzYXJ5X2lucHV0ID0gbmVjZXNzYXJ5X2lucHV0LmZlYXR1cmVzXHJcbi8vIERvbnQgbmVlZCB0byBjaGVjayBmb3IgaWRfc2Vzc2lvblxyXG5pbmRleCA9IG5lY2Vzc2FyeV9pbnB1dC5pbmRleE9mKCdpZF9zZXNzaW9uJylcclxubmVjZXNzYXJ5X2lucHV0LnNwbGljZShpbmRleCwgMSlcclxuLy9jb25zb2xlLmxvZyhsaXN0T2ZJbnB1dHMpXHJcbmdpdmVucGFyYW0gPSBbXVxyXG5saXN0T2ZJbnB1dHMuZm9yRWFjaChlbCA9PiBnaXZlbnBhcmFtLnB1c2goZWwucGFyYW0pKVxyXG5pZiAobmVjZXNzYXJ5X2lucHV0LmV2ZXJ5KGVsID0+IGdpdmVucGFyYW0uaW5jbHVkZXMoZWwpKSl7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG59XHJcbmVsc2UgcmV0dXJuIG5lY2Vzc2FyeV9pbnB1dFxyXG59XHJcblxyXG4vKlxyXG5jb25zb2xlLmxvZyhjaGVja0FsbElucHV0UHJvdmlkZWQoJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH1dKSlcclxuXHJcbmNvbnNvbGUubG9nKGNoZWNrQWxsSW5wdXRQcm92aWRlZCgnc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtaW51dGVzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ3NwcmludHMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnZGF0ZScsICd2YWx1ZScgOiA0fV0pKSBcclxuKi9cclxuXHJcblxyXG5mdW5jdGlvbiBuZXdTZXNzaW9uKHNwb3J0LCBsaXN0T2ZJbnB1dHMpeyBcclxuY2hlY2sgPSBjaGVja0FsbElucHV0UHJvdmlkZWQoc3BvcnQsIGxpc3RPZklucHV0cylcclxuaWYgKGNoZWNrID09IHRydWUpe1xyXG4gICAgZGljdCA9IHt9XHJcbiAgICBsaXN0T2ZJbnB1dHMuZm9yRWFjaChlbCA9PiBkaWN0W2VsLnBhcmFtXSA9IGVsLnZhbHVlKVxyXG4gICAgcGVyZm9ybWFuY2VfZGF0YVtzcG9ydF0ucHVzaChkaWN0KVxyXG4gICAgcmV0dXJuICdBZGRlZCBuZXcgc2Vzc2lvbiBzdWNjZXNzZnVsbHknXHJcbn1cclxuZWxzZXtcclxuICAgIHJldHVybiBgU29tZSBhcmd1bWVudHMgYXJlIG1pc3NpbmcgdG8gYWRkIG5ldyBzZXNzaW9uIGZvciAke3Nwb3J0fTogJHtjaGVja31gXHJcbn1cclxufVxyXG5cclxuLypcclxuY29uc29sZS5sb2cobmV3U2Vzc2lvbignc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fV0pKVxyXG5cclxuY29uc29sZS5sb2cobmV3U2Vzc2lvbignc3dpbW1pbmcnLCBbeydwYXJhbSc6ICdpZF9zZXNzaW9uJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21ldGVycycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtaW51dGVzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ3NwcmludHMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnZGF0ZScsICd2YWx1ZScgOiA0fV0pKVxyXG5cclxuY29uc29sZS5sb2cocGVyZm9ybWFuY2VfZGF0YSlcclxuKi9cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ3VzdG9tU3BvcnQoc3BvcnQsIC4uLmFyZ3Mpe1xyXG5yZXR1cm4gJ3llYWggb3V0cHV0J1xyXG59XHJcblxyXG5cclxuLypcclxuXHJcblxyXG5mdW5jdGlvbiBhZGRDdXN0b21FeGVyY2lzZShzcG9ydCwgLi4uYXJncyl7XHJcblxyXG59XHJcblxyXG5cclxuKi9cclxuXHJcblxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdldmVyeXRoaW5nIHdvcmtpbmcnKVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0KHN0cmluZyl7XHJcbiAgICByZXR1cm4gc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHthZGRDdXN0b21TcG9ydCwgdGVzdH0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFvU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzlDLE9BQU8sYUFBYTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQztBQUNqQztBQUNBO0FBQ08sU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQUksT0FBTyxNQUFNO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
