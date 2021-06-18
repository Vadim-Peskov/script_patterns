//# sourceMappingURL=inputmask.js.map

// Активируем маску-----------------------------------------------

let inputTypeTel = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(inputTypeTel); 