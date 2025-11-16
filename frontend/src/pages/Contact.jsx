export default function Contact() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Have questions or feedback? We’d love to hear from you. Reach out
          anytime!
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-2xl shadow-md text-left">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Email:</span> support@remindra.com
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Phone:</span> +63 912 345 6789
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
