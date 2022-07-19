function pause(){
    i++;
    if (i>5){
        i = 0;
        char = charging();//reset - moze da krene ispocetka
    }
    scroll.innerHTML = '';
    start();
}

function charging(){
    var text = 'Moram nauciti:';
    var text1 = 'PHP,';
    var text2 = 'JS,';
    var text3 = 'Bootstrap';
    var text4 = 'i jquery.';
    var text5 = 'Onda cu biti spreman za posao.';

    var stext = text.split('');//podeli nam string tako da izmedju karaktera imamo prazan prostor
    var stext1 = text1.split('');
    var stext2 = text2.split('');
    var stext3 = text3.split('');
    var stext4 = text4.split('');
    var stext5 = text5.split('');

    var eurekaArray = [stext,stext1,stext2,stext3,stext4,stext5];
    return eurekaArray;
}

var char = charging();
var scroll = document.getElementById('scroll');
var i = 0;
var loop;
function start() {
    if (char[i].length > 0) {//sve dok je velicina ovog array-a veca od nule
        scroll.innerHTML = scroll.innerHTML + char[i].shift();//izbacili smo prvi element iz naseg array-a i uneli ga u div
        loop = setTimeout(start, 100);
        }else {
        setTimeout(pause,2000);
    }
}
start();
