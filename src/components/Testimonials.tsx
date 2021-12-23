import AssesmentButton from "./svgs/AssesmentButton";

const Testimonials = () => {
  return (
    <div className="section1 testimonials">
      <div className="content">
        <div className="content-header">
          <div className="dash"></div>
          <div className="dash-content">TESTIMONIALS</div>
        </div>
        <div className="content-heading">
          200+ educational tools and platform <span>integrations</span>
        </div>
        <div className="content-sub-heading">
          Teachers and teacher assistants can talk with students privately
          without leaving the Zoom environment.
        </div>
        <div className="content-button">
          <AssesmentButton />
        </div>
      </div>
      <div className="image">
        <img src="./assets/testimonials.png" alt="features5" />
      </div>
    </div>
  );
};

export default Testimonials;
