import Marquee from "@/components/ui/marquee";
import { DockerIcon } from "@/icons/DockerIcon";
import { GithubIcon } from "@/icons/GithubIcon";
import { VscodeIcon } from "@/icons/VscodeIcon";
import { BraveIcon } from "@/icons/BraveIcon";
import { SpotifyIcon } from "@/icons/SpotifyIcon";
import { DiscordIcon } from "@/icons/DiscordIcon";
import { AppleIcon } from "@/icons/AppleIcon";

const icons = [
  { Icon: AppleIcon, name: "Apple" },
  { Icon: DockerIcon, name: "Docker" },
  { Icon: BraveIcon, name: "Brave" },
  { Icon: SpotifyIcon, name: "Spotify" },
  { Icon: DiscordIcon, name: "Discord" },
];

const tools = [
  { Icon: GithubIcon, name: "Github" },
  { Icon: VscodeIcon, name: "VSCode" },
  { Icon: BraveIcon, name: "Brave" },
  { Icon: SpotifyIcon, name: "Spotify" },
  { Icon: DiscordIcon, name: "Discord" },
];

type IconComponentProps = {
  Icon: React.ComponentType<{ className?: string; size?: number }>;
};

const IconComponent = ({ Icon }: IconComponentProps) => {
  return (
    <div className="mx-4">
      <Icon
        className="text-white opacity-75 hover:opacity-100 transition-opacity"
        size={32}
      />
    </div>
  );
};

export function Infinite() {
  return (
    <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black">
      <Marquee pauseOnHover className="[--duration:10s]">
        {icons.map(({ Icon }, index) => (
          <IconComponent key={index} Icon={Icon} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:10s]">
        {tools.map(({ Icon }, index) => (
          <IconComponent key={index} Icon={Icon} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}
