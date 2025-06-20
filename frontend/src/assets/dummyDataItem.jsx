// src/components/dummyDataItem.jsx

import ApplesImg from '../assets/Dragon Fruit.png';
import CarrotsImg from '../assets/Passion Fruit.png';
import AvocadoImg from '../assets/Star Fruit.png';
import BroccoliImg from '../assets/Persimmon.png';
import BananasImg from '../assets/Kiwano Melon.png';
import TomatoesImg from '../assets/Rambutan.png';
import PeppersImg from '../assets/Mangosteen.png';
import SpinachImg from '../assets/Pomelo.png';

import MilkImg from '../assets/Truffle Brie.png';
import EggsImg from '../assets/Aged Gouda.png';
import YogurtImg from '../assets/Smoked Blue.png';
import CheeseImg from '../assets/Himalayan Yak.png';
import PaneerImg from '../assets/Saffron Manchego.png';
import ButterImg from '../assets/Whiskey Cheddar.png';
import CreamImg from '../assets/Cave-Aged Gruyère.png';
import LassiImg from '../assets/Lavender Goat.png';

import CroissantImg from '../assets/Turkish Simit.png';
import BreadImg from '../assets/Sourdough Focaccia.png';
import MuffinImg from '../assets/Japanese Milk Bread.png';
import BagelImg from '../assets/Indian Naan.png';
import SconeImg from '../assets/Mexican Concha.png';
import DonutImg from '../assets/Swedish Limpa.png';
import BaguetteImg from '../assets/Moroccan Khobz.png';
import BriocheImg from '../assets/Ethiopian Injera.png';

import ChocolateImg from '../assets/Salted Caramel Truffles.png';
import ChocolateBarImg from '../assets/Single-Origin Chocolate Bar.png';
import BrittleImg from '../assets/Honeycomb Crunch Brittle.png';
import MarzipanImg from '../assets/Pistachio Marzipan Logs.png';
import CoffeeChocolateImg from '../assets/Espresso Bean Clusters.png';
import BonbonImg from '../assets/Raspberry Rose Bonbons.png';
import BarkImg from '../assets/Spiced Orange Chocolate Bark.png';
import HalvaImg from '../assets/Tahini Halva Squares.png';

export const groceryData = [
  {
    id: 1,
    name: "Exotic Fruits",
    items: [
      { id: 101, name: "Dragon Fruit", price: 180, image: ApplesImg, description: "Tropical pink fruit with white flesh" },
      { id: 102, name: "Passion Fruit", price: 150, image: CarrotsImg, description: "Tangy tropical fruit with aromatic pulp" },
      { id: 103, name: "Star Fruit", price: 120, image: AvocadoImg, description: "Star-shaped yellow fruit with crisp texture" },
      { id: 104, name: "Persimmon", price: 140, image: BroccoliImg, description: "Sweet orange fruit with honey-like flavor" },
      { id: 105, name: "Kiwano Melon", price: 200, image: BananasImg, description: "Horned melon with vibrant green jelly" },
      { id: 106, name: "Rambutan", price: 160, image: TomatoesImg, description: "Hairy red fruit with translucent flesh" },
      { id: 107, name: "Mangosteen", price: 220, image: PeppersImg, description: "Purple fruit with snow-white segments" },
      { id: 108, name: "Pomelo", price: 110, image: SpinachImg, description: "Large citrus fruit with sweet-tart flavor" },
    ],
  },
  {
    id: 2,
    name: "Artisanal Cheeses",
    items: [
      { id: 201, name: "Truffle Brie", price: 480, image: MilkImg, description: "Creamy brie infused with black truffle" },
      { id: 202, name: "Aged Gouda", price: 420, image: EggsImg, description: "5-year aged Dutch cheese with caramel notes" },
      { id: 203, name: "Smoked Blue", price: 380, image: YogurtImg, description: "Blue cheese cold-smoked over hickory" },
      { id: 204, name: "Himalayan Yak", price: 650, image: CheeseImg, description: "Rare cheese from high-altitude yak milk" },
      { id: 205, name: "Saffron Manchego", price: 520, image: PaneerImg, description: "Spanish sheep cheese with saffron threads" },
      { id: 206, name: "Whiskey Cheddar", price: 450, image: ButterImg, description: "Sharp cheddar aged in whiskey barrels" },
      { id: 207, name: "Cave-Aged Gruyère", price: 490, image: CreamImg, description: "Swiss cheese aged in mountain caves" },
      { id: 208, name: "Lavender Goat", price: 380, image: LassiImg, description: "Fresh goat cheese with edible lavender" },
    ],
  },
  {
    id: 3,
    name: "Global Breads",
    items: [
      { id: 301, name: "Sourdough Focaccia", price: 120, image: BreadImg, description: "Italian olive oil bread with rosemary" },
      { id: 302, name: "Turkish Simit", price: 90, image: CroissantImg, description: "Sesame-crusted circular bread" },
      { id: 303, name: "Japanese Milk Bread", price: 150, image: MuffinImg, description: "Super-soft, pillowy shokupan" },
      { id: 304, name: "Indian Naan", price: 70, image: BagelImg, description: "Tandoor-baked leavened flatbread" },
      { id: 305, name: "Mexican Concha", price: 80, image: SconeImg, description: "Sweet bread with shell-patterned topping" },
      { id: 306, name: "Swedish Limpa", price: 110, image: DonutImg, description: "Rye bread with orange zest and fennel" },
      { id: 307, name: "Moroccan Khobz", price: 95, image: BaguetteImg, description: "Traditional semolina country bread" },
      { id: 308, name: "Ethiopian Injera", price: 130, image: BriocheImg, description: "Sourdough flatbread with spongy texture" },
    ],
  },
  {
    id: 4,
    name: "Artisan Chocolates & Confections",
    items: [
      {
        id: 401,
        name: "Salted Caramel Truffles",
        price: 320,
        image: ChocolateImg,
        description: "Dark chocolate ganache with sea salt caramel core"
      },
      {
        id: 402,
        name: "Single-Origin Chocolate Bar",
        price: 280,
        image: ChocolateBarImg,
        description: "72% Venezuelan dark chocolate, stone ground"
      },
      {
        id: 403,
        name: "Honeycomb Crunch Brittle",
        price: 190,
        image: BrittleImg,
        description: "Golden honeycomb enrobed in milk chocolate"
      },
      {
        id: 404,
        name: "Pistachio Marzipan Logs",
        price: 240,
        image: MarzipanImg,
        description: "Hand-rolled Sicilian pistachio marzipan"
      },
      {
        id: 405,
        name: "Espresso Bean Clusters",
        price: 210,
        image: CoffeeChocolateImg,
        description: "Dark chocolate covered arabica coffee beans"
      },
      {
        id: 406,
        name: "Raspberry Rose Bonbons",
        price: 260,
        image: BonbonImg,
        description: "White chocolate shells with raspberry-rose filling"
      },
      {
        id: 407,
        name: "Spiced Orange Chocolate Bark",
        price: 180,
        image: BarkImg,
        description: "Dark chocolate with candied orange and cardamom"
      },
      {
        id: 408,
        name: "Tahini Halva Squares",
        price: 220,
        image: HalvaImg,
        description: "Sesame halva with pistachios and dark chocolate"
      },
    ],
  },
];
