window.addEventListener("DOMContentLoaded", () => {
    function modalWindow({ openSelector, closeSelector, parentSelector }) {
        let openModal = document.querySelectorAll(openSelector);
        let closeModal = document.querySelectorAll(closeSelector); //закомментировано для динамического формирования
        let parentModal = document.querySelector(parentSelector);
    
        function showModal() {
          parentModal.style.display = "block";
        }
    
        openModal.forEach((item) => {
          item.addEventListener("click", showModal);
        });
    
        function hideModal() {
          parentModal.style.display = "none";
        }
    
        closeModal.forEach((item) => {
          item.addEventListener("click", hideModal);
        });
        // showModalOne();
        // hideModalOne();
    
        parentModal.addEventListener("click", (e) => {
          if (e.target === parentModal) {
            hideModal();
          }
        });
    
        document.addEventListener("keydown", (e) => {
          if (e.code === "Escape") {
            hideModal();
          }
        });
      }
    
      modalWindow({
        openSelector: "[data-openform]",
        closeSelector: "[data-closeform]",
        parentSelector: ".modal-form",
      });
});
