import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

interface MySVGProps {
  name: any;
  color: string;
  nameClass?: string;
}

const MySVG: FC<MySVGProps> = ({ name, color, nameClass }) => {
  return (
    <FontAwesomeIcon
      icon={name}
      style={{ color: color }}
      className={nameClass}
    />
  );
};

export default MySVG;
