export default function ServicesSection() {
  const services = [
    {
      title: "Drafting Services",
      desc: "Archism drafting & support services...",
    },
    {
      title: "Estimating Services",
      desc: "Accurately understand estimating software...",
    },
    {
      title: "Quoting Services",
      desc: "Creating professionally written quotes...",
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-6 lg:px-20">
      <h3 className="text-3xl font-bold text-center mb-12">
        Specialists In Modern Construction
      </h3>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {services.map((service, i) => (
            <div key={i} className="flex gap-4">
              <div className="h-10 w-10 bg-orange-500 rounded-full" />
              <div>
                <h4 className="text-lg font-semibold">{service.title}</h4>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            src="https://via.placeholder.com/400x300"
            alt="Service"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
