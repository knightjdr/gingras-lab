import React from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';

import Mailbox from '../../images/icon/mailbox.svg';

import './contact.css';

const Contact = () => (
  <Layout>
    <Head title="Contact" />
    <div className="contact">
      <section>
        <header>
          <h1>
            Contact information
          </h1>
          <img
            alt="Mailbox"
            height="25"
            src={Mailbox}
          />
        </header>
        <address>
          <h2>Anne-Claude Gingras, Principal investigator</h2>
          <div>tel: (416) 586-5027</div>
          <div>fax: (416) 586-8869</div>
          <div>
            <a
              className="nav-link"
              href="mailto:gingras@lunenfeld.ca"
            >
              gingras@lunenfeld.ca
            </a>
          </div>
        </address>
        <address>
          <h2>Dushyandi Rajendran, Lab manager</h2>
          <div>tel: (416) 586-4800 x8272</div>
          <div>fax: (416) 586-8869</div>
          <div>
            <a
              className="nav-link"
              href="mailto:rajendran@lunenfeld.ca"
            >
              rajendran@lunenfeld.ca
            </a>
          </div>
        </address>
        <address>
          <h2>Pearl Sequeira, Research administration</h2>
          <div>tel: (416) 586-4800 x2218</div>
          <div>fax: (416) 586-8869</div>
          <div>
            <a
              className="nav-link"
              href="mailto:sequeira@lunenfeld.ca"
            >
              sequeira@lunenfeld.ca
            </a>
          </div>
        </address>
        <address>
          <h2>Karen Colwill, Manager, NBCC</h2>
          <div>tel: (416) 586-4800 x3018</div>
          <div>fax: (416) 586-8869</div>
          <div>
            <a
              className="nav-link"
              href="mailto:colwill@lunenfeld.ca"
            >
              colwill@lunenfeld.ca
            </a>
          </div>
        </address>
        <address>
          <h2>Mailing address</h2>
          <div>Gingras Lab</div>
          <div>Lunenfeld-Tanenbaum Research Institute at Mount Sinai Hospital</div>
          <div>600 University Ave, Rm 992A (9th floor)</div>
          <div>Toronto, ON, M5G 1X5</div>
          <div>CANADA</div>
          <div>tel: (416) 586-4800 x8272</div>
        </address>
      </section>
    </div>
  </Layout>
);

export default Contact;
