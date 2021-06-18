document.querySelector('#user-name').addEventListener('input', noDigits);

function noDigits() {
    let reg = /[^Р-пр-џA-Za-z\s]/g;
    if (this.value[0] == ' ') this.value = '';
    this.value = this.value.replace(reg, '');
    this.value = this.value.substr(0,40);
}