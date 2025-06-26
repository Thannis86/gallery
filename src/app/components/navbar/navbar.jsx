import { Box, Separator, Text, DropdownMenu, Button } from "@radix-ui/themes";

import "./navbar.css";

export default function NavBar() {
  return (
    <Box id="navBar">
      <Text id="logoFiller">Test Text</Text>
      <Separator my=".5" size="4" id="navSep" />
      <Box id="dropDown">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button>
              Options
              <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item shortcut="⌘ E">View Profile</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>Account</DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item>Edit Profile</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ ⌫" color="red"></DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Box>
    </Box>
  );
}
