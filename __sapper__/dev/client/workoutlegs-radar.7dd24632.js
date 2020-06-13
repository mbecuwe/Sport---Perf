import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as onMount, a as validate_slots, e as element, c as claim_element, f as children, g as detach_dev, k as attr_dev, l as add_location, m as insert_dev, o as noop } from './client.06310358.js';
import './moment.98d1f4f0.js';
import { C as Chart } from './Chart.d62ec9f6.js';

/* src/routes/sports/workout/workoutlegs-radar.svelte generated by Svelte v3.22.3 */
const file = "src/routes/sports/workout/workoutlegs-radar.svelte";

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
			attr_dev(canvas, "id", "myChart1");
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
	let { data_leg_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart1");

		var myChart = new Chart(ctx,
		{
				type: "radar",
				data: data_leg_radar,
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
	const writable_props = ["data_leg_radar"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Workoutlegs_radar> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Workoutlegs_radar", $$slots, []);

	$$self.$set = $$props => {
		if ("data_leg_radar" in $$props) $$invalidate(0, data_leg_radar = $$props.data_leg_radar);
	};

	$$self.$capture_state = () => ({
		onMount,
		Chart,
		data_leg_radar,
		createChart2
	});

	$$self.$inject_state = $$props => {
		if ("data_leg_radar" in $$props) $$invalidate(0, data_leg_radar = $$props.data_leg_radar);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [data_leg_radar, createChart2];
}

class Workoutlegs_radar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_leg_radar: 0, createChart2: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Workoutlegs_radar",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_leg_radar*/ ctx[0] === undefined && !("data_leg_radar" in props)) {
			console.warn("<Workoutlegs_radar> was created without expected prop 'data_leg_radar'");
		}
	}

	get data_leg_radar() {
		throw new Error("<Workoutlegs_radar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data_leg_radar(value) {
		throw new Error("<Workoutlegs_radar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createChart2() {
		return this.$$.ctx[1];
	}

	set createChart2(value) {
		throw new Error("<Workoutlegs_radar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Workoutlegs_radar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya291dGxlZ3MtcmFkYXIuN2RkMjQ2MzIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dGxlZ3MtcmFkYXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxjYW52YXMgaWQ9XCJteUNoYXJ0MVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjFcIj48L2NhbnZhcz5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5leHBvcnQgbGV0IGRhdGFfbGVnX3JhZGFyOyBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFydDIoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0MScpO1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgICBkYXRhOiBkYXRhX2xlZ19yYWRhcixcbiAgICAgICAgb3B0aW9uczoge1xuICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgIG1pbjogMCwgLy8gWW91IGNhbiBhbHNvIGNoYW5nZSB0aGUgTWluXG4gICBiZWdpbkF0WmVybzogZmFsc2UsIC8vIGluIGNhc2UgeW91IGNoYW5nZSB0aGUgTWluXG59LCAvLyBldGNcbiAgICB9XG59XG5cbiAgICB9KTtcbiAgfVxub25Nb3VudChjcmVhdGVDaGFydDIpXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BS1csY0FBYzs7VUFDVCxZQUFZO01BQ3RCLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVU7O01BQ3RDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRzs7SUFDdkIsSUFBSSxFQUFFLE9BQU87SUFDYixJQUFJLEVBQUUsY0FBYztJQUNwQixPQUFPO0tBQ1gsS0FBSztNQUNPLEtBQUs7T0FDbEIsR0FBRyxFQUFFLENBQUM7T0FDTixXQUFXLEVBQUUsS0FBSzs7Ozs7Ozs7O0NBT3JCLE9BQU8sQ0FBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
