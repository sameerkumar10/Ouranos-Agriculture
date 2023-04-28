
import Container from "react-bootstrap/esm/Container";
import React from "react";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";

import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  function sameer() {
    navigate("/ReadMore");
  }
  return (
    <div style={{padding: " 25px 50px 75px 100px"}} >
      <div className="mt-3 " style={{ height: "200px" }}>
        <div className="container-fluid"  >
          <div className="row">
            <div
              className="col-4"
              style={{
                backgroundColor: " #ebebeb",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
            <Container    style={{ overflow:"hidden",
    whitespace:"nowrap",
    textoverflow:"ellipsis" }}>
              <div style={{ width: "95%", marginLeft: "10px" }}>
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
                <div className="mt-4" style={{cursor:"pointer"}}>
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
              </Container >
            </div>
            <div className="col-4">
              <Card style={{ width: "100%" , height:"100%"}}>
                <Card.Img
                  variant="top"
                  src="https://t4.ftcdn.net/jpg/02/43/52/57/240_F_243525780_r8sdu06FUxVmqvf3YUthU5s9nE0z0lhh.jpg"
                />
                <Card.Body>
                  <Card.Title>Organic Farming: How it Can Help Save the Planet</Card.Title>
                  <Card.Text>
                  Learn about the benefits of organic farming and how it can help reduce the environmental impact of agriculture.
                  Organic agriculture reduces non-renewable energy use by decreasing agrochemical needs (these require high quantities of fossil fuel to be produced).
                  <div>
                    <span
                    
                      onClick={() => sameer()}
                      style={{ color: "#1fc57f", cursor: "pointer",fontWeight: "bold"}}
                    >
                      Read full articles....
                    </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-4">
              <Card style={{ width: "100%" ,height:"100%"}}>
                <Card.Img
                  variant="top"
                  src="https://t3.ftcdn.net/jpg/02/86/02/22/240_F_286022279_zTU2R0YbUwWRS9esGbtB2dUuEnWaZ3pO.jpg"
                />
                <Card.Body>
                  <Card.Title>The Internet of Things and Precision Agriculture: A Match Made in Heaven</Card.Title>
                  <Card.Text>
                  Discover how IoT devices are transforming precision agriculture, from soil moisture sensors to drones.
                  The Internet of Things and big data go extremely well together. They’re both growing at an impressive rate, and both feed into the success of the other.
                  <div>
                    <span
                      onClick={() => sameer()}
                      style={{ color: "#1fc57f", cursor: "pointer",fontWeight: "bold" }}
                    >
                      Read full articles....
                    </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="container-fluid mt-4"  >
          <div className="row">
            <div
              className="col-4"
              style={{
                backgroundColor: " #ebebeb",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <h1>Top post</h1>
              <ListGroup as="ol" numbered style={{ overflow:"hidden",
    whitespace:"nowrap",
    textoverflow:"ellipsis" }} >
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">How Regenerative Agriculture is Changing the Game .</div>
                    Sustainable Farming - March,2022
                  </div>
                  
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold"> Precision Agriculture 2.0 : Using Artificial Intelligence to Optimize Crop Yields </div>
                    Precision Agriculture -September 2021
                  </div>
                  
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Breaking ground: How Automation is Revolutionizing the Agriculture Industry</div>
                    Industry News- May 2022
                  </div>
                 
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">How Ouranos Robotic's Smart Sensors are Transforming Crop Management</div>
                    IOT - July 2021
                  </div>
                 
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">The Impact of Technology on the Agriculture Industry</div>
                    Expert Insights - November 2021
                  </div>
                 
                </ListGroup.Item>
                
              </ListGroup>
            </div>
            <div className="col-4 ">
              <Card style={{ width: "100%" , height:"100%"}}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Body>
                  <Card.Title>5 Ways to Optimize Your Crop Yields with Automation</Card.Title>
                  <Card.Text>
                  Find out how automation can increase productivity on the farm, and learn about the latest tools and technologies Here We Get All Type of Agriculture Equipment.Productivity Really Enhance Agriculture  .
                  <div>
                    <span
                      onClick={() => sameer()}
                      style={{ color: "#1fc57f", cursor: "pointer",fontWeight: "bold" }}
                    >
                      Read full articles....
                    </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-4">
              <Card style={{ width: "100%" , height:"100%"}}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1535379453347-1ffd615e2e08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWdyaWN1bHR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Body>
                  <Card.Title>The Business Case for Sustainable Farming: Why it Makes Financial Sense</Card.Title>
                  <Card.Text>
                  Explore the economic benefits of sustainable farming practices, from reduced input costs and Best Agriculture Resource Available here .
                  <div>
                    <span
                      onClick={() => sameer()}
                      style={{ color: "#1fc57f", cursor: "pointer",fontWeight: "bold" }}
                    >
                      Read full articles....
                    </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4 ">
              <Card style={{ width: "100%", height:"100%" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
                />
                <Card.Body>
                  <Card.Title>Expert Insights: The coming future of Agri-Tech</Card.Title>
                  <Card.Text>
                  Hear from top experts in the field about the latest trends and technologies shaping the future of Agri-tech.
                  <div>
                    <span
                      onClick={() => sameer()}
                      style={{ color: "#1fc57f", cursor: "pointer",fontWeight: "bold" }}
                    >
                      Read full articles....
                    </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-4">
              <Card style={{ width: "100%" ,height:"100%"}}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1559884743-74a57598c6c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFncmljdWx0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                />
                <Card.Body>
                  <Card.Title>Maximizing Crop Yields with Precision Planting</Card.Title>
                  <Card.Text>
                  Discover how precision planting can help farmers maximize their crop yields while reducing waste and costs.
                  <div>
                    <span
                      onClick={() => sameer()}
                      style={{ color: "#1fc57f", cursor: "pointer" ,fontWeight: "bold" }}
                    >
                      Read full articles....
                    </span>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            {/* <Pagination.Item active>{12}</Pagination.Item> */}
            <Pagination.Item>{13}</Pagination.Item>
            {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Cart;
