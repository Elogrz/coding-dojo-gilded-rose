class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if(items.name == 'Aged Brie'){
        items.quality = items.quality + 1;
      }

      if(items.sellIn >= 0){
        // La qualité augmente de 1 de base, elle augmente de 2 quand il reste 10 jours ou moins et de 3 quand il reste 5 jours ou moins, mais la qualité tombe à 0 après le concert.
        if(items.name == 'Backstage passes to a TAFKAL80ETC concert'){
          items.quality = items.quality + 1; // quality +1 au total
          if (this.items[i].sellIn <= 10) {
            items.quality = items.quality + 1; // quality +2 au total
            if (this.items[i].sellIn <= 5) {
              items.quality = items.quality + 1; // quality +3 au total
            }
          }
        }
        else if(items.name == 'Conjured Mana Cake'){
          items.quality = items.quality - 2;
        }
      } else {
        if(items.name == 'Backstage passes to a TAFKAL80ETC concert'){
          items.quality = 0;
        }
        else if(items.name == 'Conjured Mana Cake'){
          items.quality = items.quality - 4;
        }
      }

      if(items.quality <0){
        items.quality = 0;
      }

      if(items.quality > 50){
        items.quality = 50;
      }

      if(items.name != 'Sulfuras, Hand of Ragnaros'){
        items.sellIn = items.sellIn - 1;
      }

    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
