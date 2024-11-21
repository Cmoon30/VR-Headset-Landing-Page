import React from 'react';

function GradientTitle({ title }) {
   return (
      <span className="text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
         {title}
      </span>
   );
}

export default GradientTitle;
