function modal() {
    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

 
    // Вызов модального окна + фиксация без перемещения страницы.
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    
    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Modal ver 2.0
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    // закрытие модального окна в любой области кроме самого окна.
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Modal ver 2.0 - задача - вызов мод окна через 10-15сек + вызов мод окна в конце страницы

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.pageXOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;