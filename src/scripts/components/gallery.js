function galleryIsotope() {
  const gallerynIsotope = document.querySelector('.gallery-isotope');

  if (gallerynIsotope) {
    const galleryFilter = gallerynIsotope.getAttribute('data-gallery-filter') ? gallerynIsotope.getAttribute('data-gallery-filter') : '*';
    const galleryLayout = gallerynIsotope.getAttribute('data-gallery-layout') ? gallerynIsotope.getAttribute('data-gallery-layout') : 'masonry';
    const gallerySort = gallerynIsotope.getAttribute('data-gallery-sort') ? gallerynIsotope.getAttribute('data-gallery-sort') : 'original-order';

    window.addEventListener('load', () => {
      const galleryIsotope = new Isotope(document.querySelector('.gallery-container'), {
        itemSelector: '.gallery-item',
        layoutMode: galleryLayout,
        filter: galleryFilter,
        sortBy: gallerySort,
      });

      const menuFilters = document.querySelectorAll('.gallery-isotope .gallery-flters li');
      menuFilters.forEach((el) => {
        el.addEventListener(
          'click',
          function () {
            document.querySelector('.gallery-isotope .gallery-flters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            galleryIsotope.arrange({
              filter: this.getAttribute('data-filter'),
            });
            if (typeof aos_init === 'function') {
              aos_init();
            }
          },
          false,
        );
      });
    });
  }
}

export { galleryIsotope };
