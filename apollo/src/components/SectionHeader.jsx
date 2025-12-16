export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-teal mx-auto mt-8"></div>
    </div>
  );
}
