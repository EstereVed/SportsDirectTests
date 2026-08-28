import { test, expect } from '@playwright/test';
import { InventoryPage } from '../page_objects/InventoryPage';

test ('filter boys jackets', async({ page }) =>{
    const inventoryPage = new InventoryPage(page);

    await page.goto('https://www.sportsdirect.lt/');

    await inventoryPage.acceptCookies();

    await inventoryPage.sportButton.click();
    await expect(page).toHaveURL('https://www.sportsdirect.lt/sport');

    await inventoryPage.outdoorButton.click();
    await expect(page).toHaveURL('https://www.sportsdirect.lt/outdoor');

    await inventoryPage.kidsClothingLink.click();
    await expect(page).toHaveURL('https://www.sportsdirect.lt/outdoor/outdoor-clothing/kids-outdoor-clothing');

    // await inventoryPage.brandFilterCheckbox.filter({hasText:"Gelert"}).check();
    await inventoryPage.checkFilter('Gelert');
    await expect(inventoryPage.selectedBrandLabel).toHaveText('Gelert');
    
    // await inventoryPage.sexFilterCheckbox.check();
    await inventoryPage.checkFilter('Berniukams');
    await expect(inventoryPage.selectedSexLabel).toHaveText('Berniukams');

    // await inventoryPage.ageFilterCheckbox.check();
    await inventoryPage.checkFilter('11 - 12 Years');
    await expect(inventoryPage.selectedAgeLabel).toHaveText('11 - 12 Years');

    // await inventoryPage.styleFilterCheckbox.check();
    await inventoryPage.checkFilter('Vandeniui atsparios striukės');
    await expect(inventoryPage.selectedStyleLabel).toHaveText('Vandeniui atsparios striukės');

    await expect(inventoryPage.totalProductsCount).toHaveText('5');

    await expect(inventoryPage.filteredProduct.first()).toBeVisible();
    await expect(inventoryPage.filteredProduct).toHaveCount(5);

    await page.pause();
   
})


