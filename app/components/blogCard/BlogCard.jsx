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
import { useRouter } from "next/navigation";

const image =
  "https://img.freepik.com/free-photo/female-hands-are-writing-notebook-flat-lay-conceptual-minimalism_169016-18185.jpg?w=826&t=st=1695469741~exp=1695470341~hmac=febb41317c442d6054b380ebbd3f06c545a4777d8c992c794314f532c22ccaf3";

export default function BlogCard({ blog }) {
  const router = useRouter();
  const handleNavigate = (url) => {
    router.push(url);
  };

  const features =
    blog.tags &&
    blog.tags.map((tag, index) => (
      <Badge variant="light" key={index} leftSection={tag.emoji || "not found"}>
        {tag.label || "not found"}
      </Badge>
    ));

  return (
    <Card
      withBorder
      radius="md"
      p="md"
      className={classes.card}
      style={{ maxWidth: 400 }}
    >
      <Card.Section>
        <Image
          src={blog?.image || image}
          alt={blog?.title || "not found"}
          height={180}
        />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {blog?.title || "not found"}
          </Text>
          <Badge size="sm" variant="light">
            {blog?.PublishedDate || "not found"}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          <TextWithLimit
            text={blog.description || "not found"}
            charLimit={90}
          />
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={7} mt={5}>
          {blog.category || null}
          {features || null}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button
          radius="md"
          style={{ flex: 1 }}
          onClick={() => handleNavigate(`/blog/${blog.id}`)}
        >
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
    text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
  return <span>{truncatedText}</span>;
}
