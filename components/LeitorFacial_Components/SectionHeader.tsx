// components/LeitorFacial_Components/SectionHeader.tsx
interface SectionHeaderProps {
  title: string;
  description: string;
  center?: boolean;
  className?: string;
}

export const SectionHeader = ({ title, description, center = false, className = '' }: SectionHeaderProps) => {
  return (
    <div className={`mb-6 ${center ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};
