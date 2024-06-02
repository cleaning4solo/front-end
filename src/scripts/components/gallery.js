function galleryIsotope(){
    let gallerynIsotope = document.querySelector(".gallery-isotope");

  if (gallerynIsotope) {
    let galleryFilter = gallerynIsotope.getAttribute("data-gallery-filter") ? gallerynIsotope.getAttribute("data-gallery-filter") : "*";
    let galleryLayout = gallerynIsotope.getAttribute("data-gallery-layout") ? gallerynIsotope.getAttribute("data-gallery-layout") : "masonry";
    let gallerySort = gallerynIsotope.getAttribute("data-gallery-sort") ? gallerynIsotope.getAttribute("data-gallery-sort") : "original-order";

    window.addEventListener("load", () => {
      let galleryIsotope = new Isotope(document.querySelector(".gallery-container"), {
        itemSelector: ".gallery-item",
        layoutMode: galleryLayout,
        filter: galleryFilter,
        sortBy: gallerySort,
      });

      let menuFilters = document.querySelectorAll(".gallery-isotope .gallery-flters li");
      menuFilters.forEach(function (el) {
        el.addEventListener(
          "click",
          function () {
            document.querySelector(".gallery-isotope .gallery-flters .filter-active").classList.remove("filter-active");
            this.classList.add("filter-active");
            galleryIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aos_init === "function") {
              aos_init();
            }
          },
          false
        );
      });
    });
  }
}

export { galleryIsotope };
