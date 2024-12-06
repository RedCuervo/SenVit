import React from "react";
import { HStack, Text, Switch, useColorMode, Box } from "native-base";

function ToggleNightMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={colorMode === "light" ? "light.background.50" : "dark.background.900"} p={3}>
      <HStack space={2} alignItems="center">
        
        <Switch
          isChecked={colorMode === "dark"}
          onToggle={toggleColorMode}
          aria-label={
            colorMode === "light" ? "switch to dark mode" : "switch to light mode"
          }
        />
        
      </HStack>
    </Box>
  );
}

export default ToggleNightMode;