import React from 'react';
import { Box, BoxProps, Button, FormGroup, H2, H5, Illustration, Input, Label, MadeWithLove, MessageBox, Text } from '@adminjs/design-system';

const SidebarFooter: React.FC<{}> = () => {
  return (
    <>
      <Box mt='lg' mb='md' data-css='sidebar-footer' style={{ display: 'flex', justifyContent: 'center' }}>
        <p>Made with love</p>
      </Box>
    </>
  );
};

export default SidebarFooter;
