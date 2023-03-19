import * as ReactIcons from "react-icons/hi";

export const HeroIcon: Component.HeroIcon = ({ name, size, ...props }) => {
  const IconComponent = ReactIcons[name];

  return (
    <div {...props} className="shrink-0">
      <IconComponent size={size} />
    </div>
  );
};
