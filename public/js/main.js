$(document).ready(function(){
    var clicked = 0;
    var last = $('.row').length;
    $('.answer li').click(function(){
      clicked++;
      const numTrue = $('#paginate li');
      const img = $(`#img${clicked}`).attr('data-family');
      const answer = $(this).attr('data-answer');

      if(clicked != last ){
        if(img === answer){
          $('#paginate').append(`<li data-id="true" class="btn btn-success list-group-iteam m-2">${clicked}</li>`);
          swal({icon: "success", text: "Barakalla. Tog'ri Topdingiz", title: "Ofarin!", button: "X"});
          $(this).addClass('text-success');
          // wait 2seconds then hide the element
          setTimeout(() => {
            $(this).parent().parent().parent().removeClass('current').addClass('d-none').next().addClass('current').removeClass('d-none');
          }, 3000);
        } else {
          $('#paginate').append(`<li data-id="false" class="btn btn-danger list-group-iteam m-2">${clicked}</li>`);
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
          },9000)
        }

      } else if(clicked == last){
        if(img === answer){
          $('#paginate').append('<li data-id="true" class="btn btn-success list-group-iteam m-2"></li>');
          $('.answer li').off('click');
        } else {
          $('#paginate').append('<li data-id="false" class="btn btn-danger list-group-iteam m-2"></li>');
          $('.answer li').off('click');
        }
        setTimeout(() =>{
          swal({icon: "success", text: "Ishtirokingiz uchun rahamat", title: "Test Tamom!", button: "X"});
        },3000);
        return;
      }
    });



    $('#refresh').click(function(){
      console.log('refresh')
      location.reload();
    })
});