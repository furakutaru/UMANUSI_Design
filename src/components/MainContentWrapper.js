import React, { useState } from 'react';
import { AccordionHeader } from './AccordionHeader';
import { ValuePropositionSection } from './ValuePropositionSection';
import { ProfileSection } from './ProfileSection';

export const MainContentWrapper = () => {
  const [isAccordionExpanded, setIsAccordionExpanded] = useState(false);

  const handleAccordionToggle = (expanded) => {
    setIsAccordionExpanded(expanded);
  };

  return (
    <main className="w-full p-0 m-0">
      <ProfileSection />
      <ValuePropositionSection />
    </main>
  );
};

export default MainContentWrapper; 