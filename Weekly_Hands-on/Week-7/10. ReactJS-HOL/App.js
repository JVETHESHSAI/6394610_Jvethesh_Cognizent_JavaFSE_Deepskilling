import React from "react";
import OfficeCard from "./components/OfficeCard";

function App() {
  // Object of a single office
  const singleOffice = {
    name: "Central Business Hub",
    rent: 75000,
    address: "123 MG Road, Bangalore",
    image: "https://centralbusinesshub.in/assets/project-status/project-status-28feb.webp",
  };

  // List of office objects
  const officeList = [
    {
      name: "Central Business Hub",
      rent: 75000,
      address: "123 MG Road, Bangalore",
      image: "https://centralbusinesshub.in/assets/project-status/project-status-28feb.webp",
    },
    {
      name: "Startup Plaza",
      rent: 55000,
      address: "45 Residency Road, Bangalore",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu_Z6BSRLp3dWE6KzScTVdKwZmQU3QmCP-4Q&s",
    },
    {
      name: "Tech Tower",
      rent: 90000,
      address: "9 Electronics City, Bangalore",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRJ5o1PjcjMtP5eWAPpHCreUHDAbflgmQtvw&s",
    },
    {
      name: "Green Workspaces",
      rent: 48000,
      address: "77 Indiranagar, Bangalore",
      image: "https://www.theworkspaceconsultants.com/site/assets/files/1724/biofilia-green-spaces-in-the-workplace-01.jpg",
    },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px", fontFamily: "Arial, sans-serif" }}>
      {/* Heading using JSX */}
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1>Office Space Rental App</h1>
        <p>Find the best office space for your team</p>
      </header>

      {/* Display single office object */}
      <section style={{ marginBottom: "32px" }}>
        <h2>Featured Office</h2>
        <OfficeCard office={singleOffice} />
      </section>

      {/* Loop through list of offices */}
      <section>
        <h2>Available Offices</h2>
        {officeList.map((office, idx) => (
          <OfficeCard key={idx} office={office} />
        ))}
      </section>
    </div>
  );
}

export default App;
