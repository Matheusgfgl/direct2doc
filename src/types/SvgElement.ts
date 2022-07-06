export default interface SvgInterface {
  width: string | number,
  height: string | number,
  viewBox: string,
  title: string,
  color?: string,
}

const SvgInitialValue: SvgInterface = {
  width: '24',
  height: '24',
  viewBox: '0 0 24 24',
  title: '',
  color: '#000',
};

export { SvgInitialValue }