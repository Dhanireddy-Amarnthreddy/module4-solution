// SpeakGoodBye.js

(function(window) {
    var byeSpeaker = {};
  
    var speakWord = "Goodbye";
    byeSpeaker.speak = function(name) {
      console.log(speakWord + "james" + name);
    };
  
    window.byeSpeaker = byeSpeaker;
  
  })(window);
  