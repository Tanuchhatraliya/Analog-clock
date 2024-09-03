
function myFunction() {
    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let d = a.getDate();
    let mo = a.getMonth();
    let y = a.getFullYear();

    document.getElementById("time").innerHTML = h + ":" + m + ":" + s ;         
    document.getElementById("date").innerHTML = d + "/" + (mo+1) + "/" + y;            
}
let aa = setInterval(function(){
myFunction();
}, 1000)
myFunction();
    let hr = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    function displayTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        let hRotation = 30 * hh + mm / 2;
        let mRotation = 6 * mm;
        let sRotation = 6 * ss;

        hr.style.transform = `rotate(${hRotation}deg)`;
        min.style.transform = `rotate(${mRotation}deg)`;
        sec.style.transform = `rotate(${sRotation}deg)`;
    }

    setInterval(displayTime, 1000);
