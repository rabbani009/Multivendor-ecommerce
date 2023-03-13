import StepProgressBar from "react-step-progress";

const StepProgress = ({ status }) => {
  return (
    <StepProgressBar
      wrapperClass="step-progress-wrapper"
      buttonWrapperClass="btn-wrapper"
      startingStep={status}
      onSubmit={(e) => {}}
      steps={[
        {
          label: "Pending",
          name: "pending",
        },
        {
          label: "Processing",
          name: "processing",
        },
        {
          label: "Shipping",
          name: "shipping",
        },
        {
          label: "Delivered",
          name: "delivered",
        },
          {},
      ]}
    />
  );
};
export default StepProgress;
