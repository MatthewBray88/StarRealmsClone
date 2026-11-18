import { TYPE, FACTION } from "../cardConstants"

export const StarterDecks = {
  coreStarter: {
    scout: {
      name: 'Scout',
      type: TYPE.ship,
      faction: FACTION.non,
      abilities: {
        primary(tradeCount){
          tradeCount++;
        }
      },
      qty: 8,
      image: 'StarRealmsClone/assests/images/Scout.jpeg'
    },
    viper: {
      name: 'Viper',
      type: TYPE.ship,
      faction: FACTION.non,
      abilities: {
        primary(combatCount){
          combatCount++;
        }
      },
      qty: 2,
      image: 'StarRealmsClone/assests/images/Viper.jpeg'
    }
  },

  explorerPile: {
    explorer: {
      name: 'Explorer',
      type: TYPE.ship,
      faction: FACTION.non,
      cost: 2,
      abilities: {
        primary(tradeCount){
          tradeCount += 2;
        },
        scrap(combatCount){
          combatCount +=2;
        }
      },
      qty: 10,
      image: 'StarRealmsClone/assests/images/Explorer.jpeg'
    },
  }
}