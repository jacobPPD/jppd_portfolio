import "./GlassIcons.css";

const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  teal: "linear-gradient(hsl(183, 90%, 50%), hsl(168, 90%, 50%))",
  pink: "linear-gradient(hsl(343, 90%, 50%), hsl(328, 90%, 50%))",
  yellow: "linear-gradient(hsl(63, 90%, 50%), hsl(48, 90%, 50%))",
  cyan: "linear-gradient(hsl(203, 90%, 50%), hsl(188, 90%, 50%))",
  lime: "linear-gradient(hsl(103, 90%, 50%), hsl(88, 90%, 50%))",
  amber: "linear-gradient(hsl(33, 90%, 50%), hsl(18, 90%, 50%))",
  emerald: "linear-gradient(hsl(143, 90%, 50%), hsl(128, 90%, 50%))",
  violet: "linear-gradient(hsl(263, 90%, 50%), hsl(248, 90%, 50%))",
  rose: "linear-gradient(hsl(323, 90%, 50%), hsl(308, 90%, 50%))",
  sky: "linear-gradient(hsl(213, 90%, 50%), hsl(198, 90%, 50%))",
  fuchsia: "linear-gradient(hsl(303, 90%, 50%), hsl(288, 90%, 50%))",
};

const GlassIcons = ({ items, className }) => {
  const getBackgroundStyle = (color) => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ""}`}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`icon-btn ${item.customClass || ""}`}
          aria-label={item.label}
          type="button"
          data-description={item.label}
        >
          <span
            className="icon-btn__back"
            style={getBackgroundStyle(item.color)}
          ></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">{item.icon}</span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons; 