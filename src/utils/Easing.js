const Easing = {};

Easing.linear = function easeLinear(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange * (elapsed /= duration) + initialValue;
};

Easing.easeInQuad = function easeInQuad(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange * (elapsed /= duration) * elapsed + initialValue;
};

Easing.easeOutQuad = function easeOutQuad(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return -amountOfChange * (elapsed /= duration) * (elapsed - 2) + initialValue;
};

Easing.easeInOutQuad = function easeInOutQuad(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * elapsed * elapsed + initialValue;
  }
  return (-amountOfChange / 2) * (--elapsed * (elapsed - 2) - 1) + initialValue;
};

Easing.easeInCubic = function easeInCubic(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange * (elapsed /= duration) * elapsed * elapsed + initialValue;
};

Easing.easeOutCubic = function easeOutCubic(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed + 1) + initialValue;
};

Easing.easeInOutCubic = function easeInOutCubic(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * elapsed * elapsed * elapsed + initialValue;
  }
  return (amountOfChange / 2) * ((elapsed -= 2) * elapsed * elapsed + 2) + initialValue;
};

Easing.easeInQuart = function easeInQuart(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange * (elapsed /= duration) * elapsed * elapsed * elapsed + initialValue;
};

Easing.easeOutQuart = function easeOutQuart(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return -amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed * elapsed - 1) + initialValue;
};

Easing.easeInOutQuart = function easeInOutQuart(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * elapsed * elapsed * elapsed * elapsed + initialValue;
  }
  return (-amountOfChange / 2) * ((elapsed -= 2) * elapsed * elapsed * elapsed - 2) + initialValue;
};

Easing.easeInQuint = function easeInQuint(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange * (elapsed /= duration) * elapsed * elapsed * elapsed * elapsed + initialValue;
};

Easing.easeOutQuint = function easeOutQuint(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return (
    amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * elapsed * elapsed * elapsed + 1) + initialValue
  );
};

Easing.easeInOutQuint = function easeInOutQuint(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * elapsed * elapsed * elapsed * elapsed * elapsed + initialValue;
  }
  return (amountOfChange / 2) * ((elapsed -= 2) * elapsed * elapsed * elapsed * elapsed + 2) + initialValue;
};

Easing.easeInSine = function easeInSine(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return -amountOfChange * Math.cos((elapsed / duration) * (Math.PI / 2)) + amountOfChange + initialValue;
};

Easing.easeOutSine = function easeOutSine(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange * Math.sin((elapsed / duration) * (Math.PI / 2)) + initialValue;
};

Easing.easeInOutSine = function easeInOutSine(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return (-amountOfChange / 2) * (Math.cos((Math.PI * elapsed) / duration) - 1) + initialValue;
};

Easing.easeInExpo = function easeInExpo(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return elapsed === 0 ? initialValue : amountOfChange * Math.pow(2, 10 * (elapsed / duration - 1)) + initialValue;
};

Easing.easeOutExpo = function easeOutExpo(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return elapsed === duration
    ? initialValue + amountOfChange
    : amountOfChange * (-Math.pow(2, (-10 * elapsed) / duration) + 1) + initialValue;
};

Easing.easeInOutExpo = function easeInOutExpo(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  if (elapsed === 0) {
    return initialValue;
  }
  if (elapsed === duration) {
    return initialValue + amountOfChange;
  }
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * Math.pow(2, 10 * (elapsed - 1)) + initialValue;
  }
  return (amountOfChange / 2) * (-Math.pow(2, -10 * --elapsed) + 2) + initialValue;
};

Easing.easeInCirc = function easeInCirc(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return -amountOfChange * (Math.sqrt(1 - (elapsed /= duration) * elapsed) - 1) + initialValue;
};

Easing.easeOutCirc = function easeOutCirc(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange * Math.sqrt(1 - (elapsed = elapsed / duration - 1) * elapsed) + initialValue;
};

Easing.easeInOutCirc = function easeInOutCirc(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  if ((elapsed /= duration / 2) < 1) {
    return (-amountOfChange / 2) * (Math.sqrt(1 - elapsed * elapsed) - 1) + initialValue;
  }
  return (amountOfChange / 2) * (Math.sqrt(1 - (elapsed -= 2) * elapsed) + 1) + initialValue;
};

Easing.easeInElastic = function easeInElastic(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  let s = 1.70158;
  let p = 0;
  let a = amountOfChange;
  if (elapsed === 0) {
    return initialValue;
  }
  if ((elapsed /= duration) === 1) {
    return initialValue + amountOfChange;
  }
  if (!p) {
    p = duration * 0.3;
  }
  if (a < Math.abs(amountOfChange)) {
    a = amountOfChange;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(amountOfChange / a);
  }
  return (
    -(a * Math.pow(2, 10 * (elapsed -= 1)) * Math.sin(((elapsed * duration - s) * (2 * Math.PI)) / p)) + initialValue
  );
};

Easing.easeOutElastic = function easeOutElastic(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  let s = 1.70158;
  let p = 0;
  let a = amountOfChange;
  if (elapsed === 0) {
    return initialValue;
  }
  if ((elapsed /= duration) === 1) {
    return initialValue + amountOfChange;
  }
  if (!p) {
    p = duration * 0.3;
  }
  if (a < Math.abs(amountOfChange)) {
    a = amountOfChange;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(amountOfChange / a);
  }
  return (
    a * Math.pow(2, -10 * elapsed) * Math.sin(((elapsed * duration - s) * (2 * Math.PI)) / p) +
    amountOfChange +
    initialValue
  );
};

Easing.easeInOutElastic = function easeInOutElastic(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  let s = 1.70158;
  let p = 0;
  let a = amountOfChange;
  if (elapsed === 0) {
    return initialValue;
  }
  if ((elapsed /= duration / 2) === 2) {
    return initialValue + amountOfChange;
  }
  if (!p) {
    p = duration * (0.3 * 1.5);
  }
  if (a < Math.abs(amountOfChange)) {
    a = amountOfChange;
    s = p / 4;
  } else {
    s = (p / (2 * Math.PI)) * Math.asin(amountOfChange / a);
  }
  if (elapsed < 1) {
    return (
      -0.5 * (a * Math.pow(2, 10 * (elapsed -= 1)) * Math.sin(((elapsed * duration - s) * (2 * Math.PI)) / p)) +
      initialValue
    );
  }
  return (
    a * Math.pow(2, -10 * (elapsed -= 1)) * Math.sin(((elapsed * duration - s) * (2 * Math.PI)) / p) * 0.5 +
    amountOfChange +
    initialValue
  );
};

Easing.easeInBack = function easeInBack(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0, s = 1.70158) {
  return amountOfChange * (elapsed /= duration) * elapsed * ((s + 1) * elapsed - s) + initialValue;
};

Easing.easeOutBack = function easeOutBack(
  elapsed = 0,
  initialValue = 0,
  amountOfChange = 0,
  duration = 0,
  s = 1.70158,
) {
  return amountOfChange * ((elapsed = elapsed / duration - 1) * elapsed * ((s + 1) * elapsed + s) + 1) + initialValue;
};

Easing.easeInOutBack = function easeInOutBack(
  elapsed = 0,
  initialValue = 0,
  amountOfChange = 0,
  duration = 0,
  s = 1.70158,
) {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * (elapsed * elapsed * (((s *= 1.525) + 1) * elapsed - s)) + initialValue;
  }
  return (amountOfChange / 2) * ((elapsed -= 2) * elapsed * (((s *= 1.525) + 1) * elapsed + s) + 2) + initialValue;
};

Easing.easeInBounce = function easeInBounce(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  return amountOfChange - Easing.easeOutBounce(duration - elapsed, 0, amountOfChange, duration) + initialValue;
};

Easing.easeOutBounce = function easeOutBounce(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  if ((elapsed /= duration) < 1 / 2.75) {
    return amountOfChange * (7.5625 * elapsed * elapsed) + initialValue;
  } else if (elapsed < 2 / 2.75) {
    return amountOfChange * (7.5625 * (elapsed -= 1.5 / 2.75) * elapsed + 0.75) + initialValue;
  } else if (elapsed < 2.5 / 2.75) {
    return amountOfChange * (7.5625 * (elapsed -= 2.25 / 2.75) * elapsed + 0.9375) + initialValue;
  } else {
    return amountOfChange * (7.5625 * (elapsed -= 2.625 / 2.75) * elapsed + 0.984375) + initialValue;
  }
};

Easing.easeInOutBounce = function easeInOutBounce(elapsed = 0, initialValue = 0, amountOfChange = 0, duration = 0) {
  if (elapsed < duration / 2) {
    return Easing.easeInBounce(elapsed * 2, 0, amountOfChange, duration) * 0.5 + initialValue;
  }
  return (
    Easing.easeOutBounce(elapsed * 2 - duration, 0, amountOfChange, duration) * 0.5 +
    amountOfChange * 0.5 +
    initialValue
  );
};

export default Easing;
