import React from "react";
import "../CSS/footer.css";
function Footer() {
  return (
    <section className="footer-section">
      <section className="footer-right">
        <div className="links">Important Links</div>
        <div>
          <a href="http://vhavets.com">
            Veterinary HealthCare Associates
          </a>
        </div>
        <div>
          <a href="http://longlivingpets.com">
            LongLivingPets
          </a>
        </div>
        <div>
          <a href="http://ketopoweredk9.com">
            KetoPoweredK9
          </a>
        </div>
        <div>
          <a href="https://www.amazon.com/Cancer-Metabolic-Disease-Management-Prevention/dp/0470584920">
            Cancer as a Metabolic Disease Book by Dr. Thomas Seyfried
          </a>
        </div>
        <div>
          <a href="https://www.amazon.com/Tripping-over-Truth-Overturning-Entrenched-ebook/dp/B01N25FPY9/ref=sr_1_1?keywords=tripping+over+the+truth&qid=1639597230&s=books&sr=1-1">
            Tripping Over the Truth book by Travis Cristopherson
          </a>
        </div>
      </section>
      <section className="footer-left">
        <div>
          Contact
          <br />
          <br />
          <a href="mailto: georgehatzigeorgio@gmail.com">
            {" "}
            Send Email{" "}
          </a>{" "}
          <br />
          <br />
        </div>
        <div>Copyright &copy;2021</div> <br />
        <div>TECH SOLUTIONS INC</div>
      </section>
    </section>
  );
}

export default Footer;
