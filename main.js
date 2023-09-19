let count = 0;

document.getElementById('less').onclick = function () {
    count--;

    document.getElementById('number').innerHTML = count;
}

document.getElementById('reset').onclick = function () {
    count = 0;

    document.getElementById('number').innerHTML = count;
}

document.getElementById('more').onclick = function () {
    count++;

    document.getElementById('number').innerHTML = count;
}