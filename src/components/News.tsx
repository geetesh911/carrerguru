import { FC } from "react";

const News: FC = () => {
  const rightCards = [
    {
      image: "./assets/right1.png",
      heading:
        "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand",
      subHeading: "Class Technologies Inc., the company that created Class,...",
    },
    {
      image: "./assets/right2.png",
      heading:
        "Zoom’s earliest investors are betting millions on a better Zoom for schools",
      subHeading:
        "Zoom was never created to be a consumer product. Nonetheless, the...",
    },
    {
      image: "./assets/right3.png",
      heading:
        "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
      subHeading:
        "This year, investors have reaped big financial returns from betting on Zoom...",
    },
  ];
  return (
    <div className="news">
      <div className="news-heading">Lastest News and Resources</div>
      <div className="news-sub-heading">
        See the developments that have occurred to Skillines in the world
      </div>
      <div className="content">
        <div className="left">
          <div className="image">
            <img src="./assets/left.png" alt="left" />
          </div>
          <div className="button">News</div>
          <div className="left-heading">
            Class adds $30 million to its balance sheet for a Zoom-friendly
            edtech solution
          </div>
          <div className="left-sub-heading">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively...
          </div>
          <div className="left-read-more">Read More</div>
        </div>
        <div className="right">
          {rightCards.map((card) => (
            <div className="right-card">
              <div className="image">
                <img src={card.image} alt="left" />
              </div>
              <div className="right-card-content">
                <div className="right-content-heading">{card.heading}</div>
                <div className="right-content-sub-heading">
                  {card.subHeading}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
