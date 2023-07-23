const moreInfo = document.querySelector(".more");
const lessInfo = document.querySelector(".less");
const movieInfo = document.getElementById("content");
const image1 = document.querySelector(".details");




moreInfo.addEventListener("click", () => {
  movieInfo.style.height = "4.1rem";
  movieInfo.style.overflowY="scroll";
  moreInfo.style.display = "none";

  lessInfo.style.display = "block";
  lessInfo.style.cursor = "pointer";
});

lessInfo.addEventListener("click", () => {
  movieInfo.style.overflowY = "hidden";
  movieInfo.style.height = "2.4rem";
  movieInfo.scrollTop = 0;
  moreInfo.style.display = "block";
  lessInfo.style.display = "none";
});





$(document).ready(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const videoPath = decodeURIComponent(urlParams.get("videoid"));
  console.log(videoPath);

  const rowId = decodeURIComponent(urlParams.get("eachRowId"));
  const movieDetails = decodeURIComponent(urlParams.get("moviedetail"));
  const movieImg = decodeURIComponent(urlParams.get("moviimg"));
  const movieBgImg = decodeURIComponent(urlParams.get("moviebgimg"));

  const relatedMoviImg1 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG1")));
  const relatedMoviImg2 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG2")));
  const relatedMoviImg3 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG3")));
  const relatedMoviImg4 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG4")));
  const relatedMoviImg5 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG5")));
  const relatedMoviImg6 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG6")));
  const relatedMoviImg7 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG7")));
  const relatedMoviImg8 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG8")));
  const relatedMoviImg9 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG9")));
  const relatedMoviImg10 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG10")));
  const relatedMoviImg11 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG11")));
  const relatedMoviImg12 = JSON.parse(decodeURIComponent(urlParams.get("moviIMG12")));

  console.log('i am here ' + videoPath)
  console.log('also here' + movieBgImg)
  console.log('jere also' + movieImg)

  $("#naruto").attr("src", videoPath);
  $("#content").text(movieDetails);
  $(".summary-img img").attr(`src`, movieImg);
  $(".details").css("background-image", `url('${movieBgImg}')`);
  //  console.log('i ma here' + n)
  // $("#naruto").attr("src", relatedMoviImg2.imgVideo);

  $("#anime1 img").attr('src', relatedMoviImg1.img);
  $("#anime2 img").attr('src', relatedMoviImg2.img);
  $("#anime3 img").attr('src', relatedMoviImg3.img);
  $("#anime4 img").attr('src', relatedMoviImg4.img);
  $("#anime5 img").attr('src', relatedMoviImg5.img);
  $("#anime6 img").attr('src', relatedMoviImg6.img);
  $("#anime7 img").attr('src', relatedMoviImg7.img);
  $("#anime8 img").attr('src', relatedMoviImg8.img);
  $("#anime9 img").attr('src', relatedMoviImg9.img);
  $("#anime10 img").attr('src', relatedMoviImg10.img);
  $("#anime11 img").attr('src', relatedMoviImg11.img);
  $("#anime12 img").attr('src', relatedMoviImg12.img);




  $(".anime").each(function () {
    $(this).click(() => {
      const checkId = $(this).attr("id");
      // console.log(checkId + " successfully");

      $.ajax({
        url: "movieTrailer.html",
        dataType: "html",
        success: function (response) {
          // const relatedMoviImg1 = response[checkId];
          console.log(checkId === relatedMoviImg1.id1);
          if (checkId === "anime1") {
            $("#naruto").attr("src", relatedMoviImg1.imgVideo);

            $("#content").text(relatedMoviImg1.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg1.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg1.BgImg}')`);
            console.log("Video source set successfully");
            $(window).scrollTop(0);
          }

          if (checkId === "anime2") {
            $("#naruto").attr("src", relatedMoviImg2.imgVideo);
            $("#content").text(relatedMoviImg2.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg2.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg2.BgImg}')`);
            console.log("Video source set successfully");
            $(window).scrollTop(0);
          }

          if (checkId === "anime3") {
            $("#naruto").attr("src", relatedMoviImg3.imgVideo);
            $("#content").text(relatedMoviImg3.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg3.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg3.BgImg}')`);
            console.log("Video source set successfully");
            $(window).scrollTop(0);
          }

          if (checkId === "anime4") {
            $("#naruto").attr("src", relatedMoviImg4.imgVideo);
            $("#content").text(relatedMoviImg4.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg4.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg4.BgImg}')`);
            console.log("Video source set successfully");
            $(window).scrollTop(0);
          }

          if (checkId === "anime5") {
            $("#naruto").attr("src", relatedMoviImg5.imgVideo);
           
            $("#content").text(relatedMoviImg5.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg5.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg5.BgImg}')`);
            console.log("Video source set successfully");
            $(window).scrollTop(0);
          }

          if (checkId === "anime6") {
            $("#naruto").attr("src", relatedMoviImg6.imgVideo);
           
            $("#content").text(relatedMoviImg6.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg6.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg6.BgImg}')`);
            console.log("Video source set successfully");
            $(window).scrollTop(0);
          }

          if (checkId === "anime7") {
            $("#naruto").attr("src", relatedMoviImg7.imgVideo);
           
            $("#content").text(relatedMoviImg7.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg7.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg7.BgImg}')`);           
             console.log("Video source set successfully");
             $(window).scrollTop(0);
          }

          if (checkId === "anime8") {
            $("#naruto").attr("src", relatedMoviImg8.imgVideo);
           
            $("#content").text(relatedMoviImg8.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg8.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg8.BgImg}')`);     
                    //  console.log("Video source set successfully" + r);
                    $(window).scrollTop(0);
          }

          if (checkId === "anime9") {
            $("#naruto").attr("src", relatedMoviImg9.imgVideo);
           
            $("#content").text(relatedMoviImg9.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg9.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg9.BgImg}')`);       
                  // console.log("Video source set successfully" + r);
                  $(window).scrollTop(0);
          }

          if (checkId === "anime10") {
            $("#naruto").attr("src", relatedMoviImg10.imgVideo);
           
            $("#content").text(relatedMoviImg10.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg10.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg10.BgImg}')`);       
                  // console.log("Video source set successfully" + r);
                  $(window).scrollTop(0);
          }

          if (checkId === "anime11") {
            $("#naruto").attr("src", relatedMoviImg11.imgVideo);
           
            $("#content").text(relatedMoviImg11.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg11.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg11.BgImg}')`);      
                  //  console.log("Video source set successfully" + r);
                  $(window).scrollTop(0);
          }

          if (checkId === "anime12") {
            $("#naruto").attr("src", relatedMoviImg12.imgVideo);
           
            $("#content").text(relatedMoviImg12.imgDetails);
            $(".summary-img img").attr(`src`, relatedMoviImg12.imgName);
            $(".details").css("background-image", `url('${relatedMoviImg12.BgImg}')`);   
                      // console.log("Video source set successfully" + r);
                      $(window).scrollTop(0);
          }




        },
        error: function (error) {
          console.log(error);
        }
      });

      // console.log("clicked");
    })
  });





});








$(".show_Class").click(() => {
  $(".movie_trailer").css("display", "block");
  $(".details").css("display", "none");
});

$(".video_Cancel").click(() => {
  $(".details").css("display", "block");
  $(".movie_trailer").css("display", "none");
   const myvideo=$("#naruto").get(0)

   myvideo.pause();
   myvideo.currentTime = 0;

});









