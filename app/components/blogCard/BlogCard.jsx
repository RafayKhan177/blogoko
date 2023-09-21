"use client";
import { IconHeart } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
} from "@mantine/core";
import classes from "./BlogCard.module.css";

export default function BlogCard({ blog }) {
  const features = blog.tags.map((tag) => (
    <Badge variant="light" key={tag.label} leftSection={tag.emoji}>
      {tag.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={blog.image} alt={blog.title} height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {blog.title}
          </Text>
          <Badge size="sm" variant="light">
            {blog.date}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          <TextWithLimit text={blog.description} charLimit={90} />
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {blog.category}
          {blog.tags.map((tag, index) => (
            <Badge key={index} size="sm" variant="light">
              {tag.label}
            </Badge>
          ))}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}

function TextWithLimit({ text, charLimit }) {
  const truncatedText =
    text.length > charLimit ? text.slice(0, charLimit) + '...' : text;
  return (
    <span>{truncatedText}</span>
  );
}
