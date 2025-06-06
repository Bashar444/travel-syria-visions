
interface TermsSectionProps {
  title: string;
  content: string;
  items?: string[];
  highlighted?: boolean;
  bgColor?: string;
}

const TermsSection = ({ title, content, items, highlighted = false, bgColor }: TermsSectionProps) => {
  const sectionClasses = highlighted 
    ? `${bgColor || 'bg-blue-50'} p-6 rounded-lg border-l-4 border-[#0018A8] content-spacing`
    : bgColor 
    ? `${bgColor} p-6 rounded-lg content-spacing`
    : 'content-spacing';

  const titleClasses = highlighted 
    ? 'text-2xl font-semibold text-[#0018A8] mb-4 text-content'
    : 'text-2xl font-semibold text-[#231F20] mb-4 text-content';

  return (
    <section className={sectionClasses}>
      <h2 className={titleClasses}>{title}</h2>
      <p className="text-gray-700 leading-relaxed text-lg text-content mb-4">
        {content}
      </p>
      {items && (
        <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
          {items.map((item, index) => (
            <li key={index} className="leading-relaxed text-content">{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TermsSection;
