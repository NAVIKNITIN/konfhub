import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "./HOC Components/Loading";
import PastEvents from "./HOC Components/pastevent";
import Search from "./HOC Components/search";

const Dashboad = () => {
  const [Data, setData] = useState("");
  const [text, setText] = useState("");
  const [pastEvents, setPastEvents] = useState(true);
  const [limit, setLimit] = useState(10);
  console.log(Data)
  const FetchData = async (data) => {
    console.log(data);
    let url = `https://manage-api.konfhub.com/hosted-events?limit=10&past_events=${pastEvents}`;

    if (data) {
      url = `https://manage-api.konfhub.com/hosted-events?limit=${data.limit}&search_query=${data.search_query}&past_events=${pastEvents}`;
    }
    const response = await axios.get(url);
    setData(response.data);
  };

  const handleLoadMore = (e) => {
    setLimit(limit + 12);
    let data = {
      limit: limit + 12,
      search_query: text,
    };
    FetchData(data);
  };

  useEffect(() => {
    FetchData();
  }, [pastEvents]);

  return (
    <div className="dashboard-main col-md-12">
      <div className="dashboard_nav col-md-12">
        <img src="/images/logo.png" alt="Events"></img>
      </div>
      <div className="section1_main">
        <div className="section1_content_main">
          <h1 className="section1_content_1">Events</h1>
          <p className="section1_content_2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare quam viverra
          </p>
        </div>
        <img
          className="section1_content_main2_img"
          src="/images/GroupOcto.png"
          alt=""
        ></img>
      </div>
      <div className="section2_main shadow col-md-4 p-3">
        <Search setText={setText} FetchData={FetchData} text={text} />
        <PastEvents
          setPastEvents={setPastEvents}
          text={text}
          FetchData={FetchData}
        />
      </div>
      <div className="section3_main">
        <div className="section3_main_header">
          <h2>250+ Events</h2>
        </div>
        <div className="section3_main_car_main col-md-12 d-flex">
          {Data && Data.events ? (
            Data.events.map((data, index) => (
              <div
                className="col-md-3"
                style={{ height: "max-content" }}
              >
                <div className=" card shadow col-md-10" key={index}>
                  <img src="/images/cardimage.png" alt="item" />
                  <div className="d-grid">
                    <h6
                      className="text-blue title mb-3"
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      <b>{data.name}</b>
                    </h6>
                    <div className="body_content1_main d-flex">
                      <div className="body_content1 d-flex col-md-6 p-2">
                        <img
                          src="/images/vector.png"
                          style={{ height: "15px" }}
                        ></img>
                        <small>Raddison Blue</small>
                      </div>
                      <div className="body_content1  col-md-6 p-2">
                        <img
                          src="/images/info.png"
                          style={{ height: "15px" }}
                        ></img>
                        <small>
                          {data.is_free ? "Free" : "Paid"} |{" "}
                          {data.is_live ? "Online" : "Offline"}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
      {Data && Data.events.length > 0 && (
        <div className="section4_main">
          <button
            type="button"
            className="btn"
            style={{ border: "1px solid lightgray", borderRadius: "2rem" }}
            onClick={(e) => handleLoadMore(e)}
          >
            Load More
          </button>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Dashboad;
