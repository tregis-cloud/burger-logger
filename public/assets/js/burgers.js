$(function() {
    $(".eat-burger").on("click", function(event) {
      let id = $(this).data("id");
      let newDevoured = $(this).data("newdevoured");
  
     let newDevouredState = {
       devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevouredState 
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
     let newBurger = {
        name: $("#bu").val().trim(),
        devoured: $("[name=devoured]:checked").val()
      };
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

   
   });
 
