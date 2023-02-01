import { useState } from "react";

import SVGStar from 'lib/icons/Star';
import st from 'styles/lib/Stars.module.scss';

interface Props {
  rangeTo?: number,
  callback?: (rangeTo:number) => void
}

export default function ({rangeTo, callback}: Props) {
  const numberOfStars = 5;
  const [currRange, setCurrRange] = useState<number>(rangeTo-1);

  function setRange({currentTarget}: React.MouseEvent<HTMLSpanElement> & React.ChangeEvent<HTMLSpanElement>) {
    if(callback) {
      const rangeTo = [...currentTarget.parentNode.children].indexOf(currentTarget);
      setCurrRange(rangeTo);
      callback(rangeTo);
    }
  }

  return (
    <>
      {
        Array.from(new Array(numberOfStars)).map((_, i) => {
          const checkRange = i <= currRange ? st.active : '';
          const checkClickAble = callback !== undefined ? st.clickAble : '';

          return  (
            <span 
              key={i} 
              onClick={rangeTo !== undefined ? setRange : undefined} 
              className={`${st.Stars} ${checkRange} ${checkClickAble}`}>
                <SVGStar/>
            </span>
          );
        })
      }
    </>
  )
}
