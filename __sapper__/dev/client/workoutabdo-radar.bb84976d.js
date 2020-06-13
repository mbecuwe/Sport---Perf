import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as onMount, a as validate_slots, e as element, c as claim_element, f as children, g as detach_dev, k as attr_dev, l as add_location, m as insert_dev, o as noop } from './client.08ac5cc5.js';
import './moment.98d1f4f0.js';
import { C as Chart } from './Chart.d62ec9f6.js';

/* src/routes/sports/workout/workoutabdo-radar.svelte generated by Svelte v3.22.3 */
const file = "src/routes/sports/workout/workoutabdo-radar.svelte";

function create_fragment(ctx) {
	let canvas;

	const block = {
		c: function create() {
			canvas = element("canvas");
			this.h();
		},
		l: function claim(nodes) {
			canvas = claim_element(nodes, "CANVAS", { id: true, width: true, height: true });
			children(canvas).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(canvas, "id", "myChart14");
			attr_dev(canvas, "width", "2");
			attr_dev(canvas, "height", "1");
			add_location(canvas, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, canvas, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(canvas);
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
	let { data_abdominal_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart14");

		var myChart = new Chart(ctx,
		{
				type: "radar",
				data: data_abdominal_radar,
				options: {
					scale: {
						ticks: {
							min: 0, // You can also change the Min
							beginAtZero: false, // in case you change the Min
							
						}, // etc
						
					}
				}
			});
	}

	onMount(createChart2);
	const writable_props = ["data_abdominal_radar"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Workoutabdo_radar> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Workoutabdo_radar", $$slots, []);

	$$self.$set = $$props => {
		if ("data_abdominal_radar" in $$props) $$invalidate(0, data_abdominal_radar = $$props.data_abdominal_radar);
	};

	$$self.$capture_state = () => ({
		onMount,
		Chart,
		data_abdominal_radar,
		createChart2
	});

	$$self.$inject_state = $$props => {
		if ("data_abdominal_radar" in $$props) $$invalidate(0, data_abdominal_radar = $$props.data_abdominal_radar);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [data_abdominal_radar, createChart2];
}

class Workoutabdo_radar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_abdominal_radar: 0, createChart2: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Workoutabdo_radar",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_abdominal_radar*/ ctx[0] === undefined && !("data_abdominal_radar" in props)) {
			console.warn("<Workoutabdo_radar> was created without expected prop 'data_abdominal_radar'");
		}
	}

	get data_abdominal_radar() {
		throw new Error("<Workoutabdo_radar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data_abdominal_radar(value) {
		throw new Error("<Workoutabdo_radar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createChart2() {
		return this.$$.ctx[1];
	}

	set createChart2(value) {
		throw new Error("<Workoutabdo_radar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Workoutabdo_radar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya291dGFiZG8tcmFkYXIuYmI4NDk3NmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dGFiZG8tcmFkYXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxjYW52YXMgaWQ9XCJteUNoYXJ0MTRcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuZXhwb3J0IGxldCBkYXRhX2FiZG9taW5hbF9yYWRhcjsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQyKCl7XG4gIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydDE0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdyYWRhcicsXG4gICAgICAgIGRhdGE6IGRhdGFfYWJkb21pbmFsX3JhZGFyLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgc2NhbGU6IHtcbiAgICAgICAgICAgICAgICB0aWNrczoge1xuICAgbWluOiAwLCAvLyBZb3UgY2FuIGFsc28gY2hhbmdlIHRoZSBNaW5cbiAgIGJlZ2luQXRaZXJvOiBmYWxzZSwgLy8gaW4gY2FzZSB5b3UgY2hhbmdlIHRoZSBNaW5cbn0sIC8vIGV0Y1xuICAgIH1cbn1cbiAgICB9KTtcbiAgfVxub25Nb3VudChjcmVhdGVDaGFydDIpXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BS1csb0JBQW9COztVQUNmLFlBQVk7TUFDdEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVzs7TUFDdkMsT0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHOztJQUN2QixJQUFJLEVBQUUsT0FBTztJQUNiLElBQUksRUFBRSxvQkFBb0I7SUFDMUIsT0FBTztLQUNYLEtBQUs7TUFDTyxLQUFLO09BQ2xCLEdBQUcsRUFBRSxDQUFDO09BQ04sV0FBVyxFQUFFLEtBQUs7Ozs7Ozs7OztDQU1yQixPQUFPLENBQUMsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
