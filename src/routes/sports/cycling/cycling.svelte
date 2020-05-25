<script>
    import Charts from './cycling-charts.svelte'
    import datas from './cycling-data.js'
    let data = datas
</script>

<h1>Cycling</h1>

<Charts {data} />