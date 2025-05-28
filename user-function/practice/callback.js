// function MeraKaam() {
//     console.log("main abhi tv dekh raha hoa");


// }
// function khanaBanGaya(callback) {
//     console.log("ami:khana ban gaya ha!");
//     callback();


// }
// khanaBanGaya(MeraKaam);


// 
// function sleep () {
//     console.log("main ab soo raha hoa..😴"); 
// }
// function study () {
//     console.log("ab ma pharai kar raha hoa ... ");

// }
// function night(isExam, callback1, callback2){
//     console.log("🌙rat ho gayi...");
//     setTimeout (() => {if (isExam){callback2();}else{callback1();} },2000);
// }
// let kalexam = true ;
// night(kalexam,sleep,study);


// function game () {
//     console.log("main game khal raha hoa");}
//     function sleep () {console.log("sleeping");}

//  function evening ( adeel, callback1,callback2,) { console.log("sham ho gayi");
//     setTimeout(() => {
//         if(adeel){callback1();} else{callback2();}
//     },2000);} 
//   let gone = true;
//     evening(gone,game,sleep);


// let chailana = new Promise((resolve, reject) => {
//     let chaibani = true;
//     if (chaibani) {resolve("chai aa gayi☕") }else{reject("gas khatam , chai nahi bani")}

// });

// chailana
// .then((message) => {
//     console.log(" sucess " + message);
// })
// .catch((error) => {console.log(" error " + error);});

// let dostkavaada = new Promise((resolve, reject) => {
//     console.log("friend: ma 5 mints ma ata hoa ")
//     setTimeout(() => {
//         resolve("ma aya gaya dost");
//     },5000);
// });
// dostkavaada.then((msg) => { console.log(msg);}) ;










// function sleep () {
//     console.log("i am sleeping ");}
//     function gaming () {
//     console.log("i am playing ");


// }
// function game(time,callback1,callback2) {console.log ("i am is nowing about game"); 
//     callback();

// } 

// let timeing= true;

// game(timeing,callback1,callback2);
// async function getdata() { return new Promise((resolve, _reject) => { setTimeout(() => { resolve(455) }, 3500); }) }

async function getdata() {let x= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    console.log(data)
      return(244 ) }
 
async function main() {
    console.log("loading modues")
    console.log("do something else")
    console.log("load data")
    let data = await getdata()
    console.log(data)
    console.log("process data")
}

main()











