<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('header .menu-item a[href*="#"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const link = document.querySelector(`header .menu-item a[href="#${id}"]`);
        if (entry.isIntersecting) {
          navLinks.forEach((el) => el.classList.remove("active"));
          if (link) link.classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => observer.observe(section));
});


</script>
<!-- end Simple Custom CSS and JS -->
