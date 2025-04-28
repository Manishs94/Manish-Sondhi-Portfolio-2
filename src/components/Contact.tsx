import { Mail, Linkedin, Github, ArrowRight, Send, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // Here you would typically send the data to your backend
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Create Something Amazing</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-blue-50 dark:bg-gray-600 rounded-lg">
                      <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                      <a href="mailto:Manishsondhi94@gmail.com" className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Manishsondhi94@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-blue-50 dark:bg-gray-600 rounded-lg">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white">+1 (609) 816-XXXX</p>
                    </div>
                  </div>
                </div>

                <div className="border-t dark:border-gray-600 pt-8">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-6">Connect With Me</h4>
                  <div className="flex items-center gap-5">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://www.linkedin.com/in/manish-sondhi-2b3bb2217/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-50 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://github.com/Manishs94"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-50 dark:bg-gray-600 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                <div className="border-t dark:border-gray-600 mt-8 pt-8">
                  <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Resume</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Get a detailed overview of my experience and capabilities
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://drive.google.com/file/d/1mh8jWf6acspgD7GOF8PW2OixRcL59zD5/view?usp=sharing"
                    className="w-full px-4 py-2.5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    Download CV
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                    } bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}