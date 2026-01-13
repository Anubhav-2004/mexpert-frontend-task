import { mockStories } from "../data/mockStories";
import { useNavigate } from "react-router-dom";
import "./StoriesList.css";

const StoriesList = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="stories-hero">
        <h1>Science Fiction Stories</h1>

        <div className="story-filters">
          <button className="filter active">New</button>
          <button className="filter">In Progress</button>
          <button className="filter">Completed</button>
          <button className="filter clear">Clear All</button>
        </div>
      </section>

      <section className="stories-container">
        <div className="stories-grid">
          {mockStories.map(story => (
            <div
              key={story.id}
              className="story-card"
              onClick={() => navigate(`/story/${story.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`https://ik.imagekit.io/dev24/${story.image}`}
                alt={story.title}
              />

              <div className="card-body">
                <h3>{story.title}</h3>
                <span className={`status-pill ${story.status}`}>
                  {story.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StoriesList;
