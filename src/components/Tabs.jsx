import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="tab-buttons">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={active === i ? "active" : ""}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {tabs[active].content}
      </div>
    </>
  );
};

export default Tabs;
