import { useState, useEffect } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { Dialog } from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argsType: {},
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(args.open);
  }, [args.open]);

  return (
    <>
      <Button onClick={() => setIsOpen((pre) => !pre)} variant="contained">
        open
      </Button>
      <Dialog {...args} open={isOpen} onShadeClick={() => setIsOpen(false)}>
        <Card style={{ width: "300px", height: "300px" }} color="#FFF">
          我是客製化卡片
        </Card>
      </Dialog>
    </>
  );
};
