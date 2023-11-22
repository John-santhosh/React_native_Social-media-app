// type FamType =
//   weight: string;
//   baseFont?: string;
// type FamType = (weight: string, baseFont: string) => {};

export const getFontFamily = (weight: string, baseFont = 'Inter') => {
  switch (weight) {
    case '100':
      return `${baseFont}-Thin`;
    case '200':
      return `${baseFont}-ExtraThin`;
    case '300':
      return `${baseFont}-Light`;
    case 'normal':
    case '400':
      return `${baseFont}-Regular`;
    case '500':
      return `${baseFont}-Medium`;
    case '600':
      return `${baseFont}-SemiBold`;
    case 'bold':
    case '700':
      return `${baseFont}-Bold`;
    case '800':
      return `${baseFont}-ExtraBold`;
    case '900':
      return `${baseFont}-Black`;
    default:
      return `${baseFont}-Regular`;
  }
};
