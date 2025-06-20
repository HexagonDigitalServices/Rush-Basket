// assets/dummyStyles.js
export const bannerStyles = {
  backgroundGradient: "absolute inset-0 bg-gradient-to-r from-mint-100 to-seafoam-100 z-0",
  decorativeCircle: "hidden absolute rounded-full",
  tag: "inline-block bg-teal-50 text-teal-800 px-3 py-1 rounded-full mb-3 border border-teal-100",
  heading: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4",
  headingItalic: "font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-teal-700",
  paragraph: "text-sm sm:text-base md:text-lg text-gray-600 mb-6 mx-auto md:mx-0 max-w-md md:max-w-lg",
  form: "relative max-w-md mx-auto md:mx-0 mb-6",
  input: "w-full py-3 sm:py-4 px-4 pr-12 rounded-2xl border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-300 shadow-sm",
  searchButton: "absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors",
  featureIcon: "h-6 w-6",
  featureItem: "bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-2 sm:p-3 flex flex-col items-center shadow-sm border border-teal-50 hover:shadow-md transition-shadow",
  featureText: "text-gray-700 font-medium text-xs sm:text-sm",
  imageContainer: "z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md w-full transform transition-transform duration-500 hover:scale-[1.02]",
  imageInner: "rounded-xl overflow-hidden w-full h-48 sm:h-56 md:h-64 lg:h-[350px] shadow-lg border-4 border-white"
};



// assets/cartStyles.js
export const cartStyles = {
  pageContainer: "min-h-screen bg-black py-12 px-4",
  maxContainer: "container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
  maxContainerLarge: "container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8",
  continueShopping: "inline-flex cursor-pointer items-center text-emerald-300 hover:text-emerald-100 mb-8 text-sm sm:text-base",
  emptyCartContainer: "bg-emerald-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center border border-emerald-700 shadow-2xl",
  emptyCartIcon: "text-emerald-100 text-4xl sm:text-5xl mb-4",
  emptyCartHeading: "text-2xl sm:text-3xl font-bold text-emerald-100 mb-3",
  emptyCartText: "text-emerald-300 mb-6 max-w-md mx-auto text-sm sm:text-base",
  emptyCartButton: "inline-block cursor-pointer bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 hover:scale-[1.03] text-sm sm:text-base",
  headerContainer: "text-center mb-10",
  headerTitle: "text-3xl sm:text-4xl font-bold font-cursive text-emerald-100 mt-8 sm:mt-12",
  clearCartButton: "text-emerald-300 mt-2 cursor-pointer hover:text-red-400 flex justify-center items-center text-sm sm:text-base",
  cartGrid: "grid grid-cols-1 lg:grid-cols-3 gap-8",
  cartItemsSection: "lg:col-span-2",
  cartItemsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6",
  cartItemCard: "bg-emerald-800/30 backdrop-blur-sm rounded-2xl border border-emerald-700 p-5 sm:p-6 flex flex-col items-center shadow-2xl",
  cartItemImageContainer: "w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-emerald-900 flex items-center justify-center mb-4",
  cartItemImage: "object-contain w-12 h-12 sm:w-16 sm:h-16",
  cartItemName: "font-bold text-emerald-50 text-base sm:text-lg mb-2 text-center",
  cartItemPrice: "text-emerald-300 mb-4 text-sm sm:text-base",
  cartItemQuantityContainer: "flex items-center space-x-4 mb-4",
  cartItemQuantityButton: "p-2 cursor-pointer text-emerald-300 hover:text-emerald-100",
  cartItemQuantity: "text-emerald-50 w-6 sm:w-8 text-center",
  cartItemRemoveButton: "flex items-center cursor-pointer text-emerald-300 hover:text-red-400 text-sm sm:text-base",
  orderSummaryCard: "bg-emerald-800/30 backdrop-blur-sm rounded-2xl border border-emerald-700 p-5 sm:p-6 shadow-2xl",
  orderSummaryTitle: "text-lg sm:text-xl font-bold text-emerald-100 mb-6",
  orderSummaryRow: "flex justify-between",
  orderSummaryLabel: "text-emerald-300",
  orderSummaryValue: "text-emerald-50",
  orderSummaryDivider: "h-px bg-emerald-700 my-4",
  orderSummaryTotalRow: "flex justify-between text-base sm:text-lg font-bold",
  orderSummaryTotalLabel: "text-emerald-100",
  orderSummaryTotalValue: "text-emerald-50",
  checkoutButton: "mt-6 sm:mt-8 w-full bg-emerald-400 hover:bg-emerald-300 text-black font-bold py-3 sm:py-4 cursor-pointer rounded-xl transition-all duration-300 text-sm sm:text-base",
  continueShoppingBottom: "mt-4 sm:mt-6 text-center"
};

// assets/contactStyles.js
const contactStyles = {
  pageContainer: "min-h-screen bg-gradient-to-br from-emerald-900 to-green-900 flex items-center justify-center py-12 px-4 sm:px-6 relative overflow-hidden",
  toast: "fixed top-17 right-6 bg-green-600 text-black inline-flex items-center px-4 py-2 rounded-lg shadow-lg z-50 whitespace-nowrap hover:opacity-90 transition-opacity duration-200",
  centeredContainer: "w-full max-w-md z-10",
  headingContainer: "flex flex-col items-center justify-center mt-15",
  heading: "text-4xl sm:text-5xl font-semibold text-center text-emerald-100 whitespace-nowrap",
  divider: "w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-300 rounded-full mt-4",
  contactFormContainer: "contact-form-container relative overflow-hidden",
  form: "space-y-6 relative z-10",
  formField: "form-field",
  inputContainer: "relative",
  inputIconContainer: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  inputIcon: "h-5 w-5 text-emerald-400",
  textareaIconContainer: "absolute top-3 left-3",
  formInput: "form-input",
  formTextarea: "form-textarea",
  submitButton: "submit-button",
  submitButtonText: "font-semibold text-xl text-black mr-2",
  customCSS: `@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@400;600&display=swap');
  
  .font-cursive {
    font-family: 'Dancing Script', cursive;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }
  
  .contact-form-container {
    background: rgba(5, 46, 22, 0.6);
    backdrop-filter: blur(8px);
    border-radius: 20px;
    box-shadow: 
      0 10px 25px rgba(0,0,0,0.4),
      inset 0 0 0 1px rgba(52, 211, 153, 0.2);
    padding: 30px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .contact-form-container:hover {
    box-shadow: 
      0 15px 35px rgba(0,0,0,0.5),
      inset 0 0 0 1px rgba(52, 211, 153, 0.3);
  }
  
  .form-field {
    position: relative;
    transition: all 0.3s ease;
  }
  
  .form-field:hover {
    transform: translateY(-2px);
  }
  
  .form-input, .form-textarea {
    width: 100%;
    padding: 15px 15px 15px 45px;
    border: 1px solid rgba(52, 211, 153, 0.2);
    border-radius: 12px;
    font-size: 16px;
    transition: all 0.3s ease;
    background: rgba(6, 78, 59, 0.4);
    font-family: 'Poppins', sans-serif;
    color: #d1fae5;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
  }
  
  .form-input::placeholder, .form-textarea::placeholder {
    color: #a7f3d0;
    opacity: 0.7;
  }
  
  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: #34d399;
    box-shadow: 
      0 0 0 3px rgba(52, 211, 153, 0.25),
      inset 0 2px 4px rgba(0,0,0,0.2);
    background: rgba(6, 78, 59, 0.6);
  }
  
  .form-textarea {
    min-height: 150px;
    padding-left: 45px;
  }
  
  .submit-button {
    width: 100%;
    background: linear-gradient(to right, #10b981, #34d399);
    color: white;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(5, 150, 105, 0.2);
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
  }
  
  .submit-button::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -60%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.4) 50%,
      rgba(255,255,255,0) 100%
    );
    transform: rotate(30deg);
    transition: all 0.6s ease;
  }
  
  .submit-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(5, 150, 105, 0.3);
    background: linear-gradient(to right, #059669, #10b981);
  }
  
  .submit-button:hover::after {
    left: 120%;
  }
  
  .submit-button:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(5, 150, 105, 0.2);
  }`
};

export default contactStyles;


// assets/footerStyles.js
export const footerStyles = {
  footer: "bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white pt-12 pb-8 relative overflow-hidden border-t-8 border-emerald-500",
  topBorder: "hidden md:block absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-emerald-400 z-20",
  floatingShape: "hidden lg:block absolute rounded-full bg-emerald-700 animate-pulse-slow",
  pattern: "absolute inset-0 opacity-5",
  container: "container mx-auto px-4 relative z-10",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
  brandTitle: "text-2xl sm:text-3xl font-bold tracking-wider mb-4",
  brandSpan: "text-emerald-300",
  brandText: "text-emerald-200 mb-6 leading-relaxed text-sm sm:text-base",
  socialLink: "bg-emerald-700 hover:bg-emerald-600 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform transform hover:-translate-y-1 shadow-md",
  socialIcon: "text-emerald-100 hover:text-white",
  sectionTitle: "text-xl sm:text-2xl font-bold mb-4 pb-2 border-b-2 border-emerald-500 inline-flex items-center",
  sectionIcon: "mr-2 text-emerald-400",
  linkList: "space-y-2 text-sm sm:text-base",
  linkItem: "flex items-center group hover:text-white",
  linkBullet: "inline-block w-2 h-2 bg-emerald-400 rounded-full mr-3 group-hover:bg-white transition-colors",
  contactItem: "flex items-start",
  contactIconContainer: "mt-1 bg-emerald-700 p-2 rounded-lg mr-3",
  contactIcon: "text-emerald-300",
  newsletterText: "text-emerald-200 mb-4 text-sm sm:text-base",
  newsletterForm: "flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4",
  newsletterInput: "w-full sm:flex-1 bg-emerald-800 border-2 border-emerald-600 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none px-4 py-2 text-white placeholder-emerald-300 focus:outline-none focus:border-emerald-400 mb-2 sm:mb-0",
  newsletterButton: "w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-400 hover:to-emerald-600 px-4 py-2 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none flex items-center justify-center transition-transform transform hover:-translate-y-1",
  privacyText: "text-emerald-300 text-xs sm:text-sm",
  paymentSection: "border-t-2 border-emerald-800 pt-6",
  paymentTitle: "text-emerald-300 mb-4 font-medium flex items-center justify-center text-sm sm:text-base",
  paymentIcon: "mr-2 text-emerald-400 text-lg",
  paymentMethods: "flex flex-wrap justify-center gap-4",
  paymentItem: "bg-emerald-800 p-3 rounded-lg hover:bg-emerald-700 transition-transform transform hover:-translate-y-1",
  paymentIcon: "text-2xl hover:text-white",
  attribution: "mt-8 text-center",
  attributionBadge: "inline-flex items-center bg-emerald-900 px-6 py-3 rounded-full border border-emerald-700 shadow-lg",
  hexagonContainer: "relative mr-3",
  hexagon: "w-6 h-6 bg-emerald-500 rounded-sm transform rotate-45",
  hexagonInner: "absolute inset-0 flex items-center justify-center",
  hexagonInnerShape: "w-3 h-3 bg-white transform -rotate-45",
  attributionText: "text-emerald-200 text-sm sm:text-base",
  attributionLink: "font-bold text-white underline hover:text-purple-400",
  customCSS: `@keyframes pulse {
    0% { opacity: 0.1; transform: scale(1); }
    50% { opacity: 0.2; transform: scale(1.05); }
    100% { opacity: 0.1; transform: scale(1); }
  }
  @keyframes pulse-slow {
    0% { opacity: 0.1; }
    50% { opacity: 0.2; }
    100% { opacity: 0.1; }
  }
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
  .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
  .animate-pulse { animation: pulse 4s ease-in-out infinite; }
  .animate-float { animation: float 8s ease-in-out infinite; }
  .animation-delay-1000 { animation-delay: 1s; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-3000 { animation-delay: 3s; }`
};

// assets/itemsPageStyles.js
export const itemsPageStyles = {
  // Page styles
  page: "min-h-screen bg-gradient-to-br from-emerald-900 to-emerald-950",
  container: "container mx-auto px-4 py-8",
  header: "mb-12 text-center py-8 relative",
  backLink: "absolute top-5 left-0 flex items-center text-emerald-300 hover:text-emerald-100 cursor-pointer transition-colors",
  mainTitle: "text-5xl font-bold text-emerald-100 mt-7",
  titleSpan: "text-emerald-400 font-playfair",
  subtitle: "text-emerald-300 mt-4 max-w-2xl mx-auto text-lg",
  titleDivider: "mt-8 flex justify-center",
  dividerLine: "w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full",
  searchContainer: "mb-10 max-w-2xl mx-auto",
  searchForm: "relative",
  searchInput: "w-full py-3 px-4 pr-12 rounded-2xl bg-emerald-800 text-emerald-100 border border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner",
  searchButton: "absolute right-2 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-full",
  expandButton: "flex items-center bg-emerald-800 hover:bg-emerald-700 cursor-pointer text-emerald-200 py-3 px-6 rounded-full transition-all shadow-lg shadow-emerald-950 hover:shadow-emerald-900/50",
  categorySection: "mb-16",
  categoryHeader: "flex items-center mb-8",
  categoryIcon: "w-3 h-8 bg-emerald-400 rounded-full mr-3",
  categoryTitle: "text-3xl font-bold text-emerald-100",
  categoryDivider: "ml-4 flex-1 h-px bg-gradient-to-r from-emerald-700 to-transparent",
  productsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8",
  showMoreButton: "flex items-center bg-emerald-600 hover:bg-emerald-500 text-black py-3 px-6 rounded-full transition-all shadow-lg cursor-pointer shadow-emerald-950 hover:shadow-emerald-900/50",
  noProductsContainer: "text-center py-16",
  noProductsCard: "bg-emerald-800 p-8 rounded-2xl max-w-md mx-auto",
  noProductsIcon: "text-emerald-400 mb-4",
  noProductsTitle: "text-xl font-bold text-emerald-100 mb-2",
  noProductsText: "text-emerald-300 mb-6",
  clearSearchButton: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white cursor-pointer px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-colors",
  
  // ProductCard styles
  productCard: "bg-emerald-900 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-950 hover:shadow-emerald-900/50 transition-all duration-300 hover:-translate-y-1 border-2 border-emerald-700",
  imageContainer: "h-48 relative overflow-hidden bg-emerald-950 flex items-center justify-center",
  productImage: "object-contain w-full h-full transition-transform duration-500",
  cardContent: "p-5",
  titleContainer: "flex justify-between items-start",
  productTitle: "font-bold text-emerald-50 text-lg truncate max-w-[70%]",
  organicTag: "text-black text-sm bg-emerald-400 px-2 py-1 rounded-full",
  productDescription: "mt-2 text-emerald-200 text-sm h-12 overflow-hidden",
  priceContainer: "mt-4 flex justify-between items-center",
  currentPrice: "text-emerald-50 font-bold text-xl",
  oldPrice: "text-emerald-300 line-through text-sm",
  quantityControls: "flex items-center justify-between bg-emerald-400 text-black rounded-full",
  quantityButton: "p-3 cursor-pointer hover:bg-emerald-300 transition-colors",
  quantityButtonLeft: "rounded-l-full",
  quantityButtonRight: "rounded-r-full",
  quantityValue: "font-bold",
  addButton: "w-full bg-emerald-400 hover:bg-emerald-300 text-black cursor-pointer py-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-[1.02] group font-bold shadow-lg shadow-emerald-900/20",
  addButtonArrow: "ml-2 text-xl transform group-hover:translate-x-1 transition-transform"
};

// assets/itemsHomeStyles.js
export const itemsHomeStyles = {
  page: "flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100",
  sidebar: "hidden lg:flex w-64 rounded-r-3xl bg-gradient-to-b from-emerald-600 to-emerald-800 text-white p-4 shadow-2xl flex-col",
  sidebarHeader: "text-center mb-8 mt-4",
  sidebarTitle: "text-4xl font-bold tracking-tighter",
  sidebarDivider: "w-32 h-1 bg-emerald-400 mx-auto mt-2 rounded-full",
  categoryList: "flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-emerald-700",
  categoryItem: "w-full cursor-pointer flex items-center p-4 rounded-xl transition-transform transform hover:scale-105",
  categoryIcon: "bg-emerald-500 p-3 rounded-full",
  categoryName: "ml-4 text-lg",
  mainContent: "flex-1 p-6 overflow-y-auto",
  mobileCategories: "lg:hidden mb-6 overflow-x-auto",
  mobileCategoryItem: "whitespace-nowrap px-4 py-2 rounded-full border-2 transition-colors",
  searchResults: "text-center mb-6 bg-white rounded-xl p-4 shadow-sm max-w-2xl mx-auto",
  sectionTitle: "text-3xl font-bold text-emerald-700 capitalize mb-2",
  sectionDivider: "w-32 h-1 bg-emerald-500 mx-auto rounded-full mb-6",
  productsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10",
  productCard: "bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 border border-gray-100 transform hover:-translate-y-1",
  imageContainer: "w-full h-40 sm:h-52 bg-gray-100 flex items-center justify-center",
  productImage: "max-h-full object-cover transition-transform duration-300",
  productContent: "p-5",
  productTitle: "font-bold text-lg text-gray-800 text-center mb-2 line-clamp-1",
  priceContainer: "flex justify-between items-center mt-4",
  currentPrice: "text-emerald-600 font-bold text-xl",
  oldPrice: "text-gray-500 text-sm line-through",
  addButton: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white cursor-pointer px-4 py-2 rounded-full flex items-center transition-shadow shadow-md hover:shadow-lg",
  quantityControls: "flex items-center space-x-2",
  quantityButton: "p-2 cursor-pointer bg-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-200",
  noProducts: "col-span-full text-center py-12",
  noProductsText: "text-emerald-600 font-medium text-xl mb-4",
  clearSearchButton: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white cursor-pointer px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-colors",
  viewAllButton: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white cursor-pointer px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-transform duration-300 inline-flex items-center text-lg",
  activeCategory: "bg-white text-emerald-700 font-bold shadow-lg",
  inactiveCategory: "bg-emerald-700 hover:bg-emerald-500",
  activeMobileCategory: "bg-emerald-600 text-white border-emerald-600",
  inactiveMobileCategory: "bg-white text-emerald-700 border-emerald-300"
};

// assets/loginStyles.js
export const loginStyles = {
  page: "relative w-full h-screen bg-black flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-4",
  backLink: "absolute top-4 left-4 mt-19 flex items-center text-white hover:text-emerald-400 z-20",
  toast: "fixed top-16 right-6 bg-green-600 text-black inline-flex items-center px-4 py-2 rounded-lg shadow-lg z-50",
  loginCard: "mt-29 md:mt-24 lg:mt-0 sm:max-w-xs md:max-w-md lg:max-w-sm bg-gray-900 bg-opacity-80 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-6 rounded-2xl border border-green-700/30 shadow-lg flex-shrink-0",
  logoContainer: "flex justify-center mb-6",
  logoOuter: "w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg",
  logoInner: "w-12 h-12 sm:w-16 sm:h-16 bg-emerald-800 rounded-full flex items-center justify-center",
  logoIcon: "text-xl sm:text-3xl text-emerald-400",
  title: "text-center text-lg sm:text-xl font-semibold text-white mb-4",
  form: "space-y-4",
  inputContainer: "relative",
  inputIcon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
  input: "w-full pl-10 pr-3 py-2.5 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
  passwordInput: "w-full pl-10 pr-10 py-2.5 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
  toggleButton: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",
  rememberContainer: "flex items-center justify-between text-sm",
  rememberLabel: "flex items-center text-white",
  rememberCheckbox: "mr-2 h-4 w-4 cursor-pointer text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-green-500",
  forgotLink: "text-green-400 hover:underline",
  error: "text-xs text-red-500",
  submitButton: "w-full py-2.5 bg-green-500 hover:bg-green-600 text-black font-medium rounded-lg transition",
  signupText: "text-center text-sm text-white mt-6",
  signupLink: "text-green-400 hover:underline"
};

// assets/navbarStyles.js
export const navbarStyles = {
  nav: "fixed w-full z-50 transition-all duration-500",
  scrolledNav: "bg-black/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-16",
  unscrolledNav: "bg-gradient-to-r from-black/80 via-slate-900/80 to-black/80 backdrop-blur-lg h-20",
  borderGradient: "absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent",
  particlesContainer: "absolute inset-0 overflow-hidden pointer-events-none",
  particle: "absolute rounded-full",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  innerContainer: "flex justify-between items-center h-20",
  logoLink: "flex items-center space-x-3 group transition-transform duration-300 hover:scale-[1.02]",
  logoImage: "transition-all duration-500",
  logoText: "text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300 tracking-tight",
  desktopNav: "hidden lg:flex items-center space-x-8",
  navItem: "relative font-medium flex flex-col items-center py-2 transition-all duration-300 group",
  activeNavItem: "text-green-300",
  inactiveNavItem: "text-slate-300 hover:text-green-200",
  navIcon: "mr-2 transition-transform",
  activeNavIcon: "scale-125",
  inactiveNavIcon: "group-hover:scale-110",
  navIndicator: "absolute -bottom-1 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-500",
  activeIndicator: "w-full opacity-100",
  inactiveIndicator: "w-0 opacity-0 group-hover:w-full group-hover:opacity-100",
  iconsContainer: "flex items-center space-x-5",
  loginLink: "hidden lg:inline-flex p-2.5 rounded-full hover:bg-slate-700/50 transition-colors group",
  loginIcon: "h-5 w-5 text-slate-300 group-hover:text-green-300 transition-colors",
  cartLink: "relative p-2.5 rounded-full hover:bg-slate-700/50 transition-colors",
  cartIcon: "h-5 w-5 text-slate-300 hover:text-green-200 transition-transform",
  cartBadge: "absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-green-500 rounded-full transform transition-transform duration-300 hover:scale-110",
  hamburgerButton: "lg:hidden ml-2 p-2 rounded-full text-slate-300 hover:bg-gray-700 transition-colors",
  mobileOverlay: "lg:hidden fixed inset-0 z-40 transition-all duration-500",
  mobilePanel: "absolute top-0 right-0 h-full w-4/5 max-w-xs bg-gradient-to-b from-gray-900 via-slate-900 to-black backdrop-blur-xl shadow-2xl transform transition-transform duration-500 ease-in-out",
  mobileHeader: "flex items-center justify-between p-5 border-b border-slate-800",
  mobileLogo: "flex items-center space-x-2",
  mobileLogoImage: "h-10 w-10",
  mobileLogoText: "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300",
  closeButton: "p-2 rounded-full transition-colors hover:bg-slate-800",
  mobileItemsContainer: "p-4 space-y-2",
  mobileItem: "flex items-center bg-gradient-to-r from-black/80 via-slate-900/80 to-black/80 p-4 rounded-xl transition-all duration-300 hover:bg-slate-800/60 text-slate-200 hover:text-green-300",
  mobileItemIcon: "mr-3 text-lg",
  mobileItemText: "text-lg",
  mobileButtons: "pt-4 mt-4 grid grid-cols-2 gap-3 border-t border-slate-800",
  loginButton: "col-span-2 flex items-center justify-center p-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 group",
  loginButtonIcon: "mr-2 transform group-hover:scale-110 transition-transform",
  floatAnimation: "animate-float",
  floatSlowAnimation: "animate-float-slow",
  floatSlowerAnimation: "animate-float-slower",
  customCSS: `@keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
  .animate-float { animation: float 8s ease-in-out infinite; }
  .animate-float-slow { animation: float 12s ease-in-out infinite; }
  .animate-float-slower { animation: float 16s ease-in-out infinite; }`
};

// assets/signupStyles.js
export const signupStyles = {
  page: "relative w-full h-screen bg-black flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-4",
  backLink: "absolute top-4 left-4 mt-19 flex items-center text-white hover:text-emerald-400 z-20",
  toast: "fixed top-16 right-6 bg-green-600 text-black inline-flex items-center px-4 py-2 rounded-lg shadow-lg z-50",
  signupCard: "mt-29 md:mt-24 lg:mt-10 sm:max-w-xs md:max-w-md lg:max-w-sm bg-gray-900 bg-opacity-80 backdrop-blur-sm p-6 sm:p-8 md:p-10 lg:p-6 rounded-2xl border border-green-700/30 shadow-lg flex-shrink-0",
  logoContainer: "flex justify-center mb-6",
  logoOuter: "w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shadow-lg",
  logoInner: "w-12 h-12 sm:w-16 sm:h-16 bg-emerald-800 rounded-full flex items-center justify-center",
  logoIcon: "text-xl sm:text-3xl text-emerald-400",
  title: "text-center text-lg sm:text-xl font-semibold text-white mb-4",
  form: "space-y-4",
  inputContainer: "relative",
  inputIcon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",
  input: "w-full pl-10 pr-3 py-2.5 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
  passwordInput: "w-full pl-10 pr-10 py-2.5 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
  toggleButton: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400",
  error: "text-xs text-red-500 mt-1",
  termsContainer: "flex items-center text-sm",
  termsLabel: "flex items-center text-white",
  termsCheckbox: "mr-2 h-4 w-4 cursor-pointer text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-green-500",
  submitButton: "w-full py-2.5 bg-green-500 hover:bg-green-600 text-black font-medium rounded-lg transition",
  signinText: "text-center text-sm text-white mt-6",
  signinLink: "text-green-400 hover:underline"
};

