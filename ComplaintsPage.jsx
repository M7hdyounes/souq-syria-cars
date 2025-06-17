import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

const ComplaintsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    adNumber: "",
    complaint: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, adNumber, complaint } = formData;
    if (!name || !phone || !adNumber || !complaint) {
      setStatusMessage("يرجى ملء جميع الحقول.");
      return;
    }

    setSending(true);
    try {
      await addDoc(collection(db, "complaints"), {
        ...formData,
        createdAt: Timestamp.now(),
      });

      setStatusMessage("✅ تم إرسال الشكوى بنجاح، سيتم مراجعتها من قبل الإدارة.");
      setFormData({ name: "", phone: "", adNumber: "", complaint: "" });
    } catch (error) {
      console.error("خطأ في إرسال الشكوى:", error);
      setStatusMessage("❌ حدث خطأ أثناء إرسال الشكوى، يرجى المحاولة لاحقًا.");
    }
    setSending(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">نموذج الشكوى</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold">الاسم الكامل</label>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">رقم الهاتف</label>
          <input
            type="tel"
            name="phone"
            className="w-full border px-3 py-2 rounded"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">رقم الإعلان المشكوك فيه</label>
          <input
            type="text"
            name="adNumber"
            className="w-full border px-3 py-2 rounded"
            value={formData.adNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">نص الشكوى</label>
          <textarea
            name="complaint"
            className="w-full border px-3 py-2 rounded"
            rows="4"
            value={formData.complaint}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded bg-red-600 text-white font-semibold ${
            sending ? "opacity-70" : ""
          }`}
          disabled={sending}
        >
          {sending ? "جاري الإرسال..." : "إرسال الشكوى"}
        </button>
      </form>

      {statusMessage && (
        <div className="mt-4 text-center text-sm text-green-700 font-semibold">
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default ComplaintsPage;