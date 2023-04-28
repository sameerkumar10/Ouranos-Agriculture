import React from "react";
import Container from "react-bootstrap/esm/Container";

import Navbar from "react-bootstrap/Navbar";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Reactangle from "../images/Rectangle.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ReadMore() {
  return (
    <Container style={{ padding: " 25px 50px 75px 100px" }}>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <FaArrowLeft />
          </Navbar.Brand>
          <Navbar.Collapse
            className="justify-content-end"
            style={{ cursor: "pointer" }}
          >
            <Navbar.Text>
              <FaCopy />
              <FaFacebook />
              <FaInstagram />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <img style={{ width: "100%" }} src={Reactangle} alt="logo" />
            <div className="mt-4">
              <Card.Title style={{ fontSize: "45px" }}>
                Organic Farming: How It Can Help Save the Planet
              </Card.Title>
              <Card.Subtitle className="mt-2 mb-2 text-muted">
                Sustainable Farming - April 2023
              </Card.Subtitle>
              <Card.Text>
                Organic farming is a method of agriculture that avoids the use
                of synthetic fertilizers, pesticides, and other harmful
                chemicals. Instead, it relies on natural methods of pest control
                and soil management, such as crop rotation, cover crops, and
                composting. Organic farming has gained popularity in recent
                years due to concerns about the impact of conventional
                agriculture on the environment, human health, and animal
                welfare. In this blog post, we'll explore how organic farming
                can help save the planet and why it's important to support this
                sustainable method of agriculture.
                <div className="mt-5">
                  <h3> Reducing Environmental Impact </h3>
                  One of the main benefits of organic farming is its reduced
                  environmental impact. Conventional agriculture relies heavily
                  on synthetic fertilizers, pesticides, and herbicides, which
                  can have harmful effects on soil health, water quality, and
                  biodiversity. Organic farming, on the other hand, focuses on
                  building healthy soil ecosystems that can support diverse
                  plant and animal life. By avoiding synthetic chemicals and
                  prioritizing soil health, organic farming can reduce
                  greenhouse gas emissions, promote biodiversity, and protect
                  natural resources such as water and air.
                </div>
                <div className="mt-5">
                  <h3>Supporting Local Economies In</h3>
                  addition to its environmental benefits, organic farming can
                  also support local economies by promoting sustainable
                  agriculture practices and creating jobs in rural communities.
                  Organic farms tend to be smaller and more diverse than
                  conventional farms, which can provide opportunities for local
                  farmers to grow a wide range of crops and sell them directly
                  to consumers. This can help to build a more resilient and
                  sustainable food system, reduce food waste, and support local
                  economies.
                </div>
                <div className="mt-5">
                  <h3> Promoting Health and Wellness</h3>
                  Organic farming also promotes health and wellness by providing
                  consumers with access to fresh, healthy food that's free of
                  harmful chemicals and synthetic additives. Research has shown
                  that organic produce may contain higher levels of certain
                  nutrients, such as antioxidants and vitamin C, than
                  conventionally grown produce. Additionally, by avoiding the
                  use of synthetic pesticides and herbicides, organic farming
                  can reduce exposure to harmful chemicals that have been linked
                  to a range of health problems, including cancer,
                  neurotoxicity, and reproductive disorders.
                </div>
                <div className="mt-5">
                  <h3>Challenges and Opportunities </h3>
                  While organic farming has many benefits, it also faces a
                  number of challenges and opportunities. One of the biggest
                  challenges is the higher cost of organic produce compared to
                  conventionally grown produce. This can make it difficult for
                  some consumers to afford organic food, especially in areas
                  where access to healthy food is limited. Additionally, organic
                  farming requires more labor and management than conventional
                  farming, which can make it challenging for farmers to
                  transition to this method.
                  <div className="mt-5">
                    Despite these challenges, organic farming presents many
                    opportunities for farmers, consumers, and the planet. By
                    supporting organic agriculture through our food choices and
                    advocacy efforts, we can help to build a more sustainable
                    and equitable food system that promotes health, wellness,
                    and environmental stewardship. Farmers in developing
                    countries have a hard time transporting their produce to
                    markets due to lack of roads, vehicles and money. They often
                    have to carry their produce from the farm to local markets
                    on foot or by bicycle, which can be challenging and
                    time-consuming. This means that they often have to sell
                    their produce at very low prices because they cannot
                    transport it to places where there is better demand for
                    food. The effects of climate change affect farmers’ ability
                    to grow the food we all need. Increasingly volatile weather
                    and more extreme events – like floods and droughts – change
                    growing seasons, limit the availability of water, allow
                    weeds, pests and fungi to thrive, and can reduce crop
                    productivity. Soil erosion is reducing the amount of land
                    available for agriculture, and declining biodiversity
                    affects the pollination of crops. 
                  </div>
                </div>
              </Card.Text>
            </div>
          </div>
          <div className="col-4">
            <div
              style={{
                width: "95%",
                marginLeft: "10px",
                border: "2px solid rgba(0, 0, 0, 0.05)",
              }}
            >
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#fff",
                }}
                placeholder="Search"
              ></input>

              <div style={{ marginTop: "12px" }}>
                <h3 style={{ fontWeight: "bold" }}>Categories</h3>
              </div>
              <div className="mt-4" style={{ cursor: "pointer" }}>
                <h6>Automation </h6>
                <hr></hr>
                <h6>Iot</h6>
                <hr></hr>
                <h6>Precision Agriculture</h6>
                <hr></hr>
                <h6>Sustainable Farming</h6>
                <hr></hr>
                <h6>Industry News</h6>
                <hr></hr>
                <h6>Case studies</h6>
                <hr></hr>
                <h6>Tips and Tricks</h6>
                <hr></hr>
              </div>
            </div>
            <Container>
              <div
                className="mt-3"
                style={{
                  backgroundColor: " #ebebeb",
                  padding: "10px",
                  borderRadius: "10px",
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <h1>Top post</h1>
                <ListGroup
                  as="ol"
                  numbered
                  style={{
                    overflow: "hidden",
                    whitespace: "nowrap",
                    textoverflow: "ellipsis",
                  }}
                >
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        How Regenerative Agriculture is Changing the Game .
                      </div>
                      Sustainable Farming - March,2022
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        {" "}
                        Precision Agriculture 2.0 : Using Artificial
                        Intelligence to Optimize Crop Yields{" "}
                      </div>
                      Precision Agriculture -September 2021
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        Breaking ground: How Automation is Revolutionizing the
                        Agriculture Industry
                      </div>
                      Industry News- May 2022
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        How Ouranos Robotic's Smart Sensors are Transforming
                        Crop Management
                      </div>
                      IOT - July 2021
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        The Impact of Technology on the Agriculture Industry
                      </div>
                      Expert Insights - November 2021
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <div className="mt-2">
                <Card
                  border="dark"
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  <Card.Header> Comments </Card.Header>
                  <Card.Body>
                    <input
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "#fff",
                      }}
                      placeholder=" Write a comment "
                    ></input>

                    <Card.Title className="mt-1" style={{ fontSize: "18px" }}>
                      Harsh Gogri
                    </Card.Title>
                    <Card.Text style={{ color: "Grey", fontSize: "14px" }}>
                      Great read, very informative!
                    </Card.Text>
                    <Card.Title className="mt-1" style={{ fontSize: "18px" }}>
                      Shalini B
                    </Card.Title>
                    <Card.Text
                      className="mt-1"
                      style={{ color: "Grey", fontSize: "14px" }}
                    >
                      I've been trying to switch to organic produce but the cost
                      is a barrier. Hopefully, as more people demand organic,
                      the price will come down.
                    </Card.Text>
                    <Card.Title className="mt-1" style={{ fontSize: "18px" }}>
                      Deepak Sahu
                    </Card.Title>
                    <Card.Text style={{ color: "Grey", fontSize: "14px" }}>
                      It's so important to support local farmers and food
                      systems, and organic farming is a key part of that
                    </Card.Text>
                    <Card.Title className="mt-1" style={{ fontSize: "18px" }}>
                      Arjun Patwa
                    </Card.Title>
                    <Card.Text style={{ color: "Grey", fontSize: "14px" }}>
                      As someone who grew up in a rural area and has seen the
                      impact of conventional farming on environment and local
                      communities, I appreciate the message of this article. We
                      need to shift towards sustainable and equitable
                      agriculture practices if we want to protect the planet and
                      our health.
                    </Card.Text>
                    <Card.Title className="mt-1" style={{ fontSize: "18px" }}>
                      Rajesh Pandey
                    </Card.Title>
                    <Card.Text style={{ color: "Grey", fontSize: "14px" }}>
                      Important topic, thanks for raising awareness!
                    </Card.Text>
                    <Card.Title className="mt-1" style={{ fontSize: "18px" }}>
                      Niharika K
                    </Card.Title>
                    <Card.Text style={{ color: "Grey", fontSize: "14px" }}>
                      I love that organic farming promotes biodiversity and
                      protects natural resources. We need more of this
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ReadMore;
