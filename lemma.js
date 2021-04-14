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


btn.addEventListener("click", trig);

function trig(){
    find();
    excpection();
}




// plural to root word finder

function find(){
    let input = document.getElementById("input").value;
    let p = document.getElementById("p");

    // variables checking for the following characters in the input
    let mukal = input.includes("മുകൾ");
    let mukal2 = input.includes("മുകള്");
    let ukal = input.includes("ുകൾ");
    let kkal = input.includes("ക്കൾ");
    let kkal2 = input.includes("ക്കള്");
    let ngal = input.includes("ങ്ങൾ"); 
    let ngal2 = input.includes("ങ്ങള്");
    let kal = input.includes("കൾ");
    let kal2 = input.includes("കള്");
    let mar = input.includes("മാർ");
    let mar2 = input.includes("മാര്");

  //rules
    //plural splitter
    if (mukal === true) {
        let root = input.split("മുകൾ").join(""); //checks for mukal
        p.innerHTML = root + "ം";
    }
    else if (mukal2 === true){
        let root = input.split("മുകള്").join(""); // checks for mukal2
        p.innerHTML = root +  "ം";
    }
    else if (ukal === true) {
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
    else {
      p.innerHTML = "നിങ്ങളുടെ അകത്തൂട്ട് തിരനോട്ടം ചെയ്യുക. നിങ്ങൾ മലയാളം യുണിക്കോട് വീകപടം തഩ്ഩെ ആണൊ പയമ്പെടുത്തുന്നത് എന്നു ഉറപ്പുവരുത്തുക.";
    }
} 

function excpection(){
    let i = input.value;

    if(i === "ഞങ്ങൾ") {
        p.innerHTML = "ഞാൻ";
    } else if ( i === "ഞങ്ങള്") {
        p.innerHTML = "ഞാൻ"; //
    } else if (i === "നിങ്ങൾ") {
        p.innerHTML = "നീ";
    } else if ( i === "നിങ്ങള്") {
        p.innerHTML = "നീ"; // 
    } else if (i === "നമ്മൾ") {
        p.innerHTML = "ഞാൻ";
    } else if (i === "നമ്മള്") {
        p.innerHTML = "ഞാൻ";//
    } else if (i === "താങ്കൾ") {
        p.innerHTML = "താൻ";
    } else if (i === "താങ്കള്"){
        p.innerHTML = "താൻ";
    } else if (i.includes("അവറ്റ")) {
        p.innerHTML = "അവ"; //
    } else if (i === "നാം") {
        p.innerHTML = "ഞാൻ";
    } else if (i.includes("അവർ")){
        p.innerHTML = "അവൻ / അവൾ";
    } else if(i.includes("അവര്")) {
        p.innerHTML = "അവൻ / അവൾ";
    };
}
