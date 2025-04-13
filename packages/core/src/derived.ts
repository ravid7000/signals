import { effect } from './effect';
import { Signal } from './signal';

export function derived<R>(fn: () => R) {
  if (typeof fn !== 'function') {
    throw new Error('Derived must be a function');
  }

  const signal = Signal<R>(0 as unknown as R);
  effect(() => {
    signal.value = fn();
  });

  return signal;
}
