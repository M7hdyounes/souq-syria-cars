import React, { useState, useEffect } from "react";

const dummyCars = [
  {
    id: 1,
    make: "هيونداي",
    model: "أفانتي",
    year: "2020",
    city: "دمشق",
    price: "15000",
    status: "pending",
  },
  {
    id: 2,
    make: "كيا",
    model: "ريو",
    year: "2019",
    city: "حلب",
    price: "12000",
    status: "approved",
  },
];

const dummyComplaints = [
  {
    id: 1,
    name: "أحمد",
    phone: "0999999999",
    adId: "1",
    message: "الإعلان يحتوي على معلومات مضللة.",
  },
];

const AdminDashboard = () => {
  const [cars, setCars] = useState([]);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setCars(dummyCars);
    setComplaints(dummyComplaints);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updatedCars = cars.map((car) =>
      car.id === id ? { ...car, status: newStatus } : car
    );
    setCars(updatedCars);
  };

  const stats = {
    total: cars.length,
    approved: cars.filter((c) => c.status === "approved").length,
    pending: cars.filter((c) => c.status === "pending").length,
    rejected: cars.filter((c) => c.status === "rejected").length,
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">لوحة تحكم المدير</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">إحصائيات</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-100 p-4 rounded">إجمالي السيارات: {stats.total}</div>
          <div className="bg-green-100 p-4 rounded">مقبولة: {stats.approved}</div>
          <div className="bg-yellow-100 p-4 rounded">بانتظار الموافقة: {stats.pending}</div>
          <div className="bg-red-100 p-4 rounded">مرفوضة: {stats.rejected}</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">السيارات المضافة</h2>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">النوع</th>
              <th className="border px-4 py-2">الموديل</th>
              <th className="border px-4 py-2">السنة</th>
              <th className="border px-4 py-2">المدينة</th>
              <th className="border px-4 py-2">السعر</th>
              <th className="border px-4 py-2">الحالة</th>
              <th className="border px-4 py-2">الإجراء</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td className="border px-4 py-2">{car.make}</td>
                <td className="border px-4 py-2">{car.model}</td>
                <td className="border px-4 py-2">{car.year}</td>
                <td className="border px-4 py-2">{car.city}</td>
                <td className="border px-4 py-2">{car.price}</td>
                <td className="border px-4 py-2">{car.status}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleStatusChange(car.id, "approved")}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    قبول
                  </button>
                  <button
                    onClick={() => handleStatusChange(car.id, "rejected")}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    رفض
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">الشكاوى</h2>
        {complaints.length === 0 ? (
          <p>لا توجد شكاوى حالياً.</p>
        ) : (
          <ul className="space-y-4">
            {complaints.map((c) => (
              <li key={c.id} className="border p-4 rounded bg-red-50">
                <p><strong>الاسم:</strong> {c.name}</p>
                <p><strong>رقم الهاتف:</strong> {c.phone}</p>
                <p><strong>رقم الإعلان:</strong> {c.adId}</p>
                <p><strong>الشكوى:</strong> {c.message}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;