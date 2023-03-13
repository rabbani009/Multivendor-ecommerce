import { Button } from "react-bootstrap";

const Wrong = () => {
    return (
        <div className="bg-light py-5">
          <div className="w-50 d-flex flex-column m-auto align-items-center">
            <h2>Oh no, something went wrong!</h2>
            <p className="mb-0">So sorry, but our site is under maintenance right now.</p>
            <p>We&apos;re doing back our best and we&apos;ll back soon.</p>
            <Button variant="warning">Contact us</Button>
          </div>
        </div>
      )
}

export default Wrong