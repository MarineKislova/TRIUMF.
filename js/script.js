import catalog from "./modules/catalog";
import modalWindow from "./modules/modalwindow";
import { openModal } from "./modules/modalwindow";
import { hideModal } from "./modules/modalwindow";

window.addEventListener("DOMContentLoaded", () => {
  catalog();
  // modalWindow();
  // modalForm();

  modalWindow({
    openSelector: "[data-openform]",
    closeSelector: "[data-closeform]",
    parentSelector: ".modal-form",
  });

  modalWindow({
    openSelector: "[data-openrequestform]",
    closeSelector: "[data-closerequestform]",
    parentSelector: ".request",
  });

  modalWindow({
    openSelector: "[data-closerequestform]",
    closeSelector: "[data-closefeedbackform ]",
    parentSelector: ".modal-request",
  });

  modalWindow({
    openSelector: "[data-openrequestform]",
    closeSelector: "[data-closerequestform]",
    parentSelector: ".request",
  });
});
