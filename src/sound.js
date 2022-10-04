      function playSound(sound) {
        var song = document.getElementById(sound)
        song.volume = 1;
        if (song.paused) {
          song.play();
        } else {
          song.pause();
        }
      }
 