
    const slider=$('.shop__list').bxSlider({
      //pages:false,  //убрали точки внизу
      dots:false,
      controls:false  //убрали стрелочки стоковые
    });


    $(".triegle__black__one__display").click( function(event){
      event.preventDefault();
      
      slider.goToNextSlide();
    })

    $(".triegle__black__two__display").click( function(event){
      event.preventDefault();
      slider.goToPrevSlide();
    })
  