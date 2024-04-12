// SocialMediaIcons.client.jsx
import React from 'react';
import { socialMedia } from '@/Constants'; // Check the path is correct
import MySVG from '@/Components/SVGComponent/SVGComponent'; // Check the path is correct
import styles from './Socialmedia.css'; // Your CSS module
import { color } from 'three/examples/jsm/nodes/Nodes.js';

const SocialMediaIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      {socialMedia.map((link, index) => (
        <div key={index} className={styles.socialIcon}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <MySVG name={link.fa_icon} className={styles.socialIcon} color="#fff" />
          </a>
        </div>
      ))}
      <p style={{ color: '#151515' }}>socials</p> {/*For some stupid reason I dont have time to debud, the icons dont appear if there is no text*/}
    </div>
  );
};

export default SocialMediaIcons;
