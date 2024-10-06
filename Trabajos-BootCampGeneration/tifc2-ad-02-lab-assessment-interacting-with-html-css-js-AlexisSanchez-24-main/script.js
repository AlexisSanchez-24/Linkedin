document.getElementById("red").innerHTML = "Good Bye";

document.getElementsByTagName('h1')[1].style.color  = "orange";

document.getElementsByTagName('h1')[3].addEventListener('click', () => {
    document.getElementsByTagName('h1')[3].style.color = 'brown';
})