import React from "react";
import { css } from "emotion";

import LogoSOC from "./logo-aicpa-soc.png";
import LogoDD from "./logo-dcd.png";

const Footer = () => {
  return (
    <>
      <footer
        className={css({
          backgroundColor: "#262626",
          color: "#999",
          fontSize: ".9rem",
          lineHeight: "1.6",
          padding: "2rem 0"
        })}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-4 text-center text-md-left">
              <h6 className={css({ color: "#fff" })}>ABC Best Title</h6>
              <a
                href="http://www.nextdeal.us/"
                className={css({ color: "#999", textDecoration: "none" })}
              >
                http://www.nextdeal.us/
              </a>
            </div>
            <div className="col-xs-12 col-md-4 text-center">
              <img
                src={LogoSOC}
                alt="AICPA-SOC"
                className={css({ maxWidth: "106px" })}
              />
            </div>
            <div className="col-xs-12 col-md-4 text-center text-md-right">
              <h6 className={css({ color: "#fff" })}>Questions/Support</h6>
              <a
                href="mailto:support@digitaldocs.net"
                className={css({ color: "#999", textDecoration: "none" })}
              >
                Support@DigitalDocs.net
              </a>
              <br />
              Phone: (877) 711-7226
            </div>
          </div>
        </div>
      </footer>
      <div
        className={css({
          lineHeight: "0",
          padding: "2rem 0",
          textAlign: "center"
        })}
      >
        <img
          src={LogoDD}
          alt="DigitalDocs.net, LLC"
          className={css({ maxWidth: "240px" })}
        />
        <div
          className={css({
            color: "#262626",
            fontSize: ".8rem",
            lineHeight: "3.2"
          })}
        >
          &copy; {new Date().getFullYear()}. DigitalDocs.net, LLC
        </div>
      </div>
    </>
  );
};

export default Footer;
