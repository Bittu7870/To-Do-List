import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} All right reserve by Bittu.</p>
    </footer>
  );
}

export default Footer;
