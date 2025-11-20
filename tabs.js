(function () {
  const tabButtons = Array.from(document.querySelectorAll('.tab-nav__btn'));
  const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
  const tabLinks = Array.from(document.querySelectorAll('.js-tab-link'));

  if (!tabButtons.length || !tabPanels.length) return;

  const setActiveTab = (tabName) => {
    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.tab === tabName;
      btn.setAttribute('aria-selected', isActive);
      btn.tabIndex = isActive ? 0 : -1;
      btn.classList.toggle('is-active', isActive);
    });

    tabPanels.forEach((panel) => {
      const isActive = panel.dataset.tab === tabName;
      panel.classList.toggle('is-active', isActive);
      panel.hidden = !isActive;
    });
  };

  const initialFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    const match = tabPanels.find((panel) => panel.id === hash || panel.dataset.tab === hash);
    return match ? match.dataset.tab : null;
  };

  const initialTab = initialFromHash() || tabButtons[0].dataset.tab;
  setActiveTab(initialTab);

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
    btn.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setActiveTab(btn.dataset.tab);
      }
    });
  });

  tabLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = link.dataset.tabTarget;
      if (!target) return;
      event.preventDefault();
      setActiveTab(target);
      document.getElementById('portfolio-tabs')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();
