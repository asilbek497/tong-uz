async function languageJs(lang){
    const response = await fetch("lang.json")
    const data = await response.json()
    document.getElementById("title").textContent = data[lang].title
    document.getElementById("day").textContent = data[lang].day
}

languageJs("uz")

document.getElementById("languageL").addEventListener("change", function(){
    languageJs(this.value)
})