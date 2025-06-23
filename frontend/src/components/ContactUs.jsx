  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  // Replace with your WhatsApp number (with country code, no '+' or dashes)
  const whatsappNumber = '';

    // Build WhatsApp message
    const text = 
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Subject: ${subject}\n` +
      `Message: ${message}`;

    // Open WhatsApp Web with pre-filled message
    const url = 
      `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
