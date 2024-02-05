export enum ShopItemNames {
  RegularFitLinenBlendTrousers = 'regularFitLinenBlendTrousers',
  SOliverPrintTShirt = 'sOliverPrintTShirt',
  StretchCottonCargoTrousers = 'stretchCottonCargoTrousers'
}

export const availableShopItems = {
  [ShopItemNames.RegularFitLinenBlendTrousers]: {
    name: 'Regular fit: linen blend trousers',
    brandName: 'QS by s.oliver',
    color: 'Deep Blue',
    size: 'S',
    isSustainable: true,
    price: 49.99,
    percentReduced: 48,
    isNewArrival: false,
    image: '2131600'
  },
  [ShopItemNames.SOliverPrintTShirt]: {
    name: 's.Oliver print T-shirt',
    brandName: 's.Oliver',
    color: 'Dark Blue',
    size: 'S',
    isSustainable: false,
    price: 15.99,
    percentReduced: 0,
    isNewArrival: true,
    image: '2152232'
  },
  [ShopItemNames.StretchCottonCargoTrousers]: {
    name: 'Stretch cotton cargo trousers',
    brandName: 'QS by s.Oliver',
    color: 'Dark Grey',
    size: '',
    isSustainable: true,
    price: 59.99,
    percentReduced: 43,
    isNewArrival: false,
    image: '2140445'
  }
}
