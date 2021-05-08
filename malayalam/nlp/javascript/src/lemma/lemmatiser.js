// malayalam lemmatiser 

// globals
let p = document.getElementById("p");
let input = document.getElementById("input");
let type = document.getElementsByTagName("h3");



// main function
const btn = document.querySelector("Button"); // grabs the button

btn.addEventListener("click", trigger); //event listener

// trigger function
function trigger() {
    pl_root();
    pl_exps();
    gr_cases();
    chillu_changer();
    chillu_corrector();
}

function pl_root(){
    var i = input.value; 
    const pl_am = /മുകള്$|മുകൾ$|ങ്ങള്$|ങ്ങൾ$/gm; //regex to check plurals with am root
    const subs_pl_am = `ം`;
    const pl = /ക്കൾ$|ക്കള്$|കൾ$|കള്$|മാർ$|മാര്$/gm; //regex  to split at these endings
    const subs_pl = ``;
    const pl_u = /ുകൾ$|ുകള്$/gm;
    const subs_pl_u = `്`;
    let info = type[0];
   

    if(pl_am.test(i)){
        p.innerHTML = i.replace(pl_am, subs_pl_am);
        info.innerHTML = `plural to singular`;
    } else if(pl.test(i)){
        p.innerHTML = i.replace(pl, subs_pl);
        info.innerHTML = `plural to singular`;
    } else if(pl_u.test(i)){
        p.innerHTML = i.replace(pl_u,subs_pl_u);
        info.innerHTML = `plural to singular`;
    } 
};

function pl_exps(){

    var i = input.value;
    let info = type[0];
    if (i === `ഞങ്ങൾ`| i ===`ഞങ്ങള്`|i ===`നമ്മള്`|i ===`നമ്മൾ`|i ===`നാം`){
        p.innerHTML = `ഞാൻ`;
        info.innerHTML = `plural to singular`;
    }else if(i === `നിങ്ങൾ`| i === `നിങ്ങള്`){
        p.innerHTML = `നീ`;
        info.innerHTML = `plural to singular`;
    }else if(i === `താങ്കൾ`| i === `താങ്കള്`){
        p.innerHTML = `താൻ`;
        info.innerHTML = `plural to singular`;
    }else if(i === `അവ`|i === `അവറ്റ`|i === `അവറ്റകള്`|i === `അവറ്റകൾ`){
        p.innerHTML = `അത്`;
        info.innerHTML = `plural to singular`; 
    } else if(i.includes(`അവര്`) |i.includes(`അവർ`)){
        p.innerHTML = `അവൻ | അവൾ`;
        info.innerHTML = `plural to singular`;
    } 

}

function gr_cases(){
    let i = input.value;
    let info = type[0];
    const gr_cases_norm = /യോട്$|യോടു$|വോട്$|വോടു$|യ്ക്ക്$|യ്ക്കു$|ക്ക്$|ക്കു$|യാല്$|യാൽ$/gm;
    const gr_cases_u = / ിഩോട്$|ിഩോടു$|ിനോട്$|ിനോടു$|ോട്$|ോടു$|ുക്ക്$|ുക്കു$|ിക്ക്$|ിക്കു$|ാല്$|ാൽ$/gm;
    
    if (gr_cases_norm.test(i)){
        p.innerHTML = i.replace(gr_cases_norm, ``);
        info.innerHTML = `noun`;
    } else if(gr_cases_u.test(i)){
        p.innerHTML = i.replace(gr_cases_u, `്`);
        info.innerHTML = `noun`;
    }
}

function chillu_changer(){
    const root = p.innerHTML;
    
    if(/ഩ്$|ന്$/gm.test(root)){
        p.innerHTML = root.replace(/ഩ്$|ന്$/gm, `ൻ`);
    }else if(/ല്$/gm.test(root)){
        p.innerHTML = root.replace(/ല്$/gm, `ൽ`);
    } else if(/ള്$/gm.test(root)){
        p.innerHTML = root.replace(/ള്$/gm, `ൾ`);
    } else if(/ണ്$/gm.test(root)){
        p.innerHTML = root.replace(/ണ്$/gm, `ൺ`);
    } else if(/ര്$/gm.test(root)){
        p.innerHTML = root.replace(/ര്$/gm, `ർ`);
    } 
}

function chillu_corrector(){
    const root = p.innerHTML;

    if(root.endsWith(`ണ്ൺ`)){
        p.innerHTML = root.replace(`ണ്ൺ`, `ണ്ണ്`);
    }else if(root.endsWith(`ല്ൽ`)){
        p.innerHTML = root.replace(`ല്ൽ`, `ല്ല്`);
    }else if(root.endsWith(`ള്ൾ`)){
        p.innerHTML = root.replace(`ള്ൾ`, `ള്ള്`);
    }else if(root.endsWith(`ന്ൻ`)){
        p.innerHTML = root.replace(`ന്ൻ`, `ന്ന്`);
    }else if(root.endsWith(`ഩ്ൻ`)){
        p.innerHTML = root.replace(`ഩ്ൻ`,`ഩ്ഩ്`);
    }
}
