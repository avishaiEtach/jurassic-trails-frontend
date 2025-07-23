import React from "react";

export const PrivacyPolicy = () => {
  return (
    <section className="legal-modal-container">
      <h1>Privacy Policy</h1>
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
        Welcome to <strong>Jurassic Trails</strong> (“we”, “our”, or “us”). This
        Privacy Policy explains how we collect and use non-personal information
        when you browse our website.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We do <strong>not</strong> collect personal information such as names,
        emails, or passwords.
      </p>
      <p>We may collect:</p>
      <ul>
        <li>
          <strong>Usage Data</strong> – such as IP address, browser type, pages
          visited, and time spent on the site.
        </li>
        <li>
          <strong>Cookies</strong> – small text files used to improve your
          browsing experience (e.g., remembering preferences, measuring
          traffic).
        </li>
      </ul>
      <p>
        This data is collected anonymously and used for analytics purposes only.
      </p>

      <h2>2. How We Use the Information</h2>
      <p>We use the collected data to:</p>
      <ul>
        <li>Analyze and improve the performance of our website</li>
        <li>Understand user behavior and content popularity</li>
        <li>Ensure technical stability and security</li>
      </ul>
      <p>
        We do <strong>not</strong> use the data to track individuals or identify
        users.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>
        We may use trusted third-party services like{" "}
        <strong>Google Analytics</strong> to help us understand website traffic.
        These services may use cookies or similar technologies.
      </p>
      <p>
        You can opt out of Google Analytics via their{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          Opt-out Browser Add-on
        </a>
        .
      </p>
      <h2>4. Data Security</h2>
      <p>
        We take reasonable steps to secure anonymous data collected, but no
        system is ever 100% secure.
      </p>
      <h2>5. Your Choices</h2>
      <p>You can:</p>
      <ul>
        <li>Disable cookies in your browser settings</li>
        <li>Use private/incognito browsing mode</li>
        <li>Use ad-blockers or privacy extensions</li>
      </ul>
      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with the updated date.
      </p>
      <h2>7. Contact</h2>
      <p>
        For questions about this policy, contact us at:
        <br />
        <a href="mailto:your-email@example.com">your-email@example.com</a>
      </p>
    </section>
  );
};
