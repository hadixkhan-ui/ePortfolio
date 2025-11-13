const activateTab = (tabName) => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');
  tabs.forEach((tab) => {
    const isMatch = tab.dataset.tab === tabName;
    tab.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    tab.setAttribute('tabindex', isMatch ? '0' : '-1');
    tab.classList.toggle('is-active', isMatch);
  });
  panels.forEach((panel) => {
    const isMatch = panel.dataset.tab === tabName;
    panel.classList.toggle('is-active', isMatch);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled');
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabLinks = document.querySelectorAll('.js-tab-link');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab);
    });
    tab.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateTab(tab.dataset.tab);
      }
    });
  });

  tabLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = link.dataset.tabTarget;
      if (target) {
        event.preventDefault();
        activateTab(target);
        const targetTab = document.querySelector(`[data-tab="${target}"][role="tab"]`);
        targetTab?.focus();
      }
    });
  });
});
