/* eslint-disable no-unused-vars */
import FooterComponent from "./components";
import { useFooterType } from "./utility/hooks/useFooterType";
import classnames from "classnames";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'

function App() {
  const { footerType, setFooterType } = useFooterType();

  // ** Vars
  const footerClasses = {
    static: "footer-static",
    sticky: "footer-fixed",
    hidden: "footer-hidden",
  };

  return (
    <>
      <footer
        className={classnames(
          `footer footer-light ${footerClasses[footerType] || "footer-static"}`,
          {
            "d-none": footerType === "hidden",
          }
        )}
      >
          <FooterComponent
            footerType={footerType}
            footerClasses={footerClasses}
          />
      </footer>
    </>
  )
}

export default App
