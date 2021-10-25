let nav1 = document.querySelector('#navlist1');
let nav2 = document.querySelector('#navlist2');
let nav3 = document.querySelector('#navlist3');
let nav4 = document.querySelector('#navlist4');
let nav5 = document.querySelector('#navlist5');

let mainheading1 = document.querySelector('#mainheading1')

let ourservices = document.querySelector('#ourservices');
let servicehead1 = document.querySelector('#servicehead1');
let servicehead2 = document.querySelector('#servicehead2');
let servicehead3 = document.querySelector('#servicehead3');
let servicehead4 = document.querySelector('#servicehead4');
let servicepara1 = document.querySelector('#servicepara1');
let servicepara2 = document.querySelector('#servicepara2');
let servicepara3 = document.querySelector('#servicepara3');
let servicepara4 = document.querySelector('#servicepara4');

let gallery = document.querySelector('#gallery');

let meetus = document.querySelector('#meetus');
let ourstory = document.querySelector('#ourstory');
let ourvision = document.querySelector('#ourvision');
let ourstorytext = document.querySelector('#ourstorytext');
let ourvisiontext = document.querySelector('#ourvisiontext');






document.getElementById('navlist1').replaceWith(nav1);
document.getElementById('navlist2').replaceWith(nav2);
document.getElementById('navlist3').replaceWith(nav3);
document.getElementById('navlist4').replaceWith(nav4);
document.getElementById('navlist5').replaceWith(nav5);

document.getElementById('mainheading1').replaceWith(mainheading1);

document.getElementById('ourservices').replaceWith(ourservices);
document.getElementById('servicehead1').replaceWith(servicehead1);
document.getElementById('servicehead2').replaceWith(servicehead2);
document.getElementById('servicehead3').replaceWith(servicehead3);
document.getElementById('servicehead4').replaceWith(servicehead4);
document.getElementById('servicepara1').replaceWith(servicepara1);
document.getElementById('servicepara2').replaceWith(servicepara2);
document.getElementById('servicepara3').replaceWith(servicepara3);
document.getElementById('servicepara4').replaceWith(servicepara4);

document.getElementById('gallery').replaceWith(gallery);
document.getElementById('meetus').replaceWith(meetus);
document.getElementById('ourstory').replaceWith(ourstory);
document.getElementById('ourstorytext').replaceWith(ourstorytext);
document.getElementById('ourvision').replaceWith(ourvision);
document.getElementById('ourvisiontext').replaceWith(ourvisiontext);



fetch("t1.json")

    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        const obj = data;

        nav1.innerHTML = obj.navlist1;
        nav2.innerHTML = obj.navlist2;
        nav3.innerText = obj.navlist3;
        nav4.innerText = obj.navlist4;
        nav5.innerText = obj.navlist5;

        mainheading1.innerText = obj.mainheading1;

        ourservices.innerText = obj.ourservices;
        servicehead1.innerText = obj.servicehead1;
        servicehead2.innerText = obj.servicehead2;
        servicehead3.innerText = obj.servicehead3;
        servicehead4.innerText = obj.servicehead4;
        servicepara1.innerText = obj.servicepara1;
        servicepara2.innerText = obj.servicepara2;
        servicepara3.innerText = obj.servicepara3;
        servicepara4.innerText = obj.servicepara4;

        gallery.innerText = obj.gallery;

        meetus.innerText = obj.meetus;
        ourstory.innerText = obj.ourstory;
        ourstorytext.innerText = obj.ourstorytext;
        ourvision.innerText = obj.ourvision;
        ourvisiontext.innerText = obj.ourvisiontext;

        document.getElementById('image1').src = obj.image1;
        document.getElementById('image2').src = obj.image2;
        document.getElementById('image3').src = obj.image3;
        document.getElementById('image4').src = obj.image4;
        document.getElementById('image5').src = obj.image5;
        document.getElementById('image6').src = obj.image6;

        document.getElementById('contacthead').innerHTML = obj.contacthead;
        document.getElementById('contactquote').innerHTML = obj.contactquote;
        document.getElementById('youraddress').innerHTML = obj.youraddress;

        document.getElementById('yourwhatsapp').href = obj.yourwhatsapp;
        document.getElementById('yourmap').src = obj.yourmap;
        document.getElementById('yourfacebook').href = obj.yourfacebook;
        document.getElementById('yourtwitter').href = obj.yourtwitter;
        document.getElementById('yourinsta').href = obj.yourinsta;
        document.getElementById('yourwhatsapp').href = obj.yourwhatsapp;
        document.getElementById('yourfooter').innerHTML = obj.yourfooter;


        // document.getElementById('yourmail').innerHTML = obj.yourmail;
        document.getElementById('yourmail').href = obj.yourmail;

        // document.getElementById('yournumber').innerHTML = obj.yournumber;
        document.getElementById('yournumber').href = obj.yournumber;
    });