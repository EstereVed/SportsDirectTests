import { test, expect } from '@playwright/test';

test ('add item to cart', async({ page }) =>{
    await page.goto('https://www.sportsdirect.lt/');
    
    const rejectCookiesButton = page.locator ('#onetrust-reject-all-handler');
    try{
        await rejectCookiesButton.waitFor({state:'visible', timeout: 5000});
        await rejectCookiesButton.click();
    }catch(error){
        console.log ('Reject cookies button not found',error);
    }

    const runningFilterButton = page.locator ('.QuickLinks_text__TmwxA',{hasText:'Running'});
    await runningFilterButton.click();
    await expect(page).toHaveURL('https://www.sportsdirect.lt/running');
    // await page.pause();

    const womensButton = page.locator('.QuickLinks_text__TmwxA', {hasText:'Womens'});
    await womensButton.click();
    await expect(page).toHaveURL('https://www.sportsdirect.lt/running/all-ladies-running');
    // // await page.pause();

    const size10Checkbox = page.locator('[data-filterurlkey = "10"]');
    await size10Checkbox.click();
    const selectedSizeLabel = page.locator('#SelectedFiltersWrapper-257862');
    await expect(selectedSizeLabel).toHaveText('10');
    // // await page.pause();

    const colorBlackCheckbox = page.locator('[data-item = "ACOL^Juoda"]');
    await colorBlackCheckbox.click();
    const selectedColorLabel = page.locator('#SelectedFiltersWrapper-ACOL');
    await expect(selectedColorLabel).toHaveText('Juoda');
    // // await page.pause();

    const priceCheckbox = page.locator('[data-filterurlkey = "£100 to £250"]');
    await priceCheckbox.click();
    const selectedPriceLabel = page.locator('#SelectedFiltersWrapper-APRI');
    await expect(selectedPriceLabel).toHaveText('100 € iki 250 €');
    // // await page.pause();

    const womensTightsItem = page.locator('.productdescriptionname', {hasText:'Women\'s 7\/8 Tights'});
    await womensTightsItem.click();
    await expect(page).toHaveURL('https://www.sportsdirect.lt/on-womens-7/8-tights-450477#colcode=45047703');
    // // await page.pause();

    const tightsColorButton = page.locator('#cvli45047703');
    await tightsColorButton.click();
    //upd:
    const tightsSizeButton = page.locator('[role="radio"][data-sizevarid = "350"]');
    await tightsSizeButton.click();
    const addToCartButton = page.locator('#sAddToBagWrapper.ImgButWrap').nth(1);

    

    await addToCartButton.click();

    // const itemCountIcon = page.locator('#mobBasketQuantity');
    // await expect(addToCartButton).toHaveText(/Pridėjimas\.\.\./, { timeout: 10_000 });
    // await expect(addToCartButton).toHaveText(/Pridėta į krepšelį/);
    // const itemCountIcon = page.locator('#mobBasketQuantity');
    // await expect(addToCartButton).toHaveAttribute('mobbasketquantity', /Pridėta/);
    // await page.pause();

    // const cartButton = page.locator('#bagQuantityContainer');
    // await cartButton.click();
    await page.pause();
})


