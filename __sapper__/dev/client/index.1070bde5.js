import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.c3d12a52.js';
import './_commonjsHelpers.1e235def.js';
import Frappe_charts from './frappe-charts.ce1b58d2.js';
import './Chart.b2015135.js';
import Chart_1 from './chart.26ccd918.js';

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
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-je8uop\"]", document.head);
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
			this.h();
		},
		h: function hydrate() {
			document.title = "Sport App - LogIn";
			attr_dev(p0, "class", "text-xl");
			add_location(p0, file, 29, 0, 407);
			add_location(p1, file, 31, 0, 452);
			add_location(p2, file, 33, 0, 467);
			add_location(p3, file, 35, 0, 497);
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
		ChartJS: Chart_1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMTA3MGJkZTUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8vIGNvbnN0IHVzZXJfbGlzdCA9IFtcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjEnLFxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQxXCIsXG4vLyAgICAgJ1VzZXJJZCcgOiAxfSxcbi8vICAgICB7XCJuYW1lXCIgOiAnVXNlcjInLFxuLy8gICAgIFwicGFzc3dvcmRcIiA6IFwicGFzc3dvcmQyXCJcbi8vICAgICAnVXNlcklkJyA6IDJ9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyMycsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDNcIixcbi8vICAgICAnVXNlcklkJyA6IDN9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNCcsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDRcIixcbi8vICAgICAnVXNlcklkJyA6IDR9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNScsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDVcIixcbi8vICAgICAnVXNlcklkJyA6IDV9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNicsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDZcIixcbi8vICAgICAnVXNlcklkJyA6IDZ9LFxuLy8gICAgIHtcIm5hbWVcIiA6ICdVc2VyNycsXG4vLyAgICAgXCJwYXNzd29yZFwiIDogXCJwYXNzd29yZDdcIixcbi8vICAgICAnVXNlcklkJyA6IDd9XVxuXG5cblxuXG5cblxuY29uc3QgZXhlcmNpc2VfbGlzdCA9IFtcbiAgICB7J3Nwb3J0JzogJ3N3aW1taW5nJywgXG4gICAgJ2ltZ19zcmMnIDogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAncnVubmluZycsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAnY3ljbGluZycsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnbWV0ZXJzJywgJ21pbnV0ZXMnLCAnc3ByaW50cycsICdkYXRlJ119LFxuICAgIHsnc3BvcnQnOiAnd29ya291dCcsIFxuICAgICdpbWdfc3JjJzogJycsXG4gICAgJ2ZlYXR1cmVzJzpbJ2lkX3Nlc3Npb24nLCAnc2Vzc2lvbl9kYXRhJywgJ2RhdGUnXX0sXG4gIF1cblxuY29uc3Qgd29ya291dF9leGVyY2lzZV9saXN0ID0gW1xuJycsICcnLCAnJ1xuXVxuXG5cblxuY29uc3QgcGVyZl91c2VyMSA9IFt7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMSxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ21ldGVycycgOiAxNTAwLFxuICAgICdtaW51dGVzJyA6IDYwLFxuICAgICduYl9zcHJpbnQnIDogM1xufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMixcbiAgICAnZGF0ZScgOiAnMDEtMDQtMjAyMCcsXG4gICAgJ21ldGVycycgOiAxNjAwLFxuICAgICdtaW51dGVzJyA6IDUxLFxuICAgICduYl9zcHJpbnQnIDogM1xufSx7XG4gICAgJ3Nwb3J0JyA6ICdzd2ltbWluZycsXG4gICAgJ2lkX3Nlc3Npb24nIDogMyxcbiAgICAnZGF0ZScgOiBcIjAyLTA0LTIwMjBcIixcbiAgICAnbWV0ZXJzJyA6IDE1MDAsXG4gICAgJ21pbnV0ZXMnIDogNTQsXG4gICAgJ25iX3NwcmludCcgOiA0XG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiA0LFxuICAgICdkYXRlJyA6ICcwMy0wNC0yMDIwJyxcbiAgICAnbWV0ZXJzJyA6IDE3MDAsXG4gICAgJ21pbnV0ZXMnIDogNzAsXG4gICAgJ25iX3NwcmludCcgOiAzXG59LHtcbiAgICAnc3BvcnQnIDogJ3N3aW1taW5nJyxcbiAgICAnaWRfc2Vzc2lvbicgOiA1LFxuICAgICdkYXRlJyA6IFwiMDUtMDQtMjAyMFwiLFxuICAgICdtZXRlcnMnIDogMTIwMCxcbiAgICAnbWludXRlcycgOiA0MCxcbiAgICAnbmJfc3ByaW50JyA6IDJcbn0se1xuICAgICdzcG9ydCcgOiAnc3dpbW1pbmcnLFxuICAgICdpZF9zZXNzaW9uJyA6IDYsXG4gICAgJ2RhdGUnIDogXCIwNy0wNC0yMDIwXCIsXG4gICAgJ21ldGVycycgOiAxNDAwLFxuICAgICdtaW51dGVzJyA6IDUwLFxuICAgICduYl9zcHJpbnQnIDogM1xufVxuXG5dXG5cblxuY29uc3QgcGVyZl9Vc2VySWQgPSBcbiAgICB7J3N3aW1taW5nJzogW1xuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMSxcbiAgICAgICAgJ21ldGVycyc6IDE1MDAsIFxuICAgICAgICAnbWludXRlcycgOiA1MCxcbiAgICAnc3ByaW50JzogMixcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgICAgICB9LFx0XHRcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDIsXG4gICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4gICAgJ3NwcmludHMnIDogMiwgIFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG4gICAgICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJyA6IDMsXG4gICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4gICAgJ3NwcmludHMnIDogMiwgIFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICAncnVubmluZycgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdtZXRlcnMnIDogNDUwMCxcbiAgICAnZWxldmF0aW9uJyA6IDUwMCxcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdtZXRlcnMnIDogNTUwMCxcbiAgICAnZWxldmF0aW9uJyA6IDIwMCxcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjMsXG4gICAgJ21ldGVycycgOiA2MDAwLFxuICAgICdlbGV2YXRpb24nIDogNDAwLFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgfSxcbl0sXG4gICAgJ3dvcmtvdXQnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX0sXG4gICAgeydpZF9zZXNzaW9uJzozLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19XG5dLFxuJ2N5Y2xpbmcnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnbWV0ZXJzJyA6IDE1MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ21ldGVycycgOiAxNDAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzo0LFxuICAgICdtZXRlcnMnIDogMTgwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICB9XX1cblxuXG5jb25zdCBwZXJmb3JtYW5jZV9kYXRhID0gW1xuICAgIHsndXNlcicgOiAnVXNlcjEnLFxuICAgICdzd2ltbWluZyc6IFtcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDEsXG4gICAgICAgICdtZXRlcnMnOiAxNTAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNTAsXG4gICAgJ3NwcmludCc6IDIsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICAgICAgfSxcdFx0XG4gICAgICAgIHsnaWRfc2Vzc2lvbicgOiAyLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbicgOiAzLFxuICAgICAgICAnbWV0ZXJzJzogMTQwMCwgXG4gICAgICAgICdtaW51dGVzJyA6IDYwLFxuICAgICdzcHJpbnRzJyA6IDIsICBcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgICAgICB9LFxuICAgIF0sXG4gICAgJ3J1bm5pbmcnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnbWV0ZXJzJyA6IDQ1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiA1MDAsXG4gICAgJ2RhdGUnOiAnMzAtMDMtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6MixcbiAgICAnbWV0ZXJzJyA6IDU1MDAsXG4gICAgJ2VsZXZhdGlvbicgOiAyMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcblxuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzozLFxuICAgICdtZXRlcnMnIDogNjAwMCxcbiAgICAnZWxldmF0aW9uJyA6IDQwMCxcbiAgICAnZGF0ZSc6ICcwMi0wNC0yMDIwJ1xuICAgIH0sXG5dLFxuICAgICd3b3Jrb3V0JyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19LFxuICAgIHsnaWRfc2Vzc2lvbic6MyxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfVxuXSxcbidjeWNsaW5nJyA6IFtcbiAgICB7J2lkX3Nlc3Npb24nOjEsXG4gICAgJ21ldGVycycgOiAxNTAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdtZXRlcnMnIDogMTQwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMDEtMDQtMjAyMCdcbiAgICB9LFxuICAgIHsnaWRfc2Vzc2lvbic6NCxcbiAgICAnbWV0ZXJzJyA6IDE4MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgfV19LFxuXG5dXG5cbmZ1bmN0aW9uIGdldFBlcmZvcm1hbmNlRGF0YSgpe1xucmV0dXJuIHBlcmZvcm1hbmNlX2RhdGFcbn1cblxuZnVuY3Rpb24gZ2V0RXhlcmNpc2VMaXN0KCl7XG5yZXR1cm4gZXhlcmNpc2VfbGlzdFxufVxuXG4vL2NvbnNvbGUubG9nKGdldFBlcmZvcm1hbmNlRGF0YSgpKVxuLy9jb25zb2xlLmxvZyhnZXRFeGVyY2lzZUxpc3QoKSlcblxuXG5cbmZ1bmN0aW9uIGNoZWNrQWxsSW5wdXRQcm92aWRlZChzcG9ydCwgbGlzdE9mSW5wdXRzKXtcbmV4ZXJjaXNlX2xpc3QgPSBnZXRFeGVyY2lzZUxpc3QoKVxuLy8gRmluZCByaWdodCBzcG9ydCBkYXRhXG5uZWNlc3NhcnlfaW5wdXQgPSBleGVyY2lzZV9saXN0LmZpbHRlcihlbCA9PiBlbFsnc3BvcnQnXSA9PSBzcG9ydClbMF1cbm5lY2Vzc2FyeV9pbnB1dCA9IG5lY2Vzc2FyeV9pbnB1dC5mZWF0dXJlc1xuLy8gRG9udCBuZWVkIHRvIGNoZWNrIGZvciBpZF9zZXNzaW9uXG5pbmRleCA9IG5lY2Vzc2FyeV9pbnB1dC5pbmRleE9mKCdpZF9zZXNzaW9uJylcbm5lY2Vzc2FyeV9pbnB1dC5zcGxpY2UoaW5kZXgsIDEpXG4vL2NvbnNvbGUubG9nKGxpc3RPZklucHV0cylcbmdpdmVucGFyYW0gPSBbXVxubGlzdE9mSW5wdXRzLmZvckVhY2goZWwgPT4gZ2l2ZW5wYXJhbS5wdXNoKGVsLnBhcmFtKSlcbmlmIChuZWNlc3NhcnlfaW5wdXQuZXZlcnkoZWwgPT4gZ2l2ZW5wYXJhbS5pbmNsdWRlcyhlbCkpKXtcbiAgICByZXR1cm4gdHJ1ZVxufVxuZWxzZSByZXR1cm4gbmVjZXNzYXJ5X2lucHV0XG59XG5cbi8qXG5jb25zb2xlLmxvZyhjaGVja0FsbElucHV0UHJvdmlkZWQoJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH1dKSlcblxuY29uc29sZS5sb2coY2hlY2tBbGxJbnB1dFByb3ZpZGVkKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21pbnV0ZXMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnc3ByaW50cycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdkYXRlJywgJ3ZhbHVlJyA6IDR9XSkpIFxuKi9cblxuXG5mdW5jdGlvbiBuZXdTZXNzaW9uKHNwb3J0LCBsaXN0T2ZJbnB1dHMpeyBcbmNoZWNrID0gY2hlY2tBbGxJbnB1dFByb3ZpZGVkKHNwb3J0LCBsaXN0T2ZJbnB1dHMpXG5pZiAoY2hlY2sgPT0gdHJ1ZSl7XG4gICAgZGljdCA9IHt9XG4gICAgbGlzdE9mSW5wdXRzLmZvckVhY2goZWwgPT4gZGljdFtlbC5wYXJhbV0gPSBlbC52YWx1ZSlcbiAgICBwZXJmb3JtYW5jZV9kYXRhW3Nwb3J0XS5wdXNoKGRpY3QpXG4gICAgcmV0dXJuICdBZGRlZCBuZXcgc2Vzc2lvbiBzdWNjZXNzZnVsbHknXG59XG5lbHNle1xuICAgIHJldHVybiBgU29tZSBhcmd1bWVudHMgYXJlIG1pc3NpbmcgdG8gYWRkIG5ldyBzZXNzaW9uIGZvciAke3Nwb3J0fTogJHtjaGVja31gXG59XG59XG5cbi8qXG5jb25zb2xlLmxvZyhuZXdTZXNzaW9uKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKG5ld1Nlc3Npb24oJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWludXRlcycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdzcHJpbnRzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ2RhdGUnLCAndmFsdWUnIDogNH1dKSlcblxuY29uc29sZS5sb2cocGVyZm9ybWFuY2VfZGF0YSlcbiovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEN1c3RvbVNwb3J0KHNwb3J0LCAuLi5hcmdzKXtcbnJldHVybiAneWVhaCBvdXRwdXQnXG59XG5cblxuLypcblxuXG5mdW5jdGlvbiBhZGRDdXN0b21FeGVyY2lzZShzcG9ydCwgLi4uYXJncyl7XG5cbn1cblxuXG4qL1xuXG5cblxuXG5jb25zb2xlLmxvZygnZXZlcnl0aGluZyB3b3JraW5nJylcblxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdChzdHJpbmcpe1xuICAgIHJldHVybiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQge2FkZEN1c3RvbVNwb3J0LCB0ZXN0fSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFvU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzlDLE9BQU8sYUFBYTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQztBQUNqQztBQUNBO0FBQ08sU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQUksT0FBTyxNQUFNO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
