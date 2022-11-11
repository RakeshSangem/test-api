let recData = [];

async function mapData(recData) {
    const res = await fetch('https://goweather.herokuapp.com/weather/Ly');
    const cityData = await res.json().then(data => recData.push({...data}));
    const html = recData.map((d) => {
        console.log(d)
        return `
        <p class="result w-full text-center text-lg p-3 text-white/90 bg-white/10 rounded-md">${d.temperature}</p>
        `
    })
    document.querySelector('.group').innerHTML = html;
}
mapData(recData);