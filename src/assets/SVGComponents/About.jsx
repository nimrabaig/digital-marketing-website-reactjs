const AboutSVG = ({ fill, style }) => {
  return (
    <svg
      style={{ ...style }}
      width="31"
      height="35"
      viewBox="0 0 31 35"
      fill="none"
      xmlns="https://www.w3.org/2000/svg"
    >
      <path
        d="M22.6638 0C27.9711 0 30.9262 3.05826 30.9262 8.29854V26.0468C30.9262 31.373 27.9711 34.3625 22.6638 34.3625H8.26418C3.04108 34.3625 0 31.373 0 26.0468V8.29854C0 3.05826 3.04108 0 8.26418 0H22.6638ZM8.72807 23.607C8.21264 23.5555 7.71438 23.796 7.43948 24.2427C7.16458 24.6723 7.16458 25.2393 7.43948 25.686C7.71438 26.1155 8.21264 26.3732 8.72807 26.3045H22.1982C22.8837 26.2358 23.4009 25.6499 23.4009 24.9643C23.4009 24.2599 22.8837 23.6758 22.1982 23.607H8.72807ZM22.1982 15.7707H8.72807C7.98756 15.7707 7.38794 16.3737 7.38794 17.1125C7.38794 17.8513 7.98756 18.4527 8.72807 18.4527H22.1982C22.937 18.4527 23.5383 17.8513 23.5383 17.1125C23.5383 16.3737 22.937 15.7707 22.1982 15.7707ZM13.8635 7.98928H8.72807V8.00646C7.98756 8.00646 7.38794 8.6078 7.38794 9.3466C7.38794 10.0854 7.98756 10.6867 8.72807 10.6867H13.8635C14.6041 10.6867 15.2054 10.0854 15.2054 9.3277C15.2054 8.59062 14.6041 7.98928 13.8635 7.98928Z"
        fill={fill || "#292930"}
      />
    </svg>
  );
};

export default AboutSVG;
