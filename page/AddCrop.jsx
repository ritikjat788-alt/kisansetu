
import React, { useState } from "react";
import { Leaf, ArrowLeft, Upload } from "lucide-react";
import { supabase } from "../supabase";

function AddCrop() {
  const [crop, setCrop] = useState({
    name: "",
    category: "",
    quantity: "",
    unit: "kg",
    price: "",
    location: "",
    harvestDate: "",
    description: "",
  });

  const [imageName, setImageName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setCrop({ ...crop, [e.target.name]: e.target.value });
  };


 
const handleImage = (e) => {
  const file = e.target.files?.[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    setMessage("Please select a valid image.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    setMessage("Image size 5 MB se kam honi chahiye.");
    return;
  }

  setImageFile(file);
  setImageName(file.name);
  setMessage("");
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");

if (!imageFile) {
  setSaving(false);
  setMessage("Please crop ki image select karo.");
  return;
}

const fileExt = imageFile.name.split(".").pop();
const filePath = `${Date.now()}-${Math.random()
  .toString(36)
  .slice(2)}.${fileExt}`;

const { error: uploadError } = await supabase.storage
  .from("crop-images")
  .upload(filePath, imageFile, {
    upsert: false,
    contentType: imageFile.type,
  });

if (uploadError) {
  setSaving(false);
  setMessage("Image upload failed: " + uploadError.message);
  return;
}

const { data: imageData } = supabase.storage
  .from("crop-images")
  .getPublicUrl(filePath);

    const row = {
      name: crop.name.trim(),
      category: crop.category,
      quantity: Number(crop.quantity),
      unit: crop.unit,
      price: Number(crop.price),
      location: crop.location.trim(),
      harvest_date: crop.harvestDate || null,
      description: crop.description.trim() || null,
    image_url: imageData.publicUrl,
    };

    const { error } = await supabase
      .from("crops")
      .insert([row]);

    setSaving(false);

    if (error) {
      console.error("Crop save failed:", error);
      setMessage("Crop save nahi hui: " + error.message);
      return;
    }

    setMessage("Crop successfully Supabase mein save ho gayi!");

    setCrop({
      name: "",
      category: "",
      quantity: "",
      unit: "kg",
      price: "",
      location: "",
      harvestDate: "",
      description: "",
    });

    setImageName("");
    setImageFile(null);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f8f4", padding: "30px 20px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "35px", borderRadius: "18px", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: "7px", textDecoration: "none", color: "#2f7d32", marginBottom: "20px", fontWeight: "600" }}>
          <ArrowLeft size={18} /> Back to Home
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <Leaf size={32} color="#2f7d32" />
          <h1 style={{ margin: 0 }}>Add Your Crop</h1>
        </div>

        <p style={{ color: "#666", marginBottom: "30px" }}>
          Apni crop ki details add karein aur buyers tak directly pahunchayein.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Crop Name</label>
          <input name="name" placeholder="Example: Tomato" value={crop.name} onChange={handleChange} required style={inputStyle} />

          <label>Category</label>
          <select name="category" value={crop.category} onChange={handleChange} required style={inputStyle}>
            <option value="">Select Category</option>
            {["Vegetables", "Fruits", "Grains", "Pulses", "Spices", "Other"].map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>

          <label>Quantity</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input name="quantity" type="number" min="1" placeholder="Example: 500" value={crop.quantity} onChange={handleChange} required style={{ ...inputStyle, flex: 1 }} />
            <select name="unit" value={crop.unit} onChange={handleChange} style={{ ...inputStyle, width: "150px" }}>
              <option value="kg">Kg</option>
              <option value="quintal">Quintal</option>
              <option value="ton">Ton</option>
            </select>
          </div>

          <label>Price per {crop.unit}</label>
          <input name="price" type="number" min="0.01" step="0.01" placeholder="Example: 28" value={crop.price} onChange={handleChange} required style={inputStyle} />

          <label>Farm Location</label>
          <input name="location" placeholder="Example: Jaipur, Rajasthan" value={crop.location} onChange={handleChange} required style={inputStyle} />

          <label>Harvest Date</label>
          <input name="harvestDate" type="date" value={crop.harvestDate} onChange={handleChange} style={inputStyle} />

          <label>Crop Description</label>
          <textarea name="description" placeholder="Tell buyers about your crop..." value={crop.description} onChange={handleChange} rows="5" style={{ ...inputStyle, resize: "vertical" }} />

          <label>Crop Image</label>
          <label style={{ display: "flex", alignItems: "center", gap: "10px", border: "2px dashed #b8cdb7", borderRadius: "12px", padding: "20px", cursor: "pointer", marginBottom: "25px", color: "#4d654d" }}>
            <Upload size={22} />
            <span>{imageName || "Click to upload crop image"}</span>
            <input type="file" accept="image/*" onChange={handleImage} style={{ display: "none" }} />
          </label>

          {message && (
            <p role="status" style={{ color: message.startsWith("Crop successfully") ? "#237333" : "#b42318", overflowWrap: "anywhere" }}>
              {message}
            </p>
          )}

          <button disabled={saving} type="submit" style={{ width: "100%", padding: "15px", border: "none", borderRadius: "10px", background: saving ? "#8ca98d" : "#2f7d32", color: "white", fontSize: "17px", fontWeight: "700", cursor: saving ? "wait" : "pointer" }}>
            {saving ? "Saving..." : "🌾 Add Crop"}
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "13px",
  marginTop: "7px",
  marginBottom: "20px",
  border: "1px solid #d5ddd3",
  borderRadius: "9px",
  fontSize: "15px",
  boxSizing: "border-box",
};

export default AddCrop;
