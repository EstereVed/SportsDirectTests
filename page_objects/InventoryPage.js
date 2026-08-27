export class InventoryPage{

    constructor(page){
    this.page = page; 
    this.sportButton = page.locator('#lnkTopLevelMenu_6219068');
    this.outdoorButton = page.locator('[data-testid="hero-block-cta"]',{hasText:'Outdoor'});
    this.kidsClothingLink = page.locator('[data-testid="image-block-link"]',{ hasText: 'Kids Clothing' });
    this.filterCheckbox = page.locator('.FilterName');
    // this.brandFilterCheckbox = page.locator('.FilterName',{hasText:"Gelert"});
    this.selectedBrandLabel = page.locator('#SelectedFiltersWrapper-ABRA');
    // this.sexFilterCheckbox = page.locator('.FilterName',{hasText:"Berniukams"});
    this.selectedSexLabel = page.locator('#SelectedFiltersWrapper-AFLOR');
    // this.ageFilterCheckbox = page.locator('.FilterName',{hasText:"11 - 12 Years"});
    this.selectedAgeLabel = page.locator('#SelectedFiltersWrapper-257862');
    // this.styleFilterCheckbox = page.locator('.FilterName',{hasText:"Vandeniui atsparios striukės"});
    this.selectedStyleLabel = page.locator('#SelectedFiltersWrapper-WEBSTYLE');   
    this.totalProductsCount = page.locator('.totalProducts').first();
    this.filteredProduct = page.locator('.s-productthumbbox');
}

async checkFilter(optionName) {
    await this.filterCheckbox
        .filter({hasText:optionName})
        .check();
    }

acceptCookies = async () =>{
     const acceptCookiesButton = this.page.locator ('#onetrust-accept-btn-handler');
    try{
        await acceptCookiesButton.waitFor({state:'visible', timeout: 5000});
        await acceptCookiesButton.click();
    }catch(error){
        console.log ('Accept cookies button not found',error);
    }
}

}