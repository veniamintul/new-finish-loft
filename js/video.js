let player;
const playerContainer =$('.player');

let eventsInit=function(){      //обработчики
  $(".player__start").click(function(event){
    event.preventDefault();

    const btn =$(event.currentTarget);

    if(playerContainer.hasClass('paused')){
      //playerContainer.removeClass("paused");  удаляем для того чтобы заработала большая кнопка
      player.playVideo();
    }else{
      //playerContainer.addClass("paused");
      player.playVideo();
    }

    
  });


   $(".player__playback").click(function(event){  //Делаем остановку видео по клику
     const bar =$(event.currentTarget);
     const clickedPosition =event.originalEvent.LayerX;   //вычислили где конкретно мы кликнули
     const newButtonPositionPercentSec=(clickedPosition/bar.width())*100;

     const newPlaybackPosition=(player.getDuration()/100)*newButtonPositionPercent;   //a1.переменная для того чтобы понять на какой секунде видео остановился ползунок
                                           //чтобы ползунок не возврвщался к началу



     $(".player__playback-button").css({
       left:'${newButtonPositionPercent}%'
     });


     player.seekTo(newPlaybackPositionSec);   //a2 

   });


   $(".player__splash").click(function(event){
      player.playVideo();
   });

};
 
const formatTime =function(timeSec){      //переделываем в привычное нам отображение мин и сек
      const roundTime =Math.round(timeSec); //округляем полученное время

      //const minutes= Math.floor(roundTime/60); //высчитываем кол-во минут
      const minutes= addZero(Math.floor(roundTime/60));
      //const seconds =roundTime -minutes*60;  
      const seconds =addZero(roundTime -minutes*60); //поставили нолик в начале циферки
      
      function addZero(num){
           return num<10 ? '0${num}':num;   //абсолютно не понятная строка((
      }



      return '${minutes} : ${seconds}';  //: означает иначе
};

const onPlayerReady=function(){           //прописываем время

   let interval;


    const durationSec= player.getDuration();
    //$('.player__duration-estimate').text(durationSec);

    $('.player__duration-estimate').text(formatTime(durationSec));

    if(typeof interval !=='undefined' ){
      clearInterval(interval);
    }


    interval=setInterval(function(){
       const completedSec=player.getCurrentTime();

      const completedPercent =(completedSec/durationSec)*100          //ползунок.1.Рассчитываем кол-во процентов
                                                                  //часть делим на целое и *100-узнаем кол-во процентов

      $(".player__playback-button").css({
        left: '${completedPercent}%'         //ползунок.2. Сдвигаем на полученное значение. НЕ ЗАБЫТЬ ПРО ЕДИНИЦЫ ИЗМЕРЕНИЯ!!!
                                             //в данном случае %
      })


       $('.player__duration-estimate').text(formatTime(completedSec));
    },1000);  //означает что функцию спарвшиваем раз в секунду
};

const onPlayerStateChange=function(event){   //большая кнопка плей
 /*
 -1воспроизведение видео не начато
 0 воспроизведение видео завершено
 1 воспроизведение
 2 пауза
 3 буферизация
 5 видео реплики
 
 */ 


  switch(event.data){
      case 1:
        playerContainer.addClass("active");
        playerContainer.addClass("paused");
        break;
      
      case 2:
        playerContainer.removeClass("active");
        playerContainer.removeClass("paused");
        break;
  }
}


function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '400',
    width: '660',
    videoId: 'qDY-VmgTI4k',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 0,//управление клавиатурой
      showinfo: 0,
      rel: 0,  //рекомендации
      autoplay: 0,
      modestbranding: 0
    }
  });
}

eventsInit();


