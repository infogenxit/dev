const fs = require('fs');
const files = [
    'src/pages/Products/IGXStock/IgxStock.css',
    'src/pages/Products/OdooErp/OdooErp.css',
    'src/pages/Products/RetailPos/RetailPos.css',
    'src/pages/Products/CustomerRelation/CustomerRelation.css'
];

const resetBlock = 
/* MASSIVE ISOLATION RESET TO DEFEAT INDEX.CSS */
#root .igx-isolated-product-wrapper,
#root .igx-isolated-product-wrapper *,
#root .igx-isolated-product-wrapper *::before,
#root .igx-isolated-product-wrapper *::after {
    all: revert !important;
}
;

for(let file of files) {
    if (!fs.existsSync(file)) continue;
    let css = fs.readFileSync(file, 'utf8');
    
    // First, remove any existing reset block we might have added so we don't duplicate
    css = css.replace(/\/\* MASSIVE ISOLATION RESET[\s\S]*?revert !important;\s*\}/, '');

    // Add !important to every declaration that doesn't already have it
    // This regex carefully targets property: value; inside blocks
    css = css.replace(/([a-zA-Z\-]+)\s*:\s*([^;\}]+)(;?)/g, (match, prop, val, semi) => {
        if (val.includes('!important')) return match;
        // Ignore things like @import or url data
        if (prop.startsWith('@')) return match;
        return ${prop}:  !important;
    });
    
    fs.writeFileSync(file, resetBlock + '\n' + css);
}
console.log('CSS files fully isolated!');

