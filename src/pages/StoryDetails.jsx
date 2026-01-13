import "./StoryDetails.css";

const StoryDetails = () => {
  return (
    <div className="page2-root">
      <div className="page2-header">
        <h1>The Lost City of Future Earth</h1>

        <div className="page2-tabs">
          <button className="active">Word Explorer</button>
          <button>Story Adventure</button>
          <button>Brain Quest</button>
        </div>

        <p className="page2-subtext">
          Drag Pictures to the matching Words, light up correct pairs, shake for a retry
        </p>
      </div>

      <div className="page2-content">
        <div className="page2-left">
          <h3>
            Correction <span>(Noun)</span>
          </h3>

          <p className="definition">
            The story is about a city where we assume that a city known as reverville
          </p>

          <img
            src="https://ik.imagekit.io/dev24/The_Galactic_Time_Travelers_qOkLSv4b3_ymILsz5_a.png"
            alt=""
          />

          <div className="meta">
            <p><strong>Synonyms:</strong> hustle, flow, joy, stop forward</p>
            <p><strong>Antonyms:</strong> hustle, flow, joy, stop forward</p>
          </div>

          <div className="arrows">
            <button>‹</button>
            <button>›</button>
          </div>
        </div>

        <div className="page2-right">
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="image-box" key={i}>
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
