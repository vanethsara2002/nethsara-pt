import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <div
          className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just connecting
              with fellow professionals in biomedical technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:0788522243"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
                    >
                      0788522243
                    </a>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Available Mon-Fri, 9AM-6PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-600 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:vanethsara119@gmail.com"
                      className="text-green-600 dark:text-green-400 hover:underline text-lg break-all"
                    >
                      vanethsara119@gmail.com
                    </a>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      I'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Location
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 text-lg">
                      Gampaha, Sri Lanka
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Open to remote opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>

              <div className="space-y-4 mb-8">
                <a
                  href="https://www.instagram.com/devin.nethsara.56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900 transition-all duration-300 hover:scale-105 shadow group"
                >
                  <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Instagram</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      @devin.nethsara.56
                    </p>
                  </div>
                  <Send className="w-5 h-5 text-gray-400 ml-auto group-hover:text-pink-600 transition-colors duration-300" />
                </a>

                <a
                  href="https://www.facebook.com/share/1AaVDQrxok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900 transition-all duration-300 hover:scale-105 shadow group"
                >
                  <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Facebook</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Connect on Facebook
                    </p>
                  </div>
                  <Send className="w-5 h-5 text-gray-400 ml-auto group-hover:text-blue-600 transition-colors duration-300" />
                </a>
              </div>

              <div className="pt-6 border-t border-gray-300 dark:border-gray-600">
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  Let's collaborate and create innovative solutions in biomedical technology
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Connect?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, want to collaborate, or just want to say hi,
                I'd love to hear from you!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:0788522243"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:vanethsara119@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
