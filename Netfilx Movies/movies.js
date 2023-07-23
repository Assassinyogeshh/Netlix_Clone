const previousBtn = document.querySelectorAll(".previous-btn");
const nextBtn = document.querySelectorAll(".next-btn");
const movingHori = document.querySelectorAll(".move-hori");
const movingCard = document.querySelectorAll(".anime");

previousBtn.forEach((eachBtn, i) => {
  const eachNextBtn = nextBtn[i];
  const eachMovieRow = movingHori[i];
  const eachMovie = movingCard[i];

  let count = 0;
  let translation = 0;
  eachNextBtn.addEventListener("click", () => {
    count++;

    translation -= 30;
    eachMovieRow.style.transform = `translateX(${translation}%)`;
    eachMovieRow.style.transitionDuration = "0.8s";

    if (count >= 2) {
      eachNextBtn.disabled = true;
    }
    eachBtn.style.visibility = 'visible';
  });

  if (count === 0) {
    eachBtn.style.visibility = 'hidden';
  }

  eachBtn.addEventListener("click", () => {
    count--;

    translation += 30;
    eachMovieRow.style.transform = `translateX(${translation}%)`;
    eachMovieRow.style.transitionDuration = "0.8s";

    if (count === 0) {
      eachBtn.style.visibility = 'hidden';
    }

    eachNextBtn.disabled = false;
  });
});




$(document).ready(function () {



  let countClick = 0;
  let transltes = 0;

  // $(".background_video").click(() => {

  //   const playingVideo = $(this).get(0); // Get the actual video element


  //   if (playingVideo.paused) {
  //     playingVideo.play();
  //   } else {
  //     playingVideo.pause();
  //   }


  // })

  $(".background_video").click(function() {
    const video = $(this).get(0); // Get the actual video element

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });




  if (countClick === 0) {
    $(".video_slide_back").css("visibility", "hidden")
  }



  $(".video_slide_forward").click(() => {


    const pauseVideoForwd = $(".background_video").get(countClick);



    pauseVideoForwd.pause();
    countClick++;

    const currentPlay = $(".background_video").get(countClick);


    transltes -= 112;


    if (countClick != 0) {
      $(".video_slide_back").css("visibility", "visible")
    }
    if (countClick === 2) {
      $(".video_slide_forward").css("visibility", "hidden")
    }

    $(".background_video").css("transitionDuration", `0.8s`);


    $(".background_video").css("transform", `translateX(${transltes}%)`);

    currentPlay.play();




  });





  $(".video_slide_back").click(() => {

    const pauseVideoBackwad = $(".background_video").get(countClick);

    pauseVideoBackwad.pause();
  
    countClick--;
    transltes += 112;


    const currentPlay = $(".background_video").get(countClick);



    if (countClick === 0) {
      $(".video_slide_back").css("visibility", "hidden")
    }

    if (countClick != 2) {
      $(".video_slide_forward").css("visibility", "visible")
    }
    $(".background_video").css("transitionDuration", `0.8s`);

    let v = $(".background_video").css("transform", `translateX(${transltes}%)`);
    console.log(v)


    currentPlay.play();



  });


  $(".anime_movie_row").each(function () {
    let eachRowJson = $(this).data("json_file");
    console.log(eachRowJson);

    $(this).find(".anime").click(function () {
      const eachMovieId = $(this).attr("id");

      $.ajax({
        url: eachRowJson,
        dataType: "json",
        success: function (response) {
          const movieJson = response.find(function (m) {
            return m.id === eachMovieId;
          });

          const encodedRowsId = encodeURIComponent(movieJson.id);
          const encodedVideo = encodeURIComponent(movieJson.video);
          const encodedMovieDetail = encodeURIComponent(movieJson.movie_details);
          const encodedImg = encodeURIComponent(movieJson.movieImage_name);
          const encodedBgImg = encodeURIComponent(movieJson.background_image);
          const encodedRltImg1 = encodeURIComponent(JSON.stringify(movieJson.anime1));
          const encodedRltImg2 = encodeURIComponent(JSON.stringify(movieJson.anime2));
          const encodedRltImg3 = encodeURIComponent(JSON.stringify(movieJson.anime3));
          const encodedRltImg4 = encodeURIComponent(JSON.stringify(movieJson.anime4));
          const encodedRltImg5 = encodeURIComponent(JSON.stringify(movieJson.anime5));
          const encodedRltImg6 = encodeURIComponent(JSON.stringify(movieJson.anime6));
          const encodedRltImg7 = encodeURIComponent(JSON.stringify(movieJson.anime7));
          const encodedRltImg8 = encodeURIComponent(JSON.stringify(movieJson.anime8));
          const encodedRltImg9 = encodeURIComponent(JSON.stringify(movieJson.anime9));
          const encodedRltImg10 = encodeURIComponent(JSON.stringify(movieJson.anime10));
          const encodedRltImg11 = encodeURIComponent(JSON.stringify(movieJson.anime11));
          const encodedRltImg12 = encodeURIComponent(JSON.stringify(movieJson.anime12));


          console.log(encodedBgImg + 'i am here')
          console.log(encodedVideo + 'also here heifek')

          const url2 = `../Movie%20Links/movieTrailer.html?videoid=${encodedVideo}&moviedetail=${encodedMovieDetail}&moviimg=${encodedImg}&moviebgimg=${encodedBgImg}&moviIMG1=${encodedRltImg1}&moviIMG2=${encodedRltImg2}&moviIMG3=${encodedRltImg3}&moviIMG4=${encodedRltImg4}&moviIMG5=${encodedRltImg5}&moviIMG6=${encodedRltImg6}&moviIMG7=${encodedRltImg7}&moviIMG8=${encodedRltImg8}&moviIMG9=${encodedRltImg9}&moviIMG10=${encodedRltImg10}&moviIMG11=${encodedRltImg11}&moviIMG12=${encodedRltImg12}&eachRowId=${encodedRowsId}`;

          // console.log("I am here: " + encodedRltImg1);
          window.location.href = url2;
        },
        error: function (error) {
          console.log("Error occurred:", error);
        }
      });
    });
  });
});





