document.addEventListener("DOMContentLoaded", function(event) {
  
    // Get all videos
    var videos = document.getElementsByClassName("video__play-button");
    var video_fullscreen = document.getElementsByClassName("video__fullscreen-button");
    
    // Loop through all videos
    for (var i = 0; i < videos.length; i++) {
      // On click play button
      videos[i].onclick = function() {
        
        // Find video element
        video = this.nextElementSibling;
        video_wrapper = this.parentElement;
        console.log(video_wrapper);
        console.log(video);
        
        // Play video
        if (video.paused == true) {
          // Play the video
          video.play();
          video.setAttribute('data-state','play');
          video.setAttribute('data-state-reload','false');
          video_wrapper.setAttribute('data-state','play');
  
          // Update the button text to 'Pause'
          // this.innerHTML = "Pause";
          this.setAttribute('data-button-state','play');
          this.setAttribute('data-button-state-reload','false');
        } else {
          // Pause the video
          video.pause();
          video.setAttribute('data-state','pause');
          video_wrapper.setAttribute('data-state','pause');
  
          // Update the button text to 'Play'
          // this.innerHTML = "Play";
          this.setAttribute('data-button-state','pause');
        }
        
        // When video is ended
        video.onended = (event) => {
          // Pause the video
          video.setAttribute('data-state','pause');
          video.setAttribute('data-state-reload','true');
  
          // Update the button text to 'Play'
          this.setAttribute('data-button-state','pause');
          this.setAttribute('data-button-state-reload','true');
        };
        
      }
      
    }
    
    
    // Loop through all videos
    for (var i = 0; i < video_fullscreen.length; i++) {
      // On click play button
      video_fullscreen[i].onclick = function() {
        
        // Find video element
        video = this.nextElementSibling.nextElementSibling;
        
        if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen();
        }
        
      }
      
    }
  
  });
  
  