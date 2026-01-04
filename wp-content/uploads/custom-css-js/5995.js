<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 


document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll(".toggle-control");
  controls.forEach(control => {
    const text = control.closest('.elementor-widget-container').querySelector(".toggle-text");
    if (!text) return;

    const openText = control.dataset.open || "Скрыть";
    const closeText = control.dataset.close || "Читать далее";

    control.addEventListener("click", function () {
      text.classList.toggle("expanded");
      control.textContent = text.classList.contains("expanded") ? openText : closeText;
    });
  });
});





</script>
<!-- end Simple Custom CSS and JS -->
