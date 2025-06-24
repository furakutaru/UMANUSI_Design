import React from 'react';
import { ProfileImage } from './ProfileImage';
import { ProfileContent } from './ProfileContent';

export const ProfileSection = ({
  imageUrl = "https://cdn.builder.io/api/v1/image/assets/d22efd85dd1e4c99a198cddf2a2a638b/0209ce67ab1dae1950fee0ad33a8c15e4e7d92e0?placeholderIfAbsent=true",
  imageAlt = "Profile image of UMA, designer horse owner"
}) => {
  return (
    <section className="overflow-hidden py-12">
      <div className="flex gap-5 max-md:flex-col max-md:">
        <ProfileImage
          src={imageUrl}
          alt={imageAlt}
        />
        <ProfileContent />
      </div>
    </section>
  );
};

export default ProfileSection; 