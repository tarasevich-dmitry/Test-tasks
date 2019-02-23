/*Write an algorithm that send through ajax each element from the following array. Note: Each request must
be made once the previous has finished.*/

var myArr=[‘This’, ‘is’, ‘a’, ‘fake, ‘array’];

$.ajax({
            type: "POST",
            url: "submit",
            data:JSON.stringify(myArr),
            async :false,
            success: function(html){
              alert( "Element submitted");
                }
          });
