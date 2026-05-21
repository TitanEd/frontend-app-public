/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from 'react';

import {
  FOOTER_LOGO_FALLBACK,
  HEADER_LOGO_FALLBACK,
  resolveFooterLogoSrc,
  resolveHeaderLogoSrc,
} from '../../utils/brandAssets';

const VARIANTS = {
  header: {
    fallback: HEADER_LOGO_FALLBACK,
    resolve: resolveHeaderLogoSrc,
  },
  footer: {
    fallback: FOOTER_LOGO_FALLBACK,
    resolve: resolveFooterLogoSrc,
  },
};

const BrandLogo = ({ variant = 'header', className, alt }) => {
  const { fallback, resolve } = VARIANTS[variant] || VARIANTS.header;
  const primarySrc = resolve();
  const [src, setSrc] = useState(primarySrc);

  useEffect(() => {
    setSrc(primarySrc);
  }, [primarySrc]);

  const handleError = useCallback(() => {
    setSrc((current) => (current === fallback ? current : fallback));
  }, [fallback]);

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={handleError}
    />
  );
};

export default BrandLogo;
