import { reaPackages } from '../../data/chartData';

export const PackageGrid = () => {
  return (
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {reaPackages.map((pkg) => (
        <a
          key={pkg.name}
          href={pkg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 block"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
          <div className="relative p-8">
            <div className="text-4xl mb-4">{pkg.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
            <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
        </a>
      ))}
    </div>
  );
};