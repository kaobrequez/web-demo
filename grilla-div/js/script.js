const brandFilter = document.querySelector('#brand-filter');
const productColumns = document.querySelectorAll('main article');

const productBrands = {
    'Taladro Inalámbrico 20V': 'bosch',
    'Taladro Angular 12V': 'makita',
    'Taladro de Pedestal': 'dewalt',
    'Taladro Percutor 750W': 'stanley'
};

productColumns.forEach((product) => {
    const productName = product.querySelector('h3').textContent.trim();
    product.closest('.col-3').dataset.brand = productBrands[productName];
});

brandFilter.addEventListener('change', () => {
    const selectedBrand = brandFilter.value;

    productColumns.forEach((product) => {
        const productColumn = product.closest('.col-3');
        productColumn.hidden = selectedBrand !== 'todas' && productColumn.dataset.brand !== selectedBrand;
    });
});