import React, { useEffect, useState } from "react";
import { ApiService } from "../services/ApiService";

interface Technician {
  id?: string;
  refId: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNUmber: string;
}

const TechnicianPage: React.FC = () => {
    const api = ApiService();
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });

  // Fetch technicians
  const fetchTechnicians = async () => {
    try {
      setLoading(true);
      const res = await api.get(
        "/technician/list?page_number=0&page_size=100&sort_field=createdAt&sort_order=asc"
      );
      setTechnicians(res.data.data.result);
    } catch (err) {
      console.error("❌ Fetch failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTechnicians();
  }, []);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update technician
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
      await api.post("/technician", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("✅ Technician added");

    fetchTechnicians();
    resetForm();
  } catch (err) {
    console.error("❌ Failed to save technician:", err);
  }
};


  // Delete technician
  const handleDelete = async (id?: string) => {
    if (!id) return;
    try {
      await api.delete("/technician", { params: { id } });
      console.log("✅ Technician deleted");
      fetchTechnicians();
    } catch (err) {
      console.error("❌ Failed to delete technician:", err);
    }
  };



  // Reset form
  const resetForm = () => {
    setForm({ id: "", firstName: "", lastName: "", email: "", contactNumber: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>{"Add Technician"}</h3>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
          style={{ marginBottom: "10px" }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
          style={{ marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ marginBottom: "10px" }}
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Phone"
          value={form.contactNumber}
          onChange={handleChange}
          required
          style={{ marginBottom: "10px" }}
        />
        <button type="submit">{form.id ? "Update Technician" : "Add Technician"}</button>
       
      </form>

      <h2>Technician List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        technicians.map((tech) => (
          <div
            key={tech.id}
            style={{
              marginBottom: "16px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <p><strong>Ref ID:</strong> {tech.refId}</p>
            <p><strong>Name:</strong> {tech.firstName} {tech.lastName}</p>
            <p><strong>Email:</strong> {tech.email}</p>
            <p><strong>Phone:</strong> {tech.contactNUmber}</p>
            <button onClick={() => handleDelete(tech.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TechnicianPage;
