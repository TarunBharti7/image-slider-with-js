let flag = 0;

slideShow(flag);

function controller(x){
    flag = flag + x;
    slideShow(flag);
    console.log("click me");
}

function slideShow(num) {
    let slide = document.getElementsByClassName("slide")

    if(num == slide.length){
        flag =0;
        num =0;
    }
    if(num < 0){
        flag = slide.length -1;
        num = slide.length -1;
    }

    for(let i = 0 ; i < slide.length; i++){
        slide[i].style.display = "none";
    }

    console.log(slide.length);

    slide[num].style.display = "block";
}