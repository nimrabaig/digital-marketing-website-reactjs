import React from "react";

const SvgLoader = ({
  iconName,
  iconFillColor = "#fff",
  style = {},
  className = "",
  ignoreDefaultColor,
  size,
  onClick,
}) => {
  const Icon = React.lazy(
    async () => await import(`../../assets/SVGComponents/${iconName}`)
  );
  if (Icon) {
    return (
      <React.Suspense fallback={<></>}>
        <Icon
          onClick={onClick}
          className={className}
          fill={ignoreDefaultColor ? undefined : iconFillColor}
          width={`${size}`}
          height={`${size}`}
          style={{ ...style }}
        />
      </React.Suspense>
    );
  }

  return <>There is the problem while loading this picture.</>;
};

export default React.memo(SvgLoader);
