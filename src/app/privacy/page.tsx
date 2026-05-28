import type { Metadata } from "next";
import { SiteNav } from "../_components/SiteNav";
import { SiteFooter } from "../_components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy — Bourdon",
  description: "Privacy policy for bourdon.ai. Plain language, no dark patterns, no tracking.",
  alternates: { canonical: "https://bourdon.ai/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="reading">
        <header style={{ marginBottom: "var(--space-8)" }}>
          <p className="eyebrow">
            <a href="/">← Bourdon</a>
          </p>
          <h1>Privacy</h1>
          <p className="tagline">Plain language. No dark patterns. No tracking.</p>
        </header>

        <section>
          <p className="note">
            Last updated: 2026-05-12. Operator: RADLAB LLC (Wyoming, USA).
          </p>
          <p>
            This policy describes how <a href="https://bourdon.ai">bourdon.ai</a>, the marketing
            site for the Bourdon project, handles your data. If something is unclear, contact{" "}
            <a href="mailto:privacy@bourdon.ai">privacy@bourdon.ai</a>.
          </p>
          <p>
            This policy covers <strong>this marketing site only</strong>. The Bourdon software
            itself (Python / npm packages) runs on your machine, stores nothing on RADLAB
            infrastructure, and is governed by its{" "}
            <a href="https://github.com/getbourdon/bourdon/blob/main/LICENSE">license</a> and{" "}
            <a href="https://github.com/getbourdon/bourdon/blob/main/SECURITY.md">
              security policy
            </a>
            , not this page.
          </p>
        </section>

        <section>
          <h2>What we collect</h2>
          <p>
            We collect only the data necessary to serve this site. There is no account system, no
            signup, no comment system, and no analytics JavaScript on bourdon.ai.
          </p>
          <table>
            <thead>
              <tr>
                <th>What</th>
                <th>Why</th>
                <th>How long</th>
                <th>Who sees it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Standard HTTP request data: requested URL, response status, timestamp, IP
                  address, user-agent string, country (derived from IP)
                </td>
                <td>
                  Routing each request to the right page; counting aggregate visits per page;
                  troubleshooting errors
                </td>
                <td>
                  Up to 30 days (Cloudflare default); we do not export these logs to long-term
                  storage
                </td>
                <td>RADLAB LLC + Cloudflare (our hosting provider)</td>
              </tr>
              <tr>
                <td>
                  Email you send to addresses on this site (<code>privacy@</code>,{" "}
                  <code>licensing@</code>, etc.)
                </td>
                <td>Responding to your message</td>
                <td>Until the conversation is resolved + any retention period required by law</td>
                <td>Whoever you wrote to + email provider (Proton)</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>What we do not collect</h2>
          <p>bourdon.ai does not:</p>
          <ul>
            <li>Set cookies</li>
            <li>
              Run client-side analytics JavaScript (Google Analytics, Plausible, Fathom, Mixpanel,
              etc.)
            </li>
            <li>Embed third-party scripts, pixels, or trackers</li>
            <li>Build advertising profiles from your behavior</li>
            <li>Sell, rent, or trade your data</li>
            <li>Track you across other sites</li>
            <li>Use fingerprinting or session replay</li>
          </ul>
          <p>The site is plain HTML, CSS, and self-hosted Geist webfonts. View the source if you want to verify.</p>
        </section>

        <section>
          <h2>How we use server logs</h2>
          <p>
            Cloudflare&rsquo;s edge network records standard HTTP request data when it serves
            bourdon.ai (this is how any web server works). We use Cloudflare&rsquo;s built-in
            Workers Analytics to view aggregate metrics from those logs — total requests per page,
            response codes, geographic distribution at the country level — to understand which
            pages are useful and to spot errors. We do not build per-visitor profiles from this
            data, and we do not share it.
          </p>
          <p>
            The lawful basis under GDPR Art. 6(1)(f) is legitimate interest in operating and
            improving the site; the data minimization, retention, and access-control safeguards
            described above are how we balance that interest against your privacy.
          </p>
        </section>

        <section>
          <h2>Third parties</h2>
          <p>We share data with third parties only as necessary to operate the site:</p>
          <table>
            <thead>
              <tr>
                <th>Third party</th>
                <th>What they receive</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare</a>
                </td>
                <td>
                  Standard HTTP request data (see above) and the static files we publish
                </td>
                <td>
                  Hosting (Cloudflare Pages) and edge security (DDoS protection, TLS)
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://proton.me/legal/privacy">Proton</a>
                </td>
                <td>Any email you send to addresses on this site, and our replies</td>
                <td>Email delivery</td>
              </tr>
            </tbody>
          </table>
          <p>
            We do not share your data with advertisers. We do not sell your data. If we ever add a
            new third party that touches your data, we will update this policy before that data
            sharing begins.
          </p>
        </section>

        <section>
          <h2>Your rights</h2>
          <p>
            Under GDPR (if you are in the EU/UK), CCPA (California), and similar regulations, you
            have the right to:
          </p>
          <ul>
            <li>
              <strong>Access</strong> — ask what data, if any, we hold that identifies you
            </li>
            <li>
              <strong>Correction</strong> — ask us to fix inaccurate data
            </li>
            <li>
              <strong>Deletion</strong> — ask us to delete data tied to you
            </li>
            <li>
              <strong>Objection</strong> — object to processing under legitimate interest
            </li>
            <li>
              <strong>Portability</strong> — receive a copy of data you provided in a usable
              format
            </li>
            <li>
              <strong>Complaint</strong> — lodge a complaint with your local data protection
              authority (e.g., ICO in the UK, your DPA in the EU, the California Attorney General)
            </li>
          </ul>
          <p>
            Practically, since this site stores no per-visitor identifier, the most we typically
            hold tied to you is whatever email you have sent us. Email{" "}
            <a href="mailto:privacy@bourdon.ai">privacy@bourdon.ai</a> to exercise any of the
            above; we aim to respond within 30 days.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            bourdon.ai is not directed at children under 13. We do not knowingly collect personal
            data from children. If you believe a child has sent us data, email{" "}
            <a href="mailto:privacy@bourdon.ai">privacy@bourdon.ai</a> and we will delete it.
          </p>
        </section>

        <section>
          <h2>Changes to this policy</h2>
          <p>
            We will update this page when our data practices change, and the &ldquo;Last
            updated&rdquo; date at the top will reflect the latest revision. Material changes
            (new data categories, new third parties, new purposes) will be summarized in a
            changelog at the bottom of this page. We will not apply weaker rules retroactively.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Privacy questions, data requests, or anything else covered by this policy:{" "}
            <a href="mailto:privacy@bourdon.ai">privacy@bourdon.ai</a>.
          </p>
          <p>
            Operator: RADLAB LLC, a Wyoming limited liability company. This policy is governed by
            the laws of the State of Wyoming, United States. Where mandatory local law gives you
            stronger rights (for example, GDPR in the EU/UK), those rights apply in addition.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
