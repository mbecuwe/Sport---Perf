import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.bd6114a4.js';
import './_commonjsHelpers.1e235def.js';
import Frappe_charts from './frappe-charts.feaa991c.js';
import './Chart.97e39373.js';
import Chart_1 from './chart.c9ab2d45.js';

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
	let h1;
	let t1;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Please log in!");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-je8uop\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Please log in!");
			h1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sport App - LogIn";
			attr_dev(h1, "class", "bg-blue-100 svelte-1ee8kod");
			add_location(h1, file, 29, 0, 407);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDEyN2ZjYmEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBleGVyY2lzZV9saXN0ID0gW1xuICAgIHsnc3BvcnQnOiAnc3dpbW1pbmcnLCBcbiAgICAnaW1nX3NyYycgOiAnJyxcbiAgICAnZmVhdHVyZXMnOlsnaWRfc2Vzc2lvbicsICdtZXRlcnMnLCAnbWludXRlcycsICdzcHJpbnRzJywgJ2RhdGUnXX0sXG4gICAgeydzcG9ydCc6ICdydW5uaW5nJywgXG4gICAgJ2ltZ19zcmMnOiAnJyxcbiAgICAnZmVhdHVyZXMnOlsnaWRfc2Vzc2lvbicsICdtZXRlcnMnLCAnbWludXRlcycsICdzcHJpbnRzJywgJ2RhdGUnXX0sXG4gICAgeydzcG9ydCc6ICdjeWNsaW5nJywgXG4gICAgJ2ltZ19zcmMnOiAnJyxcbiAgICAnZmVhdHVyZXMnOlsnaWRfc2Vzc2lvbicsICdtZXRlcnMnLCAnbWludXRlcycsICdzcHJpbnRzJywgJ2RhdGUnXX0sXG4gICAgeydzcG9ydCc6ICd3b3Jrb3V0JywgXG4gICAgJ2ltZ19zcmMnOiAnJyxcbiAgICAnZmVhdHVyZXMnOlsnaWRfc2Vzc2lvbicsICdzZXNzaW9uX2RhdGEnLCAnZGF0ZSddfSxcbiAgXVxuXG5jb25zdCB3b3Jrb3V0X2V4ZXJjaXNlX2xpc3QgPSBbXG4nJywgJycsICcnXG5dXG5cbmNvbnN0IHBlcmZvcm1hbmNlX2RhdGEgPSB7XG4gICAgJ3N3aW1taW5nJzogW1xuICAgICAgICB7J2lkX3Nlc3Npb24nIDogMSxcbiAgICAgICAgJ21ldGVycyc6IDE1MDAsIFxuICAgICAgICAnbWludXRlcycgOiA1MCxcbiAgICAnc3ByaW50JzogMixcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgICAgICB9LFx0XHRcbiAgICAgICAgeydpZF9zZXNzaW9uJyA6IDIsXG4gICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4gICAgJ3NwcmludHMnIDogMiwgIFxuICAgICdkYXRlJzogJzAxLTA0LTIwMjAnXG4gICAgICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJyA6IDMsXG4gICAgICAgICdtZXRlcnMnOiAxNDAwLCBcbiAgICAgICAgJ21pbnV0ZXMnIDogNjAsXG4gICAgJ3NwcmludHMnIDogMiwgIFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICAncnVubmluZycgOiBbXG4gICAgeydpZF9zZXNzaW9uJzoxLFxuICAgICdtZXRlcnMnIDogNDUwMCxcbiAgICAnZWxldmF0aW9uJyA6IDUwMCxcbiAgICAnZGF0ZSc6ICczMC0wMy0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzoyLFxuICAgICdtZXRlcnMnIDogNTUwMCxcbiAgICAnZWxldmF0aW9uJyA6IDIwMCxcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjMsXG4gICAgJ21ldGVycycgOiA2MDAwLFxuICAgICdlbGV2YXRpb24nIDogNDAwLFxuICAgICdkYXRlJzogJzAyLTA0LTIwMjAnXG4gICAgfSxcbl0sXG4gICAgJ3dvcmtvdXQnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnZGF0ZScgOiAnMzAtMDMtMjAyMCcsXG4gICAgJ3Nlc3Npb25fZGF0YSc6IFtcbiAgICBdfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ2RhdGUnIDogJzMwLTAzLTIwMjAnLFxuICAgICdzZXNzaW9uX2RhdGEnOiBbXG4gICAgXX0sXG4gICAgeydpZF9zZXNzaW9uJzozLFxuICAgICdkYXRlJyA6ICczMC0wMy0yMDIwJyxcbiAgICAnc2Vzc2lvbl9kYXRhJzogW1xuICAgIF19XG5dLFxuJ2N5Y2xpbmcnIDogW1xuICAgIHsnaWRfc2Vzc2lvbic6MSxcbiAgICAnbWV0ZXJzJyA6IDE1MDAwLFxuICAgICdlbGV2YXRpb24nOiAyMDAwLFxuICAgICdkYXRlJzogJzMwLTAzLTIwMjAnXG4gICAgfSxcbiAgICB7J2lkX3Nlc3Npb24nOjIsXG4gICAgJ21ldGVycycgOiAxNDAwMCxcbiAgICAnZWxldmF0aW9uJzogMjAwMCxcbiAgICAnZGF0ZSc6ICcwMS0wNC0yMDIwJ1xuICAgIH0sXG4gICAgeydpZF9zZXNzaW9uJzo0LFxuICAgICdtZXRlcnMnIDogMTgwMDAsXG4gICAgJ2VsZXZhdGlvbic6IDIwMDAsXG4gICAgJ2RhdGUnOiAnMDItMDQtMjAyMCdcbiAgICB9XG5dXG59XG5cbmZ1bmN0aW9uIGdldFBlcmZvcm1hbmNlRGF0YSgpe1xucmV0dXJuIHBlcmZvcm1hbmNlX2RhdGFcbn1cblxuZnVuY3Rpb24gZ2V0RXhlcmNpc2VMaXN0KCl7XG5yZXR1cm4gZXhlcmNpc2VfbGlzdFxufVxuXG4vL2NvbnNvbGUubG9nKGdldFBlcmZvcm1hbmNlRGF0YSgpKVxuLy9jb25zb2xlLmxvZyhnZXRFeGVyY2lzZUxpc3QoKSlcblxuXG5cbmZ1bmN0aW9uIGNoZWNrQWxsSW5wdXRQcm92aWRlZChzcG9ydCwgbGlzdE9mSW5wdXRzKXtcbmV4ZXJjaXNlX2xpc3QgPSBnZXRFeGVyY2lzZUxpc3QoKVxuLy8gRmluZCByaWdodCBzcG9ydCBkYXRhXG5uZWNlc3NhcnlfaW5wdXQgPSBleGVyY2lzZV9saXN0LmZpbHRlcihlbCA9PiBlbFsnc3BvcnQnXSA9PSBzcG9ydClbMF1cbm5lY2Vzc2FyeV9pbnB1dCA9IG5lY2Vzc2FyeV9pbnB1dC5mZWF0dXJlc1xuLy8gRG9udCBuZWVkIHRvIGNoZWNrIGZvciBpZF9zZXNzaW9uXG5pbmRleCA9IG5lY2Vzc2FyeV9pbnB1dC5pbmRleE9mKCdpZF9zZXNzaW9uJylcbm5lY2Vzc2FyeV9pbnB1dC5zcGxpY2UoaW5kZXgsIDEpXG4vL2NvbnNvbGUubG9nKGxpc3RPZklucHV0cylcbmdpdmVucGFyYW0gPSBbXVxubGlzdE9mSW5wdXRzLmZvckVhY2goZWwgPT4gZ2l2ZW5wYXJhbS5wdXNoKGVsLnBhcmFtKSlcbmlmIChuZWNlc3NhcnlfaW5wdXQuZXZlcnkoZWwgPT4gZ2l2ZW5wYXJhbS5pbmNsdWRlcyhlbCkpKXtcbiAgICByZXR1cm4gdHJ1ZVxufVxuZWxzZSByZXR1cm4gbmVjZXNzYXJ5X2lucHV0XG59XG5cbi8qXG5jb25zb2xlLmxvZyhjaGVja0FsbElucHV0UHJvdmlkZWQoJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH1dKSlcblxuY29uc29sZS5sb2coY2hlY2tBbGxJbnB1dFByb3ZpZGVkKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ21pbnV0ZXMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnc3ByaW50cycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdkYXRlJywgJ3ZhbHVlJyA6IDR9XSkpIFxuKi9cblxuXG5mdW5jdGlvbiBuZXdTZXNzaW9uKHNwb3J0LCBsaXN0T2ZJbnB1dHMpeyBcbmNoZWNrID0gY2hlY2tBbGxJbnB1dFByb3ZpZGVkKHNwb3J0LCBsaXN0T2ZJbnB1dHMpXG5pZiAoY2hlY2sgPT0gdHJ1ZSl7XG4gICAgZGljdCA9IHt9XG4gICAgbGlzdE9mSW5wdXRzLmZvckVhY2goZWwgPT4gZGljdFtlbC5wYXJhbV0gPSBlbC52YWx1ZSlcbiAgICBwZXJmb3JtYW5jZV9kYXRhW3Nwb3J0XS5wdXNoKGRpY3QpXG4gICAgcmV0dXJuICdBZGRlZCBuZXcgc2Vzc2lvbiBzdWNjZXNzZnVsbHknXG59XG5lbHNle1xuICAgIHJldHVybiBgU29tZSBhcmd1bWVudHMgYXJlIG1pc3NpbmcgdG8gYWRkIG5ldyBzZXNzaW9uIGZvciAke3Nwb3J0fTogJHtjaGVja31gXG59XG59XG5cbi8qXG5jb25zb2xlLmxvZyhuZXdTZXNzaW9uKCdzd2ltbWluZycsIFt7J3BhcmFtJzogJ2lkX3Nlc3Npb24nLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWV0ZXJzJywgJ3ZhbHVlJyA6IDR9XSkpXG5cbmNvbnNvbGUubG9nKG5ld1Nlc3Npb24oJ3N3aW1taW5nJywgW3sncGFyYW0nOiAnaWRfc2Vzc2lvbicsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdtZXRlcnMnLCAndmFsdWUnIDogNH0sIHsncGFyYW0nOiAnbWludXRlcycsICd2YWx1ZScgOiA0fSwgeydwYXJhbSc6ICdzcHJpbnRzJywgJ3ZhbHVlJyA6IDR9LCB7J3BhcmFtJzogJ2RhdGUnLCAndmFsdWUnIDogNH1dKSlcblxuY29uc29sZS5sb2cocGVyZm9ybWFuY2VfZGF0YSlcbiovXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEN1c3RvbVNwb3J0KHNwb3J0LCAuLi5hcmdzKXtcbnJldHVybiAneWVhaCBvdXRwdXQnXG59XG5cblxuLypcblxuXG5mdW5jdGlvbiBhZGRDdXN0b21FeGVyY2lzZShzcG9ydCwgLi4uYXJncyl7XG5cbn1cblxuXG4qL1xuXG5cblxuXG5jb25zb2xlLmxvZygnZXZlcnl0aGluZyB3b3JraW5nJylcblxuXG5leHBvcnQgZnVuY3Rpb24gdGVzdChzdHJpbmcpe1xuICAgIHJldHVybiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQge2FkZEN1c3RvbVNwb3J0LCB0ZXN0fSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUE4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUyxjQUFjLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzlDLE9BQU8sYUFBYTtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBQztBQUNqQztBQUNBO0FBQ08sU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQUksT0FBTyxNQUFNO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
