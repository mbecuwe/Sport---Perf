import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as onMount, a as validate_slots, e as element, c as claim_element, f as children, g as detach_dev, k as attr_dev, l as add_location, m as insert_dev, o as noop } from './client.dc7c2334.js';
import './moment.98d1f4f0.js';
import { C as Chart } from './Chart.35ef1681.js';

/* src\routes\sports\swimming\swimming-charts.svelte generated by Svelte v3.22.3 */
const file = "src\\routes\\sports\\swimming\\swimming-charts.svelte";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpbW1pbmctY2hhcnRzLmE0ZDg1N2Q2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Nwb3J0cy9zd2ltbWluZy9zd2ltbWluZy1jaGFydHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xyXG5leHBvcnQgbGV0IGRhdGE7IFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcclxuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKTtcclxuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICB5QXhlczogXHJcbiAgICAgICAgICAgICAgICBbe1xyXG4gICAgICAgIGlkOiAnRGlzdGFuY2UnLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnbGVmdCcsXHJcbiAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIGxhYmVsU3RyaW5nOiAnRGlzdGFuY2UgKG0pJyxcclxuICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaWQ6ICdTcHJpbnRzJyxcclxuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcclxuICAgICAgICAgIHNjYWxlTGFiZWw6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICBsYWJlbFN0cmluZzogJ1NwcmludHMnLFxyXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgaWQ6ICdTcGVlZCcsXHJcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXHJcbiAgICAgICAgICBzY2FsZUxhYmVsOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgbGFiZWxTdHJpbmc6ICdTcGVlZCAoa20vaCknLFxyXG4gICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgICAgZ3JpZExpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICB9XVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxub25Nb3VudChjcmVhdGVDaGFydClcclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BS1csSUFBSTs7VUFDQyxXQUFXO01BQ3JCLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVM7O01BQ3JDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRzs7SUFDdkIsSUFBSSxFQUFFLE1BQU07SUFDTixJQUFJO0lBQ1YsT0FBTztLQUNILE1BQU07TUFDRixLQUFLOztRQUViLEVBQUUsRUFBRSxVQUFVO1FBQ2QsUUFBUSxFQUFFLE1BQU07UUFDaEIsVUFBVTtTQUNSLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGNBQWM7U0FDM0IsV0FBVyxFQUFFLElBQUk7Ozs7UUFHbkIsRUFBRSxFQUFFLFNBQVM7UUFDYixRQUFRLEVBQUUsT0FBTztRQUNmLFVBQVU7U0FDVixPQUFPLEVBQUUsSUFBSTtTQUNiLFdBQVcsRUFBRSxTQUFTO1NBQ3RCLFdBQVcsRUFBRSxJQUFJOztRQUVuQixTQUFTLElBQ0UsT0FBTyxFQUFFLEtBQUs7OztRQUd6QixFQUFFLEVBQUUsT0FBTztRQUNYLFFBQVEsRUFBRSxPQUFPO1FBQ2YsVUFBVTtTQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2IsV0FBVyxFQUFFLGNBQWM7U0FDM0IsV0FBVyxFQUFFLElBQUk7O1FBRW5CLFNBQVMsSUFDRSxPQUFPLEVBQUUsS0FBSzs7Ozs7Ozs7Q0FRakMsT0FBTyxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
