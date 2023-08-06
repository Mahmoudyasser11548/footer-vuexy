// ** Icons Import
import { Heart } from "react-feather";

const Footer = () => {
  return (
    <p className="mb-0 d-flex justify-content-between">
      <span className="d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{" "}
        <a
          href="https://1.envato.market/pixinvent_portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixinvent
        </a>
        <span className="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      <span className="d-flex align-items-center">
        Hand-crafted & Made with
        <Heart size={14} />
      </span>
    </p>
  );
};

export default Footer;
