export const Maths = {
  clampVal(num = 0, min = 0, max = 0) {
    return Math.max(min, Math.min(num, max));
  },
};
