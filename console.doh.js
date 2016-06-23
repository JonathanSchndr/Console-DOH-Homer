/**
 *  Console.doh. A better way to log!
 *    - Logs a homer, saying your log... Yep!
 *
 *  MIT licensed
 *  Copyright (C) 2016 Tim Holman, http://tholman.com
 *
 *  Forked by:
 *  Jonathan Schneider, http://jonathanschndr.de
 */

(function dothething() {

  if( !window.console ) {
    // Well... nothing really... let it be!
    return;
  }

  window.console.doh = function() {

    var i,
        css = "color: yellow";

    // This looks like a homer, right?
    // Taken from here - http://chris.com/ascii/index.php?art=cartoons/simpsons

var homer = [
            "%c    _____     %c",
            "%c   /     \\    %c",
            "%c \\/\\/     |  %c",
            "%c  |  (o)(o)    %c",
            "%c  C   .---_)   %c",
            "%c   | |.___|    %c",
            "%c   |  \\__/    %c",
            "%c   /_____\\    %c",
            "%c  /_____/ \\   %c"
            ];

    // Gets args as a string
    var args = Array.prototype.slice.call(arguments);
    var stringOfArgs = args.join(' ');

    // Add the bubble if there is something to log!
    if( stringOfArgs.length > 0 ) {
      homer[0] = homer[0] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
      homer[1] = homer[1] + "-(   " + stringOfArgs + "   )";
      homer[2] = homer[2] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
    }

    // Log the homer!
    for( i = 0; i < homer.length; i++ ) {
      console.log(homer[i], css, "");
    }
  };
})();
