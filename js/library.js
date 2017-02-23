function loadContent(target, loader, owlCarouselContent) {

  target.load(loader, function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success")
    //==============OWL CAROUSEL
      $('.owl-carousel').owlCarousel(owlCarouselContent);


    if (statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);


  });
}