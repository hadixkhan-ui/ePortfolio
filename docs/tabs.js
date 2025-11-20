const activateTab = (tabName, shouldUpdateHash = false) => {
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

  if (shouldUpdateHash) {
    const panel = document.querySelector(`[data-tab="${tabName}"][role="tabpanel"]`);
    if (panel?.id) {
      history.replaceState(null, '', `#${panel.id}`);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-enabled');
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabLinks = document.querySelectorAll('.js-tab-link');
  const hashTarget = window.location.hash.replace('#', '');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activateTab(tab.dataset.tab, true);
    });
    tab.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activateTab(tab.dataset.tab, true);
      }
    });
  });

  tabLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = link.dataset.tabTarget;
      if (target) {
        event.preventDefault();
        activateTab(target, true);
        const targetTab = document.querySelector(`[data-tab="${target}"][role="tab"]`);
        targetTab?.focus();
      }
    });
  });

  if (hashTarget) {
    const matchingTab = document.querySelector(`[data-tab="${hashTarget}"][role="tab"]`);
    if (matchingTab) {
      activateTab(hashTarget);
    }
  }
});
