document.querySelectorAll('.accordion__trigger').forEach(item => item.addEventListener('click', (e) => {
	if (e.currentTarget.classList.contains('accordion__trigger--active')) {
        e.currentTarget.classList.remove('accordion__trigger--active');
        e.currentTarget.nextElementSibling.style.maxHeight = 0;
    }
    
    else {
        document.querySelectorAll('.accordion__trigger').forEach(item => {
            if (item.classList.contains('accordion__trigger--active')) {
                item.classList.remove('accordion__trigger--active');
                item.nextElementSibling.style.maxHeight = 0;
            }
        });
        e.currentTarget.classList.add('accordion__trigger--active');
        e.currentTarget.nextElementSibling.style.maxHeight = e.currentTarget.nextElementSibling.scrollHeight + 'px';
    }
}));