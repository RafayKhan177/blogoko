import React from "react";
import { Image, Accordion, Grid, Container, Text } from "@mantine/core";
import classes from "./QandA.module.css";

const image =
  "https://img.freepik.com/free-vector/faqs-concept-illustration_114360-6685.jpg?w=826&t=st=1695301189~exp=1695301789~hmac=9030c815de50c26a33da8f1ad4a58e2fc478545f4961e7943254785831436dfd";

export default function QandA({ qa }) {
    console.log(qa)
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Text
              align="left"
              size="xl"
              weight={700}
              className={classes.title}
            >
              Frequently Asked Questions
            </Text>

            <Accordion
              chevronPosition="right"
              defaultValue="reset-password"
              variant="outlined"
            >
              {qa.map((qaItem, index) => (
                <Accordion.Item
                  key={index}
                  value={qaItem.question}
                  className={classes.item}
                >
                  <Accordion.Control>{qaItem.question}</Accordion.Control>
                  <Accordion.Panel>{qaItem.answer}</Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
