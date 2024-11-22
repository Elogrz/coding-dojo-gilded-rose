# Récap des infos à connaître 

Liste des Items :
- Aged Brie
- Backstage passes to a TAFKAL80ETC concert
- Sulfuras, Hand of Ragnaros
- Conjured

Conditions : 
- quality impossible au delà de 50 sauf Sulfuras
- quality jamais inférieur à 0
- tous les élèments perdent de la valeur sellIn et quality à chaque journée
- "Sulfuras" a 80 de quality et ca ne change jamais
- "Sulfuras" n'a pas de date de péremption
- Une fois que la date de péremption est passée, la quality se dégrade deux fois plus rapidement.
- "Aged Brie" et "Backstage passes" augmente sa quality plus le temps passe.
- les éléments "Conjured" voient leur qualité se dégrader de deux fois plus vite que les objets normaux.

Différents cas :
- Aged Brie
  - pour sellIn >= 0 : quality+1
  - pour sellIn < 0 : quality+2
- Backstage passes to a TAFKAL80ETC concert
  - pour sellIn >= 0 : quality+1
  - pour sellIn < 0 : quality0
- Sulfuras, Hand of Ragnaros
- Conjured
  - pour sellIn >= 0 : quality-2
  - pour sellIn < 0 : quality-4