mainView();

function mainView(){
let app = document.getElementById("app");

app.innerHTML = `
<div id="header">
<h1>${model.header}</h1>
<h2>${model.title}</h2>
</div>

<div id="content">

</div>

<div class="button"> </div>
`;
}