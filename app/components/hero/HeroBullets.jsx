"use client";

import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "../../assets/peoplesReadingBooks.jpg";
import classes from "./HeroBullets.module.css";

export default function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Read, learn, & share your
            <span className={classes.highlight}>passion</span> for knowledge.
          </Title>
          <Text c="dimmed" mt="md">
            Welcome to blogooba, a place where you can read and write about the
            things you love. Whether you're interested in technology, travel,
            food, or anything else, we have a blog for you.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Read</b> – Read blogs from experts in a variety of categories.
            </List.Item>
            <List.Item>
              <b>knowledge</b> – Write your own blog and share your knowledge
              with the world.
            </List.Item>
            <List.Item>
              <b>community</b> – Join a community of people who love to learn
              and share.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Source code
            </Button>
          </Group>
        </div>
        <Image src={image.src} alt="hero_image" className={classes.image} />
      </div>
    </Container>
  );
}
