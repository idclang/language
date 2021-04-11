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


//kal splitter [doesn't work]

function find(){
    let input = document.getElementById("input").value;
    let p = document.getElementById("p");
    let kkal = input.includes("ക്കൾ");
    let ngal = input.includes("ങ്ങൾ"); 
    let kal = input.includes("കൾ");

    if (kkal === true) {
        let root = input.split("ക്കൾ").join(""); //checks for kkal
        p.innerHTML = root;
    } else if (ngal === true) {
        let root = input.split("ങ്ങൾ").join(""); //checks for ngal
        p.innerHTML = root +"ം";
    } else if (kal === true) {
        let root = input.split("കൾ").join(""); //checks for kal
        p.innerHTML = root;
    } else {
        p.innerHTML = "Not found"
    }
      

}
 
