import React from "react";
import Card from "../../../components/cards/Card";

const HomePage: React.FC = () => {
  return (
    <>
      {/* Espresso Lovers Section */}
      <div
        className="relative flex flex-col items-center justify-start min-h-screen"
        style={{ backgroundColor: "#C0A874" }}
      >
        <h1
          className="absolute top-20 md:top-28 left-1/2 transform -translate-x-1/2 font-aclonica text-4xl md:text-5xl lg:text-6xl text-center"
          style={{
            color: "#FFF8DB",
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
          }}
        >
          Explore Our Coffees
        </h1>
        <h1
          className="absolute top-40 md:top-56 left-1/2 transform -translate-x-1/2 font-aclonica text-3xl md:text-4xl lg:text-5xl text-center"
          style={{
            color: "#3D1403",
            textShadow: "2px 2px 4px #FFF8DB",
          }}
        >
          For Espresso Lovers!
        </h1>
        <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-12 justify-center mt-48 md:mt-64 lg:mt-80 px-4">
          <Card
            title={["Espresso Shot", "A bold and intense classic, a pure shot."]}
            description="Our signature espresso is crafted from ethically-sourced, finely roasted beans, delivering a rich and concentrated flavor."
            imageUrl="/images/Hot-CoffeeEspresso-Shot.jpg"
          />
          <Card
            title={["Americano", "Smooth and rich, a perfect balance."]}
            description="Our Americano combines a robust espresso shot with hot water, creating a full-bodied flavor that is less intense but equally satisfying."
            imageUrl="/images/cup-flavor-table-black-wood.jpg"
          />
          <Card
            title={["Cappuccino", "Creamy frothy perfection, every time"]}
            description="Our cappuccino is a classic blend of rich espresso, steamed milk, and a generous layer of frothy foam. Whether you enjoy it plain or with a sprinkle of cocoa."
            imageUrl="/images/cappuccino-1933959_1280.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
