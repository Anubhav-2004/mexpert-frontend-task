import "./StoryDetails.css";

const StoryDetails = () => {
  return (
    <div className="page2-wrapper">
      <h1 className="story-title">The Lost City of Future Earth</h1>

      <div className="tab-buttons">
        <button className="tab active">Word Explorer</button>
        <button className="tab">Story Adventure</button>
        <button className="tab">Brain Quest</button>
      </div>

      <p className="instruction-text">
        Drag Pictures to the matching Words, light up correct pairs, shake for a retry
      </p>

      <div className="content-layout">
        <div className="left-panel">
          <h3>Correction <span>(Noun)</span></h3>

          <p className="definition">
            The story is about a city where we assume that a city known as reverville
          </p>

          <div className="image-box">
            <img
              src="https://ik.imagekit.io/dev24/The_Galactic_Time_Travelers_qOkLSv4b3_ymILsz5_a.png"
              alt=""
            />
          </div>

          <div className="meta">
            <p><strong>Synonyms:</strong> hustle, flow, joy, stop forward</p>
            <p><strong>Antonyms:</strong> hustle, flow, joy, stop forward</p>
          </div>

          <div className="nav-arrows">
            <button>‹</button>
            <button>›</button>
          </div>
        </div>

        <div className="right-panel">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="image-card">
              <img
                src="https://ik.imagekit.io/dev24/The_Galactic_Time_Travelers_qOkLSv4b3_ymILsz5_a.png"
                alt=""
              />
              <p>Lorem ipsum dolor is a dummy text that is</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
