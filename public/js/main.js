$(document).ready(function(){
    var clicked = 0;
    var last = $('.row').length;
    $('.answer li').click(function(){
      clicked++;
      const numTrue = $('#paginate li');
      const img = $(`#img${clicked}`).attr('data-family');
      const answer = $(this).attr('data-answer');
      let total = 0;

      if(clicked != last ){
        if(img === answer){
          $('#paginate').append(`<li class="true"><img src="../img/happy.svg"><br><h2>${clicked}</h2></li>`);
          swal({icon: "success", text: "Barakalla. Tog'ri Topdingiz", title: "Ofarin!", button: "X"});
          $(this).addClass('text-success');
          // wait 2seconds then hide the element
          setTimeout(() => {
            $(this).parent().parent().parent().removeClass('current').addClass('d-none').next().addClass('current').removeClass('d-none');
          }, 1000);
        } else {
          $('#paginate').append(`<li class="false"><img src="../img/sad.svg"><br><h2>${clicked}</h2></li>`);
          swal({icon: "error", text: "Afsus. Notog'ri Topdingiz", title: "Noto'gri!", button: "X"});
          $(this).addClass('text-danger');
          // iterate through all elements and find the thame date in the list
          $('.current .answer li').each(function(i, data){
            var el = $(data).attr('data-answer');
            if(el == img){
              $(data).addClass('text-success');
            }
          });
          // wait 5 seconds then hide the element
          setTimeout(() =>{
            $(this).parent().parent().parent().removeClass('current').addClass('d-none').next().addClass('current').removeClass('d-none'); 
          },3000)
        }

      } else if(clicked == last){
        if(img === answer){
          $('#paginate').append(`<li class="true"><img src="../img/happy.svg"><br><h2>${clicked}</h2></li>`);
          $('.answer li').off('click');
        } else {
          $('#paginate').append(`<li class="false"><img src="../img/sad.svg"><br><h2>${clicked}</h2></li>`);
          $('.answer li').off('click');
        }

          $('#paginate li').each(function(i, item){
            const id = $(item).attr('class');
            if(id === "true"){
              total++;
            }
          });
          console.log(total)

        setTimeout(() =>{
          swal({icon: "success", text: "Siz berilgan 20 ta savoldan "+total+"gasiga to'g'ri javob berdingiz", title: total+"ta To'g'ri", button: "X"});
        },1000);
        return;
      }
    });



    $('#refresh').click(function(){
      console.log('refresh')
      location.reload();
    })
});