import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as onMount, a as validate_slots, e as element, c as claim_element, b as children, g as detach_dev, h as attr_dev, j as add_location, k as insert_dev, n as noop } from './client.8ae66feb.js';
import { C as Chart } from './Chart.ff97f108.js';

/* src/routes/sports/running/running-charts.svelte generated by Svelte v3.22.3 */
const file = "src/routes/sports/running/running-charts.svelte";

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
			attr_dev(canvas, "id", "myChart");
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
	let { data } = $$props;

	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart(ctx,
		{
				type: "line",
				data,
				options: {
					scales: {
						yAxes: [
							{
								id: "Distance",
								position: "left",
								scaleLabel: {
									display: true,
									labelString: "Distance (m)",
									beginAtZero: true
								}
							},
							{
								id: "Elevation",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Elevation (m)",
									beginAtZero: true
								},
								gridLines: { display: false }
							},
							{
								id: "Speed",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Speed (km/h)",
									beginAtZero: true
								},
								gridLines: { display: false }
							}
						]
					}
				}
			});
	}

	onMount(createChart);
	const writable_props = ["data"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Running_charts> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Running_charts", $$slots, []);

	$$self.$set = $$props => {
		if ("data" in $$props) $$invalidate(0, data = $$props.data);
	};

	$$self.$capture_state = () => ({ onMount, Chart, data, createChart });

	$$self.$inject_state = $$props => {
		if ("data" in $$props) $$invalidate(0, data = $$props.data);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [data, createChart];
}

class Running_charts extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data: 0, createChart: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Running_charts",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data*/ ctx[0] === undefined && !("data" in props)) {
			console.warn("<Running_charts> was created without expected prop 'data'");
		}
	}

	get data() {
		throw new Error("<Running_charts>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data(value) {
		throw new Error("<Running_charts>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createChart() {
		return this.$$.ctx[1];
	}

	set createChart(value) {
		throw new Error("<Running_charts>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Running_charts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVubmluZy1jaGFydHMuYTVhNDQ2NDUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3BvcnRzL3J1bm5pbmcvcnVubmluZy1jaGFydHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YTsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeUF4ZXM6IFxuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgIGlkOiAnRGlzdGFuY2UnLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ0Rpc3RhbmNlIChtKScsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICBpZDogJ0VsZXZhdGlvbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAnRWxldmF0aW9uIChtKScsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6ICdTcGVlZCcsXG4gICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAnU3BlZWQgKGttL2gpJyxcbiAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAgIGdyaWRMaW5lczoge1xuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXG4gICAgICAgICAgICAgICB9LFxuICAgICAgfV1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbm9uTW91bnQoY3JlYXRlQ2hhcnQpXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FLVyxJQUFJOztVQUNDLFdBQVc7TUFDckIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUzs7TUFDckMsT0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHOztJQUN2QixJQUFJLEVBQUUsTUFBTTtJQUNOLElBQUk7SUFDVixPQUFPO0tBQ0gsTUFBTTtNQUNGLEtBQUs7O1FBRWIsRUFBRSxFQUFFLFVBQVU7UUFDZCxRQUFRLEVBQUUsTUFBTTtRQUNoQixVQUFVO1NBQ1IsT0FBTyxFQUFFLElBQUk7U0FDYixXQUFXLEVBQUUsY0FBYztTQUMzQixXQUFXLEVBQUUsSUFBSTs7OztRQUduQixFQUFFLEVBQUUsV0FBVztRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2YsVUFBVTtTQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGVBQWU7U0FDNUIsV0FBVyxFQUFFLElBQUk7O1FBRW5CLFNBQVMsSUFDRSxPQUFPLEVBQUUsS0FBSzs7O1FBR3pCLEVBQUUsRUFBRSxPQUFPO1FBQ1gsUUFBUSxFQUFFLE9BQU87UUFDZixVQUFVO1NBQ1YsT0FBTyxFQUFFLElBQUk7U0FDYixXQUFXLEVBQUUsY0FBYztTQUMzQixXQUFXLEVBQUUsSUFBSTs7UUFFbkIsU0FBUyxJQUNFLE9BQU8sRUFBRSxLQUFLOzs7Ozs7OztDQVFqQyxPQUFPLENBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
