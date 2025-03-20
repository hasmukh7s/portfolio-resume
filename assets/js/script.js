// sticky header
window.addEventListener('scroll', function () {
  const header = document.getElementById('sticky-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// hamburger menu
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});

// copy email
function copyEmail(event, tooltipId) {
  event.preventDefault(); // Prevent default link behavior

  // Determine which email to copy based on the clicked element
  const email =
    tooltipId === "emailTooltip"
      ? "hasmukhweb19@gmail.com"
      : "hasmukhweb19@Gmail.Com";

  const tooltip = document.getElementById(tooltipId);

  // Copy email to clipboard
  navigator.clipboard
    .writeText(email)
    .then(() => {
      // Show tooltip next to the clicked element
      tooltip.classList.add("show-tooltip");

      // Remove tooltip after 2 seconds
      setTimeout(() => {
        tooltip.classList.remove("show-tooltip");
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy email:", err);
    });
}

// resume download
// function downloadFile(event) {
//   event.preventDefault();
//   const link = document.createElement("a");
//   link.href = "assets/photos/resume/rahul_parmar_resume_designer+developer.pdf";
//   link.download = "rahul_parmar_resume_designer+developer.pdf";
//   link.click();
// }


// skills slider
$(document).ready(function () {
  $(".skills-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous loop
    speed: 2000, // Adjust speed for smooth scrolling
    cssEase: "linear", // Smooth animation
    infinite: true,
    variableWidth: false, // Ensures equal width for all images
    arrows: false, // Remove arrows
    dots: false, // Remove dots
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200, // For tablets
        settings: {
          slidesToShow: 6,
        },
      },
    ],
  });
});

// testimonial slider
$(document).ready(function () {
  $(".testimonial-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "25%",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 1,
      //     centerPadding: "0",
      //   },
      // },
    ],
  });
});


// text animation
gsap.from(".word-container", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.1, // Har word 0.1s delay se appear hoga
  ease: "power2.out"
});


