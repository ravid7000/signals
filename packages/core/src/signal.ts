import { sharedState } from './shared';

export function Signal<T>(value: T) {
  const subscribers = new Set<() => void>();

  return {
    get value() {
      if (sharedState.value.current) {
        subscribers.add(sharedState.value.current);
      }

      return value;
    },
    set value(newValue: T) {
      if (typeof Object.is === 'function' && !Object.is(value, newValue)) {
        value = newValue;

        subscribers.forEach((subscriber) => {
          subscriber();
        });
      }
    },
  };
}
