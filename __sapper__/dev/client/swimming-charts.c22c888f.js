import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as onMount, a as validate_slots, e as element, c as claim_element, f as children, g as detach_dev, k as attr_dev, l as add_location, m as insert_dev, o as noop } from './client.09cfed00.js';
import './moment.98d1f4f0.js';
import { C as Chart } from './Chart.d62ec9f6.js';

/* src/routes/sports/swimming/swimming-charts.svelte generated by Svelte v3.22.3 */
const file = "src/routes/sports/swimming/swimming-charts.svelte";

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
								id: "Sprints",
								position: "right",
								scaleLabel: {
									display: true,
									labelString: "Sprints",
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Swimming_charts> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Swimming_charts", $$slots, []);

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

class Swimming_charts extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { data: 0, createChart: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Swimming_charts",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*data*/ ctx[0] === undefined && !("data" in props)) {
			console.warn("<Swimming_charts> was created without expected prop 'data'");
		}
	}

	get data() {
		throw new Error("<Swimming_charts>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set data(value) {
		throw new Error("<Swimming_charts>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get createChart() {
		return this.$$.ctx[1];
	}

	set createChart(value) {
		throw new Error("<Swimming_charts>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Swimming_charts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpbW1pbmctY2hhcnRzLmMyMmM4ODhmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9zd2ltbWluZy1jaGFydHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcbmV4cG9ydCBsZXQgZGF0YTsgXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcbiAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0Jyk7XG4gICAgdmFyIG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgICAgICAgeUF4ZXM6IFxuICAgICAgICAgICAgICAgIFt7XG4gICAgICAgIGlkOiAnRGlzdGFuY2UnLFxuICAgICAgICBwb3NpdGlvbjogJ2xlZnQnLFxuICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ0Rpc3RhbmNlIChtKScsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICBpZDogJ1NwcmludHMnLFxuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ1NwcmludHMnLFxuICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgfSxcbiAgICAgICAgZ3JpZExpbmVzOiB7XG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcbiAgICAgICAgICAgICAgIH0sXG4gICAgICB9LCB7XG4gICAgICAgIGlkOiAnU3BlZWQnLFxuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBzY2FsZUxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ1NwZWVkIChrbS9oKScsXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgICAgICBncmlkTGluZXM6IHtcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICAgICAgICAgfSxcbiAgICAgIH1dXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICB9XG5vbk1vdW50KGNyZWF0ZUNoYXJ0KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUtXLElBQUk7O1VBQ0MsV0FBVztNQUNyQixHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTOztNQUNyQyxPQUFPLE9BQU8sS0FBSyxDQUFDLEdBQUc7O0lBQ3ZCLElBQUksRUFBRSxNQUFNO0lBQ04sSUFBSTtJQUNWLE9BQU87S0FDSCxNQUFNO01BQ0YsS0FBSzs7UUFFYixFQUFFLEVBQUUsVUFBVTtRQUNkLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFVBQVU7U0FDUixPQUFPLEVBQUUsSUFBSTtTQUNiLFdBQVcsRUFBRSxjQUFjO1NBQzNCLFdBQVcsRUFBRSxJQUFJOzs7O1FBR25CLEVBQUUsRUFBRSxTQUFTO1FBQ2IsUUFBUSxFQUFFLE9BQU87UUFDZixVQUFVO1NBQ1YsT0FBTyxFQUFFLElBQUk7U0FDYixXQUFXLEVBQUUsU0FBUztTQUN0QixXQUFXLEVBQUUsSUFBSTs7UUFFbkIsU0FBUyxJQUNFLE9BQU8sRUFBRSxLQUFLOzs7UUFHekIsRUFBRSxFQUFFLE9BQU87UUFDWCxRQUFRLEVBQUUsT0FBTztRQUNmLFVBQVU7U0FDVixPQUFPLEVBQUUsSUFBSTtTQUNiLFdBQVcsRUFBRSxjQUFjO1NBQzNCLFdBQVcsRUFBRSxJQUFJOztRQUVuQixTQUFTLElBQ0UsT0FBTyxFQUFFLEtBQUs7Ozs7Ozs7O0NBUWpDLE9BQU8sQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
