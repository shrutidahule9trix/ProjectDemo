/** @format */

import { color } from 'echarts';
import * as React from 'react';
import { useState, setClicks } from 'react';

function SystemAttribute() {
  const [likes, setLikes] = useState(0);
  const handleClick = () => {
    setClicks(likes + 1);
  };

  return <button onClick={handleClick}>Likes:{likes}</button>;
}
export default SystemAttribute;
