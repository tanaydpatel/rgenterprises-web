import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, Building2, CheckCircle2, ChevronRight, Clock3, Cog, Droplets, Factory, FlaskConical, Headphones, Mail, MapPin, Menu, Phone, Settings, ShieldCheck, Users, Wrench, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ceoPhoto from "@/assets/ceo-photo.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: "RG ENTERPRISES INDIA PVT LTS | Power Plant Equipment & Solutions" },
    { name: "description", content: "Reliable thermal power plant equipment, engineering services and support from RG Enterprises. Offices in Nagpur and Pandav Nagar, Delhi." },
    { property: "og:title", content: "RG ENTERPRISES INDIA PVT LTS" },
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
          <a href="#home" className="wordmark" aria-label="RG Enterprises home"><strong>RGE</strong><span>ENTERPRISES</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
          <Button asChild className="quote-button"><a href="#contact">Get Quote</a></Button>
          <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)}>Get Quote <ArrowRight size={16} /></a></nav>}
      </header>
      <main>
        <section id="home" className="hero-section">
          <div className="site-container hero-content">
            <p className="company-name">RG ENTERPRISES INDIA PVT LTS</p>
            <h1>Reliable Power Plant<br /><span>Equipment &amp; Solutions</span></h1>
            <p className="hero-description">Powering India's energy infrastructure with 25+ years of expertise in thermal power plant equipment supply and services</p>
            <div className="hero-actions"><Button variant="hero" size="lg" asChild><a href="#products">Explore Products <ArrowRight /></a></Button><Button variant="heroOutline" size="lg" asChild><a href="#contact"><Phone /> Contact Us</a></Button></div>
          </div>
        </section>
        <section className="intro-section section-band">
          <div className="site-container">
            <div className="section-heading"><h2>Leading Power Plant Equipment Supplier</h2><p>R.G. Enterprises is a trusted supplier of high-performance equipment and solutions for thermal power plants across India. We are committed to supporting the nation's energy sector through reliable partnerships and expert engineering services.</p></div>
            <div className="benefits-grid">{["25+ years of industry expertise", "Trusted by government power sector clients", "Comprehensive equipment solutions", "Pan-India service network"].map(text => <div className="benefit" key={text}><CheckCircle2 /><span>{text}</span></div>)}</div>
          </div>
        </section>
        <section className="trusted-section"><div className="site-container"><h3>Trusted by Leading Power Companies</h3><div className="trusted-names">{clients.map(([name]) => <span key={name}>{name}</span>)}</div></div></section>
        <section id="about" className="section-band"><div className="site-container"><div className="section-heading"><h2>About R.G. Enterprises</h2><span className="heading-rule" /></div><div className="about-grid"><div className="about-copy"><h3>Quality &amp; Reliability Excellence</h3><p>With 25 years of experience in power generation, R.G. Enterprises has established itself as a leading company in India dedicated to providing high-quality equipment and solutions for power plants. Our customer-centric approach and commitment to innovation has made us a reliable partner in the power sector.</p><p>We specialize in supplying mechanical equipment, components, and systems for various power generation plants across Maharashtra, Chhattisgarh, and Madhya Pradesh regions. Our technical team stays up-to-date with emerging technologies and market trends to deliver innovative and efficient solutions.</p><h4>Our Commitment:</h4><ul className="commitment-list">{commitments.map(text => <li key={text}><CheckCircle2 size={17} />{text}</li>)}</ul></div><div className="stats-grid">{[["25+", "Years of Experience", Award], ["50+", "Government Clients", Users], ["8+", "Product Categories", Cog], ["3+", "States Served", MapPin]].map(([number, label, Icon]) => { const StatIcon = Icon as typeof Award; return <div className="stat" key={String(label)}><StatIcon /><strong>{String(number)}</strong><span>{String(label)}</span></div>; })}</div></div></div></section>
        <section id="products" className="section-band muted-band"><div className="site-container"><div className="section-heading"><h2>Products &amp; Services</h2><p>Comprehensive range of products and services tailored to meet the specific needs of thermal power plants</p></div><div className="products-grid">{products.map(({ name, text, icon: Icon }) => <article className="product-item" key={name}><div className="product-icon"><Icon /></div><h3>{name}</h3><p>{text}</p></article>)}</div><div className="section-action"><Button asChild size="lg"><a href="mailto:info@rgenterprisesindia.com?subject=Product%20Catalog%20Request">Request Product Catalog <ArrowRight /></a></Button></div></div></section>
        <section id="ceo" className="section-band"><div className="site-container"><div className="section-heading"><h2>From the CEO &amp; MD's Desk</h2><span className="heading-rule" /></div><div className="ceo-layout"><img src={ceoPhoto.url} alt="Mr. Ashish Rai, CEO and Managing Director of R.G. Enterprises" loading="lazy" /><div><span className="quote-mark" aria-hidden="true">“</span><blockquote>At R.G. Enterprises, we believe that trust, innovation, and reliability are the cornerstones of sustainable business relationships. Our commitment to excellence has enabled us to serve India's power sector for over two decades, and we continue to evolve with cutting-edge solutions that meet the dynamic needs of our valued clients.</blockquote><h3>Mr. Ashish Rai</h3><p className="ceo-title">CEO &amp; Managing Director</p><p className="ceo-company">R.G. Enterprises</p></div></div></div></section>
        <section id="clients" className="section-band muted-band"><div className="site-container"><div className="section-heading"><h2>Our Clientele</h2><p>Trusted exclusively by government sector power generation companies across India</p></div><div className="clients-grid">{clients.map(([name, text]) => <article className="client-item" key={name}><Building2 /><h3>{name}</h3><p>{text}</p><span>Government Sector</span></article>)}</div><div className="values-grid">{[[ShieldCheck, "Quality Assurance", "Rigorous testing and quality control measures for all equipment"], [Users, "Long-term Partnerships", "Building lasting relationships based on trust and reliability"], [Building2, "Government Focus", "Specialized in serving government sector power companies"]].map(([Icon, title, text]) => { const ValueIcon = Icon as typeof ShieldCheck; return <div className="value-item" key={String(title)}><ValueIcon /><h3>{String(title)}</h3><p>{String(text)}</p></div>; })}</div></div></section>
        <section id="contact" className="section-band"><div className="site-container"><div className="section-heading"><h2>Contact Us</h2><p>Get in touch with us for all your power plant equipment needs</p></div><div className="contact-grid"><div className="contact-details"><div className="contact-row"><MapPin /><div><h3>Our Office – Nagpur</h3><p>Shree Apartments, Flat No. 104,<br />Behind Khare Town Post Office,<br />Near Mama Road, Dharampeth,<br />Nagpur - 440010, Maharashtra</p></div></div><div className="contact-row delhi-office"><MapPin /><div><h3>Branch Office – Delhi</h3><p>A-83, Second Floor, Pandav Nagar,<br />Delhi – 110092.</p><a className="map-link" href="https://maps.google.com/?q=28.619888,77.283852" target="_blank" rel="noopener noreferrer">View on Google Maps <ArrowRight size={15} /></a></div></div><div className="contact-row"><Phone /><div><h3>Phone</h3><a href="tel:07122549848">0712-2549848</a></div></div><div className="contact-row"><Mail /><div><h3>Email</h3><a href="mailto:info@rgenterprisesindia.com">info@rgenterprisesindia.com</a><a href="mailto:sales@rgenterprisesindia.com">sales@rgenterprisesindia.com</a></div></div><div className="contact-row"><Clock3 /><div><h3>Business Hours</h3><p>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p></div></div><div className="business-details"><h3>Business Details</h3><p><strong>GSTIN:</strong> 27ABNPR6575M1ZM</p><p><strong>MSME No.:</strong> UDYAM-MH-20-0035660</p></div></div><div className="quick-contact"><h3>Quick Contact</h3>{[[Mail, "General Inquiries", "Get in touch for general questions and information", "mailto:info@rgenterprisesindia.com?subject=General%20Inquiry"], [Building2, "Sales Inquiries", "Contact our sales team for product information and quotes", "mailto:sales@rgenterprisesindia.com?subject=Sales%20Inquiry"], [Factory, "Product Catalog", "Request our complete product catalog and specifications", "mailto:info@rgenterprisesindia.com?subject=Product%20Catalog%20Request"], [Phone, "Call Us", "Speak directly with our team: 0712-2549848", "tel:07122549848"]].map(([Icon, title, text, href]) => { const ContactIcon = Icon as typeof Mail; return <a className="quick-contact-link" key={String(title)} href={String(href)}><ContactIcon /><div><h4>{String(title)}</h4><p>{String(text)}</p></div><ChevronRight className="contact-arrow" /></a>; })}</div></div></div></section>
      </main>
      <footer className="site-footer"><div className="site-container footer-inner"><div><a href="#home" className="footer-brand">RG ENTERPRISES INDIA PVT LTS</a><p>Reliable Power Plant Equipment &amp; Solutions</p></div><p>© {new Date().getFullYear()} R.G. Enterprises. All rights reserved.</p></div></footer>
    </div>
  );
}
