import React from "react";
import { css } from "emotion";

const Sidebar = () => {
  return (
    <aside className="col-md-2 pb-2 pt-2">
      <div
        className={css({
          fontSize: ".8rem"
        })}
      >
        <p>
          <strong>FILE NUMBER</strong>
          <br />
          ABC051717
        </p>
        <p>
          <strong>PROPERTY ADDRESS</strong>
          <br />
          121 Stoney Creek St, Orlando, OH 32808
        </p>
        <p>
          <strong>TITLE/ESCROW COMPANY</strong>
          <br />
          ABC Best Title Co.
          <br />
          1540 International Parkway
          <br />
          Lake Mary, FL 32746
        </p>
        <p>
          <strong>CONTACT INFORMATION</strong>
          <br />
          <a href="tel:(407) 493-6957">(407) 493-6957</a>
        </p>
        <div className="support">
          <strong>SUPPORT / HELP DESK</strong>
          <br />
          <a href="mailto:support@digitaldocs.net">Support@DigitalDocs.net</a>
          <br />
          Phone: <a href="tel:877-711-7226">(877) 711-7226</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
