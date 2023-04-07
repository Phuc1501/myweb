
/*$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
    });
}); */

$(document).ready(function(){
    $('.solution').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        Infinity: true,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: false,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1023,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 739,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            }
        }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
});

    var fuT = new Date("mar 28,2023 00:00:00").getTime()
        setInterval(function(){
            var noW = new Date().getTime()
            var D = fuT - noW
            var days = Math.floor(D/(1000*60*60*24))
            var hours = Math.floor(D/(1000*60*60))
            var minutes = Math.floor(D/(1000*60))
            var seconds = Math.floor(D/(1000))

            hours %=24
            minutes %=60
            seconds %=60

            document.getElementById("days").innerText = days
            document.getElementById("hours").innerText = hours
            document.getElementById("minutes").innerText = minutes
            document.getElementById("seconds").innerText = seconds
        },1000)

        document.querySelector('.text-address').addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth'
                });
            });    

            // Xử lý sự kiện khi người dùng bấm vào đường dẫn neo
        document.querySelector('.vocher1').addEventListener('click', function(event) {
              // Ngăn chặn hành động mặc định của đường dẫn neo
            event.preventDefault();
        
              // Lấy ID của phần tử mà người dùng muốn đến
            const targetId = this.getAttribute('href');
        
              // Tìm phần tử đó trên trang
            const targetElement = document.querySelector(targetId);
        
              // Cuộn mượt đến phần tử đó
            targetElement.scrollIntoView({
                behavior: 'smooth'
                });
            });

        document.querySelector('.feedback-customer').addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });

        document.querySelector('.user-manual').addEventListener('click', function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                });
            });

        document.querySelector('.introduce-product').addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });

        document.querySelector('.Product-parameters').addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        document.querySelector('.production').addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });

        var header = document.getElementById('header');
            var mobileMenu = document.getElementById('mobile-menu');
            var headerHeight = header.clientHeight;
            /*đóng mở menu mobile*/
            mobileMenu.onclick = function() {
                var isClosed = header.clientHeight === 50;
                if (isClosed) {
                    header.style.height = 'auto';
                } else{
                    header.style.height = null ;
                }
        }
        /*Tữ động đóng khi chọn  menu*/
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
                for(var i = 0; i < menuItems.length; i++){
                    var menuItem = menuItems[i];

                    menuItem.onclick = function(){
                        header.style.height = null ;
                    }
                }