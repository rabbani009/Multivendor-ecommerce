import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";

import DeliveryInformation from "../../components/delivery/delivery-information";
// import CartSummery from "../../components/cart/CartSummery";
import {
  createAddress,
  getArea,
  getCities,
  getDivisions,
  getDefaultAddress,
} from "../../lib/api/admin";
// import { pay } from "../../lib/api/orders";
import { Toastify } from "../../components/ui/modules/alert/toastify";
import LoadingSpin from "../../components/ui/loading-spin";
import { useCartContext } from "../../store/context/cartContext";
import withAuth from "../../components/hoc/withAuth";
import CartTotal from "../../components/cart/cart-total";
import { useUserContext } from "../../store/context/userContext";

const ShippingPage = () => {
  const router = useRouter();
  const {token, user} = useUserContext()
  const { total_items, total_amount, shipping_fee } = useCartContext();

  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);

  // Loading
  const [loading, setLoading] = useState(false);

  // Default address
  const [defaultAddress, setDefaultAddress] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [selectDefault, setSelectDefault] = useState(true);

  // New address
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [division, setDivision] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [additional, setAdditional] = useState("");
  const [type, setType] = useState("home");
  const [_default, setDefault] = useState("1");

  const handleDivision = async (e) => {
    const selectDivision = e.currentTarget.value;
    setDivision(selectDivision);

    const [{ division_id }] = divisions.filter(
      (division) => division.name === selectDivision
    );
    // Get cities api call...
    const getCitiesRes = await getCities(division_id);
    if (getCitiesRes.status === 200) {
      const { data, success, message } = getCitiesRes.data;
      if (success) {
        setCities(data);
      } else {
        Toastify.fire({
          icon: "error",
          text: message,
        });
      }
    } else {
      Toastify.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };
  const handleCities = async (e) => {
    const selectCities = e.currentTarget.value;
    setCity(selectCities);

    const [{ id }] = cities.filter((city) => {
      return city.name === selectCities;
    });
    // Get area api call...
    const getAreaRes = await getArea(id);
    if (getAreaRes.status === 200) {
      const { success, data, message } = getAreaRes.data;
      if (success) {
        setAreas(data);
      } else {
        Toastify.fire({
          icon: "error",
          text: message,
        });
      }
    } else {
      Toastify.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };
  const handleAreas = async (e) => {
    const selectArea = e.currentTarget.value;
    setArea(selectArea);
  };

  const handleType = (selectType) => {
    if (selectType === "home") {
      setType("home");
    } else {
      setType("office");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      name,
      phone: mobile,
      email: user.email,
      address,
      division,
      city,
      area,
      additional,
      type,
      default: _default,
    };

    const createAddressRes = await createAddress(token, obj);
    // console.log('check createAddress...', createAddressRes)
    if (createAddressRes.status === 200) {
      const { success, message } = createAddressRes.data;
      if (success) {
        router.reload(window.location.pathname);
      } else {
        Toastify.fire({
          icon: "error",
          text: message,
        });
      }
    } else {
      Toastify.fire({
        icon: "error",
        title: "Something went wrong",
      });
    }
  };

  // const handlePay = async () => {
  //   const obj = {
  //     shippingAddressId: defaultAddress[0].id,
  //   };
  //   // Pay api call...
  //   const payRes = await pay(obj);
  //   if (payRes.status === 200) {
  //     const { success, message } = payRes.data;
  //     if (success) {
  //       addToPay();
  //       router.push("/order");

  //       Toastify.fire({
  //         icon: "success",
  //         title: "Paid Success",
  //         text: message,
  //       });
  //     } else {
  //       Toastify.fire({
  //         icon: "error",
  //         title: message,
  //         text: "Something went wrong!",
  //       });
  //     }
  //   } else {
  //     Toastify.fire({
  //       icon: "error",
  //       text: "Something went wrong!",
  //     });
  //   }
  // };

  useEffect( () => {
    const fetchData = async () => {
      setLoading(true);

      // Division api call...
      const divisionsRes = await getDivisions();
      if (divisionsRes.status === 200) {
        const { data, success } = divisionsRes.data;
        if (success) {
          setDivisions(data);
        }
      }

      // Default api call...
      const defaultAddressRes = await getDefaultAddress(token);
      if (defaultAddressRes.status === 200) {
        const { data, success } = defaultAddressRes.data;
        if (success) {
          setLoading(false);
          setDefaultAddress(data);
        } else {
          setLoading(false);
        }
      }else {
        setLoading(false);
      }
    }

    fetchData()
    // eslint-disable-next-line
  }, []);

  if (loading) return <LoadingSpin />;

  return (
    <div className="shipping-page page my-1">
      <section className="shipping-page-section page-section">
        <Container>
          <Row>
            <Col xl={8}>
              <DeliveryInformation
                loading={loading}
                isSelect={selectDefault}
                setSelect={setSelectDefault}
                defaultAddress={defaultAddress}
                name={name}
                mobile={mobile}
                setName={setName}
                setMobile={setMobile}
                divisions={divisions}
                cities={cities}
                areas={areas}
                address={address}
                setAddress={setAddress}
                additional={additional}
                setAdditional={setAdditional}
                onDivisionChange={handleDivision}
                onCitiesChange={handleCities}
                onAreasChange={handleAreas}
                onSubmit={handleSubmit}
                onType={handleType}
                type={type}
              />
            </Col>
            <Col xl={4}>
              <CartTotal/>
              {/* <CartSummery
                isSelect={selectDefault}
                total={total_items}
                subTotal={total_amount}
                shippingFee={shipping_fee}
                grandTotal={total_amount + shipping_fee}
                onHandleBtn={handlePay}
                btnName={"PROCEED TO PAY"}
              /> */}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default withAuth(ShippingPage);
