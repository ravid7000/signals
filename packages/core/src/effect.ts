import { sharedState } from './shared';

export function effect(fn: () => void) {
  if (typeof fn !== 'function') {
    throw new Error('Effect must be a function');
  }

  sharedState.setCurrent(fn);
  fn();
  sharedState.setCurrent(null);
}
