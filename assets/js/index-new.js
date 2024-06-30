gsap.registerPlugin(ScrollTrigger);

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
//const container = select('.site-main');

initPageTransitions();

// Animation - First Page Load
function initLoader() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  tl.set("h1 .outer-span span", {
		yPercent: 250,
    rotate: 10
  });

  tl.set(".once-in", {
		y: "20vh",
    opacity: 0
  });

  tl.set(".side-gh .inner .inner-wrap", {
		top: "-20vh"
  });

  tl.set("html", { 
		cursor: "wait"
	});

  tl.set(".gh-text .span-inner", {
    rotation: 0,
    yPercent: 150,
    opacity: 1
  });

  tl.to(".gh-text .span-inner", {
		duration: 1,
    rotation: 0,
    yPercent: 0,
		ease: "Expo.easeOut",
    delay: .4,
    stagger: .05
  });

  tl.to(".gh-text .span-inner", {
		duration: 1,
    rotation: 0,
    yPercent: -200,
		ease: "Expo.easeIn",
    stagger: -.05
  },"=-.1");

	tl.to(".loading-screen", {
		duration: 1,
		top: "-200%",
		ease: "Power2.easeOut"
  },"=-.4");

  tl.set("html", { 
		cursor: "auto",
	},"=-.2");

  tl.to(".once-in", {
    duration: 1.6,
    y: "0vh",
    opacity: 1,
    ease: "Expo.easeOut",
    stagger: -.075,
    onStart: staggerSpanH1
  },"=-1.2");
  
  function staggerSpanH1() {
    gsap.to("h1 .outer-span span", {
      duration: 1.6,
      yPercent: 0,
      rotate: 0,
      ease: "Expo.easeOut",
      stagger: -.075,
      delay: .075
    });
  }

  tl.to(".side-gh .inner .inner-wrap", {
		duration: 1.6,
		top: 0,
		ease: "Expo.easeOut",
  },"=-1.6");

  if(document.querySelector("#awwwards")) { 
    tl.to("#awwwards", {
      duration: 1.6,
      xPercent: -100,
      ease: "Expo.easeInOut",
    },"=-2");
  }

}

// Animation - First Page Load
function initLoaderShort() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  tl.set("h1 .outer-span span", {
		yPercent: 250,
    rotate: 10
  });

  tl.set(".once-in", {
		y: "20vh",
    opacity: 0
  });

  tl.set(".side-gh .inner .inner-wrap", {
		top: "-20vh"
  });

  tl.set("html", { 
		cursor: "wait"
	});

  tl.set(".gh-logo .gh-logo-wrapper", {
    rotation: 10,
  });

  tl.to(".gh-logo .gh-logo-wrapper", {
		duration: 1.4,
    rotation: 0,
		ease: "Power4.easeOut",
    delay: .4
  });

  tl.to(".gh-logo .gh-logo-wrapper svg", {
		duration: 1.4,
		y: 0,
    rotation: 0,
		ease: "Power4.easeOut"
	},"=-1.4");

  tl.to(".gh-logo .gh-logo-wrapper svg", {
		duration: .6,
		y: -200,
    rotation: -10,
		ease: "Power4.easeIn",
	},"=-.4");

	tl.to(".loading-screen", {
		duration: .6,
		top: "-200%",
		ease: "Power2.easeOut"
  });

  tl.set("html", { 
		cursor: "auto",
	},"=-.2");

  tl.to(".once-in", {
    duration: 1.6,
    y: "0vh",
    opacity: 1,
    ease: "Power4.easeOut",
    stagger: -.075,
    onStart: staggerSpanH1
  },"=-.8");
  
  function staggerSpanH1() {
    gsap.to("h1 .outer-span span", {
      duration: 1.6,
      yPercent: 0,
      rotate: 0,
      ease: "Power4.easeOut",
      stagger: -.075,
      delay: .075
    });
  }

  tl.to(".side-gh .inner .inner-wrap", {
		duration: 1.6,
		top: 0,
		ease: "Power4.easeOut",
  },"=-1.6");

}

// Animation - Page transition In
function pageTransitionIn() {
	var tl = gsap.timeline();

  tl.call(function() {
    scroll.stop();
  });

  tl.set(".loading-screen", { 
		top: "200%" 
	});	

  tl.set("html", { 
		cursor: "wait"
	});

	tl.to(".loading-screen", {
		duration: .8,
		top: "0%",
		ease: "Power2.easeIn"
	});

  tl.to(".side-gh .inner .inner-wrap", {
		duration: .8,
		top: "20vh",
		ease: "Power2.easeIn",
  },"=-.8");
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-200%",
		ease: "Power2.easeOut",
    delay: .2
	});

  tl.set("html", { 
		cursor: "auto"
	},"=-0.2");

  tl.set(".loading-screen", { 
		top: "200%" 
	});	
  
}


// Animation - Page transition Out
function pageTransitionOut() {
	var tl = gsap.timeline();
  
  tl.call(function() {
    scroll.start();
  });

  tl.set("h1 .outer-span span", {
		yPercent: 250,
    rotate: 15
  });

  tl.set(".once-in", {
		y: "20vh",
    opacity: 0
  });

  tl.set(".side-gh .inner .inner-wrap", {
		top: "-20vh"
  });

  tl.to(".side-gh .inner .inner-wrap", {
		duration: 1.6,
		top: 0,
		ease: "Expo.easeOut",
  });

  tl.to(".once-in", {
    duration: 1.6,
    y: "0vh",
    opacity: 1,
    ease: "Expo.easeOut",
    stagger: -.075,
    onStart: staggerSpanH1
  },"=-1.6");
  
  function staggerSpanH1() {
    gsap.to("h1 .outer-span span", {
      duration: 1.6,
      yPercent: 0,
      rotate: 0,
      ease: "Expo.easeOut",
      stagger: -.075,
      delay: .075
    });
  }

}

function initPageTransitions() {

  //let scroll;

  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });

  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
    // reinit locomotive scroll
    scroll.init();
    scroll.stop();
  });

  // scroll to the top of the page
  barba.hooks.enter(() => {
    scroll.destroy();
  });

  // scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
  });


  barba.init({
    sync: true,
    debug: false,
    timeout:7000,
    transitions: [{
      name: 'default',
      once(data) {
        // do something once on the initial page load
        initSmoothScroll(data.next.container);
        initScript();
        initLoader();
      },
      async leave(data) {
        // animate loading screen in
        pageTransitionIn(data.current);
        await delay(795);
        data.current.container.remove();
      },
      async enter(data) {
        // animate loading screen away
        pageTransitionOut(data.next);
      },
      async beforeEnter(data) {
        ScrollTrigger.getAll().forEach(t => t.kill());
        scroll.destroy();
        initSmoothScroll(data.next.container);
        initScript(); 
      },
    }]
  });

  function initSmoothScroll(container) {

    scroll = new LocomotiveScroll({
      el: container.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.075,
    });

    window.onresize = scroll.update();

    scroll.on("scroll", () => ScrollTrigger.update());

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: container.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({
      scroller: document.querySelector('[data-scroll-container]'),
    });

    /**
     * Remove Old Locomotive Scrollbar
     */

    const scrollbar = selectAll('.c-scrollbar');

    if(scrollbar.length > 1) {
      scrollbar[0].remove();
    }

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener('refresh', () => scroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }  
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


/**
 * Fire all scripts on page load
 */
function initScript() {
  select('body').classList.remove('is-loading');
  initWindowInnerheight();
  initCheckTouchDevice();
  initBtnMenuOpenClose();
  initLazyLoad();
  initPlayVideoInview();
  initScrolltriggerCheckScroll();
  initHomeHeaderImages();
  initTimeZone();
  initStickyCursorWithDelay();
  initDataBackground();
  initMasonaryGrid();
  initScrollLogos();
  initContactForm();
  initCycleImages();
  initComingSoon();
  initVimeoPlayPauze();
  initScrollToLoco();
  initScrolltriggerAnimations();
}

/**
* Window Inner Height Check
*/
function initWindowInnerheight() {
    
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  $(document).ready(function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

}

/**
* Check touch device
*/
function initCheckTouchDevice() {
    
  function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
  };
  
  if(isTouchScreendevice()){
    $('main').addClass('touch');
    $('main').removeClass('no-touch');
  } else {
    $('main').removeClass('touch');
    $('main').addClass('no-touch');
  }
  $(window).resize(function() {
    if(isTouchScreendevice()){
       $('main').addClass('touch');
       $('main').removeClass('no-touch');
    } else {
       $('main').removeClass('touch');
       $('main').addClass('no-touch');
    }
  });

}


/**
* Hamburger Nav Open/Close
*/
function initBtnMenuOpenClose() {
    
  // Open/close navigation when clicked .btn-hamburger

  $(document).ready(function(){
    $(".btn-menu").click(function(){
      if ($(".btn-menu").hasClass('active')) {
          $(".btn-menu").removeClass('active');
          $("main").removeClass('nav-active');
          scroll.start();
      } else {
          $(".btn-menu").addClass('active');
          $("main").addClass('nav-active');
          scroll.stop();
      }
    });
    $('.fixed-nav-back').click(function(){
      $(".btn-menu").removeClass('active');
      $("main").removeClass('nav-active');
      scroll.start();
    });
  });
  $(document).keydown(function(e){
    if(e.keyCode == 27) {
      if ($('main').hasClass('nav-active')) {
          $(".btn-menu").removeClass('active');
          $("main").removeClass('nav-active');
          scroll.start();
      } 
    }
  });

}

/**
* Lazy Load
*/
function initLazyLoad() {
    // https://github.com/locomotivemtl/locomotive-scroll/issues/225
    // https://github.com/verlok/vanilla-lazyload
    var lazyLoadInstance = new LazyLoad({ 
      elements_selector: ".lazy",
    });
}

/**
* Play Video Inview
*/
function initPlayVideoInview() {

  let allVideoDivs = gsap.utils.toArray('.playpauze');

  allVideoDivs.forEach((videoDiv, i) => {

    let videoElem = videoDiv.querySelector('video')

    ScrollTrigger.create({
      scroller: document.querySelector('[data-scroll-container]'),
      trigger: videoElem,
      start: '0% 120%',
      end: '100% -20%',
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });

  });
}

/**
* Scrolltrigger Scroll Check
*/
function initScrolltriggerCheckScroll() {
    
  ScrollTrigger.create({
    start: 'top -20%',
    onUpdate: self => {
      $("main").addClass('scrolled');
    },
    onLeaveBack: () => {
      $("main").removeClass('scrolled');
    },
  });
}

/**
* Add class to sister element (header images home)
*/
function initHomeHeaderImages() {

  let allImageWrap = document.querySelectorAll('.header-images-wrap');

  allImageWrap.forEach((imageWrap) => {
  
    var images = imageWrap.querySelectorAll('li');
    let prev;
    let current = 0;
    let imageCycle;
  
  
    function cycleThroughImages() {
      prev = current;
      current++;
      if (current > images.length - 1) current = 0;
      images[current].classList.add("active");
      images[current].classList.add("active-z");
      images[prev].classList.remove("active-z");
      setTimeout(function(){
        images[prev].classList.remove("active");
      },1000); 
    }
    imageCycle = setInterval(cycleThroughImages, 4000);
  });
}

/**
* Time Zone
*/
function initTimeZone() {
    
  // Time zone
  // https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript/67149791#67149791
  // https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone
  // https://stackoverflow.com/questions/63572780/how-to-update-intl-datetimeformat-with-new-date

  var timeSpanHeader = document.querySelector("#timeSpanHeader");
  var timeSpanFooter = document.querySelector("#timeSpanFooter");

  const optionsTime = {
    timeZone: 'Europe/Amsterdam',
    timeZoneName: 'short',
    // year: 'numeric',
    // month: 'numeric',
    // day: 'numeric',
    hour: '2-digit',
    hour24: 'true',
    minute: 'numeric',
    second: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat([], optionsTime);
  updateTime();
  setInterval(updateTime, 1000);


  function updateTime() {
      const dateTime = new Date();
      const formattedDateTime = formatter.format(dateTime);
      if (timeSpanHeader) {
        timeSpanHeader.textContent = formattedDateTime;
      }
      if (timeSpanFooter) {
        timeSpanFooter.textContent = formattedDateTime;
      }
  }

}

/**
* Sticky Cursor with Delay
*/
function initStickyCursorWithDelay() {
    
  // Sticky Cursor with delay
  // https://greensock.com/forums/topic/21161-animated-mouse-cursor/

  var posXBtn = 0
  var posYBtn = 0
  var posXImage = 0
  var posYImage = 0
  var mouseX = 0
  var mouseY = 0

  if(document.querySelector(".custom-cursor, .mouse-pos-list-image")) {
  gsap.to({}, 0.0083333333, {
    repeat: -1,
    onRepeat: function() {

      if(document.querySelector(".custom-cursor")) {
        posXBtn += (mouseX - posXBtn) / 6;
        posYBtn += (mouseY - posYBtn) / 6;
        gsap.set($(".custom-cursor"), {
          css: {
          left: posXBtn,
          top: posYBtn
          }
        });
        gsap.set($(".custom-cursor .rotate-cursor"), {
          css: {
          rotate: (mouseX - posXBtn) / 3
          }
        });
      }
      if(document.querySelector(".mouse-pos-list-image")) {
        posXImage += ((mouseX / 4) - posXImage) / 6;
        posYImage += (mouseY - posYImage) / 6;
        gsap.set($(".mouse-pos-list-image"), {
          css: {
          left: posXImage,
          top: posYImage
          }
        });
      }
    }
  });
  }

  $(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Mouse Init
  $('main').on('mousemove', function() {
    if ($(".custom-cursor").hasClass('cursor-init')) {
    } else {
    $(".custom-cursor").addClass('cursor-init');
    }
  });

  // Link Hover
  $('a').on('mouseenter', function() {
    $('.custom-cursor').addClass('cursor-hover');
  });
  $('a').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-hover');
  });

  // Pressed
  $('main').on('mousedown', function() {
    $(".custom-cursor").addClass('pressed');
  });
  $('main').on('mouseup', function() {
    $(".custom-cursor").removeClass('pressed');
  });

  // Work Case Hover
  $('a.single-work').on('mouseenter', function() {
    $('.custom-cursor').addClass('cursor-work');
  });
  $('a.single-work').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-work');
  });

  // Archive Preview Hover
  $('.lab-preview').on('mouseenter', function() {
    $('.custom-cursor').addClass('cursor-lab');
  });
  $('.lab-preview').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-lab');
  });

  // // Jobs Preview Hover
  // $('.single-job').on('mouseenter', function() {
  //   $('.custom-cursor').addClass('cursor-job');
  // });
  // $('.single-job').on('mouseleave', function() {
  //   $('.custom-cursor').removeClass('cursor-job');
  // });
  // $('.single-job .btn-click').on('mouseenter', function() {
  //   $('.custom-cursor').addClass('cursor-job-tiny');
  // });
  // $('.single-job .btn-click').on('mouseleave', function() {
  //   $('.custom-cursor').removeClass('cursor-job-tiny');
  // });

  // Home Header Rotate
  $('.home-header').on('mousemove', function() {
    if ($(".custom-cursor").hasClass('cursor-tiles')) {
    } else {
    $(".custom-cursor").addClass('cursor-tiles');
    }
  });
  $('.home-header').on('mouseleave', function() {
    $('.custom-cursor').removeClass('cursor-tiles');
  });

  // Service + Collective Image
  $('.mouse-pos-list-image-hover').on('mouseenter', function() {
    $('.mouse-pos-list-image').addClass('active');
  });
  $('.mouse-pos-list-image-hover').on('mouseleave', function() {
    $('.mouse-pos-list-image').removeClass('active');
  });

  $('.mouse-pos-list-image-ul li').on('mouseenter mouseleave', function() {
    var index =  $(this).index();
    $(".mouse-pos-list-image-ul, .mouse-pos-list-image").each(function() {
      $("li",this).eq(index).siblings().removeClass("active");
      $("li",this).eq(index).addClass("active");
    });
  });

  $('.collective-ul li').on('mouseenter', function() {
    $('.fixed-cursor-wrap').addClass('inactive');
  });
  $('.collective-ul li').on('mouseleave', function() {
    $('.fixed-cursor-wrap').removeClass('inactive');
  });

  // Single Vimeo
  $('.video-hover').on('mouseenter', function() {
    $(".custom-cursor").addClass('cursor-video');
  });
  $('.video-hover').on('mouseleave', function() {
    $(".custom-cursor").removeClass('cursor-video');
  });
  $('.video-hover .vimeo-control-play').on('mouseenter', function() {
    $(".custom-cursor").addClass('cursor-video-play');
    $(".custom-cursor").removeClass('cursor-video-pause');
  });
  $('.video-hover .vimeo-control-pause').on('mouseenter', function() {
    $(".custom-cursor").addClass('cursor-video-pause');
    $(".custom-cursor").removeClass('cursor-video-play');
  });
  
}

/**
* Dark/Light check data-background-color
*/
// https://codepen.io/akapowl/pen/vYyaYrN/9c4d4d9fbb9a34547789139a21216509

function initDataBackground() {

  const sectionsDark = gsap.utils.toArray('.theme-dark');
  sectionsDark.forEach(sectionDark => {
    
    ScrollTrigger.create({
      trigger: sectionDark,
      start: '20% 20%',
      end: '100% 20%',
      onEnter: () => functionAddDark(),
      onEnterBack: () => functionAddDark(),
      markers: false,
    });
    function functionAddDark() {
      if ($("main").hasClass('theme-nav-dark')) {
      } else {
        $("main").removeClass('theme-nav-light');
        $("main").addClass('theme-nav-dark');
      }
    };
  });

  const sectionsLight = gsap.utils.toArray('.theme-light');
  sectionsLight.forEach(sectionLight => {
    
    ScrollTrigger.create({
      trigger: sectionLight,
      start: '0% 20%',
      end: '100% 0%',
      onEnter: () => functionAddLight(),
      onEnterBack: () => functionAddLight(),
      markers: false,
    });
    function functionAddLight() {
      if ($("main").hasClass('theme-nav-light')) {
      } else {
      $("main").removeClass('theme-nav-dark');
      $("main").addClass('theme-nav-light');
      }
    };
  });

}

/**
* Masonary Grid
*/

function initMasonaryGrid() {

// Masonry grid

  $('.archive-grid').masonry({
     itemSelector: '.archive-grid-item',
     columnWidth: 0
  });
}

/**
* Scrolltrigger Scroll Logos
*/
function initScrollLogos() {
  // Scrolling Letters Both Direction
  // https://codepen.io/GreenSock/pen/rNjvgjo
  // Fixed example with resizing
  // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

  let direction = 1; // 1 = forward, -1 = backward scroll

  const roll1 = roll(".marquee .marquee-inner-wrap", {duration: 18}),
        roll2 = roll(".rollingText02", {duration: 10}, true),
        scroll = ScrollTrigger.create({
          trigger: document.querySelector('[data-scroll-container]'),
          onUpdate(self) {
            if (self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
            }
          }
        });

  // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
  function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() { 
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
          }), 
          elements = gsap.utils.toArray(targets),
          clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // record the current time
      tl.totalTime(0); // rewind and clear out the timeline
      positionClones(); // reposition
      tl.totalTime(time); // jump back to the proper time
    });
    return tl;
  }

}

/**
* Contact Form
*/
function initContactForm() {
    
  $('.field').on('input', function() {
    $(this).parent().toggleClass('not-empty', this.value.trim().length > 0);
  });

  $(function () {
      $('.field').focusout(function () {
          var text_val = $(this).val();
          $(this).parent().toggleClass('not-empty', text_val !== "");
      }).focusout();
  });

}


/**
* Cycle Images
*/
function initCycleImages() {
// Source: https://codepen.io/Nysh/pen/WNOXWXL


let allImageWrap = document.querySelectorAll('.mouse-pos-list-image-inner');

allImageWrap.forEach((imageWrap) => {

  var images = imageWrap.querySelectorAll('.overlay-image-inner');
  let prev;
  let current = 0;
  let imageCycle;


  $('.services-ul li').on('mouseenter', function() {
    if ($(this).hasClass("active")) {
      imageCycle = setInterval(cycleThroughImages, 500);
    }
  });

  $('.services-ul li').on('mouseleave', function() {
    clearInterval(imageCycle);
      resetCycle();
  });

  function resetCycle() {
    prev = 0;
    current = 0;
    images.forEach(el => el.style.opacity = 0);
    images[current].style.opacity = 1;
    // images.forEach(el => el.classList.remove("active-image"));
    // images[current].classList.add("active-image");
  }

  function cycleThroughImages() {
    prev = current;
    current++;
    if (current > images.length - 1) current = 0;
    images[prev].style.opacity = 0;
    images[current].style.opacity = 1;
    // images[prev].classList.remove("active-image");
    // images[current].classList.add("active-image");
  }

});

}

/**
* Coming Soon
*/
function initComingSoon() {
    

// https://codepen.io/lelamanolio/pen/ZEYRJJJ


let marquee = document.querySelectorAll('.single-coming-soon');

  marquee.forEach(el => {
    let rate = 50;
    let distance = el.clientWidth;
    let style = window.getComputedStyle(el);
    let marginRight = parseInt(style.marginRight) || 0;
    let totalDistance = distance + marginRight;
    let time = totalDistance / rate;
    let container = el.parentElement;

    gsap.to(container, time, {
      repeat: -1,
      x: '-'+totalDistance,
      ease: Linear.easeNone,
    });

  });

}

/**
* Vimeo Video Play/Pauze
*/
function initVimeoPlayPauze() {

  // Full controls
  // https://codepen.io/simpson77/pen/YXowmy
  
  $('.single-vimeo-target').each(function(index){

    var playerID = $(this);

    var videoIndexID = 'vimeo-control-' + index;
    $(this).attr('id', videoIndexID);

    var iframe = $(this).attr('id')
    var player = new Vimeo.Player(iframe);

    player.setColor('#FF0033');
    player.setVolume(1);

    // Loaded
    player.on('play', function() {
      playerID.addClass('vimeo-status-loaded');
    });

    // Play
    playerID.find(".vimeo-control-play").click(function(){
      playerID.addClass('vimeo-status-active');
      playerID.addClass('vimeo-status-play');
      player.play();
    });

    // Pause
    playerID.find(".vimeo-control-pause").click(function(){
      playerID.removeClass('vimeo-status-play');
      player.pause();
    });

    // Mute
    playerID.find(".vimeo-control-mute").click(function(){
      if (playerID.hasClass('vimeo-status-muted')) {
        player.setVolume(1);
        playerID.removeClass('vimeo-status-muted');
      } else {
        player.setVolume(0);
        playerID.addClass('vimeo-status-muted');
      }
    });

    // Convert number into seconds & hrs
    // https://stackoverflow.com/questions/11792726/turn-seconds-into-hms-format-using-jquery
    function secondsTimeSpanToHMS(s) {
      var h = Math.floor(s / 3600); //Get whole hours
      s -= h * 3600;
      var m = Math.floor(s / 60); //Get remaining minutes
      s -= m * 60;
      return (m) + ":" + (s < 10 ? '0' + s : s); //zero padding on minutes and seconds
    }

    // Progress Time
    var vimeoStatus = $('.time');
    player.on('timeupdate', function(data) {
      vimeoStatus.text(secondsTimeSpanToHMS(Math.trunc(data.seconds)));
    });

    // Duration

    var vimeoDuration = $('.duration');
    player.getDuration().then(function(duration) {
      vimeoDuration.text(secondsTimeSpanToHMS(duration));
    }).catch(function(error) {
        // an error occurred
    });

    // Ended
    var onEnd = function() {
      playerID.removeClass('vimeo-status-active');
      playerID.removeClass('vimeo-status-play');
      player.unload();
    };
    player.on('ended', onEnd);
      
  });
}

/**
 * ScrollTo Anchor Links
 */
 function initScrollToLoco() {
	$("[data-target]").click(function() {
		let target = $(this).data('target');
		scroll.scrollTo(target,{
			'duration': 1200,
			'easing':[0.7, 0, 0.1, 1],
			'disableLerp': false
		});
	});
}

/**
* Scrolltrigger Animations Desktop + Mobile
*/
function initScrolltriggerAnimations() {
    
  // Disable GSAP on Mobile
  // Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
  ScrollTrigger.matchMedia({
    
    // Desktop Only Scrolltrigger 
    "(min-width: 1025px)": function() {

      if(document.querySelector(".header-images-wrap")) {
        // Scrolltrigger Animation : Example
        $(".header-images-wrap").each(function (index) {
          let triggerElement = $(this);
          let targetElement = $(this);
        
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              start: "100% 100%",
              end: "150% 0%",
              scrub: 0
            }
          });
          tl.to(targetElement, {
            opacity: 0,
            ease: "Power3.easeOut"
          });
        });
      }
    
    }, // End Desktop Only Scrolltrigger
  
    // Mobile Only Scrolltrigger
    "(max-width: 1024px)": function() {

      if(document.querySelector(".example")) {
        // Scrolltrigger Animation : Example
        $(".example").each(function (index) {
          let triggerElement = $(this);
          let targetElement = $(".example");
        
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              start: "0% 100%",
              end: "100% 0%",
              scrub: 0
            }
          });
          tl.to(targetElement, {
            rotate: 90,
            ease: "none"
          });
        });
      }
    } // End Mobile Only Scrolltrigger
  

  }); // End GSAP Matchmedia

}