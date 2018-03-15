export interface easeMapInterface {
  [key: string]: string;
}

const easeMap: easeMapInterface = {
  'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
  'ease-out': 'cubic-bezier(0, 0, 0.58, 1)',
  'ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
  'ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
}

export { easeMap as default }
