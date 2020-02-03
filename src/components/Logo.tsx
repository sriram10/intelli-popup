import React from 'react';

const Logo = (props: { width?: number }) => (
  <img src="/images/logo.png" width={props.width || 80} />
);

export default Logo;
