
import Apples from '../assets/Apples.png'; // ← Replace with your actual image path
import Bananas from "../assets/Bananas.png"
import Strawberries from "../assets/Strawberries.png"
import Orange from "../assets/Oranges.png"
import Grapes from "../assets/Grapes.png"
import Spinach from "../assets/Spinach.png"
import BellPeppers from "../assets/BellPeppers.png"
import Tomato from "../assets/Tomatoes.png"
import Papaya from "../assets/Papaya.png"
import DragonFruit from '../assets/Dragon Fruit.png'
import Kiwi from "../assets/Kiwi.png"
import Potato from "../assets/Potato.png"
import LadyFinger from "../assets/LadyFinger.png"
import Cucumber from "../assets/Cucumber.png"
import Onion from "../assets/Onion.png"
import Garlic from "../assets/Garlic.png"
import Yogurt from "../assets/Yogurt.png"
import Ghee from "../assets/Ghee.png"
import CheddarCheese from "../assets/CheddarCheese.png"
import Butter from "../assets/Butter.png"
import Milk from "../assets/Milk.png"
import Cream from "../assets/SourCream.png"
import Paneer from "../assets/Paneer.png"
import IceCream from "../assets/IceCream.png"
import Water from "../assets/Water.png"
import OrangeJuice from "../assets/OrangeJuice.png"
import Coffee from "../assets/Coffee.png"
import Tea from "../assets/Tea.png"
import EnergyDrink from "../assets/EnergyDrink.png"
import CoconutWater from "../assets/CoconutWater.png"
import Cola from "../assets/Cola.png"
import Lassi from "../assets/Lassi.png"
import Cookies from "../assets/Cookies.png"
import Chips from "../assets/PotatoChips.png"
import Nuts from "../assets/MixedNuts.png"
import Granola from "../assets/GranolaBars.png"
import Popcorn from "../assets/Popcorn.png"
import ChocolateBar from "../assets/Chocolate Bar.png"
import TrailMix from "../assets/TrailMix.png"
import Pretzels from "../assets/Pretzels.png"
import Lobster from "../assets/Lobster.png"
import Crab from "../assets/Crab.png"
import Scallops from "../assets/Scallops.png"
import Mussels from "../assets/Mussels.png"
import Oysters from "../assets/Oysters.png"
import KingCrab from "../assets/KingCrab.png"
import Anchovies from "../assets/Anchovies.png"
import SmokehouseMackerel from "../assets/SmokehouseMackerel.png"
import Sourdough from "../assets/SourdoughLoaf.png"
import Brioche from "../assets/BriocheBun.png"
import Baguette from "../assets/Baguette.png"
import BananaBread from "../assets/BananaBread.png"
import ChocolateDonut from "../assets/ChocolateDonut.png"
import Eclair from "../assets/Eclair.png"
import PoundCake from "../assets/PoundCake.png"
import FocacciaBread from "../assets/Focaccia.png"
import LambChops from "../assets/Lamb Chops.png"
import TurkeyBreast from "../assets/Turkey Breast.png"
import VealCutlet from "../assets/Veal Cutlet.png"
import BeefSteak from "../assets/Beef Steak.png"
import DuckBreast from "../assets/Duck Breast.png"
import Ham from "../assets/Ham.png"
import MeatBalls from "../assets/Meatballs.png"
import PorkRibs from "../assets/Pork Ribs.png"
// Categories data
import {
  GiAppleCore,
  GiBroccoli,
  GiMilkCarton,
  GiWineGlass,
  GiPopcorn,
  GiShrimp,
  GiCroissant,
  GiChickenLeg
} from 'react-icons/gi';

export const categories = [
  {
    name: 'Fruits',
    icon: <GiAppleCore className="text-red-500 text-2xl" />
  },
  {
    name: 'Vegetables',
    icon: <GiBroccoli className="text-green-100 text-2xl" />
  },
  {
    name: 'Dairy',
    icon: <GiMilkCarton className="text-yellow-400 text-2xl" />
  },
  {
    name: 'Beverages',
    icon: <GiWineGlass className="text-blue-500 text-2xl" />
  },
  {
    name: 'Snacks',
    icon: <GiPopcorn className="text-amber-600 text-2xl" />
  },
  {
    name: 'Seafood',
    icon: <GiShrimp className="text-teal-100 text-2xl" />
  },
  {
    name: 'Bakery',
    icon: <GiCroissant className="text-amber-700 text-2xl" />
  },
  {
    name: 'Meat',
    icon: <GiChickenLeg className="text-red-700 text-2xl" />
  }
];


// Products data with more items
export const products = [
  // Fruits
  { id: 1, name: ' Apples', price: 50, category: 'Fruits', image: Apples },
  { id: 2, name: ' Bananas', price: 96, category: 'Fruits', image: Bananas },
  { id: 3, name: 'Sweet Strawberries', price: 45, category: 'Fruits', image: Strawberries },
  { id: 4, name: 'Juicy Oranges', price: 12, category: 'Fruits', image: Orange },
  { id: 5, name: 'Seedless Grapes', price: 37, category: 'Fruits', image: Grapes },
  { id: 6, name: 'Dragon Fruit', price: 55, category: 'Fruits', image: DragonFruit },
  { id: 7, name: 'Kiwi', price: 85, category: 'Fruits', image: Kiwi },
  { id: 8, name: 'Papaya', price: 12, category: 'Fruits', image: Papaya },

  // Vegetables
  { id: 9, name: 'Organic Spinach', price: 75, category: 'Vegetables', image: Spinach },
  { id: 10, name: 'Bell Peppers', price: 22, category: 'Vegetables', image: BellPeppers },
  { id: 11, name: 'Cherry Tomatoes', price: 74, category: 'Vegetables', image: Tomato },
  { id: 12, name: 'Potato', price: 55, category: 'Vegetables', image: Potato },
  { id: 13, name: 'Cucumber', price: 22, category: 'Vegetables', image: Cucumber },
  { id: 14, name: 'LadyFinger', price: 76, category: 'Vegetables', image: LadyFinger },
  { id: 15, name: 'Onion', price: 85, category: 'Vegetables', image: Onion },
  { id: 16, name: 'Garlic', price: 56, category: 'Vegetables', image: Garlic },


  // Dairy
  { id: 17, name: 'Greek Yogurt', price: 88, category: 'Dairy', image: Yogurt },
  { id: 18, name: 'Organic Milk', price: 21, category: 'Dairy', image: Milk },
  { id: 19, name: 'Cheddar Cheese', price: 77, category: 'Dairy', image: CheddarCheese },
  { id: 20, name: 'Farm Butter', price: 55, category: 'Dairy', image: Butter },
  { id: 21, name: 'Sour Cream', price: 99, category: 'Dairy', image: Cream },
  { id: 22, name: 'Paneer', price: 125, category: 'Dairy', image: Paneer },
  { id: 23, name: 'Vanilla Ice Cream', price: 500, category: 'Dairy', image: IceCream },
  { id: 24, name: 'Ghee', price: 55, category: 'Dairy', image: Ghee },

  // Beverages
  { id: 25, name: ' Water', price: 55, category: 'Beverages', image: Water },
  { id: 26, name: ' Orange Juice', price: 85, category: 'Beverages', image: OrangeJuice },
  { id: 27, name: ' Coffee', price: 96, category: 'Beverages', image: Coffee },
  { id: 28, name: 'Green Tea', price: 74, category: 'Beverages', image: Tea },
  { id: 29, name: 'Energy Drink', price: 94, category: 'Beverages', image: EnergyDrink },
  { id: 30, name: 'Coconut Water', price: 29, category: 'Beverages', image: CoconutWater },
  { id: 31, name: 'Cola', price: 55, category: 'Beverages', image: Cola },
  { id: 32, name: 'Lassi', price: 44, category: 'Beverages', image: Lassi },

  // Snacks
  { id: 33, name: 'Chocolate Cookies', price: 66, category: 'Snacks', image: Cookies },
  { id: 34, name: 'Potato Chips', price: 88, category: 'Snacks', image: Chips },
  { id: 35, name: 'Mixed Nuts', price: 86, category: 'Snacks', image: Nuts },
  { id: 36, name: 'Granola Bars', price: 36, category: 'Snacks', image: Granola },
  { id: 37, name: 'Popcorn', price: 44, category: 'Snacks', image: Popcorn },
  { id: 38, name: 'Pretzels', price: 27, category: 'Snacks', image: Pretzels },
  { id: 39, name: 'Trail Mix', price: 47, category: 'Snacks', image: TrailMix },
  { id: 40, name: 'Chocolate Bar', price: 10, category: 'Snacks', image: ChocolateBar },



  // Seafood
  { id: 41, name: 'Lobster Tail', price: 14, category: 'Seafood', image: Lobster },
  { id: 42, name: 'Blue Crab', price: 12, category: 'Seafood', image: Crab },
  { id: 43, name: 'Scallops', price: 138, category: 'Seafood', image: Scallops },
  { id: 44, name: 'Mussels', price: 555, category: 'Seafood', image: Mussels },
  { id: 45, name: 'Oysters', price: 69, category: 'Seafood', image: Oysters },
  { id: 46, name: 'King Crab Legs', price: 190, category: 'Seafood', image: KingCrab },
  { id: 47, name: 'Anchovies', price: 58, category: 'Seafood', image: Anchovies },
  { id: 48, name: 'Smokehouse Mackerel', price: 56, category: 'Seafood', image: SmokehouseMackerel },


  // Bakery
  { id: 49, name: 'Sourdough Loaf', price: 47, category: 'Bakery', image: Sourdough },
  { id: 50, name: 'Brioche Bun', price: 28, category: 'Bakery', image: Brioche },
  { id: 51, name: 'Baguette', price: 25, category: 'Bakery', image: Baguette },
  { id: 52, name: 'Banana Bread', price: 39, category: 'Bakery', image: BananaBread },
  { id: 53, name: 'Choco Donut', price: 12, category: 'Bakery', image: ChocolateDonut },
  { id: 54, name: 'Eclair', price: 29, category: 'Bakery', image: Eclair },
  { id: 55, name: 'Pound Cake', price: 33, category: 'Bakery', image: PoundCake },
  { id: 56, name: 'Focaccia Bread', price: 48, category: 'Bakery', image: FocacciaBread },


  // Meat
  { id: 57, name: 'Lamb Chops', price: 98, category: 'Meat', image: LambChops },
  { id: 58, name: 'Turkey Breast', price: 72, category: 'Meat', image: TurkeyBreast },
  { id: 59, name: 'Veal Cutlet', price: 10, category: 'Meat', image: VealCutlet },
  { id: 60, name: 'Beef Steak', price: 850, category: 'Meat', image: BeefSteak },
  { id: 61, name: 'Duck Breast', price: 560, category: 'Meat', image: DuckBreast },
  { id: 62, name: 'Ham', price: 860, category: 'Meat', image: Ham },
  { id: 63, name: 'Meatballs', price: 900, category: 'Meat', image: MeatBalls },
  { id: 64, name: 'Pork Ribs', price: 869, category: 'Meat', image: PorkRibs },
];

