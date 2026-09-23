export function initNewsletter() {
  const form = document.querySelector('#newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button');
    const input = form.querySelector('input');

    // TODO: trocar por chamada real ao provedor de e-mail (Mailchimp, Resend, etc.)
    console.log('Inscrição de newsletter:', input.value);

    button.textContent = 'Inscrito ✓';
    button.disabled = true;
    input.disabled = true;
  });
}
