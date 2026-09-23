export function initReleasesScroll() {
    const row = document.querySelector('.releases-row');
    if (!row) return;

    row.addEventListener('wheel', (event) => {
        //so intercepta quando o gesto é majoritoriamente vertical
        // (mouse/trackpad comuns), convertendo em scroll horizontal suave
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            event.preventDefault();
            row.scrollBy({ left: event.deltaY * 2, behavior: 'smooth' });
        }
    }, { passive: false });
}

export function initReleasesHighlight() {
    const row = document.querySelector('.releases-row');
    const cards = document.querySelectorAll('.release-card');
    if (!row || !cards.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('is-active', entry.isIntersecting);
            });
        },
        {
           root: row,
           threshold: 0.65 // card precisa estar 65% visivel pra virar "ativo" 
        }
    );

    cards.forEach((card) => observer.observe(card));
}