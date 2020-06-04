import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, n as noop } from './client.61bad0dd.js';
import './_commonjsHelpers.1e235def.js';
import { C as Chart } from './Chart.b2015135.js';

/* src/routes/sports/workout/workoutothers-radar.svelte generated by Svelte v3.22.3 */
const file = "src/routes/sports/workout/workoutothers-radar.svelte";

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
			attr_dev(canvas, "id", "myChart13");
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
	let { data_others_radar } = $$props;

	function createChart2() {
		var ctx = document.getElementById("myChart13");
		var myChart = new Chart(ctx, { type: "radar", data: data_others_radar });
	}

	onMount(createChart2);
	const writable_props = ["data_others_radar"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Workoutothers_radar> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Workoutothers_radar", $$slots, []);

	$$self.$set = $$props => {
		if ("data_others_radar" in $$props) $$invalidate(0, data_others_radar = $$props.data_others_radar);
	};

	$$self.$capture_state = () => ({
		onMount,
		Chart,
		data_others_radar,
		createChart2
	});

	$$self.$inject_state = $$props => {
		if ("data_others_radar" in $$props) $$invalidate(0, data_others_radar = $$props.data_others_radar);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [data_others_radar, createChart2];
}

class Workoutothers_radar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data_others_radar: 0, createChart2: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Workoutothers_radar",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data_others_radar*/ ctx[0] === undefined && !("data_others_radar" in props)) {
			console.warn("<Workoutothers_radar> was created without expected prop 'data_others_radar'");
		}
	}

	get data_others_radar() {
		throw new Error("<Workoutothers_radar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data_others_radar(value) {
		throw new Error("<Workoutothers_radar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createChart2() {
		return this.$$.ctx[1];
	}

	set createChart2(value) {
		throw new Error("<Workoutothers_radar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Workoutothers_radar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya291dG90aGVycy1yYWRhci5mNDI2MmMwZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9zcG9ydHMvd29ya291dC93b3Jrb3V0b3RoZXJzLXJhZGFyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8Y2FudmFzIGlkPVwibXlDaGFydDEzXCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YV9vdGhlcnNfcmFkYXI7IFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoYXJ0Migpe1xuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQxMycpO1xuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgICB0eXBlOiAncmFkYXInLFxuICAgICAgICBkYXRhOiBkYXRhX290aGVyc19yYWRhcixcblxuICAgIH0pO1xuICB9XG5vbk1vdW50KGNyZWF0ZUNoYXJ0Milcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FLVyxpQkFBaUI7O1VBQ1osWUFBWTtNQUN0QixHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXO01BQ3ZDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRyxJQUN2QixJQUFJLEVBQUUsT0FBTyxFQUNiLElBQUksRUFBRSxpQkFBaUI7OztDQUkvQixPQUFPLENBQUMsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
