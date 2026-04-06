
export default function StatsSection() {
  const stats = [
    {
      value: "15K+",
      label: "Active Users",
    },
    {
      value: "30K",
      label: "Gallery Posts",
    },
    {
      value: "10K",
      label: "Travel Blogs",
    },
  ];

  return (
    <section className="bg-white/5 border border-white/10 rounded-2xl px-6 py-10 lg:px-10 lg:py-12 backdrop-blur-xl shadow-2xl shadow-black/30">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
        {stats.map((item, index) => (
          <div key={index} className="py-6 md:py-0 flex flex-col items-center">
            
            {/* Value */}
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-wide">
              {item.value}
            </h3>

            {/* Label */}
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">
              {item.label}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}