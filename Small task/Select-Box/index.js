let lang = document.querySelector("#lang");
let btn = document.querySelector("#btn");

btn.onclick = (e) =>{
    e.preventDefault();
    const OptionsValue = [].filter
    .call(lang.options, (option) => option.selected )
    .map((Option) => Option.text );
    alert(OptionsValue)
}