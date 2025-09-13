"use client";

import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Navigation */}
      <nav className="bg-black border-b border-yellow-600/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg" 
                alt="Shobha Beauty Studio Logo" 
                className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1"
              />
              <div>
                <h1 className="font-bold text-xl text-white">Shobha Beauty Studio</h1>
                <p style={{color: '#C6A664'}} className="text-sm">& Nails • Since 2011</p>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+97143591532" 
                className="hidden md:flex items-center space-x-2 hover:text-white transition-colors" 
                style={{color: '#C6A664'}}
              >
                <span>📞</span>
                <span>+971 4 359 1532</span>
              </a>
              <Link 
                href="/" 
                className="px-6 py-2 rounded-full font-semibold transition-all" 
                style={{backgroundColor: '#C6A664', color: '#000000'}}
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #111111, #1a1a1a)'}}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            About Shobha Beauty Studio
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted beauty destination in the heart of Bur Dubai, dedicated to enhancing 
            your natural beauty with professional care and exceptional service since 2011.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span style={{color: '#C6A664'}}>Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Founded in 2011 in the bustling heart of Meena Bazaar, Bur Dubai, 
                  Shobha Beauty Studio & Nails began as a dream to provide exceptional 
                  beauty services to the diverse and vibrant community of Dubai.
                </p>
                <p>
                  What started as a small studio has grown into one of Bur Dubai's 
                  most trusted beauty destinations, serving thousands of satisfied 
                  clients over the past 13+ years. Our commitment to quality, 
                  professionalism, and customer satisfaction has been the cornerstone 
                  of our success.
                </p>
                <p>
                  Today, we specialize in professional nail artistry, hair straightening, 
                  expert blow drying, and intricate mehendi designs. Each service is 
                  performed with meticulous attention to detail and a passion for perfection.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#C6A664', color: '#000000'}}>
                  <div className="text-3xl font-bold mb-2">13+</div>
                  <div className="text-sm font-medium">Years Since 2011</div>
                </div>
                <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#C6A664', color: '#000000'}}>
                  <div className="text-3xl font-bold mb-2">8000+</div>
                  <div className="text-sm font-medium">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full h-auto bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 p-12 border border-yellow-600/30">
                <div className="text-center">
                  <div className="text-6xl mb-6" style={{color: '#C6A664'}}>🌟</div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    Women-Only Beauty Sanctuary
                  </h3>
                  <p className="text-gray-300 text-lg">
                    A comfortable, private space designed exclusively for women's beauty and wellness needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our Mission & <span style={{color: '#C6A664'}}>Values</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Guided by our core values, we strive to provide exceptional beauty services 
              that enhance confidence and celebrate individual beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-600/50 transition-all text-center">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="font-serif font-semibold text-xl text-white mb-4">
                Excellence
              </h3>
              <p className="text-gray-300">
                We maintain the highest standards in all our services, using premium 
                products and advanced techniques to deliver outstanding results.
              </p>
            </div>

            {/* Trust */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-600/50 transition-all text-center">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="font-serif font-semibold text-xl text-white mb-4">
                Trust & Safety
              </h3>
              <p className="text-gray-300">
                Your safety and satisfaction are our top priorities. We maintain strict 
                hygiene standards and use only certified, safe products.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-yellow-600/50 transition-all text-center">
              <div className="text-5xl mb-6">💡</div>
              <h3 className="font-serif font-semibold text-xl text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-300">
                We stay updated with the latest beauty trends and techniques, 
                continuously improving our services to meet evolving needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Expert <span style={{color: '#C6A664'}}>Team</span>
            </h2>
            <p className="text-lg text-gray-300">
              Our skilled professionals bring years of experience and passion to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 hover:border-yellow-600/30 transition-all">
              <img
                src="https://storage.googleapis.com/workspace-ai-generated/image-shobha-founder-portrait.jpg"
                alt="Shobha - Founder and Lead Stylist professional portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-600/30"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae2c0d4f-ac29-4134-8147-449a31b30378.png";
                }}
              />
              <h3 className="font-serif font-semibold text-lg text-white mb-2">
                Shobha
              </h3>
              <p style={{color: '#C6A664'}} className="font-medium text-sm mb-2">Founder & Lead Stylist</p>
              <p className="text-gray-300 text-sm">
                Master stylist with 13+ years experience since 2011 in all beauty services
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 hover:border-yellow-600/30 transition-all">
              <img
                src="https://storage.googleapis.com/workspace-ai-generated/image-nail-specialist-portrait.jpg"
                alt="Expert nail technician and nail art specialist professional portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-600/30"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/25268fb5-43d9-407e-9bad-97d6c8eb6d4a.png";
                }}
              />
              <h3 className="font-serif font-semibold text-lg text-white mb-2">
                Priya
              </h3>
              <p style={{color: '#C6A664'}} className="font-medium text-sm mb-2">Senior Nail Artist</p>
              <p className="text-gray-300 text-sm">
                Expert in nail art, press-on nails, and creative designs with artistic flair
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 hover:border-yellow-600/30 transition-all">
              <img
                src="https://storage.googleapis.com/workspace-ai-generated/image-mehendi-artist-portrait.jpg"
                alt="Professional mehendi artist and henna specialist portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-600/30"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c55b9e54-4a49-466a-b91a-4e28de494d4a.png";
                }}
              />
              <h3 className="font-serif font-semibold text-lg text-white mb-2">
                Fatima
              </h3>
              <p style={{color: '#C6A664'}} className="font-medium text-sm mb-2">Mehendi Specialist</p>
              <p className="text-gray-300 text-sm">
                Specialized in bridal and traditional mehendi with intricate design expertise
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gray-800/50 rounded-2xl p-6 text-center border border-gray-700 hover:border-yellow-600/30 transition-all">
              <img
                src="https://storage.googleapis.com/workspace-ai-generated/image-hair-specialist-portrait.jpg"
                alt="Professional hair specialist and beauty consultant portrait"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-600/30"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/58aa9237-9177-43d6-b949-3b193b952a08.png";
                }}
              />
              <h3 className="font-serif font-semibold text-lg text-white mb-2">
                Aisha
              </h3>
              <p style={{color: '#C6A664'}} className="font-medium text-sm mb-2">Hair Specialist</p>
              <p className="text-gray-300 text-sm">
                Expert in hair straightening, blow dry, and hair care treatments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Our Premium <span style={{color: '#C6A664'}}>Facility</span>
            </h2>
            <p className="text-lg text-gray-300">
              A modern, comfortable space designed for your relaxation and beauty transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#C6A664'}}>
                  <span className="text-black text-lg">🏢</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Modern Equipment
                  </h3>
                  <p className="text-gray-300">
                    State-of-the-art professional equipment and tools for all our services, 
                    ensuring the best results and comfort.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#C6A664'}}>
                  <span className="text-black text-lg">🧼</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Hygiene Standards
                  </h3>
                  <p className="text-gray-300">
                    Strict hygiene protocols with sanitized equipment, clean workspace, 
                    and safety measures for every client.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#C6A664'}}>
                  <span className="text-black text-lg">💺</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Comfortable Environment
                  </h3>
                  <p className="text-gray-300">
                    Relaxing atmosphere with comfortable seating, pleasant ambiance, 
                    and welcoming space for all clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#C6A664'}}>
                  <span className="text-black text-lg">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-2">
                    Prime Location
                  </h3>
                  <p className="text-gray-300">
                    Conveniently located in Meena Bazaar, Bur Dubai, with easy access 
                    and nearby parking facilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-2xl w-full h-auto bg-gradient-to-br from-yellow-600/20 to-yellow-600/5 p-12 border border-yellow-600/30">
                <div className="text-center">
                  <div className="text-6xl mb-6" style={{color: '#C6A664'}}>🏢</div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">
                    Premium Facility Features
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-2xl mb-2">💺</div>
                      <p className="text-gray-300">Comfortable Seating</p>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-2xl mb-2">🧼</div>
                      <p className="text-gray-300">Sanitized Equipment</p>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-2xl mb-2">❄️</div>
                      <p className="text-gray-300">Climate Controlled</p>
                    </div>
                    <div className="bg-black/30 p-3 rounded-lg">
                      <div className="text-2xl mb-2">🎵</div>
                      <p className="text-gray-300">Relaxing Ambiance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & <span style={{color: '#C6A664'}}>Recognition</span>
            </h2>
            <p className="text-lg text-gray-300">
              Our commitment to excellence recognized through professional certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="font-semibold text-white mb-2">Professional Certification</h3>
              <p className="text-sm text-gray-300">Certified beauty professionals with continuous training</p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-white mb-2">Safety Standards</h3>
              <p className="text-sm text-gray-300">Compliant with UAE health and safety regulations</p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-white mb-2">Client Satisfaction</h3>
              <p className="text-sm text-gray-300">95% customer satisfaction rate and positive reviews</p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="font-semibold text-white mb-2">Community Trust</h3>
              <p className="text-sm text-gray-300">Trusted by Bur Dubai community since 2011 - 13+ years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{background: 'linear-gradient(135deg, #C6A664, #D4B570)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-black mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Join thousands of satisfied clients who trust Shobha Beauty Studio for their beauty needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors"
            >
              Book Your Visit
            </Link>
            <Link
              href="/gallery"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition-all"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}