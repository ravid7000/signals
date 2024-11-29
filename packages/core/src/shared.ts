function SharedState() {
  const value: {
    current: (() => void) | null;
  } = {
    current: null,
  };
  return {
    value,
    setCurrent: (newValue: (() => void) | null) => {
      value.current = newValue;
    },
  };
}

export const sharedState = SharedState();

export function noop() {}
