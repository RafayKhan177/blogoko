"use client";
import {
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  rem,
  useMantineTheme,
} from "@mantine/core";
import classes from "./FeaturesImages.module.css";

export default function Features({ categories }) {
  const theme = useMantineTheme();
  const items = categories.map((item) => (
    <div className={classes.item} key={item.title}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <item.icon
          style={{ width: rem(22), height: rem(22) }}
          color={theme.colors.blue[6]}
        />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Container size={900} className={classes.wrapper}>
      <Text className={classes.supTitle}>Use cases</Text>

      <Title className={classes.title} order={2}>
        PharmLand is <span className={classes.highlight}>not</span> just for
        pharmacists
      </Title>

      <Container size={760} p={0}>
        <Text c="dimmed" className={classes.description}>
          Its lungs contain an organ that creates electricity.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 3 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
