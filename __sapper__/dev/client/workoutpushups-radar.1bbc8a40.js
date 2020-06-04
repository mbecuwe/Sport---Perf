import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, n as noop } from './client.72a454e7.js';
import './_commonjsHelpers.1e235def.js';
import { C as Chart } from './Chart.b2015135.js';

/* src/routes/sports/workout/workoutpushups-radar.svelte generated by Svelte v3.22.3 */
const file = "src/routes/sports/workout/workoutpushups-radar.svelte";

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
			attr_dev(canvas, "id", "myChart10");
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
	let { data_pushups_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart10");
		var myChart = new Chart(ctx, { type: "radar", data: data_pushups_radar });
	}

	onMount(createChart2);
	const writable_props = ["data_pushups_radar"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Workoutpushups_radar> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Workoutpushups_radar", $$slots, []);

	$$self.$set = $$props => {
		if ("data_pushups_radar" in $$props) $$invalidate(0, data_pushups_radar = $$props.data_pushups_radar);
	};

	$$self.$capture_state = () => ({
		onMount,
		Chart,
		data_pushups_radar,
		createChart2
	});

	$$self.$inject_state = $$props => {
		if ("data_pushups_radar" in $$props) $$invalidate(0, data_pushups_radar = $$props.data_pushups_radar);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [data_pushups_radar, createChart2];
}

class Workoutpushups_radar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_pushups_radar: 0, createChart2: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Workoutpushups_radar",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_pushups_radar*/ ctx[0] === undefined && !("data_pushups_radar" in props)) {
			console.warn("<Workoutpushups_radar> was created without expected prop 'data_pushups_radar'");
		}
	}

	get data_pushups_radar() {
		throw new Error("<Workoutpushups_radar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data_pushups_radar(value) {
		throw new Error("<Workoutpushups_radar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createChart2() {
		return this.$$.ctx[1];
	}

	set createChart2(value) {
		throw new Error("<Workoutpushups_radar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Workoutpushups_radar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya291dHB1c2h1cHMtcmFkYXIuMWJiYzhhNDAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3dvcmtvdXQvd29ya291dHB1c2h1cHMtcmFkYXIuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxjYW52YXMgaWQ9XCJteUNoYXJ0MTBcIiB3aWR0aD1cIjJcIiBoZWlnaHQ9XCIxXCI+PC9jYW52YXM+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xuZXhwb3J0IGxldCBkYXRhX3B1c2h1cHNfcmFkYXI7IFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0Migpe1xuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQxMCcpO1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgICBkYXRhOiBkYXRhX3B1c2h1cHNfcmFkYXIsXG5cbiAgICB9KTtcbiAgfVxub25Nb3VudChjcmVhdGVDaGFydDIpXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BS1csa0JBQWtCOztVQUNiLFlBQVk7TUFDdEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVztNQUN2QyxPQUFPLE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFDdkIsSUFBSSxFQUFFLE9BQU8sRUFDYixJQUFJLEVBQUUsa0JBQWtCOzs7Q0FJaEMsT0FBTyxDQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
