const mesureWidth=function(item){
    const screenWidth =$(window).width();
    const container=item.closest(".slider__item");  //ul  .color-menu
    const titlesBlocks =container.find(".slider__text__vloz");  //a  .color-menu__link
    const titlesWidth = titlesBlocks.width()*titlesBlocks.length;

    //return 500;
    const isMobile =window.matchMedia("(max-width:768px)").matches;

    if(isMobile){
        return screenWidth-titlesWidth ;  
    } else{
        return 500;
    }

    
};


const closeEveryItemInContainer=function(container){         //функция на закрытие
    const items=container.find(".slider__list"); //li
    const content=container.find(".slider__content");


    items.removeClass("activ");      ////////////f
    
    content.width(0);
};




const openItem=function(item){
    const hiddenContent=item.find(".slider__content");
    const reqWidth= mesureWidth(item);   ///ffff


    item.addClass("activ");  /////        до этого момента работал!!!!  mesureWidth не распознает почему-то


    hiddenContent.width(reqWidth);
};




$(".slider__text__vloz").on("click",function(event){
    event.preventDefault();

    const $this=$(event.currentTarget);
    const item =$this.closest(".slider__list");
    const itemOpened=item.hasClass("activ");   ////////////
    
    const container=$this.closest(".slider__item");  //ul

    if(itemOpened){
        closeEveryItemInContainer(container)
    }
    else{
        closeEveryItemInContainer(container)
        openItem(item);
    }

});

$(".slider__button").on("click",function(event){
    closeEveryItemInContainer($('.slider__item'));
})








//const mesureWidth = item => {
//   const screenWidth = $(window).width();
//    const container = item.closest(".color-menu");
//   const titlesBlocks = container.find(".color-menu__link");
//    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
//    const isMobile = window.matchMedia("(max-width: 768px").matches;

 //   if (isMobile) {
 //       return screenWidth - titlesWidth;
 //   } else {
 //       return 500;
 //   }

//}

//const closeEveryItemInContainer = container => {
//    const items = container.find(".color-menu__item");
//    const content = container.find(".color-menu__content");

//    items.removeClass("active");/////////////////////////
//    content.width(0);
//}

//const unblockItem = item => {
//    const hiddenContent = item.find(".color-menu__content");
//    const reqWidth = mesureWidth(item);

//    item.addClass("active");////////////////////////////////
//    hiddenContent.width(reqWidth);
//}

//$(".color-menu__link").on("click", e => {
 //   e.preventDefault();

//    const $this = $(e.currentTarget);
//    const item = $this.closest(".color-menu__item");
//    const itemOpened = item.hasClass("active");///////////////////////////
//    const container = $this.closest(".color-menu");

 //   if (itemOpened) {
//        closeEveryItemInContainer(container);
 //   } else {
 //       closeEveryItemInContainer(container);
 //       unblockItem(item);
  //  }
//});

//$(".color-menu__close").on("click", e => {
//    e.preventDefault();
//    closeEveryItemInContainer($('.color-menu'));
//})