import React, { useEffect, useState } from "react";
import api from "../services/ApiService";
import ApiService from "../services/ApiService";

interface Technician {
  id?: string;
  refId: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNUmber: string;
}

const TechnicianPage: React.FC = () => {
  const [technicians, setTechnicians] = useState<Technician[]>([]);
  const [loading, setLoading] = useState(false);

  // Single state for form
  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNUmber: "",
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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add or Update technician
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstName", form.firstName);
      formData.append("lastName", form.lastName);
      formData.append("email", form.email);
      formData.append("contactNumber", form.contactNUmber);


        // Add technician
        await ApiService.post("/technician", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log("✅ Technician added");
 

      fetchTechnicians();
      resetForm();
    } catch (err) {
      console.error("❌ Failed to save technician:", err);
    }
  };



  // Reset form
  const resetForm = () => {
    setForm({ id: "", firstName: "", lastName: "", email: "", contactNUmber: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Add/Edit Technician Form */}
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
          name="contactNUmber"
          placeholder="Phone"
          value={form.contactNUmber}
          onChange={handleChange}
          required
          style={{ marginBottom: "10px" }}
        />
        <button type="submit">
          { "Add Technician"}
        </button>
      
      </form>

      {/* Technician List */}
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
            <p>
              <strong>Ref ID:</strong> {tech.refId}
            </p>
            <p>
              <strong>Name:</strong> {tech.firstName} {tech.lastName}
            </p>
            <p>
              <strong>Email:</strong> {tech.email}
            </p>
            <p>
              <strong>Phone:</strong> {tech.contactNUmber}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default TechnicianPage;
