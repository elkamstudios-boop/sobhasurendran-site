/* @ds-bundle: {"format":3,"namespace":"CivicIndigoDesignSystem_54d913","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ElectionResultBar","sourcePath":"components/election/ElectionResultBar.jsx"},{"name":"StatBadge","sourcePath":"components/election/StatBadge.jsx"},{"name":"PhotoFrame","sourcePath":"components/media/PhotoFrame.jsx"},{"name":"AchievementChip","sourcePath":"components/profile/AchievementChip.jsx"},{"name":"ContactItem","sourcePath":"components/profile/ContactItem.jsx"},{"name":"Eyebrow","sourcePath":"components/typography/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/typography/SectionHeading.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ed4045525f7a","components/election/ElectionResultBar.jsx":"8c5c27b93f61","components/election/StatBadge.jsx":"69cb2c848542","components/media/PhotoFrame.jsx":"ea8d80628c60","components/profile/AchievementChip.jsx":"abfb9411818d","components/profile/ContactItem.jsx":"74b04a078a40","components/typography/Eyebrow.jsx":"bf6a45aec723","components/typography/SectionHeading.jsx":"4419210db3a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CivicIndigoDesignSystem_54d913 = window.CivicIndigoDesignSystem_54d913 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Civic Indigo pill CTA.
 * Variants: primary (gold), secondary (indigo), ghost (outline on light).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as = 'button',
  ...rest
}) {
  const pad = size === 'lg' ? '15px 30px' : size === 'sm' ? '8px 18px' : '12px 24px';
  const fs = size === 'lg' ? 18 : size === 'sm' ? 14 : 16;
  const palettes = {
    primary: {
      background: 'var(--c-gold-500)',
      color: 'var(--c-ink)',
      border: '2px solid transparent'
    },
    secondary: {
      background: 'var(--c-indigo-700)',
      color: '#fff',
      border: '2px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--c-indigo-700)',
      border: '2px solid var(--c-indigo-700)'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: fs,
    letterSpacing: '0.01em',
    padding: pad,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform .12s ease, filter .12s ease, box-shadow .12s ease',
    boxShadow: variant === 'ghost' ? 'none' : 'var(--shadow-sm)',
    ...p
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: style,
    onMouseDown: e => e.currentTarget.style.transform = 'translateY(1px)',
    onMouseUp: e => e.currentTarget.style.transform = 'translateY(0)',
    onMouseEnter: e => e.currentTarget.style.filter = 'brightness(0.96)',
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/election/StatBadge.jsx
try { (() => {
/**
 * StatBadge — the big election multiplier with an upward triangle.
 * e.g. "3x ▲ / INCREASE IN BJP VOTES". The numeral is the loudest
 * element on the page: black-weight Montserrat in indigo.
 */
function StatBadge({
  value = '2x',
  caption = 'Increase in BJP votes',
  size = 'md',
  onDark = false
}) {
  const num = size === 'lg' ? 64 : size === 'sm' ? 40 : 52;
  const tri = Math.round(num * 0.62);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: num,
      letterSpacing: '-0.02em',
      color: onDark ? '#fff' : 'var(--c-indigo-700)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--c-positive)',
      fontSize: tri,
      lineHeight: 1
    }
  }, "\u25B2")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 13,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-dim)' : 'var(--text-muted)',
      maxWidth: 130
    }
  }, caption));
}
Object.assign(__ds_scope, { StatBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/election/StatBadge.jsx", error: String((e && e.message) || e) }); }

// components/election/ElectionResultBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ElectionResultBar — the signature comparison element.
 * Two (or more) result rows, each a squared 3-cell bar:
 *   [ YEAR ] [ CANDIDATE NAME ] [ VOTES ]
 * The winning row's name cell is indigo; rivals are grey.
 * Vote numerals are deliberately LARGE + BOLD (the headline metric).
 * An optional StatBadge multiplier sits to the right.
 */
function ElectionResultBar({
  rows = [],
  multiplier,
  caption,
  compact = false
}) {
  const cellH = compact ? 40 : 48;
  const yearW = compact ? 120 : 150;
  const Row = ({
    year,
    name,
    votes,
    highlight
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      height: cellH
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: `0 0 ${yearW}px`,
      background: 'var(--bar-meta)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: compact ? 12 : 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, year), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: highlight ? 'var(--bar-name)' : 'var(--bar-name-rival)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 12px',
      fontFamily: 'var(--font-display)',
      fontWeight: highlight ? 800 : 600,
      fontSize: compact ? 12 : 13.5,
      letterSpacing: '0.03em',
      textTransform: 'uppercase',
      textAlign: 'center'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: `0 0 ${compact ? 150 : 184}px`,
      background: 'var(--bar-meta)',
      color: '#fff',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'center',
      gap: 6,
      fontFamily: 'var(--font-display)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 900,
      fontSize: compact ? 20 : 24,
      letterSpacing: '-0.01em'
    }
  }, votes), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: compact ? 10 : 11,
      letterSpacing: '0.08em',
      opacity: 0.85
    }
  }, "VOTES")));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: compact ? 16 : 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement(Row, _extends({
    key: i
  }, r)))), multiplier && /*#__PURE__*/React.createElement(__ds_scope.StatBadge, {
    value: multiplier,
    caption: caption,
    size: compact ? 'sm' : 'md'
  }));
}
Object.assign(__ds_scope, { ElectionResultBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/election/ElectionResultBar.jsx", error: String((e && e.message) || e) }); }

// components/media/PhotoFrame.jsx
try { (() => {
/**
 * PhotoFrame — rounded, shadowed image container with object-fit cover.
 * Optional indigo or gold corner accent block (replaces the source's
 * orange offset rectangle).
 */
function PhotoFrame({
  src,
  alt = '',
  ratio = '4 / 3',
  accent = 'none',
  radius = 'md',
  style
}) {
  const radii = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    none: '0'
  };
  const accentColor = accent === 'gold' ? 'var(--c-gold-500)' : accent === 'indigo' ? 'var(--c-indigo-700)' : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, accentColor && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -14,
      bottom: -14,
      width: '62%',
      height: '62%',
      background: accentColor,
      borderRadius: radii[radius],
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      aspectRatio: ratio,
      borderRadius: radii[radius],
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      background: 'var(--c-indigo-050)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/profile/AchievementChip.jsx
try { (() => {
/**
 * AchievementChip — squared, centered list chip used for issue lists,
 * roles held, and positions. Alternate `tone` down a column for rhythm
 * (the source alternated two fills; here indigo ↔ gold ↔ ink).
 */
function AchievementChip({
  children,
  tone = 'indigo',
  align = 'center'
}) {
  const tones = {
    indigo: {
      background: 'var(--c-indigo-700)',
      color: '#fff'
    },
    ink: {
      background: 'var(--c-ink)',
      color: '#fff'
    },
    gold: {
      background: 'var(--c-gold-500)',
      color: 'var(--c-ink)'
    },
    tint: {
      background: 'var(--c-indigo-050)',
      color: 'var(--c-indigo-700)'
    }
  };
  const t = tones[tone] || tones.indigo;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...t,
      borderRadius: 'var(--radius-0)',
      padding: '14px 18px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.2,
      textAlign: align,
      letterSpacing: '0.005em'
    }
  }, children);
}
Object.assign(__ds_scope, { AchievementChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/AchievementChip.jsx", error: String((e && e.message) || e) }); }

// components/profile/ContactItem.jsx
try { (() => {
const ICONS = {
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.6"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"
  }),
  social: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.3",
    cy: "6.7",
    r: "1.1",
    fill: "currentColor",
    stroke: "none"
  })),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4 7 8 6 8-6"
  }))
};

/**
 * ContactItem — line icon + text row, used in the resume contact block.
 * Icons are inlined Lucide-style strokes (pin / phone / social / mail).
 */
function ContactItem({
  icon = 'pin',
  children,
  onDark = false
}) {
  const color = onDark ? 'rgba(255,255,255,0.92)' : 'var(--text-body)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: onDark ? 'var(--c-gold-500)' : 'var(--c-indigo-700)',
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: '0 0 auto',
      marginTop: 1
    }
  }, ICONS[icon] || ICONS.pin), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-small)',
      lineHeight: 1.45,
      color
    }
  }, children));
}
Object.assign(__ds_scope, { ContactItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/profile/ContactItem.jsx", error: String((e && e.message) || e) }); }

// components/typography/Eyebrow.jsx
try { (() => {
/**
 * Eyebrow — tracked, uppercase micro-label. Use standalone above blocks,
 * or for kicker labels on cards.
 */
function Eyebrow({
  children,
  onDark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--c-gold-500)' : 'var(--accent-strong)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/typography/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — eyebrow + ALL-CAPS Montserrat title.
 * The workhorse heading for resume pages ("ABOUT ME", "LEADERSHIP EXPERIENCE").
 */
function SectionHeading({
  eyebrow,
  children,
  align = 'left',
  onDark = false,
  size = 'md'
}) {
  const fs = size === 'lg' ? 'var(--fs-h1)' : size === 'sm' ? 'var(--fs-h2)' : 36;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--c-gold-500)' : 'var(--accent-strong)',
      marginBottom: 10
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: fs,
      lineHeight: 'var(--lh-tight)',
      letterSpacing: '-0.01em',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/typography/SectionHeading.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ElectionResultBar = __ds_scope.ElectionResultBar;

__ds_ns.StatBadge = __ds_scope.StatBadge;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.AchievementChip = __ds_scope.AchievementChip;

__ds_ns.ContactItem = __ds_scope.ContactItem;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

})();
