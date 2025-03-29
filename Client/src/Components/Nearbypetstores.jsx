import React, { useState } from "react";
import '../Styles/NearbyPetStores.css'; // Import your CSS file for styling


const petStores = [
  {
    name: "Posh Pets",
    type: "Pet Store and Grooming Salon",
    address: "Shop No. 5, Matai Mansion, St. John Baptist Road, Bandra West, Mumbai 400050",
    services: "Pet grooming, boarding, pet foods, accessories",
    operatingHours: "24 hours",
    googleMaps: "https://goo.gl/maps/xyz", // Replace with actual link
    location: "Bandra",
  },
  {
    name: "Tailwaggers Pet Salon",
    type: "Pet Grooming Salon",
    address: "Bandra, Mumbai",
    services: "Professional pet grooming services",
    operatingHours: "Not specified",
    googleMaps: "https://goo.gl/maps/abc", // Replace with actual link
    location: "Bandra",
  },
  {
    name: "Animal Gurukul Pet Shop",
    type: "Pet Shop",
    address: "Shop No. 17, BMC Shopping Centre, Near Galaxy Heights, Off New Link Road, Goregaon West, Mumbai 400104",
    services: "Pet food, accessories",
    operatingHours: "Not specified",
    googleMaps: "https://goo.gl/maps/pqr", // Replace with actual link
    location: "Goregaon",
  },
  {
    name: "Prolife Specialty Vet Clinic",
    type: "Veterinary Clinic, Pet Store, and Grooming Center",
    address: "Shop No. 8–12, Kirit Building, Movie Time Theatre Lane, Evershine Nagar, Malad West, Mumbai",
    services: "Veterinary care, pet store, grooming services",
    operatingHours: "Not specified",
    googleMaps: "https://goo.gl/maps/def", // Replace with actual link
    location: "Malad",
  },
];

const NearbyPetStores = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const filteredStores =
    selectedLocation === "All"
      ? petStores
      : petStores.filter((store) => store.location === selectedLocation);

  return (
    <div>
      <h2>Nearby Pet Stores</h2>
      <label>Filter by Location: </label>
      <select onChange={(e) => setSelectedLocation(e.target.value)}>
        <option value="All">All</option>
        <option value="Bandra">Bandra</option>
        <option value="Goregaon">Goregaon</option>
        <option value="Malad">Malad</option>
      </select>
      <div>
        {filteredStores.map((store, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h3>
              <a href={store.googleMaps} target="_blank" rel="noopener noreferrer">
                {store.name}
              </a>
            </h3>
            <p><strong>Type:</strong> {store.type}</p>
            <p><strong>Address:</strong> {store.address}</p>
            <p><strong>Services:</strong> {store.services}</p>
            <p><strong>Operating Hours:</strong> {store.operatingHours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyPetStores;
