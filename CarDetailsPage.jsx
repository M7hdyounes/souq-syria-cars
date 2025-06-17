import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const docRef = doc(db, "cars", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setCar({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("لا توجد بيانات لهذه السيارة.");
        }
        setLoading(false);
      } catch (error) {
        console.error("خطأ أثناء جلب تفاصيل السيارة:", error);
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) return <div className="text-center mt-10">جاري التحميل...</div>;

  if (!car) return <div className="text-center mt-10">السيارة غير موجودة</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{car.make} {car.model} - {car.year}</h1>

      {/* عرض الشرائح للصور */}
      <div className="mb-6">
        {car.images && car.images.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {car.images.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`صورة ${idx + 1}`}
                className="w-full h-40 object-cover rounded"
              />
            ))}
          </div>
        ) : (
          <p>لا توجد صور متاحة</p>
        )}
      </div>

      {/* المواصفات */}
      <div className="space-y-2">
        <p><strong>المدينة:</strong> {car.city}</p>
        <p><strong>عدد الكيلومترات:</strong> {car.kilometers}</p>
        <p><strong>نوع الوقود:</strong> {car.fuelType}</p>
        <p><strong>ناقل الحركة:</strong> {car.transmission}</p>
        <p><strong>اللون:</strong> {car.color}</p>
        <p><strong>السعر:</strong> {car.price} $</p>
        <p><strong>الحالة:</strong> {car.condition}</p>
        <p><strong>الوصف الإضافي:</strong> {car.description}</p>
        <p><strong>تمت الموافقة:</strong> {car.approved ? "نعم" : "لم تتم بعد"}</p>
      </div>

      {/* منع عرض رقم الهاتف */}
      <div className="mt-6 p-4 bg-yellow-100 text-yellow-800 rounded shadow">
        رقم الهاتف محفوظ لدى الإدارة ولا يظهر لأحد.
      </div>

      {/* السيارات المشابهة (مكان مخصص مستقبلاً) */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-2">🚗 سيارات مشابهة (لاحقًا)</h2>
        <p>سيتم عرض السيارات المشابهة لاحقًا في هذا القسم.</p>
      </div>
    </div>
  );
};

export default CarDetailsPage;