import React from 'react';

const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon} />
      </a>
    </li>
  );
};

export default SocialLink;
