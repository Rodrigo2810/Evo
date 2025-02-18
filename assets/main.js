$(function() {
    var Header = $("#header"),
    Logo = $("#header__logo"),
    Nomer = $("#nomer"),
    Toggle = $("#toggle"),
    totalNav = $("#nav"),
    Nav = $("#nav1"),
    Nav2 = $("#nav2"),
    Nav3 = $("#nav3"),
    Nav4 = $("#nav4"),
    Nav5 = $("#nav5"),
    Nav6 = $("#nav6"),
    Nav7 = $("#nav7"),
    IntroH = $("#intro").innerHeight(),
    scrollOffSet = $(window).scrollTop();
    // Header fixed
    // Событие, которое отслеживает скроллит ли человек.
document.addEventListener('scroll', function () {
    if ($(window).scrollTop() > 500) {
      // если больше 1000 → добавляем класс
      $('.js-header-fixed').addClass('is-show');
    } else {
      // если меньше 1000 → удаляем класс
      $('.js-header-fixed').removeClass('is-show');
    }
  })
 
        function CheckScroll(scrollOffSet) {
            console.log(scrollOffSet);
            if (scrollOffSet >= IntroH) {
                Header.addClass("fixed");
                totalNav.addClass("nav--white");
                Nav.addClass("nav--black");
                Nav2.addClass("nav--black");
                Nav3.addClass("nav--black");
                Nav4.addClass("nav--black");
                Nav5.addClass("nav--black");
                Nav6.addClass("nav--black");
                Nav7.addClass("nav--black");
                Logo.attr("src", "assets/images/logo2.png");
                Logo.addClass("down");
                Nomer.addClass("nomer--black");
                Toggle.addClass("toggle--black");
            }
            else {
                Header.removeClass("fixed");
                totalNav.removeClass("nav--white");
                Nav.removeClass("nav--black");
                Nav2.removeClass("nav--black");
                Nav3.removeClass("nav--black");
                Nav4.removeClass("nav--black");
                Nav5.removeClass("nav--black");
                Nav6.removeClass("nav--black");
                Nav7.removeClass("nav--black");
                Logo.attr("src", "assets/images/emblema.png");
                Logo.removeClass("down");
                Nomer.removeClass("nomer--black");
                Toggle.removeClass("toggle--black");
            }
        }

    

        // Smooth scroll
        $("[data-scroll]").on("click", function(event) {
            event.preventDefault();
            var BlockId = $(this).data('scroll'),
            BlockOffSet = $(BlockId).offset().top;
            console.log(BlockOffSet);
            $("html, body").animate({
                scrollTop: BlockOffSet
        }, 700);
        });

        // Menu nav toggle
        $("#nav__toggle").on("click", function(event) {
            event.preventDefault();
            $(this).toggleClass("active");
            $("#nav").toggleClass("active");
        });

        // Collapse
        $("[data-collapse]").on("click", function(event){
            event.preventDefault();
            var $this = $(this);
            $this.toggleClass("active");
            var BlockId = $(this).data('collapse');
        });
});

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
}