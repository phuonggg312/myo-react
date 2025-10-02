 const root = document.getElementById('plp');
  const toggleBtn = document.getElementById('filters-toggle');

  toggleBtn.addEventListener('click', () => {
    root.classList.toggle('plp--with-filters');
    // toggleBtn.textContent = root.classList.contains('plp--with-filters')
    //   ? 'Hide filters' : 'Show filters';
  });