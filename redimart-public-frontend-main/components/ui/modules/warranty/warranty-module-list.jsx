import {FaMapMarkerAlt} from "react-icons/fa";

const WarrantyModuleList = (props) => {

    const {item} = props
    const {days, returnTerm, warranty} = item
  return (
      <div className="module-body-item py-2 px-3">
          <div className="module-item-wrapper d-flex justify-content-between">
              <div className="d-flex">
                  <div className="icon pe-2">
                      <FaMapMarkerAlt />
                  </div>
                  <div>
                      <div className="main-text">{item.days}</div>
                      <span className="text-muted">{returnTerm ? returnTerm : warranty}</span>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default WarrantyModuleList