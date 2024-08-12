import { IgIcon, FbIcon, TwIcon, MailIcon, PhoneIcon } from "./iconList";

interface IconProps {
  name: "Facebook" | "Instagram" | "Twitter" | "Phone" | "Mail" | string;
  width: number;
  height: number;
  color: string;
}

export const Icon = (props: IconProps) => {
  return (
    <>
      {props.name === "Instagram" ? (
        <IgIcon color={props.color} height={props.height} width={props.width} />
      ) : props.name === "Facebook" ? (
        <FbIcon color={props.color} height={props.height} width={props.width} />
      ) : props.name === "Twitter" ? (
        <TwIcon color={props.color} height={props.height} width={props.width} />
      ) : props.name === "Phone" ? (
        <PhoneIcon
          color={props.color}
          height={props.height}
          width={props.width}
        />
      ) : props.name === "Mail" ? (
        <MailIcon
          color={props.color}
          height={props.height}
          width={props.width}
        />
      ) : null}
    </>
  );
};
