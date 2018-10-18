var ShowPrevBtn =  document.getElementById('show-prev');
var ShowNextBtn =  document.getElementById('show-next');
var SlideImg =  document.getElementById('slide-img');

ShowPrevBtn.addEventListener('click', onShowPrevBtnClick);
ShowNextBtn.addEventListener('click', onShowNextBtnClick);

var ImagesUrls = [];
ImagesUrls.push('https://upload.wikimedia.org/wikipedia/commons/c/ca/W210_E55_AMG.jpg');
ImagesUrls.push('https://1.bp.blogspot.com/-CpEWD5J8BI0/TZdc8YbjOTI/AAAAAAAABbo/qtznXOnkjxY/s1600/Mercedes_w210_e55_amg_silver_1.jpg');
ImagesUrls.push('https://www.benzworld.org/forums/attachments/w210-e-class/227898d1237256555-official-w210-e-class-sticky-pictures-picture-028.jpg');
ImagesUrls.push('https://a.d-cd.net/26e4af1s-960.jpg');

var currentImageIndex = 0;
ShowPrevBtn.disabled = true;

SlideImg.src = ImagesUrls[currentImageIndex];

function onShowPrevBtnClick(){
    currentImageIndex--;
    SlideImg.src = ImagesUrls[currentImageIndex];
    ShowNextBtn.disabled = false;
    if (currentImageIndex === 0 ){
        ShowPrevBtn.disabled = true;
    }


}


function onShowNextBtnClick(){
    currentImageIndex++;

    if (currentImageIndex === (ImagesUrls.length - 1) ){
        ShowNextBtn.disabled = true;
    }
    SlideImg.src = ImagesUrls[currentImageIndex];
    ShowPrevBtn.disabled = false;
}