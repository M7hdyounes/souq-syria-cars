import React, { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import FloatingAddButton from "../components/FloatingAddButton";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Notification from "../components/Notification";
import { db } from "../firebase";
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";

const HomePage = () => {
  const [featuredCars, setFeaturedCars] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "cars"),
      orderBy("createdAt", "desc"),
      limit(30)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const carsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setFeaturedCars(carsData);
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black relative">
      <header className="bg-black text-white py-8 px-4 text-center">
        <h1 className="text-3xl font-bold">Souq Syria Cars</h1>
        <p className="mt-2">سوق السيارات الأول في سوريا</p>
        <img
          src="/banner.jpg"
          alt="Banner"
          className="mx-auto mt-4 max-h-64 object-cover w-full rounded"
        />
      </header>

      <LanguageSwitcher />

      <section className="p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">🚗 السيارات المميزة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>

      <FloatingAddButton />

      {showNotification && (
        <Notification message="📣 تم نشر سيارات جديدة!" />
      )}

      <footer className="bg-gray-800 text-white p-4 mt-8 text-center">
        <p>تم التطوير بإشراف المدير. للتواصل: admin@souqsyriacars.com</p>
      </footer>
    </div>
  );
};

export default HomePage;