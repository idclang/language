// stemmatisation
/*
stemmatize based on plural forms using the pattern
1. words ending in  ഇ [i] or അ [a] > കൾ [kaɭ]
words ending in ഉ [u], ഊ [ū], ഓ [o] > ക്കൾ [kkaɭ]
words ending in ം [m] > replaces the m with ങ്ങൾ [ġġaɭ]
words ending in ൻ,ൽ, ർ, ൺ, ൾ, ൿ, ൔ, ൖ [chillezhuthukal]
 and ് [ɯ] > replaces the chillu to the original character/
  replaces the ɯ with u ഉകൾ [ ukaɭ ]
words ending in ൕ/യ് > ക്കൾ { most often this has alternative 
    pronunciation, eg: nāy > nāykkaɭ, however this can also be nāya 
    > nāyakaɭ,  } 
*/

const btn = document.querySelector("Button");


btn.addEventListener("click", find);



// plural to root word finder

function find(){
    let input = document.getElementById("input").value;
    let p = document.getElementById("p");
    let ukal = input.includes("ുകൾ");
    let kkal = input.includes("ക്കൾ");
    let kkal2 = input.includes("ക്കള്");
    let ngal = input.includes("ങ്ങൾ"); 
    let ngal2 = input.includes("ങ്ങള്");
    let kal = input.includes("കൾ");
    let kal2 = input.includes("കള്");
    let mar = input.includes("മാർ");
    let mar2 = input.includes("മാര്");

    //grammatical cases variables
    let yude = input.includes("യുടെ"); // checks if yude sandhi is present in the string
   
    //rules

    if (ukal === true) {
        let root = input.split("ുകൾ").join("");
        p.innerHTML = root + "്";
    }
    else if (kkal === true) {
        let root = input.split("ക്കൾ").join(""); //checks for kkal
        p.innerHTML = root;
    }else if (kkal2 === true) {
        let root = input.split("ക്കള്").join(""); //checks for kkal 2
        p.innerHTML = root;
    } 
    else if (ngal === true) {
        let root = input.split("ങ്ങൾ").join(""); //checks for ngal
        p.innerHTML = root +"ം";
    }
    else if (ngal2 === true) {
        let root = input.split("ങ്ങള്").join(""); //checks for ngal2
        p.innerHTML = root +"ം";
    } 
     else if (kal === true) {
        let root = input.split("കൾ").join(""); //checks for kal
        p.innerHTML = root;
    }  else if (kal2 === true) {
        let root = input.split("കള്").join(""); //checks for kal2
        p.innerHTML = root;
    } 
    else if (mar === true ) {
        let root = input.split("മാർ").join("");
        p.innerHTML = root;
    } else if (mar2 === true) {
        let root = input.split("മാര്").join("");
        p.innerHTML = root;
    }

 
} 
 
