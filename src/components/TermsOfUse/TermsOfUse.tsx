export const TermsOfUse = () => {
  return (
    <section className="legal-modal-container">
      <h1>Terms of Use</h1>
      <p>
        <strong>Effective Date:</strong>{" "}
        {new Date()
          .toLocaleString("he", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })
          .replace(/\./g, "/")}
      </p>

      <p>
        Welcome to <strong>Jurassic Trails</strong> (“we”, “our”, or “us”). By
        accessing or using this website, you agree to comply with and be bound
        by the following terms and conditions.
      </p>

      <h2>1. Use of the Website</h2>
      <ul>
        <li>
          The content on this site is for informational and educational purposes
          only.
        </li>
        <li>You may browse, read, and share the information responsibly.</li>
        <li>
          You agree not to use the site for any illegal or unauthorized purpose.
        </li>
      </ul>

      <h2>2. Intellectual Property</h2>
      <ul>
        <li>
          All content, including text, images, and data, is the property of{" "}
          <strong>Jurassic Trails</strong> or its content providers.
        </li>
        <li>
          You may not copy, reproduce, distribute, or create derivative works
          without our prior written permission.
        </li>
      </ul>

      <h2>3. User Conduct</h2>
      <ul>
        <li>
          You agree not to post or transmit any content that is unlawful,
          harmful, defamatory, or offensive.
        </li>
        <li>
          Although there is no user-generated content system currently, if such
          features are added in the future, appropriate rules and moderation
          will apply.
        </li>
      </ul>

      <h2>4. Disclaimer of Warranties</h2>
      <ul>
        <li>
          The website and content are provided “as is” without any warranties,
          express or implied.
        </li>
        <li>
          We do not guarantee the accuracy, completeness, or reliability of the
          information.
        </li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <ul>
        <li>
          <strong>Jurassic Trails</strong> will not be liable for any damages
          arising from your use or inability to use the website.
        </li>
        <li>You use the site at your own risk.</li>
      </ul>

      <h2>6. Changes to Terms</h2>
      <ul>
        <li>
          We may update these Terms of Use at any time without prior notice.
        </li>
        <li>Changes will be effective upon posting on this page.</li>
      </ul>

      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Israel, without regard to
        conflict of law principles.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        For questions about these Terms, please contact us at:
        <br />
        <a href="mailto:your-email@example.com">your-email@example.com</a>
      </p>
    </section>
  );
};
