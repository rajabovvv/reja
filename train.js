console.log("train successfully working");
/*console.log('Jack Ma maslahatlari:');

const list = [
    'Yaxshi talaba bo\'ling', // 0-20
    'Yaxshi boshliq tanlang va ko\'proq xato qiling', // 20-30
    'O\'zingizga ishlashni boshlang', // 30-40
    'Siz tushungan narsalarni qiling', // 40-50
    'Yoshlarga investitsiya kiriting', // 50-60
    'Endi dam oling, foydasi yo\'q' // 60+
];

function maslahatBering(a, callback) {
    if (typeof a !== 'number') {
 callback('Insert a number', null);
    }

    if (a <= 20) {
        callback(null, list[0]);
    } else if (a > 20 && a <= 30) {
        callback(null, list[1]);
    } else if (a > 30 && a <= 40) {
        callback(null, list[2]);
    } else if (a > 40 && a <= 50) {
        callback(null, list[3]);
    } else if (a > 50 && a <= 60) {
        callback(null, list[4]);
    } else {
        setTimeout(function () {

        
        callback(null, list[5]);
    },5000);
    }
}
console.log('passed here 1');
maslahatBering(65, (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        console.log('Javob:', data);
    }
});
console.log('passed here 2');*/

// Asynhronous functions

/*
console.log('Jack Ma maslahatlari:');

const list = [
    'Yaxshi talaba boling', // 0-20
    'Yaxshi boshliq tanlang va koproq xato qiling', // 20-30
    'Ozingizga ishlashni boshlang', // 30-40
    'Siz tushungan narsalarni qiling', // 40-50
    'Yoshlarga investitsiya kiriting', // 50-60
    'Endi dam oling, foydasi yoq' // 60+
];

async function maslahatBering(a) {
    if (typeof a !== 'number') throw new Error ('insert a number :');

    if (a <= 20) {
        return(null, list[0]);
    } else if (a > 20 && a <= 30) {
        return(null, list[1]);
    } else if (a > 30 && a <= 40) {
        return(null, list[2]);
    } else if (a > 40 && a <= 50) {
        return(null, list[3]);
    } else if (a > 50 && a <= 60) {
        return(null, list[4]);
    } else {
        return  list[5];
        }
    }
    
   // console.log('passed here 0');
    //maslahatBering(20)
    //.then((data) => {
      //  console.log('javob:',data);
    //})
    //.catch((err) => {
      //  console.log('ERROR:',err);
    //});
    //console.log('passed here 1');
//asyn/await
    async function run() {
        let javob = await maslahatBering (20);
       console.log(javob);
       javob = await maslahatBering(31);
       console.log(javob);
       javob = await maslahatBering(44);
       console.log(javob); 
        
    }

    run();*/



    function countLetter(letter, word, callback) {
        let count = word.split(letter).length - 1;
        callback(null, count);
    }
    
    
    countLetter("f", "giraffe", (err, result) => {
        if (err) {
            console.log("Error:", err);
        } else {
            console.log("harflar marotaba:", result); 
        }
    });
    //2C8Ko7wk84DgKzFU
    