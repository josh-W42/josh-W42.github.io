import { FunctionComponent } from 'react';
import { TopNavComponent } from './component';
import { useState } from 'react';

export const TopNav: FunctionComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return <TopNavComponent expanded={expanded} toggle={toggleExpanded} />;
};
