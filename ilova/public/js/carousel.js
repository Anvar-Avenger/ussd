function ishla() {
    $('#carousel').owlCarousel({
        margin: 10,
        // loop: true,
        responsive: {
            300: {
                items: 1,
                nav: false
            },
    
            800: {
                item: 2,
                nav: false
            },
    
            1000: {
                item: 3,
                nav: false
            }
        }
    });
}

$(document).ready(function() {
  ishla();
  addEventListener('click', function() {
      ishla();
  })
})

// ishla();