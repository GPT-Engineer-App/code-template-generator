import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Textarea, useToast } from "@chakra-ui/react";

const Index = () => {
  const [scripts, setScripts] = useState({});
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const toast = useToast();

  const handleAddScript = () => {
    if (!command.trim()) {
      toast({
        title: "Error",
        description: "Command can't be empty",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setScripts({ ...scripts, [command]: output });
    setCommand("");
    setOutput("");
    toast({
      title: "Success",
      description: "Script added",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleRunScript = (cmd) => {
    // In an actual application, you would run the script corresponding to the command
    // For this example, we'll just display a toast notification
    if (scripts[cmd]) {
      toast({
        title: "Running Script",
        description: `Script for command '${cmd}' is running`,
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Error",
        description: `No script found for command '${cmd}'`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading mb={6}>Code Template Tool</Heading>

      <Stack spacing={4}>
        <Textarea placeholder="Enter your script here..." value={output} onChange={(e) => setOutput(e.target.value)} />
        <Input placeholder="Enter command to trigger script..." value={command} onChange={(e) => setCommand(e.target.value)} />
        <Button colorScheme="blue" onClick={handleAddScript}>
          Add Script
        </Button>
      </Stack>

      <Box mt={10}>
        <Heading size="md" mb={4}>
          Added Scripts
        </Heading>
        {Object.keys(scripts).map((key) => (
          <Button key={key} m={1} colorScheme="teal" onClick={() => handleRunScript(key)}>
            {key}
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default Index;
