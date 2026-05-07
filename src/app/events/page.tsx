import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | kcooperdev",
  description:
    "Workshops, meetups, and other events from kcooperdev.",
};

export default function EventsPage() {
  return (
    <main>
      <section className="hero">
        <div className="shell">
          <div className="eyebrow">workshops · meetups · panels</div>
          <h1>
            Where I <span className="accent">show up</span>.
          </h1>
          <p className="lede">
            AI workshops, community meetups, and the occasional panel —
            this is where you can find me out in the wild.
          </p>
        </div>
      </section>

      <section>
        <div className="shell">
          <div className="sec-head">
            <span className="num">01</span>
            <span className="ttl">featured</span>
            <span className="ln" />
            <span>// recurring</span>
          </div>

          <div className="proj-list">
            <a className="proj-row" href="https://techafterdark.live">
              <div className="pn">01</div>
              <div className="pmid">
                <div className="pt">
                  <h3>Tech After Dark</h3>
                  <span className="tag">meetup</span>
                </div>
                <div className="pb">
                  An after-hours tech meetup — builders, founders, and
                  engineers swapping notes over drinks. Click to learn more.
                </div>
              </div>
              <div className="pst shipped">live</div>
              <div className="py">monthly</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
