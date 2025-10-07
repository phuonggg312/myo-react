// src/components/ProductTabs.jsx
import { useState } from "react";

export default function ProductTabs() {
  const [active, setActive] = useState("desc");

  const makeTabProps = (id) => ({
    className: `p-tabs__tab ${active === id ? "is-active" : ""}`,
    role: "tab",
    "aria-selected": active === id,
    "aria-controls": `panel-${id}`,
    "data-target": `panel-${id}`,
    type: "button",
    onClick: () => setActive(id),
  });

  return (
    <section className="p-tabs" id="product-tabs">
      {/* Tabs */}
      <div className="p-tabs__list" role="tablist" aria-label="Product details">
        <button id="tab-desc" {...makeTabProps("desc")}>Descriptions</button>
        <button id="tab-man"  {...makeTabProps("man")}>Manuals</button>
        <button id="tab-spec" {...makeTabProps("spec")}>Specifications</button>
        <button id="tab-inc"  {...makeTabProps("inc")}>What’s Included</button>
        <button id="tab-rev"  {...makeTabProps("rev")}>Reviews</button>
      </div>

      {/* Panels */}
      <div className="p-tabs__panels">
        {/* Descriptions */}
        <section
          id="panel-desc"
          role="tabpanel"
          aria-labelledby="tab-desc"
          hidden={active !== "desc"}
        >
          <div className="panel-desc-left">
            <h4>DESCRIPTION:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
              Produce up to 40L (11 US Gal) of beer from one brew. Connect your mobile device to the
              smart controller with built-in wireless control via the Grainfather App, for step-by-step
              brewing and access to 1000s of recipes.
            </p>
            <p>
              You can also transform your G40 into a home distillery* with the G40 and G70 Distilling
              Lid &amp; Attachment Kits. See our Distilling Equipment category to find the equipment
              you need to start distilling.
            </p>

            <h4>SHIPPING:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>

            <h4>PAYMENT OPTIONS:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>
          </div>

          <div className="panel-desc-right">
            <h4>FEATURES:</h4>
            <ul>
              <li>Sleek 304 grade stainless steel body</li>
              <li>Heats wort evenly with large, surface mounted heating elements</li>
              <li>
                Connect your mobile device to the smart wireless controller via the Grainfather App and
                manage your brew remotely
              </li>
              <li>Conical base for maximum wort transfer</li>
              <li>Efficient and sanitary brew transfer with the counterflow wort chiller</li>
              <li>PID heating control for accurate temperature management during mashing</li>
              <li>Quick and easy cleaning with CIP (clean in place) capability</li>
              <li>Integrated sight glass for easy volume reading</li>
              <li>
                Compatible with the G40 and G70 Distilling Lid &amp; Attachment Kits – see our Distilling
                Equipment category
              </li>
              <li>Rolled edge mash plate and large hop filter to reduce blockages</li>
              <li>Compatible with 10 and 15 amp modes (15 amp NZ/AU only)</li>
              <li>Backed by a 3-year warranty</li>
            </ul>
            <p className="feature-note">
              *Legal Considerations: Distilling at home is legal in New Zealand.
              Check the laws in your country or state before you get started.
            </p>
          </div>
        </section>

        {/* Manuals */}
        <section
          id="panel-man"
          role="tabpanel"
          aria-labelledby="tab-man"
          hidden={active !== "man"}
        >
          <div className="panel-desc-left">
            <h4>DESCRIPTION:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
              Produce up to 40L (11 US Gal) of beer from one brew. Connect your mobile device to the
              smart controller with built-in wireless control via the Grainfather App, for step-by-step
              brewing and access to 1000s of recipes.
            </p>
            <p>
              You can also transform your G40 into a home distillery* with the G40 and G70 Distilling
              Lid &amp; Attachment Kits. See our Distilling Equipment category to find the equipment
              you need to start distilling.
            </p>

            <h4>SHIPPING:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>

            <h4>PAYMENT OPTIONS:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>
          </div>

          <div className="panel-desc-right">
            <h4>FEATURES:</h4>
            <ul>
              <li>Sleek 304 grade stainless steel body</li>
              <li>Heats wort evenly with large, surface mounted heating elements</li>
              <li>
                Connect your mobile device to the smart wireless controller via the Grainfather App and
                manage your brew remotely
              </li>
              <li>Conical base for maximum wort transfer</li>
              <li>Efficient and sanitary brew transfer with the counterflow wort chiller</li>
              <li>PID heating control for accurate temperature management during mashing</li>
              <li>Quick and easy cleaning with CIP (clean in place) capability</li>
              <li>Integrated sight glass for easy volume reading</li>
              <li>
                Compatible with the G40 and G70 Distilling Lid &amp; Attachment Kits – see our Distilling
                Equipment category
              </li>
              <li>Rolled edge mash plate and large hop filter to reduce blockages</li>
              <li>Compatible with 10 and 15 amp modes (15 amp NZ/AU only)</li>
              <li>Backed by a 3-year warranty</li>
            </ul>
            <p className="feature-note">
              *Legal Considerations: Distilling at home is legal in New Zealand.
              Check the laws in your country or state before you get started.
            </p>
          </div>
        </section>

        {/* Specifications */}
        <section
          id="panel-spec"
          role="tabpanel"
          aria-labelledby="tab-spec"
          hidden={active !== "spec"}
        >
          <div className="panel-desc-left">
            <h4>DESCRIPTION:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
              Produce up to 40L (11 US Gal) of beer from one brew. Connect your mobile device to the
              smart controller with built-in wireless control via the Grainfather App, for step-by-step
              brewing and access to 1000s of recipes.
            </p>
            <p>
              You can also transform your G40 into a home distillery* with the G40 and G70 Distilling
              Lid &amp; Attachment Kits. See our Distilling Equipment category to find the equipment
              you need to start distilling.
            </p>

            <h4>SHIPPING:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>

            <h4>PAYMENT OPTIONS:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>
          </div>

          <div className="panel-desc-right">
            <h4>FEATURES:</h4>
            <ul>
              <li>Sleek 304 grade stainless steel body</li>
              <li>Heats wort evenly with large, surface mounted heating elements</li>
              <li>
                Connect your mobile device to the smart wireless controller via the Grainfather App and
                manage your brew remotely
              </li>
              <li>Conical base for maximum wort transfer</li>
              <li>Efficient and sanitary brew transfer with the counterflow wort chiller</li>
              <li>PID heating control for accurate temperature management during mashing</li>
              <li>Quick and easy cleaning with CIP (clean in place) capability</li>
              <li>Integrated sight glass for easy volume reading</li>
              <li>
                Compatible with the G40 and G70 Distilling Lid &amp; Attachment Kits – see our Distilling
                Equipment category
              </li>
              <li>Rolled edge mash plate and large hop filter to reduce blockages</li>
              <li>Compatible with 10 and 15 amp modes (15 amp NZ/AU only)</li>
              <li>Backed by a 3-year warranty</li>
            </ul>
            <p className="feature-note">
              *Legal Considerations: Distilling at home is legal in New Zealand.
              Check the laws in your country or state before you get started.
            </p>
          </div>
        </section>

        {/* What’s Included */}
        <section
          id="panel-inc"
          role="tabpanel"
          aria-labelledby="tab-inc"
          hidden={active !== "inc"}
        >
          <div className="panel-desc-left">
            <h4>DESCRIPTION:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
              Produce up to 40L (11 US Gal) of beer from one brew. Connect your mobile device to the
              smart controller with built-in wireless control via the Grainfather App, for step-by-step
              brewing and access to 1000s of recipes.
            </p>
            <p>
              You can also transform your G40 into a home distillery* with the G40 and G70 Distilling
              Lid &amp; Attachment Kits. See our Distilling Equipment category to find the equipment
              you need to start distilling.
            </p>

            <h4>SHIPPING:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>

            <h4>PAYMENT OPTIONS:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>
          </div>

          <div className="panel-desc-right">
            <h4>FEATURES:</h4>
            <ul>
              <li>Sleek 304 grade stainless steel body</li>
              <li>Heats wort evenly with large, surface mounted heating elements</li>
              <li>
                Connect your mobile device to the smart wireless controller via the Grainfather App and
                manage your brew remotely
              </li>
              <li>Conical base for maximum wort transfer</li>
              <li>Efficient and sanitary brew transfer with the counterflow wort chiller</li>
              <li>PID heating control for accurate temperature management during mashing</li>
              <li>Quick and easy cleaning with CIP (clean in place) capability</li>
              <li>Integrated sight glass for easy volume reading</li>
              <li>
                Compatible with the G40 and G70 Distilling Lid &amp; Attachment Kits – see our Distilling
                Equipment category
              </li>
              <li>Rolled edge mash plate and large hop filter to reduce blockages</li>
              <li>Compatible with 10 and 15 amp modes (15 amp NZ/AU only)</li>
              <li>Backed by a 3-year warranty</li>
            </ul>
            <p className="feature-note">
              *Legal Considerations: Distilling at home is legal in New Zealand.
              Check the laws in your country or state before you get started.
            </p>
          </div>
        </section>

        {/* Reviews */}
        <section
          id="panel-rev"
          role="tabpanel"
          aria-labelledby="tab-rev"
          hidden={active !== "rev"}
        >
          <div className="panel-desc-left">
            <h4>DESCRIPTION:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
              Produce up to 40L (11 US Gal) of beer from one brew. Connect your mobile device to the
              smart controller with built-in wireless control via the Grainfather App, for step-by-step
              brewing and access to 1000s of recipes.
            </p>
            <p>
              You can also transform your G40 into a home distillery* with the G40 and G70 Distilling
              Lid &amp; Attachment Kits. See our Distilling Equipment category to find the equipment
              you need to start distilling.
            </p>

            <h4>SHIPPING:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>

            <h4>PAYMENT OPTIONS:</h4>
            <p>
              The Grainfather G40 brewing system has a bigger capacity and better connectivity.
            </p>
          </div>

          <div className="panel-desc-right">
            <h4>FEATURES:</h4>
            <ul>
              <li>Sleek 304 grade stainless steel body</li>
              <li>Heats wort evenly with large, surface mounted heating elements</li>
              <li>
                Connect your mobile device to the smart wireless controller via the Grainfather App and
                manage your brew remotely
              </li>
              <li>Conical base for maximum wort transfer</li>
              <li>Efficient and sanitary brew transfer with the counterflow wort chiller</li>
              <li>PID heating control for accurate temperature management during mashing</li>
              <li>Quick and easy cleaning with CIP (clean in place) capability</li>
              <li>Integrated sight glass for easy volume reading</li>
              <li>
                Compatible with the G40 and G70 Distilling Lid &amp; Attachment Kits – see our Distilling
                Equipment category
              </li>
              <li>Rolled edge mash plate and large hop filter to reduce blockages</li>
              <li>Compatible with 10 and 15 amp modes (15 amp NZ/AU only)</li>
              <li>Backed by a 3-year warranty</li>
            </ul>
            <p className="feature-note">
              *Legal Considerations: Distilling at home is legal in New Zealand.
              Check the laws in your country or state before you get started.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
