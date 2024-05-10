import { darken, lighten } from 'polished';

import { systemColors } from './default-config';

const colors = {
  primary: systemColors.primary,
  secondary: systemColors.secondary,
  ascendent: systemColors.ascendent,
  primaryAlpha10: hexToRgbA(systemColors.primary, 0.1),
  primaryAlpha20: hexToRgbA(systemColors.primary, 0.2),
  primaryAlpha30: hexToRgbA(systemColors.primary, 0.3),
  primaryAlpha40: hexToRgbA(systemColors.primary, 0.4),
  primaryAlpha50: hexToRgbA(systemColors.primary, 0.5),
  primaryAlpha60: hexToRgbA(systemColors.primary, 0.6),
  primaryAlpha70: hexToRgbA(systemColors.primary, 0.7),
  primaryAlpha80: hexToRgbA(systemColors.primary, 0.8),
  primaryAlpha90: hexToRgbA(systemColors.primary, 0.9),
  primaryLight1: lighten(0.1, systemColors.primary),
  primaryLight2: lighten(0.2, systemColors.primary),
  primaryLight3: lighten(0.3, systemColors.primary),
  primaryLight4: lighten(0.4, systemColors.primary),
  primaryDark1: darken(0.1, systemColors.primary),
  primaryDark2: darken(0.2, systemColors.primary),
  primaryDark3: darken(0.3, systemColors.primary),
  primaryDark4: darken(0.4, systemColors.primary),
  secondaryLight1: lighten(0.1, systemColors.secondary),
  secondaryLight2: lighten(0.2, systemColors.secondary),
  secondaryLight3: lighten(0.3, systemColors.secondary),
  secondaryLight4: lighten(0.4, systemColors.secondary),
  secondaryDark1: darken(0.1, systemColors.secondary),
  secondaryDark2: darken(0.2, systemColors.secondary),
  secondaryDark3: darken(0.3, systemColors.secondary),
  secondaryDark4: darken(0.4, systemColors.secondary),
  ascendentLight1: lighten(0.1, systemColors.ascendent),
  ascendentLight2: lighten(0.2, systemColors.ascendent),
  ascendentLight3: lighten(0.3, systemColors.ascendent),
  ascendentLight4: lighten(0.4, systemColors.ascendent),
  ascendentDark1: darken(0.1, systemColors.ascendent),
  ascendentDark2: darken(0.2, systemColors.ascendent),
  ascendentDark3: darken(0.3, systemColors.ascendent),
  ascendentDark4: darken(0.4, systemColors.secondary),
  white: '#ffffff',
  whiteAlpha10: 'rgba(255, 255, 255, 0.9)',
  whiteAlpha20: 'rgba(255, 255, 255, 0.8)',
  whiteAlpha30: 'rgba(255, 255, 255, 0.7)',
  whiteAlpha40: 'rgba(255, 255, 255, 0.6)',
  whiteAlpha50: 'rgba(255, 255, 255, 0.5)',
  whiteAlpha60: 'rgba(255, 255, 255, 0.4)',
  whiteAlpha70: 'rgba(255, 255, 255, 0.3)',
  whiteAlpha80: 'rgba(255, 255, 255, 0.2)',
  whiteAlpha90: 'rgba(255, 255, 255, 0.1)',
  neutralLight98: '#fbfbfb',
  neutralLight90: '#eceeee',
  neutralLight80: '#dadedf',
  neutralLight60: '#b6bdbf',
  neutralLight40: '#9da7a9',
  neutralLight30: '#879091',
  neutralLight20: '#6f7778',
  neutralAlpha45: 'rgba(74, 92, 96, 0.45)',
  neutral: '#4a5c60',
  neutralDark40: '#2c3739',
  neutralDark60: '#1d2426',
  blackAlpha10: 'rgba(0, 0, 0, 0.9)',
  blackAlpha20: 'rgba(0, 0, 0, 0.8)',
  blackAlpha30: 'rgba(0, 0, 0, 0.7)',
  blackAlpha40: 'rgba(0, 0, 0, 0.6)',
  blackAlpha50: 'rgba(0, 0, 0, 0.5)',
  blackAlpha60: 'rgba(0, 0, 0, 0.4)',
  blackAlpha70: 'rgba(0, 0, 0, 0.3)',
  blackAlpha80: 'rgba(0, 0, 0, 0.2)',
  blackAlpha90: 'rgba(0, 0, 0, 0.1)',
  black: '#000000',
  info: '#80b0e2',
  success: '#00b28e',
  warning: '#ea9b3e',
  danger: '#c64840',
  dangerDark5: '#bb443c',
  dangerDark20: '#9e3933',
  dangerDark40: '#762b26',
  transparent: 'transparent',
  error: '#c64840',
  borderDefault: '#afdedc',
  facebook: '#3c5997',
  google: '#c64840',
  statusCreated: '#c64840',
  statusPreparing: '#ea9b3e',
  statusDelivering: '#0c9abe',
  statusDelivered: '#00b28e',
  iosKeyboard: '#f8f8f8',
  iosKeyboardText: '#4f75c2',
};

function hexToRgbA(hex, alpha = 1) {
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      alpha +
      ')'
    );
  }
  throw new Error('Bad Hex');
}

export default colors;
