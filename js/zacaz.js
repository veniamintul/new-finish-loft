
$('.form').submit(function(event){
  event.preventDefault();

   const form =$(event.currentTarget);
   const name=form.find("[name='name']");
   const phone=form.find("[name='phone']");
   const ulica=form.find("[name='ulica']");
   const house=form.find("[name='house']");
   const korpus=form.find("[name='korpus']");
   const kvartira=form.find("[name='kvartira']");
   const itazh=form.find("[name='itazh']");
   const to=form.find("[name='to']");



  $.ajax({
    url:"https://webdev-api.loftschool.com/sendmail",
    nethod:"post",
    data:{
      name:name.val(),
      phone:phone.val(),
      ulica: ulica.val(),
      house: house.val(),
      korpus: korpus.val(),
      kvartira: kvartira.val(),
      itazh:itazh.val(),
      to:to.val()
      
    }
  });



 
  $.fancybox.open({
    src : "#modal",
    type : "inline"

  })

  });

  $('btn app-close-modal').click(function(event){
    event.preventDefault();
    $.fancybox.close();
  })
$('zacaz__button__two').click(function(event){
  event.preventDefault();
  nameInput.value='';
})
  