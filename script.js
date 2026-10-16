// Rahmas Digital Marketing — no framework, backend, or build tools required.
'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('site-nav');
const form = document.getElementById('enquiry-form');
const serviceSelect = document.getElementById('service');

function closeMenu() {
  if (!menuButton || !navigation) return;
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const opened = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
}

// Select the appropriate service automatically when a visitor clicks its card.
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', () => {
    if (serviceSelect) serviceSelect.value = link.dataset.service;
  });
});

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const name = document.getElementById('client-name').value.trim();
    const business = document.getElementById('business-name').value.trim();
    const service = serviceSelect.value;
    const project = document.getElementById('project-message').value.trim();
    const feedback = document.getElementById('form-feedback');

    if (!name || !service || !project) {
      feedback.textContent = 'Please complete your name, service and project details.';
      return;
    }

    const message = [
      'Hello Rahmas Digital Marketing!',
      '',
      'I would like to enquire about your services.',
      `Name: ${name}`,
      ...(business ? [`Business: ${business}`] : []),
      `Service: ${service}`,
      `Project details: ${project}`
    ].join('\n');
    const url = `https://wa.me/919150579130?text=${encodeURIComponent(message)}`;
    // Do not silently send user details: WhatsApp opens with editable message.
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open your enquiry in WhatsApp';
    link.click();
    feedback.textContent = 'WhatsApp should open in a new tab. Review your message and tap Send. If it did not open, use this link:';
    feedback.append(' ', link);
  });
}

const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
