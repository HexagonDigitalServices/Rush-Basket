  // Helpers to pull fields from either item.* or item.product.*
  const getItemPrice = item => item.price ?? item.product?.price ?? 0;
  const getItemName  = item => item.name  ?? item.product?.name  ?? 'Unnamed item';
  const getItemImage = item => {
    const path = item.image   ?? item.product?.imageUrl ?? '';
    return path ? `http://localhost:4000${path}` : '';
  };
