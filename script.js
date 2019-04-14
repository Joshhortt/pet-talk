$(document).ready(function()  {
  $("button#one").click(function(){
    $("ul#cat").prepend("<li>Hello Dog, What's your name?</li>");
    $("ul#dog").prepend("<li>Hi Cat, my name is Max!</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#second").click(function(){
    $("ul#cat").prepend("<li>How are you?</li>");
    $("ul#dog").prepend("<li>I'm fine, Thanks!</li>");

    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#third").click(function(){
    $("ul#cat").prepend("<li>How old are you?</li>");
    $("ul#dog").prepend("<li>I'm Five Years old!</li>");

    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#fourth").click(function(){
    $("ul#cat").prepend("<li>Family?</li>");
    $("ul#dog").prepend("<li>I have beautiful female and two little one's!</li>");

    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#fifth").click(function(){
    $("ul#cat").prepend("<li>What do you like do?</li>");
    $("ul#dog").prepend("<li>I Love to look at the Sea from my Terrace!</li>");

    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#sixth").click(function(){
    $("ul#cat").prepend("<li>What's your favorite meal?</li>");
    $("ul#dog").prepend("<li>I Love Pedigree's Roasted Chicken!</li>");

    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#seventh").click(function(){
    $("ul#cat").prepend("<li>Thanks, and have a nice day!</li>");
    $("ul#dog").prepend("<li>Thank you, it was a pleasure!</li>");

    $("ul#cat").children("li").first().click(function(){
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function(){
      $(this).remove();
    });
  });

  $("button#eight").click(function(){
    $("ul#talk").prepend("<li>Thanks for inter-acting, and see you next time!</li>");


    $("ul#talk").click(function(){
      $(this).remove();
    });

  });


});
