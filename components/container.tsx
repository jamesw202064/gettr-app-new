import React, { forwardRef } from 'react';

interface ContainerProps {
  size?: 'small' | 'default' | 'medium' | 'large' | 'none';
  className?: string;
}

export const Container: React.FC<ContainerProps & { ref?: React.Ref<HTMLDivElement> }> = forwardRef<
  HTMLDivElement,
  ContainerProps
>(({ children, size = 'medium', className = '' }, ref) => {
  const verticalPadding = {
    small: 'py-8',
    default: 'py-8 md:py-12',
    medium: 'py-8 md:py-16',
    large: 'py-16 md:py-32'
  };
  const boxPadding = 'px-6 ' + (verticalPadding[size] ? verticalPadding[size] : '');
//   max-w-7xl 
  return (
    <div ref={ref} className={`mx-auto ${className} ${boxPadding}`}>
      {children}
    </div>
  );
});
