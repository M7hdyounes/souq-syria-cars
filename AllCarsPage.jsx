import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import FloatingAddButton from "../components/FloatingAddButton";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const AllCarsPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cars"));
        const carList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCars(carList);
      } catch (error) {
        console.error("حدث خطأ أثناء جلب السيارات:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">جميع السيارات المعروضة</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.length === 0 ? (
          <p className="text-center col-span-full">لا توجد سيارات حالياً</p>
        ) : (
          cars.map((car) => <CarCard key={car.id} car={car} />)
        )}
      </div>

      <FloatingAddButton />
    </div>
  );
};

export default AllCarsPage;