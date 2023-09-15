import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Paper,
  } from '@mui/material';
  import { Search as SearchIcon } from '@mui/icons-material';
  

export default function TopBar() {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div">
        BlogSpace
      </Typography>
      <div className="ml-auto flex">
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '400px' }}>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search blogs & authors"
            inputProps={{ 'aria-label': 'search blogs & authors' }}
          />
          <SearchIcon />
        </Paper>
      </div>
    </Toolbar>
  </AppBar>
  )
}
