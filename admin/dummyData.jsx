const initialOrders = [
  {
    id: 'ORD-1001',
    customer: {
      name: 'Raj Sharma',
      email: 'raj.sharma@example.com',
      phone: '+91 9876543210',
      address: '123 Main St, Mumbai, Maharashtra 400001'
    },
    items: [
      { id: 'P-101', name: 'Organic Apples', price: 149, quantity: 2, image: null },
      { id: 'P-203', name: 'Fresh Broccoli', price: 79, quantity: 1, image: null },
      { id: 'P-305', name: 'Free Range Eggs', price: 199, quantity: 1, image: null }
    ],
    date: '2023-06-15',
    total: 149*2 + 79 + 199,
    status: 'Processing',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    deliveryDate: '2023-06-17',
    notes: 'Leave at door if not home'
  },
  {
    id: 'ORD-1002',
    customer: {
      name: 'Priya Patel',
      email: 'priya.patel@example.com',
      phone: '+91 8765432109',
      address: '456 Oak Ave, Delhi 110001'
    },
    items: [
      { id: 'P-401', name: 'Whole Wheat Bread', price: 89, quantity: 1, image: null },
      { id: 'P-502', name: 'Organic Milk', price: 65, quantity: 3, image: null }
    ],
    date: '2023-06-14',
    total: 89 + 65*3,
    status: 'Pending',
    paymentStatus: 'Unpaid',
    paymentMethod: 'Online',
    deliveryDate: '2023-06-16',
    notes: 'Call before delivery'
  },
{
  "id": "ORD-1003",
  "customer": {
    "name": "Vikram Singh",
    "email": "vikram.singh@example.com",
    "phone": "+91 7654321098",
    "address": "789 Pine Rd, Bangalore 560001"
  },
  "items": [
    {
      "id": "P-105",
      "name": "Organic Bananas",
      "price": 49,
      "quantity": 5,
      "image": null
    },
    {
      "id": "P-208",
      "name": "Fresh Spinach",
      "price": 39,
      "quantity": 2,
      "image": null
    },
    {
      "id": "P-310",
      "name": "Greek Yogurt",
      "price": 129,
      "quantity": 2,
      "image": null
    }
  ],
  "date": "2023-06-13",
  "total": 581,
  "status": "Delivered",
  "paymentStatus": "Paid",
  "paymentMethod": "COD",
  "deliveryDate": "2023-06-15",
  "notes": ""
}

];
  export default initialOrders;