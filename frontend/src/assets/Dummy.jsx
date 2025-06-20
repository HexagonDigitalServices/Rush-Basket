import { FiGift, FiHome, FiMail, FiPercent, FiShoppingBag, FiShoppingCart, FiTruck } from "react-icons/fi";
import { bannerStyles } from './dummyStyles'



// BANNER HOME
export const features = [
    { icon: <FiTruck className={bannerStyles.featureIcon} />, text: 'Fast Delivery' },
    { icon: <FiPercent className={bannerStyles.featureIcon} />, text: 'Best Prices' },
    { icon: <FiShoppingCart className={bannerStyles.featureIcon} />, text: 'Easy Returns' },
    { icon: <FiGift className={bannerStyles.featureIcon} />, text: 'Daily Deals' },
];


// NAVBAR
export const navItems = [
    { name: 'Home', path: '/', icon: <FiHome className="text-xl" /> },
    { name: 'Items', path: '/items', icon: <FiShoppingBag className="text-xl" /> },
    { name: 'Contact', path: '/contact', icon: <FiMail className="text-xl" /> },
];