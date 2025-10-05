import { Group } from "@mui/icons-material";
import { AppBar, Box, Container, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
        sx={{
          backgroundImage: 'linear-gradient(135deg, #182A73 0%, #218AAE 69%, #20A7AC 89%)'
        }}>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize='large' />
                <Typography variant="h4" fontWeight='bold' >Reactivities</Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <MenuItemLink to='/activities' >
                Activities
              </MenuItemLink>
              <MenuItemLink to='/createActivity' >
                Create Activity
              </MenuItemLink>
            </Box>
            <MenuItem
            >User menu</MenuItem>
          </Toolbar>
        </Container>
      </AppBar>
    </Box >
  )
}

