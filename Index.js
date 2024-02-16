

let auxiliar = {
    contador: 123,
    fyh: new Date().toLocaleString()
}
let refInterval = setInterval(() => {
    auxiliar.contador++;
    auxiliar.fyh = new Date().toLocaleString();
    console.log(auxiliar);
}, 2000);

setTimeout(() => {
    clearInterval(refInterval)
}, 20000);

process.on('exit', () => {
    console.log('¡¡¡chau!!!');
})