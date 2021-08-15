const insert = document.getElementById(`insert`);
const reset = document.getElementById("reset")

window.addEventListener('keypress', (e) => {
    console.log(e);

    const key = e.key;
    const code = e.code;
    const which = e.which;

    insert.innerHTML = `

    <div class ="key">
        ${key}
        <h3>event.key</h3>
    </div>
    <div class ="key">
        ${code}
        <h3>event.code</h3>
    </div>
    <div class ="key">
        ${which}
        <h3>event.which</h3>
        </div>
    `;

});

reset.addEventListener("click", (e) => {

    insert.innerHTML = ` <div class="key">Press Any Key</div>`;




});