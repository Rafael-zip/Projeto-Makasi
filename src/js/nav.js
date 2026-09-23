  export function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
      links.classlist.toggle('nav-open');
    });


  // Fecha o menu ao clicar em um link (so tem efeito no mobile,
  // ja que a classe nav-open so e estilizada dentro da media query)
  links.querySelectorAll('a').forEach((link)  =>{
    link.addEventListener('click', () => {
      links.classlist.remove('nav-open');
    });
  });

  }


