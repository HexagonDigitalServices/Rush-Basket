const initialFormState = {
  name: '',
  description: '',
  category: '',
  oldPrice: '',
  price: '',
  image: null,
  preview: '',
};

const categories = [
  'Fruits',
  'Vegetables',
  'Dairy & Eggs',
  'Meat & Seafood',
  'Bakery',
  'Pantry',
];

    body.append('name', formData.name);
      body.append('description', formData.description);
      body.append('category', formData.category);
      body.append('oldPrice', formData.oldPrice);
      body.append('price', formData.price);
      if (formData.image) {
        body.append('image', formData.image);
      }

      ₹