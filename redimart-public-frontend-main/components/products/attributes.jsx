import React, { Fragment } from "react";
import Image from 'next/image'

import { ListGroup} from "react-bootstrap";
import { FaCheck } from "react-icons/fa";


const Attributes = (props) => {
    const {colorName, sizeName, colors, sizes, setMain, setPrice, setTempSizes, select, setSelect, setStock} = props

  return (
      <Fragment>
          <div className="family py-2">
              <h6 className="text-muted-lg">Color Family: <span className="text-muted">{colorName || 'Select option'}</span></h6>
              <ListGroup horizontal as="ul" className="color-body">
                  {colors && colors.map((item, index) => {
                      const {attributeImage, attributeId, color, price, sizes, quantity} = item

                      return (
                          <ListGroup.Item as="li" className="p-0 me-1 border-0" key={index} onClick={() => {
                              setMain(attributeImage)
                              setTempSizes(sizes)
                            setStock(quantity)
                            setPrice((prevPrice) => {
                                let tempPrice = price;
                                if(!tempPrice) return prevPrice
                                return tempPrice
                            })
                            setSelect({...select, colors: item, sizes: sizes[0]})
                          }}>
                              <div className="img-wrapper">
                                  {
                                      attributeImage && attributeId && (
                                          <div className="select-wrapper">
                                              <Image
                                                  className={select?.colors?.attributeId === attributeId ? "module-image active" : "module-image"}
                                                  src={attributeImage}
                                                  alt={color}
                                                  width="32"
                                                  height="32"
                                              />
                                              <div className={select?.colors?.attributeId === attributeId ? "icon-wrapper" : "d-none"}>
                                                  <FaCheck/>
                                              </div>
                                          </div>
                                      )
                                  }
                              </div>
                          </ListGroup.Item>
                      )
                  })}
              </ListGroup>
          </div>

          <div className="family py-2">
              <h6 className="text-muted-lg">Size Family: <span className="text-muted">{sizeName || 'Select option'}</span></h6>
              <ListGroup horizontal as="ul" className="size-body">
                  {sizes && sizes.map((item, index) => {
                      const {size, attributeId, price} = item
                      let genSize = size && size.split(" ")

                      // Dosen't have size return null
                      if(!size) return  null
                      return (
                          <ListGroup.Item as="li" className="p-0 me-1 border-0" key={index} onClick={() => {
                            //   setPrice(price)
                            setStock(item.quantity)
                            setPrice((prevPrice) => {
                                let tempPrice = price;
                                if(!tempPrice) return prevPrice
                                return tempPrice
                            })
                            setSelect({...select, sizes: item})
                          }}>
                              <span className={select?.sizes?.attributeId === attributeId ? 'active' : null}>{genSize && genSize[0]}</span>
                          </ListGroup.Item>
                      )
                  })}
              </ListGroup>
          </div>

      </Fragment>
  )
}

export default Attributes