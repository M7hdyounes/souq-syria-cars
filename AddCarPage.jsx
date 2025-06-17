import React, { useState } from "react";
import Notification from "../components/Notification";

const initialForm = {
  make: "",
  model: "",
  year: "",
  fuel: "",
  transmission: "",
  color: "",
  mileage: "",
  price: "",
  city: "",
  condition: "",
  description: "",
  hasAccidents: "",
  images: [],
};

const AddCarPage = () => {
  const [form, setForm] = useState(initialForm);
  const [notification, setNotification] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((prev) => ({ ...prev, images: Array.from(files) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من جميع الحقول
    for (let key in form) {
      if (key !== "images" && form[key].trim() === "") {
        setNotification({ message: "يرجى تعبئة جميع الحقول", type: "error" });
        return;
      }
    }

    // يمكن هنا إرسال البيانات إلى Firebase أو API
    setIsSubmitting(true);
    setTimeout(() => {
      setNotification({ message: "تم إرسال السيارة بنجاح!", type: "success" });
      setForm(initialForm);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">إضافة سيارة جديدة</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="make" placeholder="نوع السيارة" value={form.make} onChange={handleChange} required className="input" />
        <input name="model" placeholder="الموديل" value={form.model} onChange={handleChange} required className="input" />
        <input name="year" placeholder="سنة الصنع" value={form.year} onChange={handleChange} required className="input" />
        <input name="fuel" placeholder="نوع الوقود" value={form.fuel} onChange={handleChange} required className="input" />
        <input name="transmission" placeholder="ناقل الحركة" value={form.transmission} onChange={handleChange} required className="input" />
        <input name="color" placeholder="اللون" value={form.color} onChange={handleChange} required className="input" />
        <input name="mileage" placeholder="عدد الكيلومترات" value={form.mileage} onChange={handleChange} required className="input" />
        <input name="price" placeholder="السعر" value={form.price} onChange={handleChange} required className="input" />
        <input name="city" placeholder="المدينة" value={form.city} onChange={handleChange} required className="input" />
        <input name="condition" placeholder="حالة السيارة" value={form.condition} onChange={handleChange} required className="input" />
        <select name="hasAccidents" value={form.hasAccidents} onChange={handleChange} className="input" required>
          <option value="">هل تعرضت لحوادث؟</option>
          <option value="no">لا</option>
          <option value="yes">نعم</option>
        </select>
        <input type="file" name="images" onChange={handleChange} multiple className="input" />
        <textarea name="description" placeholder="وصف إضافي" value={form.description} onChange={handleChange} className="input md:col-span-2" required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md md:col-span-2" disabled={isSubmitting}>
          {isSubmitting ? "يتم الإرسال..." : "إرسال السيارة"}
        </button>
      </form>

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default AddCarPage;