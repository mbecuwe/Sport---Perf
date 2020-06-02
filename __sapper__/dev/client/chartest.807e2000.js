import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, e as element, f as claim_element, g as children, b as detach_dev, j as attr_dev, k as add_location, l as insert_dev, n as noop } from './client.ea0bc41b.js';
import './_commonjsHelpers.1e235def.js';
import { C as Chart } from './Chart.97e39373.js';

/* src\routes\chartest.svelte generated by Svelte v3.22.3 */
const file = "src\\routes\\chartest.svelte";

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
			add_location(canvas, file, 28, 0, 746);
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
	function createChart() {
		var ctx = document.getElementById("myChart");

		var myChart = new Chart(ctx,
		{
				type: "bar",
				data: {
					labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
					datasets: [
						{
							label: "# of Votes",
							data: [12, 19, 3, 5, 2, 3],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
								"rgba(75, 192, 192, 0.2)",
								"rgba(153, 102, 255, 0.2)",
								"rgba(255, 159, 64, 0.2)"
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
								"rgba(75, 192, 192, 1)",
								"rgba(153, 102, 255, 1)",
								"rgba(255, 159, 64, 1)"
							],
							borderWidth: 1
						}
					]
				},
				options: {
					scales: {
						yAxes: [{ ticks: { beginAtZero: true } }]
					}
				}
			});
	}

	onMount(createChart);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Chartest> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Chartest", $$slots, []);
	$$self.$capture_state = () => ({ onMount, Chart, createChart });
	return [createChart];
}

class Chartest extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { createChart: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Chartest",
			options,
			id: create_fragment.name
		});
	}

	get createChart() {
		return this.$$.ctx[0];
	}

	set createChart(value) {
		throw new Error("<Chartest>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Chartest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRlc3QuODA3ZTIwMDAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY2hhcnRlc3Quc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gPHNjcmlwdD5cclxuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSBcInN2ZWx0ZVwiO1xyXG4gIGltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanNcIjtcclxuICBvbk1vdW50KGFzeW5jICgpID0+IHt9KTtcclxuICBmdW5jdGlvbiByZW5kZXJDaGFydCgpIHtcclxuICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Q2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgdmFyIGNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCJdLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk15IEZpcnN0IGRhdGFzZXRcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNTUsIDk5LCAxMzIpXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYigyNTUsIDk5LCAxMzIpXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFswLCAxMCwgNSwgMiwgMjAsIDMwLCA0NV1cclxuICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlvbnM6IHt9XHJcbiAgICB9KTtcclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPGJ1dHRvbiBvbjpjbGljaz17cmVuZGVyQ2hhcnR9PkxvYWQ8L2J1dHRvbj4gXHJcbjxjYW52YXMgaWQ9XCJteUNoYXJ0XCI+PC9jYW52YXM+IFxyXG5cclxuLS0+XHJcbjxjYW52YXMgaWQ9XCJteUNoYXJ0XCIgd2lkdGg9XCIyXCIgaGVpZ2h0PVwiMVwiPjwvY2FudmFzPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hhcnQoKXtcclxuICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKTtcclxuICAgIHZhciBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ1JlZCcsICdCbHVlJywgJ1llbGxvdycsICdHcmVlbicsICdQdXJwbGUnLCAnT3JhbmdlJ10sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICcjIG9mIFZvdGVzJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFsxMiwgMTksIDMsIDUsIDIsIDNdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDAuMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuMiknXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxub25Nb3VudChjcmVhdGVDaGFydClcclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBaUNnQixXQUFXO01BQ3JCLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVM7O01BQ3JDLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRzs7SUFDdkIsSUFBSSxFQUFFLEtBQUs7SUFDWCxJQUFJO0tBQ0EsTUFBTSxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUTtLQUM3RCxRQUFROztPQUNKLEtBQUssRUFBRSxZQUFZO09BQ25CLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7T0FDekIsZUFBZTtRQUNYLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIseUJBQXlCOztPQUU3QixXQUFXO1FBQ1AsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4Qix1QkFBdUI7O09BRTNCLFdBQVcsRUFBRSxDQUFDOzs7O0lBR3RCLE9BQU87S0FDSCxNQUFNO01BQ0YsS0FBSyxLQUNELEtBQUssSUFDRCxXQUFXLEVBQUUsSUFBSTs7Ozs7O0NBT3pDLE9BQU8sQ0FBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
