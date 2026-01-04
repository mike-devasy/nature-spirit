/* Добавьте сюда свой код JavaScript.
Если вы используете библиотеку jQuery, то не забудьте обернуть ваш код внутри jQuery.ready() следующим образом:
jQuery(document).ready(function( $ ){
    // Ваш код здесь
});
--
Если вы хотите связать файл JavaScript, который находится на другом сервере (подобно
<script src="https://example.com/your-js-file.js"></script>), то, пожалуйста, используйте
страницу "Добавить HTML код", так как это HTML код, который ссылается на JavaScript файл.
Конец комментария */ 
/*(function(){
  function initToggle() {
    const controls = document.querySelectorAll(".toggle-control");
    if (controls.length === 0) {
      setTimeout(initToggle, 300); // пробуем снова через 300 мс
      return;
    }
    controls.forEach(control => {
      const parent = control.closest('.elementor-widget-container');
      if (!parent) return;
      const paragraphs = Array.from(parent.querySelectorAll("p:not(.toggle-control)"));
      if (!paragraphs.length) return;
      const wrapper = document.createElement('div');
      wrapper.className = 'toggle-text';
      paragraphs.forEach(p => wrapper.appendChild(p));
      parent.insertBefore(wrapper, control);
      control.addEventListener("click", function () {
        wrapper.classList.toggle("expanded");
        control.textContent = wrapper.classList.contains("expanded") ? "Close" : "Read more";
      });
    });
  }
  document.addEventListener("DOMContentLoaded", initToggle);
})();*/

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






