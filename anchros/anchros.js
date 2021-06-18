document.querySelectorAll('[data-anchors]').forEach(item => item.addEventListener('click', NavLinkTabIndex));

function NavLinkTabIndex (e) {
    e.preventDefault();
    if (this.dataset.anchors === '#services') {
        document.querySelector('.services__card-wrap').focus();
        window.scroll(0, 0);
    }
    if (this.dataset.anchors === '#questions') {
        document.querySelector('.accordion__trigger').focus();
        window.scroll(0, 0);
        
    }
    if (this.dataset.anchors === '#about') {
        document.querySelector('.about').setAttribute('tabindex', '0');
        document.querySelector('.about').focus();
        window.scroll(0, 0);
        document.querySelector('.about').blur();
        document.querySelector('.about').setAttribute('tabindex', '-1');
    }
    if (this.dataset.anchors === '#contacts') {
        document.querySelector('.contacts__input').focus();
        window.scroll(0, 0);
    }

    const data = this.getAttribute('data-anchors');
    const scrollTarget = document.querySelector(data);
    let topOffset = 0; // расстояние до верха экрана
    let elementPosition = scrollTarget.getBoundingClientRect().top;
    let offsetPosition = elementPosition - topOffset;
    
    window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
    });
}