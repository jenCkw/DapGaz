import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="h-[456px] w-full flex items-center bg-bgHero bg-no-repeat bg-cover">
        <div className="mx-auto flex flex-col items-center container gap-6">
          <h2 className="text-3xl lg:text-6xl text-white font-bold text-center lg:leading-[80px]">
            Contactez-nous
          </h2>
        </div>
      </div>
      <section className="text-gray-800 text-center pt-10 pb-32 px-[5%] bg-white">
        <h2 className="text-3xl font-bold mb-12">
          Chez DAPGAZ, la communication est la base.
        </h2>
        <p className="my-8">
          Appelez-nous, faites-nous un mail ou trouvez-nous dans nos bureaux.
        </p>
        <div className="grid md:grid-cols-3 lg:gap-x-12">
          <div className="mb-12 md:mb-0 flex flex-col items-center">
            <div className="rounded-full p-4 h-[60px] w-[60px] bg-black mb-6"></div>
            <h5 className="text-lg font-bold mb-4">24h/24</h5>
            <p className="text-gray-500">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam
              aspernatur odio soluta, quisquam dolore animi mollitia a omnis
              praesentium, expedita nobis!
            </p>
          </div>

          <div className="mb-12 md:mb-0 flex flex-col items-center">
            <div className="rounded-full p-4 h-[60px] w-[60px] bg-black mb-6"></div>
            <h5 className="text-lg font-bold mb-4">Safe and solid</h5>
            <p className="text-gray-500">
              Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam
              aspernatur odio soluta, quisquam dolore animi mollitia a omnis
              praesentium, expedita nobis!
            </p>
          </div>

          <div className="mb-12 md:mb-0 flex flex-col items-center">
            <div className="rounded-full p-4 h-[60px] w-[60px] bg-black mb-6"></div>
            <h5 className="text-lg font-bold mb-4">Extremely fast</h5>
            <p className="text-gray-500">
              Enim cupiditate, minus nulla dolor cumque iure eveniet facere
              ullam beatae hic voluptatibus dolores exercitationem? Facilis
              debitis aspernatur amet nisi?
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contactez-nous
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Vous avez un problème technique ? Vous avez besoin de détails sur
            nos activités ? N'hésitez pas à nous en faire part.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Adresse mail
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Objet
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Faites-nous savoir comment nous pouvons vous aider"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Laisser un commentaire..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center bg-blue-500 text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
