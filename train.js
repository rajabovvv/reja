
//mittaskd
function checkingLetters(input1, input2) {
   
  const sortedInput1 = input1.split('').sort().join('');
  const sortedInput2 = input2.split('').sort().join('');
  
  return sortedInput1 === sortedInput2;
}

console.log(checkingLetters("mitgroup", "gmtiprou"));  
console.log(checkingLetters("mitgroup", "groupmit"));  


///mittaask e  
function getReverse(str) {
  return str.split('').reverse().join('');
}

console.log(getReverse("hello"));  

/*class Shop {
    constructor(non, lagmon, cola) {
        this.products = {
            non:non,
            lagmon:lagmon,
            cola:cola,
        };
    }

qoldiq(){
    const time = new Date().toLocaleTimeString();
    return `Hozir  ${time}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`;
}

sotish(product,quantity){
    const time = new Date().toLocaleTimeString();

    if (this.products[product] === undefined) {
        return `Xatolik ${product} dokonda yoq`;
    }

    if (this.products[product] < quantity) {
        return `Xaatolik!  ${product} uchun yetarli mahsuslot yoq!`;
    }

    this.products[product] -= quantity;
    return`Hozir ${time}da ${quantity}ta ${product} sotildi`
}

qabul(product, quantity) {
    const time = new Date().toLocaleDateString();

if (this.products[product] === undefined) {
    return `Xatolik ${product} do'konga qabul qilib bolmaydi`
    }
this.products[product] += quantity;
return `Hozir ${time}da ${quantity}ta ${product} qabul qilinadi!`;
    }
}

const shop = new Shop(4,5,2);
console.log(shop.qoldiq());




/*class Shop {
    constructor(bread, lagmon, cola) {
      this.products = {
        bread: bread,
        lagmon: lagmon,
        cola: cola
      };
    }
  
    getCurrentTime() {
      const now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
  
    remaining() {
      console.log(`Now at ${this.getCurrentTime()} there are ${this.products.bread} breads, ${this.products.lagmon} lagmons, and ${this.products.cola} colas!`);
    }
  
    sell(product, quantity) {
      if (this.products[product] === undefined) {
        console.log(`Product ${product} not found!`);
        return;
      }
      if (this.products[product] < quantity) {
        console.log(`Not enough ${product}s in stock to sell!`);
        return;
      }
      this.products[product] -= quantity;
      console.log(`Now at ${this.getCurrentTime()} sold ${quantity} ${product}(s).`);
    }
  
    accept(product, quantity) {
      if (this.products[product] === undefined) {
        console.log(`Product ${product} not found!`);
        return;
      }
      this.products[product] += quantity;
      console.log(`Now at ${this.getCurrentTime()} received ${quantity} ${product}(s).`);
    }
  }
  
  // Example usage:
  const shop = new Shop(4, 5, 2);
  shop.remaining();
  shop.sell("bread", 3);
  shop.accept("cola", 4);
  shop.remaining();
/*function divide(a, b, callback) {
    if (b === 0) {
      callback("Error: Division by zero");
    } else {
      callback(null, a / b);  // null means no error, followed by the result
    }
  }
  
  divide(10, 1, function(err, result) {
    if (err) {
      console.log(err);  // "Error: Division by zero"
    } else { console.log("counting...")
    setTimeout(() => {
        console.log(result);
      },3000)  // 5
    }
  });
  

/*async function raqamSanash(input) {
    let count = 0;
    for (let item of input) { 
      if (item >= '0' && item <= '9') {
        count++;
      }
    }
    return count;
  }
  
  raqamSanash("ad2a54y79wet0sfgb9").then(console.log); 
  
/*
console.log('Jack Ma maslahatlari:');

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

    run();



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
    //2C8Ko7wk84DgKzFU*/
    