

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 20, fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h1>About Us</h1>

      <section style={{ marginBottom: 30 }}>
        <h2>Our Story</h2>
        <p>
          Founded in 2025, <strong>MWardrobe</strong> started with a passion for bringing quality products directly to your doorstep.
        </p>
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2>Our Mission</h2>
        <p>
          To provide an exceptional shopping experience with quality products, affordable prices, and outstanding customer service.
        </p>
      </section>

      <section style={{ marginBottom: 30 }}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide variety of products from trusted brands</li>
          <li>Fast and reliable shipping</li>
          <li>Secure payment options</li>
          <li>Dedicated customer support</li>
          <li>Easy returns and exchanges</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Email us anytime at{" "}
          <a href="mailto:profmamta156@gmail.com" style={{ color: "#0077cc", textDecoration: "none" }}>
           profmamta156@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
