import React from 'react';
import { Box, BoxProps, Button, FormGroup, H2, H5, Illustration, Input, Label, MadeWithLove, MessageBox, Text } from '@adminjs/design-system';

const SidebarFooter: React.FC<{}> = () => {
  return (
    <>
      <Box mt='lg' mb='md' data-css='sidebar-footer' style={{ display: 'flex', justifyContent: 'center', padding: '20px', alignItems: 'center' }}>
        <p style={{ display: 'flex', gap: '5px' }}>
          Made with <span style={{ color: '#3040d6', fontWeight: 'bolder', fontSize: '20px' }}> ❤ </span> by our team
        </p>
      </Box>
    </>
  );
};

export default SidebarFooter;
