import HelpForm from "../../components/help/help-form";
import HelpCard from "../../components/help/help-card";
// import Faq from "../../components/help/faq";

const HelpCenter = () => {

    return (
      <div className="help-center-page page py-0">
          <HelpForm/>
          <HelpCard/>
          {/*<Faq/>*/}
      </div>
  )
}

export default HelpCenter