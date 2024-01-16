import { Form, Input, Modal, Select } from "antd";
import {
  HogwartsHouse,
  HogwartsHouseTableRow,
} from "../queries/hogwarts.types";

interface AddHouseModalProps {
  onSubmit: (values: HogwartsHouseTableRow) => void;
  isOpen: boolean;
  onCancel: () => void;
}

const HouseField = Form.Item<HogwartsHouse>;

const animalOptions = [
  { label: "Giraffe", value: "giraffe" },
  { label: "Dolphin", value: "dolphin" },
  { label: "Armadillo", value: "armadillo" },
  { label: "Unicorn", value: "unicorn" },
];

export const AddHouseModal: React.FC<AddHouseModalProps> = ({
  onSubmit,
  isOpen,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const onOk = ({ animal, commonRoom, ghost, name }: HogwartsHouseTableRow) => {
    form.resetFields();
    onSubmit({ animal, commonRoom, ghost, name });
  };

  const onClose = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      open={isOpen}
      footer={() => <></>}
      onCancel={onClose}
      title="Add house"
    >
      <Form layout="vertical" onFinish={onOk} form={form}>
        <HouseField
          name="name"
          label="Name"
          rules={[{ required: true, max: 20, min: 5 }]}
        >
          <Input />
        </HouseField>
        <HouseField name="animal" label="Animal" rules={[{ required: true }]}>
          <Select options={animalOptions} />
        </HouseField>
        <HouseField
          name="ghost"
          label="Ghost"
          rules={[
            {
              required: true,
              pattern: /^(?!.*arnold).*$/,
              message: "Must not contain the word 'Arnold'",
            },
          ]}
        >
          <Input />
        </HouseField>
        <HouseField name="commonRoom" label="Common Room">
          <Input />
        </HouseField>
        <Form.Item>
          <div className="flex justify-end gap-4">
            <button
              className="bg-transparent border border-primary hover:border-primaryHover transition-all text-primary hover:text-primary px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-primary hover:bg-primaryHover transition-all text-white px-4 py-2 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};
