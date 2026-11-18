import { TYPE, FACTION } from "../cardConstants.js"

export const CoreSet = {
  barterWorld: {
    name: 'Barter World',
    type: TYPE.base,
    outpost: false,
    defense: 4,
    faction: FACTION.tradeFederation,
    cost: 4,
    abilities: {
      primary(authorityCount, tradeCount, selection){
        switch(selection.toLowerCase()){
          case 'authority': {
            authorityCount += 2;
            break;
          }
          case 'trade': {
            tradeCount += 2;
            break;
          }
        }
      },
      scrap(combatCount){
        combatCount += 5;
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/BarterWorld.jpeg'
  },
    
  battleBlob: {
    name: 'Battle Blob',
    type: TYPE.ship,
    faction: FACTION.blob,
    cost: 6,
    abilities: {
      primary(combatCount){
        combatCount += 8;
      },
      ally(){
        // Draw a card.
      },
      scrap(combatCount){
        combatCount += 5;
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/BattleBlob.jpeg'
  },
    
  battleMech: {
    name: 'Battle Mech',
    type: TYPE.ship,
    faction: FACTION.machineCult,
    cost: 5,
    abilities: {
      primary(combatCount){
        combatCount += 4;
        // You may scrap a card in your hand or discard pile.
      },
      ally(){
        // Draw a card.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/BattleMech.jpeg'
  },
  
  battlePod: {
    name: 'Battle Pod',
    type: TYPE.ship, 
    faction: FACTION.blob,
    cost: 2,
    abilities: {
      primary(combatCount){
        combatCount += 4;
        // You may scrap a card in the trade row.
      },
    ally(combatCount){
        combatCount += 2;
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/BattlePod.jpeg'
  },
  
  battleStation: {
    name: 'Battle Station',
    type: TYPE.base,
    outpost: true, 
    defense: 5,
    faction: FACTION.machineCult,
    cost: 3,
    abilities: {
      scrap(combatCount){
        combatCount += 5;
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/BattleStation.jpeg'
  },

  battlecruiser: {
    name: 'Battlecruiser',
    type: TYPE.ship, 
    faction: FACTION.starEmpire,
    cost: 6,
    abilities: {
      primary(combatCount){
        combatCount += 5;
        // Draw a card.
      },
      ally(){
        // Target oppnent discards a card.
      },
      scrap(){
        // Draw a card.
        // You may destory target base.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/Battlecruiser.jpeg'
  },
  
  blobCarrier: {
    name: 'Blob Carrier',
    type: TYPE.ship, 
    faction: FACTION.blob,
    cost: 6,
    abilities: {
      primary(combatCount){
        combatCount += 7;
      },
      ally(){
        // Acquire any ship for free and put it on top of your deck.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/BlobCarrier.jpeg'
  },

  blobDestroyer: {
    name: 'Blob Destroyer',
    type: TYPE.ship, 
    faction: FACTION.blob,
    cost: 4,
    abilities: {
      primary(combatCount){
        combatCount += 6;
      },
      ally(){
        // You may destroy target base and/or scrap a card in the trade row.
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/BlobDestroyer.jpeg'
  },

  blobFighter: {
    name: 'Blob Fighter',
    type: TYPE.ship, 
    faction: FACTION.blob,
    cost: 1,
    abilities: {
      primary(combatCount){
        combatCount += 3;
      },
      ally(){
        // Draw a card.
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/BlobFighter.jpeg'
  },

  blobWheel: {
    name: 'Blob Wheel',
    type: TYPE.base, 
    outpost: false, 
    defense: 5, 
    faction: FACTION.blob,
    cost: 3,
    abilities: {
      primary(combatCount){
        combatCount++;
      },
      scrap(tradeCount){
        tradeCount += 3;
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/BlobWheel.jpeg'
  },

  blobWorld: {
    name: 'Blob World',
    type: TYPE.base, 
    outpost: false, 
    defense: 7, 
    faction: FACTION.blob,
    cost: 8,
    abilities: {
      primary(combatCount, selection){
        switch(selection.toLowerCase()){
          case 'combat': {
            combatCount += 5;
            break;
          }
          case 'draw': {
            // Draw a card for each Blob card that you've played this turn.
            break;
          }
        }
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/BlobWorld.jpeg'
  },

  brainWorld: {
    name: 'Brain World',
    type: TYPE.base, 
    outpost: true, 
    defense: 6, 
    faction: FACTION.machineCult,
    cost: 8,
    abilities: {
      primary(){
        // Scrap up to 2 cards from your hand and/or discard pile.
        // Draw a card for each card scrapped this way.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/BrainWorld.jpeg'
  },

  centralOffice: {
    name: 'Central Office',
    type: TYPE.base,
    outpost: false,
    defense: 6, 
    faction: FACTION.tradeFederation,
    cost: 7,
    abilities: {
      primary(tradeCount){
        tradeCount += 2;
        // You may put the next ship you acquire this turn on top of your deck.
      },
      ally(){
        // Draw a card.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/CentralOffice.jpeg'
  },

  commandShip: {
    name: 'Command Ship',
    type: TYPE.ship, 
    faction: FACTION.tradeFederation,
    cost: 8,
    abilities: {
      primary(tradeCount, combatCount){
        tradeCount += 4; 
        combatCount += 6;
        // Draw two cards.
      },
      ally(){
        // Destroy target base.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/CommandShip.jpeg'
  },

  corvette: {
    name: 'Corvette',
    type: TYPE.ship, 
    faction: FACTION.starEmpire,
    cost: 2,
    abilities: {
      primary(combatCount){
        combatCount++; 
        // Draw a card.
      },
      ally(combatCount){
        combatCount += 2;
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/Corvette.jpeg'
  },

  cutter: {
    name: 'Cutter',
    type: TYPE.ship, 
    faction: FACTION.tradeFederation,
    cost: 2,
    abilities: {
      primary(authorityCount, tradeCount){
        authorityCount += 4;
        tradeCount += 2;
      },
      ally(combatCount){
        combatCount += 4;
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/Cutter.jpeg'
  },

  defenseCenter: {
    name: 'Defense Center',
    type: TYPE.base,
    outpost: true, 
    defense: 5, 
    faction: FACTION.tradeFederation,
    cost: 5,
    abilities: {
      primary(authorityCount, combatCount, selection){
        switch(selection.toLowerCase()){
          case 'authority': {
            authorityCount += 3;
            break;
          }
          case 'combat': {
            combatCount += 2;
            break;
          }
        }
      },
      ally(combatCount){
        combatCount += 2;
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/DefenseCenter.jpeg'
  },

  dreadnaught: {
    name: 'Dreadnaught',
    type: TYPE.ship, 
    faction: FACTION.starEmpire,
    cost: 7,
    abilities: {
      primary(combatCount){
        combatCount += 7; 
        // Draw a card.
      },
      scrap(combatCount){
        combatCount += 5;
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/Dreadnaught.jpeg'
  },

  embassyYacht: {
    name: 'Embassy Yacht',
    type: TYPE.ship, 
    faction: FACTION.tradeFederation,
    cost: 3,
    abilities: {
      primary(authorityCount, tradeCount, baseCount){
        authorityCount += 3; 
        tradeCount += 2;

        if(baseCount >= 2){
          // Draw two cards.
        }
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/EmbassyYacht.jpeg'
  },

  federationShuttle: {
    name: 'Federation Shuttle',
    type: TYPE.ship, 
    faction: FACTION.tradeFederation,
    cost: 1,
    abilities: {
      primary(tradeCount){
        tradeCount += 2;
      },
      ally(authorityCount){
        authorityCount += 4;
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/FederationShuttle.jpeg'
  },

  flagship: {
    name: 'Flagship',
    type: TYPE.ship, 
    faction: FACTION.tradeFederation,
    cost: 6,
    abilities: {
      primary(combatCount){
        combatCount += 5; 
        // Draw a card.
      },
      ally(authorityCount){
        authorityCount += 5;
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/Flagship.jpeg'
  },

  fleetHQ: {
    name: 'Fleet HQ',
    type: TYPE.base,
    outpost: false, 
    defense: 8,
    faction: FACTION.starEmpire,
    cost: 8,
    abilities: {
      primary(){
        // whenever you play a ship, gain 1 combat.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/FleetHQ.jpeg'
  },

  freighter: {
    name: 'Freighter',
    type: TYPE.ship, 
    faction: FACTION.tradeFederation,
    cost: 4,
    abilities: {
      primary(authorityCount){
        authorityCount += 4;
      },
      ally(){
        // Put the next ship you acquire this turn on top of your deck.
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/Freighter.jpeg'
  },

  imperialFighter: {
    name: 'Imperial Fighter',
    type: TYPE.ship,
    faction: FACTION.starEmpire,
    cost: 1,
    abilities: {
      primary(combatCount){
        combatCount += 2; 
        // Target opponent discards a card.
      },
      ally(combatCount){
        combatCount += 2;
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/ImperialFighter.jpeg'
  },

  imperialFrigate: {
    name: 'Imperial Frigate',
    type: TYPE.ship, 
    faction: FACTION.starEmpire,
    cost: 3,
    abilities: {
      primary(combatCount){
        combatCount += 4; 
        // Target opponent discards a card.
      },
      ally(combatCount){
        combatCount += 2;
      },
      scrap(){
        // Draw a card.
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/ImperialFrigate.jpeg'
  },

  junkyard: {
    name: 'Junkyard',
    type: TYPE.base, 
    outpost: true, 
    defense: 5,
    faction: FACTION.machineCult,
    cost: 6,
    abilities: {
      primary(){
        // Scrap a card in your hand or discard pile.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/Junkyard.jpeg'
  },

  machineBase: {
    name: 'Machine Base',
    type: TYPE.base,
    outpost: true, 
    defense: 6,
    faction: FACTION.machineCult,
    cost: 7,
    abilities: {
      primary(){
        // Draw a card, then scrap a card in your hand.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/MachineBase.jpeg'
  },

  mechWorld: {
    name: 'Mech World',
    type: TYPE.base, 
    outpost: true, 
    defense: 6,
    faction: FACTION.machineCult,
    cost: 5,
    abilities: {
      primary(){
        // Mech World counts as an ally for all factions.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/MechWorld.jpeg'
  },

  missisleBot: {
    name: 'Missile Bot',
    type: TYPE.ship, 
    faction: FACTION.machineCult,
    cost: 2,
    abilities: {
      primary(combatCount){
        combatCount += 2; 
        // You may scrap a card in your hand or discard pile.
      },
      ally(combatCount){
        combatCount += 2;
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/MissileBot.jpeg'
  },

  missileMech: {
    name: 'Missile Mech',
    type: TYPE.ship, 
    faction: FACTION.machineCult,
    cost: 6,
    abilities: {
      primary(combatCount){
        combatCount += 6;
        // You may destory target base.
      },
      ally(){
        // Draw a card.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/MissileMech.jpeg'
  },

  mothership: {
    name: 'Mothership',
    type: TYPE.ship, 
    faction: FACTION.blob,
    cost: 7,
    abilities: {
      primary(combatCount){
        combatCount += 6; 
        // Draw a card.
      },
      ally(){
        // Draw a card.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/Mothership.jpeg'
  },

  partolMech: {
    name: 'Partol Mech',
    type: TYPE.ship, 
    faction: FACTION.machineCult,
    cost: 4,
    abilities: {
      primary(tradeCount, combatCount, selection){
        switch(selection.toLowerCase()){
          case 'trade': {
            tradeCount += 3;
            break;
          }
          case 'combat': {
            combatCount += 5;
          }
        }
      },
      ally(){
        // Scrap a card in your hand or discard pile.
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/PartolMech.jpeg'
  },

  portOfCall: {
    name: 'Port of Call',
    type: TYPE.base, 
    outpost: true, 
    defense: 6,
    faction: FACTION.tradeFederation,
    cost: 6,
    abilities: {
      primary(tradeCount){
        tradeCount += 3;
      },
      scrap(){
        // Draw a card.
        // You may destroy target base.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/PortOfCall.jpeg'
  },

  ram: {
    name: 'Ram',
    type: TYPE.ship, 
    faction: FACTION.blob,
    cost: 3,
    abilities: {
      primary(combatCount){
        combatCount += 5;
      },
      ally(combatCount){
        combatCount += 2;
      },
      scrap(tradeCount){
        tradeCount += 3;
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/Ram.jpeg'
  },

  recyclingStation: {
    name: 'Recycling Station',
    type: TYPE.base, 
    outpost: true, 
    defense: 4,
    faction: FACTION.starEmpire,
    cost: 4,
    abilities: {
      primary(tradeCount, selection){
        switch(selection.toLowerCase()){
          case 'trade': {
            tradeCount++;
            break;
          }
          case 'draw': {
            // Discard up to two cards, then draw that many cards.
            break;
          }
        }
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/RecyclingStation.jpeg'
  },

  royalRedoubt: {
    name: 'Royal Redoubt',
    type: TYPE.base, 
    outpost: true, 
    defense: 6,
    faction: FACTION.starEmpire,
    cost: 6,
    abilities: {
      primary(combatCount){
        combatCount += 3;
      },
      ally(){
        // Target opponent discard a card.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/RoyalRedoubt.jpeg'
  },

  spaceStation: {
    name: 'Space Station',
    type: TYPE.base,
    outpost: true, 
    defense: 4,
    faction: FACTION.starEmpire,
    cost: 4,
    abilities: {
      primary(combatCount){
        combatCount += 2;
      },
      ally(combatCount){
        combatCount += 2;
      },
      scrap(tradeCount){
        tradeCount += 4;
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/SpaceStation.jpeg'
  },

  stealthNeedle: {
    name: 'Stealth Needle',
    type: TYPE.ship, 
    faction: FACTION.machineCult,
    cost: 4,
    abilities: {
      primary(){
        // Copy another ship you've played this turn. Stealth Needle has that ship's faction in addition to Machine Cult.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/StealthNeedle.jpeg'
  },

  supplyBot: {
    name: 'Supply Bot',
    type: TYPE.ship, 
    faction: FACTION.machineCult,
    cost: 3,
    abilities: {
      primary(tradeCount){
        tradeCount += 2; 
        // You may scrap a card in your hand or discard pile.
      },
      ally(combatCount){
        combatCount += 2;
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/SupplyBot.jpeg'
  },

  surveyShip: {
    name: 'Survey Ship',
    type: TYPE.ship, 
    faction: FACTION.starEmpire,
    cost: 3,
    abilities: {
      primary(tradeCount){
        tradeCount++; 
        // Draw a card.
      },
      scrap(){
        // Target opponent discards a card.
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/SurveyShip.jpeg'
  },

  theHive: {
    name: 'The Hive',
    type: TYPE.base, 
    outpost: false, 
    defense: 5,
    faction: FACTION.blob,
    cost: 5,
    abilities: {
      primary(combatCount){
        combatCount += 3;
      },
      ally(){
        // Draw a card.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/TheHive.jpeg'
  },

  tradeBot: {
    name: 'Trade Bot',
    type: TYPE.ship, 
    faction: FACTION.machineCult,
    cost: 1,
    abilities: {
      primary(tradeCount){
        tradeCount++; 
        // You may scrap a card in your hand or discard pile.
      },
      ally(combatCount){
        combatCount += 2;
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/TradeBot.jpeg'
  },

  tradeEscort: {
    name: 'Trade Escort',
    type: TYPE.ship, 
    faction: FACTION.tradeFederation,
    cost: 5,
    abilities: {
      primary(authorityCount, combatCount){
        authorityCount += 4; 
        combatCount += 4;
      },
      ally(){
        // Draw a card.
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/TradeEscort.jpeg'
  },

  tradePod: {
    name: 'Trade Pod',
    type: TYPE.ship, 
    faction: FACTION.blob,
    cost: 2,
    abilities: {
      primary(tradeCount){
        tradeCount += 3;
      },
      ally(combatCount){
        combatCount += 2;
      }
    },
    qty: 3,
    image: 'StarRealmsClone/assests/images/CoreSet/TradePod.jpeg'
  },

  tradingPost: {
    name: 'Trading Post',
    type: TYPE.base, 
    outpost: true, 
    defense: 4,
    faction: FACTION.tradeFederation,
    cost: 3,
    abilities: {
      primary(authorityCount, tradeCount, selection){
        switch(selection.toLowerCase()){
          case 'authority': {
            authorityCount++;
            break;
          }
          case 'trade': {
            tradeCount++;
            break;
          }
        }
      },
      scrap(combatCount){
        combatCount += 3;
      }
    },
    qty: 2,
    image: 'StarRealmsClone/assests/images/CoreSet/TradingPost.jpeg'
  },

  warWorld: {
    name: 'War World',
    type: TYPE.base, 
    outpost: true, 
    defense: 4,
    faction: FACTION.starEmpire,
    cost: 5,
    abilities: {
      primary(combatCount){
        combatCount += 3;
      },
      ally(combatCount){
        combatCount += 4;
      }
    },
    qty: 1,
    image: 'StarRealmsClone/assests/images/CoreSet/WarWorld.jpeg'
  }
}