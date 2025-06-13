import { reaPackages } from '../../data/chartData';

export const PackageGrid = () => {
  return (
    <div className="relative z-10 grid grid-cols-2 gap-8 max-w-2xl mx-auto">
      {reaPackages.map((pkg) => (
        <a
          key={pkg.name}
          href={pkg.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 block"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
          <div className="relative p-8">
            <div className="mb-4 flex justify-center">
              <img 
                src={pkg.logo} 
                alt={pkg.name} 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 leading-relaxed text-center">{pkg.description}</p>
          </div>
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
        </a>
      ))}
    </div>
  );
};