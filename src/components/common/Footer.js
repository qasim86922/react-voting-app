import React from 'react';

const Footer = () =>
  (<footer className="page-footer blue-grey darken-4">
    <div className="container teal-text">
      <div className="col s6">
        <h6>A Free Code Camp Challenge</h6>
        <h5>
					written by <strong>Qasim Mahmood</strong>
        </h5>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
        <a
          href="https://github.com/qasim86922/react-voting-app"
          target="_blank"
          className="teal-text text-lighten-4"
          rel="noreferrer noopener"
        >
					Github /
				</a>
        <a
          href="https://www.linkedin.com/in/qasim-mahmood-0a81aa180/"
          target="_blank"
          className="teal-text text-lighten-4"
          rel="noreferrer noopener"
        >
					LinkedIn /
				</a>
        
        {/* <a
          href="http://ddcreationstudios.at/"
          target="_blank"
          className="teal-text text-lighten-4"
          rel="noreferrer noopener"
        >
					Site
				</a> */}
      </div>
    </div>
  </footer>);

export default Footer;
