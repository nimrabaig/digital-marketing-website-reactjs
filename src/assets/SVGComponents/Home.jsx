const HomeSVG = ({ fill, style }) => {
  return (
    <svg
    style={{ ...style }}
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6519 30.8464V25.8693C11.6519 24.5988 12.6894 23.5689 13.9692 23.5689H18.6475C19.2621 23.5689 19.8515 23.8112 20.2861 24.2427C20.7207 24.6741 20.9648 25.2592 20.9648 25.8693V30.8464C20.9609 31.3746 21.1696 31.8825 21.5444 32.2573C21.9193 32.6322 22.4294 32.843 22.9615 32.843H26.1532C27.6438 32.8468 29.0748 32.2617 30.1302 31.2166C31.1856 30.1716 31.7788 28.7526 31.7788 27.2727V13.0939C31.7788 11.8985 31.245 10.7647 30.3214 9.99774L19.4637 1.38917C17.5749 -0.120203 14.8688 -0.0714689 13.0365 1.50492L2.42654 9.99774C1.45925 10.7421 0.881109 11.8793 0.852539 13.0939V27.2583C0.852539 30.3426 3.37121 32.843 6.47814 32.843H9.597C10.7021 32.843 11.6002 31.9579 11.6082 30.8608L11.6519 30.8464Z"
        fill={fill || "#292930"}
      />
    </svg>
  );
};

export default HomeSVG;
