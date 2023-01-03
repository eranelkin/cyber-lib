import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import NA from '../../NA/NA';

const VerticalItemEmptyState: React.FC = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <NA style={{ marginRight: 10 }} />
      <Skeleton animation={false} width={160} height={7} />
    </div>
  );
};

export default VerticalItemEmptyState;
