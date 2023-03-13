import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";
import { BsBriefcaseFill, BsFillHouseFill } from "react-icons/bs";

const DeliveryInformation = (props) => {
  const {
    isSelect,
    setSelect,
    defaultAddress,
    name,
    mobile,
    setName,
    setMobile,
    divisions,
    cities,
    areas,
    address,
    setAddress,
    additional,
    setAdditional,
    onDivisionChange,
    onCitiesChange,
    onAreasChange,
    onSubmit,
    onType,
    type,
  } = props;


  // console.log('check type...', type)

  return (
    <div className="delivery-info-wrapper p-4">
      <div className="delivery-info-title mb-2">
        <h4 className="mb-0">Delivery Information</h4>
      </div>
      <div className="delivery-info-body">
        {!(defaultAddress.length === 0 || !isSelect) ? (
          <div className="address-wrapper">
            <ListGroup as="ul">
              {defaultAddress &&
                defaultAddress.map((item) => {
                  // console.log('check default address...', item)
                  const { address, area, city, division, id, type } = item;
                  return (
                    <ListGroup.Item
                      as="li"
                      className="d-flex align-items-center justify-content-between border-1 rounded-1 my-1"
                      key={id}
                    >
                      <div>{`${division}, ${city}, ${area}, ${address}| Delivery to: ${type}`}</div>
                      <div>
                        <Form.Group controlId="checkbox">
                          <Form.Check
                            type="checkbox"
                            checked={isSelect}
                            onChange={() => setSelect(!isSelect)}
                          />
                        </Form.Group>
                      </div>
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </div>
        ) : (
          <div className="delivery-form-wrapper">
            <Form onSubmit={onSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.currentTarget.value)}
                      required
                      placeholder="Enter your first and last name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="mobile">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.currentTarget.value)}
                      required
                      placeholder="Please enter your phone number"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="region">
                    <Form.Label>
                      Division <small className="text-danger">*</small>
                    </Form.Label>
                    <Form.Select
                      name="division"
                      aria-label="Division"
                      onChange={onDivisionChange}
                    >
                      <option>Select Division</option>

                      {divisions &&
                        divisions.map((division) => {
                          return (
                            <option value={division.name} key={division.id}>
                              {division.name}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>
                      City <small className="text-danger">*</small>
                    </Form.Label>
                    <Form.Select
                      name="region"
                      aria-label="City"
                      onChange={onCitiesChange}
                      disabled={cities.length === 0}
                    >
                      <option>Please chose your city</option>
                      {cities &&
                        cities.map((city) => {
                          return (
                            <option value={city.name} key={city.id}>
                              {city.name}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="area">
                    <Form.Label>
                      Area <small className="text-danger">*</small>
                    </Form.Label>
                    <Form.Select
                      name="region"
                      aria-label="Area"
                      onChange={onAreasChange}
                      disabled={areas.length === 0}
                    >
                      <option>Please choose your area</option>
                      {areas &&
                        areas.map((area) => {
                          return (
                            <option value={area.name} key={area.id}>
                              {area.name}
                            </option>
                          );
                        })}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>
                      Address <small className="text-danger">*</small>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.currentTarget.value)}
                      placeholder="For Example: House# 123, Street# 123, ABC Road"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="additional">
                    {/*<Form.Label>*/}
                    {/*  Additional text <small className="text-danger">*</small>*/}
                    {/*</Form.Label>*/}
                    <Form.Label>
                      Additional text
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="additional"
                      value={additional}
                      onChange={(e) => setAdditional(e.currentTarget.value)}
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>

                  <div className="btn-wrapper mb-3">
                    <div className="btn-wrapper-title mb-2">
                      Select a label for effective delivery:
                    </div>
                    <div className="btn-wrapper-body d-flex justify-content-between">
                      <Button
                        variant="outline-primary"
                        className={`${
                          type === "office"
                            ? "text-uppercase active"
                            : "text-uppercase"
                        }`}
                        onClick={() => onType("office")}
                      >
                        <span className="me-2">
                          <BsBriefcaseFill />
                        </span>
                        Office
                      </Button>

                      <Button
                        variant="outline-warning"
                        className={`${
                          type === "home"
                            ? "text-uppercase ms-3 active"
                            : "text-uppercase ms-3"
                        }`}
                        onClick={() => onType("home")}
                      >
                        <span className="me-2">
                          <BsFillHouseFill />
                        </span>
                        Home
                      </Button>
                    </div>
                  </div>

                  <div className="submit-btn-wrapper d-flex justify-content-end mt-5">
                    <Button
                      type="submit"
                      variant="info"
                      className="py-2 px-4 text-light text-uppercase me-2"
                    >
                      Save
                    </Button>

                    <Button
                      type="button"
                      variant="outline-secondary"
                      className="py-2 px-3 text-uppercase ms-2"
                      onClick={() => setSelect(!isSelect)}
                    >
                      Cancel
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryInformation;
