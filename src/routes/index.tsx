import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, Building2, CheckCircle2, ChevronRight, Clock3, Cog, Droplets, Factory, FlaskConical, Headphones, Mail, MapPin, Menu, Phone, Settings, ShieldCheck, Users, Wrench, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoPhoto from "@/assets/ceo-photo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "RG ENTERPRISES INDIA PVT LTD | Power Plant Equipment & Solutions" },
    { name: "description", content: "Reliable thermal power plant equipment, engineering services and support from RG Enterprises. Offices in Nagpur and Pandav Nagar, Delhi." },
    { property: "og:title", content: "RG ENTERPRISES INDIA PVT LTD" },
    { property: "og:description", content: "25+ years of expertise in power plant equipment and engineering solutions. Contact our Nagpur or Delhi office." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
});

const navigation = [["home", "Home"], ["about", "About Us"], ["products", "Products & Services"], ["ceo", "CEO Message"], ["clients", "Clients"], ["contact", "Contact"]];
const products = [
  { name: "Boiler Spares", text: "High-quality boiler components and spare parts for thermal power plants", icon: Factory },
  { name: "TDBFP Turbines", text: "Turbo-driven boiler feed pump turbines for efficient power generation", icon: Zap },
  { name: "Gear Boxes", text: "Precision-engineered gear boxes for various power plant applications", icon: Cog },
  { name: "Vacuum Pumps", text: "Industrial vacuum pumps for power plant cooling systems", icon: Droplets },
  { name: "WTP Chemicals", text: "Water treatment plant chemicals for optimal plant performance", icon: FlaskConical },
  { name: "Engineering Services", text: "Comprehensive engineering solutions and technical consulting", icon: Settings },
  { name: "Installation & Commissioning", text: "Professional installation and commissioning services", icon: Wrench },
  { name: "After-sales Support", text: "24/7 technical support and maintenance services", icon: Headphones },
];
const clients = [
  ["MAHAGENCO", "Maharashtra State Power Generation Company Limited"],
  ["CSPGCL", "Chhattisgarh State Power Generation Company Limited"],
  ["MPPGCL", "Madhya Pradesh Power Generation Company Limited"],
  ["DVG", "Durgapur Projects Limited"],
  ["NTPS", "National Thermal Power Stations"],
];
const commitments = ["Precision-engineered equipment", "Timely delivery and service", "Trusted by government sector clients", "Backed by global manufacturing leaders"];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className="site-header">
        <div className="site-container header-inner">
          <a href="#home" className="wordmark" aria-label="RG Enterprises home">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rge-logo-DPPomnoUvprQ09khuhatGYW7flWUvi.png" alt="RG Enterprises" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
          <Button asChild className="quote-button"><a href="#contact">Get Quote</a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Get Quote</a></nav>}
      </header>
      <main>
        <section id="home" className="hero-section">
          <div className="site-container hero-content">
            <p className="company-name">RG ENTERPRISES INDIA PVT LTD</p>
            <h1>Reliable Power Plant<br /><span>Equipment &amp; Solutions</span></h1>
            <p className="hero-description">Powering India's energy infrastructure with 25+ years of expertise in thermal power plant equipment supply and services</p>
            <div className="hero-actions"><Button variant="hero" size="lg" asChild><a href="#products">Explore Products <ArrowRight /></a></Button><Button variant="heroOutline" size="lg" asChild><a href="#contact">Request a Quote</a></Button></div>
          </div>
        </section>
        <section className="intro-section section-band">
          <div className="site-container">
            <div className="section-heading"><h2>Leading Power Plant Equipment Supplier</h2><p>R.G. Enterprises is a trusted supplier of high-performance equipment and solutions for thermal power plants across India.</p></div>
            <div className="benefits-grid">{["25+ years of industry expertise", "Trusted by government power sector clients", "Comprehensive equipment solutions", "Pan-India service network"].map((item) => <div key={item} className="benefit"><CheckCircle2 /><span>{item}</span></div>)}</div>
          </div>
        </section>
        <section className="trusted-section"><div className="site-container"><h3>Trusted by Leading Power Companies</h3><div className="trusted-names">{clients.map(([name]) => <span key={name}>{name}</span>)}</div></div></section>
        <section id="about" className="section-band"><div className="site-container"><div className="section-heading"><h2>About R.G. Enterprises</h2><span className="heading-rule" /></div><div className="about-grid"><div className="about-copy"><h3>Delivering dependable equipment and technical support for critical power infrastructure.</h3><p>With decades of experience serving thermal power generation projects, we focus on supplying reliable equipment, engineering solutions and support that help power plants reduce downtime and improve performance.</p><p>Our offering spans major rotating and static components, process equipment and post-installation support to help customers maintain efficient and resilient operations.</p><h4>What we stand for</h4><ul className="commitment-list">{commitments.map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul></div><div className="stats-grid"><div className="stat"><Award /><strong>25+</strong><span>Years of expertise</span></div><div className="stat"><ShieldCheck /><strong>100%</strong><span>Quality-focused sourcing</span></div><div className="stat"><Users /><strong>500+</strong><span>Project support touchpoints</span></div><div className="stat"><Clock3 /><strong>24/7</strong><span>After-sales support</span></div></div></div></div></section>
        <section id="products" className="section-band muted-band"><div className="site-container"><div className="section-heading"><h2>Products &amp; Services</h2><p>Comprehensive range of power plant equipment, process solutions and installation support for dependable operations.</p></div><div className="products-grid">{products.map(({ name, text, icon: Icon }) => <div key={name} className="product-item"><div className="product-icon"><Icon /></div><h3>{name}</h3><p>{text}</p></div>)}</div><div className="section-action"><Button asChild><a href="#contact">Discuss Your Requirement <ChevronRight /></a></Button></div></div></section>
        <section id="ceo" className="section-band"><div className="site-container"><div className="section-heading"><h2>From the CEO &amp; MD's Desk</h2><span className="heading-rule" /></div><div className="ceo-layout"><img src={ceoPhoto.url} alt="RG Enterprises CEO" className="ceo-photo" /><div><span className="quote-mark">“</span><blockquote>Our focus has always been to deliver dependable, high-quality solutions that support the long-term efficiency and reliability of India's power generation sector.</blockquote><h3>R.G. Enterprises</h3><p className="ceo-title">CEO &amp; Managing Director</p><p className="ceo-company">Power plant equipment and engineering support</p></div></div></div></section>
        <section id="clients" className="section-band muted-band"><div className="site-container"><div className="section-heading"><h2>Our Clientele</h2><p>Trusted exclusively by government sector and public utility clients across major power-producing regions of India.</p></div><div className="clients-grid">{clients.map(([name, detail]) => <div key={name} className="client-item"><Building2 /><h3>{name}</h3><p>{detail}</p><span>Client</span></div>)}</div></div></section>
        <section id="contact" className="section-band"><div className="site-container"><div className="section-heading"><h2>Contact Us</h2><p>Get in touch with us for all your power plant equipment, engineering and service requirements.</p></div><div className="contact-grid"><div className="contact-details"><div className="contact-row"><MapPin /><div><h3>Corporate Office</h3><p>RG Enterprises India Pvt. Ltd.<br />Nagpur, Maharashtra</p><p className="company-history">Formerly known as RG Enterprises Pvt. Ltd.</p><a href="https://maps.google.com/?q=Nagpur+Maharashtra" className="map-link" target="_blank" rel="noreferrer">View on map <ChevronRight /></a></div></div><div className="contact-row"><MapPin /><div><h3>Delhi Office</h3><p>Pandav Nagar, Delhi</p><a href="https://maps.google.com/?q=Pandav+Nagar+Delhi" className="map-link" target="_blank" rel="noreferrer">View on map <ChevronRight /></a></div></div><div className="contact-row"><Phone /><div><h3>Call us</h3><p>+91 90901 86636</p><a href="tel:+919876543210">Speak with our team</a></div></div><div className="contact-row"><Mail /><div><h3>Email us</h3><p>sales@rgenterprises.in</p><a href="mailto:sales@rgenterprises.in">Send inquiry</a></div></div></div><div className="quick-contact"><h3>Quick Contact</h3><a className="quick-contact-link" href="tel:+919876543210"><Phone /><div><h4>Phone Support</h4><p>Speak to our sales and service team.</p></div><ChevronRight className="contact-arrow" /></a><a className="quick-contact-link" href="mailto:sales@rgenterprises.in"><Mail /><div><h4>Email Inquiry</h4><p>Share your technical requirements and project details.</p></div><ChevronRight className="contact-arrow" /></a><div className="business-details"><h3>Business Enquiries</h3><p>We work with utility companies, EPC contractors and industrial engineering teams requiring dependable thermal plant equipment and engineering support.</p></div></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="site-container footer-inner"><div><a href="#home" className="footer-brand">RG ENTERPRISES INDIA PVT LTD</a><p>Reliable Power Plant Equipment &amp; Engineering Solutions</p></div><p>© 2025 RG Enterprises India Pvt. Ltd.</p></div></footer>
    </div>
  );
}
