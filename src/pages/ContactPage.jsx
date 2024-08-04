import React from "react";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-300 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            আপনার কথা শুনতে আমরা আগ্রহী! অনুগ্রহ করে নিচের ফর্মটি পূরণ করুন এবং
            আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="name" className="sr-only">
                নাম
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="আপনার নাম"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                ইমেইল ঠিকানা
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="ইমেইল ঠিকানা"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                বার্তা
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="আপনার বার্তা"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              বার্তা পাঠান
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
