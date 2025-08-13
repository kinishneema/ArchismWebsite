export default function RolesSection() {
  const roles = [
    {
      title: "Distributors",
      img: "https://via.placeholder.com/400x250",
      desc: "From building materials to specialty tools...",
    },
    {
      title: "Contractors",
      img: "https://via.placeholder.com/400x250",
      desc: "Contractors play a key role in coordinating manpower...",
    },
  ];

  return (
    <section className="py-16 px-6 lg:px-20 grid md:grid-cols-2 gap-12">
      {roles.map((role, i) => (
        <div key={i}>
          <h4 className="text-xl font-bold mb-4">{role.title}</h4>
          <img
            src={role.img}
            alt={role.title}
            className="rounded-lg shadow-lg mb-4"
          />
          <p className="text-gray-300">{role.desc}</p>
        </div>
      ))}
    </section>
  );
}
