// src/assets/dummyStyles.js
export const adminNavbarStyles = {
  nav: "bg-emerald-800 text-white shadow-lg",
  container: "max-w-6xl mx-auto px-4",
  mainFlex: "flex justify-between items-center h-16",
  logoContainer: "flex items-center",
  logoIconContainer: "bg-white p-2 rounded-lg mr-3",
  logoIcon: "text-emerald-800 text-xl",
  logoText: "text-xl font-bold",
  logoAccent: "text-emerald-300",
  desktopNavLinks: "hidden md:flex space-x-1",
  navLink: ({ isActive }) => 
    `flex items-center px-4 py-2 rounded-lg transition-colors ${
      isActive 
        ? 'bg-emerald-700 text-white' 
        : 'text-emerald-200 hover:bg-emerald-700/50'
    }`,
  mobileMenuButton: "md:hidden flex items-center",
  menuButton: "text-white p-2 rounded-md hover:bg-emerald-700 focus:outline-none",
  mobileMenuContainer: "md:hidden",
  mobileMenuInner: "px-2 pt-2 pb-3 space-y-1",
  mobileNavLink: ({ isActive }) => 
    `flex items-center px-3 py-3 rounded-lg mx-2 transition-colors ${
      isActive 
        ? 'bg-emerald-700 text-white' 
        : 'text-emerald-200 hover:bg-emerald-700/50'
    }`,
};


// src/assets/dummyStyles.js
export const addItemPageStyles = {
  pageContainer: "min-h-screen bg-slate-50 p-4 md:p-8",
  innerContainer: "max-w-4xl mx-auto",
  heading: "text-4xl font-bold text-emerald-800 mb-4",
  form: "bg-white rounded-xl shadow-lg p-6 space-y-6",
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-6",
  priceGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  label: "block mb-1",
  input: "w-full px-4 py-2 border rounded-lg focus:ring-emerald-500",
  textarea: "w-full px-4 py-2 border rounded-lg focus:ring-emerald-500",
  imageUploadContainer: "border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:border-emerald-500 transition",
  previewImage: "w-full h-48 object-contain rounded-lg",
  removeButton: "absolute top-2 right-2 bg-red-500 text-white rounded-full p-1",
  uploadIcon: "mx-auto text-3xl text-gray-400 mb-2",
  uploadText: "text-gray-500",
  hiddenInput: "hidden",
  submitButton: "w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg flex items-center justify-center",
};



// src/assets/dummyStyles.js
export const listItemsPageStyles = {
  pageContainer: "min-h-screen bg-slate-50 p-4 md:p-8",
  innerContainer: "max-w-6xl mx-auto",
  headerContainer: "mb-8",
  headerTitle: "text-3xl md:text-4xl font-bold text-emerald-800 mb-2",
  headerSubtitle: "text-gray-600",
  statsGrid: "grid grid-cols-1 gap-4 mb-8",
  contentContainer: "bg-white rounded-xl shadow-lg p-6",
  headerFlex: "flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4",
  headerTitleSmall: "text-xl font-bold text-emerald-800",
  filterContainer: "flex flex-col sm:flex-row gap-3",
  filterSelectContainer: "relative flex-1",
  filterIconContainer: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
  filterIcon: "text-gray-400",
  filterSelect: "w-full pl-10 pr-8 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none",
  filterSelectArrow: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
  emptyStateContainer: "text-center py-12",
  emptyStateIconContainer: "bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center",
  emptyStateIcon: "text-gray-500 text-2xl",
  emptyStateTitle: "text-lg font-medium text-gray-900 mb-1",
  emptyStateText: "text-gray-500",
  tableContainer: "overflow-x-auto",
  table: "w-full",
  tableHead: "bg-gray-50",
  tableHeaderCell: "py-3 px-4 text-left text-sm font-semibold text-gray-500",
  tableBody: "divide-y divide-gray-200",
  tableRowHover: "hover:bg-gray-50",
  tableDataCell: "py-4 px-4",
  productCell: "flex items-center",
  productImage: "w-10 h-10 object-cover rounded-lg mr-3",
  placeholderImage: "bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3",
  productName: "font-medium text-gray-900",
  productDescription: "text-sm text-gray-500 line-clamp-1",
  categoryText: "text-sm text-gray-500",
  price: "font-medium text-emerald-600",
  oldPrice: "text-xs text-gray-400 line-through",
  actionButtons: "flex space-x-2",
  editButton: "text-gray-500 hover:text-emerald-600",
  deleteButton: "text-gray-500 hover:text-red-600",
  
  // StatsCard styles
  statsCard: (border) => `bg-white rounded-xl shadow p-6 border-l-4 ${border}`,
  statsCardInner: "flex items-center",
  statsCardIconContainer: (color) => `${color} p-3 rounded-full mr-4`,
  statsCardIcon: (color) => `${color.replace('bg-', 'text-')} text-xl`,
  statsCardLabel: "text-gray-500 text-sm",
  statsCardValue: "text-2xl font-bold",
};


// src/assets/dummyStyles.js
export const ordersPageStyles = {
  pageContainer: "min-h-screen bg-slate-50 p-4 md:p-8",
  innerContainer: "max-w-6xl mx-auto",
  headerContainer: "mb-8",
  headerTitle: "text-3xl md:text-4xl font-bold text-emerald-800 mb-2",
  headerSubtitle: "text-gray-600",
  statsGrid: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",
  statsCard: (borderColor) => `bg-white rounded-xl shadow p-6 border-l-4 ${borderColor}`,
  statsCardInner: "flex items-center",
  statsCardIconContainer: (bgColor) => `${bgColor} p-3 rounded-full mr-4`,
  statsCardIcon: (textColor) => `${textColor} text-xl`,
  statsCardLabel: "text-gray-500 text-sm",
  statsCardValue: "text-2xl font-bold",
  contentContainer: "bg-white rounded-xl shadow-lg p-6",
  table: "w-full",
  tableHead: "bg-gray-50",
  tableHeaderCell: "py-3 px-4 text-left text-sm font-semibold text-gray-500",
  tableBody: "divide-y divide-gray-200",
  tableRowHover: "hover:bg-gray-50",
  tableDataCell: "py-4 px-4",
  orderId: "font-medium text-emerald-700",
  emptyStateCell: "py-8 text-center",
  emptyStateContainer: "flex flex-col items-center justify-center",
  emptyStateIcon: "text-gray-400 text-4xl mb-4",
  emptyStateTitle: "text-lg font-medium text-gray-900 mb-1",
  emptyStateText: "text-gray-500",
  statusBadge: (status) => 
    `px-2 py-1 rounded-full text-xs font-medium ${status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' :
      status === 'Processing' || status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
      status === 'Cancelled' ? 'bg-red-100 text-red-800' :
      'bg-amber-100 text-amber-800'}`,
  paymentBadge: (paymentStatus) => 
    `px-2 py-1 rounded-full text-xs font-medium ${paymentStatus === 'Paid' ? 'bg-emerald-100 text-emerald-800' :
      paymentStatus === 'COD' ? 'bg-blue-100 text-blue-800' :
      'bg-red-100 text-red-800'}`,
  actionButtons: "flex space-x-2",
  viewButton: "text-sm bg-emerald-100 hover:bg-emerald-200 text-emerald-700 py-1 px-3 rounded-full transition-colors",
  cancelButton: (isDisabled) => 
    `text-sm bg-red-100 hover:bg-red-200 text-red-700 py-1 px-3 rounded-full transition-colors ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`,
  
  // Modal styles
  modalOverlay: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
  modalContainer: "bg-white rounded-xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto",
  modalHeader: "sticky top-0 bg-white border-b p-6",
  modalHeaderTitle: "text-2xl font-bold text-emerald-800",
  modalHeaderClose: "text-gray-500 hover:text-gray-700",
  modalBody: "p-6",
  modalGrid: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  modalSection: "mb-8",
  modalSectionTitle: "text-lg font-bold text-emerald-800 mb-4 flex items-center",
  modalIcon: "mr-2",
  modalInfoBox: "bg-gray-50 rounded-lg p-4",
  modalNoteBox: "bg-yellow-50 border-l-4 border-yellow-400 p-4",
  modalStatusControl: "grid grid-cols-2 gap-4",
  modalSelect: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",
  modalOrderSummary: "border border-gray-200 rounded-lg",
  modalOrderItem: (index, length) => 
    `flex items-center p-4 ${index !== length - 1 ? 'border-b' : ''}`,
  modalOrderImage: "w-16 h-16 object-cover rounded-lg mr-4",
  modalPlaceholderImage: "bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4",
  modalOrderTotalSection: "p-4 bg-gray-50",
  modalOrderTotalRow: "flex justify-between py-2",
  modalOrderTotalRowLast: "flex justify-between pt-4 mt-2 border-t border-gray-200",
  modalFooter: "sticky bottom-0 bg-white border-t p-6",
  modalFooterButton: "px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",
  modalFooterPrimaryButton: "px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors",
};