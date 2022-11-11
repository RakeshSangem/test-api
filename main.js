// fetch('https://countriesnow.space/api/v0.1/countries/').then(res => res.json()).then(({ data }) => recData.push(...data))

let recData = [];
const res = await fetch('https://goweather.herokuapp.com/weather/Ly');
const cityData = await res.json().then(data => recData.push({...data}));

// console.log(recData)



// console.log(recData.recData);

function mapData(recData) {
    const html = recData.map((d) => {
        console.log(d)
        return `
        <p class="result w-full text-center text-lg p-3 text-white/90 bg-white/10 rounded-md">${d.temperature}</p>
        `
    })
    const suggestions = document.querySelector('.group').innerHTML = html;
}
mapData(recData);