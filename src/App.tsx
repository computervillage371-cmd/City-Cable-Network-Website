/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Wifi, 
  Tv, 
  Zap, 
  ShieldCheck, 
  Headset, 
  ChevronRight, 
  Menu, 
  X,
  Phone,
  Mail,
  User,
  Monitor,
  Globe,
  Database,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  MapPin,
  Check
} from "lucide-react";
import { useState, useEffect } from "react";

const handleScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

const TopBar = () => (
  <div className="bg-[#1a1a1a] text-white py-2 text-xs md:text-sm hidden sm:block">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-amber-red" />
          <a href="tel:+8801344201022" className="hover:text-amber-red">+880 1344-201022</a>
          <span className="opacity-30">|</span>
          <a href="tel:+8801344201018" className="hover:text-amber-red">01344-201018</a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-amber-red" />
          <a href="mailto:citycablenetwork25@gmail.com" className="hover:text-amber-red">citycablenetwork25@gmail.com</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-amber-red font-bold">
          <Smartphone className="w-3.5 h-3.5" />
          <a href="https://wa.me/8801344201022" target="_blank" rel="noreferrer" className="hover:underline">WhatsApp Support</a>
        </div>
        <div className="flex gap-3 ml-4">
          <Facebook className="w-3.5 h-3.5 hover:text-amber-red cursor-pointer" />
          <Twitter className="w-3.5 h-3.5 hover:text-amber-red cursor-pointer" />
          <Linkedin className="w-3.5 h-3.5 hover:text-amber-red cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 sm:top-9 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg sm:top-0" : "bg-white/95"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-amber-red p-2 rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-2xl font-black text-amber-dark tracking-tighter">CITY CABLE</span>
              <span className="text-xs font-bold text-amber-red tracking-[0.1em] -mt-1">NETWORK (CCN)</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-6 mt-1">
              {[
                { label: "HOME", id: "home" },
                { label: "INTERNET", id: "packages" },
                { label: "CCTV & IT", id: "services" },
                { label: "REFERRAL", id: "referral" },
                { label: "CONTACT", id: "contact" }
              ].map((item) => (
                <button 
                  key={item.id} 
                  onClick={() => handleScrollTo(item.id)}
                  className="text-[13px] font-extrabold text-amber-dark hover:text-amber-red transition-colors tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a 
              href="https://wa.me/8801344201022" 
              target="_blank" 
              rel="noreferrer"
              className="bg-amber-red text-white px-6 py-2.5 rounded-md font-bold text-sm hover:bg-amber-dark transition-all shadow-md"
            >
              PAY BILL
            </a>
          </div>

          {/* Mobile Button */}
          <button className="lg:hidden p-2 text-amber-dark" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {[
            { label: "HOME", id: "home" },
            { label: "INTERNET", id: "packages" },
            { label: "CCTV & IT", id: "services" },
            { label: "REFERRAL", id: "referral" },
            { label: "CONTACT", id: "contact" }
          ].map((item) => (
            <button key={item.id} onClick={() => { handleScrollTo(item.id); setIsOpen(false); }} className="font-bold text-amber-dark py-2 text-left">{item.label}</button>
          ))}
          <a href="https://wa.me/8801344201022" target="_blank" rel="noreferrer" className="bg-amber-red text-white w-full py-3 rounded-md font-bold text-center">PAY BILL</a>
        </div>
      </motion.div>
    </nav>
  );
};

const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="bg-white p-8 border border-slate-100 hover:border-amber-red/20 hover:shadow-xl transition-all group">
    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-amber-red mb-6 border-b-2 border-amber-red/0 group-hover:bg-amber-red group-hover:text-white transition-all">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-3 group-hover:text-amber-red transition-colors">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-4">{desc}</p>
    <a href="#" className="text-amber-red font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
      READ MORE <ChevronRight size={14} />
    </a>
  </div>
);

const PriceCard = ({ title, speed, price, features, recommended }: any) => (
  <div className={`relative flex flex-col items-center text-center p-10 border-2 transition-all ${
    recommended ? "border-amber-red shadow-2xl scale-105 z-10 bg-white" : "border-slate-100 bg-white hover:border-slate-300"
  }`}>
    {recommended && (
      <div className="absolute top-0 right-0 bg-amber-red text-white py-1 px-4 text-[10px] font-black uppercase tracking-[0.2em] -translate-y-full mb-2">
        Most Popular
      </div>
    )}
    <h4 className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-4">{title}</h4>
    <div className="flex flex-col mb-6">
      <span className="text-6xl font-black text-amber-dark">{speed}</span>
      <span className="text-amber-red font-bold">Mbps</span>
    </div>
    <div className="w-12 h-0.5 bg-amber-red mb-6" />
    <div className="flex items-baseline gap-1 mb-8">
      <span className="text-xs font-bold text-slate-400">BDT</span>
      <span className="text-4xl font-black text-amber-dark">{price}</span>
      <span className="text-xs font-bold text-slate-400">/ Monthly</span>
    </div>
    <ul className="space-y-2 mb-10 w-full text-sm text-slate-500 font-medium">
      {features.map((f: string, i: number) => (
        <li key={i} className="flex justify-center items-center gap-2">
          <Check size={14} className="text-amber-red" />
          {f}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 font-black transition-all ${
      recommended ? "bg-amber-red text-white" : "bg-amber-dark text-white hover:bg-amber-red"
    }`}>
      GET CONNECTED
    </button>
  </div>
);

export default function App() {
  const openWhatsApp = () => {
    window.open("https://wa.me/8801344201022", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-[600px] lg:h-[800px] flex items-center overflow-hidden bg-amber-dark pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-dark via-amber-dark/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
            alt="Broadband Fiber" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <span className="inline-block bg-amber-red px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Official City Cable Network (CCN)
            </span>
            <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight">
              আপনার বাড়ি বা অফিসে <br />
              <span className="text-amber-red">Best Internet</span> কানেকশন
            </h1>
            <p className="text-lg text-slate-300 font-medium mb-10 max-w-xl leading-relaxed">
              আপনার বাড়ি/বাসা/ওফিস/দোকানে ব্রডব্র্যান্ড ইন্টারনেট কানেকশন, সিসিটিভি ক্যামেরা ইন্সটেলশন ও যেকোনো আইটি হেল্প নিতে আমাদের সাথে যোগাযোগ করুন।
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={openWhatsApp}
                className="bg-amber-red hover:bg-white hover:text-amber-red text-white h-16 px-10 font-black text-sm flex items-center gap-2 transition-all shadow-xl shadow-amber-red/20 group uppercase tracking-widest"
              >
                Message us now <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/20 hover:bg-white hover:text-amber-dark text-white h-16 px-10 font-black text-sm transition-all uppercase tracking-widest"
              >
                View Packages
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section id="referral" className="bg-amber-red py-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full animate-bounce">
              <Zap size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-black">কী ভাই, ফ্রি রাউটার চাই? 🎁</h2>
              <p className="font-bold opacity-90">৩ জন বন্ধুকে রেফার করুন, আর জিতে নিন একটি ব্র্যান্ড নিউ রাউটার!</p>
            </div>
          </div>
          <button onClick={openWhatsApp} className="bg-white text-amber-red px-8 py-3 rounded-full font-black text-sm hover:scale-105 transition-transform uppercase">
            রেফার করুন এখনই
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase">আমাদের <span className="text-amber-red">সেবা সমূহ</span></h2>
          <div className="w-20 h-1 bg-amber-red mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-slate-100">
          <ServiceCard 
            icon={Wifi} 
            title="Home Internet" 
            desc="High-speed fiber connectivity for your home, streaming, and gaming with 24/7 support."
          />
          <ServiceCard 
            icon={Monitor} 
            title="CCTV Installation" 
            desc="Professional CCTV camera setup for your home, office or shop with mobile monitoring."
          />
          <ServiceCard 
            icon={Smartphone} 
            title="IT Help Desk" 
            desc="Any IT related issues? Our experts are here to help you solve your hardware & software problems."
          />
          <ServiceCard 
            icon={Zap} 
            title="IP Telephony" 
            desc="Crystal clear voice calls and IP phone setup for corporate and residential needs."
          />
        </div>
      </section>

      {/* Popular Packages */}
      <section id="packages" className="bg-amber-light py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4 uppercase">ইন্টারনেট <span className="text-amber-red">প্যাকেজ সমূহ</span></h2>
            <div className="w-20 h-1 bg-amber-red mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-0 mt-10 items-stretch">
            <PriceCard 
              title="Standard Home"
              speed="10"
              price="500"
              features={["24/7 Support", "Unlimited Data", "Free Installation", "Single Device Optimized"]}
            />
            <PriceCard 
              title="Family Pack"
              speed="20"
              price="800"
              recommended={true}
              features={["Priority Support", "Real Public IP", "Optimized BDIX", "Multi-Device Friendly", "Buffer-free FB/Youtube"]}
            />
            <PriceCard 
              title="Premium Plus"
              speed="35"
              price="1200"
              features={["Enterprise Support", "Fiber to Home", "Dual Redundancy", "SLA Monitoring", "Zero Lag Gaming"]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-amber-red font-black uppercase tracking-widest text-xs">Reach Out</span>
            <h2 className="text-4xl lg:text-5xl font-black mt-4 mb-8 leading-tight">
              আমাদের সাথে <br />
              <span className="text-amber-red">যোগাযোগ</span> করুন
            </h2>
            <div className="space-y-8 mt-12">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-amber-red text-white flex items-center justify-center rounded-xl shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-slate-400 mb-1">Call for connection</div>
                  <div className="text-xl font-bold">+880 1344-201022</div>
                  <div className="text-xl font-bold">+880 1344-201018</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center rounded-xl shrink-0">
                  <Smartphone size={24} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-slate-400 mb-1">WhatsApp Message</div>
                  <a href="https://wa.me/8801344201022" className="text-xl font-bold hover:text-amber-red transition-all">01344201022</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-amber-dark text-white flex items-center justify-center rounded-xl shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-black uppercase text-slate-400 mb-1">Email us at</div>
                  <div className="text-xl font-bold">citycablenetwork25@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-black mb-6 uppercase">নতুন কানেকশন নিন</h3>
            <form 
              className="space-y-4" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const phone = formData.get('phone');
                const plan = formData.get('plan');
                const address = formData.get('address');
                
                const message = `Hello City Cable! I want a new connection:%0A%0AName: ${name}%0APhone: ${phone}%0APackage: ${plan}%0AAddress: ${address}`;
                window.open(`https://wa.me/8801344201022?text=${message}`, '_blank');
              }}
            >
              <input name="name" type="text" required placeholder="আপনার নাম" className="w-full h-14 px-6 bg-white border border-slate-200 rounded-xl focus:border-amber-red outline-none text-amber-dark font-medium" />
              <input name="phone" type="text" required placeholder="মোবাইল নাম্বার" className="w-full h-14 px-6 bg-white border border-slate-200 rounded-xl focus:border-amber-red outline-none text-amber-dark font-medium" />
              <select name="plan" required className="w-full h-14 px-6 bg-white border border-slate-200 rounded-xl focus:border-amber-red outline-none text-amber-dark font-medium">
                <option value="">প্যাকেজ নির্বাচন করুন</option>
                <option value="10 Mbps (500Tk)">১০ Mbps (৫০০৳)</option>
                <option value="20 Mbps (800Tk)">২০ Mbps (৮০০৳)</option>
                <option value="35 Mbps (1200Tk)">৩৫ Mbps (১২০০৳)</option>
                <option value="CCTV Help">সিসিটিভি ক্যামেরা হেল্প</option>
              </select>
              <textarea name="address" required placeholder="আপনার ঠিকানা" className="w-full h-32 p-6 bg-white border border-slate-200 rounded-xl focus:border-amber-red outline-none text-amber-dark font-medium resize-none"></textarea>
              <button type="submit" className="w-full h-16 bg-amber-red text-white font-black text-lg shadow-lg shadow-amber-red/20 hover:bg-amber-dark transition-all rounded-xl">
                সাবমিট করুন
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div>
              <div className="flex items-center gap-2 mb-10">
                <div className="bg-amber-red p-1.5 rounded-md">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-black tracking-tighter">CITY CABLE NETWORK</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                আপনার বাড়ি/বাসা/ওফিস/দোকানে ব্রডব্র্যান্ড ইন্টারনেট কানেকশন, সিসিটিভি ক্যামেরা ইন্সটেলশন ও যেকোনো আইটি হেল্প নিতে আমাদের সাথে যোগাযোগ করুন।
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all cursor-pointer">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] transition-all cursor-pointer">
                  <Smartphone size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-red transition-all cursor-pointer">
                  <Mail size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-black mb-8 border-l-4 border-amber-red pl-4">QUICK LINKS</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li><button onClick={() => handleScrollTo('packages')} className="hover:text-white transition-colors">Packages</button></li>
                <li><button onClick={() => handleScrollTo('services')} className="hover:text-white transition-colors">Our Services</button></li>
                <li><button onClick={() => handleScrollTo('referral')} className="hover:text-white transition-colors">Referral Offer</button></li>
                <li><button onClick={() => handleScrollTo('contact')} className="hover:text-white transition-colors">Contact Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-black mb-8 border-l-4 border-amber-red pl-4">CONTACT INFO</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-400">
                <li className="flex items-center gap-2"><Phone size={14} className="text-amber-red" /> +880 1344-201022</li>
                <li className="flex items-center gap-2"><Smartphone size={14} className="text-amber-red" /> 01344201018 (WhatsApp)</li>
                <li className="flex items-center gap-2"><Mail size={14} className="text-amber-red" /> citycablenetwork25@gmail.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-black mb-8 border-l-4 border-amber-red pl-4">OUR PROMISE</h4>
              <div className="bg-amber-red/10 p-6 border border-amber-red/20 rounded-xl">
                <p className="text-xs font-medium text-slate-300 leading-relaxed italic">
                  "We ensure 100% customer satisfaction with our dedicated support team and ultra-reliable fiber network."
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-red rounded-full flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase text-amber-red">Certified Quality</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.2em] gap-6">
            <div>© 2026 CITY CABLE NETWORK (CCN). ALL RIGHTS RESERVED.</div>
            <div className="flex gap-8">
              <span>SUPPORT: +8801344201022</span>
              <span className="text-[#333]">MODERN BROADBAND SOLUTIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
