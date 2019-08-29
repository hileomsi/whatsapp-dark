import { useState, useCallback } from 'react';


export default defaultFormData => {
  const [formData, setFormData] = useState(defaultFormData);
  const setInput = useCallback((field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  }, [formData]);

  return [formData, setInput, setFormData];
};