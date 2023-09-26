import { useState, useEffect } from "react";
import { Text, Group, Button, rem, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "./DropzoneButton.module.css";
import Image from "next/image";

export default function DropzoneButton({ onImageSelect, pic }) {
  const theme = useMantineTheme();
  const [selectedPic, setSelectedPic] = useState(null);

  const handleDrop = (files) => {
    const file = files[0];
    if (file) {
      setSelectedPic(file);
      onImageSelect(file);
    }
  };

  const removePic = () => {
    setSelectedPic(null);
  };

  useEffect(() => {
    setSelectedPic(pic);
  }, [pic]);

  return (
    <div className={classes.wrapper}>
      <Dropzone
        onDrop={handleDrop}
        className={`${classes.dropzone} ${selectedPic ? classes.selected : ""}`}
        radius="md"
        accept={[MIME_TYPES.jpeg]}
        maxSize={30 * 1024 ** 2}
      >
        {selectedPic ? (
          <Image
            width={50}
            height={50}
            src={URL.createObjectURL(selectedPic)}
            alt="Selected"
          />
        ) : (
          <div style={{ pointerEvents: "none" }}>
            <Group justify="center">
              <Dropzone.Accept>
                <IconDownload
                  style={{ width: rem(50), height: rem(50) }}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{ width: rem(50), height: rem(50) }}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconCloudUpload
                  style={{ width: rem(50), height: rem(50) }}
                  stroke={1.5}
                />
              </Dropzone.Idle>
            </Group>

            <Text ta="center" fw={700} fz="lg" mt="xl">
              <Dropzone.Accept>Drop files here</Dropzone.Accept>
              <Dropzone.Reject>Image file less than 30mb</Dropzone.Reject>
              <Dropzone.Idle>Upload image</Dropzone.Idle>
            </Text>
            <Text ta="center" fz="sm" mt="xs" c="dimmed">
              Drag'n'drop images here to upload. We can accept only <i>.jpeg</i>{" "}
              files that are less than 30mb in size.
            </Text>
          </div>
        )}
      </Dropzone>

      {selectedPic ? (
        <Button
          className={classes.control}
          size="md"
          radius="xl"
          onClick={removePic}
        >
          Remove Pic
        </Button>
      ) : (
        <Button
          className={classes.control}
          size="md"
          radius="xl"
          onClick={() => {}}
        >
          Select files
        </Button>
      )}
    </div>
  );
}
