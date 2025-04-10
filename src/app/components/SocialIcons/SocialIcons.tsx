'use client';

import clsx from 'clsx';
import IconLink from '../IconButton/IconLink';
import { SOCIAL_LINKS } from './social-icons.constant';

import styles from './SocialIcons.module.scss';

export default function SocialIcons() {
  return (
    <div className={clsx(styles.socialIcons)}>
      {SOCIAL_LINKS.map((socialLink, index) => (
        <IconLink key={index} href={socialLink.url} target="_blank">
          <socialLink.icon />
        </IconLink>
      ))}
    </div>
  );
}
