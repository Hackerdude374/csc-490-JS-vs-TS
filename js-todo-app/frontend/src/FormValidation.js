import React, { useState } from 'react';

const FormValidation = () => {
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (isNaN(formData.age) || formData.age < 0) newErrors.age = 'Age must be a positive number';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold mb-2">JavaScript Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        <input
          type="text"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        {errors.age && <p className="text-red-500">{errors.age}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;