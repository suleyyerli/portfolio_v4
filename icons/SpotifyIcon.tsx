import { ComponentPropsWithoutRef } from "react";

export const SpotifyIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <title>Spotify</title>
      <g>
        <path
          d="M127.999236,0 C57.3087105,0 0,57.3085507 0,128.000764 C0,198.696035 57.3087105,256 127.999236,256 C198.697403,256 256,198.696035 256,128.000764 C256,57.3131363 198.697403,0.00611405337 127.997707,0.00611405337 L127.999236,0 Z M186.69886,184.613841 C184.406145,188.373984 179.48445,189.566225 175.724397,187.258169 C145.671485,168.900724 107.838626,164.743168 63.2835265,174.923067 C58.990035,175.901315 54.7102999,173.211132 53.7320747,168.916009 C52.7492641,164.620887 55.428684,160.34105 59.7328748,159.362801 C108.491286,148.222996 150.314998,153.019471 184.054595,173.639116 C187.814648,175.947171 189.00686,180.853699 186.69886,184.613841 L186.69886,184.613841 Z M202.365748,149.76068 C199.476927,154.456273 193.33245,155.938931 188.640026,153.050041 C154.234012,131.90153 101.787386,125.776777 61.0916907,138.130222 C55.8138602,139.724462 50.2395052,136.749975 48.6376614,131.481189 C47.0480455,126.203233 50.0239899,120.639444 55.2926496,119.034505 C101.778216,104.929384 159.568396,111.761839 199.079523,136.042273 C203.771946,138.931163 205.254569,145.075787 202.365748,149.762209 L202.365748,149.76068 Z M203.710807,113.467659 C162.457218,88.964062 94.394144,86.7110334 55.0068244,98.6655362 C48.6819873,100.58382 41.9933726,97.0132133 40.0766627,90.6882251 C38.1599527,84.3601798 41.7274177,77.675991 48.0568402,75.7531212 C93.2707135,62.0270714 168.433562,64.6790421 215.929451,92.8755277 C221.63067,96.2520136 223.495412,103.599577 220.117478,109.281061 C216.754829,114.970188 209.38757,116.845674 203.716921,113.467659 L203.710807,113.467659 Z"
          fill="#a6d189"
        ></path>
      </g>
    </svg>
  );
};