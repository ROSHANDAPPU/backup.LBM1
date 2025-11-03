import { Button } from "@/components/UI/button";
import { Link } from "react-router-dom";

interface CTAPanelProps {
  title: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string; // Optional for the second button
  secondaryButtonLink?: string; // Optional for the second button
}

const CTAPanel: React.FC<CTAPanelProps> = ({
  title,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) => {
  return (
    <div className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-center mb-16" style={{ fontFamily: 'Libre Baskerville, serif' }}>{title}</h2>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg" className="uppercase">
            <Link to={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button asChild size="lg" variant="outline" className="uppercase">
              <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTAPanel;
