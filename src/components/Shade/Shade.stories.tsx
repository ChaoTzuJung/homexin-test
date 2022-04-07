import { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { Shade } from "./Shade";

export default {
  title: "Components/Shade",
  component: Shade,
  argsType: {},
} as ComponentMeta<typeof Shade>;

const Template: ComponentStory<typeof Shade> = (args) => (
  <Shade {...args}>{args.children}</Shade>
);

export const Default: ComponentStory<typeof Shade> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setIsOpen(args.open);
  }, [args.open]);

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        SHOW BACKDROP
      </Button>
      <Shade {...args} open={isOpen} onClick={handleClose}>
        <Card style={{ width: "300px", height: "300px" }} color="#FFF">
          我是客製化卡片
        </Card>
      </Shade>
    </>
  );
};
