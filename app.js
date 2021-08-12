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
        <h1>event.key</h1>
    </div>
    <div class ="key">
        ${code}
        <h1>event.code</h1>
    </div>
    <div class ="key">
        ${which}
        <h1>event.which</h1>
        </div>
    `;

});