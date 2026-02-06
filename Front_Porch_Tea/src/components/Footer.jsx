import "./Footer.css";

function Footer({ storeName, address, phone, email }) {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2>{storeName}</h2>
        <p>{address}</p>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} {storeName}. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
