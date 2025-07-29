import { PageHeader } from "../components/PageHeader/PageHeader";
import { Button } from "react-aria-components";

export const Error404Page = () => {
  return (
    <div>
      <PageHeader title="Error" withMargin={true} />
      <section className="wrapper error-page-container">
        <h1 className="error-page-main-header">404</h1>
        <h2 className="error-page-semi-header">
          Oops... Something want wrong.
        </h2>
        <p className="error-page-text">
          We can’t find the page you’re looking for.
        </p>
        <Button className="error-page-button">
          <span>Return Home{"->"}</span>
        </Button>
      </section>
    </div>
  );
};
