import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ProfileImage } from './ProfileImage';
import { ProfileContent } from './ProfileContent';

export const ProfileSection = ({
  imageUrl = "/profile.png",
  imageAlt = "Profile image of UMA, designer horse owner"
}) => {
  return (
    <SectionWrapper id="profile" className="bg-gray-50">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* 左側：プロフィール画像 */}
        <div className="w-full md:w-1/3">
          <ProfileImage src={imageUrl} alt={imageAlt} />
        </div>
        
        {/* 右側：テキストコンテンツ */}
        <div className="w-full md:w-2/3">
          <ProfileContent />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProfileSection; 