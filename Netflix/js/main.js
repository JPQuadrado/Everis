//SETUP - ele que chama e faz tudo funcionar//

$('.owl-carousel').owlCarousel({
    loop:true, //deixa navegar de forma infinita.
    margin:10, // margem entre os quadros, entre os posters
    nav:false, // botões de navegação.
    responsive:{  //adaptação dos elementos ao tamanho da tela (do device até)
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})