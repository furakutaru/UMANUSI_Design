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
    <main className="flex flex-col gap-5 items-center px-0 py-5 mx-auto my-0 w-[1200px] max-md:p-4 max-md:w-full max-md:max-w-screen-md max-sm:gap-4 max-sm:p-2.5 max-sm:w-full">
      <ProfileSection />
      <ValuePropositionSection
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/88bd94fbbc947eb9f3f3324cf954e60cd560fbdb?placeholderIfAbsent=true"
        altText="ValuePropositionSection"
      />
    </main>
  );
};

export default MainContentWrapper; 