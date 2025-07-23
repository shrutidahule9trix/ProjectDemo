/** @format */

import { Box, Typography } from '@mui/material';
import Symbol from '../../Assets/SVG/symbol';



function Logo() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Symbol width="22" height="22" />
      <Typography sx={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
        Navaantrix BI Admin
      </Typography>
    </Box>
  );
}

export default Logo;
