import { IconHeart, IconShare } from "@tabler/icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  Grid,
} from "@mantine/core";
import classes from "./BlogCard.module.css";
import { useRouter } from "next/navigation";
import { Container } from "@mui/material";

const image =
  "https://img.freepik.com/free-photo/female-hands-are-writing-notebook-flat-lay-conceptual-minimalism_169016-18185.jpg?w=826&t=st=1695469741~exp=1695470341~hmac=febb41317c442d6054b380ebbd3f06c545a4777d8c992c794314f532c22ccaf3";

export default function BlogCard({ blogs }) {
  const router = useRouter();
  const handleNavigate = (url) => {
    router.push(url);
  };

  return (
    <Grid container style={{ width: "100%" }}>
      <Grid item xs={12} sm={4} justify="center">
        {blogs &&
          blogs.map((blog, index) => {
            return (
              <Card
                key={index}
                withBorder
                radius="md"
                p="md"
                className={classes.card}
                style={{ maxWidth: 390 }}
                m={2}
              >
                <Card.Section>
                  <Image
                    src={blog?.image || image}
                    alt={blog?.title || "not found"}
                    height={180}
                  />
                </Card.Section>

                <Card.Section className={classes.section} mt="md">
                  <Group justify="apart" h={40}>
                    <Text fz="lg" fw={500}>
                      <TextWithLimit
                        text={blog?.title || "Title"}
                        charLimit={40}
                      />
                    </Text>
                  </Group>
                  <Group justify="apart" h={40}>
                    <Badge size="sm" variant="light">
                      Published: {blog?.PublishedDate || "Date"}
                    </Badge>
                    <Badge size="sm" variant="filled">
                      Verifeid
                    </Badge>
                  </Group>
                  <Text fz="sm" mt="xs">
                    <TextWithLimit
                      text={blog.description || "Descriptions"}
                      charLimit={100}
                    />
                  </Text>
                </Card.Section>

                <Card.Section className={classes.section}>
                  <Group gap={7} mt={5}>
                    <Text mt="md" className={classes.label} c="dimmed">
                      {blog.category || null}
                    {(blog.tags &&
                      blog.tags.map((tag, index) => (
                        <Badge
                          variant="light"
                          key={index}
                          leftSection={tag.emoji || null}
                        >
                          {tag.tag || null}
                        </Badge>
                      ))) ||
                      null}
                    </Text>
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
                  <ActionIcon variant="default" radius="md" size={36}>
                    <IconShare className={classes.like} stroke={1.5} />
                  </ActionIcon>
                </Group>
              </Card>
            );
          })}
      </Grid>
    </Grid>
  );
}

function TextWithLimit({ text, charLimit }) {
  const truncatedText =
    text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
  return <span>{truncatedText}</span>;
}
