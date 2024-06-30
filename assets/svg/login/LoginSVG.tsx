import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const LoginSVG = (props) => (
  <Svg
    width={480}
    height={350}
    viewBox="0 0 480 350"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_79_455)">
      <G
        style={{
          mixBlendMode: "multiply",
        }}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H475V324.397C460.849 332.784 444.503 339.31 426.333 343.68C375.787 355.837 315.272 350.314 258.099 328.327L258.104 328.343C228.326 316.366 193.779 309.874 158.202 309.874C134.799 309.874 91.3968 277.806 48.0501 245.78L48.0498 245.78C31.6641 233.673 15.2864 221.573 0 211.212V0Z"
          fill="#512BCF"
          fillOpacity={0.3}
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M600 0H0V311.035C17.8746 319.077 38.5227 325.334 61.4738 329.524C125.321 341.18 201.762 335.885 273.98 314.803L273.974 314.818C311.588 303.335 355.227 297.11 400.166 297.11C463.818 297.11 524.863 309.599 569.871 331.829C581.191 337.42 591.264 343.512 600 350V0Z"
        fill="#8A67FF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M480 0H0V311.035C14.2997 319.077 30.8181 325.334 49.1791 329.524C100.257 341.18 161.41 335.885 219.184 314.803L219.179 314.818C249.27 303.335 284.182 297.11 320.133 297.11C371.054 297.11 419.89 309.599 455.897 331.829C464.953 337.42 473.011 343.513 480 350V0Z"
        fill="#512BCF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_79_455">
        <Rect width={480} height={350} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LoginSVG;
