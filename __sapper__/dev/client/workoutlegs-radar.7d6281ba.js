import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, n as noop } from './client.8eeeca18.js';
import './_commonjsHelpers.1e235def.js';
import { C as Chart } from './Chart.b2015135.js';

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
		var myChart = new Chart(ctx, { type: "radar", data: data_leg_radar });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya291dGxlZ3MtcmFkYXIuN2Q2MjgxYmEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dGxlZ3MtcmFkYXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxjYW52YXMgaWQ9XCJteUNoYXJ0MVwiIHdpZHRoPVwiMlwiIGhlaWdodD1cIjFcIj48L2NhbnZhcz5cblxuPHNjcmlwdD5cbmltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5leHBvcnQgbGV0IGRhdGFfbGVnX3JhZGFyOyBcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDaGFydDIoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0MScpO1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgICBkYXRhOiBkYXRhX2xlZ19yYWRhcixcblxuICAgIH0pO1xuICB9XG5vbk1vdW50KGNyZWF0ZUNoYXJ0Milcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FLVyxjQUFjOztVQUNULFlBQVk7TUFDdEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVTtNQUN0QyxPQUFPLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFDdkIsSUFBSSxFQUFFLE9BQU8sRUFDYixJQUFJLEVBQUUsY0FBYzs7O0NBSTVCLE9BQU8sQ0FBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
