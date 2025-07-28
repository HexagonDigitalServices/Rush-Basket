    const id = item._id || item.productId || item.product?._id;
      const productId = item.productId || item.product?._id;
      const name = item.product?.name || item.name || 'Unnamed';
      const price = item.price ?? item.product?.price ?? 0;
      const imageUrl = item.product?.imageUrl || item.imageUrl || '';
